---
title: "Dispute"
domain: financial-services-cloud-object-reference
topic: dispute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:29.946Z
estimatedTokens: 1416
keywords: [Dispute, involves, multiple, disputed, transactions, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# Dispute

> Represents the details of a dispute that involves one or multiple disputed
         transactions. This object is available in API version 59.0 and later.

# Dispute

Represents the details of a dispute that involves one or multiple disputed transactions. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

These fields are available if the add-on license for Financial Services Cloud is enabled.

-   ActualAmount
-   ApprovedAmount
-   FinancialAccount
-   DisputedAmount
-   IsCardCancellationRequested
-   IsCardReissueRequested

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Person Account associated with the dispute.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActualAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of all associated transactions. |
| ApprovedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that's approved to be credited to the customer. |
| AssessmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Assessment associated with the dispute.This field is a relationship field.Relationship NameAssessmentRelationship TypeLookupRefers ToAssessment |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Case associated with the dispute. This is the related case to track the lifecycle of the dispute.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the dispute. |
| DisputeSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the subtype of dispute.Possible values are:Account Debited but No Cash Dispensed by ATMCharged Multiple TimesDefective ProductDisclosed OTP, Card, or Account DetailsFailed TransactionFraudulent TransactionLost or Stolen CardOutstanding Charge on Original Payment MethodOverchargedProducts or Services Not as DescribedRefund Not ProcessedUndelivered Product or Service |
| DisputeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of dispute.Possible values are:Processing ErrorConsumer DisputeFraud |
| DisputedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount claimed in the dispute. |
| IsCardCancellationRequested | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether card cancellation was requested (true) or not (false).The default value is false. |
| IsCardReissueRequested | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether card reissue was requested (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Dispute record |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReceivedDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the dispute was reported to the bank. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the disputed transaction.Possible values are:In ReviewInvalidNo longer disputedResolvedSettledSubmitted |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DisputeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DisputeOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DisputeShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DisputeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DisputeOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DisputeShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
