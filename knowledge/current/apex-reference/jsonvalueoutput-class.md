---
title: "JsonValueOutput Class"
domain: apex-reference
topic: jsonvalueoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.629Z
estimatedTokens: 2149
namespace: Auth
keywords: [JsonValueOutput, Stores, output, Get, User, Data, JSON, invocable, action, which, access, Flow, Builder.., Usage, stringValue, booleanValue, integerValue, doubleValue, jsonStringValue, jsonArrayValue]
---

# JsonValueOutput Class

> Stores the output of the Get User Data from JSON String invocable action, which you can
    access in Flow Builder..

**Namespace:** `Auth`

# JsonValueOutput Class

Stores the output of the Get User Data from JSON String invocable action, which you can access in Flow Builder..

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

To implement single sign-on (SSO) with the authentication provider framework, you must set up a registration handler that creates and updates users who log in via the identity provider. To create and update users, the registration handler uses user information from the identity provider. Some identity providers return user information in an ID token or in a user info response. The ID token and user info response are formatted as JSON objects that can be deeply nested, which makes them difficult to parse. If you use Flow Builder for your registration handler, the Get User Data from JSON String invocable action makes it easier to get user information from these JSON objects. Use this action to retrieve a specific attribute value from the ID token or user info response.

The action takes two input values. The first input value is the ID token or user info response from the identity provider. This input value must be a JSON object that has been serialized into a string. The second input value is the JSON key that corresponds to the attribute value that you want to retrieve. Using these input values, the action parses the ID token or user info response. It outputs the attribute value and stores it in an instance of the Auth.JsonValueOutput class. Each instance of this class stores a single attribute. The attribute is stored in a property that corresponds to its data type in the identity provider response, such as integerValue for an integer.

For more information about this action and how you can use it, see these resources in Salesforce Help.

-   [Flow Core Action: Get User Data from JSON String](http://platform.flow_ref_elements_actions_generate_user_data.htm)
-   [Example: Authentication Provider Registration Handler Flow](https://help.salesforce.com/s/articleView?id=xcloud.sso_flow_registration_handler_example.htm&language=en_US)

-   **[JsonValueOutput Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_constructors)**

-   **[JsonValueOutput Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_properties)**


## JsonValueOutput Constructors

The following are constructors for JsonValueOutput.

-   **[JsonValueOutput(stringValue, booleanValue, integerValue, doubleValue, jsonStringValue, jsonArrayValue)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_ctor)**
    The Get User Data from JSON String action in Flow Builder uses this constructor to create an instance of the Auth.JsonValueOutput class.

### JsonValueOutput(stringValue, booleanValue, integerValue, doubleValue, jsonStringValue, jsonArrayValue)

The Get User Data from JSON String action in Flow Builder uses this constructor to create an instance of the Auth.JsonValueOutput class.

#### Signature

public JsonValueOutput(String stringValue, Boolean booleanValue, Integer integerValue, Double doubleValue, String jsonStringValue, String jsonArrayValue)

#### Parameters

stringValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the attribute returned by the action is a string, it's stored in this parameter.

booleanValue

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If the attribute returned by the action is a boolean value, it's stored in this parameter.

integerValue

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

If the attribute returned by the action is an integer value, it's stored in this parameter.

doubleValue

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

If the attribute returned by the action is a Double value, it's stored in this parameter.

jsonStringValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the attribute returned by the action is a JSON string, it's stored in this parameter.

jsonArrayValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the attribute returned by the action is a JSON array, it's formatted as a string and stored in this parameter.

## JsonValueOutput Properties

The following are properties for JsonValueOutput.

-   **[booleanValue](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_booleanValue)**
    If the attribute returned by the action is a boolean value, it's stored in this property.
-   **[doubleValue](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_doubleValue)**
    If the attribute returned by the action is a Double value, it's stored in this property.
-   **[integerValue](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_integerValue)**
    If the attribute returned by the action is an integer, it's stored in this property.
-   **[jsonArrayValue](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_jsonArrayValue)**
    If the attribute returned by the action is a JSON array, it's formatted as a string and stored in this property.
-   **[jsonStringValue](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_jsonStringValue)**
    If the attribute returned by the action is a JSON string, it's stored in this property.
-   **[stringValue](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm#apex_Auth_JsonValueOutput_stringValue)**
    If the attribute returned by the action is a string, it's stored in this property.

### booleanValue

If the attribute returned by the action is a boolean value, it's stored in this property.

#### Signature

public Boolean booleanValue {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### doubleValue

If the attribute returned by the action is a Double value, it's stored in this property.

#### Signature

public Double doubleValue {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### integerValue

If the attribute returned by the action is an integer, it's stored in this property.

#### Signature

public Integer integerValue {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### jsonArrayValue

If the attribute returned by the action is a JSON array, it's formatted as a string and stored in this property.

#### Signature

public String jsonArrayValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### jsonStringValue

If the attribute returned by the action is a JSON string, it's stored in this property.

#### Signature

public String jsonStringValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### stringValue

If the attribute returned by the action is a string, it's stored in this property.

#### Signature

public String stringValue {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- JsonValueOutput Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm)
- JsonValueOutput Properties (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm)
- JsonValueOutput(stringValue, booleanValue, integerValue, doubleValue, jsonStringValue, jsonArrayValue) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- booleanValue (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm)
- doubleValue (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JsonValueOutput.htm)
