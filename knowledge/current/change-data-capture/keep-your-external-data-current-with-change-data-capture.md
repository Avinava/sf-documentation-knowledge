---
title: "Keep Your External Data Current with Change Data Capture"
domain: change-data-capture
topic: keep-your-external-data-current-with-change-data-capture
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.780Z
estimatedTokens: 451
keywords: [Keep, External, Data, Current, Change, Capture, system, instead, doing, periodic, exports, imports, repeated, API, calls]
---

# Keep Your External Data Current with Change Data Capture

> Use Change Data Capture to update data in an external system instead
      of doing periodic exports and imports of data or repeated API calls. Capturing changes with
      Change Data Capture event notifications ensures that your external data can be updated in real
      time and stays fresh.

# Keep Your External Data Current with Change Data Capture

Use Change Data Capture to update data in an external system instead of doing periodic exports and imports of data or repeated API calls. Capturing changes with Change Data Capture event notifications ensures that your external data can be updated in real time and stays fresh.

-   **[When Do You Use Change Data Capture?](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_when_to_use.htm)**
    You can think of Change Data Capture as part of the real-time data replication process for the cloud.
-   **[Change Event Object Support](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_support.htm)**
    Change events are available for all custom objects defined in your Salesforce org and a subset of standard objects.
-   **[Select Objects for Change Notifications in the User Interface](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm)**
    To receive notifications on the default standard channel for record changes, select the custom objects and supported standard objects that you’re interested in on the Change Data Capture page.
-   **[Select Objects for Change Notifications with Metadata API and Tooling API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm)**
    Use PlatformEventChannelMember in Metadata API or Tooling API to create or retrieve object event selections for the default standard channel or a custom channel. The default standard channel, ChangeEvents, corresponds to the selections that you configure in Setup in the Change Data Capture page. For a custom channel, the selections are set when you create the channel member. The SelectedEntity field in PlatformEventChannelMember represents a selected event.

## Related Topics

- When Do You Use Change Data Capture? (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_when_to_use.htm)
- Change Event Object Support (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_support.htm)
- Select Objects for Change Notifications in the User Interface (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm)
- Select Objects for Change Notifications with Metadata API and Tooling API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm)
