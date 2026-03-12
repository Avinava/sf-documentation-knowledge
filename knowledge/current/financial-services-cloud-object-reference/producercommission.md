---
title: "ProducerCommission"
domain: financial-services-cloud-object-reference
topic: producercommission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.454Z
estimatedTokens: 1923
keywords: [ProducerCommission, producer's, commission, insurance, policy, calculated, commissionable, transactions, populated, external, system, API, version, 51.0, later]
---

# ProducerCommission

> Represents a producer's commission for an insurance policy. The commission can
      be calculated from the commissionable transactions or can be populated from an external
      system. This object is available in API version 51.0 and later.

# ProducerCommission

Represents a producer's commission for an insurance policy. The commission can be calculated from the commissionable transactions or can be populated from an external system. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated commission amount for the insurance policy transaction. |
| CommissionStatementLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Commission Statement Line Item corresponds to the Producer CommissionThis field is a relationship field.Relationship NameCommissionStatementLineItemRefers ToCommissionStatementLineItem |
| CommissionableAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount on which the commission is applied. This can be a transaction amount or a portion of the premium. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insured item for which the commission was calculated. |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the policy coverage for which the commission was calculated. |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy for which the commission was calculated. |
| InsurancePolicyTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction for which the commission record was created. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the producer commission. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| PaymentDatetime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the commission was paid. |
| ProducerAllocationAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue amount to be received by the producer associated with the producer commission of Book of Business type. |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe producer, broker, brokerage, or other user who receives the commission. |
| ProducerSplitArngLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Producer Split Arrangement Line Item corresponds to the Producer CommissionThis field is a relationship field.Relationship NameProducerSplitArngLineItemRefers ToProducerSplitArngLineItem |
| ProducerSplitAssignmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Producer Split Assignment corresponds to the Producer CommissionThis field is a relationship field.Relationship NameProducerSplitAssignmentRefers ToProducerSplitAssignment |
| ProducerSplitRoleAssignmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRelated Producer Split Role AssignmentThis field is a relationship field.Relationship NameProducerSplitRoleAssignmentRefers ToProducerSplitRoleAssignment |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system from which the producer commission record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the producer commission record in the source system. This field is unique within your organization. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the commission payment.Possible values are:DisputedPaidPendingReversed |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of commission paid to a producer, account, or contact for a commissionable transaction.Possible values are:AdvanceBonusChargebackCommissionContingent Commission |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProducerCommissionChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[ProducerCommissionFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProducerCommissionHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProducerCommissionOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProducerCommissionShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProducerCommissionChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ProducerCommissionFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ProducerCommissionHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProducerCommissionOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProducerCommissionShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
