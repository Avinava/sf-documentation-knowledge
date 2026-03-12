---
title: "Data Connector Source Object Fields Resource"
domain: bi-dev-guide-rest
topic: data-connector-source-object-fields-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.633Z
estimatedTokens: 154
keywords: [Data, Connector, Source, Resource, particular, URL, Formats, Version, Components, HTTP]
---

# Data Connector Source Object Fields Resource

> Returns a list of source fields for a particular source
    object.

# Data Connector Source Object Fields Resource

Returns a list of source fields for a particular source object.

## Resource URL

```

```

## Formats

JSON

## Available Version

37.0

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataConnectorSourceFields()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-source-fields.html)

## HTTP Methods

GET

## Response body for GET

[Source Field Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_field_collection.htm "A collection of fields for a source object.")

## Code Examples

```
/wave/dataConnectors/<connectorId>/sourceObjects/<sourceObjectName>/fields
```

## Related Topics

- Source Field Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_field_collection.htm)
