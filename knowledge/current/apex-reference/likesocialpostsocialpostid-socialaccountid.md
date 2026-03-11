---
title: "likeSocialPost(socialPostId, socialAccountId)"
domain: apex-reference
topic: likesocialpostsocialpostid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [likeSocialPost, socialPostId, socialAccountId, social, post, its, network., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# likeSocialPost(socialPostId, socialAccountId)

> Like a social post in its social network.

### likeSocialPost(socialPostId, socialAccountId)

Like a social post in its social network.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.LikeSocialPostIntent likeSocialPost(String socialPostId, String socialAccountId)

#### Parameters

socialPostId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social post to like.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that likes the post.

#### Return Value

Type: [ConnectApi.LikeSocialPostIntent](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_social_post_intent_output.htm "Like intent on a social post.")