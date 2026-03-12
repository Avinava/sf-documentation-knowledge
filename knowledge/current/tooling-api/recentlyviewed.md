---
title: "RecentlyViewed"
domain: tooling-api
topic: recentlyviewed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.689Z
estimatedTokens: 1127
keywords: [RecentlyViewed, metadata, entities, typically, found, Setup, layout, definitions, workflow, rule, email, templates, current, user, recently]
---

# RecentlyViewed

> Represents metadata entities typically found in Setup such as page
         layout definitions, workflow rule definitions, and email templates that the current user
         has recently viewed.

# RecentlyViewed

Represents metadata entities typically found in Setup such as page layout definitions, workflow rule definitions, and email templates that the current user has recently viewed.

This object is available in the Tooling API version 33.0 and later.

## Supported SOAP Calls

query(), update(),

## Supported REST HTTP Methods

GET

## Special Usage Rules

The RecentlyViewed object supports the following metadata entities:

-   Apex classes
-   Apex triggers
-   Approval processes
-   Apps
-   Custom report types
-   Email templates
-   Fields
-   Objects
-   Page layouts
-   Permission sets
-   Profiles
-   Static resources
-   Tabs
-   Users
-   Validation rules
-   Visualforce pages
-   Visualforce components
-   Workflow email alerts
-   Workflow field updates
-   Workflow outbound messages
-   Workflow rules
-   Workflow tasks

## Fields

| Field | Details |
| --- | --- |
| Alias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alias on the item. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address on the item. |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first name on the item. |
| Id | TypeIDPropertiesDefaulted on create, Filter, Group, SortDescriptionThe ID of the recently viewed item. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the recently viewed item is an active user (true) or not (false). This field contains a value only if the recently viewed item is a user. |
| LastName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe last name on the item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed an item related to this item. |
| LastViewedDate | TypedateTimedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp for when the current user last viewed this item. If this value is null, this item might only have been referenced (see LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the recently viewed item is a user, this is the user’s name. Specifically, it’s the concatenation of the FirstName and LastName field values. |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Experience Cloud site that this recently viewed item is part of. This field is available only if digital experiences is enabled in your org. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number on the item. |
| ProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf the recently viewed item is a user, this is the user’s profile ID. |
| RelatedObject | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe object that the recently viewed item is related to. For example, if the recently viewed item is an Account Custom Field, then the related object will be Account. Not all recently viewed items will have a related object. |
| Title | TypestringPropertiesFilterGrouplable, SortDescriptionIf the recently viewed item is a user, this is the user’s title. For example, CFO or CEO. |
| Type | TypepicklistPropertiesFilter Group NillableRestricted picklist SortDescriptionThe sObject type for this recently viewed item. |
| UserRoleId | TypereferencePropertiesFilterGroupNillableSortDescriptionThe ID of the user role associated with this object. |

## Usage

This object provides a heterogeneous list of different metadata types and consists of recently viewed records. A record is considered viewed when the user sees the details associated with it, but not when the user sees it in a list with other records. Use this object to programmatically construct a list of recently viewed items specific to the current user, for example, on a custom user interface or for search auto-complete options. You can also retrieve a filtered list of records by object type (Type). The RecentlyViewed data is periodically truncated down to 200 records per object. RecentlyViewed data is retained for 90 days, after which it is removed on a periodic basis.

Use this query in your code to retrieve a list of all the records that were recently viewed. The results are ordered from most to least recent.

```

```

Use this query to retrieve data that was either viewed or referenced, but only for a limited set of objects.

```

```

## Code Examples

```
SELECT Id, Name
FROM RecentlyViewed
WHERE LastViewedDate !=null
ORDER BY LastViewedDate DESC
```

```
SELECT Id, Name
FROM RecentlyViewed 
WHERE Type IN ('CustomEntityDefinition', 'CustomFieldDefinition')
ORDER BY LastViewedDate DESC
```
