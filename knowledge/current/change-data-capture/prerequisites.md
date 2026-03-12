---
title: "Prerequisites"
domain: change-data-capture
topic: prerequisites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.497Z
estimatedTokens: 253
keywords: [Prerequisites, subscribing, change, events, Apex, trigger, debug, logs, select, Account, notifications, Enable]
---

# Prerequisites

> Before subscribing to change events with an Apex trigger, set up debug logs and select
  the Account object for notifications.

# Prerequisites

Before subscribing to change events with an Apex trigger, set up debug logs and select the Account object for notifications.

## Set Up Debug Logs

To obtain debug logs for change event trigger execution, set up debug logs for the Automated Process entity.

1.  From Setup, enter Debug Logs in the Quick Find box, then select **Debug Logs**.
2.  Click **New**.
3.  For Traced Entity Type, select **Automated Process**.
4.  Select the time period to collect logs for and the debug level.
5.  Click **Save**.

## Enable Change Notifications for the Object

On the Change Data Capture page in Setup, enable change notifications for the Account object. See [Select Objects for Change Notifications in the User Interface](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm "To receive notifications on the default standard channel for record changes, select the custom objects and supported standard objects that you’re interested in on the Change Data Capture page.").

## Related Topics

- Select Objects for Change Notifications in the User Interface (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm)
