---
title: "OcrSampleDocument"
domain: sfFieldRef
topic: ocrsampledocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.093Z
estimatedTokens: 318
namespace: NamespacePrefix
keywords: [OcrSampleDocument, sample, document, that's, extracting, mapping, customer]
---

# OcrSampleDocument

> Represents the details of a sample document or a document type that's
      used as a reference while extracting and mapping information from a customer document.

**Namespace:** `NamespacePrefix`

# OcrSampleDocument

Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer document.

For more information, see OcrSampleDocument in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationType | OCR Application Type | picklist |  | 255 |  |  |
| ContentAssetId | Asset File ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DocumentHeight | Document Height | double |  |  | 18 | 0 |
| DocumentTypeId | Document Type ID | reference |  | 18 |  |  |
| Id | OCR Sample Document ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
