---
title: "Using the Process.PluginResult Class"
domain: apex-guide
topic: using-the-processpluginresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.441Z
keywords: [Process.PluginResult, Class, Tip]
---

# Using the Process.PluginResult Class

# Using the Process.PluginResult Class

The Process.PluginResult class returns output parameters from the class that implements the interface to the flow.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

You can instantiate the Process.PluginResult class using one of the following formats:

-   Process.PluginResult (Map<String,Object\>)
-   Process.PluginResult (String, Object)

Use the map when you have more than one result or when you don't know how many results are returned.

The following is an example of instantiating a Process.PluginResult class.

```

```