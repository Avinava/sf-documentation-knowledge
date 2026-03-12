---
title: "PipelineInspMetricConfig"
domain: tooling-api
topic: pipelineinspmetricconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.538Z
estimatedTokens: 394
keywords: [PipelineInspMetricConfig, configuration, forecast, category, metric, appears, Pipeline, Inspection, view, API, version, 55.0, later, SOAP, Calls]
---

# PipelineInspMetricConfig

> Represents the configuration of a forecast category metric that appears in
         the Pipeline Inspection view. This object is available in API version 55.0 and later.

# PipelineInspMetricConfig

Represents the configuration of a forecast category metric that appears in the Pipeline Inspection view. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRead only. The unique name of Pipeline Inspection metric configuration in the API. |
| IsCumulative | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. Whether the metric is cumulative. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRead only. The language of the Pipeline Inspection metric. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionCustomized label of the Pipeline Inspection metric. Limit: 50 characters. |
| Metric | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe Pipeline Inspection metric.Possible values are:BestCaseClosedLostClosedWonCommitMostLikelyOpenPipelineTotalPipeline |
