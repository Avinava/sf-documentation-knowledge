---
title: "InsPolicyBenefitEligibility"
domain: financial-services-cloud-object-reference
topic: inspolicybenefiteligibility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.566Z
estimatedTokens: 1137
keywords: [InsPolicyBenefitEligibility, insurance, eligibility, employee, belongs, specific, group, API, version, later, Calls, Associated, Objects]
---

# InsPolicyBenefitEligibility

> Represents information about insurance eligibility of an employee that belongs to
         a specific group class. This object is available in API version 61 and
      later.

# InsPolicyBenefitEligibility

Represents information about insurance eligibility of an employee that belongs to a specific group class. This object is available in API version 61 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| GroupClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group class of employees that's associated with the eligibility ruleThis field is a relationship field.Relationship NameGroupClassRefers ToGroupClass |
| InsBnftEligDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe eligibility rule that is applicable under specific insurance policy or policy coverage for specific group class of employees.This field is a relationship field.Relationship NameInsBnftEligDefinitionRefers ToInsBnftEligDefinition |
| InsPolicyBenefitEligibility | The insurance policy benefit that's associated with the eligibility rule. |
| InsurancePolicyCoverageId | The insurance policy coverage that's associated with the eligibility rule. |
| InsurancePolicyId | The insurance policy that's associated with the eligibility rule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the insurance policy benefit eligibility record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsPolicyBenefitEligibilityChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsPolicyBenefitEligibilityHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsPolicyBenefitEligibilityOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsPolicyBenefitEligibilityShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsPolicyBenefitEligibilityChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsPolicyBenefitEligibilityHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsPolicyBenefitEligibilityOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InsPolicyBenefitEligibilityShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
