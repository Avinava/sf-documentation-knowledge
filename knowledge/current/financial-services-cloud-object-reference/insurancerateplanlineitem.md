---
title: "InsuranceRatePlanLineItem"
domain: financial-services-cloud-object-reference
topic: insurancerateplanlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.800Z
estimatedTokens: 1131
keywords: [InsuranceRatePlanLineItem, insurance, rates, that's, provided, carriers, specific, employees, certain, tiers, under, policy, coverage, API, version]
---

# InsuranceRatePlanLineItem

> Represents insurance rates information that's provided by carriers specific to
         employees of certain tiers under certain policy or policy coverage. This object is
      available in API version 61 and later.

# InsuranceRatePlanLineItem

Represents insurance rates information that's provided by carriers specific to employees of certain tiers under certain policy or policy coverage. This object is available in API version 61 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EnrollmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of employees that are insured at a specific tier. |
| FeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fee amount for the insurance plan for a specific tier. |
| InsuranceRatePlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent insurance rate plan that's associated with the line item.This field is a relationship field.Relationship NameInsuranceRatePlanRelationship TypeMaster-detailRefers ToInsuranceRatePlan (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the line item. |
| PremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium amount for the insurance plan for a specific tier. |
| PremiumEqvAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium equivalent amount for the insurance plan for a specific tier. |
| Rate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate at which the employer contributes for the insurance for each employee. |
| RateBasisAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe basis amount that's used to calculate the insurance rate or fee value. |
| RateQualifierAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA per unit amount that's used to calculate premiums for benefit volume or covered payroll based plans. |
| Tier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the employee tier that's used to determine the plan rate.Possible values are:Employee & ChildrenEmployee & FamilyEmployee & SpouseEmployee Only |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsuranceRatePlanLineItemChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsuranceRatePlanLineItemHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsuranceRatePlanLineItemChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsuranceRatePlanLineItemHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
