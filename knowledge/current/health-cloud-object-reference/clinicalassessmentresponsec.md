---
title: "ClinicalAssessmentResponse__c"
domain: health-cloud-object-reference
topic: clinicalassessmentresponsec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.856Z
estimatedTokens: 1946
keywords: [ClinicalAssessmentResponse__c, results, assessment, patient’s, health, condition, ClinicalAssessmentResponse, Calls]
---

# ClinicalAssessmentResponse__c

> Represents the results of an assessment of a patient’s health
			condition.

# ClinicalAssessmentResponse\_\_c

Represents the results of an assessment of a patient’s health condition.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
|  |  |
| AbdominalPain__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing abdominal pain. |
| CardiovascularDisease__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has a history of cardiovascular disease. |
| Chills__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing chills. |
| ChronicLiverDisease__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has a history of chronic liver disease. |
| ChronicLungDisease__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has a history of chronic lung disease. |
| ChronicRenalDisease__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has a history of chronic renal disease. |
| Cough__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing new or chronic coughing. |
| CurrentSmoker__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient currently smokes. |
| DiabetesMellitus__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has a history of Diabetes Mellitus. |
| Diarrhoea__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing diarrhea. |
| FeverOverThreshold__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing a fever that’s above a given temperature threshold. |
| FormerSmoker__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient previously smoked, but no longer does. |
| Headache__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient is experiencing a headache. |
| HighestRecordedTemperature__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe highest recorded temperature in Fahrenheit. |
| HospitalizationStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status describing whether the person was admitted to the hospital.Possible values are:AdmittedNot_Admitted—Not AdmittedUnknown |
| Immunocompromised__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient is immunocompromised. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MuscleAches__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient is experiencing muscle aches (myalgia). |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of this clinical assessment response. |
| NauseaOrVomiting__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing nausea or vomiting. |
| NeurologicalDisablity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has a history of a specific neurological disability. |
| NeurologicalDisablityNotes__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional text describing the patient’s neurological condition. |
| Occupation__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionOccupation of the individual.Possible values are:Childcare workers—Childcare workerClinical laboratory technologists and technicians—Clinical laboratory technologist or technicianCombined food preparation and serving workers, including fast food—Combined food preparation or serving worker, including fast foodDentists—DentistEmergency management directors—Emergency management directorEmergency medical technicians and paramedics—Emergency medical technician or paramedicHealth practitioner support technologists and technicians—Health practitioner support technologist or technicianHealthcare support workers, all other, including medical equipment preparers—Healthcare support worker (including medical equipment preparer)Other |
| OnsetOfSymptoms__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the symptoms started. |
| OtherChronicDiseases__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has a history of any other chronic diseases. |
| OtherChronicDiseasesNotes__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional text describing the patient’s other chronic diseases. |
| OtherSymptoms__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing any other symptoms not specified on the assessment form. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| ParentalConsent__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether consent was provided to interview a minor. |
| Patient__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person account of the individual whose health condition is described in the assessment. |
| PrimaryCarePhysician__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person's primary care physician. |
| ProviderFacilityName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the provider of healthcare services such as the hospital, clinic, or medical practitioner other than a primary care physician. |
| RunnyNose__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing a runny nose. |
| ShortnessOfBreath__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing shortness of breath. |
| SoreThroat__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has been experiencing a sore throat. |
| SubjectiveFever__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText describing whether the patient has felt feverish, even if body temperature was not measured. |
| TestingFacilityName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the facility where the testing was done. |
