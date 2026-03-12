---
title: "Add a Trace Flag Entry for the Overridden User"
domain: platform-events
topic: add-a-trace-flag-entry-for-the-overridden-user
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.131Z
estimatedTokens: 221
keywords: [Add, Trace, Flag, Entry, Overridden, User, collect, logs, Apex, trigger, whose, running, Setup]
---

# Add a Trace Flag Entry for the Overridden User

> To collect logs for an Apex trigger whose default running user is overridden, add a
    trace flag entry for the user in Setup.

# Add a Trace Flag Entry for the Overridden User

To collect logs for an Apex trigger whose default running user is overridden, add a trace flag entry for the user in Setup.

1.  From Setup, in the Quick Find box, enter Debug Logs, then click **Debug Logs**.
2.  Click **New**.
3.  Keep the Traced Entity Type value of User.
4.  For Traced Entity Name, click the Lookup button, search for the user in the Lookup window, and select it.
5.  Select the time period to collect logs. The start and expiration dates default to the current date and time. To extend the expiration date, click the end date input box, and select the next day from the calendar.
6.  For Debug Level, click **New Debug Level**. Enter a name, such as CustomDebugLevel, and accept the defaults.
7.  Click **Save**.

To collect logs for the user who publishes the events, add another trace flag entry for that user.
