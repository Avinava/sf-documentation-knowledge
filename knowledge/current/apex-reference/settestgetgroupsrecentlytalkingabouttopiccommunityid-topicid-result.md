---
title: "setTestGetGroupsRecentlyTalkingAboutTopic(communityId,
      topicId, result)"
domain: apex-reference
topic: settestgetgroupsrecentlytalkingabouttopiccommunityid-topicid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetGroupsRecentlyTalkingAboutTopic, communityId, topicId, result, Register, ConnectApi.ChatterGroupSummaryPage, object, returned, matching, ConnectApi.getGroupsRecentlyTalkingAboutTopic, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetGroupsRecentlyTalkingAboutTopic(communityId,
      topicId, result)

> Register a ConnectApi.ChatterGroupSummaryPage
    object to be returned when the matching ConnectApi.getGroupsRecentlyTalkingAboutTopic method is called in a test context.
    Use the method with the same parameters or you receive an exception.

### setTestGetGroupsRecentlyTalkingAboutTopic(communityId, topicId, result)

Register a ConnectApi.ChatterGroupSummaryPage object to be returned when the matching ConnectApi.getGroupsRecentlyTalkingAboutTopic method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetGroupsRecentlyTalkingAboutTopic(String communityId, String topicId, ConnectApi.ChatterGroupSummaryPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

result

Type: [ConnectApi.​Chatter​Group​SummaryPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupSummaryPage.htm "Page of group summaries.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getGroupsRecentlyTalkingAboutTopic(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getGroupsRecentlyTalkingAboutTopic "Get information about the five groups that most recently contributed to a topic.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")