---
title: "BenefitScheduleAssignment"
domain: psc-api
topic: benefitscheduleassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.361Z
estimatedTokens: 506
keywords: [BenefitScheduleAssignment, junction, Benefit, Schedule, Assignment, objects, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# BenefitScheduleAssignment

> Represents the junction between Benefit Schedule and Benefit Assignment
         objects. This object is available in API version 59.0 and later.

# BenefitScheduleAssignment

Represents the junction between Benefit Schedule and Benefit Assignment objects. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| BenefitAssignmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe benefit assignment associated with the benefit schedule.This field is a relationship field.Relationship NameBenefitAssignmentRelationship TypeLookupRefers ToBenefitAssignment |
| BenefitScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe benefit schedule to which benefit participants are being assigned.This field is a relationship field.Relationship NameBenefitScheduleRelationship TypeMaster-DetailRefers ToBenefitSchedule |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the participant's assignment to the benefit schedule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit schedule assignment. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the participant's assignment to the benefit schedule. |
