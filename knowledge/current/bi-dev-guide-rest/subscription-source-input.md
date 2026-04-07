---
title: "Subscription Source Input"
domain: bi-dev-guide-rest
topic: subscription-source-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:54.980Z
estimatedTokens: 132
keywords: [Subscription, Source]
---

> The subscription source.

# Subscription Source Input

The subscription source.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| details | Source​Details​Input | The source details. Valid values are:Collection​Subscription​Source​InputDashboard​Subscription​Source​InputWidget​Subscription​Source​Input | Required | 52.0 |
| type | Connect​Subscription​Source​Type​Enum | The source type for the subscription. Valid values are:CollectionDashboardWidget | Required | 52.0 |

## Related Topics

- Source​Details​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_source_details_input.htm)
- Collection​Subscription​Source​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_collection_subscription_source_input.htm)
- Dashboard​Subscription​Source​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_subscription_source_input.htm)
- Widget​Subscription​Source​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_widget_subscription_source_input.htm)
