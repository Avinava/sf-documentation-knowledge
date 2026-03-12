---
title: "GenAiPlannerFunctionDef"
domain: object-reference
topic: genaiplannerfunctiondef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.924Z
estimatedTokens: 190
keywords: [GenAiPlannerFunctionDef, relationship, agent, planner, service, actions, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# GenAiPlannerFunctionDef

> Represents a relationship between the agent planner service and agent
         actions. This object is available in API version 60.0 and later.

# GenAiPlannerFunctionDef

Represents a relationship between the agent planner service and agent actions. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, Agents must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| PlannerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis field is a relationship field.Relationship NamePlannerRelationship TypeLookupRefers ToGenAiPlannerDefinition |
| Plugin | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA set of actions that contextualize the agent planner service. |
