---
title: "QueueableContext Interface"
domain: apex-reference
topic: queueablecontext-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.842Z
keywords: [QueueableContext, Interface, Returns, submitted, job, uses, Queueable, interface., getJobId, Signature, Return, Value, See]
---

# QueueableContext Interface

> Returns the ID of the submitted job that uses the Queueable interface.

### getJobId()

Returns the ID of the submitted job that uses the Queueable interface.

#### Signature

public ID getJobId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the submitted job.

#### See Also

-   [*Apex Developer Guide*: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm "Apex Developer Guide: Queueable Apex - HTML (New Window)")