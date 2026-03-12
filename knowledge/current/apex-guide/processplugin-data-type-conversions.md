---
title: "Process.Plugin Data Type Conversions"
domain: apex-guide
topic: processplugin-data-type-conversions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.796Z
estimatedTokens: 311
keywords: [Process.Plugin, Data, Conversions, Understand, how, converted, Apex, text, flow, converts]
---

# Process.Plugin Data Type Conversions

> Understand how data types are converted between Apex and the values returned to the
   Process.Plugin. For example, text data in a flow converts
  to string data in Apex.

# Process.Plugin Data Type Conversions

Understand how data types are converted between Apex and the values returned to the Process.Plugin. For example, text data in a flow converts to string data in Apex.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

We recommend using the @InvocableMethod annotation instead of the Process.Plugin interface.

-   The interface doesn’t support Blob, Collection, and sObject, data types, and it doesn’t support bulk operations. After you implement the interface on a class, the class can be referenced only from flows.
-   The annotation supports all data types and bulk operations. After you implement the annotation on a class, the class can be referenced from flows, processes, and the Custom Invocable Actions REST API endpoint.
-   Legacy Apex actions aren’t supported in auto-layout in Flow Builder. Legacy Apex actions are only available to be added in free-form in Flow Builder. Existing actions can be edited in both auto-layout and free-form mode.

| Flow Data Type | Data Type |
| --- | --- |
| Number | Decimal |
| Date | Datetime/Date |
| DateTime | Datetime/Date |
| Boolean | Boolean and numeric with 1 or 0 values only |
| Text | String |
