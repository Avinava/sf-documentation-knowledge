---
title: "Data Connector Ingest Resource"
domain: bi-dev-guide-rest
topic: data-connector-ingest-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.623Z
estimatedTokens: 242
keywords: [Data, Connector, Ingest, Resource, Triggers, Analytics, run, sync, API, equivalent, “Run, Now”, feature, URL, Formats]
---

# Data Connector Ingest Resource

> Triggers the Analytics connector to run a data sync. This API is the
      equivalent of the “Run Now” UI feature.

# Data Connector Ingest Resource

Triggers the Analytics connector to run a data sync. This API is the equivalent of the “Run Now” UI feature.

## Resource URL

```

```

## Formats

JSON

## Available Version

43.0

## Available Components

-   LWC — [lightning/analyticsWaveApi ingestDataConnector()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-ingest-data-connector.html)

## HTTP Methods

POST

## Request body for POST

The POST request requires an empty JSON body.

```

```

## Response body for POST

[Restore Dataset Version](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_restore_dataset_version.htm "The message returned for an Analytics data connector ingest request or an Analytics dataset version update request.")

## Example

For an example of using the ingest API, see [Sync Data Connections](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#sync_data_connections)

## Code Examples

```
/wave/dataConnectors/<connectorId>/ingest
```

## Related Topics

- Restore Dataset Version (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_restore_dataset_version.htm)
- Sync Data Connections (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
