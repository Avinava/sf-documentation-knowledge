---
title: "DocumentTemplateSection"
domain: sfFieldRef
topic: documenttemplatesection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.572Z
estimatedTokens: 704
keywords: [DocumentTemplateSection, document, template, clause, image, context, embedded, API, version, 52.0, later]
---

# DocumentTemplateSection

> Represents a section in a document template. A document template section can
         be a clause, image, context, embedded template, or signature. This object is available
      in API version 52.0 and later.

# DocumentTemplateSection

Represents a section in a document template. A document template section can be a clause, image, context, embedded template, or signature. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DocumentTemplateSection in the Salesforce Contracts Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccessType | Access Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisplayConditionExpression | Display Condition Expression | textarea |  | 131072 |  |  |
| DocumentTemplateId | Document Template ID | reference |  | 18 |  |  |
| EmbeddedDocumentTemplateId | Document Template ID | reference |  | 18 |  |  |
| EmbeddedKey | Embedded Key | string |  | 4 |  |  |
| HasSectionNumberReset | Reset Section Number | boolean |  |  |  |  |
| Id | Document Template Section ID | id |  | 18 |  |  |
| IsBatchable | Batchable | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDisplayOnNewPage | Display on New Page | boolean |  |  |  |  |
| IsNewLineAfterSectionEnabled | Add New Line After Section | boolean |  |  |  |  |
| IsSectionNumberDisplayEnabled | Section Number Display | boolean |  |  |  |  |
| IsTableHeaderRepeatable | Table Header Repeatable | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ReferenceClassName | Reference Class Name | string |  | 255 |  |  |
| SectionContent | Section Content | textarea |  | 131072 |  |  |
| SectionSequenceNumber | Section Sequence Number | double |  |  | 18 | 0 |
| SectionType | Section Type | picklist |  | 255 |  |  |
| SectionTypeItemFontStyle | Section Type Item Font Style | textarea |  | 32768 |  |  |
| SectionTypeItemFontValue | Section Type Item Font Style Value | textarea |  | 32768 |  |  |
| SectionTypeSignatureContent | Section Type Signature Content | textarea |  | 32768 |  |  |
| ShouldDisplayHeaderContentInline | Display Header Content Inline | boolean |  |  |  |  |
| ShouldDisplayHeaderName | Display Header Name | boolean |  |  |  |  |
| ShouldGenerateEmbeddedKey | Generate Embedded Key | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TokenList | Token List | textarea |  | 131072 |  |  |
| TotalSectionConditionCount | Total Section Condition Count | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
