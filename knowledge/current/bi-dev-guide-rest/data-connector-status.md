---
title: "Data Connector Status"
domain: bi-dev-guide-rest
topic: data-connector-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.186Z
estimatedTokens: 198
keywords: [Data, Connector, Status, Analytics]
---

# Data Connector Status

> The status for an Analytics data connector.

# Data Connector Status

The status for an Analytics data connector.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Message from testing a connection status. | Small, 45.0 | 45.0 |
| status | Connect​Wave​Data​Connector​Status​Enum | Result from testing the Analytics connector. Valid values are:FailureSuccess | Small, 45.0 | 45.0 |
| url | String | The URL for the data connector status. | Small, 45.0 | 45.0 |

#### See Also

-   [Data Connector Status Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_status.htm "Tests the status of an external Analytics connector. This API doesn't work to test a local Salesforce connector.")

## Related Topics

- Data Connector Status Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_status.htm)
