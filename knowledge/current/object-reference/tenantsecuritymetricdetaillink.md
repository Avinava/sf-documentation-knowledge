---
title: "TenantSecurityMetricDetailLink"
domain: object-reference
topic: tenantsecuritymetricdetaillink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.983Z
estimatedTokens: 251
keywords: [TenantSecurityMetricDetailLink, link, metric, count, drill, down, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityMetricDetailLink

> Represents
         the link between the metric count and metric drill down. This object is available in
      API version 48.0 and later.

# TenantSecurityMetricDetailLink

Represents the link between the metric count and metric drill down. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| DetailIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique identifier for this detail record. |
| MetricIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the type of metric counted. This field is unique within your organization. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the metric for the data collected. |
| Tenant | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the tenant that was targeted in the event. |
