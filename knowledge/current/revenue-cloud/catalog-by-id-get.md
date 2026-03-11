---
title: "Catalog By ID (GET)"
domain: revenue-cloud
topic: catalog-by-id-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.270Z
keywords: [Catalog, GET]
---

# Catalog By ID (GET)

# Catalog By ID (GET)

Retrieve details of catalog records based on a catalog ID.

Resource

```

```

Resource example

```

```

```

```

Available version

60.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 60.0 |
| fields | String[] | For internal use only. | Optional | 60.0 |
| language | String | Custom language that you can specify to get translated data for the fields of an object that's enabled for translation. See Translate Product and Product Category Data. | Optional | 64.0 |

Response body for GET

[Catalogs Output](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_catalogs_output.htm "Output representation of the retrieved catalog result.")