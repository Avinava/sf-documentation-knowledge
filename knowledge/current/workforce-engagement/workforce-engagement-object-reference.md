---
title: "Workforce Engagement Object Reference"
domain: workforce-engagement
topic: workforce-engagement-object-reference
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.693Z
estimatedTokens: 1746
keywords: [Workforce, Engagement, enable, gain, access, suite, standard, Salesforce, objects, Workload, Histories, Intelligent, Forecasts, Capacity, Plans]
---

# Workforce Engagement Object Reference

> When you enable Workforce Engagement, you gain access to a suite of standard Salesforce
    objects.

# Workforce Engagement Object Reference

When you enable Workforce Engagement, you gain access to a suite of standard Salesforce objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=workforce_engagement)

#### Note

Workforce Engagement is scheduled for retirement. See [Workforce Engagement Retirement](https://help.salesforce.com/s/articleView?id=000395130&type=1&language=en_US).

The following tables link to reference information for standard objects in Workforce Engagement. Some objects are specific to Workforce Engagement, while others are used in a variety of Salesforce features, such as Field Service and Omni-Channel.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=workforce_engagement)

#### Note

These tables don’t include sharing, feed, or history objects.

## Workload Histories and Intelligent Forecasts

If you're using an Omni-Channel queue-based workflow, here's the objects that Workforce Engagement uses in workload histories and forecasts.

| Object Name | Definition | Tab in Salesforce? |
| --- | --- | --- |
| AgentWork | A work assignment that’s been routed to an agent who's a queue member. |  |
| Group | A set of user records. |  |
| QueueSobject | A mapping between a queue Group and the sObject types associated with the queue, including custom objects. |  |
| ServiceChannel | A channel used to route work items to agents associated with the queue. |  |
| ServiceResource | An agent user who's added to the queue as a queue member. |  |
| Workload | A time series of work volumes and average handle times. A Workload record contains the results of workload history aggregation or forecasting. |  |
| WorkloadUnit | A number of work items and average handle times within a time interval. |  |

If you're not using an Omni-Channel queue-based workflow, you specify one or more of the standard channel objects or a custom object that has your channel data.

| Object Name | Definition | Tab in Salesforce? |
| --- | --- | --- |
| Case | A customer issue or problem. |  |
| ConversationEntry | A message or an event in a chat history. |  |
| LiveChatTranscript | An interaction in a chat channel. | (Chat Transcripts) |
| MessagingSession | A session in a messaging channel. |  |
| ServiceResource | An agent user who can be assigned to shifts. |  |
| VoiceCall | A call in the voice channel, either for Service Cloud Voice or Sales Dialer. |  |
| Workload | A time series of work volumes and average handle times. A Workload record contains the results of workload history aggregation or forecasting. |  |
| WorkloadUnit | A number of work items and average handle times within a time interval. |  |

## Capacity Plans

| Object Name | Definition | Tab in Salesforce? |
| --- | --- | --- |
| JobProfile | A category that describes the expertise that’s needed for the work. |  |
| JobProfileQueueGroup | A queue and job profile mapping that includes characteristics about the work to be done. This object is used only in a queue-based workflow. |  |
| OperatingHours | Hours that you can define for your business and your workers. |  |
| ServiceChannel | The channel used to route work items to agents. |  |
| ServiceResource | An agent user and queue member who can receive work assignments. |  |
| ServiceTerritory | A location in which work is performed. |  |
| Shift | A record used to schedule service resources. |  |
| ShiftSegment | A scheduled activity within a shift. |  |
| ShiftSegmentType | A type of scheduled activity within a shift. |  |
| ShiftTemplate | A template used to define commonly used shifts. |  |
| TimeSlot | A period of time on a specified day of the week when work can be performed. |  |
| WorkDemographic | Descriptions of channel-region-skill-custom slices in a forecast or capacity plan. |  |
| WorkforceCapacity | A time series for actual or forecasted workforce capacity. |  |
| WorkforceCapacityUnit | The number of resources allocated or predicted for work items within a time interval. |  |

## Shift Creation and Scheduling

| Object Name | Definition | Tab in Salesforce? |
| --- | --- | --- |
| JobProfile | A category that describes the expertise that’s needed for the work. |  |
| OperatingHours | Hours that you can define for your business and your workers. |  |
| ServiceResource | An agent user who can be assigned to shifts. |  |
| ServiceResourcePreference | An agent's scheduling preference that can be considered by the scheduling logic. |  |
| ServiceTerritory | A location in which work is performed. |  |
| ServiceTerritoryMember | An agent who works in the associated territory. |  |
| SchedulingAdherenceDetail | A breakdown of shift adherence data by agent status. |  |
| SchedulingAdherenceSummary | Shift adherence data for a service resource in a service territory and job profile on a specific date. | (Historical Adherence) |
| SchedulingConstraint | A limit on when or how work is performed. |  |
| SchedulingObjective | A business goal that acts as a guideline for scheduling. |  |
| SchedulingRule | A hard limit that restricts which agents are candidates for shifts. |  |
| ServicePresenceStatus | A presence status that can be assigned to a service channel in Omni-Channel. |  |
| Shift | A record used to schedule service resources. |  |
| ShiftSegment | An activity that's scheduled during a shift. |  |
| ShiftSegment Type | A type of activity that's scheduled during a shift. |  |
| ShiftTemplate | A template used to define commonly used shifts. |  |
| Skill | A certification or area of expertise. |  |
| SkillRequirement | A skill that is required to complete a particular task. |  |
| TimeSlot | A period of time on a specified day of the week when work can be performed. |  |
| UserServicePresence | A user’s real-time presence status in Omni-Channel. |  |

## Agent Empowerment and Engagement

| Object Name | Definition | Tab in Salesforce? |
| --- | --- | --- |
| SkillLevelDefinition | A skill that can be acquired by taking a learning module. |  |
| SkillLevelProgress | Training progress for a given user. |  |
| PersonTraining | A learning module assignment. |  |
| ResourceAbsence | A time period in which a service resource is unavailable to work. |  |
| TimeSheet | A schedule of a service resource’s time. |  |

#### See Also

-   [*Developer Guide:* Introducing SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "Developer Guide: Introducing SOAP API - HTML (New Window)")

-   [*Salesforce Help:* Plan Data in an Omni-Channel Queue-Based Workflow](https://help.salesforce.com/s/articleView?id=service.workforce_engagement_plan_data_nonqueues.htm&type=5&language=en_US "Salesforce Help: Plan Data in an Omni-Channel Queue-Based
    Workflow - HTML (New Window)")

-   [*Salesforce Help:* Plan Data in a Non-Omni Workflow](https://help.salesforce.com/s/articleView?id=service.workforce_engagement_plan_data_queues.htm&type=5&language=en_US)
