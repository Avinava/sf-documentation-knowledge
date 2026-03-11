---
title: "getAudience(communityId, audienceId,
      includeAudienceCriteria)"
domain: apex-reference
topic: getaudiencecommunityid-audienceid-includeaudiencecriteria
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [getAudience, communityId, audienceId, includeAudienceCriteria, Get, audience., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getAudience(communityId, audienceId,
      includeAudienceCriteria)

> Get an audience.

### getAudience(communityId, audienceId, includeAudienceCriteria)

Get an audience.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Audience getAudience(String communityId, String audienceId, Boolean includeAudienceCriteria)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the audience.

includeAudienceCriteria

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include audience criteria (true) or not (false). If unspecified, defaults to false.

#### Return Value

Type: [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")