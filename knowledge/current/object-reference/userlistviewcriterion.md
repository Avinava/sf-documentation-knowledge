---
title: "UserListViewCriterion"
domain: object-reference
topic: userlistviewcriterion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.816Z
estimatedTokens: 341
keywords: [UserListViewCriterion, criterion, user’s, customized, view, consists, filters, sort, order, user, added, Salesforce, Mobile, app, API]
---

# UserListViewCriterion

> Represents the criterion for a user’s customized list view. The
   criterion consists of the filters or sort order a user added to a list view for the Salesforce
   Mobile app. This object is available in API version 32.0 and later.

# UserListViewCriterion

Represents the criterion for a user’s customized list view. The criterion consists of the filters or sort order a user added to a list view for the Salesforce Mobile app. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Name | Details |
| --- | --- |
| ColumnName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the column in the user list view. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe criteria to apply, such as “equals” or “starts with.” |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe order in which the list view is evaluated compared to other UserListViewCriterion objects for the given UserListView. |
| UserListViewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user list view.This is a relationship field.Relationship NameUserListViewRelationship TypeLookupRefers ToUserListView |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe field values used to filter the list view. For example, a value of 94105 if the Field is Billing Zip/Postal Code shows only rows that have a billing ZIP code of 94105. |
