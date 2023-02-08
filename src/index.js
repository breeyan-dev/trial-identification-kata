const csvFileLoader = require('./csvFileLoader');
const path = require('path');

// Main function
(async () => {
    const patients = await csvFileLoader(path.join(__dirname, '../data/patient_feed.csv'));
    const clinicalTrials = await csvFileLoader(path.join(__dirname, '../data/clinical_trial.csv'));

    const checkResult = [];

    clinicalTrials.forEach(trial => {
        const clinicalTrialCheckResult = {
            trial_id: trial.trial_id,
            patients: []
        }

        // #### 1. When the trial identification program is run, the system should log each of the trials that is being processed and the number of patients that are being considered.
        console.log(`Processing trial id ${trial.trial_id} for condition ${trial.condition} with ${patients.length} potential patients`)

        const age_requirement = trial.age_requirement
        const diagnoses = trial.diagnoses.split('|').map(diagnosis => diagnosis.toLowerCase())
        const anatomicSite = trial.anatomic_site.toLowerCase()

        patients.forEach(patient => {
            // #### 2. When the trial identification program is run, each patient should be evaluated for each trial. The system should log every time this evaluation is happening.
            console.log(`Processing patient ${patient.patient_id}, age ${patient.age}, gender ${patient.gender}, with diagnosis ${patient.diagnosis}, for trial ${trial.trial_id}`);

            // #### 3. When a patient is evaulated, they should be checked against each of the criterion defined for the trial.
            const isAgeMatch = eval(patient.age) == undefined ? true : eval(patient.age + age_requirement);
            const isDiagnoisMatch = diagnoses.includes(patient.diagnosis.toLowerCase());
            const isAnatomicSiteMatch = (anatomicSite === patient.anatomic_site.toLowerCase());

            // #### 4. When a patient is evaluated, they are considered identified for a trial if they meet _all_ of the required criteria. 
            // For criteria that are not required, a patient can still considered identified if their data matches or is not provided. 
            // If the data is available and does not match the criterion, the patient is _not_ considered identified.
            if (isAgeMatch && isDiagnoisMatch && isAnatomicSiteMatch) {
                clinicalTrialCheckResult.patients.push(patient)
            }
        })

        if (clinicalTrialCheckResult.patients.length > 0) {
            checkResult.push(clinicalTrialCheckResult)
        }
    })

    // #### 5. When all the patients are finished, it should log all of the patient's that were identified for each of the trials.
    checkResult.forEach(result => {
        console.log(`The following ${result.patients.length} patient(s) were identified for trial ${result.trial_id}:`)

        result.patients.forEach(patient => {
            console.log(`\t-- Patient ${patient.patient_id}`)
        })
    })
})();