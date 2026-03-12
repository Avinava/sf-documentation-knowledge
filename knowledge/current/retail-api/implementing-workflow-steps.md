---
title: "Implementing Workflow Steps"
domain: retail-api
topic: implementing-workflow-steps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.702Z
estimatedTokens: 163
keywords: [Implementing, Workflow, Steps, implemented, APEX, classes, System.Callable]
---

# Implementing Workflow Steps

> Workflow Steps are implemented as APEX classes that are used in implementing the
        System.Callable interface.

# Implementing Workflow Steps

Workflow Steps are implemented as APEX classes that are used in implementing the System.Callable interface.

```

```

In the Workflow Step record, you need to define 2 attributes that maps to the APEX class:

-   Classname: The name of the APEX class that will be instantiated.
-   Method: The string value that will be sent to the APEX class call method as first parameter.
-   Entity: Defines the entity that will be passed to the APEX class.

On the context parameter, the passed in Object contains the following properties:

```

```

During runtime, each Workflow Step is executed once for each available entity.

## Code Examples

```apex
global with sharing class <your class name> implements System.Callable {
    global Object call(String method, Map<String, Object> context) {
        ...
    }
}
```

```apex
// Common to all steps.
String txId: TransactionId of the process
String salesOrg: Sales organization passed to the execution.
Object input: Whole Input Object
Object output: Whole Output Object
 
// Step specific
SObject workflowStepRecord: Workflow Step Record.
 
// Entity specific
String inputPath: Path of the current input in the main input object.
String inputEntityPath: A list of the names of the parent input entities ordered based on the deepness level. (i.e. Promotion/Tactic/TacticBrand).
Object currentInput: Current block of the input object being processed.
List<Object> parentInputs: A list of the parent Input Entities for this step. Each entry on the list will be the input Entity. Has the same number of elements as the inputEntityPath. (i.e. [ 0 ] → Promotion, [ 1 ] → Tactic, [ 2 ] → TacticBrand)
 
String outputPath: Path of the current output in the main output object.
String outputEntityPath: A list of the names of the parent output entities ordered based on the deepness level. (i.e. BOPromotion/LOTactic).
Object currentOutput:  Output object where the rule is expected to set the attributes. Rules are expected to set this object into the proper place of the parent.
List<Object> parentOutputs: A list of the parent Output Entities for this step. Each entry on the list will be the output Object for the Entity. Has the same number of elements as the outputEntityPath. (i.e. [ 0 ] → BOPromotion, [ 1 ] → LOTactic)
```
