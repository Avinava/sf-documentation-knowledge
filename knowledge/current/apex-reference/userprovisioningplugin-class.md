---
title: "UserProvisioningPlugin Class"
domain: apex-reference
topic: userprovisioningplugin-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.621Z
keywords: [UserProvisioningPlugin, Class, Primary, method, system, invokes, class, implements, interface, instantiated., invoke, request, Signature, Parameters, Return, Value]
---

# UserProvisioningPlugin Class

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

Type: [Process.PluginDescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_class_Process_PluginDescribeResult "Describes the input and output parameters for Process.PluginResult.")