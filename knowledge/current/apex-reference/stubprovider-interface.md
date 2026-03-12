---
title: "StubProvider Interface"
domain: apex-reference
topic: stubprovider-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.000Z
estimatedTokens: 1147
namespace: System
keywords: [StubProvider, callback, part, Apex, stub, API, implement, mocking, framework, Test.createStub, stubbed, objects, testing, Usage, handleMethodCall]
---

# StubProvider Interface

> StubProvider is a callback
      interface that you can use as part of the Apex stub API to implement a mocking framework. Use
      this interface with the Test.createStub() method to
      create stubbed Apex objects for testing.

**Namespace:** `System`

# StubProvider Interface

StubProvider is a callback interface that you can use as part of the Apex stub API to implement a mocking framework. Use this interface with the Test.createStub() method to create stubbed Apex objects for testing.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

The StubProvider interface allows you to define the behavior of a stubbed Apex class. The interface specifies a single method that requires implementing: handleMethodCall(). You specify the behavior of each method of the stubbed class in the handleMethodCall() method.

In your Apex test, you create a stubbed object using the Test.createStub() method. When you invoke methods on the stubbed object, StubProvider.handleMethodCall() is called, which performs the behavior that you’ve specified for each method.

-   **[StubProvider Methods](atlas.en-us.apexref.meta/apexref/apex_interface_System_StubProvider.htm#apex_System_StubProvider_methods)**


#### See Also

-   [*Apex Developer Guide*: Build a Mocking Framework with the Stub API](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_stub_api.htm "Apex Developer Guide: Build a Mocking Framework with the Stub API - HTML (New Window)")

-   [createStub(parentType, stubProvider)](atlas.en-us.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_createStub "Creates a stubbed version of an Apex class that you can use for testing. This method is part of the Apex stub API. You can use it with the System.StubProvider interface to create a mocking framework.")


## StubProvider Methods

The following are methods for StubProvider.

-   **[handleMethodCall(stubbedObject, stubbedMethodName, returnType, listOfParamTypes, listOfParamNames, listOfArgs)](atlas.en-us.apexref.meta/apexref/apex_interface_System_StubProvider.htm#apex_System_StubProvider_handleMethodCall)**
    Use this method to define the behavior of each method of a stubbed class.

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

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- StubProvider Methods (atlas.en-us.apexref.meta/apexref/apex_interface_System_StubProvider.htm)
- createStub(parentType, stubProvider) (atlas.en-us.apexref.meta/apexref/apex_methods_system_test.htm)
- handleMethodCall(stubbedObject, stubbedMethodName, returnType, listOfParamTypes, listOfParamNames, listOfArgs) (atlas.en-us.apexref.meta/apexref/apex_interface_System_StubProvider.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- System.Type (atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
