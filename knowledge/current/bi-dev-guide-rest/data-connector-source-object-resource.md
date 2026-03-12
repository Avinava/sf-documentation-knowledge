---
title: "Data Connector Source Object Resource"
domain: bi-dev-guide-rest
topic: data-connector-source-object-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.629Z
estimatedTokens: 194
keywords: [Data, Connector, Source, Resource, Analytics, specific, category, knows, synced, datasets, URL, Formats, Version, Components, HTTP]
---

# Data Connector Source Object Resource

> Returns a source object resource for an Analytics connector. A
      source object represents a specific category or type of data that the Analytics connector
      knows about. When a source object is synced to Analytics, it can be used to create
      datasets.

# Data Connector Source Object Resource

Returns a source object resource for an Analytics connector. A source object represents a specific category or type of data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets.

## Resource URL

```

```

## Formats

JSON

## Available Version

37.0

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataConnectorSourceObject()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-source-object.html)

## HTTP Methods

GET

## Response body for GET

[Source Object](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_object.htm "A source object for an Analytics data connector.")

## Code Examples

```
/wave/dataConnectors/<connectorId>/sourceObjects/<sourceObjectName>
```

## Related Topics

- Source Object (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_object.htm)
