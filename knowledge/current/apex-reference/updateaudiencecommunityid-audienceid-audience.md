---
title: "updateAudience(communityId, audienceId,
    audience)"
domain: apex-reference
topic: updateaudiencecommunityid-audienceid-audience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [updateAudience, communityId, audienceId, audience, Update, audience., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateAudience(communityId, audienceId,
    audience)

> Update an audience.

### updateAudience(communityId, audienceId, audience)

Update an audience.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Audience updateAudience(String communityId, String audienceId, ConnectApi.AudienceInput audience)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the audience.

audience

Type: [ConnectApi.AudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience.htm "A personalization audience.")

A ConnectApi.AudienceInput object that defines the updates to the audience.

#### Return Value

Type: [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")