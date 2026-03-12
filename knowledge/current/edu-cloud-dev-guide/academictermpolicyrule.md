---
title: "AcademicTermPolicyRule"
domain: edu-cloud-dev-guide
topic: academictermpolicyrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.791Z
estimatedTokens: 717
keywords: [AcademicTermPolicyRule, junction, Academic, Term, Expression, objects, policy, rule, API, version, 63.0, later, Calls, Associated]
---

# AcademicTermPolicyRule

> Represents a junction between Academic Term and Expression Set objects where
         an expression set is used as a policy rule for the academic term. This object is
      available in API version 63.0 and later.

# AcademicTermPolicyRule

Represents a junction between Academic Term and Expression Set objects where an expression set is used as a policy rule for the academic term. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTermId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent Academic Term associated with the Policy Rule.This field is a relationship field.Relationship NameAcademicTermRelationship TypeMaster-detailRefers ToAcademicTerm (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency associated with the Academic Term Policy Rule.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Academic Term Policy Rule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the Academic Term Policy Rule. |
| PolicyRuleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Expression Set that's used as the policy rule for the associated Academic Term.This field is a relationship field.Relationship NamePolicyRuleRefers ToExpressionSet |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the usage type of the Academic Term Policy Rule.Possible values are:Bre—DefaultGpaCalculation—GPA CalculationThe default value is Bre. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AcademicTermPolicyRuleHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AcademicTermPolicyRuleHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
