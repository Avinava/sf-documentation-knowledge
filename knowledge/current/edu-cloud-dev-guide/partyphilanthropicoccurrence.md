---
title: "PartyPhilanthropicOccurrence"
domain: edu-cloud-dev-guide
topic: partyphilanthropicoccurrence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.618Z
estimatedTokens: 1609
keywords: [PartyPhilanthropicOccurrence, xxx, API, version, XX.0, later, Calls, Associated, Objects]
---

# PartyPhilanthropicOccurrence

> xxx This object is available in API version XX.0 and later.

# PartyPhilanthropicOccurrence

xxx This object is available in API version XX.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the occurrence.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AttributedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user the research is attributed to.This field is a relationship field.Relationship NameAttributedUserRefers ToUser |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case that delivers the research.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the occurrence.This field is a relationship field.Relationship NameContactRefers ToContact |
| DateCollected | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the information about the occurrence was collected. |
| EstimatedValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated monetary value of the occurrence. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated string or number assigned to the party philanthropic occurrence. |
| OccurrenceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of occurrence, such as donation history, net worth, volunteer hours, or inheritance.Possible values are:Donation HistoryInheritanceNet WorthVolunteer Hours |
| OtherSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn occurrence source that isn't a Salesforce record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant contact involved in collecting the research.This field is a relationship field.Relationship NameParticipantRefers ToContact |
| PartyPhilanthropicAssessmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party philanthropic assessment associated with the occurrence.This field is a relationship field.Relationship NamePartyPhilanthropicAssessmentRefers ToPartyPhilanthropicAssessment |
| PartyPhilanthropicRsrchPrflId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe research profile associated with the occurrence.This field is a relationship field.Relationship NamePartyPhilanthropicRsrchPrflRelationship TypeLookupRefers ToPartyPhilanthropicRsrchPrfl |
| RelatedOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the organization that provided the occurrence.This field is a relationship field.Relationship NameRelatedOrganizationRefers ToAccount |
| ResearchEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the research, used to measure the duration of the research period and assess the efficiency of the research. |
| ResearchHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total hours spent researching the occurrence, used to track resource allocation and time spent on researching each prospect. |
| ResearchSharedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the completed research is shared with the relationship officer, used to ensure transparency and track the flow of information in prospect engagement. |
| ResearchStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the research, used to create a timeline for the research process and track the duration of the research phase. |
| ResearchType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification of research for the occurrence.Possible values are:CommunicationEngagementMedia MentionPhilanthropyVolunteerismWealth |
| SourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business milestone, life event, or interaction summary associated wiith the occurrence.This field is a polymorphic relationship field.Relationship NameSourceRefers ToBusinessMilestone, InteractionSummary, PersonLifeEvent |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of source, such as external interaction, internal data, third-party data, or public records.Possible values are:External InteractionInternal DataPublic RecordsThird-Party Data |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the occurrence. |
| VerificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the occurrence is known or inferred.Possible values are:InferredKnown |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

PartyPhilanthropicOccurrenceHistory

History is available for tracked fields of the object.

PartyPhilanthropicOccurrenceOwnerSharingRule

Sharing rules are available for the object.

PartyPhilanthropicOccurrenceShare

Sharing is available for the object.
