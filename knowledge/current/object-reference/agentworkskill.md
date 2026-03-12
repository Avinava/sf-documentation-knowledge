---
title: "AgentWorkSkill"
domain: object-reference
topic: agentworkskill
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:04.115Z
estimatedTokens: 829
keywords: [AgentWorkSkill, skill, route, work, assignment, agent, reporting, result, routing, decision, API, version, 42.0, later, Calls]
---

# AgentWorkSkill

> Represents a skill used to route a work assignment to an agent.
			AgentWorkSkill is used for reporting and represents the result of a routing
			decision.
		This object is available in API version 42.0 and
		later.

# AgentWorkSkill

Represents a skill used to route a work assignment to an agent. AgentWorkSkill is used for reporting and represents the result of a routing decision. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AgentWorkId | TypereferencePropertiesFilter, Group, SortDescriptionThe AgentWork object associated with this skill. |
| IsAdditionalSkill | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionAfter a designated timeout period, a skill marked as additional is dropped from Omni-Channel routing. The case is then routed to the best-matched agent, even if the agent doesn’t have all the skills. The default value is false. Available in API version 48.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn automatically generated ID number that identifies the record. |
| SkillId | TypereferencePropertiesFilter, Group, SortDescriptionThe skill that is required or additional. |
| SkillLevel | TypedoublePropertiesFilter, SortDescriptionThe level of the required or additional skill. Skill levels can range from 1 to 10. Depending on your business needs, you might want the skill level to reflect years of experience, certification levels, or license classes. |
| SkillPriority | TypeintPropertiesAggregatable, Filter, Group, Nillable, SortDescriptionFor additional skills, specifies the order in which skills are dropped if after the specified timeout no agent with that skill is available. Higher priority-value skills are dropped first. Lower priority-value skills, for example 0, are dropped last. Skills with the same priority value are dropped as a group. You can set skill priority using attribute setup for skills-based routing or Apex code. |
| WasDropped | TypebooleanPropertiesFilter, Group, SortDescriptionFor skills marked as additional, indicates if the skill was dropped from Omni-Channel routing because an agent with this skill was not available. The default value is false. Available in API version 48.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AgentWorkSkillChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- AgentWorkSkillChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
