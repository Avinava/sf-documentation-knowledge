---
title: "getScheduledRecommendations(communityId)"
domain: apex-reference
topic: getscheduledrecommendationscommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [getScheduledRecommendations, communityId, Get, scheduled, custom, recommendations., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getScheduledRecommendations(communityId)

> Get scheduled custom recommendations.

### getScheduledRecommendations(communityId)

Get scheduled custom recommendations.

#### API Version

35.0 only

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 36.0 and later, use [getScheduledRecommendations(communityId, channel)](#apex_ConnectAPI_Recommendations_getScheduledRecommendations_1a "Get scheduled custom recommendations.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ScheduledRecommendationPage getScheduledRecommendations(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.ScheduledRecommendationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation_collection.htm "A list of scheduled custom recommendations.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.