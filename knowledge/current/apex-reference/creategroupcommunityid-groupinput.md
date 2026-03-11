---
title: "createGroup(communityId, groupInput)"
domain: apex-reference
topic: creategroupcommunityid-groupinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [createGroup, communityId, groupInput, Create, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createGroup(communityId, groupInput)

> Create a group.

### createGroup(communityId, groupInput)

Create a group.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupDetail createGroup(String, communityId, ConnectApi.ChatterGroupInput groupInput)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),

ID for an Experience Cloud site, internal, or null.

groupInput

Type: [ConnectApi.Chatter​​GroupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_chattergroupinput.htm "Chatter group input.")

The properties of the group.

#### Return Value

Type: [ConnectApi.​Chatter​Group​Detail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm "Chatter group details.")