---
title: "Contract-based Orders"
domain: api-placeorder
topic: contract-based-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.090Z
estimatedTokens: 1158
keywords: [Contract-based, Orders, resource, add, new, contract, well, order, products, custom, records, retrieve, data, specific, Examples]
---

# Contract-based Orders

> With this resource, you can add one or more new orders
to an existing contract, as well as order products and custom object
records for each order, or you can retrieve data for a specific contract.

# Contract-based Orders

With this resource, you can add one or more new orders to an existing contract, as well as order products and custom object records for each order, or you can retrieve data for a specific contract.

## Syntax

If available, GET method retrieves the contract’s child orders and order products, as well as custom objects under the contract and orders.

URI

```

```

For retrieving filtered data:

```

```

Available since release

30.0

Formats

JSON

HTTP methods

PATCH, GET

Request parameters

-   You can use parameters for all standard and custom fields on contracts, orders, order products, and any custom objects directly related to these objects.
-   The parameters must be fully qualified. For example: objectname.relationshipname.fieldname\=value.
    -   Object name must be all lower-case.
    -   Relationship name must match what is defined on the object and is case-sensitive.
    -   Field name isn’t case sensitive.
    -   If the value is a string, it must be encased in single quotation marks. If the value is a number, it must not be encased. If the value is a date, it should be in the YYYY-MM-DD format.
-   You can use multiple parameter fields, separated by "&", to make more detailed filters.  For example:

    ```

    ```


The following aren’t supported:

-   Arrays of values. For example: contract.orders.Status='Activated','Draft'.
-   Operators: \>, \>=, < and <=
-   The OR condition

| Parameters | Description | Since Version |
| --- | --- | --- |
| contract | The object name of the record being filtered. In this resource, this is always contract. | 30.0 |
| orders | The relationship name of the field that the order’s data will be filtered by. In this resource, this is always orders. | 30.0 |
| field name | The field whose value to filter by. For example, if you want to only retrieve orders with a status category, the field name is StatusCode. | 30.0 |
| value | The value to filter by. For example, if you want to only retrieve orders with a status category of Activated, the value is Activated. | 30.0 |

Request body

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type of the contract. | 30.0 |
| Id | String | Unique contract identifier. | 30.0 |
| Orders | Orders[] | Child orders of the contract. | 30.0 |

Attributes

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| type | String | Format of the resource. | 30.0 |

Order Records

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type of the order record. | 30.0 |
| Status | String | Status of the order. | 30.0 |
| contractId | String | Unique record identifier for the parent contract. | 30.0 |
| pricebook2Id | String | Unique record identifier for the associated price book. | 30.0 |
| OrderItems | Order Products[] | Child order products of the order. | 30.0 |
| CustomObject__r | Custom Objects[] | Child custom object records of the order. | 30.0 |

Order Products

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the order product. | 30.0 |
| PricebookEntryId | String | Unique record identifier for the associated price book entry. | 30.0 |
| quantity | Number | Number of units of the order product. | 30.0 |
| UnitPrice | Currency | The unit price for the order product. | 30.0 |

Custom Objects

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the custom object. | 30.0 |
| Id | String | Unique custom object identifier. | 30.0 |

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

## Examples

-   [Add Orders to an Existing Contract](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contract_patch.htm)
-   [Get Details About a Contract](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_get_details.htm)
-   [Filter Details About a Contract](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_filter_details.htm)

## Code Examples

```
/services/data/latest API version/commerce/sale/contractId
```

```
/services/data/latest API version/commerce/sale/contract ID?contract.orders.field name=value
```

```
/services/data/v30.0/commerce/sale/{contractId}?contract.status='Activated'
&contract.Orders.status='Draft'&contract.Orders.OrderItems.unitprice=300
```

## Related Topics

- Add Orders to an Existing Contract (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contract_patch.htm)
- Get Details About a Contract (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_get_details.htm)
- Filter Details About a Contract (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_filter_details.htm)
