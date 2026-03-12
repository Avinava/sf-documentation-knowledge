---
title: "ProgramRebateTypeReference"
domain: channel-revenue-management-dev-guide
topic: programrebatetypereference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.596Z
estimatedTokens: 348
keywords: [ProgramRebateTypeReference, association, contract, opportunity, any, eligible, standard, custom, rebate, API, version, 52.0, later, Calls]
---

# ProgramRebateTypeReference

> Represents the association between the contract, opportunity, or any eligible
         standard or custom object, and rebate type. This object is available in API version
      52.0 and later.

# ProgramRebateTypeReference

Represents the association between the contract, opportunity, or any eligible standard or custom object, and rebate type. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ProgramRebateTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe program rebate type associated with the record.This is a relationship field.Relationship NameProgramRebateTypeRelationship TypeLookupRefers ToProgramRebateType |
| ProgramRebateTypeSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source program rebate type associated to the contract, opportunity, or quote, or any other eligible standard or custom object.This is a relationship field.Relationship NameProgramRebateTypeSrcRelationship TypeLookupRefers ToProgramRebateType |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contract, opportunity, quote, or any other eligible standard or custom object associated with the program rebate type.This is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToContract, Opportunity, Order, SalesAgreement |
