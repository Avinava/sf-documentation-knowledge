---
title: "ScorecardMetric"
domain: object-reference
topic: scorecardmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.666Z
estimatedTokens: 425
keywords: [ScorecardMetric, Stores, Salesforce, report, run, summarized, stored, added, metric, Scorecard, API, version, 40.0, later, Calls]
---

# ScorecardMetric

> Stores information about a Salesforce report that is run and summarized to
         get a single value. The stored value is added as a metric to the related Scorecard
         object. This object is available in API version 40.0 and later.

# ScorecardMetric

Stores information about a Salesforce report that is run and summarized to get a single value. The stored value is added as a metric to the related Scorecard object. This object is available in API version 40.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionGroups metrics together. It comes with a predefined set of dropdown list entries and can be extended to address vendor’s needs each category is user-generated and can be localized through translation workbench.Possible values are:AdoptionField EnablementMarketingSalesSupportThe default value is 'Sales'. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the metric that appears on a scorecard. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the metric that appears on a scorecard. |
| ReportId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the report that is run and summarized to return a single value.This is a relationship field.Relationship NameReportRelationship TypeLookupRefers ToReport |
| ScorecardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the scorecard that the metric is related to. Several metrics can be tied to a single scorecard.This is a relationship field.Relationship NameScorecardRelationship TypeLookupRefers ToScorecard |
