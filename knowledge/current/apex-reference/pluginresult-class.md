---
title: "PluginResult Class"
domain: apex-reference
topic: pluginresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.648Z
estimatedTokens: 495
namespace: Tip
keywords: [PluginResult, output, implements, Process.Plugin, flow., Tip, outputParameters]
---

# PluginResult Class

> Returns output parameters from the class that implements
the Process.Plugin interface
to the flow.

**Namespace:** `Tip`

# PluginResult Class

Returns output parameters from the class that implements the Process.Plugin interface to the flow.

## Namespace

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

[Process](atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm "The Process namespace provides an interface and classes for passing data between your organization and a flow.")

## PluginResult Properties

The following are properties for PluginResult.

-   **[outputParameters](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm#apex_Process_PluginResult_outputParameters)**
    Output parameters returned from the class that implements the interface to the flow.

### outputParameters

Output parameters returned from the class that implements the interface to the flow.

#### Signature

public MAP<String, ANY> outputParameters {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

## Related Topics

- Process (atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm)
- outputParameters (atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
