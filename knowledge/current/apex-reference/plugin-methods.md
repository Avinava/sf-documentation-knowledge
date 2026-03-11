---
title: "Plugin Methods"
domain: apex-reference
topic: plugin-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.660Z
keywords: [Plugin, Methods, Returns, Process.PluginDescribeResult, object, describes, method, call., describe, Signature, Return, Value, invoke, request, Parameters]
---

# Plugin Methods

> Returns a Process.PluginDescribeResult object that describes this method call.

## Plugin Methods

The following are instance methods for Plugin.

-   **[describe()](atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm#apex_Process_Plugin_describe)**  
    Returns a Process.PluginDescribeResult object that describes this method call.
-   **[invoke(request)](atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm#apex_Process_Plugin_invoke)**  
    Primary method that the system invokes when the class that implements the interface is instantiated.

### describe()

Returns a Process.PluginDescribeResult object that describes this method call.

#### Signature

public Process.PluginDescribeResult describe()

#### Return Value

Type: [Process.PluginDescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_class_Process_PluginDescribeResult "Describes the input and output parameters for Process.PluginResult.")

### invoke(request)

Primary method that the system invokes when the class that implements the interface is instantiated.

#### Signature

public Process.PluginResult invoke(Process.PluginRequest request)

#### Parameters

request

Type: [Process.PluginRequest](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginRequest.htm#apex_class_Process_PluginRequest "Passes input parameters from the class that implements the Process.Plugin interface to the flow.")

#### Return Value

Type: [Process.PluginResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm#apex_class_Process_PluginResult "Returns output parameters from the class that implements the Process.Plugin interface to the flow.")