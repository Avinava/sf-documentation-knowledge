---
title: "Post To Slack Notification Action Configuration"
domain: bi-dev-guide-rest
topic: post-to-slack-notification-action-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.496Z
estimatedTokens: 259
keywords: [Post, Slack, Notification, Action, Configuration, posting]
---

# Post To Slack Notification Action Configuration

> The notification action configuration for posting to Slack.

# Post To Slack Notification Action Configuration

The notification action configuration for posting to Slack.

Properties

PostToSlackNotificationActionConfiguration inherits properties from the abstract [BaseNotificationActionConfiguration](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_notification_action_configuration.htm "The base Analytics notification action configuration."). These base properties appear in PostToSlackNotificationActionConfiguration alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| exclude​Snapshot | Boolean | Indicates whether a snapshot is excluded in the dashboard subscription (true) or not (false). | Small, 54.0 | 54.0 |
| recipients | Collaboration​Room​Notification​Recipient[] | The collection of notification recipients. | Small, 53.0 | 53.0 |
| team | Slack​Reference | The team of notification recipients. | Small, 53.0 | 53.0 |

## Related Topics

- BaseNotificationActionConfiguration (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_notification_action_configuration.htm)
- Collaboration​Room​Notification​Recipient (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_collaboration_room_notification_recipient.htm)
- Slack​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_slack_reference.htm)
