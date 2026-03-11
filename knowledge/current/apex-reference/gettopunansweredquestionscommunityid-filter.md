---
title: "getTopUnansweredQuestions(communityId, filter)"
domain: apex-reference
topic: gettopunansweredquestionscommunityid-filter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getTopUnansweredQuestions, communityId, filter, Get, filtered, top, unanswered, questions, context, user, Experience, Cloud, site., Pilot, Note, API, Version, Requires, Chatter, Signature]
---

# getTopUnansweredQuestions(communityId, filter)

> Get filtered top unanswered questions for the context user in an
      Experience Cloud site.

### getTopUnansweredQuestions(communityId, filter) (Pilot)

Get filtered top unanswered questions for the context user in an Experience Cloud site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

We provided top-five unanswered questions to selected customers through a pilot program that required agreement to specific terms and conditions. This pilot program is closed and not accepting new participants.

#### API Version

42.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage getTopUnansweredQuestions(String communityId, ConnectApi.TopUnansweredQuestionsFilterType filter)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

filter

Type: [ConnectApi.FeedFilter](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedFilterEnum)

Specifies the filter for the feed. UnansweredQuestionsWithCandidate​Answers is the only valid value.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm#apex_connectapi_output_feed_element_page "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTopUnansweredQuestions(communityId, filter, result) (Pilot)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetTopUnansweredQuestions_2 "Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.getTopUnansweredQuestions method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")