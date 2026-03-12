---
title: "Catalog List (POST)"
domain: revenue-cloud
topic: catalog-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.656Z
estimatedTokens: 298
keywords: [Catalog, List, POST, Get, paginated, list, catalogs., API, composite, Product, Discovery., Retrieve, search, filter, sort, catalog, records., Note]
---

# Catalog List (POST)

> Retrieve, search, filter, or sort catalog
    records.

# Catalog List (POST)

Retrieve, search, filter, or sort catalog records.

Resource

```

```

Resource example

```

```

Available version

60.0

Requires Chatter

No

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

The POST method is used to retrieve the catalog records instead of the GET method as a request payload is sent to filter the records.

Request body for POST

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

Response body for POST

[Catalogs Output](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_catalogs_output.htm "Output representation of the retrieved catalog result.")

## Code Examples

```
/connect/cpq/catalogs
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/catalogs
```

```
{
    "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
    "limit": 10,
    "offset": 0,
    "orderBy": [
        "name:asc",
        "id:desc"
    ],
    "userContext": {
        "accountId": "001xx0000000001AAA",
        "contactId": "003xx00000000D7AAI"
    }
    }
```

```
/connect/pcm/catalogs
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/catalogs
```

## Related Topics

- User Context
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_user_context_input.htm)
- CPQ Base List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_list_output.htm)
- Filter (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_criteria.htm)
- Sort (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_order.htm)
- Catalogs Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_catalogs_output.htm)
