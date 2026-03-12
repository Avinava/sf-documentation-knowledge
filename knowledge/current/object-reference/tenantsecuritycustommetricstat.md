---
title: "TenantSecurityCustomMetricStat"
domain: object-reference
topic: tenantsecuritycustommetricstat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.902Z
estimatedTokens: 371
keywords: [TenantSecurityCustomMetricStat, custom, metric, data, Security, Center, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityCustomMetricStat

> Represents custom metric data within Security Center. This object is
      available in API version 61.0 and later.

# TenantSecurityCustomMetricStat

Represents custom metric data within Security Center. This object is available in API version 61.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| ChangeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times this metric was changed. |
| CustomMetricIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the custom metric. |
| EndProcessTime | TypedateTimePropertiesFilter, SortDescriptionThe end time of the metric being processed. |
| MetricCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of times this metric was recorded. |
| MetricIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique identifier of the metric. |
| MetricName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the custom metric. |
| PreviousMetricIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe previous unique identifier of this metric. |
| StartProcessTime | TypedateTimePropertiesFilter, SortDescriptionThe start time of the metric being processed. |
| Tenant | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the tenant with the custom metric. |
