---
title: "getFollowers(communityId, recordId, pageParam,
                  pageSize)"
domain: apex-reference
topic: getfollowerscommunityid-recordid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.484Z
keywords: [getFollowers, communityId, recordId, pageParam, pageSize, Get, page, followers, record., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, See]
---

# getFollowers(communityId, recordId, pageParam,
                  pageSize)

> Get a page of followers for a record.

### getFollowers(communityId, recordId, pageParam, pageSize)

Get a page of followers for a record.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FollowerPage getFollowers(String communityId, String recordId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or the keyword me.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​FollowerPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Follower_Page.htm "Page of followers.")

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

#### See Also

-   [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm "Follow a Record - HTML (New Window)")