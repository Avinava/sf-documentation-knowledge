---
title: "ApplicationFormProduct"
domain: financial-services-cloud-object-reference
topic: applicationformproduct
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:29.434Z
estimatedTokens: 1611
keywords: [ApplicationFormProduct, junction, application, product, requested, applicant, API, version, 59.0, later, Calls, Associated, Objects]
---

# ApplicationFormProduct

> Represents a junction between the application and the product requested by an
         applicant. This object is available in API version 59.0 and later.

# ApplicationFormProduct

Represents a junction between the application and the product requested by an applicant. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicantVisibleStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the application form product that is visible to the applicant.Possible values are:ApplicationApprovedAwaiting SignatureContract GenerationDocument UploadIn ReviewLoan BookedNeed More InfoRejectedSignature CompleteSubmitted |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe application that's submitted for a product request.This field is a relationship field.Relationship NameApplicationFormRelationship TypeLookupRefers ToApplicationForm |
| DisbursementMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the method of disbursement for the loan amount.Possible values are:CheckDirect Deposit |
| HasAutomaticPayment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the applicant opted in for automatic payments (true) or not (false).The default value is false. |
| HasElectronicStatement | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the customer opted in for electronic statements (true) or not (false).The default value is false. |
| IsAtmCardRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an ATM card is required (true) or not (false).The default value is false. |
| IsCheckbookRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if a checkbook is required (true) or not (false) for the application form product.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of loan being requested.Possible values are:Personal Loan |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Application Form Product record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| OwnershipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of ownership for the application form product.Possible values are:JointSingle |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the application form product.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount requested as part of the application. |
| RequestedTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe length of the loan in months. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the stage of the application form product that is submitted by the applicant.Possible values are:Auto ApprovedAuto RejectedAwaiting SignatureBook to CoreContract GenerationCustomer ApprovedCustomer RejectedIn ReviewIntakeNeed More InfoSignature CompleteSubmittedUnderwriter ApprovedUnderwriter Rejected |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormproductChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicationFormProductHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ApplicationFormProductOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ApplicationFormProductShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ApplicationFormproductChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ApplicationFormProductHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ApplicationFormProductOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ApplicationFormProductShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
