---
title: "Plugin Interface"
domain: apex-reference
topic: plugin-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.660Z
keywords: [Plugin, Interface, Primary, method, system, invokes, class, implements, interface, instantiated., invoke, request, Signature, Parameters, Return, Value]
---

# Plugin Interface

> Primary method that the system invokes when the class that
implements the interface is instantiated.

### invoke(request)

Primary method that the system invokes when the class that implements the interface is instantiated.

#### Signature

public Process.PluginResult invoke(Process.PluginRequest request)

#### Parameters

request

Type: [Process.PluginRequest](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginRequest.htm#apex_class_Process_PluginRequest "Passes input parameters from the class that implements the Process.Plugin interface to the flow.")

#### Return Value

Type: [Process.PluginResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginResult.htm#apex_class_Process_PluginResult "Returns output parameters from the class that implements the Process.Plugin interface to the flow.")