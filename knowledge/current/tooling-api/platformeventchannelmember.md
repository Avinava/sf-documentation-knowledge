---
title: "PlatformEventChannelMember"
domain: tooling-api
topic: platformeventchannelmember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.515Z
keywords: [PlatformEventChannelMember, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Usage, Note, See]
---

# PlatformEventChannelMember

# PlatformEventChannelMember

Represents an entity selected for Change Data Capture notifications on a standard or custom channel, or a platform event selected on a custom channel.

This object is available in API version 47.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Supported REST HTTP Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

-   To retrieve or query this object, you must have the View Setup and Configuration permission.
-   To create, update, or delete this object, you must have the Customize Application permission.
-   The EventChannel and SelectedEntity fields can’t be updated.

## Fields

| Field Name | Description |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the PlatformEventChannelMember object.This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.The developer name is in the format ChannelName_EventName. If your channel member name contains a custom channel name to make it unique, ensure to replace the double underscores in the name with one underscore. For example, the developer name of a member of the MyChannel__chn custom channel is MyChannel_chn_AccountChangeEvent. And the developer name of a member of the default standard channel is ChangeEvents_AccountChangeEvent.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EventChannel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe name of a channel. For the standard channel, the name is ChangeEvents. For a custom channel, the name is in this format: MyChannel__chn. |
| FilterExpression | TypetextareaPropertiesNillableDescriptionAn expression that is used to filter the stream of events and deliver only the events that match specific criteria. The filter expression can contain one or more field-value expressions. The filter expression format is based on SOQL and supports a subset of SOQL operators and field types.For example, this filter expression delivers only events that contain the City__c field with a value of 'San Francisco'. City__c = 'San Francisco'For more information, see Filter Your Stream of Platform Events with Channels in the Platform Events Developer Guide and Filter Your Stream of Change Events with Channels in the Change Data Capture Developer Guide. Available in API version 56.0 and later. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated PlatformEventChannelMember object in Metadata API. The full name is in the format ChannelName_EventName and can include a namespace prefix.Two consecutive underscores in full names designate either a component name suffix or a namespace prefix. In all other cases, two consecutive underscores aren’t supported in full names. If your channel member name contains a custom channel name to make it unique, be sure to replace the double underscores in the name with one underscore. For example, the member name would be MyChannel_chn_AccountChangeEvent and not MyChannel__chn_AccountChangeEvent.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe language of the MasterLabel. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionPlatform event channel member metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SelectedEntity | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe change event name of an entity selected for Change Data Capture notifications. For example, for the Account standard object, the name is AccountChangeEvent, or for a custom object MyObject__c, the name is MyObject__ChangeEvent. |

## Usage

This JSON example is the body of a REST API POST request. It adds a member to a custom channel named SalesEvents\_\_chn. The corresponding REST endpoint is /services/data/v66.0/tooling/sobjects/PlatformEventChannelMember.

```

```

To add a member to the ChangeEvents default channel, the request body looks as follows.

```

```

You can query PlatformEventChannelMember in SOQL over Tooling API. For example, this query returns fields of all channel members on all channels.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

For custom channels, the EventChannel value that the query returns is the channel ID, which starts with the 0YL prefix.

You can configure a channel member to include extra fields in change events as part of Change Data Capture Enrichment. For more information, see [Example: Add Event Enrichment Fields with Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_enrich_tooling_api.htm "HTML (New Window)") in the Change Data Capture Developer Guide.

#### See Also

-   [*Change Data Capture Developer Guide*: Filter Your Stream of Change Events with Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_filter_section.htm "Change Data Capture Developer Guide: Filter Your Stream of Change Events with Channels - HTML (New Window)")
    
-   [*Platform Events Developer Guide*: Filter Your Stream of Platform Events with Channels](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_filter_section.htm "Platform Events Developer Guide: Filter Your Stream of
    Platform Events with Channels - HTML (New Window)")
    
-   [*Change Data Capture Developer Guide*: Example Diagrams for Channels and Channel Members](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm "Change Data Capture Developer Guide: Example Diagrams for
    Channels and Channel Members - HTML (New Window)")
    
-   [*Platform Events Developer Guide*: Filter Your Stream of Platform Events with Channels (Beta)](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_filter_section.htm "Platform Events Developer Guide: Filter Your Stream of
    Platform Events with Channels (Beta) - HTML (New Window)")
    
-   [PlatformEventChannel](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm "Represents a custom channel that you can subscribe to in order to receive a stream of change data capture events.")