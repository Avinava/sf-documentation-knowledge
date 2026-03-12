---
title: "PipelineInspectionSumField"
domain: object-reference
topic: pipelineinspectionsumfield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.894Z
estimatedTokens: 304
keywords: [PipelineInspectionSumField, opportunity, aggregate, Pipeline, Inspection, metrics, view, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# PipelineInspectionSumField

> Use this object to learn which field from the opportunity object is
         used to aggregate Pipeline Inspection metrics on a pipeline view. This object is
      available in API version 56.0 and later.

# PipelineInspectionSumField

Use this object to learn which field from the opportunity object is used to aggregate Pipeline Inspection metrics on a pipeline view. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To use PipelineInspectionSumField, enable Pipeline Inspection. Users with a Pipeline Inspection user permission, the Customize Application permission or the Modify All Data permission can access this object. To create and modify records, users must have either the Customize Application permission or the Modify All Data permission.

## Fields

| Field | Details |
| --- | --- |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe object that stores the summary fields.Possible values are:Opportunity |
| SummaryField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe field used to summarize Pipeline Inspection metrics. Possible values are standard field names or custom field IDs for custom currency and number fields.AmountExpectedRevenueTotalOpportunityQuantitycustom_field_ID |
