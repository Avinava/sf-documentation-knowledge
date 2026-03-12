---
title: "LiveChatTranscriptEvent"
domain: object-reference
topic: livechattranscriptevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.419Z
estimatedTokens: 1443
keywords: [LiveChatTranscriptEvent, Captures, specific, events, occur, over, lifetime, chat, API, version, 24.0, later, Calls, Usage, Associated]
---

# LiveChatTranscriptEvent

> Captures specific events that occur over the lifetime of a chat.
  This object is available in API version 24.0 and later.

# LiveChatTranscriptEvent

Captures specific events that occur over the lifetime of a chat. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AgentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the agent associated with the event. |
| Detail | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionDetails associated with the event. |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LiveChatTranscriptId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the live chat transcript associated with the event. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the event. |
| Time | TypedateTimePropertiesCreate, Filter, SortDescriptionThe time at which the event happened. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe kind of event that occurred.Accept—AcceptedAgentBlocked—Blocked by AgentAlertCriticalWaitChat—Critical Wait Alert Time ReachedCancelBlocked—Cancel (Blocked)CancelNoAgent—Cancel (No Agent)CancelNoQueue—Cancel (No Queue)CancelVisitor—Canceled by VisitorChasitorIdleTimeout—Visitor Idle Time-OutChasitorIdleTimeoutWarningCleared—Visitor Idle Time-Out Warning ClearedChasitorIdleTimeoutWarningTriggered—Visitor Idle Time-Out Warning AppearedChatRequest—Chat RequestedChatResumedAfterTransfer—Chat resumedChatbotEndChat—Chatbot end chatChatbotEndedChatByAction—Conversation ended by automated actionChatbotEstablished—Accepted by ChatbotChatbotNotEstablished—Chatbot Request FailedChoiceRoute—Routed (Choice)ClearCriticalWaitChat—Critical Wait Alert ClearedConferenceRequest—Chat Conference RequestedConferenceRequestCanceled—Chat Conference CanceledConferenceRequestDeclined—Chat Conference DeclinedConnectionTimeout—Visitor connection timed out. Available in API version 38.0 and later.ConnectionWarning—Warning that visitor hasn't been connected for some time and that the connection times out soon. Available in API version 38.0 and later.DeclineManual—Decline (Manual)DeclineTimeout—Decline (Timeout)EndAgent—Ended by AgentEndVisitor—Ended by VisitorEnqueue—QueuedFileCanceledAgent—File Transfer Canceled by AgentFileCanceledChasitor—File Transfer Canceled by VisitorFileTransferFailure—File Transfer FailureFileTransferRequested—File Transfer Requested by AgentFileTransferSuccess—File Transfer SuccessFileTransferToChasitor—File Transfer Initiated by AgentFlagLoweredAgent—Flag Lowered by AgentFlagLoweredSupervisor—Flag Lowered by SupervisorFlagRaised—Flag RaisedLeaveAgent—Agent LeftLeaveVisitor—Visitor LeftOperatorJoinedConference—Agent Joined ConferenceOperatorLeftConference—Agent Left ConferenceOtherPushAssignment—Routed (Push)SensitiveDataAgent—Sensitive data blocked (Agent)SensitiveDataSupervisor—Sensitive data blocked (Supervisor)SensitiveDataVisitor—Sensitive data blocked (Visitor)Transfer—Transfer AcceptedTransferCancelled—Transfer Request CanceledTransferDeclined—Transfer Request DeclinedTransferRequest—Transfer RequestedTransferToBotFailed—Transfer to bot failedTransferToButtonFailed—Transfer to button failedTransferToQueueFailed—Transfer to queue failedTransferredToBot—Transferred to botTransferredToButton—Transferred to buttonTransferredToQueue—Transferred to queueTransferredToSbrSkill—Transferred to skillTransferredToSbrSkillFailed—Transfer to skill failedUnassigned |

## Usage

Use this object to query and manage live chat transcript events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

LiveChatTranscriptEvent records are inserted after the chat is closed and the LiveTranscript record updated). However, the trigger on the LiveChatTranscriptEvent sObject fires separately on each LiveChatTranscriptEvent record within the same transaction.

All the LiveChatTranscriptEvent records are inserted in a single transaction but one by one. For example, the trigger is executed for each individual record.

```

```

To avoid hitting any governors and limits, design your functionality considering this behavior. You can execute the logic by filtering the records based on the Type field of LiveChatTranscriptEvent.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LiveChatTranscriptChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Code Examples

```
trigger LCTE on LiveChatTranscriptEvent (before insert) {
     // Trigger.New will have only 1 record at a time and trigger will execute for individual record
     for(LiveChatTranscriptEvent l : Trigger.New)
     system.debug(l.Type + '>>' +l.Detail);
     }
```

## Related Topics

- LiveChatTranscriptChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
