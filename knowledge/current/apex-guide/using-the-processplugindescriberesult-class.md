---
title: "Using the Process.PluginDescribeResult
        Class"
domain: apex-guide
topic: using-the-processplugindescriberesult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.434Z
keywords: [Process.PluginDescribeResult, Class, Tip, Subclass, Properties]
---

# Using the Process.PluginDescribeResult
        Class

# Using the Process.PluginDescribeResult Class

Use the Process.Plugin interface describe method to dynamically provide both input and output parameters for the flow. This method returns the Process.PluginDescribeResult class.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

The Process.PluginDescribeResult class doesn’t support the following functions.

-   Queries
-   Data modification
-   Email
-   Apex nested callouts

## Process.PluginDescribeResult Class and Subclass Properties

Here’s the constructor for the Process.PluginDescribeResult class.

```

```

-   [PluginDescribeResult Class Properties](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm)
-   [PluginDescribeResult.InputParameter Class Properties](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_InputParameter.htm)
-   [PluginDescribeResult.OutputParameter Class Properties](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Process_PluginDescribeResult_OutputParameter.htm)

Here’s the constructor for the Process.PluginDescribeResult.InputParameter class.

```

```

Here’s the constructor for the Process.PluginDescribeResult.OutputParameter class.

```

```

To use the Process.PluginDescribeResult class, create instances of these subclasses.

-   Process.PluginDescribeResult.InputParameter
-   Process.PluginDescribeResult.OutputParameter

Process.PluginDescribeResult.InputParameter is a list of input parameters and has the following format.

```

```

For example:

```

```

Process.PluginDescribeResult.OutputParameter is a list of output parameters and has the following format.

```

```

For example:

```

```

Both classes take the Process.PluginDescribeResult.ParameterType Enum. Valid values are:

-   BOOLEAN
-   DATE
-   DATETIME
-   DECIMAL
-   DOUBLE
-   FLOAT
-   ID
-   INTEGER
-   LONG
-   STRING
-   TIME

For example:

```

```