---
title: "InsuranceContract"
domain: financial-services-cloud-object-reference
topic: insurancecontract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.642Z
estimatedTokens: 1522
keywords: [InsuranceContract, insurance-specific, contract, Extension, specifically, insurance, industry, API, version, 55.0, later, Calls, Associated, Objects]
---

# InsuranceContract

> Represents insurance-specific contract information. Extension of Contract object, specifically for the insurance industry. This object is available in API version 55.0 and later.

# InsuranceContract

Represents insurance-specific contract information. Extension of Contract object, specifically for the insurance industry. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BrokerageAgencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe brokerage agency associated with the insurance contract.This is a relationship field.Relationship NameBrokerageAgencyRelationship TypeLookupRefers ToProducer |
| BusinessLicenseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAgency license associated with the insurance contract.This is a relationship field.Relationship NameBusinessLicenseRelationship TypeLookupRefers ToBusinessLicense |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract associated with the insurance contract.This is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| EnrollmentCensusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe enrollment group census associated with the insurance contract used during enrollment.This is a relationship field.Relationship NameEnrollmentCensusRelationship TypeLookupRefers ToGroupCensus |
| EnrollmentEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when enrollment ends for the plans in the insurance contract. |
| EnrollmentStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when enrollment starts for the plans in the insurance contract. |
| EnrollmentWaitingPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe waiting period in days after joining date before enrollment can begin. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the insurance contract. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner associated with the insurance contract.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe producer or broker associated with the insurance contract.This is a relationship field.Relationship NameProducerRelationship TypeLookupRefers ToProducer |
| RecordSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the source application context for the record.Available in API version 66.0 and later.Possible values are:DigitalInsuranceNull |
| UnderwriterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe underwriter associated with the insurance contract.This is a relationship field.Relationship NameUnderwriterRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsuranceContractChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsuranceContractFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsuranceContractHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsuranceContractOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsuranceContractShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsuranceContractChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsuranceContractFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InsuranceContractHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsuranceContractOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InsuranceContractShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
