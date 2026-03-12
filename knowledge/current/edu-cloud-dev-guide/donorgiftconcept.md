---
title: "DonorGiftConcept"
domain: edu-cloud-dev-guide
topic: donorgiftconcept
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.214Z
estimatedTokens: 1392
keywords: [DonorGiftConcept, initial, idea, proposal, gift, including, donor’s, intent, preliminary, purpose, API, version, 64.0, later, Calls]
---

# DonorGiftConcept

> The initial idea or proposal for a gift, including the donor’s intent
         and preliminary purpose.  This object is available in API version 64.0 and later.

# DonorGiftConcept

The initial idea or proposal for a gift, including the donor’s intent and preliminary purpose. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the gift concept record.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ConceptPriority | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe level of a proposed gift's importance to the donor or institution relative to other proposed gifts. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA contact for the gift concept.This field is a relationship field.Relationship NameContactRefers ToContact |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the gift concept. |
| DonorCommitmentLikelihood | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn estimate of the likelihood the donor commits to the gift concept. |
| DonorId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe donor associated with the gift concept.This field is a relationship field.Relationship NameDonorRefers ToAccount |
| DonorPriorityRank | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe donor's rank of a gift concept among other potential gifts the donor is considering. |
| EstimatedGiftValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn estimate of a proposed gift's potential value, based on preliminary discussions with the donor. |
| ExpectedEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| ExpectedStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected end date for formalizing the gift concept. |
| GiftAgreementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA gift agreement record associated with the gift concept, used to track its progression from concept to commitment.This field is a relationship field.Relationship NameGiftAgreementRefers ToGiftAgreement |
| InstitutionPriorityRank | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionYour institution's rank of a gift concept's importance to its fundraising strategy. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the gift concept record. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOpportunity records associated with the gift concept, used to track its progression from concept to commitment.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SequenceNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA gift concept's position in a sequence of proposals for the donor. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the gift concept.Possible values are:Concept ApprovedIn DiscussionIn ReviewPending ApprovalPlanning |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the gift concept. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the gift concept.Possible values are:Capital Campaign ConceptIn DevelopmentMajor Gift ConceptOther Gift ConceptPlanned Gift ConceptProgram and Support Gift ConceptSpecialized Gift Concept |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DonorGiftConceptChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)

Change events are available for the object.

[DonorGiftConceptFeed](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[DonorGiftConceptHistory](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[DonorGiftConceptOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[DonorGiftConceptShare](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
