---
title: "UnifiedActvtyInsightKeyword"
domain: object-reference
topic: unifiedactvtyinsightkeyword
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.441Z
estimatedTokens: 361
keywords: [UnifiedActvtyInsightKeyword, keyword, communication, triggered, activity, insight, reports, dashboards, Winter, ’24, release, later, Calls, Special, Access]
---

# UnifiedActvtyInsightKeyword

> Represents a keyword in a communication that triggered the activity
         insight.  This object is available for reports and dashboards in the Winter ’24
      release and later.

# UnifiedActvtyInsightKeyword

Represents a keyword in a communication that triggered the activity insight. This object is available for reports and dashboards in the Winter ’24 release and later.

## Supported Calls

describeSObjects(), query()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available only for reporting. It isn’t supported for SOQL queries and APIs.

## Special Access Rules

We’re retiring Einstein Activity Capture Activity 360 Reporting. Starting in Summer ’25, this object isn’t available with Einstein Activity Capture unless Activity 360 Reporting was enabled in your org in Spring ’25 or earlier. See Knowledge Article: [Einstein Activity Capture Activity 360 Reporting, Activity Metrics, Activities Dashboard Upcoming Retirement](https://help.salesforce.com/s/articleView?id=004633781&type=1&language=en_US)

## Fields

| Field | Details |
| --- | --- |
| InsightId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the activity insight associated with the keyword.This field is a relationship field.Relationship NameInsightRelationship TypeLookupRefers ToUnifiedActivityInsight |
| Keyword | TypestringPropertiesFilter, Nillable, SortDescriptionKeyword mentioned in the communication. |
| Occurrences | TypeintPropertiesFilter, Nillable, SortDescriptionNumber of times the keyword was mentioned in the communication. |
