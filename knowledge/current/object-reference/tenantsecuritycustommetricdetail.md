---
title: "TenantSecurityCustomMetricDetail"
domain: object-reference
topic: tenantsecuritycustommetricdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.889Z
estimatedTokens: 386
keywords: [TenantSecurityCustomMetricDetail, Stores, TenantSecurityCustomMetricStat, drill, down, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityCustomMetricDetail

> Stores TenantSecurityCustomMetricStat drill down details. This
      object is available in API version 62.0 and later.

# TenantSecurityCustomMetricDetail

Stores TenantSecurityCustomMetricStat drill down details. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionWhether the metric detail record was added, updated, or removed. |
| ActionBy | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user who performs the action. |
| ActionDate | TypedateTimePropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionWhen this change was made. |
| CustomObjectIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA virtual foreign key reference to a Custom Object in which the metric details are stored. |
| DiffFieldValueListHash | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe hash of custom metric diff fields value. |
| FieldValueListHash | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe hash of custom metric fields value. |
| MetricStatIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA virtual foreign key reference to TenantSecurityCustomMetricStat. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe Custom Object Api Name associates to the custom metric. |
