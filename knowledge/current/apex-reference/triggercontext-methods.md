---
title: "TriggerContext Methods"
domain: apex-reference
topic: triggercontext-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.473Z
keywords: [TriggerContext, Methods, Returns, instance, EventBus.TriggerContext, class, containing, information, currently, executing, trigger., currentContext, Signature, Return, Value, getResumeCheckpoint, setResumeCheckpoint, resumeReplayId, Parameters, Usage]
---

# TriggerContext Methods

> Returns an instance of the EventBus.TriggerContext class containing information about the currently executing
      trigger.

## TriggerContext Methods

The following are methods for TriggerContext.

-   **[currentContext()](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_currentContext)**  
    Returns an instance of the EventBus.TriggerContext class containing information about the currently executing trigger.
-   **[getResumeCheckpoint()](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_getResumeCheckpoint)**  
    Returns the replay ID that was set by setResumeCheckpoint(). The returned value is the replay ID of the event message after which trigger processing resumes in a new trigger invocation.
-   **[setResumeCheckpoint(resumeReplayId)](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_setResumeCheckpoint)**  
    Sets a checkpoint in the event stream where the platform event trigger resumes execution in a new invocation. Use this method to recover from limit and uncaught exceptions, or to control the number of events processed in one trigger execution. When calling this method, pass in the replay ID of the last successfully processed event message. When the trigger stops execution before all events in Trigger.New are processed, either because of an uncaught exception or intentionally, the trigger is invoked again. The new execution starts with the event message in the stream after the one with the checkpointed Replay ID.

### currentContext()

Returns an instance of the EventBus.TriggerContext class containing information about the currently executing trigger.

#### Signature

public static eventbus.TriggerContext currentContext()

#### Return Value

Type: [EventBus.TriggerContext](#apex_class_eventbus_TriggerContext "Provides information about the platform event or change event trigger that’s currently executing, such as how many times the trigger was retried due to the EventBus.RetryableException. Also, provides a method to resume trigger executions.")

Information about the currently executing trigger.

### getResumeCheckpoint()

Returns the replay ID that was set by setResumeCheckpoint(). The returned value is the replay ID of the event message after which trigger processing resumes in a new trigger invocation.

#### Signature

public String getResumeCheckpoint()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setResumeCheckpoint(resumeReplayId)

Sets a checkpoint in the event stream where the platform event trigger resumes execution in a new invocation. Use this method to recover from limit and uncaught exceptions, or to control the number of events processed in one trigger execution. When calling this method, pass in the replay ID of the last successfully processed event message. When the trigger stops execution before all events in Trigger.New are processed, either because of an uncaught exception or intentionally, the trigger is invoked again. The new execution starts with the event message in the stream after the one with the checkpointed Replay ID.

#### Signature

public void setResumeCheckpoint(String resumeReplayId)

#### Parameters

resumeReplayId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The replay ID of the last successfully processed platform event message, after which to resume processing in a new trigger execution context.

#### Return Value

Type: void

#### Usage

The method throws an EventBus.InvalidReplayIdException if the supplied Replay ID is not valid—the replay ID is not in the current trigger batch of events, in the Trigger.new list.

#### Example

This snippet shows how to call the method and pass in the replayId property of an event instance.

```

```