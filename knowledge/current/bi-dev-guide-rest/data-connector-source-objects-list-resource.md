---
title: "Data Connector Source Objects List Resource"
domain: bi-dev-guide-rest
topic: data-connector-source-objects-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.626Z
estimatedTokens: 296
keywords: [Data, Connector, Source, Objects, Resource, present, under, Analytics, connection]
---

# Data Connector Source Objects List Resource

> Returns a list of all the source objects that are present under the
      specified Analytics connection.

# Data Connector Source Objects List Resource

Returns a list of all the source objects that are present under the specified Analytics connection.

Resource URL

```

```

Formats

JSON

Available Version

37.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | A generated token that indicates the view of the objects to be returned. | Optional | 37.0 |
| pageSize | Int | Number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 37.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 54.0 |

Response body for GET

[Source Object Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_object_collection.htm "A collection of source objects for an Analytics data connector.")

## Code Examples

```
/wave/dataConnectors/<connectorId>/sourceObjects
```

## Related Topics

- Source Object Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_object_collection.htm)
