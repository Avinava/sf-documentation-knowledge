---
title: "Interview Class"
domain: apex-reference
topic: interview-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.111Z
estimatedTokens: 1990
namespace: Flow
keywords: [Interview, Creates, namespaced, flow, Usage, Examples, Starting, Interviews, Getting, Variable, createInterview, flowName, inputVariables, getVariableValue, variableName]
---

# Interview Class

> Creates an interview for a namespaced flow.

**Namespace:** `Flow`

# Interview Class

The Flow.Interview class provides advanced controller access to flows and the ability to start a flow.

## Namespace

[Flow](atlas.en-us.apexref.meta/apexref/apex_namespace_Flow.htm "The Flow namespace provides a class for advanced access to flows from Apex such as from Visualforce controllers and asynchronous Apex.")

## Usage

SOQL and DML limits apply during flow execution. See [Per-Transaction Flow Limits](https://help.salesforce.com/articleView?id=flow_considerations_limit_transaction.htm&language=en_US) in Salesforce Help.

To create an Interview object, you have two options.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

We recommend only using createInterview() if you must reuse your method or class. Using createInterview() has these drawbacks.

-   If you package a class that uses createInterview(), you have to add the associated flow manually.
-   If you delete a flow, Salesforce doesn't check if it's referenced with createInterview().

-   Create the object directly in your class by using:
    -   No namespace: Flow.Interview.flowName
    -   Namespace: Flow.Interview.namespace.flowName
-   Create the object dynamically by using createInterview()

To enforce sharing rules, run the flow or Apex on API version 62.0 or later. The Apex class must be declared using the with sharing keyword. The flow runs more securely in the default context when an Apex class that’s declared using the with sharing keyword launches an autolaunched flow. The flow enforces the sharing rules of the user that executes the Apex class. Data access is restricted to the sharing rules of the user that executed the Apex class. For example, a query can return fewer rows than it did in system context without sharing. An operation can fail because the user doesn’t have the correct permissions.

## Examples: Starting Flow Interviews

These examples are all sample controllers that start an interview for the flow from the [Build a Discount Calculator](https://trailhead.salesforce.com/projects/flow_calculate) project on Trailhead. Each shows a different permutation, based on:

-   Whether the interview is created statically, with Flow.Interview.myFlow, or dynamically, with createInterview().
-   Whether the flow is managed or local.

Interview Created Statically for a Local Flow

```

```

Interview Created Dynamically for a Local Flow

```

```

Interview Created Statically for a Managed Flow

```

```

Interview Created Dynamically for a Managed Flow

```

```

## Example: Getting Variable Values

This sample uses the getVariableValue method to obtain breadcrumb (navigation) information from a flow. If that flow contains subflow elements, and each of the referenced flows also contains a vaBreadCrumb variable, you can provide users with breadcrumbs regardless of which flow the interview is running.

```

```

#### See Also

-   [*Tooling API Objects*: FlowTestCoverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_flowtestcoverage.htm "Tooling API Objects: FlowTestCoverage - HTML (New Window)")

-   [*Apex Developer Guide*: Add a Test Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_qs_test.htm "Apex Developer Guide: Add a Test Class - HTML (New Window)")

-   [*Salesforce Help*: Launch a Flow from Apex](https://help.salesforce.com/s/articleView?id=platform.flow_distribute_system_apex_invoke_a_flow_from_apex.htm&language=en_US "Salesforce Help: Launch a Flow from Apex - HTML (New Window)")

-   [*Apex Developer Guide*: Launch a Flow from Apex](https://help.salesforce.com/s/articleView?id=platform.flow_distribute_system_apex_invoke_a_flow_from_apex.htm&language=en_US "Apex Developer Guide: Launch a Flow from Apex - HTML (New Window)")


## Interview Methods

The following are instance methods for Interview.

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

### createInterview(flowName, inputVariables)

Creates an interview for a flow.

#### Signature

public static Flow.Interview createInterview(String flowName, Map<String,Object\> inputVariables)

#### Parameters

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

### getVariableValue(variableName)

Returns the value of the specified flow variable. The flow variable can be in the flow embedded in the Visualforce page, or in a separate flow that is called by a subflow element.

#### Signature

public Object getVariableValue(String variableName)

#### Parameters

variableName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the unique name of the flow variable.

#### Return Value

Type: Object

#### Usage

The returned variable value comes from whichever flow the interview is running. If the specified variable can't be found in that flow, the method returns null.

This method checks for the existence of the variable at run time only, not at compile time.

### start()

Starts an instance (interview) for an autolaunched or user provisioning flow.

#### Signature

public Void start()

#### Return Value

Type: Void

#### Usage

This method can be used only with flows that have one of these types.

-   Autolaunched Flow
-   User Provisioning Flow

For details, see “[Flow Types](https://help.salesforce.com/articleView?id=flow_concepts_type.htm&language=en_US "HTML (New Window)")” in Salesforce Help.

When a flow user invokes an autolaunched flow, the active flow version runs. If there’s no active version, the latest version runs. When a flow admin invokes a flow, the latest version always runs.

## Code Examples

```apex
{
  Map<String, Object> inputs = new Map<String, Object>();
  inputs.put('AccountID', myAccount);
  inputs.put('OpportunityID', myOppty);
  
  Flow.Interview.Calculate_discounts myFlow = 
    new Flow.Interview.Calculate_discounts(inputs);
  myFlow.start();
}
```

```apex
public void callFlow(String flowName, Map <String, Object> inputs) {
  Flow.Interview myFlow = Flow.Interview.createInterview(flowName, inputs);
  myFlow.start();
}
```

```apex
{
  Map<String, Object> inputs = new Map<String, Object>();
  inputs.put('AccountID', myAccount);
  inputs.put('OpportunityID', myOppty);
  
  Flow.Interview.myNamespace.Calculate_discounts myFlow = 
    new Flow.Interview.myNamespace.Calculate_discounts(inputs);
  myFlow.start();
}
```

```apex
public void callFlow(String namespace, String flowName, Map <String, Object> inputs) {
  Flow.Interview myFlow = Flow.Interview.createInterview(namespace, flowName, inputs);
  myFlow.start();
}
```

```apex
public class SampleController {

   //Instance of the flow
   public Flow.Interview.Flow_Template_Gallery myFlow {get; set;}

   public String getBreadCrumb() {
      String aBreadCrumb;
      if (myFlow==null) { return 'Home';}
      else aBreadCrumb = (String) myFlow.getVariableValue('vaBreadCrumb');

      return(aBreadCrumb==null ? 'Home': aBreadCrumb);

   }
}
```

## Related Topics

- Flow (atlas.en-us.apexref.meta/apexref/apex_namespace_Flow.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
