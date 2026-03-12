---
title: "Process Namespace"
domain: apex-reference
topic: process-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.767Z
estimatedTokens: 548
namespace: Process
keywords: [Process, classes, passing, data, organization, flow]
---

# Process Namespace

> The Process namespace provides an interface and
    classes for passing data between your organization and a flow.

**Namespace:** `Process`

# Process Namespace

The Process namespace provides an interface and classes for passing data between your organization and a flow.

The following are the interfaces and classes in the Process namespace.

-   **[Plugin Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm#apex_interface_Process_Plugin)**
    Allows you to pass data between your organization and a specified flow.
-   **[PluginDescribeResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_class_Process_PluginDescribeResult)**
    Describes the input and output parameters for Process.PluginResult.
-   **[PluginDescribeResult.InputParameter Class](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_InputParameter.htm#apex_class_Process_PluginDescribeResult_InputParameter)**
    Describes the input parameter for Process.PluginResult.
-   **[PluginDescribeResult.OutputParameter Class](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm#apex_class_Process_PluginDescribeResult_OutputParameter)**
    Describes the output parameter for Process.PluginResult.
-   **[PluginDescribeResult.ParameterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Process_PluginDescribeResult_ParameterType.htm)**
    Specifies the data types of input and output parameters of the Process.PluginDescribeResult class.
-   **[PluginRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginRequest.htm#apex_class_Process_PluginRequest)**
    Passes input parameters from the class that implements the Process.Plugin interface to the flow.
-   **[PluginResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm#apex_class_Process_PluginResult)**
    Returns output parameters from the class that implements the Process.Plugin interface to the flow.

#### See Also

-   [*Apex Developer Guide*: Passing Data to a Flow Using the Process.Plugin Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_process_plugin_using.htm "Apex Developer Guide: Passing Data to a Flow Using the Process.Plugin
    Interface - HTML (New Window)")

## Related Topics

- Plugin Interface (atlas.en-us.apexref.meta/apexref/apex_interface_Process_Plugin.htm)
- PluginDescribeResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
- PluginDescribeResult.InputParameter Class (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_InputParameter.htm)
- PluginDescribeResult.OutputParameter Class (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)
- PluginDescribeResult.ParameterType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_Process_PluginDescribeResult_ParameterType.htm)
- PluginRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginRequest.htm)
- PluginResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm)
