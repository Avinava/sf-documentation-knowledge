---
title: "Simulation Eval Service Output"
domain: omnistudio
topic: simulation-eval-service-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.841Z
keywords: [Simulation, Eval, Service, Output, Note]
---

# Simulation Eval Service Output

# Simulation Eval Service Output

Output representation of the simulation run on an expression set.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Sample Responses

This is an example of a simulation run pass.

```

```

This is an example of a simulation run failure.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Simulation Error Output | Error details of the simulation, if any. | Small, 53.0 | 53.0 |
| executionId | String | Execution ID generated after a successful request. | Small, 53.0 | 53.0 |
| output | Simulation Runtime Output | Results of the expression set from the simulation. | Small, 54.0 | 54.0 |
| simulationResults | Simulation Variable Output[] | List of output variables of the simulation. | Small, 53.0 | 53.0 |
| simulationStepResults | Map<String, Simulation Step Result Output> | List of steps in the simulation including the inputs and results of each step. | Small, 53.0 | 53.0 |