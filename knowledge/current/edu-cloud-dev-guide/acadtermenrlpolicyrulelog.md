---
title: "AcadTermEnrlPolicyRuleLog"
domain: edu-cloud-dev-guide
topic: acadtermenrlpolicyrulelog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.818Z
estimatedTokens: 1049
keywords: [AcadTermEnrlPolicyRuleLog, log, policy, rule, calculation, runs, academic, term, enrollment, API, version, 64.0, later, Calls, Associated]
---

# AcadTermEnrlPolicyRuleLog

> Represents the log of the policy rule calculation runs for an academic term
         enrollment. This object is available in API version 64.0 and later.

# AcadTermEnrlPolicyRuleLog

Represents the log of the policy rule calculation runs for an academic term enrollment. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTermEnrollmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Academic Term Enrollment associated with the Academic Term Enrollment Policy Rule Log.This field is a relationship field.Relationship NameAcademicTermEnrollmentRelationship TypeMaster-detailRefers ToAcademicTermEnrollment (the master object) |
| AcademicTermId | TypereferencePropertiesFilter, Group, SortDescriptionThe Academic Term associated with the Academic Term Enrollment Policy Rule Log.This field is a relationship field.Relationship NameAcademicTermRefers ToAcademicTerm |
| CalculatedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the result is calculated. |
| CalculatedNumericResult | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numeric result that's calculated using the Policy Rule. |
| CalculatedTextResult | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text result that's calculated using the Policy Rule. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency associated with the Academic Term Enrollment Policy Rule Log.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| JobIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the job that calculates the result. |
| JobType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of job that's run using the policy rule.Possible values are:AdhocBatch |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Academic Term Enrollment Policy Rule Log. |
| PolicyRuleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Policy Rule expression set associated with the Academic Term Enrollment Policy Rule Log.This field is a relationship field.Relationship NamePolicyRuleRefers ToExpressionSet |
| PublishedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the result is published. |
| Scope | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the scope of the Academic Term Enrollment Policy Rule Log.Possible values are:HoldsAndBlock—Holds and BlockRegistrationTimeline—Registration TimelineTermGpa—Term GPA |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the result is calculated or published.Possible values are:CalculatedPublished |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AcadTermEnrlPolicyRuleLogHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AcadTermEnrlPolicyRuleLogHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
