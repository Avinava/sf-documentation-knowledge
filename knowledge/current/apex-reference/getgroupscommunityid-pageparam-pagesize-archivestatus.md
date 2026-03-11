---
title: "getGroups(communityId, pageParam, pageSize,
                  archiveStatus)"
domain: apex-reference
topic: getgroupscommunityid-pageparam-pagesize-archivestatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getGroups, communityId, pageParam, pageSize, archiveStatus, Get, page, groups, archive, status., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getGroups(communityId, pageParam, pageSize,
                  archiveStatus)

> Get a page of groups with an archive status.

### getGroups(communityId, pageParam, pageSize, archiveStatus)

Get a page of groups with an archive status.

#### API Version

29.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage getGroups(String communityId, Integer pageParam, Integer pageSize, ConnectApi.GroupArchiveStatus archiveStatus)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

archiveStatus

Type: [ConnectApi.GroupArchiveStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupArchiveStatusEnum)

Archive status of groups.

-   All—All groups, including groups that are archived and groups that aren’t archived.
-   Archived—Groups that are archived.
-   NotArchived—Groups that aren’t archived.

If you pass in null, the default value is All.

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")