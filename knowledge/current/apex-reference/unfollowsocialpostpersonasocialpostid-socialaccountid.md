---
title: "unfollowSocialPostPersona(socialPostId,
      socialAccountId)"
domain: apex-reference
topic: unfollowsocialpostpersonasocialpostid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [unfollowSocialPostPersona, socialPostId, socialAccountId, Stop, following, social, persona, post, its, network., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# unfollowSocialPostPersona(socialPostId,
      socialAccountId)

> Stop following a social persona of a social post in its social
      network.

### unfollowSocialPostPersona(socialPostId, socialAccountId)

Stop following a social persona of a social post in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

public static Void unfollowSocialPostPersona(String socialPostId, String socialAccountId)

#### Parameters

socialPostId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social post authored by the social persona to stop following.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that stops following the social persona.

#### Return Value

Type: Void