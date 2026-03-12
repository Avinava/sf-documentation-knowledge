---
title: "BenefitParameterValue"
domain: loyalty
topic: benefitparametervalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.888Z
estimatedTokens: 364
keywords: [BenefitParameterValue, runtime, that's, executing, flow, benefit, action, API, version, 52.0, later, Calls]
---

# BenefitParameterValue

> Represents the runtime value of a parameter that's used when executing a flow
         for benefit action. This object is available in API version 52.0 and later.

# BenefitParameterValue

Represents the runtime value of a parameter that's used when executing a flow for benefit action. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitActionParameterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit action parameter value associated with the benefit action.This is a relationship field.Relationship NameBenefitActionParameterRelationship TypeLookupRefers ToBenefitActionParameter |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe benefit associated with the benefit action.This is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit parameter value. |
| ParameterValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pre-defined values of the parameter. |
