---
title: "OrderHistory"
domain: object-reference
topic: orderhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.781Z
estimatedTokens: 498
keywords: [OrderHistory, historical, changes, made, standard, associated, order, any, custom, history, tracking, enabled, Calls, Usage]
---

# OrderHistory

> Represents historical information about changes that have been made to the standard fields of the associated order, or to any custom fields with history tracking
		enabled.

# OrderHistory

Represents historical information about changes that have been made to the standard fields of the associated order, or to any custom fields with history tracking enabled.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the order field that was modified, or a special value to indicate some other modification to the order. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the modified order field. Maximum of 255 characters. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionPrevious value of the modified order field. Maximum of 255 characters. |
| OrderId | TypereferencePropertiesFilter, Group, SortDescriptionID of the order associated with this record.This is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |

## Usage

Order history entries are automatically created each time an order is modified.

Two rows are added to this record when foreign key fields change. One row contains the foreign key object names that display in the online application. For example, Jane Doe is recorded as the name of a Contact. The other row contains the actual foreign key ID that is only returned to and visible from the API.

This object respects field-level security on the parent object.

#### See Also

-   [Order](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm "Represents an order associated with a contract or an account.")

## Related Topics

- Order (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm)
