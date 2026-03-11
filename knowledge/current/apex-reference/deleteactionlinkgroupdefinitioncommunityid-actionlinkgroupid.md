---
title: "deleteActionLinkGroupDefinition(communityId,
      actionLinkGroupId)"
domain: apex-reference
topic: deleteactionlinkgroupdefinitioncommunityid-actionlinkgroupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.943Z
keywords: [deleteActionLinkGroupDefinition, communityId, actionLinkGroupId, Delete, action, link, group, definition., Deleting, definition, removes, references, feed, elements., API, Version, Requires, Chatter, Signature, Parameters]
---

# deleteActionLinkGroupDefinition(communityId,
      actionLinkGroupId)

> Delete an action link group definition. Deleting an action link group
      definition removes all references to it from feed elements.

### deleteActionLinkGroupDefinition(communityId, actionLinkGroupId)

Delete an action link group definition. Deleting an action link group definition removes all references to it from feed elements.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static void deleteActionLinkGroupDefinition(String communityId, String actionLinkGroupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

actionLinkGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the action link group.

#### Return Value

Type: Void

#### Usage

Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.