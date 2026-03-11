---
title: "Simulation Evaluation Service Input"
domain: omnistudio
topic: simulation-evaluation-service-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.547Z
keywords: [Simulation, Evaluation, Service, Input, Note]
---

# Simulation Evaluation Service Input

# Simulation Evaluation Service Input

Input representation to run simulation on an expression set.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Root XML tag

SimulationEvalServiceInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| config | Simulation Config Input | Configuration details for the simulation. | Required | 53.0 |
| contextInput | Simulation Context Input | Context details for the simulation. | Required | 58.0 |
| input | Simulation Variable Input[] | List of input variables to run the simulation. | Required | 53.0 |