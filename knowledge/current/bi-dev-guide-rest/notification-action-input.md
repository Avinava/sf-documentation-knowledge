---
title: "Notification Action Input"
domain: bi-dev-guide-rest
topic: notification-action-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:08.496Z
estimatedTokens: 145
keywords: [Notification, Action, Input, Analytics, subscription]
---

# Notification Action Input

> A notification action for an Analytics subscription.

# Notification Action Input

A notification action for an Analytics subscription.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| configuration | Base​Notification​Action​Configuration​Input | The action configuration. Valid values are:Post​To​Slack​Notification​Action​Configuration​InputSend​To​Email​Notification​Action​Configuration​Input | Small, 53.0 | 53.0 |
| type | Notification​Action​Type | The notification action type. Valid values are:Post​To​SlackSend​Email | Small, 53.0 | 53.0 |

## Related Topics

- Base​Notification​Action​Configuration​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_notification_action_configuration_input.htm)
- Post​To​Slack​Notification​Action​Configuration​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_post_to_slack_notification_action_configuration_input.htm)
- Send​To​Email​Notification​Action​Configuration​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_send_to_email_notification_action_configuration_input.htm)
