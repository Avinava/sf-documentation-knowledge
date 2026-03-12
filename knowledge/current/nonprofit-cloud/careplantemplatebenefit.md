---
title: "CarePlanTemplateBenefit"
domain: nonprofit-cloud
topic: careplantemplatebenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.246Z
estimatedTokens: 461
keywords: [CarePlanTemplateBenefit, junction, care, plan, template, benefit, stores, API, version, 55.0, later, Calls]
---

# CarePlanTemplateBenefit

> Represents a junction between a care plan template and a benefit. This object
         stores the benefit details of a care plan. This object is available in API version
      55.0 and later.

# CarePlanTemplateBenefit

Represents a junction between a care plan template and a benefit. This object stores the benefit details of a care plan. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the care plan template benefit record.This is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| CarePlanTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe care plan template associated with the care plan template benefit.This is a relationship field.Relationship NameCarePlanTemplateRelationship TypeMaster-DetailRefers ToCarePlanTemplate |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care plan template benefit record. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the care plan template benefit.Possible values are:HighLowMedium |
