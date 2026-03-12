---
title: "PublicComplaint"
domain: nonprofit-cloud
topic: publiccomplaint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.549Z
estimatedTokens: 1997
keywords: [PublicComplaint, complaints, submitted, users, API, version, 49.0, later, Calls, Associated, Objects]
---

# PublicComplaint

> Represents the complaints submitted by public users. This object is
      available in API version 49.0 and later.

# PublicComplaint

Represents the complaints submitted by public users. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account associated with this complaint.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BusinessAddress | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAddress of the business. |
| BusinessName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the business |
| CauseSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subtype of complaint cause. This field is available in API version 58.0 and later.Possible value is:Misleading advertisement or documentation |
| CauseType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of complaint cause. This field is available in API version 58.0 and later.Possible value is:Product Communication |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the complaint. This field is available in API version 51.0 and later. |
| CompensationAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAny amount of money offered to resolve the complaint. This field is available in API version 58.0 and later. |
| ComplaintCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is deprecated as of API version 49.0. |
| ComplaintCaseStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe status of the related Case. This field is available in API version 58.0 and later.Possible values are:NewWorkingEscalatedClosedThe default is New. |
| ComplaintSubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSubtype of the complaint.Possible values are:BurnsEducational NeglectEmotional NeglectExploitationFire SafetyIsolationMedical NeglectPhysical NeglectRough TreatmentSexual ActivitiesSexual ExploitationSexual ExposureSuffocationTerror |
| ComplaintSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA summary of the complaint information.This field is available in API version 64.0 and later. |
| ComplaintType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of complaint.Possible values are:Mental AbuseNeglectPhysical AbuseSafetySexual Abuse |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the complaint.Description is filterable and sortable in API version 61.0 and earlier. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail of the complainant. |
| EscalationCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason the complaint was escalated. This field is available in API version 58.0 and later.Possible values are:Alleged ADA ViolationAlleged DiscriminationAlleged MLA ViolationAlleged SCRA ViolationAlleged UDAAP ViolationConsumer Protection Agency InvolvementLawsuit FiledMedia InvolvementNoneReceived by Executive LeadershipThe default is None. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst name of the complainant. |
| IncidentDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate of the incident. |
| IsComplainantAuthorized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the person who filed the complaint is an authorized representative of the Account. This field is available in API version 58.0 and later.The default value is false. |
| IsReporterConfidential | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReporter's request for confidentiality.The default value is false. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast name of the complainant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date that a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date that a user viewed this record. |
| MobileNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMobile number of the complainant. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the complaint. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the complaint owner.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPriority of the complaint.Possible values are:CriticalHighLowMedium |
| ProductType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe product that the complaint is about. This field is available in API version 58.0 and later.Possible values are:ATM / debit cardCredit Card or Prepaid CardInsuranceInvestmentsMerchant ServicesMobile / electronic bankingMoney transfers, virtual currency, and money servicesMortgage / Home FinanceOtherPersonal Loan / other loansVehicle loan or lease |
| ReceivedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the complaint was received. This field is available in API version 58.0 and later. |
| ReporterAddress | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAddress of the reporter for further communication. |
| ReporterCategory | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRole of the reporter in the organization.Possible values are:Childcare ProvidersHealthcare workerLaw EnforcementMedical ExaminersMental Health ProfessionalsOtherSchool PersonnelSocial WorkerThe default value is School Personnel. |
| ReporterOrganization | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrganization that the reporter is part of. |
| ResolutionPriority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the priority for complaint resolution.This field is available in API version 64.0 and later. |
| ShouldInclInRegulatoryRpt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether this complaint must be included in a regulatory report. This field is available in API version 58.0 and later.The default value is false. |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of the complaint. This field is available in API version 58.0 and later.Possible values are:BranchConsumer Protection AgencyContact CentreMobile AppRegulatory AgencySocial MediaWeb Chat |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the complaint.Possible values are:In ReviewResolvedSubmitted |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSubject of the complaint. This field is available in API version 51.0 and later. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

PublicComplaintFeed

Feed is available for the object.

PublicComplaintHistory

History is available for the object.

PublicComplaintOwnerSharingRule

Sharing rules are available for the object.

PublicComplaintShare

Sharing is available for the object.
