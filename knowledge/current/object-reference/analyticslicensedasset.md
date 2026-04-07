---
title: "AnalyticsLicensedAsset"
domain: object-reference
topic: analyticslicensedasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:25.286Z
estimatedTokens: 234
namespace: Type
keywords: [AnalyticsLicensedAsset, licensed, Analytics, asset, context, CRM, Sonic, Mulesoft, Path, API, 52.0]
---

> Represents a licensed Analytics
            asset. In this context, Analytics is CRM Analytics, Sonic, or Mulesoft Data Path.
        Available in API version 52.0 and later.

**Namespace:** `Type`

# AnalyticsLicensedAsset

Represents a licensed Analytics asset. In this context, Analytics is CRM Analytics, Sonic, or Mulesoft Data Path. Available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConsumerNamespace | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe consumer namespace for the asset. The possible values are:Industries |
| LicenseType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe license type for the asset. The possible values are:Aqs (Analytics Query Service)Cdp (Data Cloud)DataPipelineQuery (Data Pipeline Query)EinsteinAnalytics (CRM Analytics)MulesoftDataPath (Mulesoft DataPath)Sonic (Salesforce Data Pipelines)The default value is EinsteinAnalytics. |
