---
title: "setTestSearchInZone(communityId, zoneId, q, filter,
      result)"
domain: apex-reference
topic: settestsearchinzonecommunityid-zoneid-q-filter-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.937Z
keywords: [setTestSearchInZone, communityId, zoneId, filter, result, Register, ConnectApi.ZoneSearchPage, object, returned, searchInZone, called, test, context., method, same, parameters, receive, exception., Note, API]
---

# setTestSearchInZone(communityId, zoneId, q, filter,
      result)

> Register a ConnectApi.ZoneSearchPage object to be
    returned when searchInZone(communityId, zoneId, q,
      filter) is called in a test context. Use the method with the same parameters or you
    receive an exception.

### setTestSearchInZone(communityId, zoneId, q, filter, result)

Register a ConnectApi.ZoneSearchPage object to be returned when searchInZone(communityId, zoneId, q, filter) is called in a test context. Use the method with the same parameters or you receive an exception.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see [End of Support for Chatter Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18 "HTML (New Window)").

#### API Version

29.0

#### Signature

public static Void setTestSearchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter, ConnectApi.ZoneSearchPage result)

#### Parameters

communityId

Type: String

Use either the ID for an Experience Cloud site, internal, or null.

zoneId

Type: String

The ID of a zone.

q

Type: String

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

filter

Type: ConnectApi.ZoneSearchResultType

A ZoneSearchResultType enum value. One of the following:

-   Article—Search results contain only articles.
-   Question—Search results contain only questions.

result

Type: ConnectApi.ZoneSearchPage

The object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchInZone(communityId, zoneId, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_searchInZone "Search articles or questions in a zone.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")