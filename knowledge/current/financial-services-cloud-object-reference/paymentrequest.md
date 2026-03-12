---
title: "PaymentRequest"
domain: financial-services-cloud-object-reference
topic: paymentrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.355Z
estimatedTokens: 1995
keywords: [PaymentRequest, financial, compensation, goods, services, provided, third, party, API, version, 54.0, later, Calls, Special, Access]
---

# PaymentRequest

> Represents a financial compensation request for goods or services provided by
         a third party. This object is available in API version 54.0 and later.

# PaymentRequest

Represents a financial compensation request for goods or services provided by a third party. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if the add-on license for Claims Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim associated with the payment request.This is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| DueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe due date of the payment request. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of services represented in the payment request. |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility associated with the payment request.This is a polymorphic relationship field.Relationship NameFacilityRelationship TypeLookupRefers ToAccount, Location |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy associated with the payment request.This is a relationship field.Relationship NameInsurancePolicyRelationship TypeLookupRefers ToInsurancePolicy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Payment Request. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReceivedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the recipient received the payment request. |
| ReceivedMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method in which the payment request was received.Possible values include:Electronic SubmissionPaper Mail |
| ReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal unique identifier from the submitting party, such as an invoice number. |
| RemittanceAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives the remittance payment for the services.This is a polymorphic relationship field.Relationship NameRemittanceAccountRelationship TypeLookupRefers ToAccount, InsurancePolicyParticipant |
| ServiceProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service provider associated with the payment request.This is a polymorphic relationship field.Relationship NameServiceProviderRelationship TypeLookupRefers ToAccount, Contact |
| ServiceRecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives the services in the payment request.This is a polymorphic relationship field.Relationship NameServiceRecipientRelationship TypeLookupRefers ToAccount, Contact, InsurancePolicyParticipant |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of services represented in the payment request. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the payment request.Possible values include:PaidReceived |
| SubmissionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of payment request submission, such as an invoice from a service provider.Possible values include:InvoiceOnline Submission |
| SubmittedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the service provider submitted the payment request. |
| SubmittingAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing account that submits the payment to the service recipient.This is a relationship field.Relationship NameSubmittingAccountRelationship TypeLookupRefers ToAccount |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount that is adjusted, such as the collection of a copay onsite.This is a calculated field. |
| TotalRequestedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount requested for reimbursement.This is a calculated field. |
| TotalServiceAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the services, such as the total services billed.This is a calculated field. |

## Usage

Use this object to process inbound requests for payments, such as an inbound invoice submitted to an insurance carrier.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentRequestChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

[PaymentRequestFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PaymentRequestHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PaymentRequestOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PaymentRequestShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PaymentRequestChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PaymentRequestFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PaymentRequestHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PaymentRequestOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PaymentRequestShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
