---
title: "JSON Methods"
domain: apex-reference
topic: json-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.428Z
keywords: [JSON, Methods, Returns, new, generator., createGenerator, prettyPrint, Signature, Parameters, Return, Value, createParser, jsonString, deserialize, apexType, Usage, Example, deserializeStrict, deserializeUntyped, serialize]
---

# JSON Methods

> Returns a new JSON generator.

## JSON Methods

The following are methods for JSON. All methods are static.

-   **[createGenerator(prettyPrint)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_createGenerator)**  
    Returns a new JSON generator.
-   **[createParser(jsonString)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_createParser)**  
    Returns a new JSON parser.
-   **[deserialize(jsonString, apexType)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserialize)**  
    Deserializes the specified JSON string into an Apex object of the specified type.
-   **[deserializeStrict(jsonString, apexType)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserializeStrict)**  
    Deserializes the specified JSON string into an Apex object of the specified type.
-   **[deserializeUntyped(jsonString)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserializeUntyped)**  
    Deserializes the specified JSON string into collections of primitive data types.
-   **[serialize(objectToSerialize)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_serialize)**  
    Serializes Apex objects into JSON content.
-   **[serialize(objectToSerialize, suppressApexObjectNulls)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#unique_1480012350)**  
    Suppresses null values when serializing Apex objects into JSON content.
-   **[serializePretty(objectToSerialize)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_serializePretty)**  
    Serializes Apex objects into JSON content and generates indented content using the pretty-print format.
-   **[serializePretty(objectToSerialize, suppressApexObjectNulls)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#unique_1812112261)**  
    Suppresses null values when serializing Apex objects into JSON content and generates indented content using the pretty-print format.

### createGenerator(prettyPrint)

Returns a new JSON generator.

#### Signature

public static System.JSONGenerator createGenerator(Boolean prettyPrint)

#### Parameters

prettyPrint

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Determines whether the JSON generator creates JSON content in pretty-print format with the content indented. Set to true to create indented content.

#### Return Value

Type: [System.JSONGenerator](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_class_System_JsonGenerator "Contains methods used to serialize objects into JSON content using the standard JSON encoding.")

### createParser(jsonString)

Returns a new JSON parser.

#### Signature

public static System.JSONParser createParser(String jsonString)

#### Parameters

jsonString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JSON content to parse.

#### Return Value

Type: [System.JSONParser](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_class_System_JsonParser "Represents a parser for JSON-encoded content.")

### deserialize(jsonString, apexType)

Deserializes the specified JSON string into an Apex object of the specified type.

#### Signature

public static Object deserialize(String jsonString, System.Type apexType)

#### Parameters

jsonString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JSON content to deserialize.

apexType

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

The Apex type of the object that this method creates after deserializing the JSON content.

#### Return Value

Type: Object

#### Usage

If the JSON content contains attributes not present in the System.Type argument, such as a missing field or object, deserialization fails in some circumstances. When deserializing JSON content into a custom object or an sObject using Salesforce API version 34.0 or earlier, this method throws a runtime exception when passed extraneous attributes. When deserializing JSON content into an Apex class in any API version, or into an object in API version 35.0 or later, no exception is thrown. When no exception is thrown, this method ignores extraneous attributes and parses the rest of the JSON content.

#### Example

The following example deserializes a Decimal value.

```

```

### deserializeStrict(jsonString, apexType)

Deserializes the specified JSON string into an Apex object of the specified type.

#### Signature

public static Object deserializeStrict(String jsonString, System.Type apexType)

#### Parameters

jsonString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JSON content to deserialize.

apexType

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

The Apex type of the object that this method creates after deserializing the JSON content.

#### Return Value

Type: Object

#### Usage

All attributes in the JSON string must be present in the specified type. If the JSON content contains attributes not present in the System.Type argument, such as a missing field or object, deserialization fails in some circumstances. When deserializing JSON content with extraneous attributes into an Apex class, this method throws an exception in all API versions. However, no exception is thrown when you use this method to deserialize JSON content into a custom object or an sObject.

#### Example

The following example deserializes a JSON string into an object of a user-defined type represented by the Car class, which this example also defines.

```

```

### deserializeUntyped(jsonString)

Deserializes the specified JSON string into collections of primitive data types.

#### Signature

public static Object deserializeUntyped(String jsonString)

#### Parameters

jsonString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JSON content to deserialize.

#### Return Value

Type: Object

#### Example

The following example deserializes a JSON representation of an appliance object into a map that contains primitive data types and further collections of primitive types. It then verifies the deserialized values.

```

```

### serialize(objectToSerialize)

Serializes Apex objects into JSON content.

#### Signature

public static String serialize(Object objectToSerialize)

#### Parameters

objectToSerialize

Type: Object

The Apex object to serialize.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

The following example serializes a new Datetime value.

```

```

### serialize(objectToSerialize, suppressApexObjectNulls)

Suppresses null values when serializing Apex objects into JSON content.

#### Signature

public static String serialize(Object objectToSerialize, Boolean suppressApexObjectNulls)

#### Parameters

objectToSerialize

Type: Object

The Apex object to serialize.

suppressApexObjectNulls

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, remove null values before serializing the JSON object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This parameter doesn’t apply to sObjects retrieved via SOQL.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method allows you to specify whether to suppress null values when serializing Apex objects into JSON content.

### serializePretty(objectToSerialize)

Serializes Apex objects into JSON content and generates indented content using the pretty-print format.

#### Signature

public static String serializePretty(Object objectToSerialize)

#### Parameters

objectToSerialize

Type: Object

The Apex object to serialize.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### serializePretty(objectToSerialize, suppressApexObjectNulls)

Suppresses null values when serializing Apex objects into JSON content and generates indented content using the pretty-print format.

#### Signature

public static String serializePretty(Object objectToSerialize, Boolean suppressApexObjectNulls)

#### Parameters

objectToSerialize

Type: Object

The Apex object to serialize.

suppressApexObjectNulls

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, remove null values before serializing the JSON object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This parameter doesn’t apply to sObjects retrieved via SOQL.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")