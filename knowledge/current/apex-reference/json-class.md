---
title: "JSON Class"
domain: apex-reference
topic: json-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.643Z
estimatedTokens: 2682
namespace: System
keywords: [JSON, Suppresses, serializing, Apex, objects, content, Usage, createGenerator, prettyPrint, createParser, jsonString, deserialize, apexType, deserializeStrict, deserializeUntyped]
---

# JSON Class

> Suppresses null values when
         serializing Apex objects into JSON content.

**Namespace:** `System`

# JSON Class

Contains methods for serializing Apex objects into JSON format and deserializing JSON content that was serialized using the serialize method in this class.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the methods in the System.JSON class to perform round-trip JSON serialization and deserialization of Apex objects.

#### See Also

-   [*Apex Developer Guide*: Roundtrip Serialization and Deserialization](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_json_json.htm "Apex Developer Guide: Roundtrip Serialization and Deserialization - HTML (New Window)")


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

## Code Examples

```apex
Decimal n = (Decimal)JSON.deserialize(
               '100.1', Decimal.class);
System.assertEquals(n, 100.1);
```

```apex
public class Car {
    public String make;
    public String year;
}

public void parse() {        
    Car c = (Car)JSON.deserializeStrict(
        '{"make":"SFDC","year":"2020"}',
        Car.class);
    System.assertEquals(c.make, 'SFDC');
    System.assertEquals(c.year, '2020');
}
```

```apex
String jsonInput = '{
' +
    ' "description" :"An appliance",
' +
    ' "accessories" : [ "powerCord", ' + 
      '{ "right":"door handle1", ' + 
        '"left":"door handle2" } ],
' +
    ' "dimensions" : ' + 
      '{ "height" : 5.5 , ' + 
        '"width" : 3.0 , ' + 
        '"depth" : 2.2 },
' +
    ' "type" : null,
' +
    ' "inventory" : 2000,
' +
    ' "price" : 1023.45,
' +
    ' "isShipped" : true,
' +
    ' "modelNumber" : "123"
' +
    '}';
    
Map<String, Object> m = 
   (Map<String, Object>)
      JSON.deserializeUntyped(jsonInput);

System.assertEquals(
   'An appliance', m.get('description'));
        
List<Object> a = 
   (List<Object>)m.get('accessories');
System.assertEquals('powerCord', a[0]);        
Map<String, Object> a2 = 
   (Map<String, Object>)a[1];
System.assertEquals(
   'door handle1', a2.get('right'));
System.assertEquals(
   'door handle2', a2.get('left'));

Map<String, Object> dim = 
   (Map<String, Object>)m.get('dimensions');
System.assertEquals(
   5.5, dim.get('height'));
System.assertEquals(
   3.0, dim.get('width'));
System.assertEquals(
   2.2, dim.get('depth'));
        
System.assertEquals(null, m.get('type'));
System.assertEquals(
   2000, m.get('inventory'));
System.assertEquals(
   1023.45, m.get('price'));
System.assertEquals(
   true, m.get('isShipped'));
System.assertEquals(
   '123', m.get('modelNumber'));
```

```apex
Datetime dt = Datetime.newInstance(
               Date.newInstance(
                  2011, 3, 22),
               Time.newInstance(
                  1, 15, 18, 0)); 
    String str = JSON.serialize(dt); 
    System.assertEquals(
       '"2011-03-22T08:15:18.000Z"',
       str);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- createGenerator(prettyPrint) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- createParser(jsonString) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- deserialize(jsonString, apexType) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- deserializeStrict(jsonString, apexType) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- deserializeUntyped(jsonString) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- serialize(objectToSerialize) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- serialize(objectToSerialize, suppressApexObjectNulls) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- serializePretty(objectToSerialize) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- serializePretty(objectToSerialize, suppressApexObjectNulls) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
