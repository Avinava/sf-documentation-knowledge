---
title: "PluginDescribeResult.OutputParameter Class"
domain: apex-reference
topic: plugindescriberesultoutputparameter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.639Z
estimatedTokens: 1468
namespace: Process
keywords: [PluginDescribeResult.OutputParameter, Describes, output, Process.PluginResult., Tip, name, description, parameterType, Description, Usage, Name, ParameterType]
---

# PluginDescribeResult.OutputParameter Class

> Describes the output parameter for Process.PluginResult.

**Namespace:** `Process`

# PluginDescribeResult.OutputParameter Class

Describes the output parameter for Process.PluginResult.

## Namespace

[Process](atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm "The Process namespace provides an interface and classes for passing data between your organization and a flow.")

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

-   **[PluginDescribeResult.OutputParameter Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_Process_PluginDescribeResult_OutputParameter_constructors)**

-   **[PluginDescribeResult.OutputParameter Properties](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_Process_PluginDescribeResult_OutputParameter_properties)**


## PluginDescribeResult.OutputParameter Constructors

The following are constructors for PluginDescribeResult.OutputParameter.

-   **[PluginDescribeResult.OutputParameter(name, description, parameterType)](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_Process_PluginDescribeResult_OutputParameter_ctor)**
    Creates a new instance of the Process.PluginDescribeResult.OutputParameter class using the specified name, description, and parameter type.
-   **[PluginDescribeResult.OutputParameter(name, parameterType)](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_Process_PluginDescribeResult_OutputParameter_ctor_2)**
    Creates a new instance of the Process.PluginDescribeResult.OutputParameter class using the specified name, description, and parameter type.

### PluginDescribeResult.OutputParameter(name, description, parameterType)

Creates a new instance of the Process.PluginDescribeResult.OutputParameter class using the specified name, description, and parameter type.

#### Signature

public PluginDescribeResult.OutputParameter(String name, String description, Process.PluginDescribeResult.ParameterType parameterType)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique name of the plug-in.

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Describes the purpose of the plug-in.

parameterType

Type: Process.PluginDescribeResult.ParameterType

The data type of the input parameter.

### PluginDescribeResult.OutputParameter(name, parameterType)

Creates a new instance of the Process.PluginDescribeResult.OutputParameter class using the specified name, description, and parameter type.

#### Signature

public PluginDescribeResult.OutputParameter(String name, Process.PluginDescribeResult.ParameterType parameterType)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique name of the plug-in.

parameterType

Type: Process.PluginDescribeResult.ParameterType

The data type of the input parameter.

## PluginDescribeResult.OutputParameter Properties

The following are properties for PluginDescribeResult.OutputParameter.

-   **[Description](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_Process_PluginDescribeResult_OutputParameter_Description)**
    This optional field describes the purpose of the plug-in.
-   **[Name](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_Process_PluginDescribeResult_OutputParameter_Name)**
    Unique name of the plug-in.
-   **[ParameterType](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_Process_PluginDescribeResult_OutputParameter_ParameterType)**
    The data type of the output parameter.

### Description

This optional field describes the purpose of the plug-in.

#### Signature

public String Description {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Size limit: 255 characters.

### Name

Unique name of the plug-in.

#### Signature

public String Name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Size limit: 40 characters.

### ParameterType

The data type of the output parameter.

#### Signature

public Process.PluginDescribeResult.ParameterType ParameterType {get; set;}

#### Property Value

Type: [Process.PluginDescribeResult.ParameterType](atlas.en-us.apexref.meta/apexref/apex_enum_Process_PluginDescribeResult_ParameterType.htm "Specifies the data types of input and output parameters of the Process.PluginDescribeResult class.")

## Related Topics

- Process (atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm)
- PluginDescribeResult.OutputParameter Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- PluginDescribeResult.OutputParameter Properties (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- PluginDescribeResult.OutputParameter(name, description, parameterType) (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- PluginDescribeResult.OutputParameter(name, parameterType) (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Description (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- Name (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- ParameterType (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- Process.PluginDescribeResult.ParameterType (atlas.en-us.apexref.meta/apexref/apex_enum_Process_PluginDescribeResult_ParameterType.htm)
