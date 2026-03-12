---
title: "DocumentTemplate"
domain: sfFieldRef
topic: documenttemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:56.538Z
estimatedTokens: 807
namespace: Namespace
keywords: [DocumentTemplate, dynamic, document, generation, API, version, 56.0, later]
---

# DocumentTemplate

> Represents information about dynamic document generation. This
      object is available in API version 56.0 and later.

**Namespace:** `Namespace`

# DocumentTemplate

Represents information about dynamic document generation. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DocumentTemplate in the Life Sciences Cloud Developer Guide and Salesforce Contracts Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContextDefinitionName | Context Definition Name | string |  | 255 |  |  |
| ContextFilterName | Context Filter Name | string |  | 255 |  |  |
| ContextMappingName | Context Mapping Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomClassName | Custom Class Name | string |  | 80 |  |  |
| DefaultFontStyle | Default Font Style | textarea |  | 32768 |  |  |
| DocumentConversionResourceName | Document Conversion Resource Name | string |  | 255 |  |  |
| DocumentGenerationMechanism | Document Generation Mechanism | picklist |  | 255 |  |  |
| ExtractOmniDataTransformName | Extract Omni Data Transform Name | string |  | 255 |  |  |
| GlobalKey | Global Key | string |  | 255 |  |  |
| HasBatchableSection | Batchable Section Available | boolean |  |  |  |  |
| Id | Document Template ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSectionProcessed | Section Processed | boolean |  |  |  |  |
| LastEmbeddedTmplSectionKey | Last Embedded Template Section Key | string |  | 4 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MapperOmniDataTransformName | Mapper Omni Data Transform Name | string |  | 255 |  |  |
| Name | Name | string |  | 80 |  |  |
| Namespace | Namespace | string |  | 20 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SectionHeaderFontStyle | Section Header Font Style | textarea |  | 32768 |  |  |
| SectionHeaderFontStyleValue | Section Header Font Style Value | textarea |  | 32768 |  |  |
| ShouldDisplayUnmappedToken | Display Unmapped Token | boolean |  |  |  |  |
| ShouldExtractEmbeddedTmplToken | Extract Embedded Template Token | boolean |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetTokenItemObject | Target Token Item Object | multipicklist |  | 4099 | 0 |  |
| TargetTokenObject | Target Token Object | multipicklist |  | 4099 | 0 |  |
| TokenList | Token List | textarea |  | 131072 |  |  |
| TokenMappingMethodType | Token Mapping Method Type | picklist |  | 255 |  |  |
| TokenMappingType | Token Mapping Type | picklist |  | 255 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UniqueName | Unique Name | string |  | 100 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| VersionNumber | Version | int | 9 |  |  |  |
| XmlRelationshipMetadata | Xml Relationship Metadata | textarea |  | 131072 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
