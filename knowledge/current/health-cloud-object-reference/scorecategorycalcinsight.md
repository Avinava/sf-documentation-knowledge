---
title: "ScoreCategoryCalcInsight"
domain: health-cloud-object-reference
topic: scorecategorycalcinsight
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.443Z
estimatedTokens: 563
keywords: [ScoreCategoryCalcInsight, how, score, category, Unified, Health, Scoring, mapped, calculated, insight, Salesforce, CDP, calculate, scores, API]
---

# ScoreCategoryCalcInsight

> Represents how a score category in Unified Health Scoring is mapped to a
         calculated insight in Salesforce CDP. Use this object only if you use CDP to calculate
         scores for Unified Health Scoring. This object is available in API version 55.0 and
      later.

# ScoreCategoryCalcInsight

Represents how a score category in Unified Health Scoring is mapped to a calculated insight in Salesforce CDP. Use this object only if you use CDP to calculate scores for Unified Health Scoring. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| InsightDateFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the date field in the calculated insight that specifies when the last calculation was processed. |
| InsightName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the calculated insight that derives scores for the category. |
| InsightScoreFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the field in the calculated insight that specifies the derived scores. This field is the field that’s defined as the measure of the calculated insight. |
| InsightSubjectFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the field in the calculated insight that references the subject of the score. The referenced subject is either an account, lead, or contact. This field is the field that’s defined as the dimension of the calculated insight. |
| ScoreCategoryId | TypeMaster-detai;PropertiesCreate, Filter, Group, SortDescriptionThe score category that’s mapped to a calculated insight.Refers ToScoreCategory |

## Usage

Map a category to its calculated insight with the fields that correspond to the measure and dimension of the calculated insight. This mapping ensures that the scores fetched from CDP are assigned with the right category when they’re inserted into HealthScore.
