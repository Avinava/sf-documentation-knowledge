---
title: "AgentWork"
domain: object-reference
topic: agentwork
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:04.095Z
estimatedTokens: 4364
keywords: [AgentWork, work, assignment, that’s, routed, agent, transferred, another, new, record, created, API, version, 32.0, later]
---

# AgentWork

> Represents a work assignment that’s been routed to an agent. If the
			work is transferred to another agent, a new AgentWork record is created. This object is
			available in API version 32.0 and later.

# AgentWork

Represents a work assignment that’s been routed to an agent. If the work is transferred to another agent, a new AgentWork record is created. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AcceptDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the work item was accepted. |
| ActiveTime | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time an agent is actively working on a work item in their console. Active time is tracked only for tasks routed using the tab-based capacity model. It's tracked only when the work tab is open and in focus in the console. If the agent switches console tabs, the time spent on the other tabs isn't counted. Active time continues to count if you switch to a new browser tab or window. Active time stops when the agent closes the work item or the after conversation work time ends, whichever happens first. |
| AcwExtensionCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times that an agent extended the After Conversation Work (ACW) timer. This field is available in API version 55.0 and later. |
| AcwExtensionDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe length of time (in seconds) that the After Conversation Work (ACW) timer was extended each time that the agent extended the timer. This field is available in API version 55.0 and later.To find the total extension duration, multiply this field by AcwExtensionCount or use AfterConversationActualTime. |
| AfterConversationActualTime | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of seconds an agent spent on After Conversation Work (ACW) after customer contact ended. This field is available in API version 52.0 and later. |
| AgentCapacityWhenDeclined | TypedoublePropertiesFilter, Nillable, SortDescriptionThe agent’s capacity when declining work, either explicitly or through push timeout. |
| AssignedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the work item was assigned to an agent |
| BotId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the Enhanced Einstein Bot or AI agent that performed the work. This is a relationship field. This field is available in API version 52.0 and later.Relationship NameBotRelationship TypeLookupRefers ToBotDefinition |
| BotType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the type of bot. Valid values are:Bot. Refers to an Einstein bot.ExternalCopilot. Refers to an AI agent with whom your customers can interact.The default value is Bot. This field is available in API version 63.0 and later. |
| CancelDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the work item was canceled. |
| CapacityModel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the capacity model used to determine agent capacity. Valid values are StatusBased and TabBased. This field is available in API version 50.0 and later.A work item consumes agent capacity only if it was first assigned to the agent by Omni-Channel using queues or skills. |
| CapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, SortDescriptionThe percentage of an agent’s capacity that’s consumed when this work item is in progress. Valid values are from 0 to 100.The agent can receive a new work item only if they have enough available capacity for the item. Voice calls must have a capacity percentage of 100, so an agent on a call doesn’t receive new work items until the call ends. |
| CapacityWeight | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe amount of an agent’s capacity that’s consumed when this work item is in progress.For example, if cases are assigned a capacity weight of 2, an agent with a capacity of 6 can accept up to 3 cases before the agent is at capacity and can’t receive new work items.Voice calls must use the entire capacity weight. |
| CloseDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the work item was closed. |
| DeclineDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the agent declined this record. |
| DeclineReason | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe provided reason for why an agent declined the work request. |
| ExternalBotId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the third-party bot that handles the work item. This is a relationship field. This field is available in API version 64.0 and later.Relationship NameExternalBotRelationship TypeLookupRefers ToExternalConversationBotDef |
| HandleTime | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time an agent had the work item open, calculated by CloseDateTime – AcceptedDateTime. Handle time stops when the agent closes the work item or the after conversation work time ends, whichever happens first. |
| IsConference | TypebooleanPropertiesFilter, Group, SortDescriptionIndicates whether the agent was conferenced on the work item by another agent (true) or not (false ). The default value is false. Available in API version 44.0 and later. This field is accessible in Reports, but not via the API. |
| IsInterruptible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a work item consumes interruptible or primary capacity. The default value is false. Available in API version 57.0 and later when the Interruptible Capacity feature is enabled. |
| IsOwnerChangeInitiated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a work item owner change triggered the direct assignment of the work item to the agent. The default value is false. Status-Based Capacity Model has to be turned on to use this field. This field is available in API version 50.0 and later. |
| IsPreferredUserRequired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a work item stays with the preferred user even when the user isn’t available. The default value is false. This field is available in API version 50.0 and later. |
| IsStatusChangeInitiated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a work item status change triggered the direct assignment of the work item to the agent. The default value is false. Status-Based Capacity Model has to be turned on to use this field. This field is available in API version 50.0 and later. |
| IsTransfer | TypebooleanPropertiesFilter,Group, SortDescriptionIndicates whether the agent received the work item through transfer from another agent (true) or not (false). The default value is false. Available in API version 38.0 and later. This field is accesible in Reports, but not via the API. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn automatically generated ID number that identifies the record. |
| OriginalGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the queue that the work assignment was originally routed to. This field is a relationship field.Relationship NameOriginalGroupRelationship TypeLookupRefers ToGroup |
| OriginalQueueId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the queue that the work assignment was originally routed to. Due to API changes, OriginalQueueId is no longer recommended. Use OriginalGroupId instead. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the AgentWork. This field is a polymorphic relationship field. This field is available in API version 50.0 and later.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PausedCapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of an agent’s capacity that’s consumed when this work item is paused. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. This field is available in API version 62.0 and later. |
| PausedCapacityWeight | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe amount of an agent’s capacity that’s consumed when this work item is paused. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. This field is available in API version 62.0 and later. |
| PendingServiceRoutingId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the PendingServiceRouting from which the AgentWork was created. This field is a relationship field. This field is available in API version 50.0 and later.Relationship NamePendingServiceRoutingRelationship TypeLookupRefers ToPendingServiceRouting |
| PreferredUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the preferred user to handle the work. This field is a relationship field. This field is available in API v46.0 and later.Relationship NamePreferredUserRelationship TypeLookupRefers ToUser |
| PushTimeout | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe time limit set for an agent to respond to an item before it’s pushed to another agent. The time limit is measured in seconds. This field is available in API version 36.0 and later.Effective API version 57.0, for inbound Voice calls, this field represents the time limit set for an agent to respond to a call before it’s declined. The value must be between 0 and 20. The value is capped at 20, so any number greater than that is treated as 20 seconds. This applies to the following telephony models:Service Cloud Voice with Amazon ConnectService Cloud Voice with Partner Telephony from Amazon Connect |
| PushTimeoutDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the push timeout event occurred. This field is available in API version 36.0 and later. |
| RequestDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the work was requested. |
| RoutingModel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDetermines how incoming work items are routed to agents assigned to a service channel. Possible values are:ExternalRoutingLeastActiveMostAvailable |
| RoutingPriority | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order in which work items from the queue that are associated with the routing configuration are routed to agents. |
| RoutingType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of Omni-Channel routing. Possible values are:QueueBasedSkillsBased |
| SecondaryRoutingPriority | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIndicates the secondary routing priority. |
| ServiceChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the service channel that’s associated with the work assignment. This field is a relationship field.Relationship NameServiceChannelRelationship TypeLookupRefers ToServiceChannel |
| ShouldSkipCapacityCheck | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether to skip checking an agent’s available capacity (true) or not (false) when an externally routed work item is created. This field is used when agents can simultaneously handle work from both Omni-Channel queues and queues using external routing.When true, the receiving agent can exceed their set capacity to accept the item, but they don’t receive more Omni-Channel routed work. When false, the receiving agent can’t exceed their set capacity and must have enough open capacity to accept the item.The default value is false. |
| SpeedToAnswer | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe amount of time between when the work was requested and when an agent accepted it. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe working status of the work item. Valid values are:Assigned – The item is assigned to the agent but hasn’t been opened.Canceled – The item no longer needs to be routed. For example: a chat visitor cancels their Omni-Channel routed chat request before it reaches an agent.Closed – The item is closed.Declined – The item was assigned to the agent but the agent explicitly declined it.DeclinedOnPushTimeout – The item was declined because push time-out is enabled and the item request timed out with the agent.Opened – The agent opened the item.Transferred–The item was transferred from an agent to another agent, queue, or skill.Unavailable – The item was assigned to the agent but the agent became unavailable (went offline or lost connection). |
| TargetAcceptDateTime | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionThe date and time by when a rep must accept a work item. Influences backlog ordering by prioritizing work items with earlier target acceptance deadlines. The field can be dynamically set using Flow for each work item during the routing process. This allows for flexible prioritization based on case urgency, customer tier, or other business rules. Available in API version 65.0 and later. |
| TransferRequesterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user ID of the rep who reassigned the work using the Reassign action. This field is populated in reassigned AgentWork records only, not the original AgentWork record. This is a relationship field. This field is available in API version 63.0 and later.Relationship NameTransferRequesterRelationship TypeLookupRefers ToUser |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user that the work item was assigned to. This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| WorkItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the object that’s routed to the agent through Omni-Channel.This field is a polymorphic relationship field.Relationship NameWorkItemRelationship TypeLookupRefers ToCustom objects and these standard objects: Account, Activity, Case, Claim, ClaimCoverage, ClaimRecovery, Contact, ContactRequest, CustomEntityData, Incident, Lead, LiveChatTranscript, MessagingSession, Opportunity, Orchestration Work Items, Order, PaymentRequest, PersonTraining,Referral, SocialPost, SwarmMember, and VoiceCall. WorkOrder is available in version 58.0 and later. |

## Usage

AgentWork records can only be deleted if they have the status Closed, Declined, or Unavailable. They can’t be deleted if their status is Assigned or Opened because they’re active in Omni-Channel.

When AgentWork records are created, they have the status Assigned. After a record is created, it’s automatically pushed to the assigned agent.

While the metadata for AgentWork indicates support for upsert() and update(), these calls aren’t used with AgentWork because none of its fields can be updated.

Apex triggers are supported with AgentWork.

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[AgentWorkChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 63.0)

Change events are available for the object.

[AgentWorkOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AgentWorkShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [*Salesforce Help*: Understand the Details of the Routing Lifecycle](https://help.salesforce.com/s/articleView?id=service.omnichannel_psr_lifecycle.htm&type=5&language=en_US "
    Salesforce Help: Understand the Details of the Routing Lifecycle
    - HTML (New Window)")

## Related Topics

- PendingServiceRouting (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pendingservicerouting.htm)
- AgentWorkChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AgentWorkOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AgentWorkShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
