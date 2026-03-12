---
title: "DisclosureType"
domain: sfFieldRef
topic: disclosuretype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.257Z
estimatedTokens: 335
namespace: NamespacePrefix
keywords: [DisclosureType, disclosures, individual, organization, associated, metadata]
---

# DisclosureType

> Represents the types of disclosures that are done by an individual or
         an organization and the associated metadata.

**Namespace:** `NamespacePrefix`

# DisclosureType

Represents the types of disclosures that are done by an individual or an organization and the associated metadata.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DisclosureType in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32768 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| DisclosureBodyLogoId | Static Resource ID | reference |  | 18 |  |  |
| DisclosureBodyUrl | Disclosure Body URL | url |  | 255 |  |  |
| DisclosureCategory | Clause Category Configuration ID | picklist |  | 255 |  |  |
| Id | Disclosure Type ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Name | string |  | 80 |  |  |
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
