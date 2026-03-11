---
title: "Resource Output"
domain: omnistudio
topic: resource-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.809Z
keywords: [Resource, Output, Note]
---

# Resource Output

# Resource Output

Output representation of variables or constants used in the calculation procedure version definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

This API has been deprecated as of API version 55.0. In API version 55.0 and later, use the new [Business APIs in Business Rules Engine](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/business_rules_engine_connect_apis.htm).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the variable or constant. | Small, 53.0 | 53.0 |
| calculationMatrixName | String | The name of the decision matrix record used in the variable or constant. | Small, 53.0 | 53.0 |
| dataType | String | The data type of the variable or constant. | Small, 53.0 | 53.0 |
| defaultValue | String | The default value of the variable or constant. | Small, 53.0 | 53.0 |
| displayName | String | The display name of the variable or constant. | Small, 53.0 | 53.0 |
| id | String | The ID of the variable or constant. | Small, 53.0 | 53.0 |
| isEditable | Boolean | Indicates whether the variable or constant is editable. | Small, 53.0 | 53.0 |
| isUserDefined | Boolean | Indicates whether the variable or constant is user-defined. | Small, 53.0 | 53.0 |
| name | String | The name of the variable or constant. | Small, 53.0 | 53.0 |
| precision | Integer | The floating-point precision of the variable or constant. The value ranges from 0 to 16. | Small, 53.0 | 53.0 |
| uiDisplayOrder | Integer | Reserved for future use. | Small, 53.0 | 53.0 |