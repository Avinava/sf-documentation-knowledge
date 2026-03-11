---
title: "unlikeSocialPost(socialPostId,
    socialAccountId)"
domain: apex-reference
topic: unlikesocialpostsocialpostid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [unlikeSocialPost, socialPostId, socialAccountId, Unlike, social, post, its, network., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# unlikeSocialPost(socialPostId,
    socialAccountId)

> Unlike a social post in its social network.

### unlikeSocialPost(socialPostId, socialAccountId)

Unlike a social post in its social network.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

public static Void unlikeSocialPost(String socialPostId, String socialAccountId)

#### Parameters

socialPostId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social post to unlike.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that unlikes the post.

#### Return Value

Type: Void