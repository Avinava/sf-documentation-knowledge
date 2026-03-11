---
title: "getMessage(messageId)"
domain: apex-reference
topic: getmessagemessageid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getMessage, messageId, Get, message., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMessage(messageId)

> Get a message.

### getMessage(messageId)

Get a message.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage getMessage(String messageId)

#### Parameters

messageId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the message.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")