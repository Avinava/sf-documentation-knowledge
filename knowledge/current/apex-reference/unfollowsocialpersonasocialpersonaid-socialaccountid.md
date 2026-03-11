---
title: "unfollowSocialPersona(socialPersonaId,
      socialAccountId)"
domain: apex-reference
topic: unfollowsocialpersonasocialpersonaid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [unfollowSocialPersona, socialPersonaId, socialAccountId, Stop, following, social, persona, its, network., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# unfollowSocialPersona(socialPersonaId,
      socialAccountId)

> Stop following a social persona in its social
    network.

### unfollowSocialPersona(socialPersonaId, socialAccountId)

Stop following a social persona in its social network.

#### API Version

45.0–61.0

#### Requires Chatter

No

#### Signature

public static Void unfollowSocialPersona(String socialPersonaId, String socialAccountId)

#### Parameters

socialPersonaId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social persona to stop following.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that stops following the social persona.

#### Return Value

Type: Void