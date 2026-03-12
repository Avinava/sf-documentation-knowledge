---
title: "UserAppMenuItem"
domain: object-reference
topic: userappmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.702Z
estimatedTokens: 819
keywords: [UserAppMenuItem, organization-wide, settings, items, app, menu, Launcher, requesting, user, access, Setup, API, version, 35.0, later]
---

# UserAppMenuItem

> Represents the organization-wide settings for items in the app menu or
			App Launcher that the requesting user has access to in Setup. This
				object is available in API version 35.0 and later.

# UserAppMenuItem

Represents the organization-wide settings for items in the app menu or App Launcher that the requesting user has access to in Setup. This object is available in API version 35.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), search()

## Fields

| Field Name | Details |
| --- | --- |
| AppMenuItemId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID for the menu item. |
| ApplicationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID for the application associated with the menu item. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA description of this menu item. |
| IconUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe icon for the menu item’s application. |
| InfoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL for more information about the application. |
| IsUsingAdminAuthorization | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the app is pre-authorized for certain users by the administrator. |
| IsVisible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the app is visible to the user. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe app’s name. |
| LogoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe logo for the menu item’s application. The default is the initials of the Label value. |
| MobileStartUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe location mobile users are directed to after they’ve authenticated. This is only used with connected apps. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the item. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe index value that controls where this item appears in the menu. For example, a menu item with a sort order value of 5 will appear between items with sort order values of 3 and 9. |
| StartUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe location users are directed to after they’ve authenticated. For a connected app, this is the location specified by the StartUrl. Otherwise it’s the application’s default start page. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of application represented by this item. The types are:ConnectedApplicationNetworkServiceProviderTabSet |
| UserSortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe index value that represents where the user set this item in the menu (or App Launcher). For example, an item with a sort order value of 5 will appear between items with sort order values of 3 and 9.This value is separate from SortOrder so you can create logic incorporating both values. For example, if you want the user-sorted items to appear first, followed by the organization order for the rest, use:SELECT ApplicationId,SortOrder,UserSortOrder FROM AppMenuItem order by userSortOrder NULLS LAST, sortOrder NULLS LAST |

## Usage

See the AppMenuItem object for the organization-wide default settings This object contains the fields the requesting user has permission to see.
