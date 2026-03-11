---
title: "searchUsers(communityId, q)"
domain: apex-reference
topic: searchuserscommunityid-q
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [searchUsers, communityId, Get, first, page, users, match, search, criteria., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# searchUsers(communityId, q)

> Get the first page of users that match the search criteria.

### searchUsers(communityId, q)

Get the first page of users that match the search criteria.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserPage searchUsers(String communityId, String q)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.UserPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_page.htm "Page of users.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchUsers(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_setTestSearchUsers "Register a ConnectApi.UserPage object to be returned when the matching ConnectApi.searchUsers method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")