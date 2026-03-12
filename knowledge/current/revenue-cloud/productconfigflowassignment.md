---
title: "ProductConfigFlowAssignment"
domain: revenue-cloud
topic: productconfigflowassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.099Z
estimatedTokens: 436
keywords: [ProductConfigFlowAssignment, junction, many-to-many, relationship, Product, Configuration, Flow, Classification, API, version, 60.0, later, Calls]
---

# ProductConfigFlowAssignment

> A junction object that represents the many-to-many relationship between
         Product Configuration Flow, Product, and Product Classification. This object is
      available in API version 60.0 and later.

# ProductConfigFlowAssignment

A junction object that represents the many-to-many relationship between Product Configuration Flow, Product, and Product Classification. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the Product Configuration Flow is assigned to the primary product or classification, or to dynamic components added within a bundle.Valid values are:DynamicAdditionFlowPrimaryConfiguratorFlowThe default value is PrimaryConfiguratorFlow. Available in API version 65.0 and later. |
| ProductClassificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product classification associated with the Product Configuration Flow.This field is a relationship field.Relationship NameProductClassificationRelationship TypeLookupRefers ToProductClassification |
| ProductConfigurationFlowId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Product Configuration Flow associated with the Product Classification or Product.This field is a relationship field.Relationship NameProductConfigurationFlowRelationship TypeLookupRefers ToProductConfigurationFlow |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the Product Configuration Flow.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
