---
title: "Calculation Procedure Version Definition Output"
domain: omnistudio
topic: calculation-procedure-version-definition-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.118Z
keywords: [Calculation, Procedure, Version, Definition, Output, Note]
---

# Calculation Procedure Version Definition Output

# Calculation Procedure Version Definition Output

Output representation of the expression set version definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

JSON Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| calculationProcedureId | String | The ID of the expression set record. | Small, 53.0 | 53.0 |
| code | String | The request response code. | Small, 53.0 | 53.0 |
| constants | Resource List Output | The constant definition of the expression set version record. | Small, 53.0 | 53.0 |
| description | String | The description of the expression set version record. | Small, 53.0 | 53.0 |
| enabled | Boolean | Indicates whether the expression set version record is active for execution. The default is false. | Small, 53.0 | 53.0 |
| endDate | String | The date and time until when an active expression set version record is in effect. | Small, 53.0 | 53.0 |
| isSuccess | Boolean | Indicates whether the request is successful. | Small, 53.0 | 53.0 |
| message | String | The request response message. | Small, 53.0 | 53.0 |
| name | String | The name of the expression set version record. | Small, 53.0 | 53.0 |
| rank | Integer | The rank of the expression set version record. When multiple records are in effect, the record that’s ranked higher takes precedence. 1 denotes the highest rank. | Small, 53.0 | 53.0 |
| root | Root Step List Output | The first step defined in the expression set version record. If the first step is a branch, then the first steps in the record. | Small, 53.0 | 53.0 |
| startDate | String | The start date and time from when an active expression set version record is in effect. | Small, 53.0 | 53.0 |
| step | Calculation Procedure Step Map Output | The list of steps defined in the expression set version record. | Small, 53.0 | 53.0 |
| variables | Resource List Output | The variable definition of the expression set version record. | Small, 53.0 | 53.0 |
| versionId | String | The ID of the expression set version record. | Small, 53.0 | 53.0 |
| versionNumber | Integer | The number of the expression set version record. | Small, 53.0 | 53.0 |