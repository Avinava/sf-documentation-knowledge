---
title: "getTrendingTopics(communityId, maxResults)"
domain: apex-reference
topic: gettrendingtopicscommunityid-maxresults
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTrendingTopics, communityId, maxResults, Get, specified, number, trending, topics, org, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# getTrendingTopics(communityId, maxResults)

> Get up to a specified number of trending topics for the org or Experience Cloud
    site.

### getTrendingTopics(communityId, maxResults)

Get up to a specified number of trending topics for the org or Experience Cloud site.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTrendingTopics(String communityId, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

The more frequently people add a specific topic to their posts and comments and comment on or like posts with the same topic over a short period, the more likely it is to become a trending topic. For example, if your coworkers are attending the upcoming Dreamforce conference and have started discussing it in Chatter, you might see a trending topic for Dreamforce. A trending topic is not solely based on popularity and usually relates to a one-time or infrequent event that has a spike in activity, such as a conference or a project deadline.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTrendingTopics(communityId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTrendingTopics_2 "Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getTrendingTopics method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")