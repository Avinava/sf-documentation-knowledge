---
title: "PartyProfile"
domain: health-cloud-object-reference
topic: partyprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.773Z
estimatedTokens: 2620
keywords: [PartyProfile, additional, patient, Health, Cloud, API, version, 61.0, later, Calls]
---

# PartyProfile

> Represents additional details related to a patient. This object is
      available in Health Cloud in API version 61.0 and later.

# PartyProfile

Represents additional details related to a patient. This object is available in Health Cloud in API version 61.0 and later.

For more information related to the fields that are not used for Health Cloud, see [Financial Services Cloud Developer Guide: PartyProfile](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_partyprofile.htm).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the patient’s account record.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BusLicIssAuthorityName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityCtryofInc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityCtryofRgstr | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityIncDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityIncNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityPreviousNames | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityRgstrDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityRgstrNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityTradeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| BusinessEntityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CountryOfDomicile | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| CountryofBirth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| CreditScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| CreditScoreProvider | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| DateOfBirth | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| EmploymentIndustry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| FullName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| FundSource | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionNot used for Health Cloud use cases. |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| HouseholdAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases.This field is a relationship field.Relationship NameHouseholdAccountRelationship TypeLookupRefers ToAccount |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| IndustryClassificationCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| IsAged | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the patient is a senior citizen.The default value is false. |
| IsBusEntyListonStockExch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNot used for Health Cloud use cases.The default value is false. |
| IsDisabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the person has a disability.The default value is false. |
| IsInstitutionalized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the person receives care at a care facility.The default value is false. |
| IsLowIncome | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the patient is part of a low-income household.The default value is false. |
| IsMedicaidEligible | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the patient is eligible for Medicaid assistance.The default value is false. |
| IsNetWorthHigh | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNot used for Health Cloud use cases.The default value is false. |
| IsOffBoarded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNot used for Health Cloud use cases.The default value is false. |
| IsRecalculationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the patient’s risk adjust value needs recalculation.The default value is false. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| LastProfileReviewDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases.This field is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| LegalEntityIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| Nationality | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| NextProfileReviewDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| OffBoardingComments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| OffBoardingReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record in the system.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Prefix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| PrimaryEmail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| PrimaryIdentificationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| PrimaryIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| PrimaryIdentifierType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| PrimaryPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| RelatedPartyProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases.This field is a relationship field.Relationship NameRelatedPartyProfileRelationship TypeLookupRefers ToPartyProfile |
| ResidentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| ReviewDecision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| StockExchangeName | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionNot used for Health Cloud use cases. |
| Suffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| SurnameAtBirth | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| TaxpayerIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNot used for Health Cloud use cases. |
| TaxpayerIdentificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionNot used for Health Cloud use cases.Possible values are:BusinessIndividual |
