---
title: "Catalog Input"
domain: revenue-cloud
topic: catalog-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:07.787Z
estimatedTokens: 355
keywords: [Catalog, Input, representation, retrieve, records]
---

# Catalog Input

> Input representation of the request to retrieve catalog records.

# Catalog Input

Input representation of the request to retrieve catalog records.

JSON example

This example shows how to retrieve catalogs that contain apple in the catalog name.

```

```

This example shows how to retrieve catalogs with ServiceProcess as the catalog type.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 60.0 |
| filter | Filter | Criteria to filter the records. Filters are applicable to the fields of the ProductCatalog object. The supported operators are:eqincontainsThe supported properties are name and catalogType. | Optional | 60.0 |
| language | String | Custom language that you can specify to get translated data for the fields of an object that's enabled for translation. See Translate Product and Product Category Data. | Optional | 64.0 |
| offset | Integer | Number of records to skip. The default value is 0. | Optional | 60.0 |
| page​Size | Integer | Number of records per page. Valid values are from 1 through 100. If unspecified, defaults to 100. | Optional | 60.0 |
| sort | Sort | Sort order of the catalog records. The supported operators are:ascdesc | Optional | 60.0 |

## Code Examples

```
{
"pageSize": 100,
"offset": 0,
"language": "french",
"filter": {
"criteria": [
{
"property": "name",
"operator": "contains",
"value": "apple"
}
]
}
}
```

```
{
"pageSize": 100,
"offset": 0,
"sort": {
  "orders": [
   {
   "property": "name",
   "direction": "desc"
   }
  ]
 },
"filter": {
"criteria": [
{
"property": "catalogType",
"operator": "eq",
"value": "ServiceProcess"
}
]
}
}
```

## Related Topics

- Filter (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_criteria.htm)
- Sort (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_order.htm)
