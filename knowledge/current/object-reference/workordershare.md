---
title: "WorkOrderShare"
domain: object-reference
topic: workordershare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.772Z
estimatedTokens: 718
keywords: [WorkOrderShare, sharing, entry, work, order, API, version, 36.0, later, Calls, Special, Access, Rules]
---

# WorkOrderShare

> Represents a sharing entry on a work order. This
		object is available in API version 36.0 and later.

# WorkOrderShare

Represents a sharing entry on a work order. This object is available in API version 36.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Work orders or Field Service must be enabled in your organization. External users can’t access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the user or group has to the work order. The possible values are:ReadEditAll (This value isn’t valid for create or update calls.)Set to an access level that is at least equal to the organization’s default work order access level. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order associated with the sharing entry.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToWorkOrder |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited. Valid values include:Manual—The User or Group has access because a user with “All” access manually shared the work order.Owner—The User is the owner of the work order.Rule—The User or Group has access via a work order sharing rule.GuestRule—The User or Group has access via a work order guest user sharing rule.LpuImplicit—The User has access to records owned by high-volume Experience Cloud site users via a share group. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescription(Read Only) ID of the user or group that has access to the work order.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |
