---
title: "Send Notification Actions"
domain: api-action
topic: send-notification-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.208Z
estimatedTokens: 912
keywords: [Send, Notification, Actions, Call, action, corresponds, API, version, 54.0, later, Slack-enabled, custom, certain, standard, REST]
---

# Send Notification Actions

> Call a notification type to send. Each Send Notification action
        corresponds to a supported notification type. This object is available in API version 54.0
        and later. Send Notification actions are available only for Slack-enabled custom
        notification types and certain Slack-enabled standard notification types.

# Send Notification Actions

Call a notification type to send. Each Send Notification action corresponds to a supported notification type. This object is available in API version 54.0 and later. Send Notification actions are available only for Slack-enabled custom notification types and certain Slack-enabled standard notification types.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_action)

#### Note

To send notifications for Slack, enable [Salesforce for Slack Integrations](https://help.salesforce.com/s/articleView?id=slack.slack_apps_enable.htm&type=5&language=en_US "HTML (New Window)").

To create a custom Slack notification type supported by a Send Notification action, see [Create and Send Custom Slack Notifications](https://help.salesforce.com/s/articleView?id=platform.notif_builder_create_send_slack.htm&type=5&language=en_US "HTML (New Window)").

To trigger Send Notification actions using REST API calls, you need the Send Custom Notifications user permission.

## Supported REST HTTP Methods

URI

Get a list of available Send Notification actions.

/services/data/vXX.X/actions/custom/sendNotification

Get information about a specific Send Notification action:

/services/data/vXX.X/actions/custom/sendNotification/notification\_type\_name

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recipientIds | TypeIDDescriptionRequired. The IDs of the notification recipients or recipient types. Valid recipient or recipient type values are UserId or CollaborationRoomId values. |
| recordId | TypeIDDescriptionRequired. The ID of the record that the notifications are about. The record ID must be associated with the specific EntityType of the notification type. For example, enter the record ID for an opportunity when configuring a notification type associated with the Opportunity object.For custom notification types, you can find the related object by viewing the notification type's settings from Custom Notifications in Setup. For supported standard notification types, refer to the Standard Notification Types and Related Objects table. |

## Standard Notification Types and Related Objects

Use this table to identify which object applies to each standard notification type supported by a Send Notification action. The object determines the value that you enter for recordId.

| Standard Notification Type | Related Salesforce Object |
| --- | --- |
| amount_updated | Opportunity |
| close_date_reminder | Opportunity |
| close_date_updated | Opportunity |
| deal_won | Opportunity |
| deals_to_watch | Opportunity |
| hc_allergy_intolerance_alert | Allergy Intolerance |
| hc_care_determinant_alert | Care Determinant |
| hc_care_plan_alert | Case |
| hc_care_plan_task_alert | Task |
| hc_health_condition_alert | Health Condition |
| high_priority_case | Case |
| new_child_opportunity | Opportunity |
| next_step_reminder | Opportunity |
| stage_reminder | Opportunity |
| stage_updated | Opportunity |

#### See Also

-   [*Object Reference for the Salesforce Platform*: CollaborationRoom](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_collaborationroom.htm "Object Reference for the Salesforce Platform:
    CollaborationRoom - HTML (New Window)")

-   [*Object Reference for the Salesforce Platform*: Swarm](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_swarm.htm "Object Reference for the Salesforce Platform:
    Swarm - HTML (New Window)")
