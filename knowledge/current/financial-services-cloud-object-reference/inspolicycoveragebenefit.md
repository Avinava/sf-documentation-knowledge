---
title: "InsPolicyCoverageBenefit"
domain: financial-services-cloud-object-reference
topic: inspolicycoveragebenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.582Z
estimatedTokens: 974
keywords: [InsPolicyCoverageBenefit, insurance, policy, coverage, benefits, API, version, later, Calls, Associated, Objects]
---

# InsPolicyCoverageBenefit

> Represents information about the insurance policy coverage benefits. This
      object is available in API version 62 and later.

# InsPolicyCoverageBenefit

Represents information about the insurance policy coverage benefits. This object is available in API version 62 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitTermGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe grouping of similar benefits that are part of the insurance policy coverage.This field is a relationship field.Relationship NameBenefitTermGroupRefers ToProductComponentGroup |
| BenefitTermId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe terms for providing the benefit ithat's part of the insurance policy coverage.This field is a relationship field.Relationship NameBenefitTermRefers ToProduct2 |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| InsPolicyCoverageNetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe policy coverage network associated with the benefit.This field is a relationship field.Relationship NameInsPolicyCoverageNetworkRefers ToInsPolicyCoverageNetwork |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance policy coverage that's associated with the benefit.This field is a relationship field.Relationship NameInsurancePolicyCoverageRelationship TypeMaster-detailRefers ToInsurancePolicyCoverage (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the insurance policy coverage benefit. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsPolicyCoverageBenefitChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsPolicyCoverageBenefitHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsPolicyCoverageBenefitChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsPolicyCoverageBenefitHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
