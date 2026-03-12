---
title: "UserAppMenuItem"
domain: sfFieldRef
topic: userappmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:15.996Z
estimatedTokens: 379
keywords: [UserAppMenuItem, organization-wide, settings, items, app, menu, Launcher, requesting, user, access, Setup, API, version, 35.0, later]
---

# UserAppMenuItem

> Represents the organization-wide settings for items in the app menu or
			App Launcher that the requesting user has access to in Setup. This
				object is available in API version 35.0 and later.

# UserAppMenuItem

Represents the organization-wide settings for items in the app menu or App Launcher that the requesting user has access to in Setup. This object is available in API version 35.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserAppMenuItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userappmenuitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppMenuItemId | AppMenuItem ID | string |  | 255 |  |  |
| ApplicationId | Application ID | reference |  | 18 |  |  |
| Description | Description | string |  | 250 |  |  |
| IconUrl | Icon URL | url |  | 255 |  |  |
| Id | Application ID | id |  | 18 |  |  |
| InfoUrl | Info URL | url |  | 255 |  |  |
| IsUsingAdminAuthorization | IsUsingAdminAuthorization | boolean |  |  |  |  |
| IsVisible | Is Visible | boolean |  |  |  |  |
| Label | Name | string |  | 80 |  |  |
| LogoUrl | Logo Image URL | url |  | 255 |  |  |
| MobileStartUrl | Mobile Start URL | url |  | 255 |  |  |
| Name | Developer Name | string |  | 250 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| StartUrl | Start URL | url |  | 255 |  |  |
| Type | App Type | picklist |  | 255 |  |  |
| UserSortOrder | User Sort Order | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
