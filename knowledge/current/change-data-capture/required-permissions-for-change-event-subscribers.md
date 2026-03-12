---
title: "Required Permissions for Change Event Subscribers"
domain: change-data-capture
topic: required-permissions-for-change-event-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.672Z
estimatedTokens: 780
keywords: [Permissions, Change, Event, Subscribers, Data, Capture, ignores, sharing, settings, events, records, Salesforce, receive, channel, subscribed]
---

# Required Permissions for Change Event Subscribers

> Change Data Capture ignores sharing settings and sends change events for all records of
    a Salesforce object. To receive change events on a channel, the subscribed user must have one or
    more permissions depending on the entities associated with the change events. The permissions
    apply to Pub/Sub API and CometD subscribers but not to Apex triggers. Apex triggers run with
    system privileges under the Automated Process entity, so they don’t require those
    permissions.

# Required Permissions for Change Event Subscribers

Change Data Capture ignores sharing settings and sends change events for all records of a Salesforce object. To receive change events on a channel, the subscribed user must have one or more permissions depending on the entities associated with the change events. The permissions apply to Pub/Sub API and CometD subscribers but not to Apex triggers. Apex triggers run with system privileges under the Automated Process entity, so they don’t require those permissions.

## Change Event Permissions

| To receive change events for | Required permission |
| --- | --- |
| A specific standard or custom object: | View All Records for the object |
| User: | View All Users |
| Standard objects that don’t have the View All Records permission, such as Task and Event: | View All Data |
| All entities on a channel: | View All Data (AND View All Users, if User is one of the entities) |

## Permission Enforcement

For the standard /data/ChangeEvents channel and custom channels, user permissions are enforced on event delivery. Users can subscribe to the /data/ChangeEvents channel or to any custom channel regardless of their entity permissions. Users receive only change events associated with entities for which they have the necessary permissions and don't receive change events they don't have permissions for. If permissions change after subscription, the changes are enforced within 10 minutes for Pub/Sub API subscribers. For CometD subscribers, the changes aren't enforced until you restart the subscription.

For the single-entity standard channels, which include change events for one standard or custom object, user permissions are enforced initially on subscription. If users don't have sufficient permissions for the corresponding object, the subscription is denied and an error is returned. If permissions change after successful subscription and users no longer have access to the entity, they stop receiving the corresponding change events.

For more information about user permissions, see [View All and Modify All Permissions Overview](https://help.salesforce.com/articleView?id=users_profiles_view_all_mod_all.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

#### See Also

-   [Subscription Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm "A subscription channel is a stream of change events that correspond to one or more entities. You can subscribe to a channel to receive change event notifications for record create, update, delete, and undelete operations. Change Data Capture provides predefined standard channels and you can create your own custom channels. Use the subscription channel that corresponds to the change events you want to receive. The channel name is case-sensitive.")

-   [*Pub/Sub API Guide*: Channel Membership and User Permission Changes](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/considerations.html#channel-membership-and-user-permission-changes "Pub/Sub API Guide: Channel Membership and User Permission Changes - HTML (New Window)")

## Related Topics

- Subscription Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm)
