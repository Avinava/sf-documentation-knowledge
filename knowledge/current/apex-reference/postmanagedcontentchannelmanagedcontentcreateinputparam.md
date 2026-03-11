---
title: "postManagedContentChannel(ManagedContentCreateInputParam)"
domain: apex-reference
topic: postmanagedcontentchannelmanagedcontentcreateinputparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.168Z
keywords: [postManagedContentChannel, ManagedContentCreateInputParam, Create, managed, content, channel., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# postManagedContentChannel(ManagedContentCreateInputParam)

> Create a managed content channel.

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