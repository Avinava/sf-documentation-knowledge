---
title: "searchInZone(communityId, zoneId, q, filter,
      language)"
domain: apex-reference
topic: searchinzonecommunityid-zoneid-q-filter-language
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.937Z
keywords: [searchInZone, communityId, zoneId, filter, language, Search, articles, questions, zone, specify, results., Note, API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# searchInZone(communityId, zoneId, q, filter,
      language)

> Search articles or questions in a zone, and specify the language of
      the results.

### searchInZone(communityId, zoneId, q, filter, language)

Search articles or questions in a zone, and specify the language of the results.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

With the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see [End of Support for Chatter Answers in Spring ’18](https://help.salesforce.com/apex/HTViewSolution?urlname=Chatter-Answers-to-Retire-in-Spring-18 "HTML (New Window)").

#### API Version

36.0

#### Available to Guest Users

37.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ZoneSearchPage searchInZone(String communityId, String zoneId, String q, ConnectApi.ZoneSearchResultType filter, String language)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

zoneId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a zone.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

filter

Type: [ConnectApi.ZoneSearchResultType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConnectApi.ZoneSearchResultType-FCB0824A)

-   Article—Search results contain only articles.
-   Question—Search results contain only questions.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The language of the articles or questions. The value must be a Salesforce supported locale code.

#### Return Value

Type: [ConnectApi.ZoneSearchPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_zoneSearchPage.htm#apex_connectapi_output_zoneSearchPage "Page of zone search results.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchInZone(communityId, zoneId, q, filter, language, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Zones_static_methods.htm#apex_ConnectAPI_Zones_setTestSearchInZone_3 "Register a ConnectApi.ZoneSearchPage object to be returned when searchInZone(communityId, zoneId, q, filter, language) is called in a test context. Use the method with the same parameters or you receive an exception.")