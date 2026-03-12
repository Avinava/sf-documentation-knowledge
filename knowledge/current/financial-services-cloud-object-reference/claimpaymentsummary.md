---
title: "ClaimPaymentSummary"
domain: financial-services-cloud-object-reference
topic: claimpaymentsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.797Z
estimatedTokens: 696
keywords: [ClaimPaymentSummary, amount, money, that's, paid, claimant, claim, participant, cover, API, version, 51.0, later, Calls, Associated]
---

# ClaimPaymentSummary

> Represents the amount of money that's paid to a claimant or claim participant
      to cover a claim. This object is available in API version 51.0 and later.

# ClaimPaymentSummary

Represents the amount of money that's paid to a claimant or claim participant to cover a claim. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CancellationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which claim payment was canceled. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the claim associated with this claim payment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the claim payment summary. |
| PaymentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment. |
| PaymentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date when the claim payment was initiated. |
| PaymentIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier for the payment record assigned by the financial transaction system. |
| PaymentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the claim payment.Possible values are:CanceledPaidPending PaymentStopped |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[ClaimPaymentSummaryChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

## Related Topics

- ClaimPaymentSummaryChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
