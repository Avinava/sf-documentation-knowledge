---
title: "PipelineInspMetricConfig"
domain: object-reference
topic: pipelineinspmetricconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.900Z
estimatedTokens: 376
keywords: [PipelineInspMetricConfig, configuration, forecast, category, metric, appears, Pipeline, Inspection, view, API, version, 55.0, later, Calls]
---

# PipelineInspMetricConfig

> Represents the configuration of a forecast category metric that appears in
         the Pipeline Inspection view. This object is available in API version 55.0 and later.

# PipelineInspMetricConfig

Represents the configuration of a forecast category metric that appears in the Pipeline Inspection view. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRead only. The unique name of a Pipeline Inspection metric configuration in the API. |
| IsCumulative | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. Whether the metric is cumulative. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRead only. The language of the Pipeline Inspection metric. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionCustomized label of the Pipeline Inspection metric. Limit: 50 characters. |
| Metric | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe Pipeline Inspection metric.Possible values are:BestCaseClosedLostClosedWonCommitMostLikelyOpenPipelineTotalPipeline |
