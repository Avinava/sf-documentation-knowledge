---
title: "hideSocialPost(socialPostId, socialAccountId)"
domain: apex-reference
topic: hidesocialpostsocialpostid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [hideSocialPost, socialPostId, socialAccountId, Hide, social, post, its, network., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# hideSocialPost(socialPostId, socialAccountId)

> Hide a social post in its social network.

### hideSocialPost(socialPostId, socialAccountId)

Hide a social post in its social network.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.HideSocialPostIntent hideSocialPost(String socialPostId, String socialAccountId)

#### Parameters

socialPostId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social post to hide.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that hides the post.

#### Return Value

Type: [ConnectApi.HideSocialPostIntent](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_hide_social_post_intent_output.htm "Hide intent for a social post.")