---
title: "DocumentGenerationProcess"
domain: sfFieldRef
topic: documentgenerationprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.495Z
estimatedTokens: 580
keywords: [DocumentGenerationProcess, Supports, server-side, document, generation, requests, responses, API, version, 56.0, later]
---

# DocumentGenerationProcess

> Supports server-side document generation requests and responses. This object is available in API version 56.0 and later.

# DocumentGenerationProcess

Supports server-side document generation requests and responses. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DocumentGenerationProcess in the Salesforce Contracts Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalMetadata | Additional Metadata | textarea |  | 131072 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataRaptorInput | Data Mapper Input | textarea |  | 131072 |  |  |
| DocGenAdditionalInput | DocGen Additional Input | textarea |  | 2000 |  |  |
| DocGenAdditionalInputType | DocGen Additional Input Type | picklist |  | 255 |  |  |
| DocGenApiVersionType | Doc Generation API Version Type | picklist |  | 255 |  |  |
| DocumentInputType | Document Input Type | picklist |  | 255 |  |  |
| DocumentTemplateId | Document Template ID | reference |  | 18 |  |  |
| EstimatedDocumentSize | Estimated Document Size | int | 9 |  |  |  |
| HasDocGenFontSource | Doc Generation Font Source | boolean |  |  |  |  |
| Id | Document Generation Process ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSharedExternally | Shared Externally | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PdfDocIdentifiersList | PDF Document Identifiers List | string |  | 255 |  |  |
| ReferenceObject | Reference Object | string |  | 18 |  |  |
| RequestText | Request Text | string |  | 255 |  |  |
| ResponseText | Response Text | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TokenData | Token Data | textarea |  | 131072 |  |  |
| TokenDataContentDocumentId | Content Document ID | reference |  | 18 |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
