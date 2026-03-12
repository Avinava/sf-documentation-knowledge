---
title: "Order Schema"
domain: data-cloud
topic: order-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.253Z
estimatedTokens: 1334
keywords: [Order, Schema, order, interaction, commerce, action, captures, actions, performed, user, manage, new, progress, completed, orders., Note]
---

# Order Schema

> An order interaction is a commerce action that captures actions performed by a user to
  manage new, in progress, or completed orders.

# Order Schema

An order interaction is a commerce action that captures actions performed by a user to manage new, in progress, or completed orders.

| Source Event Property | Target Schema Developer Name | Field Type | Description | Customer 360 Data Model Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | Engagement / Engagement Id |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | Engagement / Engagement Date Time |
| <Automatically Assigned> | eventType = "order" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | Product Order Engagement / Individual |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | interactionName = "Cancel \| Deliver \| Exchange \| Preorder \| Purchase \| Return \| Ship" | text | Required. A descriptive name for the event. | Product Order Engagement / Product Order Event Type |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | Engagement / Engagement Channel Type |
| <Automatically Assigned if Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Longitude |
| <Automatically Assigned if Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Latitude |
| order.id | orderId | text | A unique identifier representing the order. | Engagement / Sales Order Product Engagement Action / Order Product Number |
| order.totalValue | orderTotalValue | number | The total value of the order. | Product Order Engagement / Sales Order Product Engagement Action / Net Order Amount |
| order.currency | orderCurrency | text | The currency of the total value for the order. | Product Order Engagement / Currency |
| order.attributes | Refer to Schema Field Naming Rules | number | A dictionary of user-supplied values. | - |

Each [Line Item Attribute](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_line_item_attribute.htm "Line items are intended to describe purchasable items and are used in cart and order interactions.") contained in the [Order Event](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_order_event.htm "An order event interaction is an ecommerce event that captures actions performed by a customer to manage new, in progress, or completed orders.") gets mapped to a child event where order EventId is set to the eventId of the parent order event:

| Source Event Property | Target Schema Developer Name | Data Type | Description | Customer 360 Data Model Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| <Automatically Assigned> | eventType = "orderItem" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. An identifier for a session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | orderEventId | text | Required. The eventId of the order event containing this Line Item. | Product Order Engagement |
| lineItem.catalogObjectType | catalogObjectType | text | Required. A type name of the catalog object referenced in the line item. | - |
| lineItem.catalogObjectId | catalogObjectId | text | Required. A unique identifier representing the catalog object referenced in the line item. | - |
| lineItem.quantity | quantity | number | The number of catalog objects in the line item. | Product Order Engagement / Currency |
| lineItem.price | price | number | The price of the catalog object referenced in the line item. | Product Order Engagement / Currency |
| lineItem.currency | currency | text | The currency for the price field. | Product Order Engagement / Currency |
| lineItem.attributes.customField0 | attributeCustomField0 | any | A user-supplied value. | - |
| lineItem.attributes.customFieldN | attributeCustomFieldN | any | A user-supplied value. | - |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Properties added to lineItem.attributes aren’t automatically defined in the recommended schema. They’re shown to demonstrate how the source properties are mapped to the target schema. Manually add the properties to the schema.

## Related Topics

- Schema Field Naming
         Rules (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_mobile_schema_support.htm)
- Line Item Attribute (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_line_item_attribute.htm)
- Order Event (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_order_event.htm)
