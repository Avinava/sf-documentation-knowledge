---
title: "OrderShare"
domain: object-reference
topic: ordershare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.021Z
estimatedTokens: 617
keywords: [OrderShare, sharing, entry, Order, API, version, 48.0, later, Calls, Usage]
---

# OrderShare

> Represents a sharing entry on an Order. This object is available in
		API version 48.0 and later.

# OrderShare

Represents a sharing entry on an Order. This object is available in API version 48.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| OrderAccessLevel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionLevel of access that the user or group has to the order.Possible values are:All—Owner. This value isn’t valid when creating, updating, or deleting records.Edit—Read/WriteRead—Read Only |
| OrderId | TypereferencePropertiesFilter, Group, SortDescriptionID of the order associated with this sharing entry. This field can't be updated.This is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| RowCause | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited. |
| UserOrGroupId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user or group that has been given access to the order. This field can't be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object allows you to determine which users and groups can view or edit orders owned by other users.

If you attempt to create a record that matches an existing record, any modified fields are updated, the system returns the existing record.
