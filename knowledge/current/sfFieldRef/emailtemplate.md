---
title: "EmailTemplate"
domain: sfFieldRef
topic: emailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.847Z
estimatedTokens: 571
namespace: NamespacePrefix
keywords: [EmailTemplate, template, email, mass, Sales, Engagement, first-generation, managed, packages]
---

# EmailTemplate

> Represents a template for an email, mass email, list email, or Sales Engagement
   email. Supported in first-generation managed packages
   only.

**Namespace:** `NamespacePrefix`

# EmailTemplate

Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmailTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_emailtemplate.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiVersion | API Version | double |  |  | 18 | 1 |
| Body | Email Body | textarea |  | 384000 |  |  |
| BrandTemplateId | Letterhead ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 4000 |  |  |
| DeveloperName | Template Unique Name | string |  | 80 |  |  |
| Encoding | Encoding | picklist |  | 40 |  |  |
| EnhancedLetterheadId | Enhanced Letterhead ID | reference |  | 18 |  |  |
| FolderId | Folder ID | reference |  | 18 |  |  |
| FolderName | Folder Name | string |  | 256 |  |  |
| HtmlValue | HTML Value | textarea |  | 384000 |  |  |
| Id | Email Template ID | id |  | 18 |  |  |
| IsActive | Available For Use | boolean |  |  |  |  |
| IsBuilderContent | Made in Email Template Builder | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastUsedDate | Last Used Date | datetime |  |  |  |  |
| Markup | Markup | textarea |  | 1048576 |  |  |
| Name | Email Template Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedEntityType | Custom Object Definition ID | picklist |  | 40 |  |  |
| Subject | Subject | string |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateStyle | Style | picklist |  | 40 |  |  |
| TemplateType | Template Type | picklist |  | 40 |  |  |
| TimesUsed | Times Used | int | 9 |  |  |  |
| UiType | UI Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
