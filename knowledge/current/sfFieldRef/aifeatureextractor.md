---
title: "AIFeatureExtractor"
domain: sfFieldRef
topic: aifeatureextractor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.705Z
estimatedTokens: 342
namespace: NamespacePrefix
keywords: [AIFeatureExtractor, feature, extractor, that’s, extract, input, data, making, predictions]
---

# AIFeatureExtractor

> Represents information about the feature extractor that’s used to
         extract the input data required for making predictions.

**Namespace:** `NamespacePrefix`

# AIFeatureExtractor

Represents information about the feature extractor that’s used to extract the input data required for making predictions.

For more information, see AIFeatureExtractor in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AiUsecaseModelId | AI Usecase Model ID | reference |  | 18 |  |  |
| BatchInputSourceIdentifier | Batch Input Source Identifier | string |  | 255 |  |  |
| ClassName | Class Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| FeatureInputType | Feature Input Type | picklist |  | 255 |  |  |
| Id | AI Feature Extractor ID | id |  | 18 |  |  |
| InputContext | Input Context | textarea |  | 131072 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
