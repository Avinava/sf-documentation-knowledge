---
title: "Create Contract-based Orders"
domain: api-placeorder
topic: create-contract-based-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.100Z
estimatedTokens: 803
keywords: [Contract-based, Orders, resource, new, contract, order, products, well, custom, records, level, Usage]
---

# Create Contract-based Orders

> With this resource, you can create a new contract with
orders and order products, as well as custom object records on the
contract or order level.

# Create Contract-based Orders

With this resource, you can create a new contract with orders and order products, as well as custom object records on the contract or order level.

## Syntax

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
| attributes | Attributes | Type and URL of the new contract. | 30.0 |
| AccountId | String | Unique record identifier for the parent account. | 30.0 |
| Status | String | Status of the contract. | 30.0 |
| Orders | Orders[] | Child orders of the new contract. | 30.0 |
| CustomObject__r | Custom Objects[] | Child custom object records of the new contract. | 30.0 |

Attributes

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| type | String | Format of the resource. | 30.0 |

Orders

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the new order record. | 30.0 |
| Status | String | Status of the order. | 30.0 |
| Pricebook2Id | String | Unique record identifier for the associated price book. | 30.0 |
| OrderItems | Order Products[] | Child order products of the new order. | 30.0 |
| CustomObject__r | Custom Objects[] | Child custom object records of the new order. | 30.0 |

Custom Object Records

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the custom object record. | 30.0 |
| Id | String | Unique record identifier. | 30.0 |

Order Products

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the order product record. | 30.0 |
| PricebookEntryId | String | Unique record identifier for the associated price book entry. | 30.0 |
| quantity | Number | Number of units of the order product. | 30.0 |
| UnitPrice | Currency | The unit price for the order product. | 30.0 |

Request parameters

None

Response body

| Property | Type | Description |
| --- | --- | --- |
| totalSize | Number | Total number of records added. |
| done | Boolean | When true, the operation was successful. |
| records | Records[] | Attributes and IDs of records. |

Records

| Property | Type | Description |
| --- | --- | --- |
| attributes | Attributes | Type and URL for the new record. |
| Id | String | Unique identifier for the new record. |

Attributes

| Property | Type | Description |
| --- | --- | --- |
| type | String | Format of the resource. |
| url | String | Resource URL. |

## Example

See [Add a Contract and Orders to an Existing Account](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_place_orders_contract.htm).

## Usage

You can only create one contract at a time. You can’t POST new orders onto an existing contract. For that, see the [Contract-based Orders](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder.htm "With this resource, you can add one or more new orders to an existing contract, as well as order products and custom object records for each order, or you can retrieve data for a specific contract.") resource.

## Code Examples

```
/services/data/latest API version/commerce/sale
```

## Related Topics

- Add a Contract and Orders to an Existing Account (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_place_orders_contract.htm)
- Contract-based Orders (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder.htm)
