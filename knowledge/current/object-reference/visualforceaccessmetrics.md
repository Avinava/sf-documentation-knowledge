---
title: "VisualforceAccessMetrics"
domain: object-reference
topic: visualforceaccessmetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.150Z
estimatedTokens: 316
keywords: [VisualforceAccessMetrics, summary, statistics, Visualforce, pages, Calls, Special, Access, Rules, Usage]
---

# VisualforceAccessMetrics

> Represents summary statistics for Visualforce pages.

# VisualforceAccessMetrics

Represents summary statistics for Visualforce pages.

## Supported Calls

count(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, to access VisualforceAccessMetrics, users must have the Customize Application permission.

## Fields

| Field | Details |
| --- | --- |
| ApexPageId | TypereferencePropertiesAggregate, Filter, Group, SortDescriptionThe ID of the Visualforce page.This is a relationship field.Relationship NameApexPageRelationship TypeLookupRefers ToApexPage |
| ProfileId | TypereferencePropertiesAggregate, Filter, Group, Nillable, SortDescriptionThe ID of the use who viewed the Visualforce page.This is a relationship field.Relationship NameProfileRelationship TypeLookupRefers ToProfile |
| DailyPageViewCount | TypeintPropertiesAggregate, Filter, Group, Nillable, SortDescriptionThe number of views received by the specified Visualforce page. |
| MetricsDate | TypedatePropertiesAggregate, Filter, Group, SortDescriptionThe date the metrics are queried. |
| LogDate | TypedatePropertiesAggregate, Filter, Group, Nillable, SortDescriptionThe most recent page access date. |

## Usage

Use this object to query information on the Visualforce pages in your org.

```

```

## Code Examples

```
SELECT ApexPageId, DailyPageViewCount, Id, ProfileId, MetricsDate, LogDate FROM VisualforceAccessMetrics
```
