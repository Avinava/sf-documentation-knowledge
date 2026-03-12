---
title: "InsurancePolicyParticipant"
domain: financial-services-cloud-object-reference
topic: insurancepolicyparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.742Z
estimatedTokens: 2314
keywords: [InsurancePolicyParticipant, junction, associates, InsurancePolicy, Account, participants, insurance, policy, include, owners, beneficiaries, Calls, Associated, Objects]
---

# InsurancePolicyParticipant

> A junction object that associates the InsurancePolicy object with the Account
      object. This object represents the participants of an insurance policy. Insurance policy
      participants include policy owners and beneficiaries.

# InsurancePolicyParticipant

A junction object that associates the InsurancePolicy object with the Account object. This object represents the participants of an insurance policy. Insurance policy participants include policy owners and beneficiaries.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BeneficiarySharePercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the total benefits that goes to the nominee. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which the participant is active on the policy. |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the participant becomes active on the policy. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date after when the participant becomes inactive on the policy. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which the participant is inactive on the policy. |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the insurance policy. |
| IsActiveParticipant | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the participant is an active participant on the policy. The default value is False. |
| IsMinorBeneficiary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the nominee is a minor. The default value is False. |
| IsPolicyholder | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this client owns the policy or is just a participant on the policy. This field is available from API version 51.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LegalGuardianId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal guardian of the minor beneficiary. This can be a business account or a person account. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number assigned to this record. |
| ParticipantCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of the insurance policy participant across all the policy versions. |
| ParticipantName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the participant of the insurance policy. |
| PrimaryParticipantAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the primary participant's account. |
| PrimaryParticipantContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the primary participant's contact. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the participant.This field is a relationship field. |
| RelatedInsPolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related insurance policy participant.This field is a relationship field. |
| RelatedParticipantAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related participant's account. |
| RelatedParticipantContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related participant's contact. |
| RelationshipToInsured | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe relationship of the nominee with the insured. |
| Role | TypemultipicklistPropertiesCreate, Filter, UpdateDescriptionThe roles that the participant has in the policy. For example, owner, beneficiary, driver. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. |
| StandardFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period. This field is available from API version 51.0 and later. |
| TermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TotalStandardAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the expected premium, fee, and tax for the policy over the policy period. This field is available from API version 51.0 and later.This is a calculated field. |
| TotalTermAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the expected premium, tax, and fee for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later.This is a calculated field. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[InsurancePolicyParticipantChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsurancePolicyParticipantFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsurancePolicyParticipantHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsurancePolicyParticipantOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsurancePolicyParticipantShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsurancePolicyParticipantChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsurancePolicyParticipantFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InsurancePolicyParticipantHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsurancePolicyParticipantOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InsurancePolicyParticipantShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
