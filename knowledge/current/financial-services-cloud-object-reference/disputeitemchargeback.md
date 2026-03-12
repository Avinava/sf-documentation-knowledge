---
title: "DisputeItemChargeback"
domain: financial-services-cloud-object-reference
topic: disputeitemchargeback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.002Z
estimatedTokens: 1691
keywords: [DisputeItemChargeback, claim, chargeback, created, card, issuer, transaction, that's, disputed, API, version, 61.0, later, Calls, Associated]
---

# DisputeItemChargeback

> Represents the claim and chargeback created by the card issuer for a
         transaction that's being disputed. This object is available in API version 61.0 and
      later.

# DisputeItemChargeback

Represents the claim and chargeback created by the card issuer for a transaction that's being disputed. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChargebackAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount claimed by the issuer using a chargeback for the disputed transaction. Available in version 62.0 and later. |
| ChargebackAmountCurrency | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe currency in which the chargeback amount is credited to the cardholder. Available in version 62.0 and later. |
| ChargebackCreatedData | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTThe date when the chargeback was created for a disputed transaction. Available in version 62.0 and later. |
| ChargebackIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the chargeback assigned by the dispute system. |
| ChargebackReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique reference number that's associated with the chargeback process, enabling the issuer to track the chargeback throughout its lifecycle, including pre-arbitration case. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the chargeback request provided by the member or the entity filing the chargeback. |
| DisputeItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Dispute Item associated with the chargeback.This field is a relationship field.Relationship NameDisputeItemRelationship TypeMaster-detailRefers ToDisputeItem (the master object) |
| DisputeReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe dispute reason associated with the chargeback.This field is a relationship field.Relationship NameDisputeReasonRelationship TypeLookupRefers ToDisputeReason |
| DocumentStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of a document associated with the chargeback. |
| IsDocumentRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a supporting document is required (true) or not (false) for dispute resolution.The default value is false. |
| IsPartialChargeback | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the cardholder has disputed only a portion of the transaction amount (true) or not (false).The default value is false. |
| IsRefundReceived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the cardholder received the expected refund (true) or not (false) for the chargeback.The default value is false. |
| RejectReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for rejecting the chargeback by the dispute system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of chargeback.Possible values are:ClosedNot SubmittedRejectedRejected By MerchantSubmitted |
| StatusUpdateDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the chargeback status was last updated. The timestamp is represented in the ISO 8601 format. |
| TransactionSettlementDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the transaction was completed and the funds were transferred between the parties involved. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of chargeback based on the dispute reason.Possible values are:ChargebackSecond Presentment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DisputeItemChargebackChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DisputeItemChargebackFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DisputeItemChargebackHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DisputeItemChargebackOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DisputeItemChargebackShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DisputeItemChargebackChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DisputeItemChargebackFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- DisputeItemChargebackHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DisputeItemChargebackOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DisputeItemChargebackShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
