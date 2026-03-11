---
title: "getActionLinkGroupDefinition(communityId,
      actionLinkGroupId)"
domain: apex-reference
topic: getactionlinkgroupdefinitioncommunityid-actionlinkgroupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.944Z
keywords: [getActionLinkGroupDefinition, communityId, actionLinkGroupId, Get, information, action, link, group, definition., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getActionLinkGroupDefinition(communityId,
      actionLinkGroupId)

> Get information about an action link group
    definition.

### getActionLinkGroupDefinition(communityId, actionLinkGroupId)

Get information about an action link group definition.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActionLinkGroupDefinition getActionLinkGroupDefinition(String communityId, String actionLinkGroupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link group.

#### Return Value

Type: [ConnectApi.ActionLinkGroupDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_group_definition.htm#apex_connectapi_output_action_link_group_definition "The definition of an action link group. Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.")

#### Usage

Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.