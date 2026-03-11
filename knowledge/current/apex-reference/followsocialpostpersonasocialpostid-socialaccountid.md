---
title: "followSocialPostPersona(socialPostId,
      socialAccountId)"
domain: apex-reference
topic: followsocialpostpersonasocialpostid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [followSocialPostPersona, socialPostId, socialAccountId, Follow, social, persona, post, its, network., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# followSocialPostPersona(socialPostId,
      socialAccountId)

> Follow a social persona on a social post in its social
    network.

### followSocialPostPersona(socialPostId, socialAccountId)

Follow a social persona on a social post in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FollowSocialPersonaIntent followSocialPostPersona(String socialPostId, String socialAccountId)

#### Parameters

socialPostId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social post authored by the social persona to follow.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that follows the social persona.

#### Return Value

Type: [ConnectApi.FollowSocialPersonaIntent](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_follow_social_persona_intent_output.htm "Follow intent on a social persona.")