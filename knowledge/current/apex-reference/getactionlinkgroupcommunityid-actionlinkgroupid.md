---
title: "getActionLinkGroup(communityId,
    actionLinkGroupId)"
domain: apex-reference
topic: getactionlinkgroupcommunityid-actionlinkgroupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.944Z
keywords: [getActionLinkGroup, communityId, actionLinkGroupId, Get, information, action, link, group, including, state, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getActionLinkGroup(communityId,
    actionLinkGroupId)

> Get information about an action link group including state for the
      context user.

### getActionLinkGroup(communityId, actionLinkGroupId)

Get information about an action link group including state for the context user.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PlatformActionGroup getActionLinkGroup(String communityId, String actionLinkGroupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link group.

#### Return Value

Type: [ConnectApi.PlatformActionGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action_group.htm#apex_connectapi_output_platform_action_group "A platform action group instance with state appropriate for the context user.")

#### Usage

All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Action link groups are accessible by clients, unlike [action link group definitions](#apex_ConnectAPI_ActionLinks_getActionLinkGroupDefinition_1 "Get information about an action link group definition.").