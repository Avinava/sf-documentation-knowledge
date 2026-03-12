---
title: "Order"
domain: api-placeorder
topic: order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.143Z
estimatedTokens: 1039
keywords: [Order, resource, add, new, products, custom, records, retrieve, data, specific, Examples]
---

# Order

> Use this resource to add one or more new order products
and custom object records to an existing order or to retrieve data
for a specific order.

# Order

Use this resource to add one or more new order products and custom object records to an existing order or to retrieve data for a specific order.

## Syntax

You can only PATCH one order at a time.

If available, GET method retrieves the orders’ child order products and custom objects under the order or order products.

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

POST

Request body

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the order. | 30.0 |
| OrderItems | Order Products | Child order products of the new order. | 30.0 |
| CustomObject__r | Custom Object | Child custom object records of the new order. | 30.0 |

Attributes

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| type | String | Format of the resource. | 30.0 |

Order Products

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the order product. | 30.0 |
| PricebookEntryId | String | Unique record identifier for the associated price book entry. | 30.0 |
| quantity | Number | Number of units of the order product. | 30.0 |
| UnitPrice | Currency | The unit price for the order product. | 30.0 |
| orderId | String | Unique record identifier for the parent order. | 30.0 |
| Id | String | Unique order product identifier. | 30.0 |

Custom Objects

| Property | Type | Description | Since Version |
| --- | --- | --- | --- |
| attributes | Attributes | Type and URL of the custom object. | 30.0 |
| Id | String | Unique custom object identifier. | 30.0 |

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


The following aren’t supported.

-   Arrays of values. For example: order.orderItems.effectiveDate=2013–01–01,2013–01–02.
-   Operators: \>, \>=, < and <=
-   The OR condition

| Parameters | Description |
| --- | --- |
| order | The object name of the record being filtered. In this resource, this is always order. |
| orderItems | The relationship name of the field that the order’s data will be filtered by. In this resource, this is always orderItems. |
| field name | The field whose value to filter by. For example, if you want to only retrieve order products with a certain start date, the field name is effectivedate. |
| value | The value to filter by. For example, if you want to only retrieve order products that started on January 1, 2013, the value is 2013–01–01. |

Response body

| Property | Type | Description |
| --- | --- | --- |
| totalSize | Number | Total number of records listed. |
| records | Records[] | Attributes and IDs of the new records. |

Records

| Property | Type | Description |
| --- | --- | --- |
| attributes | Attributes | Type and URL for the record. |
| Id | String | Unique record identifier. |

Attributes

| Property | Type | Description |
| --- | --- | --- |
| type | String | Format of the resource. |
| url | URI | Resource URL. |

## Examples

-   [Add Order Products to an Existing Order](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_add_orderprod.htm)
-   [Get Details About an Order](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_get_details_order.htm)
-   [Filter Details About an Order](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_filter_details_order.htm)

## Code Examples

```
/services/data/latest API version/commerce/sale/order/order ID
```

```
/services/data/latest API version/commerce/sale/order/order ID?order.orderItems.field name=value
```

```
/services/data/v30.0/commerce/sale/{contractId}?contract.status='Activated'
&contract.Orders.status='Draft'&contract.Orders.OrderItems.unitprice=300
```

## Related Topics

- Add Order Products to an Existing Order (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_add_orderprod.htm)
- Get Details About an Order (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_get_details_order.htm)
- Filter Details About an Order (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_filter_details_order.htm)
