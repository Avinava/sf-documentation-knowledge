---
title: "replyToMessage(communityId, text, inReplyTo)"
domain: apex-reference
topic: replytomessagecommunityid-text-inreplyto
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [replyToMessage, communityId, text, inReplyTo, Reply, message, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# replyToMessage(communityId, text, inReplyTo)

> Reply to a message in an Experience Cloud site.

### replyToMessage(communityId, text, inReplyTo)

Reply to a message in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterMessage replyToMessage(String communityId, String text, String inReplyTo)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the message. Can’t be empty or over 10,000 characters.

inReplyTo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the message that is being responded to.

#### Return Value

Type: [ConnectApi.​Chatter​Message](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm "Chatter message.")