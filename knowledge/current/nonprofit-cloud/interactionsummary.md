---
title: "InteractionSummary"
domain: nonprofit-cloud
topic: interactionsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.636Z
estimatedTokens: 1061
keywords: [InteractionSummary, summary, interaction, including, confidentiality, Calls, Associated, Objects]
---

# InteractionSummary

> Represents the summary of an interaction, including confidentiality
			information.

# InteractionSummary

Represents the summary of an interaction, including confidentiality information.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the customer who attended the client interaction.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ConfidentialityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the level of confidentiality of the information that's recorded in this interaction summary.Possible values are:ConfidentialPublic |
| InteractionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe client interaction related to the interaction summary.Relationship NameInteractionRelationship TypeLookupRefers ToInteraction |
| InteractionPurpose | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the purpose of the client interaction.Possible values are:Deal ExecutionMeet and GreetQuarterly Check-In |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MeetingNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed record of what transpired during the client interaction. |
| MeetingNotesStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the meeting notes. Available in API version 61.0 and later.Possible values are:NoYes |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The title of the interaction summary, capturing the summary of the interaction. |
| NextSteps | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe next steps that were decided during the interaction. |
| Offering | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe offerings that were discussed in the client interaction.Possible values are:Debt Capital MarketsEquity Capital MarketsMergers and Acquisitions Advisory |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartnerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the partner who attended the client interaction.Relationship NamePartner AccountRelationship TypeLookupRefers ToAccount |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the record such as an opportunity associated with a client interaction.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToApplication Form - Available in API version 62.0 and laterBenefit AssignmentCare PlanCaseCase ParticipantContactComplaint ParticipantGoal AssignmentOpportunityPublic ComplaintReferralService AppointmentVisit |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the interaction summary.Possible values are:DraftPublished |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

InteractionSummaryFeed

Feed tracking is available for the object.

InteractionSummaryHistory

History is available for tracked fields of the object.

InteractionSummaryOwnerSharingRule

Sharing rules are available for the object.

InteractionSummaryShare

Sharing is available for the object.
