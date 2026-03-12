---
title: "LearningEvaluationResult Class"
domain: apex-reference
topic: learningevaluationresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.641Z
estimatedTokens: 1215
keywords: [LearningEvaluationResult, user’s, progress, status, custom, exercise, Enablement, program, Usage, getLearningItemProgress, getLearningItemProgressStatus, setLearningItemProgress, learningItemProgress, setLearningItemProgressStatus, learningItemProgressStatus]
---

# LearningEvaluationResult Class

> Represents a user’s progress and progress status of a custom exercise in an Enablement
        program.

# LearningEvaluationResult Class

Represents a user’s progress and progress status of a custom exercise in an Enablement program.

## Namespace

[sfdc\_enablement](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm "The sfdc_enablement namespace provides classes for creating custom learning items to implement custom exercise types in Enablement programs. Lightning web components are used to render the custom exercises on Program Builder.")

## Usage

To calculate the user’s progress through an exercise as a percentage and return the progress status, use the sfdc\_enablement.LearningEvaluationResult class inside the [sfdc\_enablement.LearningItemEvaluationHandler](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_class_sfdc_enablement_LearningItemEvaluationHandler "Contains methods to customize the evaluation process of a learning item."). In your custom code, set the percentages to correspond to these [sfdc\_enablement.LearningItemProgressStatus](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm "Represents the status of a user’s progress for a learning item in an Enablement program.") enum values.

-   NotStarted is equal to 0.00
-   InProgress is from 0.01 through 99.99
-   Completed is equal to 100.00

## Example

See example code in [sfdc\_enablement.LearningItemEvaluationHandler](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_class_sfdc_enablement_LearningItemEvaluationHandler "Contains methods to customize the evaluation process of a learning item.").

-   **[LearningEvaluationResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_methods)**


## LearningEvaluationResult Methods

The following are methods for LearningEvaluationResult.

-   **[getLearningItemProgress()](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_getLearningItemProgress)**
    Returns the progress percentage of the learning item.
-   **[getLearningItemProgressStatus()](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_getLearningItemProgressStatus)**
    Retrieves the progress status of the learning item.
-   **[setLearningItemProgress(learningItemProgress)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_setLearningItemProgress)**
    Sets the progress percentage of the learning item.
-   **[setLearningItemProgressStatus(learningItemProgressStatus)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_sfdc_enablement_LearningEvaluationResult_setLearningItemProgressStatus)**
    Sets the progress status of the learning item.

### getLearningItemProgress()

Returns the progress percentage of the learning item.

#### Signature

public Double getLearningItemProgress()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The progress percentage is formatted to two decimal places.

### getLearningItemProgressStatus()

Retrieves the progress status of the learning item.

#### Signature

public sfdc\_enablement.LearningItemProgressStatus getLearningItemProgressStatus()

#### Return Value

Type: [sfdc\_enablement.LearningItemProgressStatus](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm "Represents the status of a user’s progress for a learning item in an Enablement program.")

### setLearningItemProgress(learningItemProgress)

Sets the progress percentage of the learning item.

#### Signature

public void setLearningItemProgress(Double learningItemProgress)

#### Parameters

learningItemProgress

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The progress in percentage formatted to two decimal places.

#### Return Value

Type: void

### setLearningItemProgressStatus(learningItemProgressStatus)

Sets the progress status of the learning item.

#### Signature

public void setLearningItemProgressStatus(sfdc\_enablement.LearningItemProgressStatus learningItemProgressStatus)

#### Parameters

learningItemProgressStatus

Type: [Sfdc\_enablement.LearningItemProgressStatus](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm "Represents the status of a user’s progress for a learning item in an Enablement program.")

#### Return Value

Type: void

## Related Topics

- sfdc_enablement (atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm)
- sfdc_enablement.LearningItemEvaluationHandler (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm)
- sfdc_enablement.LearningItemProgressStatus (atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm)
- LearningEvaluationResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm)
- getLearningItemProgress() (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm)
- getLearningItemProgressStatus() (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm)
- setLearningItemProgress(learningItemProgress) (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm)
- setLearningItemProgressStatus(learningItemProgressStatus) (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Sfdc_enablement.LearningItemProgressStatus (atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_enablement_LearningItemProgressStatus.htm)
