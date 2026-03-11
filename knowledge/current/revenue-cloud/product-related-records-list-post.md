---
title: "Product Related Records List (POST)"
domain: revenue-cloud
topic: product-related-records-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.338Z
keywords: [Product, Related, Records, List, POST, Note]
---

# Product Related Records List (POST)

# Product Related Records List (POST)

Retrieve related ProductRampSegment or ProductUsageGrant records for Product2 object.

Resource

```

```

The supported entity or object is Product2.

Resource example

```

```

Available version

62.0

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

POST methods typically create an item, but for this resource POST is used to retrieve information.

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 62.0 |
| recordIds | String[] | List of record IDs to return the relatedObjects records for. The maximum number of record IDs supported is 20. | Required | 62.0 |
| related​ObjectNodes | Related Object Node Input[] | List of nodes for the related objects. The maximum number of related object nodes supported is two. | Required | 62.0 |

Response body for POST

[Related Records List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_related_records_list_output.htm "Output representation of the list of related records.")