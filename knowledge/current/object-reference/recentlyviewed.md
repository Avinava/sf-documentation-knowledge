---
title: "RecentlyViewed"
domain: object-reference
topic: recentlyviewed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.010Z
estimatedTokens: 1343
keywords: [RecentlyViewed, records, views, current, user, recently, viewed, referenced, viewing, record, API, version, 29.0, later, Calls]
---

# RecentlyViewed

> Represents records or list views that the current user has recently
   viewed or referenced (by viewing a related record). List views are available in API version 29.0
   and later.

# RecentlyViewed

Represents records or list views that the current user has recently viewed or referenced (by viewing a related record). List views are available in API version 29.0 and later.

## Supported Calls

describeSObjects(), query(), update()

## Special Usage Rules

The RecentlyViewed object doesn’t support the Event, Task, Report, KnowledgeArticle, and Article objects.

The RecentlyViewed object supports only certain objects, and supports list views only for those supported objects. Supported objects have the fields LastReferencedDate and LastViewedDate.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

RecentlyViewed records for users who are members of several communities can’t be retrieved automatically into a map via Apex. This is because records of a user with different networks can result in duplicate IDs that maps don’t support.

## Fields

| Field | Details |
| --- | --- |
| Alias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe alias on the record. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address on the record. |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first name on the record. If the recently viewed record is a user, the value is the user’s first name. |
| Id | TypeIDPropertiesDefaulted on create, Filter, Group, SortDescriptionThe ID of the recently viewed record or list view. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the recently viewed record is an active user (true) or not (false). This field contains a value only if the recently viewed record is a user. |
| LastName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe last name on the record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are:Viewing or opening a record.Selecting a record in a lookup search or related list search. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name on the recently viewed record or list view. If the recently viewed record is a user, contact, or lead, the value is a concatenation of the firstname and lastname field values. |
| NetworkId | TypereferencePropertiesFilter,Group, Nillable, SortDescriptionID of the Experience Cloud site that this group is part of. This field is available only if digital experiences is enabled in your org.You can add a NetworkId only when creating a group. You can’t change or add a NetworkId for an existing group. This field is available in API version 27.0 and later. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number on the record. |
| ProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf the recently viewed record is a user, this value is the user’s profile ID.This field is a relationship field.Relationship NameProfileRelationship TypeLookupRefers ToProfile |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the recently viewed record is a user, this value is the title of the user; for example CFO or CEO. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe object type for this recently viewed record or list view. Valid values include any standard or custom objects that RecentlyViewed supports. |
| UserRoleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user role associated with this object.This field is a relationship field.Relationship NameUserRoleRelationship TypeLookupRefers ToUserRole |

## Usage

This object provides a heterogeneous list of different object types. The list consists of recently viewed records, records that were recently referenced (a related record was viewed), or recently viewed list views. A record is considered viewed when the user sees the record details, but not when the user sees the record in a list with other records. Use this object to programmatically construct a list of recently viewed items specific to the current user. For example, use this object on a custom user interface or for search auto-complete options. You can also retrieve a filtered list of records by object type (Type). The RecentlyViewed data is periodically truncated down to 200 records and 200 list views. RecentlyViewed data is retained for 90 days, after which it’s removed on a periodic basis.

Use this query in your code to retrieve a list of all the records and list views that were recently viewed. The results are ordered from most to least recent.

```

```

Use this query to retrieve data that was either viewed or referenced, but only for a limited set of objects.

```

```

This query retrieves a list of all recently viewed contacts with contact-specific fields, such as the contact’s account name, and the custom website field. Records are ordered from most to least recent.

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
WHERE Type IN ('Account', 'Contact', 'Plan__c')
ORDER BY LastViewedDate DESC
```

```
SELECT Account.Name, Title, Email, Phone, Website__c
FROM Contact
WHERE LastViewedDate != NULL 
ORDER BY LastViewedDate DESC
```
