---
title: "PlatformEventChannelMember"
domain: metadata-api
topic: platformeventchannelmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.781Z
estimatedTokens: 1884
keywords: [PlatformEventChannelMember, Represents, entity, selected, Change, Data, Capture, notifications, standard, custom, channel, platform, event, channel., File, Suffix, Directory, Location, Version, Special]
---

# PlatformEventChannelMember

> Represents an entity selected for Change Data Capture
      notifications on a standard or custom channel, or a platform event selected on a custom
      channel.

# PlatformEventChannelMember

Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PlatformEventChannelMember components have the suffix .platformEventChannelMember and are stored in the platformEventChannelMembers folder.

## Version

PlatformEventChannelMember components are available in API version 47.0 and later.

## Special Access Rules

You must have the Customize Application permission to deploy and retrieve this type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enrichedFields | EnrichedField[] | One or more fields selected for Change Data Capture Enrichment. A non-empty enriched field is added to an update or delete change event even when not changed. For more information, see Enrich Change Events with Extra Fields When Subscribed with CometD in the Change Data Capture Developer Guide. Available in API version 51.0 and later. |
| eventChannel | string | Required. The name of a channel. For the standard channel, the name is ChangeEvents. For a custom channel, the name is in this format: MyChannel__chn. |
| filterExpression | string | An expression that is used to filter the stream of events and deliver only the events that match specific criteria. The filter expression can contain one or more field-value expressions. The filter expression format is based on SOQL and supports a subset of SOQL operators and field types.For example, this filter expression delivers only events that contain the City__c field with a value of 'San Francisco'. City__c = 'San Francisco'For more information, see Filter Your Stream of Platform Events with Custom Channels in the Platform Events Developer Guide and Filter Your Stream of Change Events with Channels in the Change Data Capture Developer Guide. Available in API version 56.0 and later. |
| selectedEntity | string | Required. The change event name of an entity selected for Change Data Capture notifications. For example, for the Account standard object, the name is AccountChangeEvent, or for a custom object MyObject__c, the name is MyObject__ChangeEvent. |

## EnrichedField

A field selected on PlatformEventChannelMember for Change Data Capture Enrichment. A non-empty enriched field is added to an update or delete change event even when not changed.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | The name of a field selected to enrich change events with. |

## Usage

The [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.") and [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.") calls aren’t supported with the PlatformEventChannelMember metadata type.

To delete a channel member from a channel, deploy destructiveChanges.xml for this type and specify the full name of the member.

## Declarative Metadata Sample Definition

This PlatformEventChannelMember component represents the selection of the Lead change event as part of the Change Data Capture selections (the standard ChangeEvents channel).

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The file name of the example component is ChangeEvents\_LeadChangeEvent.platformEventChannelMember. The file name, without the extension, corresponds to the component full name (ChangeEvents\_LeadChangeEvent).

If the channel has more than one selected entity, each entity is represented separately by a PlatformEventChannelMember component. For example, this component is a second member of the standard ChangeEvents channel and represents the Contact change event.

```

```

This example is a selected entity on the SalesEvents\_\_chn custom channel.

```

```

This example shows one enriched field, Phone, for a selected entity on the SalesEvents\_\_chn custom channel. Enriched fields are supported in API version 51.0 and later.

```

```

This example shows a filter expression for a ContactChangeEvent selected entity on the SalesEvents\_\_chn custom channel.

```

```

## Underscores in Channel Member Full Names

Two consecutive underscores in full names designate either a component name suffix or a namespace prefix. In all other cases, two consecutive underscores aren’t supported in full names. If your channel member name contains a custom channel name to make it unique, ensure to replace the double underscores in the name with one underscore. For example, the member name would be SalesEvents\_chn\_AccountChangeEvent and not SalesEvents\_\_chn\_AccountChangeEvent.

## Referencing Channel Members and Channels in Package.xml

This manifest file references the example definitions on the ChangeEvents standard channel. It lists each member in the <members> field of PlatformEventChannelMember. The <members> field contains the channel member full name in this format: ChannelName\_EventName.

```

```

This manifest file references members of the SalesEvents\_\_chn custom channel.

```

```

To retrieve a custom channel and channel members, you can reference them in the same package.xml file, as this example shows.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [*Change Data Capture Developer Guide*: Example Diagrams for Channels and Channel Members](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm "Change Data Capture Developer Guide: Example
    Diagrams for Channels and Channel Members - HTML (New Window)")

-   [*Change Data Capture Developer Guide*: Filter Your Stream of Change Events with Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_filter_section.htm "Change Data Capture Developer Guide: Filter Your Stream of Change Events with Channels - HTML (New Window)")

-   [*Platform Events Developer Guide*: Filter Your Stream of Platform Events with Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_filter_section.htm "Platform Events Developer Guide: Filter Your Stream of
    Platform Events with Channels - HTML (New Window)")

-   [PlatformEventChannel](atlas.en-us.api_meta.meta/api_meta/meta_platformeventchannel.htm "Represents a channel that you can subscribe to in order to receive a stream of events. In API version 46.0 and earlier, it is the default standard channel for change data capture events. In API version 47.0 and later, it is a custom channel for change data capture events.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>ChangeEvents</eventChannel>
    <selectedEntity>LeadChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>ChangeEvents</eventChannel>
    <selectedEntity>ContactChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>SalesEvents__chn</eventChannel>
    <selectedEntity>ContactChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <enrichedFields>
        <name>Phone</name>
    </enrichedFields>
    <eventChannel>SalesEvents__chn</eventChannel>
    <selectedEntity>ContactChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>SalesEvents__chn</eventChannel>
    <filterExpression><![CDATA[(Region__c='AMER')]]></filterExpression>
    <selectedEntity>ContactChangeEvent</selectedEntity>
</PlatformEventChannelMember>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- deleteMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- PlatformEventChannel (atlas.en-us.api_meta.meta/api_meta/meta_platformeventchannel.htm)
