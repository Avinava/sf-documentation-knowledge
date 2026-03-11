---
title: "createTargets(communityId, target)"
domain: apex-reference
topic: createtargetscommunityid-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [createTargets, communityId, target, Create, targets., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createTargets(communityId, target)

> Create targets.

### createTargets(communityId, target)

Create targets.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TargetCollection createTargets(String communityId, ConnectApi.TargetCollectionInput target)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

target

Type: [ConnectApi.TargetCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_collection.htm "Collection of targets to create.")

A ConnectApi.TargetCollectionInput object that defines the targets.

#### Return Value

Type: [ConnectApi.TargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target_collection.htm "List of personalization targets.")