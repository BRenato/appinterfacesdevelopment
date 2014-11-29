This is a guideline on how to make, process, and describe issues.

##Issue Format
###Title Format
#### Title Prefix
[branch_name"{prefix}-{name}-*"][version"{major}.{minor}.{revision}"]: {title description}

[feature-hmvc][3.1.0]: This issue is an issue, did we do recursion?

####Title Description

When starting the descriptions part of the title it is important to use a verb based on the type of action issue it is going to convey:

**New Stuff**
* Add [new_item{subject}] to [reference_item{subject}]...
* Insert Add [new_item{subject}] into [reference_item{subject}]...

**Reference Suff**
* Update [reference_item{subject}] to [new_item{subject}] from [old_item{subject}]...
* Change [reference_item{subject}] to [new_item{subject}] from [old_item{subject}]...

**Old Stuff**
* Delete [old_item{subject}] from [reference_item{subject}]...
* Remove [old_item{subject}] from [reference_item{subject}]...

#### _Terminology_
* new_item - Item that is currently being added because it does not exist (e.g. Less Compiler, UglifyJS, Clean-CSS, ect.)
* reference_item - Item that thing is currently being referenced and change from something to something that exists (e.g Build Script, Crypsis Template, ect.)
* old_item = Item that is currently being removed because it does exist (e.g. YUICompressor, ect.)

##Label Color Guideline
* All labels that are directly RELATED to Kunena and/or have an ACCEPTED status related to the definition of the label. The label will define a specific color of the normal color spectrum (red, orange, yellow, green, blue, purple) excluding tones of black and white.
* All labels that are directly RELATED to Kunena and/or have an PENDING status related to the definition of the label. The label will define a specific color black excluding tones of the normal color spectrum (red, orange, yellow, green, blue, purple) and white.
* All labels that are directly NOT RELATED to Kunena and/or have an REJECTED status related to the definition of the label.  The label will define a specific color white excluding tones of the normal color spectrum (red, orange, yellow, green, blue, purple) and black.

##Label Descriptions
* \<major\>.\<minor\> Version when the issue was originally created.
* bug - Bug in implementation, does not always return expected behavior.
* crash - Crash in implementation, program does not exit correctly.
* docs - Documentation for current implementation.
information.
* enhance - Current implementation is already in place but can be enhanced to include improved or modified behavior 
* feature - Feature is an accepted proposal for implementation.
* fixed? - Implementation is available, but is the issue fixed regarding the context of the issue.
* joomla - Joomla specific problem.
* proposed - Proposed feature implementation.
* pull - Pending pull request.
* rejected - 
* third party - 
* top -
* unconfirmed - 
