---
title: "Comparing  setResumeCheckpoint() and and EventBus.RetryableException"
domain: platform-events
topic: comparing-setresumecheckpoint-and-and-eventbusretryableexception
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.118Z
estimatedTokens: 515
keywords: [Comparing, setResumeCheckpoint, EventBus.RetryableException, Determine, suitable, resuming, platform, event, trigger]
---

# Comparing  setResumeCheckpoint() and and EventBus.RetryableException

> Determine which method is most suitable for resuming a platform
      event trigger.

# Comparing setResumeCheckpoint() and and EventBus.RetryableException

Determine which method is most suitable for resuming a platform event trigger.

| setResumeCheckpoint() Method | EventBus.RetryableException |
| --- | --- |
| Use setResumeCheckpoint() when the trigger has processed event messages successfully before an unhandled exception occurs, such as a limit exception. After the exception, the trigger resumes after the last checkpointed event message. | Throw the EventBus.RetryableException to reprocess events when you expect an external condition to change or a transient error to go away. |
| Trigger execution continues after setResumeCheckpoint(). | Trigger execution halts after the EventBus.RetryableException is thrown. |
| DML operations performed are committed. | DML operations performed before the exception is thrown are rolled back and not committed. |
| When the trigger fires again, only the event messages after the one with the specified replay ID are resent, in addition to any new event messages. | When the trigger fires again, all event messages from the previous batch are resent in the new batch, in addition to any new event messages. |
| These TriggerContext properties don’t apply and aren’t populated: retries and lastError. | These TriggerContext properties are populated: retries and lastError. |
| No limit on how many times you can set a checkpoint with setResumeCheckpoint() and how many times the trigger can resume from the checkpoint after an unhandled exception occurs. | You can retry the trigger nine times after its initial run by throwing EventBus.RetryableException. |

To use both setResumeCheckpoint() and EventBus.RetryableException, follow the platform event trigger template shown in the Use a Platform Event Trigger Template section of the [Apply Best Practices for Writing Platform Event Triggers](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging/apply-best-practices-writing-platform-triggers) Trailhead. Other use cases that use both together are not supported.
