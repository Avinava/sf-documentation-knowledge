---
title: "StubProvider Interface"
domain: apex-reference
topic: stubprovider-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.700Z
keywords: [StubProvider, Interface, method, define, behavior, stubbed, class., handleMethodCall, stubbedObject, stubbedMethodName, returnType, listOfParamTypes, listOfParamNames, listOfArgs, Signature, Parameters, Return, Value, Usage, See]
---

# StubProvider Interface

> Use this method to define the behavior of each method of a stubbed
            class.

### handleMethodCall(stubbedObject, stubbedMethodName, returnType, listOfParamTypes, listOfParamNames, listOfArgs)

Use this method to define the behavior of each method of a stubbed class.

#### Signature

public Object handleMethodCall(Object stubbedObject, String stubbedMethodName, System.Type returnType, List<System.Type> listOfParamTypes, List<String\> listOfParamNames, List<Object\> listOfArgs)

#### Parameters

stubbedObject

Type: Object

The stubbed object.

stubbedMethodName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the invoked method.

returnType

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

The return type of the invoked method.

listOfParamTypes

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")\>

A list of the parameter types of the invoked method.

listOfParamNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of the parameter names of the invoked method.

listOfArgs

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<Object>

The actual argument values passed into this method at runtime.

#### Return Value

Type: Object

#### Usage

You can use the parameters passed into this method to identify which method on the stubbed object was invoked. Then you can define the behavior for each identified method.

#### See Also

-   [*Apex Developer Guide*: Build a Mocking Framework with the Stub API](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_stub_api.htm "Apex Developer Guide: Build a Mocking Framework with the Stub API - HTML (New Window)")