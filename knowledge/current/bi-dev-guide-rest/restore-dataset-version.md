---
title: "Restore Dataset Version"
domain: bi-dev-guide-rest
topic: restore-dataset-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.531Z
estimatedTokens: 245
keywords: [Restore, Dataset, Version, message, Analytics, data, connector, ingest]
---

# Restore Dataset Version

> The message returned for an Analytics data connector ingest request or an Analytics
  dataset version update request.

# Restore Dataset Version

The message returned for an Analytics data connector ingest request or an Analytics dataset version update request.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | The message result of the Analytics connector data sync request or the restore dataset version. | Small, 43.0 | 43.0 |
| url | String | The URL to get the status of the request. | Small, 43.0 | 43.0 |

#### See Also

-   [Data Connector Ingest Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_ingest.htm "Triggers the Analytics connector to run a data sync. This API is the equivalent of the “Run Now” UI feature.")

-   [Dataset Versions List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions.htm "Returns a list of dataset versions for a particular dataset or creates a version.")

## Related Topics

- Data Connector Ingest Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_ingest.htm)
- Dataset Versions List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_id_versions.htm)
