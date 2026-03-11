---
title: "createAudience(communityId, audience)"
domain: apex-reference
topic: createaudiencecommunityid-audience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [createAudience, communityId, audience, Create, audience., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createAudience(communityId, audience)

> Create an audience.

### createAudience(communityId, audience)

Create an audience.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Audience createAudience(String communityId, ConnectApi.AudienceInput audience)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audience

Type: [ConnectApi.AudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience.htm "A personalization audience.")

A ConnectApi.AudienceInput object that defines the audience.

#### Return Value

Type: [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")