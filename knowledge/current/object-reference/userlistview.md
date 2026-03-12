---
title: "UserListView"
domain: object-reference
topic: userlistview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.812Z
estimatedTokens: 243
keywords: [UserListView, customizations, user, made, view, API, version, 32.0, later, Calls]
---

# UserListView

> Represents the customizations a user made to a list view. This
  object is available in API version 32.0 and later.

# UserListView

Represents the customizations a user made to a list view. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Name | Details |
| --- | --- |
| LastViewedChart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe last chart a user viewed. |
| ListViewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the list view.This is a relationship field.Relationship NameListViewRelationship TypeLookupRefers ToListView |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe API name of the sObject for the user list view. |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
