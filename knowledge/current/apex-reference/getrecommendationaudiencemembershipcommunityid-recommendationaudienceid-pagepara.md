---
title: "getRecommendationAudienceMembership(communityId,
      recommendationAudienceId, pageParam, pageSize)"
domain: apex-reference
topic: getrecommendationaudiencemembershipcommunityid-recommendationaudienceid-pagepara
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getRecommendationAudienceMembership, communityId, recommendationAudienceId, pageParam, pageSize, Get, page, custom, recommendation, audience, members., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getRecommendationAudienceMembership(communityId,
      recommendationAudienceId, pageParam, pageSize)

> Get a page of custom recommendation audience members.

### getRecommendationAudienceMembership(communityId, recommendationAudienceId, pageParam, pageSize)

Get a page of custom recommendation audience members.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserReferencePage getRecommendationAudienceMembership(String communityId, String recommendationAudienceId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationAudienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation audience.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of members per page.

#### Return Value

Type: [ConnectApi.UserReferencePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_reference_collection.htm "A list of user references.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.