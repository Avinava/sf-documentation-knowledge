---
title: "PipelineInspMetricConfigLocalization"
domain: object-reference
topic: pipelineinspmetricconfiglocalization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.905Z
estimatedTokens: 246
keywords: [PipelineInspMetricConfigLocalization, translated, label, Pipeline, Inspection, metric, API, version, 55.0, later, Calls]
---

# PipelineInspMetricConfigLocalization

> Represents the translated label of a Pipeline Inspection metric. This
      object is available in API version 55.0 and later.

# PipelineInspMetricConfigLocalization

Represents the translated label of a Pipeline Inspection metric. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language of the Pipeline Inspection metric. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix of the Pipeline Inspection metric language. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related Pipeline Inspection metric.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToPipelineInspMetricConfig |
| Value | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionThe value of the Pipeline Inspection metric. |
