---
title: "setTestSearchGroups(communityId, q, result)"
domain: apex-reference
topic: settestsearchgroupscommunityid-q-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [setTestSearchGroups, communityId, result, Register, ConnectApi.ChatterGroupPage, object, returned, matching, ConnectApi.searchGroups, method, called, test, context., same, parameters, receive, exception., API, Version, Signature]
---

# setTestSearchGroups(communityId, q, result)

> Register a ConnectApi.ChatterGroupPage object to
            be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test
            method with the same parameters or you receive an exception.

### setTestSearchGroups(communityId, q, result)

Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestSearchGroups(String communityId, String q, ConnectApi.ChatterGroupPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

result

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

Test ConnectApi.ChatterGroupPage object.

#### Return Value

Type: Void

#### See Also

-   [searchGroups(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups "Get the first page of groups that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")