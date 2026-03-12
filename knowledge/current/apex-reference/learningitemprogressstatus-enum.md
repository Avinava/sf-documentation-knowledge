---
title: "LearningItemProgressStatus Enum"
domain: apex-reference
topic: learningitemprogressstatus-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.741Z
estimatedTokens: 199
keywords: [LearningItemProgressStatus, status, user’s, progress, learning, item, Enablement, program, Usage]
---

# LearningItemProgressStatus Enum

> Represents the status of a user’s progress for a learning item in an Enablement
    program.

# LearningItemProgressStatus Enum

Represents the status of a user’s progress for a learning item in an Enablement program.

## Usage

To set the progress status in the [sfdc\_enablement.LearningEvaluationResult](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm#apex_class_sfdc_enablement_LearningEvaluationResult "Represents a user’s progress and progress status of a custom exercise in an Enablement program.") class, use this enum.

## Enum Values

The following are the values for the sfdc\_enablement.LearningItemProgressStatus enum.

| Value | Description |
| --- | --- |
| NotStarted | The user hasn't started the custom exercise. |
| InProgress | The user's custom exercise is in progress. |
| Completed | The user completed the custom exercise. |

## Related Topics

- sfdc_enablement.LearningEvaluationResult (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_enablement_LearningEvaluationResult.htm)
