---
title: "BusinessAlert"
domain: omnistudio
topic: businessalert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.707Z
keywords: [BusinessAlert, Supported, Calls, Special, Access, Rules, Fields]
---

# BusinessAlert

# BusinessAlert

Represents information about insight notifications that Einstein Relationship Insights explores, such as news mentions, job updates, and relationships. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The BusinessAlert object is available only if the ERI Growth User or ERI Starter User license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AlertData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionData associated with each alert. |
| AlertRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record that's referenced by the insight alert.This field is a polymorphic relationship field.Relationship NameAlertRecordRelationship TypeLookupRefers ToAccount, Asset, AuthorizationForm, AuthorizationFormConsent, AuthorizationFormDataUse, AuthorizationFormText, BusinessBrand, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, Contact, ContactPointAddress, ContactPointConsent, ContactPointEmail, ContactPointPhone, ContactPointTypeConsent, ContentVersion, Customer, DataUseLegalBasis, DataUsePurpose, EmailMessage, EngagementChannelType, Idea, Image, Individual, Lead, Location, Opportunity, PartyConsent, Pricebook2, Product2, ProfileSkill, QuickText, Recommendation, Scorecard, ScorecardMetric, Seller, SocialPersona, SocialPost, Solution, VideoCall, WorkBadgeDefinitionIn addition to the listed standard object fields, this field can refer to custom objects as well, |
| AlertType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of insight alert.Possible values are:JOB_CHANGENEWSRELATIONSHIPThe default value is NEWS. |
| CurrentDesignation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current designation that's related to the job alert. |
| CurrentEmployer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the current employer that's related to the job alert. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a record related to this alert record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this alert. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the alert record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreviousDesignation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe previous designation that's related to the job alert. |
| PreviousEmployer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the previous employer that's related to the job alert. |