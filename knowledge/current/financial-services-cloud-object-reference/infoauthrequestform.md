---
title: "InfoAuthRequestForm"
domain: financial-services-cloud-object-reference
topic: infoauthrequestform
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:30.486Z
estimatedTokens: 642
keywords: [InfoAuthRequestForm, Tracks, individual, Authorization, Form, Texts, belong, consent, GDPR, privacy, policy, document, mortgage, loan, rate]
---

# InfoAuthRequestForm

> Tracks the individual Authorization Form Texts that belong to an
         Authorization Request. For example, consent on GDPR privacy policy document and consent on
         mortgage loan rate lock fee document. This object is available in API version 52.0 and
      later.

# InfoAuthRequestForm

Tracks the individual Authorization Form Texts that belong to an Authorization Request. For example, consent on GDPR privacy policy document and consent on mortgage loan rate lock fee document. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To grant community users access to InfoAuthRequestForm records, from Setup, go to Sharing Settings and set the Info Authorization Request object's default internal and external access to Private.

## Fields

| Field | Details |
| --- | --- |
| AuthorizationFormTextId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA link to the Authorization Form Text to which this request is related.This is a relationship field.Relationship NameAuthorizationFormTextRelationship TypeLookupRefers ToAuthorizationFormText |
| InfoAuthorizationRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Information Authorization Request to which this record is related.This is a relationship field.Relationship NameInfoAuthorizationRequestRelationship TypeLookupRefers ToInfoAuthorizationRequest |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LatestAuthFormConsentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent response from the consenter.This is a relationship field.Relationship NameLatestAuthFormConsentRelationship TypeLookupRefers ToAuthorizationFormConsent |
| LatestResponseDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time of the latest response from the consenter. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the info authorization request record. |
| ResponseStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe response from the latest Authorization Form Consent related to this record.Possible values are:NewRejectedSeenSignedThe default value is 'New'. |
