---
title: "Data Connector Source Object Data Preview Resource"
domain: bi-dev-guide-rest
topic: data-connector-source-object-data-preview-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.631Z
estimatedTokens: 322
keywords: [Data, Connector, Source, Preview, Resource, Analytics, knows, synced, datasets, URL, Formats, Version, Components, HTTP, POST]
---

# Data Connector Source Object Data Preview Resource

> Returns a preview of the source object data that the Analytics
      connector knows about. When a source object is synced to Analytics, it can be used to
      create datasets.

# Data Connector Source Object Data Preview Resource

Returns a preview of the source object data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets.

## Resource URL

```

```

## Formats

JSON

## Available Version

40.0

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataConnectorSourceObjectDataPreviewWithFields()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-source-object-data-previewwithfields.html)

## HTTP Methods

GET POST

## Request body for POST

[Source Object Data Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_source_object_data_input.htm "The request to retrieve data from a source object given a list of fields and advanced properties.")

The following JSON shows a POST request for fields to return in the source object data preview. At least one field value must be specified in the list.

```

```

## Response body for GET and POST

[Source Object Data](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_object_data.htm "The data retrieved from a source object given a list of fields and advanced properties.")

The following JSON is an example response body.

```

```

## Code Examples

```
/wave/dataConnectors/<connectorId>/sourceObjects/<sourceObjectName>/dataPreview
```

```
{
  "sourceObjectFields": ["Id", "Name"]
}
```

```
{
  "dataListJson": {
    "records": [
      {"Id": "xxxxxxxxx1", "Name": "Record Name One"},
      {"Id": "xxxxxxxxx2", "Name": "Record Name Two"}
    ]
  },
  "url": "/services/data/v48.0/wave/dataConnectors/0ItS7000000xxxxxx/sourceObjects/<sourceObjectName>/dataPreview"
}
```

## Related Topics

- Source Object Data Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_source_object_data_input.htm)
- Source Object Data (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_source_object_data.htm)
