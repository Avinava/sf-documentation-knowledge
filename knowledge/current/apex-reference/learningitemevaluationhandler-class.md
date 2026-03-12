---
title: "LearningItemEvaluationHandler Class"
domain: apex-reference
topic: learningitemevaluationhandler-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.268Z
estimatedTokens: 705
keywords: [LearningItemEvaluationHandler, Contains, customize, evaluation, process, learning, item., Usage, Example, evaluate, learningEvaluation]
---

# LearningItemEvaluationHandler Class

> Contains methods to customize the evaluation process of a learning item.

# LearningItemEvaluationHandler Class

Contains methods to customize the evaluation process of a learning item.

## Namespace

[sfdc\_enablement](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm "The sfdc_enablement namespace provides classes for creating custom learning items to implement custom exercise types in Enablement programs. Lightning web components are used to render the custom exercises on Program Builder.")

## Usage

Extend this class and implement your custom progress evaluation method. Then link this class to a [LearningItemType metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_learningitemtype.htm) record by passing the Apex class name to the ApexEvaluationHandler field.

## Example

This code updates a user’s progress when they take a custom screen flow exercise in an Enablement program. The code updates the progress by checking the number of screens the user has navigated, calculating the progress percentage, and returning the progress status. See [Track a User's Progress in a Custom Exercise](https://developer.salesforce.com/docs/sales/enablement/guide/custom-exercise-track-progress.html) from Salesforce Developer Guide: Sales Programs and Partner Tracks with Enablement.

```

```

-   **[LearningItemEvaluationHandler Methods](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_sfdc_enablement_LearningItemEvaluationHandler_methods)**


## LearningItemEvaluationHandler Methods

The following are methods for LearningItemEvaluationHandler.

-   **[evaluate(learningEvaluation)](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm#apex_sfdc_enablement_LearningItemEvaluationHandler_evaluate)**
    Contains the custom logic for evaluating a learning item.

### evaluate(learningEvaluation)

Contains the custom logic for evaluating a learning item.

#### Signature

public Sfdc\_enablement.LearningEvaluationResult evaluate(Sfdc\_enablement.LearningEvaluation learningEvaluation)

#### Parameters

learningEvaluation

Type: [Sfdc\_enablement.LearningEvaluation](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm#apex_class_sfdc_enablement_LearningEvaluation "Contains methods to retrieve and update details that are required to evaluate a learning item.")

The details of the learning item record to be evaluated.

#### Return Value

Type: [Sfdc\_enablement.LearningEvaluationResult](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_class_sfdc_enablement_LearningEvaluationResult "Represents a user’s progress and progress status of a custom exercise in an Enablement program.")

The result of the evaluation, including progress and status details.

## Code Examples

```apex
global class ScreenFlowEvaluationHandler extends sfdc_enablement.LearningItemEvaluationHandler {
    global override sfdc_enablement.LearningEvaluationResult evaluate(sfdc_enablement.LearningEvaluation learningEvaluation) {
        sfdc_enablement.LearningEvaluationResult result = new sfdc_enablement.LearningEvaluationResult();
        Double percentage = 100.0d;

        Map<String, Object> details = learningEvaluation.getDetails();

        String currentScreen = (String) details.get('currentScreen');

        String allScreensString = (String) details.get('allScreens');
        List<String> allScreens = allScreensString.split(',');
        
        String status = (String) details.get('status');
        if (status == 'FINISHED') {
            percentage = 100;
        } else {
            Integer index = 0;
            for (Integer i = 0; i < allScreens.size(); i++) {
                if (allScreens.get(i).equals(currentScreen)) {
                    index = i + 1;
                    break;
                }
            }

            if (index == allScreens.size()) {
                percentage = 99.0d;
            } else {
                percentage = (Double.valueOf(index) / Double.valueOf(allScreens.size())) * 100.0d;
            }
        }

        result.setLearningItemProgress(percentage);
        
        if (percentage == 100.0d) {
            result.setLearningItemProgressStatus(sfdc_enablement.LearningItemProgressStatus.Completed);            
        } else if (percentage == 0.0d) {
            result.setLearningItemProgressStatus(sfdc_enablement.LearningItemProgressStatus.NotStarted);            
        } else {
            result.setLearningItemProgressStatus(sfdc_enablement.LearningItemProgressStatus.InProgress);
        }
        
        return result;
    }
}
```

## Related Topics

- sfdc_enablement (atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm)
- LearningItemEvaluationHandler Methods (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm)
- evaluate(learningEvaluation) (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningItemEvaluationHandler.htm)
- Sfdc_enablement.LearningEvaluation (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluation.htm)
- Sfdc_enablement.LearningEvaluationResult (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm)
