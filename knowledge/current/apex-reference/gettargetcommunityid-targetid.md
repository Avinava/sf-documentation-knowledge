---
title: "getTarget(communityId, targetId)"
domain: apex-reference
topic: gettargetcommunityid-targetid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [getTarget, communityId, targetId, Get, target., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTarget(communityId, targetId)

> Get a target.

### getTarget(communityId, targetId)

Get a target.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Target getTarget(String communityId, String targetId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the target.

#### Return Value

Type: [ConnectApi.Target](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target.htm "Personalization target information.")