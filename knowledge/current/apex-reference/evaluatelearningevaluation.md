---
title: "evaluate(learningEvaluation)"
domain: apex-reference
topic: evaluatelearningevaluation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.062Z
keywords: [evaluate, learningEvaluation, Contains, custom, logic, evaluating, learning, item., Signature, Parameters, Return, Value]
---

# evaluate(learningEvaluation)

> Contains the custom logic for evaluating a learning item.

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