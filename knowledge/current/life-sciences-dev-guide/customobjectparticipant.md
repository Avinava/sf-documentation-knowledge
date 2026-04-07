---
title: "CustomObjectParticipant"
domain: life-sciences-dev-guide
topic: customobjectparticipant
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:37:57.795Z
estimatedTokens: 532
keywords: [CustomObjectParticipant, Standard, extend, represent, individual, collaborating, needs, informed, Medical, Insight]
---

> Standard and custom fields extend the standard CustomObjectParticipant object
         to represent information about the individual collaborating on or who needs to be informed
         of the Medical Insight.

# CustomObjectParticipant

Standard and custom fields extend the standard CustomObjectParticipant object to represent information about the individual collaborating on or who needs to be informed of the Medical Insight.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional information about the participant. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the participant is an active user in the system (true) or not (false).The default value is false. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe user or group associated with this participant.This field is a polymorphic relationship field.Relationship NameParticipantRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role associated with the participant.This field is a relationship field.Relationship NameParticipantRoleRefers ToParticipantRole |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe parent custom object record that's related to this participant record.This field is a polymorphic relationship field.Relationship NameReferenceObjectRefers ToAccountExtension__c, BenefitManagementRecertification__c, CustomTest__c, Custom_Test_detail__c, MetadataTestObject__c, RelatedListValidation__c, TestCustomField__c, lsc4ce__Foo__c, omnistudio__CardFrameworkConfiguration__c, omnistudio__DRBatchQueue__c, omnistudio__DRBulkData__c, omnistudio__DREncryption__c, omnistudio__DRWorker__c, omnistudio__Interface_DRGeneric__c, omnistudio__TestResult__c, omnistudio__TriggerSetup__c, omnistudio__UISettings__c, omnistudio__VlocityDataPack__c, omnistudio__VlocityDocuSignTemplate__c, omnistudio__VlocityErrorLogEntry__c, omnistudio__VlocityScheduledJob__c, omnistudio__VlocityTrackingEntry__c |
