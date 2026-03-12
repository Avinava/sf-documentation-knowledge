---
title: "SupplementalCompensation"
domain: eu-developer-guide
topic: supplementalcompensation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.394Z
estimatedTokens: 597
keywords: [SupplementalCompensation, meals, equivalent, gifts, awarded, service, worker, according, labor, laws, company, policies, API, version, 61.0]
---

# SupplementalCompensation

> Represents the meals or equivalent gifts awarded to the field service worker
         according to the labor laws and company policies. This object is available in API
      version 61.0 and later.

# SupplementalCompensation

Represents the meals or equivalent gifts awarded to the field service worker according to the labor laws and company policies. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompensationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the service worker earned the supplemental compensation. |
| Cost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost of the supplemental compensation. |
| DeliveryType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method used to deliver the supplemental compensation to the field service worker.Possible values are:On Pay CheckProvided on siteURL |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the compensation. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the coupon, URL, or gift receipt expires. |
| GiftUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link to the redeemable digital supplemental compensation. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the supplemental compensation earned by the field service worker. |
| ServiceResourceCostRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource cost rule that calculates the cost of the supplemental compensation.This field is a relationship field.Relationship NameServiceResourceCostRuleRefers ToServiceResourceCostRule |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource who receives the supplemental compensation.This field is a relationship field.Relationship NameServiceResourceRefers ToServiceResource |
| TimesheetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe timesheet associated with the shift in which the supplemental compensation was calculated or granted.This field is a relationship field.Relationship NameTimesheetRefers ToTimeSheet |
