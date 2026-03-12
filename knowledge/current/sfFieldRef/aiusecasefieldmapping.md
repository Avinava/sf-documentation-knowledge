---
title: "AIUsecaseFieldMapping"
domain: sfFieldRef
topic: aiusecasefieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.782Z
estimatedTokens: 365
namespace: NamespacePrefix
keywords: [AIUsecaseFieldMapping, mapping, that’s, save, extracted, features, prediction, scores, insights, predictions, suggestions, improve]
---

# AIUsecaseFieldMapping

> Represents information about the field mapping that’s used to save extracted
         features, prediction scores, insights about the predictions, and suggestions to improve the
         prediction scores.

**Namespace:** `NamespacePrefix`

# AIUsecaseFieldMapping

Represents information about the field mapping that’s used to save extracted features, prediction scores, insights about the predictions, and suggestions to improve the prediction scores.

For more information, see AIUsecaseFieldMapping in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AiUsecaseDefinitionId | AI Usecase Definition ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | AI Usecase Field Mapping ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MappedFieldName | Mapped Field Name | string |  | 255 |  |  |
| MappedFieldType | Mapped Field Type | picklist |  | 255 |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| ResponseFieldName | Response Field Name | string |  | 255 |  |  |
| ResponseObject | Response Object | string |  | 255 |  |  |
| SequenceNumber | Sequence Number | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
