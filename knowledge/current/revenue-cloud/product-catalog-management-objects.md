---
title: "Product Catalog Management Objects"
domain: revenue-cloud
topic: product-catalog-management-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-06-07T00:37:41.430Z
estimatedTokens: 1916
keywords: [Product, Catalog, Management, deployment, sequence, API, lookup, translation, requirements, Revenue, Cloud]
---

> This table provides the deployment sequence, object types, API names, lookup fields,
    and data translation requirements for Product Catalog Management objects in Revenue
    Cloud.

# Product Catalog Management Objects

This table provides the deployment sequence, object types, API names, lookup fields, and data translation requirements for Product Catalog Management objects in Revenue Cloud.

![Important](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

Internal objects aren't accessible.

| Object Use Type | Object Name | Object API | Deployment Sequence | Lookup Fields (Foreign Keys) |
| --- | --- | --- | --- | --- |
| Metadata | Product Specification Type | ProductSpecificationType | 1 | User |
| Metadata | Product Specification Record Type | ProductSpecification Record Type | 2 | Product Specification Type |
| Configuration | Attribute Picklist | AttributePickist | 3 | User, User Group, Unit of Measure |
| Configuration | Attribute Picklist ValueTranslation table: Attribute Picklist Value Data Translation | AttributePicklistValueTranslation table: AttributePicklist​ValueData​Translation | 446 | User, Attribute Picklist (Master-Detail) |
| Configuration | Unit of Measure Class | UnitOfMeasureClass | 5 | User, Unit of Measure |
| Configuration | Unit of Measure | UnitOfMeasure | 6 | User Group, Unit of Measure Class |
| Configuration | Attribute DefinitionTranslation table: Attribute Definition Data Translation | AttributeDefinitionTranslation table: AttributeDefinition​Data​Translation | 747 | User, Attribute Picklist, Unit of Measure |
| Configuration | Attribute CategoryTranslation table: Attribute Category Data Translation | AttributeCategoryTranslation table: AttributeCategory​Data​Translation | 848 | User Group |
| Configuration | Attribute Category Attribute | AttributeCategoryAttribute | 9 | User Group, Attribute Category, Attribute Definition |
| Configuration | Product ClassificationTranslation table: Product Classification Data Translation | ProductClassificationTranslation table: ProductClassification​Data​Translation | 1049 | User, User Group, Product Classification |
| Configuration | Product Classification AttributeTranslation table: Product Classification Attribute Data Translation | ProductClassificationAttrTranslation table: ProductClassification​AttrData​Translation | 1150 | Attribute Definition, Attribute Category, Product Classification Attribute, Product Classification Attribute, User, User Group, Unit of Measure |
| Configuration | Tax Policy | TaxPolicy | 12 | User, Tax Treatment |
| Configuration | ProductTranslation table: Product2 Data Translation | Product2Translation table: Product2DataTranslation | 1351 | Product Classification, Billing Policy, User, External Data Source, Tax Policy, Unit of Measure |
| Configuration | Tax Engine | TaxEngine | 14 | Named Credential, Tax Engine Provider |
| Configuration | Tax Treatment | TaxTreatment | 15 | Legal Entity, Product, Tax Policy, Tax Engine |
| Configuration | Product Attribute Definition | ProductAttributeDefinition | 16 | Attribute Definition, Attribute Category, User, Product Attribute Definition, Product Classification Attribute, Unit of Measure |
| Configuration | Attribute Picklist Excluded Value | AttrPicklistExcludedValue | 17 | Product Classification Attribute, Product Attribute Definition (polymorphic), Attribute Picklist Value |
| Configuration | Product Attribute Scope | ProdtAttrScope | 18 | User, User Group |
| Configuration | Product Attribute Mapped Scope | ProdtAttrMappedScope | 19 | Product Classification Attribute, Product Attribute Definition (polymorphic), Product Attribute Mapped Scope, Product Attribute Scope |
| Configuration | Product Selling Model | ProductSellingModel | 20 | User |
| Configuration | Product Selling Model Option | ProductSellingModelOption | 21 | User, Product Selling Model, Proration Policy |
| Configuration | Product Ramp Segment | ProductRampSegment | 22 | User, Product Selling Model, Product |
| Configuration | Product Relationship Type | ProductRelationshipType | 23 | User |
| Configuration | Product Component Group | ProductComponentGroup | 24 | User, User Group, Product Component Group |
| Configuration | Product Related Component | ProductRelatedComponent | 25 | User, Product, Product Classification, Product Selling Model, Product Component Group, Product Relationship Type, Unit of Measure |
| Configuration | Product Related Group Override | ProductComponentGrpOverride | 26 | User, User Group, Product, Product Component Group |
| Configuration | Product Related Component Override | ProductRelComponentOverride | 27 | UserGroup, Product, Product Related Component, Unit of Measure |
| Configuration | CatalogTranslation table: Product Catalog Data Translation | ProductCatalogTranslation table: ProductCatalogDataTranslation | 2852 | User, User Group |
| Configuration | CategoryTranslation table: Product Category Data Translation | ProductCategoryTranslation table: ProductCategoryDataTranslation | 2953 | User, Catalog (Master-Detail) |
| Configuration | Product Category Product | ProductCategoryProduct | 30 | Product, Category (Master-Detail) |
| Configuration | Product Qualification | ProductQualification | 31 | User, User Group, Product |
| Configuration | Product Disqualification | ProductDisqualification | 32 | User, User Group, Product |
| Configuration | Product Category Qualification | ProductCategoryQualification | 33 | User, User Group, Category |
| Configuration | Product Category Disqualification | ProductCategoryDisqual | 34 | User, User Group, Category |
| Configuration | Runtime Catalog Index Settings (Internal) | RuntimeCatalogIndexSetting | 35 |  |
| Configuration | WebStore Search Attr Settings (Internal) | WebStoreSearchAttrSettings | 36 |  |
| Configuration | Assessment Question | AssessmentQuestion | 37 | Assessment Question Version, Assessment Question, User, User Group |
| Configuration | Assessment Question Version | AssessmentQuestionVersion | 38 | Assessment Question (Master-Detail) |
| Configuration | Assessment | Assessment | 39 | Account, Contact, User, User Group, Omni Process, Assessment |
| Configuration | Assessment Question Response | AssessmentQuestionResponse | 40 | Assessment Question Version, Assessment (Master-Detail), User, User Group |
| Configuration | Omni Process | OmniProcess | 41 | User, User Group |
| Configuration | Omni Process Element | OmniProcessElement | 42 | Omni Process (Master-Detail), Omni Process Element |
| Configuration | OmniProcess Assessment Question Version | OmniProcessAsmtQuestionVer | 43 | Assessment Question Version, Omni Process, Omni Process Element, User Group |
| Configuration | Assessment Question Set | AssessmentQuestionSet | 44 | User, User Group |
| Configuration | Assessment Question Assignment | AssessmentQuestionAssignment | 45 | Assessment Question Set, User, User Group |

#### See Also

-   [*Revenue Cloud Developer Guide*: Product Catalog Management Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.262.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/pcm_std_objects_parent.htm "Revenue Cloud Developer Guide: Product Catalog Management Standard
    Objects - HTML (New Window)")

-   [Explore the Revenue Cloud Data Model](https://help.salesforce.com/s/articleView?id=ind.data_model_overview.htm&language=en_US "Explore the Revenue Cloud Data Model - HTML (New Window)")
