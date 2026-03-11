---
title: "serialize(learningItemId)"
domain: apex-reference
topic: serializelearningitemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.067Z
keywords: [serialize, learningItemId, Serializes, custom, content, associated, specified, learning, item., serialized, string, represents, metadata, used, recreate, target, Salesforce, org, during, deployment.]
---

# serialize(learningItemId)

> Serializes the custom content associated with the specified learning item. The serialized
                string represents the metadata of the custom content and is used to recreate the
                custom content in the target Salesforce org during  deployment.

### serialize(learningItemId)

Serializes the custom content associated with the specified learning item. The serialized string represents the metadata of the custom content and is used to recreate the custom content in the target Salesforce org during deployment.

#### Signature

public String serialize(String learningItemId)

#### Parameters

learningItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the learning item associated with the custom content to be serialized.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The serialized information of the custom content of the specified learning item. The format is a string that’s less than or equal to 250 characters long.