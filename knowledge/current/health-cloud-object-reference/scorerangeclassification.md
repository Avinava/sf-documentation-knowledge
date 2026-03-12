---
title: "ScoreRangeClassification"
domain: health-cloud-object-reference
topic: scorerangeclassification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.448Z
estimatedTokens: 419
keywords: [ScoreRangeClassification, different, score, ranges, category, how, scores, classified, interpreted, API, version, 55.0, later, SOAP, Calls]
---

# ScoreRangeClassification

> Represents the different score ranges of a score category and how scores in
         those ranges are classified or interpreted. This object is available in API version
      55.0 and later.

# ScoreRangeClassification

Represents the different score ranges of a score category and how scores in those ranges are classified or interpreted. This object is available in API version 55.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Requires the Unified Health Scoring license.

## Fields

| Field | Details |
| --- | --- |
| ClassificationName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe interpretation or classification of scores in the specified range.Example: Good, Great, Excellent |
| ColorHexadecimalCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe hexadecimal code for the color that represents the range and its interpretation.TipBe mindful of cultural differences when you choose a color code. Different colors mean different things in different cultures. |
| RangeEndValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe end point of a score range classification. |
| RangeStartValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe start point of a score range classification. |
| ScoreCategoryId | TypeMaster-detailPropertiesCreate, Filter, Group, SortDescriptionThe score category whose score range and classification are defined.This field is a relationship field.Refers ToScoreCategory |

## Usage

Define multiple ranges to cover the full range of a category’s score and classify how scores in each range are interpreted. Ensure that the ranges don’t overlap or leave any gaps between them.
