---
title: "PaymentRequest"
domain: psc-api
topic: paymentrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.108Z
estimatedTokens: 1744
keywords: [PaymentRequest, financial, compensation, goods, services, provided, third, party, API, version, 60.0, later, Calls, Special, Access]
---

# PaymentRequest

> Represents a financial compensation request for goods or services provided by
         a third party. This object is available in API version 60.0 and later.

# PaymentRequest

Represents a financial compensation request for goods or services provided by a third party. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim associated with the payment request.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| DueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe due date of the payment request. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of services represented in the payment request. |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility associated with the payment request.This field is a polymorphic relationship field.Relationship NameFacilityRelationship TypeLookupRefers ToAccount, HealthcareFacility, Location |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy associated with the payment request.This field is a relationship field.Relationship NameInsurancePolicyRelationship TypeLookupRefers ToInsurancePolicy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the payment request. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReceivedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the recipient received the payment request. |
| ReceivedMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method in which the payment request was received.Possible values are:Electronic SubmissionPaper Mail |
| ReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal unique identifier from the submitting party, such as an invoice number. |
| RemittanceAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives the remittance payment for the services.This field is a polymorphic relationship field.Relationship NameRemittanceAccountRelationship TypeLookupRefers ToAccount |
| ServiceProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service provider associated with the payment request.This field is a polymorphic relationship field.Relationship NameServiceProviderRelationship TypeLookupRefers ToAccount, Contact, HealthcareProvider |
| ServiceRecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives the services in the payment request.This field is a polymorphic relationship field.Relationship NameServiceRecipientRelationship TypeLookupRefers ToAccount, Contact |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of services represented in the payment request. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the payment request.Possible values are:PaidReceived |
| SubmissionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of payment request submission, such as an invoice from a service provider.Possible values are:InvoiceOnline Submission |
| SubmittedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the service provider submitted the payment request. |
| SubmittingAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing account that submits the payment to the service recipient.This field is a relationship field.Relationship NameSubmittingAccountRelationship TypeLookupRefers ToAccount |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount that is adjusted, such as the collection of a copay onsite.This field is a calculated field. |
| TotalRequestedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount requested for reimbursement.This field is a calculated field. |
| TotalServiceAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the services, such as the total services billed.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentRequestFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PaymentRequestHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PaymentRequestOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PaymentRequestShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PaymentRequestFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PaymentRequestHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PaymentRequestOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PaymentRequestShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
