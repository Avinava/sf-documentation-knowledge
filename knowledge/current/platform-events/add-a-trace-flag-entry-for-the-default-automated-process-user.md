---
title: "Add a Trace Flag Entry for the Default Automated Process
    User"
domain: platform-events
topic: add-a-trace-flag-entry-for-the-default-automated-process-user
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.128Z
estimatedTokens: 197
keywords: [Add, Trace, Flag, Entry, Automated, Process, User, collect, logs, event, subscription, entity, Setup]
---

# Add a Trace Flag Entry for the Default Automated Process
    User

> To collect logs for an event subscription, add a trace flag entry for the Automated
    Process entity in Setup.

# Add a Trace Flag Entry for the Default Automated Process User

To collect logs for an event subscription, add a trace flag entry for the Automated Process entity in Setup.

1.  From Setup, in the Quick Find box, enter Debug Logs, then click **Debug Logs**.
2.  Click **New**.
3.  For Traced Entity Type, select **Automated Process**.
4.  Select the time period to collect logs. The start and expiration dates default to the current date and time. To extend the expiration date, click the end date input box, and select the next day from the calendar.
5.  For Debug Level, click **New Debug Level**. Enter a name, such as CustomDebugLevel, and accept the defaults.
6.  Click **Save**.

To collect logs for the user who publishes the events, add another trace flag entry for that user.
