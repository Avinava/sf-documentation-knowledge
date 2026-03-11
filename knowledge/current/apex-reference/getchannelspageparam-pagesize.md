---
title: "getChannels(pageParam, pageSize)"
domain: apex-reference
topic: getchannelspageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getChannels, pageParam, pageSize, Get, managed, content, delivery, channels, context, user., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getChannels(pageParam, pageSize)

> Get managed content delivery channels for the context user.

### getChannels(pageParam, pageSize)

Get managed content delivery channels for the context user.

#### API Version

62.0

#### Available to Guest Users

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryChannelsRepresentation getChannels(Integer pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryChannelsRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channels.htm "Collection of managed content delivery channels.")