---
title: "TenantSecurityCertificate"
domain: object-reference
topic: tenantsecuritycertificate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.857Z
estimatedTokens: 618
keywords: [TenantSecurityCertificate, Stores, metric, key, certificate, binds, identity, entity, API, version, 63.0, later, Calls, Special, Access]
---

# TenantSecurityCertificate

> Stores metric details related to public key certificate information.
         The certificate binds the public key to the identity of an entity. This object is
      available in API version 63.0 and later.

# TenantSecurityCertificate

Stores metric details related to public key certificate information. The certificate binds the public key to the identity of an entity. This object is available in API version 63.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is read only.

## Fields

| Field | Details |
| --- | --- |
| Action | TypeStringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe action taken on this certificate. Possible values are:AddedRemovedUpdated |
| ActionBy | TypeStringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe user who made this change. |
| ActionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date this action was taken. |
| CertCreatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen this certificate was created. |
| DetailIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the individual detail record. This field is unique within your organization. |
| ExpirationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionWhen this certificate expires. |
| IsActive | TypebooleanPropertiesFilter, Group, SortDescriptionIndicates whether this certificate is active. |
| IsCaSigned | TypebooleanPropertiesFilter, Group, SortDescriptionIndicates whether this certificate is signed by the issuer (true) or not (false). |
| IsPlatformEncrypted | TypebooleanPropertiesFilter, Group, SortDescriptionWhether this certificate is encrypted with Platform Encryption. |
| IsPrivateKeyExportable | TypebooleanPropertiesFilter, Group, SortDescriptionIndicates whether this certificate’s private key is exportable. |
| KeySize | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe length of the public key. |
| MetricIdentfier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the type of metric that was counted. This field is unique within your organization. |
| MetricsType | TypepicklistPropertiesFilter, Group, SortDescriptionThe type of data being collected. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA user-friendly name for the certificate. |
| Tenant | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe ID of the tenant with this certificate. |
| TenantName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the tenant with this certificate. |
