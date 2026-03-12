---
title: "PartyPhilanthropicIndicator"
domain: edu-cloud-dev-guide
topic: partyphilanthropicindicator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.588Z
estimatedTokens: 1639
keywords: [PartyPhilanthropicIndicator, unconfirmed, soft, indication, highlights, person's, wealth, growth, potential, API, version, 63.0, later, Calls, Associated]
---

# PartyPhilanthropicIndicator

> Represents an unconfirmed or soft indication that highlights a person's
         wealth or growth potential. This object is available in API version 63.0 and later.

# PartyPhilanthropicIndicator

Represents an unconfirmed or soft indication that highlights a person's wealth or growth potential. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the indicator.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AttributedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person the research is attributed to.This field is a relationship field.Relationship NameAttributedUserRefers ToUser |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case that delivers the research.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the indicator.This field is a relationship field.Relationship NameContactRefers ToContact |
| DateCollected | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the information about the indicator was collected. |
| EstimatedValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated monetary value of the indicator. |
| Indicator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe indicator, such as donation history, net worth, volunteer hours, or inheritance.Possible values are:Donation HistoryInheritanceNet WorthVolunteer Hours |
| IndicatorType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of indicator, such as engagement, wealth, philanthropy, communication, volunteerism, or media mention.Possible values are:CommunicationEngagementMedia MentionPhilanthropyVolunteerismWealth |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated string or number assigned to the party philanthropic indicator. |
| OtherSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn indicator source that isn't a Salesforce object. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person involved in collecting the research.This field is a relationship field.Relationship NameParticipantRefers ToContact |
| PartyPhilanthropicOccurrenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prospect research event associated with the indicator.This field is a relationship field.Relationship NamePartyPhilanthropicOccurrenceRefers ToPartyPhilanthropicOccurrence |
| PartyPhilanthropicRsrchPrflId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe research profile associated with the indicator.This field is a relationship field.Relationship NamePartyPhilanthropicRsrchPrflRelationship TypeLookupRefers ToPartyPhilanthropicRsrchPrfl |
| RelatedOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization involved in collecting the research.This field is a relationship field.Relationship NameRelatedOrganizationRefers ToAccount |
| ResearchEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the research, used to measure the research period and assess the efficiency of the research. |
| ResearchHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total hours spent researching the indicator, used to track resource allocation and time spent on researching each prospect. |
| ResearchSharedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the completed research is shared with the relationship officer, used to ensure transparency and track the flow of information in prospect engagement. |
| ResearchStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the research, used to create a timeline for the research process and track the duration of the research phase. |
| SourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business milestone, life event, or interaction summary associated with the indicator.This field is a polymorphic relationship field.Relationship NameSourceRefers ToBusinessMilestone, InteractionSummary, PersonLifeEvent |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of source, such as external interaction, internal data, third-party data, or public records.Possible values are:External InteractionInternal DataPublic RecordsThird-Party Data |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the prospect research indicator, if it hasn't been verified as a party philanthropic occurrence.Possible values are:Promoted |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA summary of the indicator. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

PartyPhilanthropicIndicatorHistory

History is available for tracked fields of the object.

PartyPhilanthropicIndicatorOwnerSharingRule

Sharing rules are available for the object.

PartyPhilanthropicIndicatorShare

Sharing is available for the object.
