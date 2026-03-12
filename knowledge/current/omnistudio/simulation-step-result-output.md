---
title: "Simulation Step Result Output"
domain: omnistudio
topic: simulation-step-result-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.777Z
estimatedTokens: 227
keywords: [Simulation, Step, Result, Output, representation, simulation, results, step.]
---

# Simulation Step Result Output

> Output representation of the simulation results of a
    step.

# Simulation Step Result Output

Output representation of the simulation results of a step.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalInfo | Simulation Step Additional Info Output | Additional information if the step type is decision matrix or sub expression. | Small, 53.0 | 53.0 |
| explainabilityMessage | Simulation Step Explainability Message Output | Decision explanation message for a step. | Small, 56.0 | 56.0 |
| isDefaulted | Boolean | Indicates whether the step has default values (true) or not (false). | Small, 57.0 | 57.0 |
| stepErrors | Map<String, String> | Errors occurred in a step. | Small, 54.0 | 54.0 |
| stepInputs | Simulation Variable Output[] | Input variables of a step. | Small, 53.0 | 53.0 |
| stepResults | Simulation Variable Output[] | Output variables of a step. | Small, 53.0 | 53.0 |

## Related Topics

- Simulation Step Additional Info Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_simulation_step_additional_info_output.htm)
- Simulation Step Explainability Message Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_simulation_step_explainability_message_output.htm)
- Simulation
                  Variable Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_simulation_variable_output.htm)
