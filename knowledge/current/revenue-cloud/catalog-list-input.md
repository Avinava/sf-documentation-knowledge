---
title: "Catalog List Input"
domain: revenue-cloud
topic: catalog-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.108Z
keywords: [Catalog, List, Input]
---

# Catalog List Input

# Catalog List Input

Input representation of the request to get a list of catalogs.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique identifier value that’s attached to the requests and messages, and accepts references to a particular transaction or event chain. | Optional | 60.0 |
| limit | Integer | Number of items to include in the response. | Optional | 60.0 |
| offset | Integer | Offset size from which to get the catalog count. | Optional | 60.0 |
| order​By | String[] | Sort order for the catalogs. | Optional | 60.0 |
| user​Context | User Context Input | User context details. For example, account ID or contact ID. | Optional | 60.0 |