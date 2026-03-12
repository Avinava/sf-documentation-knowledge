---
title: "FlowStageRelation"
domain: object-reference
topic: flowstagerelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.499Z
estimatedTokens: 596
keywords: [FlowStageRelation, relationship, paused, flow, interview, stages, Salesforce, creates, record, stage, that’s, $Flow.CurrentStage, $Flow.ActiveStages, variable, API]
---

# FlowStageRelation

> Represents a relationship between a paused flow interview and its stages. When
      a flow interview is paused, Salesforce creates a FlowStageRelation record for each stage
      that’s set to the $Flow.CurrentStage or $Flow.ActiveStages global variable. Available in API
    version 43.0 and later.

# FlowStageRelation

Represents a relationship between a paused flow interview and its stages. When a flow interview is paused, Salesforce creates a FlowStageRelation record for each stage that’s set to the $Flow.CurrentStage or $Flow.ActiveStages global variable. Available in API version 43.0 and later.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated ID of this relation. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionThe flow interview that the record is related to.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToFlowInterview |
| StageLabel | TypestringPropertiesFilter, Nillable, SortDescriptionLabel for the stage. If the stage is translated, the label respects the language of the user who is querying the label. |
| StageOrder | TypeintPropertiesFilter, Group, SortDescriptionThe order of this stage when the flow interview was paused. This order may differ from the order in the stage definition.If the type is Active, the order corresponds to the order of the stage in $Flow.ActiveStages.If the type is Current and corresponds to an active stage, the order matches the order of the active stage.If the type is Current and doesn't correspond to an active stage, the order is 0. |
| StageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionType of stage. The valid values are:Current: Identifies that the stage is set to $Flow.CurrentStage.Active: Identifies that the stage is set to $Flow.ActiveStages. |

## Usage

You can use the FlowStageRelation records to represent the paused interview and its active and current stages visually.

For example, an Online Purchasing flow interview starts with several stages in $Flow.ActiveStages. If the interview is paused, Salesforce creates a FlowStageRelation record for each stage in $Flow.ActiveStages or $Flow.CurrentStage.

| StageLabel | StageType | StageOrder |
| --- | --- | --- |
| Review Cart | Active | 0 |
| Shipping Details | Active | 1 |
| Billing Details | Active | 2 |
| Payment Details | Active | 3 |
| Order Confirmation | Active | 4 |
| Shipping Details | Current | 1 |
