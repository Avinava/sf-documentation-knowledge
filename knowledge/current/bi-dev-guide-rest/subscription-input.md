---
title: "Subscription Input"
domain: bi-dev-guide-rest
topic: subscription-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.870Z
estimatedTokens: 276
keywords: [Subscription, Input, Analytics]
---

# Subscription Input

> An Analytics subscription.

# Subscription Input

An Analytics subscription.

Properties

SubscriptionInput inherits properties from the abstract [BaseSubscriptionInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_subscription_input.htm "The base subscription request input."). These base properties appear in SubscriptionInput alongside the properties defined explicitly in the following table.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| schedule | Subscription​Schedule​Input | The subscription schedule. | Required | 47.0 |
| source | Subscription​Source​Input | The subscription source including type, label, and record ID. | Small, 52.0 | 52.0 |

#### See Also

-   [Subscriptions List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions.htm "Returns a list of subscriptions or creates a subscription schedule.")

-   [Subscription Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid.htm "Retrieve, update, or delete a subscription.")

## Related Topics

- BaseSubscriptionInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_subscription_input.htm)
- Subscription​Schedule​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_schedule_input.htm)
- Subscription​Source​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_source_input.htm)
- Subscriptions List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions.htm)
- Subscription Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid.htm)
