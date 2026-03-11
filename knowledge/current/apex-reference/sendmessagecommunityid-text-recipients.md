---
title: "sendMessage(communityId, text, recipients)"
domain: apex-reference
topic: sendmessagecommunityid-text-recipients
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [sendMessage, communityId, text, recipients, Send, message, list, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# sendMessage(communityId, text, recipients)

> Send a message to a list of recipients in an Experience Cloud
      site.

### sendMessage(communityId, text, recipients)

Send a message to a list of recipients in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage sendMessage(String communityId, String text, String recipients)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the message. Can’t be empty or over 10,000 characters.

recipients

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Up to nine comma-separated IDs of users to receive the message.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")