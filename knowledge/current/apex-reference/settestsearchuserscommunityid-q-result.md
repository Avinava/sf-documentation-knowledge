---
title: "setTestSearchUsers(communityId, q, result)"
domain: apex-reference
topic: settestsearchuserscommunityid-q-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [setTestSearchUsers, communityId, result, Register, ConnectApi.UserPage, object, returned, matching, ConnectApi.searchUsers, method, called, test, context., same, parameters, receive, exception., API, Version, Signature]
---

# setTestSearchUsers(communityId, q, result)

> Register a ConnectApi.UserPage object to be
  returned when the matching ConnectApi.searchUsers method
  is called in a test context. Use the method with the same parameters or you receive an
  exception.

### setTestSearchUsers(communityId, q, result)

Register a ConnectApi.UserPage object to be returned when the matching ConnectApi.searchUsers method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0

#### Signature

public static Void setTestSearchUsers(String communityId, String q, ConnectApi.UserPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [ConnectApi.UserPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_page.htm "Page of users.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchUsers(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_searchUsers "Get the first page of users that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")