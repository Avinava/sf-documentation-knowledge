---
title: "Dashboard Subscription Source"
domain: bi-dev-guide-rest
topic: dashboard-subscription-source
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.172Z
estimatedTokens: 187
keywords: [Dashboard, Subscription, Source]
---

# Dashboard Subscription Source

> The dashboard subscription source.

# Dashboard Subscription Source

The dashboard subscription source.

Properties

DashboardSubscriptionSource inherits properties from the abstract [SubscriptionSource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription_source.htm "The base Analytics subscription source."). These base properties appear in DashboardSubscriptionSource alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset | Asset​Reference | The collection asset for the subscription. | Small, 53.0 | 53.0 |
| saved​View | Asset​Reference | The dashboard saved view for the subscription. | Small, 54.0 | 54s.0 |

## Related Topics

- SubscriptionSource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription_source.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
