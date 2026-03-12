---
title: "GenAiPlannerDefinition"
domain: tooling-api
topic: genaiplannerdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.953Z
estimatedTokens: 608
keywords: [GenAiPlannerDefinition, agent, planner, service, uses, large, language, model, LLM, reasoning, strategy, decompose, task, smaller, subtasks]
---

# GenAiPlannerDefinition

> Represents an agent planner service that uses a large language model
         (LLM) and a reasoning strategy to decompose a given task into smaller subtasks, identify
         the most suitable actions for each subtask, and invoke them. This object is available
      in API version 60.0 and later.

# GenAiPlannerDefinition

Represents an agent planner service that uses a large language model (LLM) and a reasoning strategy to decompose a given task into smaller subtasks, identify the most suitable actions for each subtask, and invoke them. This object is available in API version 60.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, Agents must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| Capabilities | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA set of tags associated with the agent planner service definition. |
| Description | TypetextareaPropertiesFilter, Group, SortDescriptionA description explaining the general purpose and domain of the agent planner service definition. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for this object. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated object in Metadata API. The full name can include a namespace prefix. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the GenAiPlannerDefinition. The value for this field is the language value of the org. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe master label of the agent planner service definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the GenAiPlannerDefinition. |
| PlannerType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA particular approach to problem solving that is given as prompt instructions to a large language model (LLM).Possible values are:AiCopilot__ReAct—Uses a reactive planning strategy to solve problems with the LLM. This strategy consists of prompting the LLM to generate the next step in response to an event and the current context. It differs from a sequential planner in that it doesn’t plan more than one step ahead of time.AiCopilot__SequentialPlannerIntentClassifier—Uses an intent classifier prompt and a sequential planner prompt. With each text input, the planner asks the LLM to generate a step-by-step plan to finish the goal. It plans first, then executes. |
