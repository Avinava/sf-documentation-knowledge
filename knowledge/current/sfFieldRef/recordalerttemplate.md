---
title: "RecordAlertTemplate"
domain: sfFieldRef
topic: recordalerttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.803Z
estimatedTokens: 335
namespace: NamespacePrefix
keywords: [RecordAlertTemplate, template, shown, Alerts, FlexCard, expression, requirements, met, API, version, 55.0, later]
---

# RecordAlertTemplate

> A template that is shown in the Alerts FlexCard when the expression set
         requirements are met. This object is available in API version 55.0 and later.

**Namespace:** `NamespacePrefix`

# RecordAlertTemplate

A template that is shown in the Alerts FlexCard when the expression set requirements are met. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RecordAlertTemplate in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Record Alert Template Name | string |  | 80 |  |  |
| Id | Record Alert Template ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Record Alert Template Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| RecordAlertCategoryId | Record Alert Category ID | reference |  | 18 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
