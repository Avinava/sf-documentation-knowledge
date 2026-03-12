---
title: "SvcCatalogReqRelatedItem"
domain: object-reference
topic: svccatalogreqrelateditem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.649Z
estimatedTokens: 625
keywords: [SvcCatalogReqRelatedItem, item, Service, Catalog, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# SvcCatalogReqRelatedItem

> Represents an item related to a Service Catalog Request. This object is
      available in API version 53.0 and later.

# SvcCatalogReqRelatedItem

Represents an item related to a Service Catalog Request. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access this object, get the Service Catalog permission set license, Employee Productivity Starter license, or Employee Productivity Plus add-on license.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the related item. |
| RelatedExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText containing an ID from any external system. |
| RelatedInternalRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Salesforce record related to this request. This reference must be for an object that has the following characteristics.It's a standard object.It must allow custom fields.It's referencable (that is, it can be the target of a lookup).It can be the target of a custom lookup field.It contains a Name field.It isn't dependent on a junction object.It isn't a virtual object or a setup object.This is a polymorphic relationship field.Relationship NameRelatedInternalRecordRelationship TypeLookupRefers ToAccount, Address, Asset, AssociatedLocation, AuthorizationForm, AuthorizationFormConsent, AuthorizationFormDataUse, AuthorizationFormText, BusinessBrand, Case, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, Contact, ContactPointAddress, ContactPointConsent, ContactPointEmail, ContactPointPhone, ContactPointTypeConsent, Contract, ContractLineItem, Customer, DataUseLegalBasis, DataUsePurpose, Employee, EngagementChannelType, Entitlement, Idea, Individual, InternalOrganizationUnit, Lead, Location, MessagingEndUser, Opportunity, Order, OrderItem, PartyConsent, Pricebook2, ProcessException, Product2, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, QuickText, Recommendation, Seller, ServiceContract, SocialPersona, SocialPost, Solution, SurveyInvitation, SurveySubject, UserProvisioningRequest, VoiceCall |
| SvcCatalogRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe SvcCatalogRequest record.This is a relationship field.Relationship NameSvcCatalogRequestRelationship TypeLookupRefers ToSvcCatalogRequest |
