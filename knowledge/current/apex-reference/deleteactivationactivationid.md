---
title: "deleteActivation(activationId)"
domain: apex-reference
topic: deleteactivationactivationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.002Z
keywords: [deleteActivation, activationId, Delete, activation., API, Version, Note, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteActivation(activationId)

> Delete an activation.

### deleteActivation(activationId)

Delete an activation.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Before deleting an activation, ensure there are no downstream systems that expect data from it. After you delete an activation, Data 360 stops sending data to any downstream systems that are associated with the deleted activation. To identify the downstream system (activation target) that's associated with the activation, use the getActivation(activationId) resource. It provides the activation target details needed to evaluate the impact before deleting the activation.

60.0

#### Requires Chatter

No

#### Signature

public static Void deleteActivation(String activationId)

#### Parameters

activationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier (ID) or developer name of a specific activation target.

#### Return Value

Type: Void