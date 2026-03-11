---
title: "getManagedContentChannels(pageParam, pageSize, showDetails)"
domain: apex-reference
topic: getmanagedcontentchannelspageparam-pagesize-showdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.168Z
keywords: [getManagedContentChannels, pageParam, pageSize, showDetails, Get, managed, content, channels., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedContentChannels(pageParam, pageSize, showDetails)

> Get managed content channels.

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