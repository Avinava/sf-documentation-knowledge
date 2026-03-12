---
title: "ManagedContentChannels Class"
domain: apex-reference
topic: managedcontentchannels-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.249Z
estimatedTokens: 1579
namespace: ConnectApi
keywords: [ManagedContentChannels, Get, managed, content, channels., Create, get, update, delete, channel., deleteManagedContentChannel, channelId, API, Version, Requires, Chatter, getManagedContentChannel, getManagedContentChannels, pageParam, pageSize]
---

# ManagedContentChannels Class

> Get managed content channels. Create, get, update, or delete a managed content
  channel.

**Namespace:** `ConnectApi`

# ManagedContentChannels Class

Get managed content channels. Create, get, update, or delete a managed content channel.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ManagedContentChannels Methods

These methods are for ManagedContentChannels. All methods are static.

-   **[deleteManagedContentChannel(channelId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_deleteManagedContentChannel_1)**
    Delete a managed content channel.
-   **[getManagedContentChannel(channelId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_getManagedContentChannel_2)**
    Get a managed content channel.
-   **[getManagedContentChannels(pageParam, pageSize, showDetails)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_getManagedContentChannels_1)**
    Get managed content channels.
-   **[patchManagedContentChannel(channelId, ManagedContentChannelInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_patchManagedContentChannel_3)**
    Update a managed content channel.
-   **[postManagedContentChannel(ManagedContentCreateInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_postManagedContentChannel_2)**
    Create a managed content channel.

### deleteManagedContentChannel(channelId)

Delete a managed content channel.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static Void deleteManagedContentChannel(String channelId)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content channel to delete.

#### Return Value

Type: Void

### getManagedContentChannel(channelId)

Get a managed content channel.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannel getManagedContentChannel(String channelId)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content channel.

#### Return Value

Type: [ConnectApi.ManagedContentChannel](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel.htm "Managed content channel.")

### getManagedContentChannels(pageParam, pageSize, showDetails)

Get managed content channels.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannelsRepresentation getManagedContentChannels(Integer pageParam, Integer pageSize, Boolean showDetails)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25.

showDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show the channels’ detailed information (true) or summary information only (false). If you pass in null, the default is false.

#### Return Value

Type: [ConnectApi.ManagedContentChannelsRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channels.htm "Collection of managed content channels.")

### patchManagedContentChannel(channelId, ManagedContentChannelInput)

Update a managed content channel.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannel patchManagedContentChannel(String channelId, ConnectApi.ManagedContentChannelUpdateRepresentation ManagedContentChannelInput)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content channel to update.

ManagedContentChannelInput

Type: [ConnectApi.ManagedContentChannelUpdateRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_channel_update_representatio.htm "Input class to update a managed content channel.")

ConnectApi.ManagedContentChannelUpdateRepresentation input class with the updates.

#### Return Value

Type: [ConnectApi.ManagedContentChannel](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel.htm "Managed content channel.")

### postManagedContentChannel(ManagedContentCreateInputParam)

Create a managed content channel.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannel postManagedContentChannel(ConnectApi.ManagedContentChannelCreateRepresentation ManagedContentCreateInputParam)

#### Parameters

ManagedContentCreateInputParam

Type: [ConnectApi.ManagedContentChannelCreateRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_channel_create_representatio.htm "Input class to create a managed content channel.")

ConnectApi.ManagedContentChannelCreateRepresentation input class describing the managed content channel.

#### Return Value

Type: [ConnectApi.ManagedContentChannel](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel.htm "Managed content channel.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- deleteManagedContentChannel(channelId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
- getManagedContentChannel(channelId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
- getManagedContentChannels(pageParam, pageSize, showDetails) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
- patchManagedContentChannel(channelId, ManagedContentChannelInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
- postManagedContentChannel(ManagedContentCreateInputParam) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ManagedContentChannel (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
