---
title: "PluginDescribeResult Properties"
domain: apex-reference
topic: plugindescriberesult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.081Z
keywords: [PluginDescribeResult, Properties, optional, field, describes, purpose, plug-in., description, Signature, Property, Value, Usage, inputParameters, name, outputParameters]
---

# PluginDescribeResult Properties

> This optional field describes the purpose of the plug-in.

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