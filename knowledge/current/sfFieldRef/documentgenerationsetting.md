---
title: "DocumentGenerationSetting"
domain: sfFieldRef
topic: documentgenerationsetting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.507Z
estimatedTokens: 464
namespace: NamespacePrefix
keywords: [DocumentGenerationSetting, org's, settings, automatic, document, generation, templates, API, version, 54.0, later]
---

# DocumentGenerationSetting

> Represents an org's settings for automatic document generation from
         templates. This object is available in API version 54.0 and later.

**Namespace:** `NamespacePrefix`

# DocumentGenerationSetting

Represents an org's settings for automatic document generation from templates. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DocumentGenerationSetting in the Salesforce Contracts Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BatchDocGnrnPctLimitPerHour | Batch Docgen Percent Limit Per Hour | percent |  |  | 3 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DocumentTemplateLibraryName | Document Template Library Name | string |  | 255 |  |  |
| GenerationMechanism | Generation Mechanism | picklist |  | 255 |  |  |
| GuestAccessNamedCredential | Guest Access Named Credential | string |  | 255 |  |  |
| Id | Document Generation Setting ID | id |  | 18 |  |  |
| InProgDocGenRqstTmot | InProgress DocGen Request Time Out (hrs) | int | 9 |  |  |  |
| IsBatchDocGnrnEnabled | Enable Batch Document Generation | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInProgRqstTmotEnab | Enable InProgress DocGen Request Time Out | boolean |  |  |  |  |
| IsServerSideDocGenEnabled | Enable Server-Side Document Generation | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PreviewType | Preview Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
