---
title: "PluginDescribeResult.InputParameter Constructors"
domain: apex-reference
topic: plugindescriberesultinputparameter-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.088Z
keywords: [PluginDescribeResult.InputParameter, Constructors, Creates, new, instance, Process.PluginDescribeResult.InputParameter, class, specified, name, description, parameter, type, required, option., parameterType, Signature, Parameters]
---

# PluginDescribeResult.InputParameter Constructors

> Creates a new instance of the Process.PluginDescribeResult.InputParameter class using the specified name,
  description, parameter type, and required option.

## PluginDescribeResult.InputParameter Constructors

The following are constructors for PluginDescribeResult.InputParameter.

-   **[PluginDescribeResult.InputParameter(name, description, parameterType, required)](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_InputParameter.htm#apex_Process_PluginDescribeResult_InputParameter_ctor)**  
    Creates a new instance of the Process.PluginDescribeResult.InputParameter class using the specified name, description, parameter type, and required option.
-   **[PluginDescribeResult.InputParameter(name, parameterType, required)](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_InputParameter.htm#apex_Process_PluginDescribeResult_InputParameter_ctor_2)**  
    Creates a new instance of the Process.PluginDescribeResult.InputParameter class using the specified name, parameter type, and required option.

### PluginDescribeResult.InputParameter(name, description, parameterType, required)

Creates a new instance of the Process.PluginDescribeResult.InputParameter class using the specified name, description, parameter type, and required option.

#### Signature

public PluginDescribeResult.InputParameter(String name, String description, Process.PluginDescribeResult.ParameterType parameterType, Boolean required)

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

required

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Set to true for required and false otherwise.

### PluginDescribeResult.InputParameter(name, parameterType, required)

Creates a new instance of the Process.PluginDescribeResult.InputParameter class using the specified name, parameter type, and required option.

#### Signature

public PluginDescribeResult.InputParameter(String name, Process.PluginDescribeResult.ParameterType parameterType, Boolean required)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique name of the plug-in.

parameterType

Type: Process.PluginDescribeResult.ParameterType

The data type of the input parameter.

required

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Set to true for required and false otherwise.