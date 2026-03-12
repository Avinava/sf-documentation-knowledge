---
title: "InsBnftEligDefinition"
domain: financial-services-cloud-object-reference
topic: insbnfteligdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.506Z
estimatedTokens: 1177
keywords: [InsBnftEligDefinition, employee, eligibility, benefit, that's, offered, employer, API, version, later, Calls, Associated, Objects]
---

# InsBnftEligDefinition

> Represents employee eligibility information for a benefit that's offered by an
         employer. This object is available in API version 61 and later.

# InsBnftEligDefinition

Represents employee eligibility information for a benefit that's offered by an employer. This object is available in API version 61 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe client account that's associated with the ruleThis field is a relationship field.Relationship NameAccountRelationship TypeMaster-detailRefers ToAccount (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from when the eligibility rule is active. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the eligibility rule becomes inactive. |
| EligibilityInitiationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies when the benefit coverage of the employee starts.Possible values are:Date of HireFirst of the Month Following 30 DaysFirst of the Month Following 60 DaysFirst of the Month Following Date of HireHire Month + 1 MonthHire Month startYear Start |
| EligibilityTerminationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies when the benefit coverage of the employee ends.Possible values are:Date of TerminationEnd of Month following Date of TerminationTermination Month + 1 month endTermination Month EndYear End |
| EmployeeType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of employee the rule applies to.Possible values are:Contract BasedFull TimeFull-Time 30 Hours per WeekFull-Time 32 Hours per WeekPart Time |
| IsChildEligible | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the employee's children are eligible for the coverage or not.The default value is false. |
| IsPartnerEligible | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the employee's spouse or domestic partner is eligible for the coverage or not.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the rule. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsBnftEligDefinitionChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsBnftEligDefinitionHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsBnftEligDefinitionChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsBnftEligDefinitionHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
