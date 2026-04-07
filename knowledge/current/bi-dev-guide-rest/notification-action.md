---
title: "Notification Action"
domain: bi-dev-guide-rest
topic: notification-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:10.946Z
estimatedTokens: 139
keywords: [Notification, Action, Analytics, subscription]
---

# Notification Action

> A notification action for an Analytics subscription.

# Notification Action

A notification action for an Analytics subscription.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| configuration | Base​Notification​Action​Configuration | The action configuration. Valid values are:Post​To​Slack​Notification​Action​ConfigurationSend​To​Email​Notification​Action​Configuration | Small, 53.0 | 53.0 |
| type | Notification​Action​Type | The notification action type. Valid values are:Post​To​SlackSend​Email | Small, 53.0 | 53.0 |

## Related Topics

- Base​Notification​Action​Configuration (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_notification_action_configuration.htm)
- Post​To​Slack​Notification​Action​Configuration (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_post_to_slack_notification_action_configuration.htm)
- Send​To​Email​Notification​Action​Configuration (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_send_to_email_notification_action_configuration.htm)
