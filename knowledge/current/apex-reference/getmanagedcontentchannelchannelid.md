---
title: "getManagedContentChannel(channelId)"
domain: apex-reference
topic: getmanagedcontentchannelchannelid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getManagedContentChannel, channelId, Get, managed, content, delivery, channel., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedContentChannel(channelId)

> Get a managed content delivery channel.

### getManagedContentChannel(channelId)

Get a managed content delivery channel.

#### API Version

54.0–61.0

In version 62.0 and later, use [getManagedContentDeliveryChannel(channelId)](#apex_ConnectAPI_ManagedContentDelivery_getManagedContentDeliveryChannel_1 "Get a managed content delivery channel.") to get a managed content delivery channel.

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentChannelDetail getManagedContentChannel(String channelId)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

#### Return Value

Type: [ConnectApi.ManagedContentChannelDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_detail.htm "Managed content channel detail.")