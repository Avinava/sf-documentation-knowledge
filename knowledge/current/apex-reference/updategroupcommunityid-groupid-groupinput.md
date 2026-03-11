---
title: "updateGroup(communityId, groupId, groupInput)"
domain: apex-reference
topic: updategroupcommunityid-groupid-groupinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [updateGroup, communityId, groupId, groupInput, Update, settings, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# updateGroup(communityId, groupId, groupInput)

> Update the settings of a group.

### updateGroup(communityId, groupId, groupInput)

Update the settings of a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroup updateGroup(String communityId, String groupId, ConnectApi.ChatterGroupInput groupInput)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

groupInput

Type: [ConnectApi.Chatter​​GroupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_chattergroupinput.htm "Chatter group input.")

A ConnectApi.ChatterGroupInput object.

#### Return Value

Type: [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission. Use this method to update any settings in the ConnectApi.ChatterGroupInput class. These settings include the group title and text in the “Information” section, whether the group is public or private, and whether the group is archived.

#### Example

This example archives a group.

```

```