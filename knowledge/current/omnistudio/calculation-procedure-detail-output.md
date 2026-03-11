---
title: "Calculation Procedure Detail Output"
domain: omnistudio
topic: calculation-procedure-detail-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.096Z
keywords: [Calculation, Procedure, Detail, Output, Note]
---

# Calculation Procedure Detail Output

# Calculation Procedure Detail Output

Output representation of the expression set details.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The request response code. | Small, 53.0 | 53.0 |
| description | String | The description of the expression set. | Small, 53.0 | 53.0 |
| id | String | The ID of the expression set record. | Small, 53.0 | 53.0 |
| inputVariables | Calculation Procedure Variable Output[] | The list of input variables of the expression set. | Small, 53.0 | 53.0 |
| isSuccess | Boolean | Indicates whether the request is successful. | Small, 53.0 | 53.0 |
| message | String | The request response message. | Small, 53.0 | 53.0 |
| name | String | The name of the expression set. | Small, 53.0 | 53.0 |
| outputVariables | Calculation Procedure Variable Output[] | The list of output variables of the expression set. | Small, 53.0 | 53.0 |