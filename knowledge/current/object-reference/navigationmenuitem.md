---
title: "NavigationMenuItem"
domain: object-reference
topic: navigationmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.098Z
estimatedTokens: 976
keywords: [NavigationMenuItem, menu, item, NavigationLinkSet, items, Experience, Cloud, site’s, navigation, API, version, 35.0, later, Calls, Special]
---

# NavigationMenuItem

> Represents a single menu item in a NavigationLinkSet. Use this object
			to create, delete, or update menu items in your Experience Cloud site’s navigation menu.
		This object is available in API version 35.0 and later.

# NavigationMenuItem

Represents a single menu item in a NavigationLinkSet. Use this object to create, delete, or update menu items in your Experience Cloud site’s navigation menu. This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Navigation menus are available only in Experience Cloud sites created using Experience Builder templates. To use navigation menus in LWR templates, you must build a custom navigation menu component.

## Fields

| Field Name | Details |
| --- | --- |
| AccessRestriction | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDetermines if the menu item is available to guest users who aren’t required to log in to the Experience Cloud site. |
| DefaultListViewId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the value of the Type field is SalesforceObject, the value is the ID of the default list view for the object. |
| DraftRowID | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the draft navigation menu item. The ID is unique within your organization. |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe text that appears in the navigation menu for this item. |
| NavigationLinkSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe navigation menu that this item is included in. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent navigation menu. |
| Position | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location of the menu item in the navigation menu. |
| Status | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRepresents if the navigation menu item is published or not. The values can only be DRAFT, LIVE, or null. In API versions 42 and earlier, if the Status field is not set, the field defaults to LIVE. When queried and Status is not part of the query filter, only the NavigationMenuItem objects with a status of LIVE return. In API versions 43 and later, if the Status field is not set, the field defaults to DRAFT. When queried and Status is not part of the query filter, all NavigationMenuItem objects return regardless of status. |
| Target | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIf Type is ExternalLink or InternalLink, the target is the URL that the link points to. For ExternalLink, your entry looks like this: https://salesforce.com. For InternalLink, use a relative URL, such as /contactsupport. |
| TargetPrefs | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIf Type is ExternalLink, determines whether a navigation menu item opens in the same tab. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of navigation menu item. The available values are:SalesforceObject—Available objects include accounts, cases, contacts, and custom objects.ExternalLink—Links to a URL outside of your Experience Cloud site. For example, https://salesforce.com.Event—An event, such as logging in, logging out, or switching accounts. Event is internal only and can’t be used in custom components.GlobalAction—Enables users to create object records, but the new record has no relationship with other records.InternalLink—Links to a relative URL inside your Experience Cloud site. For example, /contactsupport.NavigationalTopic—A dropdown list with links to the navigational topics in your Experience Cloud site.SystemLink—A system link, such as a link to Experience Builder, Workspaces, or Salesforce setup. |

## Usage

You can add up to 20 navigation menu items. You can translate navigation menu items using the Translation Workbench.
