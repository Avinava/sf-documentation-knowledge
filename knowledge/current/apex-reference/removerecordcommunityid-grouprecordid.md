---
title: "removeRecord(communityId, groupRecordId)"
domain: apex-reference
topic: removerecordcommunityid-grouprecordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [removeRecord, communityId, groupRecordId, Remove, association, record, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# removeRecord(communityId, groupRecordId)

> Remove the association of a record with a group.

### removeRecord(communityId, groupRecordId)

Remove the association of a record with a group.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static Void removeRecord(String communityId, String groupRecordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group record.

#### Return Value

Type: Void