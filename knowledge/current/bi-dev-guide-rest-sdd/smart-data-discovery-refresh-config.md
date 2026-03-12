---
title: "Smart Data Discovery Refresh Config"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-refresh-config
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.991Z
estimatedTokens: 239
keywords: [Smart, Data, Discovery, Refresh, Config, configuration, Einstein, prediction]
---

# Smart Data Discovery Refresh Config

> The refresh configuration for an Einstein Discovery prediction.

# Smart Data Discovery Refresh Config

The refresh configuration for an Einstein Discovery prediction.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| is​Enabled | Boolean | Indicates whether scheduled refresh is enabled (true) or not (false). | Small, 50.0 | 50.0 |
| recipient​List | Smart​Data​Discovery​Recipient[] | A list of recipients for email notification. | Small, 50.0 | 50.0 |
| schedule | Schedule | The schedule for the refresh job. | Small, 50.0 | 50.0 |
| should​Score​After​Refresh | Boolean | Indicates whether to automatically rescore records after a successful refresh (true) or not (false). | Small, 50.0 | 50.0 |
| user​Context | Smart​Data​Discovery​User | The user context for the refresh job. | Small, 50.0 | 50.0 |
| warning​Threshold​Percentage | Double | The refresh warning threshold percentage for auto model deploy. | Small, 50.0 | 50.0 |

## Related Topics

- Smart​Data​Discovery​Recipient (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_recipient.htm)
- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
