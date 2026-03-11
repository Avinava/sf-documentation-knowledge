---
title: "getAllDeliveryChannels(pageParam, pageSize)"
domain: apex-reference
topic: getalldeliverychannelspageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.296Z
keywords: [getAllDeliveryChannels, pageParam, pageSize, Get, managed, content, delivery, channels, context, user., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getAllDeliveryChannels(pageParam, pageSize)

> Get managed content delivery channels for the context user.

### getAllDeliveryChannels(pageParam, pageSize)

Get managed content delivery channels for the context user.

#### API Version

48.0–61.0

In version 62.0 and later, use [getChannels(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getChannels_1 "Get managed content delivery channels for the context user.") in the ManagedContentDelivery class to get all delivery channels.

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannelCollection getAllDeliveryChannels(Integer pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.ManagedContentChannelCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_collection.htm "Collection of managed content channels.")