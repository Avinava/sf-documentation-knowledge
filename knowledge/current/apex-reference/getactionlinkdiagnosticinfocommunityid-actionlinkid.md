---
title: "getActionLinkDiagnosticInfo(communityId,
      actionLinkId)"
domain: apex-reference
topic: getactionlinkdiagnosticinfocommunityid-actionlinkid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.943Z
keywords: [getActionLinkDiagnosticInfo, communityId, actionLinkId, Get, diagnostic, information, returned, action, link, executes., Diagnostic, given, only, users, who, access, link., API, Version, Requires]
---

# getActionLinkDiagnosticInfo(communityId,
      actionLinkId)

> Get diagnostic information returned when an action link executes.
      Diagnostic information is given only for users who can access the action
    link.

### getActionLinkDiagnosticInfo(communityId, actionLinkId)

Get diagnostic information returned when an action link executes. Diagnostic information is given only for users who can access the action link.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActionLinkDiagnosticInfo getActionLinkDiagnosticInfo(String communityId, String actionLinkId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link.

#### Return Value

Type: [ConnectApi.ActionLinkDiagnosticInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_diagnostic.htm#apex_connectapi_output_action_link_diagnostic "Any diagnostic information that may exist for an executed action link. Diagnostic info is provided only for users who can access the action link.")