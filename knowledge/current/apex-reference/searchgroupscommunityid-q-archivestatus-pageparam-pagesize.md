---
title: "searchGroups(communityId, q, archiveStatus, pageParam,
      pageSize)"
domain: apex-reference
topic: searchgroupscommunityid-q-archivestatus-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [searchGroups, communityId, archiveStatus, pageParam, pageSize, Get, page, groups, archive, status, match, search, criteria., API, Version, Available, Guest, Users, Requires, Chatter]
---

# searchGroups(communityId, q, archiveStatus, pageParam,
      pageSize)

> Get a page of groups with the archive status that match the search criteria.

### searchGroups(communityId, q, archiveStatus, pageParam, pageSize)

Get a page of groups with the archive status that match the search criteria.

#### API Version

29.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage searchGroups(String communityId, String q, ConnectApi.GroupArchiveStatus archiveStatus, Integer pageParam, Integer pageSize)

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

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchGroups(communityId, q, archiveStatus, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setTestSearchGroups_5 "Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")