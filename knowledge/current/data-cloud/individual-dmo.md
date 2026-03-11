---
title: "Individual DMO"
domain: data-cloud
topic: individual-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.512Z
keywords: [Individual, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Individual DMO

# Individual DMO

The Individual DMO is a Data Cloud data model object for contacts, customers, or other people interested in your company's products or services.

## Object API Name

ssot\_\_Individual\_\_dlm

## Category

Profile

## Primary Subject Area

Contact

## Primary Key

Individual ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field | Data Bundle |
| --- | --- | --- | --- | --- | --- |
| Account | Account ID | Many To One (N:1) | Individual | Individual ID | Sales |
| Account Contact | Individual | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Consent | Contact ID | One To One (1:1) | Individual | Individual ID | Sales |
| Contact Point Address | Party | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Contact Point App | Party | Many To One (N:1) | Individual | Individual ID | Sales |
| Contact Point Email | Party | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Contact Point Phone | Party | Many To One (N:1) | Individual | Individual ID | Sales, Service |
| Device Application Engagement | Individual | Many To One (N:1) | Individual | Individual ID | Sales |
| Einstein Email Engagement Scores | Subscriber Key | Many To One (N:1) | Individual | Individual ID | Sales |
| Einstein Push Engagement Scores | Subscriber Key | Many To One (N:1) | Individual | Individual ID | Sales |
| Email Engagement | Individual | Many To One (N:1) | Individual | Individual ID | Sales |
| Individual | Individual ID | One To One (1:1) | Individual Identity Link | Individual ID | Sales |
| Individual | Account Manager | One To One (1:1) | Individual | Individual ID | Sales |
| Individual | Party ID | One To One (1:1) | Party | Party ID | Financial Services Cloud |
| Loyalty Program | Household ID | Many To One (N:1) | Individual | Individual ID | Sales |
| Loyalty Program Member | Party | Many To One (N:1) | Individual | Individual ID | Sales |
| Marketing Engagement | Contact ID | Many To One (N:1) | Individual | Individual ID | Sales |
| Party | Individual ID | Many To One (N:1) | Individual | Individual ID | Financial Services Cloud |
| Party Identification | Party | Many To One (N:1) | Individual | Individual ID | Sales |
| Person Life Event | Individual ID | Many To One (N:1) | Individual | Individual ID | Financial Services Cloud |
| Product Browse Engagement | Individual | Many To One (N:1) | Individual | Individual ID | Sales |
| Product Order Engagement | Individual | Many To One (N:1) | Individual | Individual ID | Sales |
| Website Engagement | Individual | Many To One (N:1) | Individual | Individual ID | Sales |

## All Fields

| Field Name | Field API Name | Description | Data Type | Data Bundle |
| --- | --- | --- | --- | --- |
| Birth Date | ssot__BirthDate__c | A person’s birth date including year, month, and date. | dateTime | Sales, Service |
| Birth Date Day | ssot__BirthDateDay__c | The day the individual was born. | number | Service |
| Birth Date Month | ssot__BirthDateMonth__c | The month the individual was born. | number | Service |
| Birth Date Year | ssot__BirthDateYear__c | The year the individual was born. | number | Service |
| Birth Place | ssot__BirthPlace__c | The location the person was born. | text | Sales, Service |
| Block Geolocation Tracking | ssot__HasOptedOutGeoTracking__c | An indicator if the individual has opted out of geolocation tracking. | text | Service |
| Children Count | ssot__ChildrenCount__c | The number of children the person has. | number | Sales, Service |
| Consumer Credit Score | ssot__ConsumerCreditScore__c | The individual’s consumer credit score. | number | Service |
| Consumer Credit Score Provider Name | ssot__ConsumerCreditScoreProviderName__c | The provider of the individual’s consumer credit score. | number | Service |
| Convictions Count | ssot__ConvictionsCount__c | The number of convictions the individual has. | number | Service |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime | Sales, Service |
| Current Employer Name | ssot__CurrentEmployerName__c | The name of the person’s current employer. | text | Sales, Service |
| Data Source | ssot__DataSourceId__c | The reference ID for the logical name for a system that is the source of records identified by external record ID. | text | Sales, Service |
| Data Source Object | ssot__DataSourceObjectId__c | The reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| Death Date | ssot__DeathDate__c | The date the person died. | dateTime | Sales, Service |
| Death Place | ssot__DeathPlace__c | The location of the person’s death. | text | Sales, Service |
| Dependent Count | ssot__DependentCount__c | The number of dependents a person claims. | number | Sales, Service |
| Do Extract My Data Update Date | ssot__DoExtractMyDataUpdateDate__c | The update date to extract an individual’s data. | dateTime | Service |
| Do Forget Me Update Date | ssot__DoForgetMeUpdateDate__c | The update date to forget an individual’s data. | dateTime | Service |
| Do Not Market Update Date | ssot__DoNotMarketUpdateDate__c | The update date to not market an individual’s data. | dateTime | Service |
| Do Not Process | ssot__HasOptedOutProcessing__c | An indicator if the individual has opted out of processing. | text | Service |
| Do Not Process Reason | ssot__DoNotProcessReasonId__c | A reference ID for the reason the individual has opted out of processing. | text | Service |
| Do Not Process Update Date | ssot__DoNotProcessUpdateDate__c | The update date to not process an individual’s data. | dateTime | Service |
| Do Not Profile | ssot__HasOptedOutProfiling__c | An indicator if the individual has opted out of profiling. | text | Service |
| Do Not Profile Update Date | ssot__DoNotProfileUpdateDate__c | The update date to not profile an individual’s data. | dateTime | Service |
| Do Not Solicit | ssot__HasOptedOutSolicit__c | An indicator if the individual has opted out of soliciting. | text | Service |
| Do Not Track | ssot__HasOptedOutTracking__c | An indicator if the individual has opted out of tracking. | text | Service |
| Do Not Track Location Update Date | ssot__DoNotTrackLocationUpdateDate__c | The update date to not track an individual’s location. | dateTime | Service |
| Do Not Track Update Date | ssot__DoNotTrackUpdateDate__c | The update date to not track an individual’s data. | dateTime | Service |
| Employed Since Date | ssot__EmployedSinceDate__c | The date the person was hired at their current employer. | dateTime | Sales, Service |
| Ethnicity | ssot__EthnicityId__c | A reference ID for the individual’s ethnicity. | text | Service |
| Export Individual’s Data | ssot__SendIndividualData___c | An indicator to export the individual’s data. | text | Service |
| External Record ID | ssot__ExternalRecordId__c | The reference ID for an external data source system. | text | Sales, Service |
| External Source ID | ssot__ExternalSourceId__c | The reference ID for the system in which the external record ID was assigned. | text | Sales, Service |
| First Name | ssot__FirstName__c | A person’s first name. | text | Sales, Service |
| Forget This Individual | ssot__ShouldForget__c | An indicator to forget the individual’s data. | text |  |
| Gender | ssot__GenderId__c | The reference ID for the person’s gender. | text | Sales, Service |
| Gender Identity | ssot__GenderIdentity__c | The gender identity of the individual. | text | Service |
| Global Party | ssot__GlobalPartyId__c | A reference ID to the global party, for example, an individual, business, or affiliation group. | text | Sales, Service |
| Has Alcohol Abuse History | ssot__HasAlcoholAbuseHistory__c | An indicator if the individual has a history of alcohol abuse. | text | Service |
| Has Drug Abuse History | ssot__HasDrugAbuseHistory__c | An indicator if the individual has a history of drug abuse. | text | Service |
| Highest Education Level | ssot__HighestEducationLevelId__c | The reference ID to the person’s highest completed education level, for example high school or PhD. | text | Sales, Service |
| Hospitalizations Last 5 Years Count | ssot__HospitalizationsLast5YearsCount__c | The number of hospitalizations the individual has had in the last 5 years. | text | Service |
| Individual ID | ssot__Id__c | A unique ID used as the primary key for the individual DMO. | text | Sales, Service |
| Influencer Rating | ssot__InfluencerRating__c | The rating given to a person based on their influence, typically in social media. | text | Sales, Service |
| Internal Organization | ssot__InternalOrganizationId__c | The reference ID to the business unit or other internal organization that owns the business account. | text | Sales, Service |
| Is Alcohol Consumer | ssot__IsAlcoholConsumer__c | An indicator if the individual consumes alcohol. | text | Service |
| Is Anonymous | ssot__IsAnonymous__c | An indicator that the person wishes to remain anonymous. | text | Sales, Service |
| Is Drug Consumer | ssot__IsDrugConsumer__c | An indicator if the individual consumes drugs. | text | Service |
| Is Good Driver | ssot__IsGoodDriver__c | An indicator if the individual is a good driver. | text | Service |
| Is Good Student | ssot__IsGoodStudent__c | An indicator if the individual is a good student. | text | Service |
| Is High Risk Hobby | ssot__IsHighRiskHobby__c | An indicator if the individual has a high risk hobby. | text | Service |
| Is High Risk Occupation | ssot__IsHighRiskOccupation__c | An indicator if the individual has a high risk occupation. | text | Service |
| Is Home Owner | ssot__IsHomeOwner__c | An indicator that the person owns a home. | text | Sales, Service |
| Is Tobacco Consumer | ssot__IsTobaccoConsumer__c | An indicator if the individual consumes tobacco. | text | Service |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime | Sales, Service |
| Last Name | ssot__LastName__c | The person’s last name. | text | Sales, Service |
| Mailing Name | ssot__MailingName__c | The person’s full name used for mailing purposes, for example Dr. Jane Doe. | text | Sales, Service |
| Main Dietary Habit Type | ssot__MainDietaryHabitTypeId__c | A reference ID to the individual’s main dietary habit type. | text | Service |
| Main Disability Type | ssot__MainDisabilityTypeId__c | A reference ID to the individual’s main disability type. | text | Service |
| Main Life Attitude Type | ssot__MainLifeAttitudeTypeId__c | A reference ID to the individual’s main life attitude type. | text | Service |
| Main Life Style Type | ssot__MainLifeStyleTypeId__c | A reference ID to the individual’s main life style type. | text | Service |
| Main Personal Value Type | ssot__MainPersonalValueTypeId__c | A reference ID to the individual’s main personal value type. | text | Service |
| Main Personality Type | ssot__MainPersonalityTypeId__c | A reference ID to the individual’s main personality type. | text | Service |
| Major Citation Count | ssot__MajorCitationCount__c | The number of major citations the individual has. | number | Service |
| Marital Status | ssot__MaritalStatusId__c | A reference ID for a person’s marital status. | text | Sales, Service |
| Middle Name | ssot__MiddleName__c | A person’s middle name. | text | Sales |
| Military Service | ssot__MilitaryServiceId__c | A reference ID showing if the person served in the military. | text | Sales |
| Military Status | ssot__MilitaryStatusId__c | A reference ID for a person’s military status, for example retired or active duty. | text | Sales |
| Minor Citation Count | ssot__MinorCitationCount__c | The number of minor citations the individual has. | number | Service |
| Mothers Maiden Name | ssot__MothersMaidenName__c | The unmarried last name of a person’s mother. | text | Sales, Service |
| Name Suffix | ssot__NameSuffix__c | The suffix of a person’s name, for example, Jr. | text | Sales, Service |
| Net Worth | ssot__NetWorth__c | The net worth of the individual. | number | Service |
| No Merge Reason | ssot__NoMergeReason__c | A reference ID to the reason not to merge the individual’s data. | text | Service |
| Occupation | ssot__Occupation__c | A description of the person’s job. | text | Sales, Service |
| Occupation Type | ssot__OccupationTypeId__c | A reference ID for the type of job a person has for example professional or student. | text | Sales, Service |
| Official Name | ssot__OfficialName__c | A person’s legal name used in communications. | text | Sales, Service |
| OK to Store Pll Data Elsewhere | ssot__CanStorePllElsewhere__c | An indicator if the individual’s Pll data can be stored elsewhere. | text | Service |
| Ordering Name | ssot__OrderingName__c | The name used when sorting people in a list, often alphabetical for example, Doe J. | text | Sales, Service |
| Origin Country | ssot__OriginCountryId__c | A reference ID to the individual’s country of origin. | text | Service |
| Over Age | ssot__OverAgeNumber__c | The over age number of the individual. | number | Service |
| Party Type | ssot__PartyTypeId__c | A reference ID for the type of party, for example, individual or household. | text | Sales, Service |
| Party Additional Names | ssot__PartyAdditionalNames__c | The additional names associated with the individual. | text | Sales, Service |
| Party Roles | ssot__PartyRoles__c | The role of an individual for example a customer, supplier, or competitor. | text | Sales, Service |
| Party Web Addresses | ssot__PartyWebAddresses__c |  | text | Sales, Service |
| Person Name | ssot__PersonName__c | A person’s full name. | text | Service |
| Person Education | ssot__PersonEducations__c | Any associated educations for the individual. | text | Sales, Service |
| Person Height | ssot__PersonHeight__c | The height of the individual. | number | Service |
| Person Height Unit of Measure | ssot__PersonHeightUnitofMeasureId__c | A reference ID to the unit of measurement of an individual’s height. | text | Service |
| Person Employment | ssot__PersonEmployments__c | Any associated employments for the individual. | text | Sales, Service |
| Person Language | ssot__PersonLanguages__c | Any associated languages for the individual. | text | Sales, Service |
| Person Life Events | ssot__PersonLifeEvents__c | Any associated life events for the individual. | text | Sales, Service |
| Person Life Stage | ssot__PersonLifeStage__c | The life stage of the individual. | text | Service |
| Person Weight | ssot__PersonWeight__c | The weight of the individual. | number | Service |
| Person Weight Unit of Measure | ssot__PersonWeightUnitofMeasureId___c | A reference ID to the unit of measurement of an individual’s weight. | text | Service |
| Photo URL | ssot__PhotoURL__c | A link to an individual’s photo. | text | Sales, Service |
| Preferred Name | ssot__PreferredName__c | A person’s preferred name. | text | Sales, Service |
| Primary Account | ssot__PrimaryAccountId__c | A reference ID for person’s account. | text | Sales, Service |
| Primary Citizenship Country | ssot__PrimaryCitizenshipCountryId__c | A reference ID to the individual’s primary country of citizenship. | text | Service |
| Primary Hobby | ssot__PrimaryHobbyId__c | A reference ID for a person’s primary hobby. | text | Sales, Service |
| Primary Household | ssot__PrimaryHouseholdId__c | A reference ID for a person’s household. | text | Sales, Service |
| Primary Language | ssot__PrimaryLanguageId__c | A reference ID for a person’s first language. | text | Sales, Service |
| Pronoun | ssot__Pronoun__c | The pronouns for the individual. | text | Service |
| Religion | ssot__ReligionId__c | A reference ID to the individual’s religion. | text | Service |
| Residence Capture Method | ssot__ResidenceCaptureMethodId__c | A reference ID for how residence information was obtained. | text | Sales, Service |
| Residence Country | ssot__ResidenceCountryId__c | A reference ID for the country where a person resides. | text | Sales, Service |
| Residence Country Name | ssot__ResidenceCountryName__c | The primary country where a person resides. | text | Sales, Service |
| Rewards Balance | ssot__Rewards_Balance__c | A person’s balance of rewards, for example total points. | text | Sales |
| Salutation | ssot__Salutation__c | The person’s preferred greeting, for example Ms. or Mx. | text | Sales, Service |
| Second Last Name | ssot__SecondLastName__c | A person’s second last name. | text | Sales, Service |
| Secondary Citizenship Country | ssot__SecondaryCitizenshipCountryId__c | A reference ID to the individual’s secondary country of citizenship. | text | Service |
| Surgeries Last 5 Years Count | ssot__SurgeriesLast5YearsCount__c | The number of surgeries the individual has had in the last 5 years. | number | Service |
| Tax Bracket Range | ssot__TaxBracketRange__c | The tax bracket range of the individual. | text | Service |
| Title | ssot__TitleName__c | The title of the individual. | text | Service |
| Web Site URL | ssot__WebSiteURL__c | The link to a person’s website. | text | Sales, Service |
| Wedding Anniversary Date | ssot__WeddingAnniversaryDate__c | The date of a person’s wedding. | dateTime | Sales, Service |
| Yearly Income | ssot__YearlyIncome__c | The yearly income for the individual. | number | Service |
| Yearly Income Currency | ssot__YearlyIncomeCurrencyId__c | A reference ID to the currency for the individual’s year income. | text | Service |
| Yearly Income Range | ssot__YearlyIncomeRangeId__c | A reference ID to the range for the individual’s year income. | text | Service |