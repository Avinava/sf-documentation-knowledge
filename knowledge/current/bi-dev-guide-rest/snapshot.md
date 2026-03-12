---
title: "Snapshot"
domain: bi-dev-guide-rest
topic: snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.568Z
estimatedTokens: 218
keywords: [Snapshot, Analytics]
---

# Snapshot

> An Analytics snapshot.

# Snapshot

An Analytics snapshot.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actions | Notification​Action[] | The list of actions taken when the subscription is executed. | Small, 53.0 | 53.0 |
| active | Boolean | Indicates whether the subscription is active (true) or not (false). | Small, 47.0 | 47.0 |
| asset​Bundle | Wave​Asset​Bundle | The asset bundle associated with the subscription. | Small, 47.0 | 47.0 |
| created​Date | Date | The date the subscription was created. | Small, 47.0 | 47.0 |
| id | String | The ID of the subscription. | Small, 47.0 | 47.0 |
| last​Modified​Date | Date | The date the subscription was last modified on. | Small, 47.0 | 47.0 |
| schedule | Subscription​Schedule | The schedule for the subscription notifications. | Small, 47.0 | 47.0 |

## Related Topics

- Notification​Action (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_notification_actions.htm)
- Wave​Asset​Bundle (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_asset_bundle.htm)
- Subscription​Schedule (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_subscription_schedule.htm)
