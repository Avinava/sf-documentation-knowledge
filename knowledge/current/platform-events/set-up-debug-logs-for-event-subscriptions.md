---
title: "Set Up Debug Logs for Event Subscriptions"
domain: platform-events
topic: set-up-debug-logs-for-event-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.125Z
estimatedTokens: 293
keywords: [Debug, Logs, Event, Subscriptions, platform, triggers, processes, resumed, flow, interviews, created, Automated, Process, separate, their]
---

# Set Up Debug Logs for Event Subscriptions

> Debug logs for platform event triggers, event processes, and resumed flow interviews
    are created by Automated Process and are separate from their corresponding Apex code logs. For a
    platform event trigger with an overridden running user, debug logs are created by the specified
    user. The debug logs aren’t available in the Developer Console’s Log tab.

# Set Up Debug Logs for Event Subscriptions

Debug logs for platform event triggers, event processes, and resumed flow interviews are created by Automated Process and are separate from their corresponding Apex code logs. For a platform event trigger with an overridden running user, debug logs are created by the specified user. The debug logs aren’t available in the Developer Console’s Log tab.

-   **[Add a Trace Flag Entry for the Default Automated Process User](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug_autoproc.htm)**
    To collect logs for an event subscription, add a trace flag entry for the Automated Process entity in Setup.
-   **[Add a Trace Flag Entry for the Overridden User](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug_config_user.htm)**
    To collect logs for an Apex trigger whose default running user is overridden, add a trace flag entry for the user in Setup.

#### See Also

-   [*Salesforce Help*: Set Up Debug Logging](https://help.salesforce.com/articleView?id=code_add_users_debug_log.htm&language=en_US "Salesforce Help: Set Up Debug Logging - HTML (New Window)")

## Related Topics

- Add a Trace Flag Entry for the Default Automated Process User (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug_autoproc.htm)
- Add a Trace Flag Entry for the Overridden User (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug_config_user.htm)
