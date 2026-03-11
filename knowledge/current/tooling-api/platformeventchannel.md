---
title: "PlatformEventChannel"
domain: tooling-api
topic: platformeventchannel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.506Z
keywords: [PlatformEventChannel, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Usage, Note, See]
---

# PlatformEventChannel

# PlatformEventChannel

Represents a custom channel that you can subscribe to in order to receive a stream of change data capture events.

This object is available in API version 47.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

-   To retrieve or query this object, you must have the View Setup and Configuration permission.
-   To create, update, or delete this object, you must have the Customize Application permission.

## Fields

| Field Name | Description |
| --- | --- |
| ChannelType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The channel type. Valid values are:data—Change Data Capture channel corresponding to the selected entities.event—A channel that contains platform events. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the PlatformEventChannel object. The developer name doesn’t include the __chn custom channel suffix. For example, the developer name of the MyChannel__chn custom channel is MyChannel.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EventType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of events that the channel can hold. A channel can hold only one type of events. Use this field to optionally specify a specific type of events for a channel in combination with the ChannelType field. Valid values are:custom—The channel contains custom platform events. This value is valid with the channelType of event.data—The channel contains change data capture events. This value is valid with the channelType of data.monitoring—The channel contains Real-Time Event Monitoring events. This value is valid with the channelType of event.standard—Reserved for internal use.Available in API version 61.0 and later. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated PlatformEventChannel in Metadata API. The full name can include a namespace prefix. The full name includes the __chn custom channel suffix. For example, the full name of the MyChannel custom channel is MyChannel__chn.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the MasterLabel. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe channel label. The label of this field is Label. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionPlatform event channel metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

This JSON example is the body of a REST API POST request that creates the SalesEvents\_\_chn custom channel. The corresponding REST endpoint is /services/data/v66.0/tooling/sobjects/PlatformEventChannel.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

-   You can update only the FullName field and the metadata label field of a PlatformEventChannel.
-   If you delete a PlatformEventChannel, all its member PlatformEventChannelMember components are also deleted.

You can query custom channels in SOQL over Tooling API but not the standard channel (ChangeEvents). For example, this query returns fields of channel members from all custom channels.

```

```

#### See Also

-   [*Change Data Capture Developer Guide*: Subscription Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm "Change Data Capture Developer Guide: Subscription
    Channels - HTML (New Window)")
    
-   [*Change Data Capture Developer Guide*: Compose Streams of Change Data Capture Notifications with Custom Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm "Change Data Capture Developer Guide: Compose Streams of
    Change Data Capture Notifications with Custom Channels - HTML (New Window)")
    
-   [PlatformEventChannelMember](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm "Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.")