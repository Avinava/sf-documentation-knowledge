---
title: "setTestSearchUsers(communityId, q, searchContextId, pageParam,
                  pageSize, result)"
domain: apex-reference
topic: settestsearchuserscommunityid-q-searchcontextid-pageparam-pagesize-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [setTestSearchUsers, communityId, searchContextId, pageParam, pageSize, result, Register, ConnectApi.UserPage, object, returned, matching, ConnectApi.searchUsers, method, called, test, context., same, parameters, receive, exception.]
---

# setTestSearchUsers(communityId, q, searchContextId, pageParam,
                  pageSize, result)

> Register a ConnectApi.UserPage object to be
            returned when the matching ConnectApi.searchUsers method is called in a test context. Use the
            method with the same parameters or you receive an exception.

### setTestSearchUsers(communityId, q, searchContextId, pageParam, pageSize, result)

Register a ConnectApi.UserPage object to be returned when the matching ConnectApi.searchUsers method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0

#### Signature

public static Void setTestSearchUsers(String communityId, String q, String searchContextId, Integer pageParam, Integer pageSize, ConnectApi.UserPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

searchContextId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A feed item ID that filters search results for feed @mentions. More useful results are listed first. When you specify this argument, you cannot query more than 500 results and you cannot use wildcards in the search term.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

result

Type: [ConnectApi.UserPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_page.htm "Page of users.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchUsers(communityId, q, searchContextId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_searchUsers_3 "Get a page of users that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")