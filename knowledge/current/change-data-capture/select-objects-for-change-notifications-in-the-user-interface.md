---
title: "Select Objects for Change Notifications in the User Interface"
domain: change-data-capture
topic: select-objects-for-change-notifications-in-the-user-interface
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.689Z
estimatedTokens: 648
keywords: [Select, Objects, Change, Notifications, User, receive, standard, channel, record, changes, custom, you’re, interested, Data, Capture]
---

# Select Objects for Change Notifications in the User Interface

> To receive notifications on the default standard channel for record
      changes, select the custom objects and supported standard objects that you’re interested in on
      the Change Data Capture page.

# Select Objects for Change Notifications in the User Interface

To receive notifications on the default standard channel for record changes, select the custom objects and supported standard objects that you’re interested in on the Change Data Capture page.


| User Permissions Needed |
| --- |
| To view the Change Data Capture page: | View Setup and Configuration |
| To add or modify entity selections: | Customize Application |

From Setup, in the Quick Find box, enter Change Data Capture, and click **Change Data Capture**. The Available Entities list shows the objects available in your Salesforce org for Change Data Capture. You can select up to five entities, including standard and custom objects. To enable more entities, contact your Salesforce Account Representative to purchase an add-on license. The add-on license removes the limit on the number of entities you can select. Also, it increases the event delivery allocation for CometD and Pub/Sub API clients. With the add-on license, you can select up to 10 entities at a time in the Available Entities list. After selecting the first 10 entities, you can add more.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

The Change Data Capture page shows the object selections for the default standard channel. It doesn’t show the selections for custom channels. See [Compose Streams of Change Data Capture Notifications with Custom Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm "Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need.").

Each list entry is in the format “Entity Label (API Name).” Because an entity label can be renamed, the API name is provided in parentheses to better identify the entity.

![Change Data Capture page with a list of available entities to enable](/docs/resources/img/en-us/260.0?doc_id=change_data_capture%2Fimages%2Fcdc_selection_page.png&folder=change_data_capture)

#### See Also

-   [Change Data Capture Allocations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations "Learn about the allocations for change events including the number of custom channels, selected entities in a channel, and event delivery.")

## Related Topics

- Compose Streams of Change Data Capture Notifications with Custom Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm)
- Change Data Capture Allocations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
