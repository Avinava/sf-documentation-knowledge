---
title: "Create Order"
domain: api-placeorder
topic: create-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.153Z
estimatedTokens: 602
keywords: [Order, resource, new, products, custom, objects]
---

# Create Order

> With this resource, you can create a new order with order
products and custom objects.

# Create Order

With this resource, you can create a new order with order products and custom objects.

## Syntax

If you don’t want to add the order to a contract, you can add it directly to an account. You can only create one new order per call. The request body must have either an account or a contract as its parent record, and it must have a reference to a price book.

URI

```

```

Available since release

30.0

Formats

JSON

HTTP methods

POST

Request body

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the new order. | 30.0 |
| OrderItems | Order Products[] | Child order products of the new order. | 30.0 |
| CustomObject__r | Custom Objects[] | Child custom object records of the new order. | 30.0 |

Attributes

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| type | String | Format of the resource. | 30.0 |
| url | String | Resource URL. | 30.0 |

Order Products

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the order product. | 30.0 |
| PricebookEntryId | String | Unique record identifier for the associated price book entry. | 30.0 |
| quantity | Number | Number of units of the order product. | 30.0 |
| UnitPrice | Currency | The unit price for the order product. | 30.0 |
| Id | String | Unique order product identifier. | 30.0 |

Custom Objects

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the custom object. | 30.0 |
| Id | String | Unique custom object identifier. | 30.0 |

Request parameters

None

Response body

| Property | Type | Description |
| --- | --- | --- |
| totalSize | Number | Total number of records retrieved. |
| done | Boolean | When true, the operation was successful. |
| records | Records[] | Attributes and ID of contract record. |

Records

| Property | Type | Description |
| --- | --- | --- |
| attributes | Attributes | Type and URL of the record. |
| Id | String | Unique contract identifier. |

Attributes

| Property | Type | Description |
| --- | --- | --- |
| type | String | Format of the resource. |
| url | String | Resource URL. |

## Example

See [Add an Order to an Existing Account](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_place_order_account.htm).

## Code Examples

```
/services/data/latest API version/commerce/sale/order
```

## Related Topics

- Add an Order to an Existing Account (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_place_order_account.htm)
