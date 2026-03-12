---
title: "ProgramRebateTypeProduct"
domain: channel-revenue-management-dev-guide
topic: programrebatetypeproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.591Z
estimatedTokens: 209
keywords: [ProgramRebateTypeProduct, junction, program, rebate, product, API, version, 53.0, later, Calls]
---

# ProgramRebateTypeProduct

> Represents a junction between a program rebate type and a product. This
      object is available in API version 53.0 and later.

# ProgramRebateTypeProduct

Represents a junction between a program rebate type and a product. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the record.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProgramRebateTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe program rebate type associated with the product.This is a relationship field.Relationship NameProgramRebateTypeRelationship TypeLookupRefers ToProgramRebateType |
