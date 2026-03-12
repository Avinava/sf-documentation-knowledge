---
title: "GenAiPluginDefinition"
domain: object-reference
topic: genaiplugindefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.933Z
estimatedTokens: 928
keywords: [GenAiPluginDefinition, agent, topic, category, actions, particular, job, agents, API, version, 62.0, later, Calls, Special, Access]
---

# GenAiPluginDefinition

> Represents an agent topic, which is a category of actions related to a
         particular job to be done by AI agents. This object is available in API version 62.0
      and later.

# GenAiPluginDefinition

Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, Agents must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| CanEscalate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this topic is eligible for escalation to a rep.The default value is false. |
| Description | TypetextareaPropertiesCreate, UpdateDescriptionThe description of the topic. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the API name of the topic. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| IsLocal | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field is a calculated field and is set to true if this topic is an edited version of a standard topic.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the topic. |
| LocalDeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name for this topic within an agent. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label for the topic. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of these values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the object that owns the topic.This field is a polymorphic relationship field.Relationship NameParentRefers ToGenAiPlannerDefinition, GenAiPlannerFunctionDef |
| PlannerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe agent planner service for this topic.This field is a relationship field.Relationship NamePlannerRefers ToGenAiPlannerDefinition |
| PluginType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionPossible values are:APICustomTopicTopic |
| Scope | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA specific job description for a topic. |
| Source | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe optional source standard or custom topic from which this topic's configuration, including description, instructions, and utterances, is copied. If there's no value, the topic is used only within this agent version. |
