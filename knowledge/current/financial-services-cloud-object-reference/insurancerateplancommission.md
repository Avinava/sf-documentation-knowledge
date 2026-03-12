---
title: "InsuranceRatePlanCommission"
domain: financial-services-cloud-object-reference
topic: insurancerateplancommission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.789Z
estimatedTokens: 1040
keywords: [InsuranceRatePlanCommission, commission, insurance, rate, plan, API, version, later, Calls, Associated, Objects]
---

# InsuranceRatePlanCommission

> Represents the commission details for the insurance rate plan. This object is
      available in API version 62 and later.

# InsuranceRatePlanCommission

Represents the commission details for the insurance rate plan. This object is available in API version 62 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AmountEndRange | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end range of amount for graded percent of premium. |
| AmountStartRange | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start range of amount for graded percent of premium. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Fee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe commission fee when Flat Fee or Capitated Fees are selected. |
| FeePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of fee to be earned as commission when flat percentage of fee is selected. |
| InsuranceRatePlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance rate plan associated with the commission.This field is a relationship field.Relationship NameInsuranceRatePlanRelationship TypeMaster-detailRefers ToInsuranceRatePlan (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the commission rate plan. |
| NumberEndRange | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end range of the grade volume, which represents the employee count. |
| NumberStartRange | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start range of the grade volume, which represents the employee count. |
| PremiumPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of premium to be earned as commission when graded percent of premium or flat percent of premium is selected. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of commission structure.Possible values are:Capitated FeeFlat FeeFlat Fee PercentageFlat Premium PercentageGraded Premium PercentageGraded Volume |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsuranceRatePlanCommissionChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsuranceRatePlanCommissionHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsuranceRatePlanCommissionChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsuranceRatePlanCommissionHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
