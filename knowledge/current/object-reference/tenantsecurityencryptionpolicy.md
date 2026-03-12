---
title: "TenantSecurityEncryptionPolicy"
domain: object-reference
topic: tenantsecurityencryptionpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.916Z
estimatedTokens: 462
keywords: [TenantSecurityEncryptionPolicy, Stores, tenant, encryption, policy, status, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityEncryptionPolicy

> Stores tenant encryption policy status. This object is available in API
      version 58.0 and later.

# TenantSecurityEncryptionPolicy

Stores tenant encryption policy status. This object is available in API version 58.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe action taken on the encryption policy within a tenant. Possible values are:AddedRemovedUpdated |
| ActionBy | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThis field is reserved for future use. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen the change to the tenant encryption policy status was made. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUnique identifier for this detail record. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of encryption policy collected by this metric. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for the data collected. |
| PolicyName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the policy. |
| PolicyStatus | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionStatus of the policy. Possible values are:-1—No license.0—Not Enabled.-1—Enabled |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant with Shield Encryption. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe name of the tenant that this record is for. |
