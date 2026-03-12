---
title: "GenAiFunctionDefinition"
domain: object-reference
topic: genaifunctiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.911Z
estimatedTokens: 761
keywords: [GenAiFunctionDefinition, agent, action, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# GenAiFunctionDefinition

> Represents an agent action. This object is available in API version 60.0
      and later.

# GenAiFunctionDefinition

Represents an agent action. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, Agents must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, UpdateDescriptionA description explaining the general purpose and domain of the action. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for this object. |
| InvocationTarget | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionTarget invocation used by invocation operations. |
| InvocationTargetType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionInvocable action types used by invocation operations.Possible values are:apexflowgeneratePromptResponse |
| IsConfirmationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether confirmation is required for this action.The default value is false. |
| IsLocal | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field is a calculated field and is set to true if this action is an edited version of a standard action.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the GenAiFunctionDefinition. The value for this field is the language value of the org. |
| LocalDeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name for this action within a topic. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label for the generative AI action. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the GenAiFunctionDefinition. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the object that owns the action.This field is a relationship field.Relationship NameParentRefers ToGenAiPlannerFunctionDef |
| PlannerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe agent planner service for this action.This field is a relationship field.Relationship NamePlannerRefers ToGenAiPlannerDefinition |
| PluginId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe agent topic for this agent action.This field is a relationship field.Relationship NamePluginRefers ToGenAiPluginDefinition |
| Source | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe optional source standard or custom action from which this action's configuration, including description, input, and output, is copied. If there's no value, the action is used only within the parent topic. |
