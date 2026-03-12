---
title: "PermissionSetTabSetting"
domain: object-reference
topic: permissionsettabsetting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.811Z
estimatedTokens: 309
keywords: [PermissionSetTabSetting, permission, tab, setting, Requires, View, Setup, query, settings, API, version, 45.0, later, Calls, Special]
---

# PermissionSetTabSetting

> Represents a permission set tab setting. Requires the View Setup
      permission. Use this object to query all tab settings of the permission set. This object
    is available in API version 45.0 and later.

# PermissionSetTabSetting

Represents a permission set tab setting. Requires the View Setup permission. Use this object to query all tab settings of the permission set. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only users with "View Setup and Configuration" permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe tab name. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe permission set Id.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToPermissionSet |
| Visibility | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the tab is visible by default. Possible values are:DefaultOffDefaultOn |

## Usage

Use the PermissionSetTabSetting object to find tab setting visibility settings, parent permission sets, and so forth.

For example, to find the visibility setting of a tab named “standard-Lead,” do something like the following.

```

```

## Code Examples

```
SELECT Visibility 
FROM PermissionSetTabSetting
WHERE Name = 'standard-Lead'
```
