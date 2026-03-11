---
title: "setTestGetTopUnansweredQuestions(communityId, filter,
      pageSize, result)"
domain: apex-reference
topic: settestgettopunansweredquestionscommunityid-filter-pagesize-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetTopUnansweredQuestions, communityId, filter, pageSize, result, Register, ConnectApi.FeedElementPage, object, returned, matching, ConnectApi.getTopUnansweredQuestions, method, called, test, context., same, parameters, receive, exception., Pilot]
---

# setTestGetTopUnansweredQuestions(communityId, filter,
      pageSize, result)

> Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.getTopUnansweredQuestions method is called in a
      test context. Use the method with the same parameters or you receive an
    exception.

### setTestGetTopUnansweredQuestions(communityId, filter, pageSize, result) (Pilot)

Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.getTopUnansweredQuestions method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

We provided top-five unanswered questions to selected customers through a pilot program that required agreement to specific terms and conditions. This pilot program is closed and not accepting new participants.

42.0

#### Signature

public static Void setTestGetTopUnansweredQuestions(String communityId, ConnectApi.FeedFilter filter, Integer pageSize, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

filter

Type: [ConnectApi.FeedFilter](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedFilterEnum)

Specifies the filter for the feed. UnansweredQuestionsWithCandidate​Answers is the only valid value.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 0 through 10. If you pass in null, the default size is 5.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopUnansweredQuestions(communityId, filter, pageSize) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getTopUnansweredQuestions_4 "Get a page of filtered top unanswered questions for the context user in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")