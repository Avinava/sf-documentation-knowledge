---
title: "FinancialGoal"
domain: financial-services-cloud-object-reference
topic: financialgoal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.269Z
estimatedTokens: 1539
keywords: [FinancialGoal, Financial, Goal, standard, Salesforce, person, account, API, version, 59.0, later, Calls, Associated, Objects]
---

# FinancialGoal

> This Financial Goal object is a standard Salesforce object. It represents a
         financial goal for a person account. This object is available in API version 59.0 and
      later.

# FinancialGoal

This Financial Goal object is a standard Salesforce object. It represents a financial goal for a person account. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current amount saved toward the goal. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the category of the goal. This field is available in API version 60.0 and later.Possible values are:ExpenditureCapital |
| CompletionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial goal is reached. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the financial goal. |
| EstimatedSuccessPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated success percentage of the financial goal. This field is available in API version 60.0 and later. |
| FinancialPlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.The ID of the financial plan associated with the financial goal. This field is available in API version 60.0 and later.Relationship NameFinancialPlanRelationship TypeLookupRefers ToFinancialPlan |
| InitialAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe initial amount saved toward the goal. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the financial goal. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the goal.Possible values are:HIGHLOWMEDIUM |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the financial goal in an external system. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the financial goal. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the financial goal.Possible values are:COMPLETEDIN_PROGRESSNOT_STARTED |
| TargetAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount required to reach the goal. |
| TargetDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial goal is expected to be reached. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of financial goal.Possible values are:EducationEmergencyHomeOtherPay off DebtRetirementVacationVehicle |
| WithdrawalFrequency | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe frequency at which the money is withdrawn. This field is available in API version 60.0 and later.Possible values are:MonthlyWeeklyAnnually |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[financialgoalChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinancialGoalHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FinancialGoalOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FinancialGoalShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- financialgoalChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinancialGoalHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- FinancialGoalOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FinancialGoalShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
