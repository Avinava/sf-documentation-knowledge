---
title: "ProductSellingModelOption"
domain: revenue-cloud
topic: productsellingmodeloption
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.241Z
estimatedTokens: 729
keywords: [ProductSellingModelOption, junction, between, Product, Selling, Model, Product2., API, version, 60.0, later., Supported, Calls, Fields]
---

# ProductSellingModelOption

> A junction object between Product Selling Model and Product2. This
      object is available in API version 60.0 and later.

# ProductSellingModelOption

A junction object between Product Selling Model and Product2. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the product selling model option. |
| DisplayName | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product selling model option to display to customers. |
| Increment | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of pricing term units that can be used to increase a subscription term. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndcates the default product selling model for a product. Setting a default is optional. A product can only have one default product selling model.The default value is false. This field requires Industries EPC. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view but not viewed it. |
| Maximum | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of pricing term units for a subscription term. |
| Minimum | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum number of pricing term units for a subscription term. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product selling model option. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Product2 record associated with this ProductSellingModelOption record.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ProductSellingModel record associated with this ProductSellingModelOption record.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| ProrationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the ProrationPolicy record associated with this ProductSellingModelOption record.This field is a relationship field.Relationship NameProrationPolicyRelationship TypeLookupRefers ToProrationPolicy |
