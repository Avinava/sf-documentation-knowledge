---
title: "SiteHistory"
domain: sfFieldRef
topic: sitehistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.128Z
estimatedTokens: 269
keywords: [SiteHistory, history, changes, site, generally, API, version, 18.0, later]
---

# SiteHistory

> Represents the history of changes to the values in the fields of a site. This object is generally available in API version 18.0 and later.

# SiteHistory

Represents the history of changes to the values in the fields of a site. This object is generally available in API version 18.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SiteHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_sitehistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Datatype | picklist |  | 40 |  |  |
| Field | Changed Field | picklist |  | 255 |  |  |
| Id | Custom Site ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| NewValue | New Value | anyType |  | 255 |  |  |
| OldValue | Old Value | anyType |  | 255 |  |  |
| SiteId | Site ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
