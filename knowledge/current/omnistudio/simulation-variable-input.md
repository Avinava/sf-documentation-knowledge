---
title: "Simulation Variable Input"
domain: omnistudio
topic: simulation-variable-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.752Z
estimatedTokens: 214
keywords: [Simulation, Variable, Input]
---

# Simulation Variable Input

> Input information of the input variable and its
    value.

# Simulation Variable Input

Input information of the input variable and its value.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| datatype | String | The data type of the variable.Possible values are:BooleanCurrencyDateNumberPercentText | Required | 53.0 |
| name | String | The name of the variable. | Required | 53.0 |
| value | String | The value of the variable. | Required | 53.0 |
