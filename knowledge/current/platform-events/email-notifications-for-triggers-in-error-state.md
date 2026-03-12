---
title: "Email Notifications for Triggers in Error State"
domain: platform-events
topic: email-notifications-for-triggers-in-error-state
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.098Z
estimatedTokens: 531
keywords: [Email, Notifications, Triggers, Error, State, Apex, platform, event, trigger, exceeds, maximum, number, retries, you’re, notified]
---

# Email Notifications for Triggers in Error State

> When an Apex platform event trigger exceeds the maximum number of
      retries and is in the error state, you’re notified by email. When the trigger subscriber
      reaches the error state, it disconnects and stops receiving published events.

# Email Notifications for Triggers in Error State

When an Apex platform event trigger exceeds the maximum number of retries and is in the error state, you’re notified by email. When the trigger subscriber reaches the error state, it disconnects and stops receiving published events.

For more information about the error state and how to resume the trigger, see the Subscription Statessection in [View and Manage an Event’s Subscribers on the Platform Event’s Detail Page](atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_apex.htm "View the triggers, flows, and processes that are subscribed to a platform event in the Subscriptions related list. Manage subscriptions for Apex triggers."). We recommend limiting the retries to fewer than nine times to avoid reaching this state. See [Retry Event Triggers with EventBus.RetryableException](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_refire.htm "Get another chance to process event notifications. Retrying a trigger is helpful when a transient error occurs or when waiting for a condition to change. Retry a trigger if the error or condition is external to the event records and is likely to go away later.").

The email notification is not sent for general unhandled exceptions, such as uncatchable limit exceptions. Unlike Apex object triggers, platform event triggers don’t generate exception emails for unhandled exceptions.

For a platform event trigger in the error state, the notification is sent to the developer specified in the trigger’s Last Modified By field. To also send the email to other users, add them on the Apex Exception Email page in Setup. The recipients specified on the Apex Exception Email page also apply to emails sent for Apex object triggers and classes.

To set up more recipients, from Setup, in the Quick Find box, enter Apex Exception Email, and then select **Apex Exception Email**.

The users and email addresses entered apply to all managed packages in the customer's org. You can also configure Apex exception emails using the Tooling API object ApexEmailNotification.

## Related Topics

- View and Manage an Event’s Subscribers on the Platform Event’s Detail Page (atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_apex.htm)
- Retry Event Triggers with EventBus.RetryableException (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_refire.htm)
