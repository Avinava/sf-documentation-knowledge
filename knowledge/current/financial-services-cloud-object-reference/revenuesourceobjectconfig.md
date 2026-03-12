---
title: "RevenueSourceObjectConfig"
domain: financial-services-cloud-object-reference
topic: revenuesourceobjectconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.790Z
estimatedTokens: 936
keywords: [RevenueSourceObjectConfig, data, underlying, Salesforce, standard, custom, stores, opportunity, product-related, API, version, 57.0, later, SOAP, Calls]
---

# RevenueSourceObjectConfig

> Represents data from the underlying Salesforce standard or custom object that
         stores opportunity and product-related information. This object is available in API
      version 57.0 and later.

# RevenueSourceObjectConfig

Represents data from the underlying Salesforce standard or custom object that stores opportunity and product-related information. This object is available in API version 57.0 and later.

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
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
|  |  |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the revenue source object configuration.Possible values are the supported languages in Financial Services Cloud. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the revenue source object configuration. In the UI, this field is Revenue Source Object Configuration. |
| PrimaryAccountFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the field that stores the reference to account information. If there are multiple accounts for Revenue Source Dataset, then this field would be the reference to the primary account. |
| ProductNameField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of field from Revenue Data Source or Revenue Product Dataset that stores the product name information. |
| ProductReferenceFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the field from Revenue Data Source or Revenue Product Dataset that has a lookup to product information. |
| ProductReferenceObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the standard or custom object that stores product information. |
| RevDataSourceRefFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the field from Revenue Product Dataset that has a lookup to Revenue Data Source. |
| RevenueDataSource | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe standard or custom object that stores opportunity information. |
| RevenueProductDataset | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe standard or custom object that stores both opportunity and product information. |
| UserIdentifierFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the field that stores the user ID information of who owns the account. |
