---
title: "getRelationship(id, socialPersonaId)"
domain: apex-reference
topic: getrelationshipid-socialpersonaid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [getRelationship, socialPersonaId, Get, follow, relationship, between, managed, social, account, persona., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getRelationship(id, socialPersonaId)

> Get the follow relationship between a managed social account and a
      social persona.

### getRelationship(id, socialPersonaId)

Get the follow relationship between a managed social account and a social persona.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SocialAccountRelationship getRelationship(String id, String socialPersonaId)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed social account.

socialPersonaId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social persona.

#### Return Value

Type: [ConnectApi.SocialAccountRelationship](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_account_relationship_output.htm "Follow relationship between a managed social account and a social persona.")