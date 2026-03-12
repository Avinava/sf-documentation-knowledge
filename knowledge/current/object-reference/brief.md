---
title: "Brief"
domain: object-reference
topic: brief
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.625Z
estimatedTokens: 814
keywords: [Brief, marketing, that’s, positioning, grounding, campaign, Agentforce, help, best, fits, goals, requirements, API, version, 61.0]
---

# Brief

> Represents a marketing brief. A brief contains information that’s used for
         positioning and grounding a marketing campaign. Agentforce can help you create a campaign
         that best fits the goals and requirements in your brief. This object is available in
      API version 61.0 and later.

# Brief

Represents a marketing brief. A brief contains information that’s used for positioning and grounding a marketing campaign. Agentforce can help you create a campaign that best fits the goals and requirements in your brief. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContext related to the campaign that isn’t represented in the other fields. |
| AgentGuardrails | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionGuardrails that the agent must follow when creating a campaign. Use these guardrails to prevent damage to your brand and to ensure safety and compliance. |
| BrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of your brand.This field is a relationship field.Relationship NameBrandRefers ToManagedContent |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the brief. |
| IsConversational | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the campaign contains conversational elements.The default value is false. |
| KeyMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe main theme or message that you want to deliver to your customers through the campaign that’s associated with the brief. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the brief was last referenced by a campaign. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the brief was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the brief. |
| PlanName | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAn agent-generated name for the campaign. When you save a campaign preview, the resulting campaign has this name. |
| PrimaryCtas | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe main calls-to-action (CTAs) for the brief. The agent uses this information to understand the actions that it can use to meet the goals of the campaign. |
| PrimaryGoal | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe goal of the campaign that’s associated with the brief. The agent uses this field to understand the main objective of the campaign. |
| PrimaryKpi | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe main key performance indicator (KPI) for measuring progress toward the goal. The agent uses this field to prioritize actions that contribute to the goal of the campaign. |
| Priority | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe priority of the brief. The agent uses this field to prioritize actions that contribute to the goal of the campaign. |
| TargetAudience | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the characteristics of the audience that you want to reach through the campaign that’s associated with this brief. |
