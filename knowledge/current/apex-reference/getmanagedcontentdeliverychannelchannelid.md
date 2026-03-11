---
title: "getManagedContentDeliveryChannel(channelId)"
domain: apex-reference
topic: getmanagedcontentdeliverychannelchannelid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getManagedContentDeliveryChannel, channelId, Get, managed, content, delivery, channel., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedContentDeliveryChannel(channelId)

> Get a managed content delivery channel.

### getManagedContentDeliveryChannel(channelId)

Get a managed content delivery channel.

#### API Version

62.0

#### Available to Guest Users

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentDeliveryChannelRepresentation getManagedContentDeliveryChannel(String channelId)

#### Parameters

channelId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the channel.

#### Return Value

Type: [ConnectApi.ManagedContentDeliveryChannelRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_delivery_channel.htm "Managed content delivery channel.")