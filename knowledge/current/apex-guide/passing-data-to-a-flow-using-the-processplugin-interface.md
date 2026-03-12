---
title: "Passing Data to a Flow Using the Process.Plugin
    Interface"
domain: apex-guide
topic: passing-data-to-a-flow-using-the-processplugin-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.823Z
estimatedTokens: 1062
keywords: [Passing, Data, Flow, Process.Plugin, built-in, lets, process, data, within, org, pass, specified, flow., exposes, Apex, service, which, accepts, input, values]
---

# Passing Data to a Flow Using the Process.Plugin
    Interface

> Process.Plugin
  is a built-in interface that lets you process data within
   your org and pass it to a specified flow. The interface exposes Apex as a service, which accepts
  input values and returns output back to the flow.

# Passing Data to a Flow Using the Process.Plugin Interface

Process.Plugin is a built-in interface that lets you process data within your org and pass it to a specified flow. The interface exposes Apex as a service, which accepts input values and returns output back to the flow.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

When you define an Apex class that implements the Process.Plugin interface in your org, it's available in Flow Builder as a legacy Apex action.

Process.Plugin has these top-level classes.

-   [Process.PluginRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Process_PluginRequest.htm) passes input parameters from the class that implements the interface to the flow.
-   [Process.PluginResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Process_PluginResult.htm) returns output parameters from the class that implements the interface to the flow.
-   [Process.PluginDescribeResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm) passes input parameters from a flow to the class that implements the interface. This class determines the input parameters and output parameters needed by the Process.PluginResult plug-in.

When you write Apex unit tests, instantiate a class and pass it into the interface invoke method. To pass in the parameters that the system needs, create a map and use it in the constructor. For more information, see [Using the Process.PluginRequest Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_request.htm "The Process.PluginRequest class passes input parameters from the class that implements the interface to the flow.").

-   **[Implementing the Process.Plugin Interface](atlas.en-us.apexcode.meta/apexcode/apex_process_plugin.htm)**
    Process.Plugin is a built-in interface that allows you to pass data between your organization and a specified flow.
-   **[Using the Process.PluginRequest Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_request.htm)**
    The Process.PluginRequest class passes input parameters from the class that implements the interface to the flow.
-   **[Using the Process.PluginResult Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_result.htm)**
    The Process.PluginResult class returns output parameters from the class that implements the interface to the flow.
-   **[Using the Process.PluginDescribeResult Class](atlas.en-us.apexcode.meta/apexcode/apex_plugin_describe_result.htm)**
    Use the Process.Plugin interface describe method to dynamically provide both input and output parameters for the flow. This method returns the Process.PluginDescribeResult class.
-   **[Process.Plugin Data Type Conversions](atlas.en-us.apexcode.meta/apexcode/apex_plugin_datatype_conversions.htm)**
    Understand how data types are converted between Apex and the values returned to the Process.Plugin. For example, text data in a flow converts to string data in Apex.
-   **[Sample Process.Plugin Implementation for Lead Conversion](atlas.en-us.apexcode.meta/apexcode/apex_process_plugin_example_lead_convert.htm)**
    In this example, an Apex class implements the Process.Plugin interface and converts a lead into an account, contact, and optionally, an opportunity. Test methods for the plug-in are also included. This implementation can be called from a flow via a legacy Apex action.

## Related Topics

- Using the Process.PluginRequest Class (atlas.en-us.apexcode.meta/apexcode/apex_plugin_request.htm)
- Implementing the Process.Plugin Interface (atlas.en-us.apexcode.meta/apexcode/apex_process_plugin.htm)
- Using the Process.PluginResult Class (atlas.en-us.apexcode.meta/apexcode/apex_plugin_result.htm)
- Using the Process.PluginDescribeResult Class (atlas.en-us.apexcode.meta/apexcode/apex_plugin_describe_result.htm)
- Process.Plugin Data Type Conversions (atlas.en-us.apexcode.meta/apexcode/apex_plugin_datatype_conversions.htm)
- Sample Process.Plugin Implementation for Lead Conversion (atlas.en-us.apexcode.meta/apexcode/apex_process_plugin_example_lead_convert.htm)
