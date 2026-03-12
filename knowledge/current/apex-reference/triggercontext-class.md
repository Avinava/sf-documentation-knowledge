---
title: "TriggerContext Class"
domain: apex-reference
topic: triggercontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.948Z
estimatedTokens: 1524
namespace: EventBus
keywords: [TriggerContext, platform, event, change, trigger, that’s, currently, executing, how, times, retried, due, EventBus.RetryableException, resume, executions]
---

# TriggerContext Class

> Provides information about the platform event or change event trigger
      that’s currently executing, such as how many times the trigger was retried due to the EventBus.RetryableException. Also, provides a method to
      resume trigger executions.

**Namespace:** `EventBus`

# TriggerContext Class

Provides information about the platform event or change event trigger that’s currently executing, such as how many times the trigger was retried due to the EventBus.RetryableException. Also, provides a method to resume trigger executions.

## Namespace

[EventBus](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm "The EventBus namespace provides classes and methods for platform events and Change Data Capture events.")

-   **[TriggerContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_properties)**

-   **[TriggerContext Methods](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_methods)**


## TriggerContext Properties

The following are properties for TriggerContext.

-   **[lastError](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_lastError)**
    Read-only. The error message that the last thrown EventBus.RetryableException contains.
-   **[retries](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_retries)**
    Read-only. The number of times the trigger was retried due to throwing the EventBus.RetryableException.

### lastError

Read-only. The error message that the last thrown EventBus.RetryableException contains.

#### Signature

public String lastError {get;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The error message that this property returns is the message that was passed in when creating the EventBus.RetryableException exception, as follows.

```

```

### retries

Read-only. The number of times the trigger was retried due to throwing the EventBus.RetryableException.

#### Signature

public Integer retries {get;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

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

## Code Examples

```
throw new EventBus.RetryableException(
             'Condition is not met, so retrying the trigger again.');
```

```
EventBus.TriggerContext.currentContext().setResumeCheckpoint(event.replayId);
```

## Related Topics

- EventBus (atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)
- TriggerContext Properties (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm)
- TriggerContext Methods (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm)
- lastError (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm)
- retries (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- currentContext() (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm)
- getResumeCheckpoint() (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm)
- setResumeCheckpoint(resumeReplayId) (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm)
