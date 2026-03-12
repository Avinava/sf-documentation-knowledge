---
title: "Apex Limits Functions for Push Notifications"
domain: pushImplGuide
topic: apex-limits-functions-for-push-notifications
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.652Z
estimatedTokens: 108
keywords: [Apex, Limits, Functions, Push, Notifications, usage]
---

# Apex Limits Functions for Push Notifications

> Use the Apex limits functions for push notifications to
get usage information.

# Apex Limits Functions for Push Notifications

Use the Apex limits functions for push notifications to get usage information.

System.Limits class:

getLimitMobilePushApexCalls()

Returns the total number of Apex calls that are allowed per transaction for mobile push notifications.

getMobilePushApexCalls()

Returns the number of Apex calls that have been used by mobile push notifications during the current metering interval.
