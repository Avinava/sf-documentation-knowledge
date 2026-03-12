---
title: "PublicComplaint"
domain: object-reference
topic: publiccomplaint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.469Z
estimatedTokens: 2778
keywords: [PublicComplaint, complaints, submitted, users, API, version, 49.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PublicComplaint

> Represents the complaints submitted by public users. This object is
      available in API version 49.0 and later.

# PublicComplaint

Represents the complaints submitted by public users. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Fields added in API version 58.0 are available if the add-on license for Financial Services Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Account associated with this complaint.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BusinessAddress | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe address of the business. |
| BusinessName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business. |
| CauseSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subtype of complaint cause. This field is available in API version 58.0 and later.Possible values are:Misleading advertisement or documentation |
| CauseType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of complaint cause. This field is available in API version 58.0 and later.Possible values are:Product Communication |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the complaint. This field is available in API version 51.0 and later. |
| CompensationAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAny amount of money offered to resolve the complaint. This field is available in API version 58.0 and later. |
| ComplaintCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related Case. This field is available in API version 58.0 and later.This field is a relationship field.Relationship NameComplaintCaseRelationship TypeLookupRefers ToCase |
| ComplaintCaseStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe status of the related Case. This field is available in API version 58.0 and later.Possible values are:ClosedEscalatedIn ProgressMergedNewOn HoldResponse ReceivedWaiting for CustomerWorkingThe default value is New. |
| ComplaintSubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subtype of complaint. All values except Fire Safety are available in API version 58.0 and later.Possible values are:Account Opening/ClosureAmount Not DispensedAttempts to Collect Debt not OwedAuto Debit MandateCommunication TacticsCredit Limit ChangedCredit Report / Credit ScoreDelays / TimescalesDisputes over sums/chargesErrors / not following instructionsFire SafetyFraud HandlingInaccessible ATMsInaccessible Branch EntrancesInaccessible Mobile banking featuresInaccessible WebsiteMisleading AdvertisingMobile Banking - Features or FunctionalityNo Written Notification About DebtOnline Banking - Features or FunctionalityOther General Admin/Customer ServiceOthersProblem when Making PaymentsProduct Disclosure InformationProduct Performance/FeaturesUnauthorised Transaction(s)Unclear ArrangementUnclear GuidanceUnsuitable Advice |
| ComplaintSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary of customer complaints and related cases. This field is available in API version 62.0 and later. |
| ComplaintType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of complaint. All values except Safety are available in API version 58.0 and later.Possible values are:Accessibility IssuesAdvising, Selling and ArrangingDigital or TechnologyFinancial Hardship or CollectionsGeneral Admin/ Customer ServiceInformation, sums/ charges or Product PerformanceLending / CreditMarketing or Corporate CommunicationsOthersSafetyTransaction Related |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the complaint. |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email of the complainant. |
| EscalationCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason the complaint was escalated. This field is available in API version 58.0 and later.Possible values are:Alleged ADA ViolationAlleged DiscriminationAlleged MLA ViolationAlleged SCRA ViolationAlleged UDAAP ViolationConsumer Protection Agency InvolvementLawsuit FiledMedia InvolvementNoneReceived by Executive LeadershipThe default is None. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe given name of the complainant. |
| IncidentDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date of the incident.The default is the date this record was created, but this field is editable. |
| IsComplainantAuthorized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the person who filed the complaint is an authorized representative of the Account. This field is available in API version 58.0 and later.The default value is false. |
| IsReporterConfidential | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe reporter's request for confidentiality.The default value is false. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe family name of the complainant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, possibly the user only accessed this record or list view (LastReferencedDate) but didn't view it. |
| MobileNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe mobile number of the complainant. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the complaint. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the complaint owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the complaint.Possible values are:CriticalHighLowMediumThe default value is Medium. |
| ProductType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe product that the complaint is about. This field is available in API version 58.0 and later.Possible values are:ATM / debit cardCredit Card or Prepaid CardInsuranceInvestmentsMerchant ServicesMobile / electronic bankingMoney transfers, virtual currency, and money servicesMortgage / Home FinanceOtherPersonal Loan / other loansVehicle loan or lease |
| ReceivedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the complaint was received. This field is available in API version 58.0 and later. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset, vehicle, or financial account that’s associated with the public complaint. This field is available in API version 64.0 and later with Automotive Cloud.This field is a relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToFinancial Account, Asset, Vehicle, Product2 |
| ReporterAddress | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe address of the reporter for further communication. |
| ReporterCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRole of the reporter in the organization.Possible values are:Childcare ProvidersHealthcare workerLaw EnforcementMedical ExaminersMental Health ProfessionalsOtherSchool PersonnelSocial WorkerThe default value is School Personnel. |
| ReporterOrganization | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization the reporter is part of. |
| ShouldInclInRegulatoryRpt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether this complaint must be included in a regulatory report. This field is available in API version 58.0 and later.The default value is false. |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of the complaint. This field is available in API version 58.0 and later.Possible values are:BranchConsumer Protection AgencyContact CentreMobile AppRegulatory AgencySocial MediaWeb Chat |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the complaint.Possible values are:In ReviewResolvedSubmittedThe default value is Submitted. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSubject of the complaint. This field is available in API version 51.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PublicComplaintFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PublicComplaintHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PublicComplaintOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PublicComplaintShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PublicComplaintFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PublicComplaintHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- PublicComplaintOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PublicComplaintShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
