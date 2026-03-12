---
title: "VoiceVendorInfo"
domain: object-reference
topic: voicevendorinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.304Z
estimatedTokens: 333
keywords: [VoiceVendorInfo, Service, Cloud, Voice, Sales, Dialer, provider’s, vendor, Calls, Special, Access, Rules]
---

# VoiceVendorInfo

> Represents information about the Service Cloud Voice or Sales Dialer provider’s vendor.

# VoiceVendorInfo

Represents information about the Service Cloud Voice or Sales Dialer provider’s vendor.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CorporateNumber | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe standard number that users can choose to display when making outgoing calls. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the vendor is active or not. |
| LocalPresenceDefaultNumber | TypephonePropertiesFilter, Group, Nillable, SortDescriptionThe default routing number that’s available for incoming local presence calls. |
| TenantConfigVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the Service Cloud Voice tenant configuration. Available in API version 51.0 and later. |
| VendorAccountKey | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe account key of the vendor. |
| VendorProviderName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the vendor. |
| VendorType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the telephony vendor. |
