---
title: "SecurityCustomBaseline"
domain: sfFieldRef
topic: securitycustombaseline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.204Z
estimatedTokens: 360
namespace: NamespacePrefix
keywords: [SecurityCustomBaseline, ability, user-defined, custom, security, baselines, define, org’s, standards, API, version, 39.0, later]
---

# SecurityCustomBaseline

> Provides the ability to read, create, and delete user-defined custom
			security baselines, which define an org’s security standards. This object is
		available in API version 39.0 and later.

**Namespace:** `NamespacePrefix`

# SecurityCustomBaseline

Provides the ability to read, create, and delete user-defined custom security baselines, which define an org’s security standards. This object is available in API version 39.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SecurityCustomBaseline](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_securitycustombaseline.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Baseline | Baseline | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Security Custom Baseline ID | id |  | 18 |  |  |
| IsDefault | Is Default Baseline | boolean |  |  |  |  |
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
