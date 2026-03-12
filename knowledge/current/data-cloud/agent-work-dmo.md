---
title: "Agent Work DMO"
domain: data-cloud
topic: agent-work-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.670Z
estimatedTokens: 775
keywords: [Agent, Work, DMO, Data, Cloud, model, assignment, routed, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Agent Work DMO

> The Agent Work DMO is a Data Cloud data model object (DMO) for a work
      assignment that has been routed to an agent.

# Agent Work DMO

The Agent Work DMO is a Data Cloud data model object (DMO) for a work assignment that has been routed to an agent.

## Object API Name

ssot\_\_AgentWork\_\_dlm

## Category

Engagement

## Primary Subject Area

Agent Work

## Primary Key

Case ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Agent Work | Related To | Many To One: N:1 | Case | Case ID |
| Agent Work | User Group | Many To One: N:1 | User Group | User Group ID |
| Agent Work | User | Many To One: N:1 | User | User ID |
| Agent Work Skill | Agent Work | Many To One: N:1 | Agent Work | Agent Work ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Accept Date | ssot__AcceptDate__c | The date the agent work was accepted. | dateTime |
| Active Time | ssot__ActiveTimeSeconds__c | The time an agent is active on work in seconds. | number |
| After Conversation Work Actual Time | ssot__AftConvWorkTimeActual__c | The actual time an agent works after a conversation. | number |
| After Conversation Work Extension Count | ssot__AftConvWorkExtensionCount__c | The count an agent works extended time. | number |
| Agent Work Id | ssot__Id__c | A unique ID used as the primary key for the agent work DMO. | text |
| Agent Work Routing Type | ssot__AgentWorkRoutingType__c | The routing type for agent work. | text |
| Agent Work Routing Type | ssot__AgentWorkStatus__c | The status of the agent work. | text |
| Bot | ssot__BotId___c | A reference ID to the agent work bot. | text |
| Close Date | ssot__CloseDateTime__c | The date the agent work was closed. | dateTime |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description of the agent work. | text |
| Handle Time | ssot__HandleTimeSeconds__c | The time to handle agent work in seconds. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the agent service presence. | text |
| Name | ssot__Name__c | The name of the agent work. | text |
| Preferred User | ssot__PreferredUserId__c | A reference ID to the preferred user for the agent work. | text |
| Related To | ssot__RelatedToId__c | A reference ID to the related item for the agent work. | text |
| Request DateTime | ssot__RequestDateTime__c | The date the agent work was requested. | dateTime |
| Speed To Answer | ssot__SpeedToAnswerSeconds__c | The time to answer the agent work in seconds. | number |
| User | ssot__UserId__c | A reference Id to the agent work user. | text |
| User Group | ssot__UserGroupId__c | A reference Id to the agent work user group. | text |
