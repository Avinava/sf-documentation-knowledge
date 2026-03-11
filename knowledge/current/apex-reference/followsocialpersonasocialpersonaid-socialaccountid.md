---
title: "followSocialPersona(socialPersonaId,
    socialAccountId)"
domain: apex-reference
topic: followsocialpersonasocialpersonaid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [followSocialPersona, socialPersonaId, socialAccountId, Follow, social, persona, its, network., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# followSocialPersona(socialPersonaId,
    socialAccountId)

> Follow a social persona in its social network.

### followSocialPersona(socialPersonaId, socialAccountId)

Follow a social persona in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FollowSocialPersonaIntent followSocialPersona(String socialPersonaId, String socialAccountId)

#### Parameters

socialPersonaId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social persona to follow.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that follows the social persona.

#### Return Value

Type: [ConnectApi.FollowSocialPersonaIntent](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_follow_social_persona_intent_output.htm "Follow intent on a social persona.")