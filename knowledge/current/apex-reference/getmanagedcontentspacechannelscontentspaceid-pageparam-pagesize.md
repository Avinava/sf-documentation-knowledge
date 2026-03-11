---
title: "getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize)"
domain: apex-reference
topic: getmanagedcontentspacechannelscontentspaceid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.231Z
keywords: [getManagedContentSpaceChannels, contentSpaceId, pageParam, pageSize, Get, channels, managed, content, space., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize)

> Get channels for a managed content space.

### getManagedContentSpaceChannels(contentSpaceId, pageParam, pageSize)

Get channels for a managed content space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentSpaceChannelsRepresentation getManagedContentSpaceChannels(String contentSpaceId, Integer pageParam, Integer pageSize)

#### Parameters

contentSpaceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content space.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25. Items are sorted by the last modified date.

#### Return Value

Type: [ConnectApi.ManagedContentSpaceChannelsRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_channels.htm "List of managed content space channels.")