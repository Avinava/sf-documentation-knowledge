---
title: "PluginDescribeResult Class"
domain: apex-reference
topic: plugindescriberesult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.081Z
keywords: [PluginDescribeResult, Class, output, parameters, passed, Process.PluginResult, class, implements, Process.Plugin, interface, flow., outputParameters, Signature, Property, Value]
---

# PluginDescribeResult Class

> The output parameters passed by the Process.PluginResult class from the
class that implements the Process.Plugin interface to the flow.

### outputParameters

The output parameters passed by the Process.PluginResult class from the class that implements the Process.Plugin interface to the flow.

#### Signature

public List<Process.PluginDescribeResult.OutputParameter> outputParameters {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Process.PluginDescribeResult.OutputParameter](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_class_Process_PluginDescribeResult_OutputParameter "Describes the output parameter for Process.PluginResult.")\>