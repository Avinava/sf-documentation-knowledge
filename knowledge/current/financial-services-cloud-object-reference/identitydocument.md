---
title: "IdentityDocument"
domain: financial-services-cloud-object-reference
topic: identitydocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.460Z
estimatedTokens: 668
keywords: [IdentityDocument, documents, identify, Financial, Services, Cloud, clients, Calls, Associated, Objects]
---

# IdentityDocument

> Represents information about documents used to identify Financial Services
      Cloud clients.

# IdentityDocument

Represents information about documents used to identify Financial Services Cloud clients.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the document expires. |
| IdDocumentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the document that’s used to verify the client’s identity. |
| IssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the document was issued. |
| IssuingAuthority | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authority that issued the document. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the document. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created this record. |
| PartyProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party profile associated with this record.This field is a relationship field.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| RelatedLegalEntityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the legal entity related to this document. |
| VerifiedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the person who verified this document. |
| VerifiedOn | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when this document was verified. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[IdentityDocumentChangeEvent (API version 61.0)](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.
