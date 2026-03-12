---
title: "Subscription Channels"
domain: change-data-capture
topic: subscription-channels
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.742Z
estimatedTokens: 1427
keywords: [Subscription, Channels, channel, stream, change, events, correspond, entities, subscribe, receive, event, notifications, record, undelete, operations]
---

# Subscription Channels

> A subscription channel is a stream of change events that correspond to one or more
    entities. You can subscribe to a channel to receive change event notifications for record
    create, update, delete, and undelete operations. Change Data Capture provides predefined
    standard channels and you can create your own custom channels. Use the subscription channel that
    corresponds to the change events you want to receive. The channel name is
    case-sensitive.

# Subscription Channels

A subscription channel is a stream of change events that correspond to one or more entities. You can subscribe to a channel to receive change event notifications for record create, update, delete, and undelete operations. Change Data Capture provides predefined standard channels and you can create your own custom channels. Use the subscription channel that corresponds to the change events you want to receive. The channel name is case-sensitive.

You can subscribe to channels by supplying the channel endpoint. For example, to subscribe to events for all selected entities, subscribe to /data/ChangeEvents. Apex triggers can't subscribe to channels but can subscribe to a single event only. For example, you can create an Apex trigger on AccountChangeEvent to subscribe to only Account change events.

## Standard Channels

The ChangeEvents standard channel contains change events from one or more selected entities in a single stream that you can subscribe to. If you expect change events from more than one entity, use the ChangeEvents standard channel. To receive change events on the ChangeEvents channel, select the entities for Change Data Capture. For more information, see [Select Objects for Change Notifications in the User Interface](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm "To receive notifications on the default standard channel for record changes, select the custom objects and supported standard objects that you’re interested in on the Change Data Capture page.") and [Select Objects for Change Notifications with Metadata API and Tooling API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm "Use PlatformEventChannelMember in Metadata API or Tooling API to create or retrieve object event selections for the default standard channel or a custom channel. The default standard channel, ChangeEvents, corresponds to the selections that you configure in Setup in the Change Data Capture page. For a custom channel, the selections are set when you create the channel member. The SelectedEntity field in PlatformEventChannelMember represents a selected event."). Then subscribe to the appropriate channel.

If you expect change events for only a single entity, use single-entity channels. With single-entity channels, you can subscribe to change events from only one custom object or standard object. Select the entity for notifications on the Change Data Capture page in Setup or in a custom channel.

Standard Channel for All Selected Entities

```

```

Single-Entity Channel for a Standard Object

```

```

For example, the channel to subscribe to change events for Account records is:

```

```

Single-Entity Channel for a Custom Object

```

```

For example, the channel to subscribe to change events for Employee\_\_c custom object records is:

```

```

## Custom Channels

Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need. Entities are automatically selected for change event notifications when you create a custom channel that includes them. A custom channel has the following format.

```

```

For example, if your channel name is SalesEvents, the subscription channel is:

```

```

#### See Also

-   [Required Permissions for Change Event Subscribers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm "Change Data Capture ignores sharing settings and sends change events for all records of a Salesforce object. To receive change events on a channel, the subscribed user must have one or more permissions depending on the entities associated with the change events. The permissions apply to Pub/Sub API and CometD subscribers but not to Apex triggers. Apex triggers run with system privileges under the Automated Process entity, so they don’t require those permissions.")

-   [Compose Streams of Change Data Capture Notifications with Custom Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm "Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need.")

-   [Enrich Change Events with Extra Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm "Change event messages include values for new and changed fields, but sometimes unchanged field values are needed for processing or replicating data. For example, use enrichment when your app needs an external ID field for matching records in an external system. Or always include a field that provides important information about the changed record. You can select any field whose type is supported.")

-   [Example Diagrams for Channels and Channel Members](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm "Discover the relationship between channels and channel members with the Entity Relationship Diagram (ERD). Also, understand the benefits of using custom channels through the example diagrams.")

-   [General Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_general_considerations.htm)

## Code Examples

```
/data/<Standard_Object_Name>ChangeEvent
```

```
/data/AccountChangeEvent
```

```
/data/<Custom_Object_Name>__ChangeEvent
```

```
/data/Employee__ChangeEvent
```

```
/data/YourChannelName__chn
```

## Related Topics

- Select Objects for Change Notifications in the User Interface (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm)
- Select Objects for Change Notifications with Metadata API and Tooling API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm)
- Required Permissions for Change Event Subscribers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm)
- Compose Streams of Change Data Capture Notifications with Custom Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm)
- Enrich Change Events with Extra Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm)
- Example Diagrams for Channels and Channel Members (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm)
- General Considerations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_general_considerations.htm)
