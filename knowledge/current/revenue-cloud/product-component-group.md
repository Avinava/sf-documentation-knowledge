---
title: "Product Component Group"
domain: revenue-cloud
topic: product-component-group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.471Z
keywords: [Product, Component, Group]
---

# Product Component Group

# Product Component Group

Output representation of the product component group.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Unique code of the product component group, which is used only during design time. | Small, 60.0 | 60.0 |
| components | Product[] | List of the product details. | Small, 60.0 | 60.0 |
| childGroups | Product Component Group[] | List of child product components groups. | Small, 62.0 | 62.0 |
| description | String | Description of the product component group. | Small, 60.0 | 60.0 |
| id | String | ID of the record. | Small, 60.0 | 60.0 |
| isExcluded | Boolean | Indicates whether the product component group is excluded from the product bundle for selection in the run time (true) or not (false). | Small, 60.0 | 60.0 |
| max​Bundle​Components | Integer | Maximum number of product components that can be added to a group. | Small, 60.0 | 60.0 |
| min​Bundle​Components | Integer | Minimum number of product components that can be added to a group. | Small, 60.0 | 60.0 |
| name | String | Name of the record. If data translation is set up and specified in the org, the translated description is available. | Small, 60.0 | 60.0 |
| parent​Product​Id | String | ID associated with the parent product record. | Small, 60.0 | 60.0 |
| parent​GroupId | String | ID of the parent group record. | Small, 62.0 | 62.0 |
| sequence | Integer | Order in which the groups are listed in the bundle. | Small, 60.0 | 60.0 |