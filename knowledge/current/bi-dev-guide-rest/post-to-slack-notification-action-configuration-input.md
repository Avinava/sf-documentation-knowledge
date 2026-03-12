---
title: "Post To Slack Notification Action Configuration Input"
domain: bi-dev-guide-rest
topic: post-to-slack-notification-action-configuration-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.804Z
estimatedTokens: 265
keywords: [Post, Slack, Notification, Action, Configuration, Input, posting]
---

# Post To Slack Notification Action Configuration Input

> The notification action configuration for posting to Slack.

# Post To Slack Notification Action Configuration Input

The notification action configuration for posting to Slack.

Properties

PostToSlackNotificationActionConfigurationInput inherits properties from the abstract [BaseNotificationActionConfigurationInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_notification_action_configuration_input.htm "The base Analytics notification action configuration."). These base properties appear in PostToSlackNotificationActionConfigurationInput alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| exclude​Snapshot | Boolean | Indicates whether a snapshot is excluded in the dashboard subscription (true) or not (false). | Optional | 54.0 |
| recipients | Collaboration​Room​Notification​Recipient​Input[] | The collection of notification recipients. | Required | 53.0 |
| team | Slack​Reference​Input | The team of notification recipients. | Required | 53.0 |

## Related Topics

- BaseNotificationActionConfigurationInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_notification_action_configuration_input.htm)
- Collaboration​Room​Notification​Recipient​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_collaboration_room_notification_recipient_input.htm)
- Slack​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_slack_reference_input.htm)
