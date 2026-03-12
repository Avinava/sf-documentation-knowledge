---
title: "Simulation Step Explainability Message Output"
domain: omnistudio
topic: simulation-step-explainability-message-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.773Z
estimatedTokens: 269
keywords: [Simulation, Step, Explainability, Message, Output, representation, decision, explanation, message, step, simulation.]
---

# Simulation Step Explainability Message Output

> Output representation of a decision explanation message for a step
      from the simulation.

# Simulation Step Explainability Message Output

Output representation of a decision explanation message for a step from the simulation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextTag​Messages | String | Explainability messages of the step when context tags are used in the step. | Small, 60.0 | 60.0 |
| message | String | Decision explanation message of the step. | Small, 56.0 | 56.0 |
| showCondition​Details | Boolean | For the Condition step type, this property indicates whether the decision explanation includes the condition's details (true) or not (false). The default value for this field is false. | Small, 56.0 | 56.0 |
| showOnly​ExecutedPath​Message | Boolean | For the Branch step type, this property indicates whether the decision explanation includes information about the executed path only (true) or not (false). The default value for this field is true. | Small, 56.0 | 56.0 |
| template​Id | String | Decision explainer template ID of the step. | Small, 56.0 | 56.0 |
