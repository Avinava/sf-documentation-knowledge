---
title: "TenantSecurityCustomMetricSetup"
domain: object-reference
topic: tenantsecuritycustommetricsetup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.896Z
estimatedTokens: 498
keywords: [TenantSecurityCustomMetricSetup, configuration, custom, metric, Security, Center, API, version, 61.0, later, Calls]
---

# TenantSecurityCustomMetricSetup

> Represents the configuration for a custom metric within Security Center.
      This object is available in API version 61.0 and later.

# TenantSecurityCustomMetricSetup

Represents the configuration for a custom metric within Security Center. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CustomMetricIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique identifier for the custom metric. |
| CustomObjectIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier for the custom object for this custom metric. |
| CustomObjectName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique name of the custom object for this custom metric. |
| DiffFieldIdentifierList | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe list of fields that were selected for Diff display. |
| DisplayFieldIdentifierList | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe list of fields that were selected for display. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the custom metric. |
| MetricDisplayType | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe display type for this metric. For example, diff or non-diff. |
| MetricGroup | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe category of the custom metric. Some category examples include Authenticationand Configuration. |
| MetricName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the custom metric. The MetricName and Name fields have the same value. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the custom metric. The MetricName and Name fields have the same value. |
