---
title: "DonorGiftConceptOpportunity"
domain: edu-cloud-dev-guide
topic: donorgiftconceptopportunity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.222Z
estimatedTokens: 708
keywords: [DonorGiftConceptOpportunity, junction, Donor, Gift, Concept, Opportunity, API, version, 66.0, later, Calls, Associated, Objects]
---

# DonorGiftConceptOpportunity

> The junction between a Donor Gift Concept and an Opportunity. This
      object is available in API version 66.0 and later.

# DonorGiftConceptOpportunity

The junction between a Donor Gift Concept and an Opportunity. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DonorGiftConceptId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe donor gift concept associated with this donor gift concept opportunity.This field is a relationship field.Relationship NameDonorGiftConceptRelationship TypeMaster-detailRefers ToDonorGiftConcept (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the donor gift concept opportunity. |
| OpportunityAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe estimated total gift amount of the associated opportunity. Read-only field that is derived from the opportunity amount. |
| OpportunityCloseDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the associated opportunity is expected to close. Read-only field that is derived from the opportunity close date. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe opportunity associated with the donor gift concept.This field is a relationship field and unique within your organization.Relationship NameOpportunityRefers ToOpportunity |
| OpportunityStageName | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe stage of the associated opportunity. Read-only field that is derived from the opportunity stage name.Possible values are:Closed LostClosed WonId. Decision MakersNeeds AnalysisNegotiation/ReviewPerception AnalysisProposal/Price QuoteProspectingQualificationValue Proposition |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

DonorGiftConceptOpportunityChangeEvent

Change events are available for the object.

DonorGiftConceptOpportunityFeed

Feed tracking is available for the object.

DonorGiftConceptOpportunityHistory

History is available for tracked fields of the object.
