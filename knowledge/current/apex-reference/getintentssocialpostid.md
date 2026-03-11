---
title: "getIntents(socialPostId)"
domain: apex-reference
topic: getintentssocialpostid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [getIntents, socialPostId, Get, available, intents, social, post., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getIntents(socialPostId)

> Get available intents for a social post.

### getIntents(socialPostId)

Get available intents for a social post.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SocialPostIntents getIntents(String socialPostId)

#### Parameters

socialPostId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a social post.

#### Return Value

Type: [ConnectApi.SocialPostIntents](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_intents_output.htm "Intents available for a social post.")