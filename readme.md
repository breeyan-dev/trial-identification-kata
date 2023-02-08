# Trial Identification Kata

Simplified version of a trial identification engine.

---
## Requirements

- This kata is language agnostic as long as you can effectively complete a program that fulfills the acceptance criteria
- There should be a single entry point to the program that can run in a single command to produce the output expected by the acceptance criteria
- The program should be idempotent, if it is run multiple times in a row, the output should be exactly the same
- The input and output of the program is text, so there is not an expectation of a graphical user interface
- Please feel free to email us questions about the acceptance criteria!

#### 1. When the trial identification program is run, the system should log each of the trials that is being processed and the number of patients that are being considered.

_Example:_

```
Processing trial id NCT03840902 for condition Non-small Cell Lung Cancer with 8 potential patients
```

#### 2. When the trial identification program is run, each patient should be evaluated for each trial. The system should log every time this evaluation is happening.

_Example:_
```
Processing patient \<patient_id>, age \<age>, gender \<gender>, with diagnosis \<diagnosis>, for trial NCT03840902
```

#### 3. When a patient is evaulated, they should be checked against each of the criterion defined for the trial.

**Age** - Ensure that the patient's age falls within the defined range of the trial (e.g. greater than 18)

**Diagnosis** - Ensure that the patient's diagnosis matches one of the diagnoses defined on the trial. (note: the diagnosis list is a pipe delimited list within the csv). This match should be case _insensitive_.

**Anatomic Site** - Ensure that the anatomic site provided for the patient's diagnosis matches what is defined within the trial. This match should be case _insensitive_.

#### 4. When a patient is evaluated, they are considered identified for a trial if they meet _all_ of the required criteria. For criteria that are not required, a patient can still considered identified if their data matches or is not provided. If the data is available and does not match the criterion, the patient is _not_ considered identified.

**Age** - Not required

**Diagnosis** - Required

**Anatomic Site** - Required

#### 5. When all the patients are finished, it should log all of the patient's that were identified for each of the trials.

_Example_:
```
The following 2 patients were identified for trial NCT03840902:
 -- Patient 1
 -- Patient 5
```

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Install

    $ git clone git@github.com:breeyan-dev/trial-identification-kata.git
    $ cd trial-identification-kata
    $ npm install

## Running the project

    $ npm start
