---
title: "UserShare"
domain: object-reference
topic: usershare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.026Z
estimatedTokens: 869
keywords: [UserShare, sharing, entry, user, record, API, version, 26.0, later, Calls, Special, Access, Rules, Usage]
---

# UserShare

> Represents a sharing entry on a user record. This object is available in API version 26.0 and later.

# UserShare

Represents a sharing entry on a user record. This object is available in API version 26.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only standard users or users with the Customize Application permission can access this object.

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. Indicates whether the User has access to log in (true) or not (false). You can modify a User's active status from the user interface or via the API. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Possible values include:Manual—The User or Group has access to the user record because a User with “All” access manually shared the User with them.Rule—The User or Group has access to the user record via a User sharing rule.GuestRule—The User or Group has access via a User guest user sharing rule.LpuImplicit—The User has access to records owned by high-volume Experience Cloud site users via a share group. |
| UserAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the User or Group has to the specified user. The specified user is denoted by the UserId. The possible values are:ReadEditThis field must be set to an access level that is at least equal to the organization’s default UserAccessLevel.UserAccessLevel can be updated only if RowCause is set to Manual Sharing. |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User being shared.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the User. This field can’t be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object allows you to determine which users and groups can view or edit User records owned by other users.
