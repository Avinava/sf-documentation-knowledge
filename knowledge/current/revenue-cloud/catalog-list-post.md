---
title: "Catalog List (POST)"
domain: revenue-cloud
topic: catalog-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.267Z
keywords: [Catalog, List, POST, Note]
---

# Catalog List (POST)

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