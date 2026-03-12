---
title: "AiGenActionItem"
domain: object-reference
topic: aigenactionitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.137Z
estimatedTokens: 959
keywords: [AiGenActionItem, business, actions, suggested, generative, AI-generated, action, items, sent, either, agents, automatic, execution, human, users]
---

# AiGenActionItem

> Represents business actions suggested by generative AI. AI-generated action
         items are sent to either agents for automatic execution or human users for review,
         depending on org preference and if there are any errors in the process. This object is
      available in API version 64.0 and later.

# AiGenActionItem

Represents business actions suggested by generative AI. AI-generated action items are sent to either agents for automatic execution or human users for review, depending on org preference and if there are any errors in the process. This object is available in API version 64.0 and later.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update()

## Special Access Rules

Agentforce Pipeline Management must be enabled. Only the agent user can create AiGenActionItem records.

## Fields

| Field | Details |
| --- | --- |
| ActionItemOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID associated with the owner of the AI-generated action item. The owner can be an agent or human user, and can change during the review and execution process. By default, the owner is an agent or queue.This field is a polymorphic relationship field.Relationship NameActionItemOwnerRefers ToGroup, User |
| ActionResult | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe result generated when the agent action is executed. |
| AgentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe specific agent that processes the AI-generated action item. |
| BotDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe bot record with a template name that matches the value in the Sales Management agent template.This field is a relationship field.Relationship NameBotDefinitionRefers ToBotDefinition |
| BotVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe bot version from the bot record with an ID that matches the ID of the Sales Management agent bot record.This field is a relationship field.Relationship NameBotVersionRefers ToBotVersion |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe explanation of why the action item has been suggested. The description provides additional context to guide human users and agents in their decision-making. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date that the action item expires and is deleted. AI-generated action items are no longer visible to users after 14 days and removed from records after 30 days. |
| GeneratedResponseIdRef | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of generated result in the GenAIGeneration DMO. This field can be used by human users to provide feedback on the AI-generated action item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the AI-generated action item. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subject line that displays to users indicating what the action item is. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe category that the action item falls under. This field can be used to search for specific action items, such as field updates or follow-up sales emails. |
| UnmodActionItemOutput | TypetextareaPropertiesNillableDescriptionThe unmodified output for the action item produced by AI, whether from a prompt template or other generation method. |
| WhatId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record that the AI-generated action item is for.This field is a polymorphic relationship field.Relationship NameWhatRefers ToAccount, Opportunity |
