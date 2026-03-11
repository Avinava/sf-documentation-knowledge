---
title: "getActionLink(communityId, actionLinkId)"
domain: apex-reference
topic: getactionlinkcommunityid-actionlinkid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.943Z
keywords: [getActionLink, communityId, actionLinkId, Get, information, action, link, including, state, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getActionLink(communityId, actionLinkId)

> Get information about an action link, including state for the context
      user.

### getActionLink(communityId, actionLinkId)

Get information about an action link, including state for the context user.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PlatformAction getActionLink(String communityId, String actionLinkId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link.

#### Return Value

Type: [ConnectApi.PlatformAction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action.htm#apex_connectapi_output_platform_action "A platform action instance with state information for the context user.")