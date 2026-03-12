---
title: "Agent Work Skill DMO"
domain: data-cloud
topic: agent-work-skill-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.816Z
estimatedTokens: 518
keywords: [Agent, Work, Skill, DMO, Data, Cloud, data, model, skill, used, route, work, assignment, agent., API, Name, Category, Primary, Subject, Area]
---

# Agent Work Skill DMO

> The Agent Work Skill DMO is a Data Cloud data model object (DMO) for a
      for a skill used to route a work assignment to an agent.

# Agent Work Skill DMO

The Agent Work Skill DMO is a Data Cloud data model object (DMO) for a for a skill used to route a work assignment to an agent.

## Object API Name

ssot\_\_AgentWorkSkill\_\_dlm

## Category

Other

## Primary Subject Area

Agent Work Skill

## Primary Key

Case ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Agent Work Skill | Agent Work | Many To One: N:1 | Agent Work | Agent Work ID |
| Agent Work Skill | Skill | Many To One: N:1 | Skill | Skill ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Additional Skill | ssot__AdditionalSkill__c | An indicator if the agent work skill is an additional skill. | text |
| Agent Work | ssot__AgentWorkId__c | A reference ID to the agent work for the agent work skill. | text |
| Agent Work Skill Id | ssot__Id__c | A unique ID used as the primary key for the agent work DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description of the agent work skill. | text |
| Dropped | ssot__IsDropped__c | An indicator if the agent work skill has been dropped. | text |
| Internal Organization | ssot__InternalOrganizationId___c | A reference ID to the business unit or other internal organization that owns the agent service presence. | text |
| Name | ssot__Name__c | The name of the agent work skill. | text |
| Skill | ssot__SkillId__c | A reference ID to the skill for the agent work skill. | text |
| Skill Level | ssot__SkillLevel__c | The level of the skill. | number |
| Skill Priority | ssot__SkillPriority__c | The priority of the skill. | number |
