---
title: "NamespaceRegistry"
domain: sfFieldRef
topic: namespaceregistry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.741Z
estimatedTokens: 377
namespace: NamespaceOrg
keywords: [NamespaceRegistry, link, scratch, orgs, were, created, org’s, Dev, Hub, developing, packaging, releasing, app, can’t, API]
---

# NamespaceRegistry

> Represents a namespace that you can link to scratch orgs that were
			created from your org’s Dev Hub. You use the namespace when developing, packaging, and
			releasing an app. You can’t create this object with the API. Use the Link
				Namespace action in the Dev Hub graphical interface to insert a NamespaceRegistry record. This object is available
		in API version 41.0 and later.

**Namespace:** `NamespaceOrg`

# NamespaceRegistry

Represents a namespace that you can link to scratch orgs that were created from your org’s Dev Hub. You use the namespace when developing, packaging, and releasing an app. You can’t create this object with the API. Use the Link Namespace action in the Dev Hub graphical interface to insert a NamespaceRegistry record. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NamespaceRegistry](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_namespaceregistry.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Namespace Registry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Number | string |  | 255 |  |  |
| NamespaceOrg | Namespace Org ID | string |  | 15 |  |  |
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
