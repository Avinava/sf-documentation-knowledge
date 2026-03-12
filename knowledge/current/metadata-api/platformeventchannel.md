---
title: "PlatformEventChannel"
domain: metadata-api
topic: platformeventchannel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:41.229Z
estimatedTokens: 1890
keywords: [PlatformEventChannel, channel, subscribe, order, receive, stream, events, API, version, 46.0, earlier, standard, change, data, capture]
---

# PlatformEventChannel

> Represents a channel that you can subscribe to in order
            to receive a stream of events. In API version 46.0 and earlier, it is the default
            standard channel for change data capture events. In API version 47.0 and later, it is a
            custom channel for change data capture events.

# PlatformEventChannel

Represents a channel that you can subscribe to in order to receive a stream of events. In API version 46.0 and earlier, it is the default standard channel for change data capture events. In API version 47.0 and later, it is a custom channel for change data capture events.

The default standard channel corresponds to the entity selection in the Change Data Capture page in Setup. A custom channel is a channel that you define using this metadata type. Starting in API version 47.0, the channel doesn’t contain the selected entities, which are represented each by PlatformEventChannelMember. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PlatformEventChannel components have the suffix .platformEventChannel and are stored in the platformEventChannels folder.

## Version

PlatformEventChannel components are available in API version 45.0 and later.

## Special Access Rules

You must have the Customize Application permission to deploy and retrieve this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| channelMembers | PlatformEventChannel​SelectedEntity[] | Removed. A list of event names of entities, including standard and custom objects, selected for Change Data Capture notifications.NoteThis field is removed in API version 47.0 and later and is available only in API versions 45.0 and 46.0. In API version 47.0 and later, the channel members are each defined in a PlatformEventChannelMember component. |
| channelType | PlatformEventChannel​Type (enumeration of type string) | Required. The channel type. Valid values are:data—Change Data Capture channel corresponding to the selected entities.event—A channel that contains platform events. |
| eventType | PlatformEventChannel​EventType (enumeration of type string) | The type of events that the channel can hold. A channel can hold only one type of events. Use this field to optionally specify a specific type of events for a channel in combination with the channelType field. Valid values are:custom—The channel contains custom platform events. This value is valid with the channelType of event.data—The channel contains change data capture events. This value is valid with the channelType of data.monitoring—The channel contains Real-Time Event Monitoring events. This value is valid with the channelType of event.standard—Reserved for internal use.Available in API version 61.0 and later. |
| label | string | Required. The channel label. |

## PlatformEventChannelSelectedEntity

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This field type is removed in API version 47.0 and later and is available only in API versions 45.0 and 46.0.

| Field Name | Field Type | Description |
| --- | --- | --- |
| selectedEntity | string | Required. The event name of an entity selected for Change Data Capture notifications. For example, for the Account standard object, the name is AccountChangeEvent, or for a custom object MyObject__c, the name is MyObject__ChangeEvent. |

## Usage

The [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.") and [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.") calls aren’t supported with the PlatformEventChannel metadata type.

In API version 47.0 and later, you can’t deploy or retrieve the ChangeEvents standard channel.

You can't delete the ChangeEvents standard channel with destructiveChanges.xml, but you can delete channel members using the PlatformEventChannelMember type with destructiveChanges.xml.

You can delete a custom channel with destructiveChanges.xml. If you delete a custom channel, all its member PlatformEventChannelMember components are also deleted.

You can update only the fullName field and the label field of a PlatformEventChannel component.

## Declarative Metadata Sample Definition for a Custom Channel

The PlatformEventChannel component contains the label of the custom channel and the channel type.

```

```

This package.xml references the previous definition. The custom channel name is SalesEvents\_\_chn.

```

```

## Wildcard Support in the Manifest File

To deploy or retrieve all custom channels, specify the wildcard character \* (asterisk) in the <members> field.

```

```

## Upgrading to Version 47.0 or Later From an Earlier Version

The channelMembers field of the PlatformEventChannel type is removed in API version 47.0 and later. As a result, PlatformEventChannel components created in prior versions can’t be deployed using a later API version but you can deploy them in the same API version they were created with.

To deploy a custom channel component using API version 47.0 and later, upgrade the PlatformEventChannel definition by removing the <channelMembers> fields. For the ChangeEvents standard channel, it can’t be deployed or retrieved, so delete the PlatformEventChannel definition file.

For example, if you had custom channel called SalesEvents\_\_chn, this could be your custom channel definition in API version 46.0.

```

```

To upgrade to version 47.0 or later, you would replace the custom channel definition with this definition, which doesn’t contain any channel members.

```

```

For each channel member that is part of either a custom or the standard ChangeEvents channel, add a PlatformEventChannelMember metadata component. Also, in the package.xml file, reference both the PlatformEventChannel and PlatformEventChannelMember components.

For example, this PlatformEventChannelMember component is for the AccountChangeEvent member.

```

```

For more information, see [PlatformEventChannelMember](atlas.en-us.api_meta.meta/api_meta/meta_platformeventchannelmember.htm "Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.").

For an example of a custom channel that holds custom platform events and Real-Time Event Monitoring events, see [Group Platform Events into One Stream with a Custom Channel](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_subscribe_custom_channels.htm) in the Platform Events Developer Guide.

#### See Also

-   [*Change Data Capture Developer Guide*: Subscription Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm "Change Data Capture Developer Guide: Subscription
    Channels - HTML (New Window)")

-   [*Change Data Capture Developer Guide*: Compose Streams of Change Data Capture Notifications with Custom Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm "Change Data Capture Developer Guide: Compose
    Streams of Change Data Capture Notifications with Custom
    Channels - HTML (New Window)")

-   [PlatformEventChannelMember](atlas.en-us.api_meta.meta/api_meta/meta_platformeventchannelmember.htm "Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>data</channelType>
    <label>Custom Channel for Sales Events</label>
</PlatformEventChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>SalesEvents__chn</members>
        <name>PlatformEventChannel</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PlatformEventChannel</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelMembers>
        <selectedEntity>AccountChangeEvent</selectedEntity>
    </channelMembers>
    <channelMembers>
        <selectedEntity>ContactChangeEvent</selectedEntity>
    </channelMembers>
    <channelType>data</channelType>
    <label>Sales Events</label>
</PlatformEventChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>data</channelType>
    <label>SalesEvents__chn</label>
</PlatformEventChannel>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- deleteMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm)
- PlatformEventChannelMember (atlas.en-us.api_meta.meta/api_meta/meta_platformeventchannelmember.htm)
