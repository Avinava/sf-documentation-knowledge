---
title: "JSON Support"
domain: apex-guide
topic: json-support
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.726Z
estimatedTokens: 1317
keywords: [JSON, Support, JavaScript, Notation, support, Apex, enables, serialization, objects, format, deserialization, serialized, content., Versioned, Behavior, Changes]
---

# JSON Support

> JavaScript Object Notation (JSON) support in Apex enables the serialization of Apex
    objects into JSON format and the deserialization of serialized JSON content.

# JSON Support

JavaScript Object Notation (JSON) support in Apex enables the serialization of Apex objects into JSON format and the deserialization of serialized JSON content.

Apex provides a set of classes that expose methods for JSON serialization and deserialization. The following table describes the classes available.

| Class | Description |
| --- | --- |
| System.JSON | Contains methods for serializing Apex objects into JSON format and deserializing JSON content that was serialized using the serialize method in this class. |
| System.JSONGenerator | Contains methods used to serialize objects into JSON content using the standard JSON encoding. |
| System.JSONParser | Represents a parser for JSON-encoded content. |

The System.JSONToken enumeration contains the tokens used for JSON parsing.

Methods in these classes throw a JSONException if an issue is encountered during execution.

JSON Support Considerations

-   JSON serialization and deserialization support is available for sObjects (standard objects and custom objects), Apex primitive and collection types, return types of Database methods (such as SaveResult and DeleteResult), and instances of your Apex classes.
-   Only custom objects, which are sObject types of managed packages can be serialized from code that is external to the managed package. Objects that are instances of Apex classes defined in the managed package can't be serialized.
-   A Map object is serializable into JSON only if it uses one of the following data types as a key.
    -   [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_boolean.htm)
    -   [Date](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_date.htm)
    -   [DateTime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_datetime.htm)
    -   [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_decimal.htm)
    -   [Double](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_double.htm)
    -   [Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_enum.htm)
    -   [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)
    -   [Integer](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_integer.htm)
    -   [Long](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_long.htm)
    -   [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm)
    -   [Time](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_time.htm)
-   When an object is declared as the parent type but is set to an instance of the subtype, some data can be lost. The object gets serialized and deserialized as the parent type and any fields that are specific to the subtype are lost.
-   An object that has a reference to itself won’t get serialized and causes a JSONException to be thrown.
-   Reference graphs that reference the same object twice are deserialized and cause multiple copies of the referenced object to be generated.
-   The System.JSONParser data type isn’t serializable. If you try to create an instance of a serializable class, such as a Visualforce controller, that has a member variable of type System.JSONParser, you receive an exception. To use JSONParser in a serializable class, use a local variable instead in your method.

## Versioned Behavior Changes

In API version 63.0 and later, JSON serialization of custom exceptions and most built-in exceptions isn't supported. Attempting to serialize an exception throws an error: Type unsupported in JSON: MyException.

In API version 53.0 and later, DateTime format and processing has been updated. The API correctly handles DateTime values in JSON requests that use more than 3 digits after the decimal point. Requests that use an unsupported DateTime format (such as 123456000) result in an error. Salesforce recommends that you strictly adhere to DateTime formats specified in [Valid Date and DateTime Formats](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_valid_date_formats.htm).

-   **[Roundtrip Serialization and Deserialization](atlas.en-us.apexcode.meta/apexcode/apex_json_json.htm)**
    Use the JSON class methods to perform roundtrip serialization and deserialization of your JSON content. These methods enable you to serialize objects into JSON-formatted strings and to deserialize JSON strings back into objects.
-   **[JSON Generator](atlas.en-us.apexcode.meta/apexcode/apex_json_jsongenerator.htm)**
    Using the JSONGenerator class methods, you can generate standard JSON-encoded content.
-   **[JSON Parsing](atlas.en-us.apexcode.meta/apexcode/apex_json_jsonparser.htm)**
    Use the JSONParser class methods to parse JSON-encoded content. These methods enable you to parse a JSON-formatted response that's returned from a call to an external service, such as a web service callout.

## Related Topics

- Roundtrip Serialization and Deserialization (atlas.en-us.apexcode.meta/apexcode/apex_json_json.htm)
- JSON Generator (atlas.en-us.apexcode.meta/apexcode/apex_json_jsongenerator.htm)
- JSON Parsing (atlas.en-us.apexcode.meta/apexcode/apex_json_jsonparser.htm)
