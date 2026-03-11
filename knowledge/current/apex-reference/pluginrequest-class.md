---
title: "PluginRequest Class"
domain: apex-reference
topic: pluginrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.097Z
keywords: [PluginRequest, Class, Input, parameters, passed, class, implements, Process.Plugin, interface, flow., inputParameters, Signature, Property, Value]
---

# PluginRequest Class

> Input parameters that are passed from the class that implements
the Process.Plugin interface
to the flow.

### inputParameters

Input parameters that are passed from the class that implements the Process.Plugin interface to the flow.

#### Signature

public MAP<String,ANY> inputParameters {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>