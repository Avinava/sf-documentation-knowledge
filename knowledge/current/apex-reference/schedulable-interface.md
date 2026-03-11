---
title: "Schedulable Interface"
domain: apex-reference
topic: schedulable-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.845Z
keywords: [Schedulable, Interface, Executes, scheduled, Apex, job., execute, context, Signature, Parameters, Return, Value]
---

# Schedulable Interface

> Executes the scheduled Apex job.

### execute(context)

Executes the scheduled Apex job.

#### Signature

public Void execute(SchedulableContext context)

#### Parameters

context

Type: [System.SchedulableContext](atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulablecontext.htm#apex_interface_system_schedulablecontext "Represents the parameter type of a method in a class that implements the Schedulable interface and contains the scheduled job ID. This interface is implemented internally by Apex.")

Contains the job ID.

#### Return Value

Type: Void