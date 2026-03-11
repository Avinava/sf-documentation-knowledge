---
title: "PluginDescribeResult.OutputParameter Constructors"
domain: apex-reference
topic: plugindescriberesultoutputparameter-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.094Z
keywords: [PluginDescribeResult.OutputParameter, Constructors, Creates, new, instance, Process.PluginDescribeResult.OutputParameter, class, specified, name, description, parameter, type., parameterType, Signature, Parameters]
---

# PluginDescribeResult.OutputParameter Constructors

> Creates a new instance of the Process.PluginDescribeResult.OutputParameter class using the specified name,
  description, and parameter type.

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