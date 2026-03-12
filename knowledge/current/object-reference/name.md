---
title: "Name"
domain: object-reference
topic: name
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.058Z
estimatedTokens: 1166
keywords: [Non-queryable, foreign, key, traversals, parent, Calls, Usage]
---

# Name

> Non-queryable object that provides information about foreign key
      traversals when the foreign key has more than one parent.

# Name

Non-queryable object that provides information about foreign key traversals when the foreign key has more than one parent.

This object is used to retrieve information from related records where the related record can be from more than one object type (a polymorphic foreign key). For example, the owner of a case can be either a user or a group (queue). This object allows retrieval of the owner name, whether the owner is a user or a group (queue). You can use a describe call to access the information about parents for an object, or you can use the who, what, or owner fields (depending on the object) in SOQL queries. This object can’t be directly accessed.

## Supported Calls

describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| Alias | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user alias. This field contains a value only if the related record is a user. |
| Email | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address of the user or group (queue). |
| FirstName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first name of the user, contact, or lead. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the related record is an active user (true) or not (false). This field contains a value only if the related record is a user. |
| LastName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe last name of the user, contact, or lead. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| MiddleName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe middle name of the user contact, or lead. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the parent of the object queried. If the parent is a user, contact, or lead, the value is a concatenation of the FirstName, MiddleName, LastName, and Suffix fields of the related record. |
| Phone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe phone number of the user. This field contains a value only if the related record is a user. |
| Profile | TypereferencePropertiesFilter, NillableDescriptionThe Profile of the user. Only populated if the related record is a user. |
| ProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user’s Profile. Only populated if the related record is a user.This field is a relationship field.Relationship NameProfileRelationship TypeLookupRefers ToProfile |
| Suffix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name suffix of the user, contact, or lead. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe title of the user, for example CFO or CEO. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionA list of the types of sObject that can be an owner of this object. You can use this field to filter on a type of owner, for example, return only the leads owned by a user. |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionContains the name that a user enters to log into the API or the user interface. The value for this field is in the form of an email address, and is only populated if the related record is a user. |
| UserRole | TypepicklistPropertiesFilter, NillableDescriptionName of the Role played by the user. Only populated for user rows. |
| UserRoleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user role associated with this object.This field is a relationship field.Relationship NameUserRoleRelationship TypeLookupRefers ToUserRole |

## Usage

To query on relationships where the parent can be more than one type of object, use who, what, or owner relationship fields.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
