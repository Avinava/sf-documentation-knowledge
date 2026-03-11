---
title: "searchUserGroups(communityId, userId, q)"
domain: apex-reference
topic: searchusergroupscommunityid-userid-q
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [searchUserGroups, communityId, userId, Get, user’s, groups, match, search, criteria., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# searchUserGroups(communityId, userId, q)

> Get the user’s groups that match the search criteria.

### searchUserGroups(communityId, userId, q)

Get the user’s groups that match the search criteria.

#### API Version

30.0–44.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 45.0 and later, use [searchUserGroupDetails(communityId, userId, q)](#apex_ConnectApi_ChatterUsers_searchUserGroups_3 "Get the user’s groups that match the search criteria.").

#### Available to Guest Users

32.0–44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserGroupPage searchUserGroups(String communityId, String userId, String q)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.User​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_group_page.htm "A paginated list of groups the context user is a member of.")