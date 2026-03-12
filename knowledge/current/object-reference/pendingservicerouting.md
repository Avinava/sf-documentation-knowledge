---
title: "PendingServiceRouting"
domain: object-reference
topic: pendingservicerouting
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.730Z
estimatedTokens: 3024
keywords: [PendingServiceRouting, routing, work, item, that’s, waiting, routed, assigned, API, version, 40.0, later, Calls, Special, Access]
---

# PendingServiceRouting

> Represents the routing details of a work item that’s waiting to be
			routed or assigned. This object is available in API version 40.0 and
		later.

# PendingServiceRouting

Represents the routing details of a work item that’s waiting to be routed or assigned. This object is available in API version 40.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BotId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the Enhanced Einstein Bot or AI agent that performed the work. This is a relationship field. This field is available in API version 52.0 and later.This field is a relationship field.Relationship NameBotRelationship TypeLookupRefers ToBotDefinition |
| BotType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the type of bot. Valid values are:Bot. Refers to an Einstein bot.ExternalCopilot. Refers to an AI agent with whom your customers can interact.The default value is Bot. This field is available in API version 63.0 and later. |
| CapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the amount of work that this work item represents as a percentage. Valid values are from 0 to 100.Voice calls must have a capacity percentage of 100. If an agent receives a voice call, the agent won’t receive new work items until the call ends, because at that point the agent’s capacity will have reached 100%. |
| CapacityWeight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the amount of work that this work item represents as a whole number. Voice calls must use the entire capacity weight. |
| CustomRequestedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRetains the datetime of this work item’s initial request, so work items are rerouted using the datetime of the initial work request. When left blank, work items are rerouted using the datetime when they’re rerouted. |
| DropAdditionalSkillsTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTime to wait before a skill marked as additional is dropped from Omni-Channel routing. The case is then routed to the best-matched agent even if they don’t have all the skills.If CustomRequestedDateTime is set in the PendingServiceRouting object, DropAdditionalSkillsTimeout uses CustomRequestedDateTime as the start time. If CustomRequestedDateTime + DropAdditionalSkillsTimeout has already passed, Omni-Channel immediately drops the additional skills after the pending service request is created. |
| ExternalBotId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the third-party bot that handles the work item. This is a relationship field. This field is available in API version 64.0 and later.Relationship NameExternalBotRelationship TypeLookupRefers ToExternalConversationBotDef |
| GroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Omni-Channel queue. |
| IsInterruptible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a work item consumes interruptible or primary capacity. The default value is false. Available in version 57.0 and later when the Interruptible Capacity feature is enabled. |
| IsOwnerChangeInitiated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a work item owner change triggered the direct assignment of this work item to the agent. The default value is false. |
| IsPreferredUserRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether this work item stays with the preferred user even when the user isn’t available. The default value is false. This field is available in API version 50.0 and later.When a specific agent is required, don’t set PushTimeout. These options aren’t supported in this case. |
| IsPushAttempted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a push has been attempted. true if this work item was pushed to an agent at least one time and false otherwise. |
| IsPushed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this work item is pushed to an agent. |
| IsReadyForRouting | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this work item is ready to be routed to an agent. If true, you can’t edit this PendingServiceRouting record. |
| IsStatusChangeInitiated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a work item status change triggered the direct assignment of this work item to the agent. The default value is false. This field is available in API version 50.0 and later. |
| IsTransfer | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this work item routing is a transfer request. |
| LastDeclinedAgentSession | TypestringPropertiesFilter, Group, Nillable, SortDescriptionChat session ID of the agent who last declined this work item. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the PendingServiceRouting record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this PendingServiceRouting record. |
| PausedCapacityPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of capacity that’s consumed when this work item is paused. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. This field is available in API version 62.0 and later. |
| PausedCapacityWeight | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe amount of capacity that’s consumed when this work item is paused. The paused capacity feature is available with status-based capacity and Enhanced Omni-Channel only. This field is available in API version 62.0 and later. |
| PreferredUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the preferred user to handle the work item. |
| PushTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time limit set for an agent to respond to an item before it’s rerouted and the agent’s status is changed accordingly. The time limit is measured in seconds. This field is available in API version 36.0 and later.Effective API version 57.0, for inbound Voice calls, this field represents the time limit set for an agent to respond to a call before it’s declined. The value must be from 0 through 20. The value is capped at 20, so any number greater than that is treated as 20 seconds. Latency on the part of the telephony provider can result in agents having less than 20 seconds to answer a call before it’s rerouted. When an agent attempts to answer a call within 20 seconds and finds that the call was rerouted, the agent’s status remains unchanged. This scenario applies to these telephony models.Service Cloud Voice with Amazon ConnectService Cloud Voice with Partner Telephony from Amazon ConnectWhen IsPreferredUserRequired is set to true, don’t set this option. When a specific agent is required, this option isn’t supported. |
| QueueId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Omni-Channel queue. Due to API changes, QueueId is no longer recommended. Use GroupId instead. |
| RoutingModel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of routing model.Possible values are:ExternalRoutingLeastActiveMostAvailable |
| RoutingPriority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder in which work items are routed to agents. This field is considered with skills-based routing only. Queue-based routing sets a work item's priority from the routing configuration. |
| RoutingType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the work item is routed by queue or by skills-based routing.Possible values are:QueueBasedSkillsBased |
| SecondaryRoutingPriority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the secondary routing priority. |
| Serial | TypeintPropertiesFilter, Group, Nillable, SortDescriptionSerial number of the PendingServiceRouting record. The serial number is automatically incremented each time the PendingServiceRouting record is modified. |
| ServiceChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the service channel. |
| TransferRequesterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user ID of the rep who reassigned the work using the Reassign action. This field is populated in reassigned AgentWork records only, not the original AgentWork record. This is a relationship field. This field is available in API version 63.0 and later.Relationship NameTransferRequesterRelationship TypeLookupRefers ToUser |
| WorkItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the work item.Refers ToCustom objects and these standard objects: Account, Activity, Case, Claim, ClaimCoverage, ClaimRecovery, Contact, ContactRequest, CustomEntityData, Incident, Lead, LiveChatTranscript, MessagingSession, Opportunity, Orchestration Work Items, Order, Order, PaymentRequest, PersonTraining, Referral, SocialPost, SwarmMember, and VoiceCall. WorkOrder is available in version 58.0 and later. |

## Usage

When you use the PendingServiceRouting object for queue-based routing, the object doesn’t invoke triggers before or after insert, or any action (trigger, workflow rule, validation) that could interfere with the creation of the record.

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

[PendingServiceRoutingChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[PendingServiceRoutingOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PendingServiceRoutingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Limits

You can view the number of Pending Service Routing records that are currently in use in your org, as well as the current hourly use rate. From Setup, enter Omni-Channel in the Quick Find box and select **Limits**. The Limits page also displays the current Pending Service Routing record usage percentage and the Pending Service Routing record limits for your org.

## Related Topics

- PendingServiceRoutingChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- PendingServiceRoutingOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PendingServiceRoutingShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
