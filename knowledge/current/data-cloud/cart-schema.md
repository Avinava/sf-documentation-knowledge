---
title: "Cart Schema"
domain: data-cloud
topic: cart-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.201Z
keywords: [Cart, Schema, Note]
---

# Cart Schema

# Cart Schema

Map an Engagement Mobile SDK cart event to the cart schema.

| Source Event Property | Target Schema Developer Name | Field Type | Description | Customer 360 Data Model Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | Engagement / Engagement Id |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | Engagement / Engagement Date Time |
| <Automatically Assigned> | eventType = "cart" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The session identifier. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | Shopping Cart Engagement / Individual |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | interactionName = "Add To Cart" \| "Remove From Cart" \| "Replace Cart" | text | Required. An event’s descriptive name. | Shopping Cart Engagement / Shopping Cart Event Type |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK, the value is mobile. | Engagement / Engagement Channel Type |
| <Automatically Assigned when Location Tracking is allowed> | longitude | number | The longitudinal coordinate, in decimal degrees, reported by the device at the time the event was captured. | Device Longitude |
| <Automatically Assigned when Location Tracking is allowed> | latitude | number | The latitudinal coordinate, in decimal degrees, reported by the device at the time the event was captured. | Device Latitude |

Each [Line Item Attribute](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_line_item_attribute.htm "Line items are intended to describe purchasable items and are used in cart and order interactions.") contained in the [Cart Event](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_cart_event.htm "Use a cart event interaction to capture when a customer modifies the contents of their online shopping cart.") is mapped to a child event where cartEventId is set to the parent cart event’s eventId.

| Source Event Property | Target Schema Developer Name | Field Type | Description | Customer 360 Data Model Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| <Automatically Assigned> | eventType = "cartItem" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The session identifier. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | cartEventId | text | Required. The eventId of the cart event containing the line item. | Shopping Cart Product Engagement / Shopping Cart Engagement |
| lineItem.catalogObjectType | catalogObjectType | text | Required. A type name of the catalog object referenced in the line item. | Shopping Cart Product Engagement / Product Category |
| lineItem.catalogObjectId | catalogObjectId | text | Required. A unique identifier representing the catalog object referenced in the line item. | Shopping Cart Product Engagement / Product |
| lineItem.quantity | quantity | number | The number of catalog objects in the line item. | Shopping Cart Product Engagement / Product Quantity |
| lineItem.price | price | number | The price of the catalog object referenced in the line item. | Shopping Cart Product Engagement / Product Price |
| lineItem.currency | currency | text | The currency for the price field. | Shopping Cart Product Engagement / Currency |
| lineItem.attributes.customField0 | attributeCustomField0 | any | A user-supplied value. | - |
| lineItem.attributes.customFieldN | attributeCustomFieldN | any | A user-supplied value. | - |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Properties added to lineItem.attributes aren’t automatically defined in the recommended schema. They’re shown to demonstrate how the source properties are mapped to the target schema. You must manually add the properties to the schema.