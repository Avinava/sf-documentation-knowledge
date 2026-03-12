---
title: "ProducerCommission"
domain: object-reference
topic: producercommission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.243Z
estimatedTokens: 1399
keywords: [ProducerCommission, producer's, commission, insurance, policy, calculated, commissionable, transactions, populated, external, system, API, version, 51.0, later]
---

# ProducerCommission

> Represents a producer's commission for an insurance policy. The commission
         can be calculated from the commissionable transactions or can be populated from an external
         system. This object is available in API version 51.0 and
      later.

# ProducerCommission

Represents a producer's commission for an insurance policy. The commission can be calculated from the commissionable transactions or can be populated from an external system. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommissionableAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount on which the commission is applied. This can be a transaction amount or a portion of the premium. |
| CommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated commission amount for the insurance policy transaction. |
| CommissionScheduleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the associated Commission Schedule, which is the commission calculation tied to the product or producer.This is a relationship field.Relationship NameCommissionScheduleRelationship TypeLookupRefers ToCommissionSchedule |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insured item for which the commission was calculated.This is a relationship field.Relationship NameInsurancePolicyAssetRelationship TypeLookupRefers ToInsurancePolicyAsset |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the policy coverage for which the commission was calculated.This is a relationship field.Relationship NameInsurancePolicyCoverageRelationship TypeLookupRefers ToInsurancePolicyCoverage |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy for which the commission was calculated.This is a relationship field.Relationship NameInsurancePolicyRelationship TypeLookupRefers ToInsurancePolicy |
| InsurancePolicyTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction for which the commission record was created.This is a relationship field.Relationship NameInsurancePolicyTransactionRelationship TypeLookupRefers ToInsurancePolicyTransaction |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaxCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum commission calculated for the product or producer for a commissionable event. Constrains the output from the commission schedule. |
| MinCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum commission calculated for the product or producer for a commissionable event. Constrains the output from the commission schedule. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the producer commission. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentProducerCommissionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe original commission record that was adjusted or modified.This is a relationship field.Relationship NameParentProducerCommissionRelationship TypeLookupRefers ToProducerCommission |
| PaymentDatetime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the commission was paid. |
| ProcessingProducerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe producer who performed the commissionable event.This is a relationship field.Relationship NameProcessingProducerRelationship TypeLookupRefers ToProducer |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe producer, broker, brokerage, or other user who receives the commission.This is a polymorphic relationship field.Relationship NameProducerRelationship TypeLookupRefers ToAccount, Contact, Producer |
| ProducerProductionCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe production code for the producer who performs the commissionable event. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system from which the producer commission record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the producer commission record in the source system. This field is unique within your organization. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the commission payment.Possible values are:DisputedPaidPendingReversed |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of commission paid to a producer, account, or contact for a commissionable transaction.Possible values are:AdvanceBonusChargebackCommissionContingent Commission |
