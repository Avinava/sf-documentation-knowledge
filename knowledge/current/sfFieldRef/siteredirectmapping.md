---
title: "SiteRedirectMapping"
domain: sfFieldRef
topic: siteredirectmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.133Z
estimatedTokens: 321
keywords: [SiteRedirectMapping, site, redirect, external, Experience, Cloud, API, version, 52.0, later]
---

# SiteRedirectMapping

> Represents a site redirect from an external site to an Experience Cloud site.
      This object is available in API version 52.0 and later.

# SiteRedirectMapping

Represents a site redirect from an external site to an Experience Cloud site. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SiteRedirectMapping](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_siteredirectmapping.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Action | Redirect Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Site Redirect Mapping ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDynamic | Dynamic | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SiteId | Site ID | reference |  | 18 |  |  |
| Source | Source URL | url |  | 2048 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Target | Target URL | url |  | 2048 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
