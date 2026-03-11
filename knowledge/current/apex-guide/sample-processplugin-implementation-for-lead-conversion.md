---
title: "Sample Process.Plugin Implementation for Lead Conversion"
domain: apex-guide
topic: sample-processplugin-implementation-for-lead-conversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.461Z
keywords: [Sample, Process.Plugin, Implementation, Lead, Conversion, Tip]
---

# Sample Process.Plugin Implementation for Lead Conversion

# Sample Process.Plugin Implementation for Lead Conversion

In this example, an Apex class implements the Process.Plugin interface and converts a lead into an account, contact, and optionally, an opportunity. Test methods for the plug-in are also included. This implementation can be called from a flow via a legacy Apex action.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

```

```

```

```