---
title: "patchManagedContentChannel(channelId, ManagedContentChannelInput)"
domain: apex-reference
topic: patchmanagedcontentchannelchannelid-managedcontentchannelinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.168Z
keywords: [patchManagedContentChannel, channelId, ManagedContentChannelInput, Update, managed, content, channel., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# patchManagedContentChannel(channelId, ManagedContentChannelInput)

> Update a managed content channel.

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