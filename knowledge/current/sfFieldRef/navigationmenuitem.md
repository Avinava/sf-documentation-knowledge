---
title: "NavigationMenuItem"
domain: sfFieldRef
topic: navigationmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.766Z
estimatedTokens: 444
keywords: [NavigationMenuItem, menu, item, NavigationLinkSet, items, Experience, Cloud, site’s, navigation, API, version, 35.0, later]
---

# NavigationMenuItem

> Represents a single menu item in a NavigationLinkSet. Use this object to create, delete, or update menu items in your Experience Cloud
			site’s navigation menu. This object is available in API version 35.0 and
		later.

# NavigationMenuItem

Represents a single menu item in a NavigationLinkSet. Use this object to create, delete, or update menu items in your Experience Cloud site’s navigation menu. This object is available in API version 35.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NavigationMenuItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_navigationmenuitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccessRestriction | Access Restriction | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultListViewId | List View ID | reference |  | 18 |  |  |
| DraftRowId | Navigation Menu Item ID | reference |  | 18 |  |  |
| Id | Navigation Menu Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Label | Label | string |  | 50 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NavigationLinkSetId | Navigation Link Set ID | reference |  | 18 |  |  |
| ParentId | Navigation Menu Item ID | reference |  | 18 |  |  |
| Position | Position | int | 9 |  |  |  |
| Status | Publish Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Target | Target | string |  | 255 |  |  |
| TargetPrefs | Target Preferences | picklist |  | 255 |  |  |
| Type | Navigation Menu Item Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
