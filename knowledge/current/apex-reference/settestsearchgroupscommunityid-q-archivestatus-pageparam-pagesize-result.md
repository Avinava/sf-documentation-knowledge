---
title: "setTestSearchGroups(communityId, q, archiveStatus,
                  pageParam, pageSize, result)"
domain: apex-reference
topic: settestsearchgroupscommunityid-q-archivestatus-pageparam-pagesize-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [setTestSearchGroups, communityId, archiveStatus, pageParam, pageSize, result, Register, ConnectApi.ChatterGroupPage, object, returned, matching, ConnectApi.searchGroups, method, called, test, context., same, parameters, receive, exception.]
---

# setTestSearchGroups(communityId, q, archiveStatus,
                  pageParam, pageSize, result)

> Register a ConnectApi.ChatterGroupPage
            object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test
            method with the same parameters or you receive an exception.

### setTestSearchGroups(communityId, q, archiveStatus, pageParam, pageSize, result)

Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestSearchGroups(String communityId, String q, ConnectApi.GroupArchiveStatus, archiveStatus, Integer pageParam, Integer pageSize, ConnectApi.ChatterGroupPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

archiveStatus

Type: [ConnectApi.GroupArchiveStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupArchiveStatusEnum)

Archive status of groups.

-   All—All groups, including groups that are archived and groups that aren’t archived.
-   Archived—Groups that are archived.
-   NotArchived—Groups that aren’t archived.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

result

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

Test ConnectApi.ChatterGroupPage object.

#### Return Value

Type: Void

#### See Also

-   [searchGroups(communityId, q, archiveStatus, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups_5 "Get a page of groups with the archive status that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")