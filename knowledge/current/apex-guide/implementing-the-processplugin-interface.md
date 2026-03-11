---
title: "Implementing the Process.Plugin Interface"
domain: apex-guide
topic: implementing-the-processplugin-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.451Z
keywords: [Implementing, Process.Plugin, Interface, Tip, Example, Implementation, Test, Class]
---

# Implementing the Process.Plugin Interface

# Implementing the Process.Plugin Interface

Process.Plugin is a built-in interface that allows you to pass data between your organization and a specified flow.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

The class that implements the Process.Plugin interface must call these methods.

| Name | Arguments | Return Type | Description |
| --- | --- | --- | --- |
| describe |  | Process.PluginDescribeResult | Returns a Process.PluginDescribeResult object that describes this method call. |
| invoke | Process.PluginRequest | Process.PluginResult | Primary method that the system invokes when the class that implements the interface is instantiated. |

## Example Implementation

```

```

## Test Class

The following is a test class for the preceding class.

```

```