---
title: "ShiftShare"
domain: object-reference
topic: shiftshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.073Z
estimatedTokens: 688
keywords: [ShiftShare, sharing, entry, service, shift, API, versions, 46.0, later, Calls, Special, Access, Rules, Usage]
---

# ShiftShare

> Represents a sharing entry on a field service shift. Available
      in API versions 46.0 and later.

# ShiftShare

Represents a sharing entry on a field service shift. Available in API versions 46.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the user or group has to the shift. The possible values are:ReadEditAll (This value isn’t valid for create or update calls.)Set to an access level that is at least equal to the organization’s default shift access level. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe shift associated with the sharing entry.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToShift |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited. Valid values include:Manual—The User or Group has access because a user with “All” access manually shared the shift record.Owner—The User is the owner of the shift.Rule—The User or Group has access via a shift sharing rule.GuestRule—The User or Group has access via a shift guest user sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescription(Read only) ID of the user or group that has access to the shift record.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

Scheduling and dispatching service resources using shift data is not supported in API version 46.0.
