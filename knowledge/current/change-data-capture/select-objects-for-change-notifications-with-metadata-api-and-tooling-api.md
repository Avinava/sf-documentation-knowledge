---
title: "Select Objects for Change Notifications with Metadata API and Tooling API"
domain: change-data-capture
topic: select-objects-for-change-notifications-with-metadata-api-and-tooling-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.636Z
estimatedTokens: 878
keywords: [Select, Objects, Change, Notifications, Metadata, API, Tooling, PlatformEventChannelMember, retrieve, event, selections, standard, channel, custom, ChangeEvents]
---

# Select Objects for Change Notifications with Metadata API and Tooling API

> Use PlatformEventChannelMember in Metadata API or Tooling API to
            create or retrieve object event selections for the default standard channel or a custom
            channel. The default standard channel, ChangeEvents, corresponds to the selections that
            you configure in Setup in the Change Data Capture page. For a custom channel, the
            selections are set when you create the channel member. The
                SelectedEntity field in PlatformEventChannelMember represents a
            selected event.

# Select Objects for Change Notifications with Metadata API and Tooling API

Use PlatformEventChannelMember in Metadata API or Tooling API to create or retrieve object event selections for the default standard channel or a custom channel. The default standard channel, ChangeEvents, corresponds to the selections that you configure in Setup in the Change Data Capture page. For a custom channel, the selections are set when you create the channel member. The SelectedEntity field in PlatformEventChannelMember represents a selected event.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Selections made in PlatformEventChannelMember for a custom channel aren’t reflected in the Change Data Capture page. The Change Data Capture page shows selections only for the default standard channel, ChangeEvents, and not for custom channels. To find out which entities are selected for custom channels, perform a SOQL query on [PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm) in Tooling API.

To learn how to select objects with Metadata API, see [PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm) in the [*Metadata API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

To learn how to select objects with Tooling API, see [PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm) in the [*Tooling API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm).

To learn about custom channels, see [Compose Streams of Change Data Capture Notifications with Custom Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm "Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need."), [PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm) in the [*Metadata API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm), and [PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm) in the [*Tooling API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm).

Starting with API version 47.0, you define channel member components and channels separately in Metadata API. In API version 45.0 and 46.0, members are included in the PlatformEventChannel component.

#### See Also

-   [Change Data Capture Allocations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations "Learn about the allocations for change events including the number of custom channels, selected entities in a channel, and event delivery.")

## Related Topics

- Compose Streams of Change Data Capture Notifications with Custom Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm)
- Change Data Capture Allocations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
