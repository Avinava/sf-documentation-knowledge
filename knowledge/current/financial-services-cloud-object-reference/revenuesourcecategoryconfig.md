---
title: "RevenueSourceCategoryConfig"
domain: financial-services-cloud-object-reference
topic: revenuesourcecategoryconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.783Z
estimatedTokens: 883
keywords: [RevenueSourceCategoryConfig, Revenue, Data, Source-related, stage, metric, want, measure, track, API, version, 57.0, later, SOAP, Calls]
---

# RevenueSourceCategoryConfig

> Represents the Revenue Data Source-related stage information and the revenue
         metric that you want to measure and track. This object is available in API version
      57.0 and later.

# RevenueSourceCategoryConfig

Represents the Revenue Data Source-related stage information and the revenue metric that you want to measure and track. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

RevenueIntelligenceFinsAddOn and FinancialServiceCloudStandardAddOn licenses are required to access this object in your org. To view, create, edit, and delete records, the user requires ManageFSCAnalytics and RevenueIntelligenceUser permission set.

## Fields

| Field | Details |
| --- | --- |
| ClosedDateFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the field from Revenue Data Source that stores the opportunity close date. |
| ClosedLostStageOption | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe options that represent the Closed Lost stage. |
| ClosedWonStageOption | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe options that represent the Closed Won stage. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the category configurations are active (true) or not (false)The default value is true until the maximum active categories is reached. After that, the default value of this field is set to False. |
|  |  |
| Language | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe language of the revenue source category object.Possible values are the supported languages in Financial Services Cloud. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLabel for the revenue source category configuration. In the UI, this field is Revenue Source Category Configuration. |
| RevenueDataSourceFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the field from Revenue Data Source that stores the revenue details as either amount or quantity. |
| RevenueDataSourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe revenue data source record associated with this record.This field is a relationship field.Relationship NameRevenueDataSourceRelationship TypeLookupRefers ToRevenueSourceObjectConfig |
| StageFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the field from Revenue Data Source that stores the stage picklist values. |
