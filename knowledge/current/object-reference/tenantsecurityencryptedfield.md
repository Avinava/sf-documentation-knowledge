---
title: "TenantSecurityEncryptedField"
domain: object-reference
topic: tenantsecurityencryptedfield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.909Z
estimatedTokens: 517
keywords: [TenantSecurityEncryptedField, encrypted, under, Shield, Platform, Encryption, policy, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# TenantSecurityEncryptedField

> Represents fields encrypted under your Shield Platform Encryption
         policy. This object is available in API version 61.0 and later.

# TenantSecurityEncryptedField

Represents fields encrypted under your Shield Platform Encryption policy. This object is available in API version 61.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read-only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe action taken on the encryption policy within a tenant. Possible values are:AddedRemovedUpdated |
| ActionBy | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThis field is reserved for future use. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the change to the tenant encryption policy status was made. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUnique identifier for this detail record. |
| EncryptionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of encryption for the field. |
| FieldName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the encrypted field. |
| FieldType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of field being encrypted. |
| MetricIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the type of metric that was counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of encryption policy collected by this metric. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the metric for the data collected. |
| ObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object for this encrypted field. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant with Shield Encryption. |
| TenantName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the tenant that this record is for. |
