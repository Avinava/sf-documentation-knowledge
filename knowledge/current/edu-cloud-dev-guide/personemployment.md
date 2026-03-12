---
title: "PersonEmployment"
domain: edu-cloud-dev-guide
topic: personemployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.681Z
estimatedTokens: 2272
keywords: [PersonEmployment, person’s, employment, API, version, 57.0, later, Calls]
---

# PersonEmployment

> Represents information about a person’s employment. This object is
      available in API version 57.0 and later.

# PersonEmployment

Represents information about a person’s employment. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account associated with the Person Employment.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AnnualIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual income of the person. |
| EmployerAddress | TypeaddressPropertiesFilter, NillableDescriptionThe complete address of the employer. |
| EmployerCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the employer is located. |
| EmployerCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the employer is located. |
| EmployerGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| EmployerLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| EmployerLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| EmployerPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmployer's phone number. |
| EmployerPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the employer’s address. |
| EmployerState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the employer’s address. |
| EmployerStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address of the employer. |
| EmployerTaxAccountNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Tax Deduction and Collection Account Number (TAN) of the employer.Available in API version 61.0 and later with Financial Services Cloud. |
| EmploymentIndustry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the employment industry. |
| EmploymentSite | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the site of employment.Possible values are:HybridOnsite—On-siteRemote |
| EmploymentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the employment status with the employer.Possible values are:Home MakerEmployedRetiredSelf-EmployedStudentUnemployedUnemployed with IncomeUnemployed without Income |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the employment type for the party.Possible values are:API version 61.0 and later with Financial Services Cloud:ContractFull-TimePart-TimeSalariedSelf-EmployedTemporary |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date of employment at this job. |
| HourlyWage | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe hourly wage for the party.Available in API version 61.0 and later with Financial Services Cloud. |
| IsCurrentEmployment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person employment added is the current employer of the customer.Available in API version 61.0 and later with Financial Services Cloud.The default value is false. |
| IsFlagged | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the employment-related information requires additional scrutiny.Available in API version 61.0 and later with Financial Services Cloud.The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| Occupation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the person’s occupation.Possible values are:Actor or EntertainerArchitect or Urban PlannerArchitecture and EngineeringArtistArts, Design, Entertainment, Sports, and MediaBusiness (Clerical)Business Executive (Management, Administrator)Business Owner or ProprietorBusiness Salesperson or BuyerBuilding and Grounds Cleaning/MaintenanceClergy (Minister, Priest)Clergy (Other Religious)Clinical PsychologistCollege Administrator or StaffCollege TeacherCommunity and Social ServiceComputer Programmer or AnalystComputer and MathematicalConservationist or ForesterConstruction and ExtractionDentist (Including Orthodontist)Dietitian or NutritionistEducation, Training, and LibraryEngineerFarmer or RancherFarming, Fishing, and ForestryFood Preparation and ServingForeign Service Worker (Including Diplomat)Healthcare Practitioners and TechnicalHealthcare SupportHomemaker (Full-Time)Interior Decorator (Including Designer)Installation, Maintenance, and RepairLab Technician or HygienistLaborerLaw Enforcement OfficerLawyer (Attorney) or JudgeLegalLife, Physical, and Social ScienceManagementMilitary Service (Career)Musician (Performer, Composer)NurseOffice AdminOptometristOtherPersonal Care and ServicePharmacistPhysicianPolicymaker or GovernmentProtective ServiceProductionSalesSchool CounselorSchool Principal or SuperintendentScientific ResearcherSkilled TradesSocial, Welfare, or Recreation WorkerTeacher or Administrator (Elementary)Teacher or Administrator (Secondary)Therapist (Physical, Occupational, Speech)Transportation and Material MovingVeterinarianWriter or Journalist |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Position | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last position of the person at this job. |
| RelatedPersonId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person associated with the employment.This field is a polymorphic relationship field.Relationship NameRelatedPersonRelationship TypeLookupRefers ToAccount, Contact |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of employment at this job. |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the person employment was verified.Available in API version 61.0 and later with Financial Services Cloud. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the employment verification done for the party profile.Available in API version 61.0 and later with Financial Services Cloud. |
| WeeklyHourCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of hours per week that the party works for the employer.Available in API version 61.0 and later with Financial Services Cloud. |
| WorkerType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the worker type for the party that's employed.Possible values are:HourlySalaried |

For more information, see [PersonEmployment in Public Sector Solutions](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_psc_api_objects_personemployment.htm "HTML (New Window)").
