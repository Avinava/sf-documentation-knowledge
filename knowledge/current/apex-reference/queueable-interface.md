---
title: "Queueable Interface"
domain: apex-reference
topic: queueable-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.500Z
keywords: [Queueable, Interface, Executes, queueable, job., execute, context, Signature, Parameters, Return, Value]
---

# Queueable Interface

> Executes the queueable job.

### execute(context)

Executes the queueable job.

#### Signature

public void execute(QueueableContext context)

#### Parameters

context

Type: [QueueableContext](atlas.en-us.apexref.meta/apexref/apex_interface_system_queueablecontext.htm#apex_interface_system_queueablecontext "Represents the parameter type of the execute() method in a class that implements the Queueable interface and contains the job ID. This interface is implemented internally by Apex.")

Contains the job ID.

#### Return Value

Type: Void