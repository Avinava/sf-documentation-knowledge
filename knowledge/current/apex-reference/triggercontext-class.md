---
title: "TriggerContext Class"
domain: apex-reference
topic: triggercontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.473Z
keywords: [TriggerContext, Class, Sets, checkpoint, event, stream, where, platform, trigger, resumes, execution, new, invocation., method, recover, limit, uncaught, exceptions, control, number]
---

# TriggerContext Class

> Sets a checkpoint in the event stream where the platform event trigger
      resumes execution in a new invocation. Use this method to recover from limit and uncaught
      exceptions, or to control the number of events processed in one trigger execution. When
      calling this method, pass in the replay ID of the last successfully processed event message.
      When the trigger stops execution before all events in Trigger.New are processed, either because of an uncaught exception or
      intentionally, the trigger is invoked again. The new execution starts with the event message
      in the stream after the one with the checkpointed Replay ID.

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