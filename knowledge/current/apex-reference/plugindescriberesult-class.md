---
title: "PluginDescribeResult Class"
domain: apex-reference
topic: plugindescriberesult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.618Z
estimatedTokens: 1258
namespace: Process
keywords: [PluginDescribeResult, Describes, input, output, Process.PluginResult., Tip, description, Usage, inputParameters, name, outputParameters]
---

# PluginDescribeResult Class

> Describes the input and output parameters for Process.PluginResult.

**Namespace:** `Process`

# PluginDescribeResult Class

Describes the input and output parameters for Process.PluginResult.

## Namespace

[Process](atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm "The Process namespace provides an interface and classes for passing data between your organization and a flow.")

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

-   **[PluginDescribeResult Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_Process_PluginDescribeResult_constructors)**

-   **[PluginDescribeResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_Process_PluginDescribeResult_properties)**


## PluginDescribeResult Constructors

The following are constructors for PluginDescribeResult.

-   **[PluginDescribeResult()](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_Process_PluginDescribeResult_ctor)**
    Creates a new instance of the Process.PluginDescribeResult class.

### PluginDescribeResult()

Creates a new instance of the Process.PluginDescribeResult class.

#### Signature

public PluginDescribeResult()

## PluginDescribeResult Properties

The following are properties for PluginDescribeResult.

-   **[description](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_Process_PluginDescribeResult_Description)**
    This optional field describes the purpose of the plug-in.
-   **[inputParameters](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_Process_PluginDescribeResult_InputParameters)**
    The input parameters passed by the Process.PluginRequest class from a flow to the class that implements the Process.Plugin interface.
-   **[name](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_Process_PluginDescribeResult_Name)**
    Unique name of the plug-in.
-   **[outputParameters](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_Process_PluginDescribeResult_OutputParameters)**
    The output parameters passed by the Process.PluginResult class from the class that implements the Process.Plugin interface to the flow.

### description

This optional field describes the purpose of the plug-in.

#### Signature

public String description {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Size limit: 255 characters.

### inputParameters

The input parameters passed by the Process.PluginRequest class from a flow to the class that implements the Process.Plugin interface.

#### Signature

public List<Process.PluginDescribeResult.InputParameter> inputParameters {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Process.PluginDescribeResult.InputParameter](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_InputParameter.htm#apex_class_Process_PluginDescribeResult_InputParameter "Describes the input parameter for Process.PluginResult.")\>

### name

Unique name of the plug-in.

#### Signature

public String name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Size limit: 40 characters.

### outputParameters

The output parameters passed by the Process.PluginResult class from the class that implements the Process.Plugin interface to the flow.

#### Signature

public List<Process.PluginDescribeResult.OutputParameter> outputParameters {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Process.PluginDescribeResult.OutputParameter](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_class_Process_PluginDescribeResult_OutputParameter "Describes the output parameter for Process.PluginResult.")\>

## Related Topics

- Process (atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm)
- PluginDescribeResult Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- PluginDescribeResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- PluginDescribeResult() (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- description (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- inputParameters (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- name (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- outputParameters (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
