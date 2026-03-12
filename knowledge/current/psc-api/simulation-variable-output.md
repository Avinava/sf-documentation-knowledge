---
title: "Simulation Variable Output"
domain: psc-api
topic: simulation-variable-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.269Z
estimatedTokens: 258
keywords: [Simulation, Variable, Output, representation]
---

# Simulation Variable Output

> Output representation of a simulation variable and its
    value.

# Simulation Variable Output

Output representation of a simulation variable and its value.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextValue | Object | Context details for running the simulation on an expression set. | Small, 58.0 | 58.0 |
| datatype |  | The data type of the variable.Possible values are:BooleanCurrencyDateNumberPercentText | Small, 53.0 | 53.0 |
| name | String | Name of the variable. | Small, 53.0 | 53.0 |
| precision | Integer | Precision of the variable. | Small, 54.0 | 54.0 |
| value | String | Value of the variable. | Small, 53.0 | 53.0 |
