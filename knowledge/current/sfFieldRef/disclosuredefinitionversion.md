---
title: "DisclosureDefinitionVersion"
domain: sfFieldRef
topic: disclosuredefinitionversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.235Z
estimatedTokens: 416
namespace: NamespacePrefix
keywords: [DisclosureDefinitionVersion, version, disclosure, definition]
---

# DisclosureDefinitionVersion

> Represents the version information about the disclosure
         definition.

**Namespace:** `NamespacePrefix`

# DisclosureDefinitionVersion

Represents the version information about the disclosure definition.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DisclosureDefinitionVersion in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthoringMode | Authoring Mode | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32768 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| DisclosureDefinitionId | Disclosure Definition ID | reference |  | 18 |  |  |
| DocumentTemplateGlobalKey | Document Template Global Key | string |  | 255 |  |  |
| Id | Disclosure Definition Version ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsCurrentVersion | Current Version | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| OmniScriptCnfgApiName | OmniScript Configuration API Name | string |  | 80 |  |  |
| OmniScriptConfiguration | OmniScript Configuration | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VersionNumber | Version Number | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
