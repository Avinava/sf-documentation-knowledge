---
title: "setTestGetTopUnansweredQuestions(communityId, result)"
domain: apex-reference
topic: settestgettopunansweredquestionscommunityid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetTopUnansweredQuestions, communityId, result, Register, ConnectApi.FeedElementPage, object, returned, matching, ConnectApi.getTopUnansweredQuestions, method, called, test, context., same, parameters, receive, exception., Pilot, API, Version]
---

# setTestGetTopUnansweredQuestions(communityId, result)

> Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.getTopUnansweredQuestions method is called in a
      test context. Use the method with the same parameters or you receive an
    exception.

### setTestGetTopUnansweredQuestions(communityId, result) (Pilot)

Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.getTopUnansweredQuestions method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

We provided top-five unanswered questions to selected customers through a pilot program that required agreement to specific terms and conditions. This pilot program is closed and not accepting new participants.

42.0

#### Signature

public static Void setTestGetTopUnansweredQuestions(String communityId, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopUnansweredQuestions(communityId) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_1 "Get top unanswered questions for the context user in aExperience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")