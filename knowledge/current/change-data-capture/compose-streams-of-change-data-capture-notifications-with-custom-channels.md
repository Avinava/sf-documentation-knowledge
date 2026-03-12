---
title: "Compose Streams of Change Data Capture Notifications with Custom
            Channels"
domain: change-data-capture
topic: compose-streams-of-change-data-capture-notifications-with-custom-channels
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.507Z
estimatedTokens: 1221
keywords: [Compose, Streams, Change, Data, Capture, Notifications, Custom, Channels, channel, multiple, subscribers, subscriber, receives, events, different]
---

# Compose Streams of Change Data Capture Notifications with Custom
            Channels

> Create a custom channel if you have multiple subscribers and each
            subscriber receives change events from a different set of entities. Also, use a custom
            channel with event enrichment to isolate sending enriched fields in change events on a
            specific channel. Custom channels group and isolate change events for each subscriber so
            subscribers receive only the types of events they need.

# Compose Streams of Change Data Capture Notifications with Custom Channels

Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need.

For example, if a subscriber uses real-time information about sales objects such as Account, Contact, or Order, you can create a custom channel with these objects. When you subscribe to the custom channel, you receive change events only for these objects. Your subscriber doesn’t receive change events of entities selected in another channel.

You can create a custom channel with Metadata API or Tooling API. When you create a custom channel, the objects are selected for notifications when you add a PlatformEventChannelMember. Custom channels can’t be created or viewed in the user interface on the Change Data Capture page. Use Metadata API to deploy or retrieve channel metadata in your org with a supported tool. Use Tooling API to create channels using REST and query channel metadata with SOQL.

Also, you can package channels to distribute with your apps.

In Metadata API, use the PlatformEventChannel metadata type to create a custom channel and the PlatformEventChannelMember type to add the selected event entities. For more information, see [PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm) and [PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm) in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

In Tooling API, use the PlatformEventChannel object to create a custom channel and PlatformEventChannelMember to add the selected event entities. For more information, see [PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm) and [PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm) in the [Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm).

#### See Also

-   [Subscription Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm "A subscription channel is a stream of change events that correspond to one or more entities. You can subscribe to a channel to receive change event notifications for record create, update, delete, and undelete operations. Change Data Capture provides predefined standard channels and you can create your own custom channels. Use the subscription channel that corresponds to the change events you want to receive. The channel name is case-sensitive.")

-   [Required Permissions for Change Event Subscribers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm "Change Data Capture ignores sharing settings and sends change events for all records of a Salesforce object. To receive change events on a channel, the subscribed user must have one or more permissions depending on the entities associated with the change events. The permissions apply to Pub/Sub API and CometD subscribers but not to Apex triggers. Apex triggers run with system privileges under the Automated Process entity, so they don’t require those permissions.")

-   [Change Data Capture Allocations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm#cdc_allocations "Learn about the allocations for change events including the number of custom channels, selected entities in a channel, and event delivery.")

-   [Enrich Change Events with Extra Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm "Change event messages include values for new and changed fields, but sometimes unchanged field values are needed for processing or replicating data. For example, use enrichment when your app needs an external ID field for matching records in an external system. Or always include a field that provides important information about the changed record. You can select any field whose type is supported.")

-   [Example Diagrams for Channels and Channel Members](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm "Discover the relationship between channels and channel members with the Entity Relationship Diagram (ERD). Also, understand the benefits of using custom channels through the example diagrams.")

## Related Topics

- Subscription Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm)
- Required Permissions for Change Event Subscribers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm)
- Change Data Capture Allocations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_allocations.htm)
- Enrich Change Events with Extra Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm)
- Example Diagrams for Channels and Channel Members (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm)
