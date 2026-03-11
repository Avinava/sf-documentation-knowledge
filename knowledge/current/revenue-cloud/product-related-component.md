---
title: "Product Related Component"
domain: revenue-cloud
topic: product-related-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.485Z
keywords: [Product, Related, Component]
---

# Product Related Component

# Product Related Component

Output representation of the product-related component.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| child​Product​Id | String | Lookup to the child product in the bundle. | Small, 60.0 | 60.0 |
| child​Selling​ModelId | String | ID of the child product selling model record. | Small, 60.0 | 60.0 |
| does​Bundle​PriceInclude​Child | Boolean | Indicates whether the price of the bundle includes the child product (true) or not (false). | Small, 60.0 | 60.0 |
| id | String | ID of the record. | Small, 60.0 | 60.0 |
| isComponent​Required | Boolean | Indicates whether the component is required in the bundle (true) or not (false). | Small, 60.0 | 60.0 |
| isDefault​Component | Boolean | Indicates whether to select the component in the bundle group by default (true) or not (false). | Small, 60.0 | 60.0 |
| isExcluded | Boolean | Indicates whether the component is excluded in the bundle group (true) or not (false). | Small, 60.0 | 60.0 |
| is​Quantity​Editable | Boolean | Indicates whether to allow changes to the quantity of the component in the bundle (true) or not (false). | Small, 60.0 | 60.0 |
| max​Quantity | Double | Maximum quantity of the product in the opportunity, quote, or order line item. | Small, 60.0 | 60.0 |
| min​Quantity | Double | Minimum quantity of the product in the opportunity, quote, or order line item. | Small, 60.0 | 60.0 |
| parent​Product​Id | String | Lookup to the parent product. | Small, 60.0 | 60.0 |
| parent​Selling​ModelId | String | ID of the product selling model record. | Small, 60.0 | 60.0 |
| product​Classification​Id | String | ID of the product classification record. | Small, 60.0 | 60.0 |
| productInstance​Reuse | String | Reserved for future use. | Small, 62.0 | 62.0 |
| product​Relationship​TypeId | String | ID of the product relationship type record. | Small, 60.0 | 60.0 |
| quantity | Double | Quantity of the child products. | Small, 60.0 | 60.0 |
| quantity​Scale​Method | String | Method to scale the quantity of the child product in relation to the quantity of the parent. Valid values are:ConstantProportional | Small, 60.0 | 60.0 |
| quote​Visibility | String | Specifies whether a quote line item must be shown on the transaction line editor or quote document. Valid values are:AlwaysTransaction Line Editor Only—Specifies whether to show a quote line item on quote editor only.Quote Document Only—Specifies whether to show a quote line item on quote proposal only.NeverThe API returns this property only if the CoreCPQ permission set is available. | Small, 64.0 | 64.0 |
| sequence | Integer | Order in which the child products are displayed. | Small, 60.0 | 60.0 |