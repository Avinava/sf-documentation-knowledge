---
title: "Callback Running User and Debug Logs"
domain: platform-events
topic: callback-running-user-and-debug-logs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.063Z
estimatedTokens: 286
keywords: [Callback, Running, User, Debug, Logs, publish, runs, under, Automated, Process, result, records, created, their, system]
---

# Callback Running User and Debug Logs

> A publish callback runs under the Automated Process user. As a result, all records that
  are created in a callback have their system user fields, such as CreatedById and OwnerId, set to Automated Process.

# Callback Running User and Debug Logs

A publish callback runs under the Automated Process user. As a result, all records that are created in a callback have their system user fields, such as CreatedById and OwnerId, set to Automated Process.

You can explicitly set the OwnerId to another value. For example, to assign a task to a specific user, set the task OwnerId to that user’s ID.

To collect debug logs for the callback’s execution, add a trace flag for Automated Process. For more information, see [Add a Trace Flag Entry for the Default Automated Process User](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_subscribe_debug_autoproc.htm) in the Platform Events Developer Guide.

When the callback is invoked, it’s logged in the debug log. Logging for the callback requires the System debug log level to be set to at least Info. For more information, see [Set Up Debug Logging](https://help.salesforce.com/s/articleView?id=xcloud.code_add_users_debug_log.htm&type=5&language=en_US). For example, when the callback is invoked, the debug log line looks as follows.

```

```

## Code Examples

```
CODE_UNIT_STARTED [EXTERNAL]|platform.event.publish.callbacks.tasks.apex.ApexCallbackMethodInvoker
```
