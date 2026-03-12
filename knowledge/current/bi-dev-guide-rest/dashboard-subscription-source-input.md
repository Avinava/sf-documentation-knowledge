---
title: "Dashboard Subscription Source Input"
domain: bi-dev-guide-rest
topic: dashboard-subscription-source-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.710Z
estimatedTokens: 192
keywords: [Dashboard, Subscription, Source, Input]
---

# Dashboard Subscription Source Input

> The dashboard subscription source.

# Dashboard Subscription Source Input

The dashboard subscription source.

Properties

DashboardSubscriptionSourceInput inherits properties from the abstract [SourceDetailsInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_source_details_input.htm "The abstract source details for a subscription."). These base properties appear in DashboardSubscriptionSourceInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asset | Asset​Reference​Input | The dashboard asset for the subscription. | Required | 53.0 |
| saved​View | Asset​Reference​Input | The saved view asset for the subscription. | Required | 54.0 |

## Related Topics

- SourceDetailsInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_source_details_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
