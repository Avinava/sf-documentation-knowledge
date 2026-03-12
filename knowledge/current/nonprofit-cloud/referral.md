---
title: "Referral"
domain: nonprofit-cloud
topic: referral
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.587Z
estimatedTokens: 2057
keywords: [Referral, client, referrals, organization, API, version, 56.0, later, Calls, Associated, Objects]
---

# Referral

> Represents the information on client referrals in an
         organization. This object is available in API version 56.0 and later.

# Referral

Represents the information on client referrals in an organization. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AuthorizationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the authorization status of the referral for the associated provider. Available in API version 61.0 and later.Possible values are:AuthorizedIn ReviewRejectedSubmitted |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the referral.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of referral. |
| ClientEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the referred client. |
| ClientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the referred client.This field is a relationship field.Relationship NameClientRelationship TypeLookupRefers ToAccount |
| ClientLanguage | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe languages that the referred client speaks.Possible values are:ArabicChineseDutchEnglishFrenchGermanHindiPortugueseRussianSpanish |
| ClientName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the referred client. |
| ClientPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the referred client. |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the referral. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the referral. |
| IsSelfReferred | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the referral is made by the client.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (<parmname>LastReferencedDate</parmname>) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the referral. |
| OutboundSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of an outbound referral.This field is a polymorphic relationship field.Relationship NameOutboundSourceRelationship TypeLookupRefers ToBenefit Assignment, Case, Referral |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the priority of the referral.Possible values are:CriticalHighLowMedium |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program that's associated with the referral.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| ProviderEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the person or the organization that the client is being referred to. |
| ProviderFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner or provider facility associated with the referral.Available in API version 59.0 and later.This field is a polymorphic relationship field.Relationship NameProviderFacilityRelationship TypeLookupRefers ToCareProviderFacilitySpecialty, HealthcarePractitionerFacility |
| ProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account or contact associated with the person or the organization that the client is being referred to.This field is a polymorphic relationship field.Relationship NameProviderRelationship TypeLookupRefers ToAccount, Contact, HealthcareProvider |
| ProviderName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person or the organization that the client is being referred to. |
| ProviderOrg | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization that the client is being referred to. |
| ProviderPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the person or the organization that the client is being referred to. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| ReferralDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the referral is received. |
| ReferralType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the referral is inbound or outbound.Possible values are:INBOUND—InboundOUTBOUND—Outbound |
| ReferrerEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the person or the organization that referred the client. |
| ReferrerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account or contact associated with the person or the organization that referred the client.This field is a polymorphic relationship field.Relationship NameReferrerRelationship TypeLookupRefers ToAccount, Contact |
| ReferrerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the person or the organization that referred the client. |
| ReferrerOrg | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization that referred the client. |
| ReferrerPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the person or the organization that referred the client. |
| Result | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe outcome of the referral. |
| ResultCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the referral result.Possible values are:ApprovedClient Declined ServicesPendingReferred ElsewhereRejected |
| Source | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the referral.Possible values are:ApplicationEmailMessageOtherPhoneSocial MediaWalk-In |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the referral.Possible values are:ApprovedEnrolledIn ReviewNewRejected |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the referral. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the usage of the referral. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ReferralFeed

Feed tracking is available for the object.

ReferralHistory

History is available for tracked fields of the object.

ReferralOwnerSharingRule

Sharing rules are available for the object.

ReferralShare

Sharing is available for the object.
