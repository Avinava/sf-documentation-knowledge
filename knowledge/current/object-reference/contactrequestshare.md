---
title: "ContactRequestShare"
domain: object-reference
topic: contactrequestshare
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.971Z
estimatedTokens: 811
keywords: [ContactRequestShare, access, levels, ContactRequest, explanation, level, API, version, 45.0, later, Calls, Usage]
---

# ContactRequestShare

> Represents a list of access levels to a ContactRequest with an
			explanation of the access level. This object is available in API version 45.0 and
		later.

# ContactRequestShare

Represents a list of access levels to a ContactRequest with an explanation of the access level. This object is available in API version 45.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the User or Group has to contact requests. The possible values are:ReadEditAll (This value is not valid for create() or update() calls.)This value must be set to an access level that is higher than the organization’s default access level for contact requests. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent object, if any.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToContactRequest |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Possible values are:Manual—The User or Group has access because a user with “All” access manually shared the ContactRequest with them.Owner—The User is the owner of the ContactRequest.Rule—The User or Group has access via a ContactRequest sharing rule.GuestRule—The User or Group has access via a ContactRequest guest user sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the ContactRequest.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object lets you determine which users and groups can view and edit ContactRequest records owned by other users.

If you attempt to create a new record that matches an existing record, the create() call updates any modified fields and returns the existing record.

#### See Also

-   [*Salesforce Help*: Set Up and Manage Contact Requests](https://help.salesforce.com/articleView?id=contact_request.htm&language=en_US "
    Salesforce Help: Set Up and Manage Contact Requests - HTML (New Window)")
