---
title: "Fields on Lead"
domain: health-cloud-object-reference
topic: fields-on-lead
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.069Z
estimatedTokens: 1474
keywords: [Lead, Standard, custom, extend, represent, incoming, patient]
---

# Fields on Lead

> Standard and custom fields extend the Lead object to represent information about an
      incoming patient.

# Fields on Lead

Standard and custom fields extend the Lead object to represent information about an incoming patient.

## Fields

| Field | Details |
| --- | --- |
| AssignCareCoordinatorContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to Contact object. If populated and the AssignCareCoordinatorUser__c field is blank, assigns the care coordinator role based on the contact record. |
| AssignCareCoordinatorUser__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to User object. If populated, assigns the care coordinator role based on the user record. |
| BirthDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe patient’s birthdate. |
| BirthDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider's birthdate.NoteThis field is available in API version 61.0 and later with the Health Cloud Provider Network Management permission set. |
| CreatedFromLead__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the individual was created from a converted lead (true) or not (false). |
| InsuranceGroupId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGroup ID of the patient or member’s insurance. |
| InsuranceMemberId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMember ID of the patient or member’s insurace. |
| InsuranceType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of primary insurance: Medicare, Medicaid, commercial or self-pay. |
| IsMarkedForPatientConversion__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the lead will be converted to a patient record. |
| IsOutOfNetwork__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the referral is out-of-network. |
| MedicalRecordNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medical record number used to identify a patient. |
| NumberOfLocations__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of locations associated with the lead. |
| Primary__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the individual is the primary member of the household (true) or not (false). |
| PrimaryDiagnosis__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionLookup to the HealthcareDiagnosis object. |
| PrimaryInsurance__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrimary health insurance company associated with the patient. |
| Priority__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPriority of the referral as designated by the referring provider. |
| ReasonForOutOfNetworkReferral__c | TypepicklistPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionReason the referral is sent out-of-network. |
| ReasonForReferral__c | TypepicklistPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionReason for the referral. |
| ReferralStatus__c | TypepicklistPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIndicates status of referral processing. |
| ReferredToOrganization__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the organization receiving or fulfilling the referral. |
| ReferredToPractitioner__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the practitioner to whom the patient or member is being referred. |
| ReferredToUser__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the user to whom the referral is sent. |
| ReferringOrganization__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the referring organization. |
| ReferringPractitioner__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the practitioner who submitted the referral. |
| ReferringUser__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the user who submitted the referral. |
| RelatedAccount__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionLook up to the account of the patient or member who is being referred. |
| SecondaryDiagnosis__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionLookup to the HealthcareDiagnosis object. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of an external record. This field can’t be encrypted. |
| SourceSystem__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe system that created the record and owns updating rights for it. |
| Specialty__c | TypepicklistPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionSpecialty associated with the referral. |
| Specialty | TypepicklistPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionSpecialty associated with the provider.NoteThis field is available in API version 61.0 and later with the Health Cloud Provider Network Management permission set. |
| TertiaryDiagnosis__c | TypereferencePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionLookup to the HealthcareDiagnosis object. |
| TypeOfService__c | TypepicklistPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionType of service requested. |
