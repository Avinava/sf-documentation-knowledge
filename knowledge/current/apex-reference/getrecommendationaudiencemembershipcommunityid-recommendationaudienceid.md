---
title: "getRecommendationAudienceMembership(communityId,
      recommendationAudienceId)"
domain: apex-reference
topic: getrecommendationaudiencemembershipcommunityid-recommendationaudienceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getRecommendationAudienceMembership, communityId, recommendationAudienceId, Get, members, custom, recommendation, audience., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getRecommendationAudienceMembership(communityId,
      recommendationAudienceId)

> Get the members of a custom recommendation audience.

### getRecommendationAudienceMembership(communityId, recommendationAudienceId)

Get the members of a custom recommendation audience.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserReferencePage getRecommendationAudienceMembership(String communityId, String recommendationAudienceId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationAudienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation audience.

#### Return Value

Type: [ConnectApi.UserReferencePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_reference_collection.htm "A list of user references.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.