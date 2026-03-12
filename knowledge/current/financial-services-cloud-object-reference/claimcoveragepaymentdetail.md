---
title: "ClaimCoveragePaymentDetail"
domain: financial-services-cloud-object-reference
topic: claimcoveragepaymentdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.738Z
estimatedTokens: 1691
keywords: [ClaimCoveragePaymentDetail, claim, coverage, amount, paid, recipient, loss, expense, payment, API, version, 52.0, later, Calls, Associated]
---

# ClaimCoveragePaymentDetail

> Represents the claim coverage amount that must be paid to a recipient for a loss or an expense payment. This object is available in API version 52.0 and later.

# ClaimCoveragePaymentDetail

Represents the claim coverage amount that must be paid to a recipient for a loss or an expense payment. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the insurance carrier intends to pay for a loss or benefit after making adjustments for deductibles, copay, or coinsurance. |
| BenefitName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the benefit associated with the claim coverage payment detail. |
| ClaimCoverageId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Claim Coverage associated with the Claim Coverage Payment Detail.This field is a relationship field.Relationship NameClaimCoverageRelationship TypeLookupRefers ToClaimCoverage |
| ClaimCoverageReserveDetailId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Claim Coverage Reserve Detail associated with the Claim Coverage Payment Detail.This field is a relationship field.Relationship NameClaimCoverageReserveDetailRelationship TypeLookupRefers ToClaimCoverageReserveDetail |
| ClaimParticipantRecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Claim Participant Recipient associated with the Claim Coverage Payment Detail.This field is a relationship field.Relationship NameClaimParticipantRecipientRelationship TypeLookupRefers ToClaimParticipant |
| ClaimPaymentSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Claim Payment Summary issued to the Claim Participant Recipient for the Claim Coverage Payment Detail.This field is a relationship field.Relationship NameClaimPaymentSummaryRelationship TypeLookupRefers ToClaimPaymentSummary |
| ClaimPayoutPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Claim Payout Plan associated with the Claim Coverage Payment Detail.This field is a relationship field.Relationship NameClaimPayoutPlanRelationship TypeLookupRefers ToClaimPayoutPlan |
| ClaimedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount claimed by the claimant or service provider to pay for a loss or benefit. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:AED—UAE DirhamCAD—Canadian DollarGBP—British PoundJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the claim coverage. |
| ExGratiaAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount paid over the remaining limit amount.Available in API version 66.0 and later. |
| ExGratiaLimitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count over the remaining limit count.Available in API version 66.0 and later. |
| ExGratiaReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the ex gratia payment.Available in API version 66.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| LimitUnitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit count that the payment detail represents. |
| LimitUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the unit of measure that the payment detail represents.Possible values are:DaysVisits |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the claim coverage payment detail. |
| OperationNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe operation number that's assigned to the record.Available in API version 66.0 and later. |
| PaymentRequestLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Payment Request Line associated with the Claim Coverage Payment Detail.This field is a relationship field.Relationship NamePaymentRequestLineRelationship TypeLookupRefers ToPaymentRequestLine |
| PaymentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the payment status of claim coverage payment detail. This field is available from API version 65.0 and later.Possible values are:CancelledDeletedDraftPaid |
| ScheduledPaymentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the payment is scheduled. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of claim coverage payment detail.Possible values are:Authority ApprovedAuthority DeniedCancelledClosed W/O PayNewOpenPaidPayment PendingPending AuthorityStopped |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of claim coverage payment detail.Possible values are:ExpenseLoss |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimCoveragePaymentDetailChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

## Related Topics

- ClaimCoveragePaymentDetailChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
