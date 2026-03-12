---
title: "Subscription Resources"
domain: bi-dev-guide-rest
topic: subscription-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.825Z
estimatedTokens: 456
keywords: [Subscription, Resources, Manages, subscriptions, Analytics, dashboards]
---

# Subscription Resources

> Manages subscriptions for Analytics dashboards.

# Subscription Resources

Manages subscriptions for Analytics dashboards.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Subscriptions List Resource | Returns a list of subscriptions or creates a subscription schedule. | GET POST | /wave/subscriptions |
| Subscription Resource | Retrieve, update, or delete a subscription. | GET PATCH DELETE | /wave/subscriptions/<subscriptionId> |
| Subscription Layout Resource | Update the grid layout for a subscription. | PATCH | /wave/subscriptions/<subscriptionId>/layout |
| Subscription Widgets Resource | Create a subscription for a widget. | POST | /wave/subscriptions/<subscriptionId>/widgets |
| Subscription Widget Resource | Update or delete a subscription for a widget. | PATCH DELETE | /wave/subscriptions/<subscriptionId>/widgets/<widgetId> |

-   **[Subscriptions List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions.htm)**
    Returns a list of subscriptions or creates a subscription schedule.
-   **[Subscription Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid.htm)**
    Retrieve, update, or delete a subscription.
-   **[Subscription Layout Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid_layout.htm)**
    Update the grid layout for a subscription.
-   **[Subscription Widgets Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid_widgets.htm)**
    Create a subscription for a widget.
-   **[Subscription Widget Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid_widgets_id.htm)**
    Update or delete a subscription for a widget.

## Related Topics

- Subscriptions List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions.htm)
- Subscription Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid.htm)
- Subscription Layout Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid_layout.htm)
- Subscription Widgets Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid_widgets.htm)
- Subscription Widget Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_subscriptionid_widgets_id.htm)
