---
title: "createInterview(namespace, flowName, inputVariables)"
domain: apex-reference
topic: createinterviewnamespace-flowname-inputvariables
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.462Z
keywords: [createInterview, namespace, flowName, inputVariables, Creates, interview, namespaced, flow., Signature, Parameters, Return, Value, Usage]
---

# createInterview(namespace, flowName, inputVariables)

> Creates an interview for a namespaced flow.

### createInterview(namespace, flowName, inputVariables)

Creates an interview for a namespaced flow.

#### Signature

public static Flow.Interview createInterview(String namespace, String flowName, Map<String,ANY> inputVariables)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The flow’s namespace.

flowName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The flow’s API name.

inputVariables

Type: Map<String,Object>

Initial values for the flow’s input variables.

#### Return Value

Type: Flow.Interview

#### Usage

Use this method to dynamically create a Flow.Interview object for the start() method.

How you get output variable values from an interview depends on the type of the Apex variable where you're storing the interview.

-   If the variable is cast to a specific flow, you can use *myFlow.myVar* to access a variable, where *myVar* is the name of the variable.
    
    ```
    
    ```
    
-   If the variable is of type Flow.Interview but not cast to a specific flow, you must use getVariableValue() to access the flow's variables.
    
    ```
    
    ```
    

If the flow doesn't exist in the current org, a TypeException is thrown.