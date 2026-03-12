---
title: "Simulation Input Variable Basic"
domain: omnistudio
topic: simulation-input-variable-basic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.402Z
estimatedTokens: 303
keywords: [Simulation, Input, Variable, Basic, Output, representation]
---

# Simulation Input Variable Basic

> Output representation of the details of an input variable of a
      simulation.

# Simulation Input Variable Basic

Output representation of the details of an input variable of a simulation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the input variable. | Small, 53.0 | 53.0 |
| dataType | String | The data type of the input variable.Possible values are:BooleanCurrencyDateNumberPercentText | Small, 53.0 | 53.0 |
| defaultValue | String | The default value of the input variable. | Small, 53.0 | 53.0 |
| lastSimulatedValue | String | The value of the input variable in the previous simulation. | Small, 53.0 | 53.0 |
| name | String | The name of the input variable. | Small, 53.0 | 53.0 |
| precision | String | The floating point precision of the variable. | Small, 53.0 | 53.0 |
