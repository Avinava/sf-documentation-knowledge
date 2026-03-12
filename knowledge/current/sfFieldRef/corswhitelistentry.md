---
title: "CorsWhitelistEntry"
domain: sfFieldRef
topic: corswhitelistentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.606Z
estimatedTokens: 338
namespace: NamespacePrefix
keywords: [CorsWhitelistEntry, entry, cross-origin, resource, sharing, CORS, allowlist, Origins, included, REST, resources, Salesforce, org]
---

# CorsWhitelistEntry

> Represents an entry in the cross-origin resource sharing (CORS)
			allowlist. Origins included in the allowlist can request REST resources from that
			Salesforce org.

**Namespace:** `NamespacePrefix`

# CorsWhitelistEntry

Represents an entry in the cross-origin resource sharing (CORS) allowlist. Origins included in the allowlist can request REST resources from that Salesforce org.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CorsWhitelistEntry](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_corswhitelistentry.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | CORS Allowed Origin List ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UrlPattern | Origin URL Pattern | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
