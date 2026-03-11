---
title: "getScheduledRecommendations(communityId,
    channel)"
domain: apex-reference
topic: getscheduledrecommendationscommunityid-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getScheduledRecommendations, communityId, channel, Get, scheduled, custom, recommendations., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getScheduledRecommendations(communityId,
    channel)

> Get scheduled custom recommendations.

### getScheduledRecommendations(communityId, channel)

Get scheduled custom recommendations.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ScheduledRecommendationPage getScheduledRecommendations(String communityId, ConnectApi.RecommendationChannel channel)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

channel

Type: [ConnectApi.RecommendationChannel](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   CustomChannel1—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   CustomChannel2—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   CustomChannel3—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   CustomChannel4—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   CustomChannel5—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   DefaultChannel—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

#### Return Value

Type: [ConnectApi.ScheduledRecommendationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation_collection.htm "A list of scheduled custom recommendations.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.