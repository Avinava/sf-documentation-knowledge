---
title: "OrderItemSummaryChange"
domain: object-reference
topic: orderitemsummarychange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.948Z
estimatedTokens: 929
keywords: [OrderItemSummaryChange, change, OrderItemSummary, usually, reduction, quantity, due, cancel, Corresponds, order, item, API, version, 48.0, later]
---

# OrderItemSummaryChange

> Represents a change to an OrderItemSummary, usually a reduction in quantity due
      to a cancel or return. Corresponds to a change order item. This object is available in
    API version 48.0 and later.

# OrderItemSummaryChange

Represents a change to an OrderItemSummary, usually a reduction in quantity due to a cancel or return. Corresponds to a change order item. This object is available in API version 48.0 and later.

This object is used for calculations and doesn’t have a default record page.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| ChangeOrderItemId | TypereferencePropertiesFilter, Group, SortDescriptionID of the associated change order item. |
| ChangeType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionType of change represented by the OrderItemSummaryChange.Possible values are:Add (available in API version 54.0 and later)CancelDeliveryChargeAdjustmentProductAdjustmentReturn |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionISO code for the currency of the OrderSummary associated with the OrderItemSummaryChange. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| IsPreFulfillment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the change occurs before the OrderItemSummary has been fulfilled. |
| OrderItemSummary​ChangeNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the OrderItemSummaryChange. |
| OrderItemSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderItemSummary to which the change applies. |
| OrderSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderSummary to which the associated OrderItemSummary belongs. |
| Reason | TypepicklistPropertiesDefaulted on create, Filter, Group, SortDescriptionReason for the change. You can customize this list.The list has one default value:Unknown |
| ReasonText | TypestringPropertiesFilter, Group, SortDescriptionDetails about the reason for change. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderItemSummaryChangeChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [OrderItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm "Represents an order product that your organization sells.")

-   [OrderItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm "Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- OrderItemSummaryChangeChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- OrderItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm)
- OrderItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm)
