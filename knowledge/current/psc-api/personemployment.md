---
title: "PersonEmployment"
domain: psc-api
topic: personemployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.142Z
estimatedTokens: 1310
keywords: [PersonEmployment, person’s, employment, Calls, Special, Access, Rules, Associated, Objects]
---

# PersonEmployment

> Represents information about a person’s employment.

# PersonEmployment

Represents information about a person’s employment.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object, you must have the Public Sector Access permission set or the Public Sector Access permission set license.

## Fields

| Field | Details |
| --- | --- |
| AnnualIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual income of the person. |
| EmployerAddress | TypeaddressPropertiesFilter, NillableDescriptionThe complete address of the employer. |
| EmployerPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmployer's phone number. |
| EmploymentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the employment status with the employer.Possible values are:EmployedRetiredSelf-EmployedUnemployed |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date of employment at this job. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| Occupation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the person’s occupation.Possible values are:Actor or EntertainerArchitect or Urban PlannerArtistBusiness (Clerical)Business Executive (Management, Administrator)Business Owner or ProprietorBusiness Salesperson or BuyerClergy (Minister, Priest)Clergy (Other Religious)Clinical PsychologistCollege Administrator or StaffCollege TeacherComputer Programmer or AnalystConservationist or ForesterDentist (Including Orthodontist)Dietitian or NutritionistEngineerFarmer or RancherForeign Service Worker (Including Diplomat)Homemaker (Full-Time)Interior Decorator (Including Designer)Lab Technician or HygienistLaborerLaw Enforcement OfficerLawyer (Attorney) or JudgeMilitary Service (Career)Musician (Performer, Composer)NurseOptometristOtherPharmacistPhysicianPolicymaker or GovernmentSchool CounselorSchool Principal or SuperintendentScientific ResearcherSkilled TradesSocial, Welfare, or Recreation WorkerTeacher or Administrator (Elementary)Teacher or Administrator (Secondary)Therapist (Physical, Occupational, Speech)VeterinarianWriter or Journalist |
| Position | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last position of the person at this job. |
| RelatedPersonId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person associated with the employment.This field is a polymorphic relationship field.Relationship NameRelatedPersonRelationship TypeLookupRefers ToAccount, Contact |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of employment at this job. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PersonEmploymentChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

[PersonEmploymentFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PersonEmploymentHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PersonEmploymentShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PersonEmploymentChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- PersonEmploymentFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PersonEmploymentHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PersonEmploymentShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
