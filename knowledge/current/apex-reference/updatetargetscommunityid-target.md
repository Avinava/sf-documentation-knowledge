---
title: "updateTargets(communityId, target)"
domain: apex-reference
topic: updatetargetscommunityid-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [updateTargets, communityId, target, Update, targets., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateTargets(communityId, target)

> Update targets.

### updateTargets(communityId, target)

Update targets.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TargetCollection updateTargets(String communityId, ConnectApi.TargetCollectionUpdateInput target)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

target

Type: [ConnectApi.TargetCollectionUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_collection_update.htm "Collection of targets to update.")

A ConnectApi.TargetCollectionUpdateInput object that defines the updates for the targets.

#### Return Value

Type: [ConnectApi.TargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target_collection.htm "List of personalization targets.")