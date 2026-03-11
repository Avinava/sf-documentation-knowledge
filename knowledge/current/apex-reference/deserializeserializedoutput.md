---
title: "deserialize(serializedOutput)"
domain: apex-reference
topic: deserializeserializedoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.067Z
keywords: [deserialize, serializedOutput, Deserializes, provided, custom, content, string, returns, record, learning, item., Signature, Parameters, Return, Value]
---

# deserialize(serializedOutput)

> Deserializes the provided custom content string and returns the record ID of the learning
        item.

### deserialize(serializedOutput)

Deserializes the provided custom content string and returns the record ID of the learning item.

#### Signature

public String deserialize(String serializedOutput)

#### Parameters

serializedOutput

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The serialized information of custom content associated with a learning item The [serialize(learningItemId)](#apex_sfdc_enablement_LearningItemSerializeDeserializer_serialize "Serializes the custom content associated with the specified learning item. The serialized string represents the metadata of the custom content and is used to recreate the custom content in the target Salesforce org during deployment.") method returns this information as a string that is less than or equal to 250 characters.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the learning item created for the target org.