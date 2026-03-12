---
title: "FulfillmentStepJeopardyRule"
domain: revenue-cloud
topic: fulfillmentstepjeopardyrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.362Z
estimatedTokens: 654
keywords: [FulfillmentStepJeopardyRule, Represents, duration, tolerance, step, fulfillment, process, allow, overall, tracking, rules, risks., API, version, 61.0, later., Supported, Calls, Fields]
---

# FulfillmentStepJeopardyRule

> Represents the duration and tolerance for the step in the fulfillment
         process to allow the overall tracking of rules and risks. This object is available in
      API version 61.0 and later.

# FulfillmentStepJeopardyRule

Represents the duration and tolerance for the step in the fulfillment process to allow the overall tracking of rules and risks. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EstimatedDuration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe estimated time to complete the fulfillment step. |
| EstimatedDurationUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measurement that applies to the estimated time to complete the fulfillment step.Valid values are:DaysHoursMinutesSecondsThe default value is Minutes. |
| FlowDefinition | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe flow definition that's associated with the AutoTask type of the fulfillment step. |
| IntegrationDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe integration definition that's associated with the Callout type of the fulfillment step.This field is a relationship field.Relationship NameIntegrationDefinitionRelationship TypeLookupRefers ToIntegrationProviderDef |
| JeopardyThreshold | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value indicating the threshold after which the fulfillment step is in jeopardy. |
| JeopardyThresholdUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measurement that applies to the jeopardy threshold value.Valid values are:DaysHoursMinutesSecondsThe default value is Minutes. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionFor internal use only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionFor internal use only. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFor internal use only.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StepType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of fulfillment step that's affected by the jeopardy rule.Valid values are:AutoTaskCalloutManualTaskMilestonePause |
