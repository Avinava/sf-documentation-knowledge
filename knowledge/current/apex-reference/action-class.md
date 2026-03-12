---
title: "Action Class"
domain: apex-reference
topic: action-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.203Z
estimatedTokens: 3140
namespace: Invocable
keywords: [Action, Contains, create, update, retrieve, information, invocable, actions., addInvocation, clearInvocations, clone, createCustomAction, name, version, createStandardAction, getName, getNamespace, getType, invoke, isStandard]
---

# Action Class

> Contains methods to create, update, and retrieve information about
      invocable actions.

**Namespace:** `Invocable`

# Action Class

Contains methods to create, update, and retrieve information about invocable actions.

## Namespace

[Invocable](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm "The Invocable namespace provides classes for calling invocable actions from Apex.")

-   **[Action Methods](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_methods)**


#### See Also

-   [*Apex Developer Guide*: InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Apex Developer Guide: InvocableMethod Annotation - HTML (New Window)")

-   [*Salesforce Help*: Launch a Flow from Apex](https://help.salesforce.com/s/articleView?id=platform.flow_distribute_system_apex_invoke_a_flow_from_apex.htm&language=en_US "Salesforce Help: Launch a Flow from Apex - HTML (New Window)")


## Action Methods

These methods are for Action.

-   **[addInvocation()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_addInvocation)**
    Creates an empty invocation in preparation for calling an invocable action. After you create the invocation, you can add parameters to the invocation.
-   **[clearInvocations()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_clearInvocations)**
    Clears the existing invocations from the action.
-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_clone)**
    Creates a copy of the Invocable.Action.
-   **[createCustomAction(type, namespace, name, version)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createCustomAction)**
    Creates a wrapper for the specified version of a custom invocable action in a specified package namespace.
-   **[createCustomAction(type, namespace, name)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#unique_946910260)**
    Creates a wrapper for a custom invocable action in a specified package namespace.
-   **[createCustomAction(type, name)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createCustomAction_2)**
    Creates a wrapper for a custom invocable action.
-   **[createStandardAction(type, version)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createStandardAction_2)**
    Creates a wrapper for a standard invocable action.
-   **[createStandardAction(type)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_createStandardAction)**
    Creates a wrapper for a standard invocable action.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getName)**
    Gets the name of an invocable action.
-   **[getNamespace()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getNamespace)**
    Gets the namespace of a custom invocable action.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_getType)**
    Gets the type of an invocable action.
-   **[invoke()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_invoke)**
    Invokes an invocable action from Apex code.
-   **[isStandard()](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_isStandard)**
    Determines whether an invocable action is a standard invocable action.
-   **[setInvocationParameter(parameterName, parameterValue)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_setInvocationParameter)**
    Sets a value for an invocable action parameter.
-   **[setInvocations(invocations)](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm#apex_Invocable_Action_setInvocations)**
    Initializes the invocations for an action from a pre-existing list of invocations.

### addInvocation()

Creates an empty invocation in preparation for calling an invocable action. After you create the invocation, you can add parameters to the invocation.

#### Signature

public Invocable.Action addInvocation()

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### clearInvocations()

Clears the existing invocations from the action.

#### Signature

public Invocable.Action clearInvocations()

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### clone()

Creates a copy of the Invocable.Action.

#### Signature

public Object clone()

#### Return Value

Type: Object

### createCustomAction(type, namespace, name, version)

Creates a wrapper for the specified version of a custom invocable action in a specified package namespace.

#### Signature

public static Invocable.Action createCustomAction(String type, String namespace, String name)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Namespace where the invocable action is located.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name for the custom invocable action.

version

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Version of the invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createCustomAction(type, namespace, name)

Creates a wrapper for a custom invocable action in a specified package namespace.

#### Signature

public static Invocable.Action createCustomAction(String type, String namespace, String name)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Namespace where the invocable action is located.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name for the custom invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createCustomAction(type, name)

Creates a wrapper for a custom invocable action.

#### Signature

public static Invocable.Action createCustomAction(String type, String name)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name for the custom invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createStandardAction(type, version)

Creates a wrapper for a standard invocable action.

#### Signature

public static Invocable.Action createStandardAction(String type)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

version

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Version of the invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### createStandardAction(type)

Creates a wrapper for a standard invocable action.

#### Signature

public static Invocable.Action createStandardAction(String type)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### getName()

Gets the name of an invocable action.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the invocable action.

### getNamespace()

Gets the namespace of a custom invocable action.

#### Signature

public String getNamespace()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Namespace of the custom invocable action.

### getType()

Gets the type of an invocable action.

#### Signature

public String getType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of invocable action.

### invoke()

Invokes an invocable action from Apex code.

#### Signature

public List<Invocable.Action.Result> invoke()

#### Return Value

Type: List<[Invocable.Action.Result](atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action_Result.htm#apex_class_Invocable_Action_Result "Contains methods to retrieve results from invocable actions called from Apex code.")\>

### isStandard()

Determines whether an invocable action is a standard invocable action.

#### Signature

public Boolean isStandard()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This method returns true if the invocable action is a standard invocable action.

### setInvocationParameter(parameterName, parameterValue)

Sets a value for an invocable action parameter.

#### Signature

public Invocable.Action setInvocationParameter(String parameterName, Object parameterValue)

#### Parameters

parameterName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the invocable action parameter to set.

parameterValue

Type: Object

Value to set the invocable action parameter to.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

### setInvocations(invocations)

Initializes the invocations for an action from a pre-existing list of invocations.

#### Signature

public Invocable.Action setInvocations(List<Map<String,ANY>> invocations)

#### Parameters

invocations

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),ANY>>

List of invocations for the invocable action.

#### Return Value

Type: [Invocable.Action](#apex_class_Invocable_Action "Contains methods to create, update, and retrieve information about invocable actions.")

## Code Examples

```
ApexPages.Action saveAction = new ApexPages.Action('{!save}');
```

## Related Topics

- Invocable (atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm)
- Action Methods (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- addInvocation() (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- clearInvocations() (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- createCustomAction(type, namespace, name, version) (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- createCustomAction(type, namespace, name) (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- createCustomAction(type, name) (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- createStandardAction(type, version) (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
- createStandardAction(type) (atlas.en-us.apexref.meta/apexref/apex_class_Invocable_Action.htm)
