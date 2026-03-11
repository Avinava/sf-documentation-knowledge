---
title: "patchManagedContentSpaceChannels(contentSpaceId, spaceChannels)"
domain: apex-reference
topic: patchmanagedcontentspacechannelscontentspaceid-spacechannels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.231Z
keywords: [patchManagedContentSpaceChannels, contentSpaceId, spaceChannels, Add, remove, channels, managed, content, space., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# patchManagedContentSpaceChannels(contentSpaceId, spaceChannels)

> Add or remove channels from a managed content space.

### patchManagedContentSpaceChannels(contentSpaceId, spaceChannels)

Add or remove channels from a managed content space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentSpaceChannelsRepresentation patchManagedContentSpaceChannels(String contentSpaceId, ConnectApi.ManagedContentSpaceChannelsInputRepresentation spaceChannels)

#### Parameters

contentSpaceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content space.

spaceChannels

Type: [ConnectApi.ManagedContentSpaceChannelsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_space_channels.htm "Channels to add or remove from the managed content space.")

ConnectApi.ManagedContentSpaceChannelsInputRepresentation input class with the channels to add or remove from the managed content space.

#### Return Value

Type: [ConnectApi.ManagedContentSpaceChannelsRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_channels.htm "List of managed content space channels.")