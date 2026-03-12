---
title: "PartyPhilanthropicRsrchPrfl"
domain: edu-cloud-dev-guide
topic: partyphilanthropicrsrchprfl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.292Z
estimatedTokens: 1104
keywords: [PartyPhilanthropicRsrchPrfl, Captures, associated, contact, organization, many-to-one, relationship, Serves, pivot, point, research, person, API, version, 64.0]
---

# PartyPhilanthropicRsrchPrfl

> Captures information associated with a contact or an organization in a
         many-to-one relationship. Serves as a pivot point for research on the person or
         organization. This object is available in API version 64.0 and later.

# PartyPhilanthropicRsrchPrfl

Captures information associated with a contact or an organization in a many-to-one relationship. Serves as a pivot point for research on the person or organization. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account ID associated with the research profile.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the research profile.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact ID associated with the research profile.This field is a relationship field.Relationship NameContactRefers ToContact |
| DetailedSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA comprehensive summary of the research findings for the profile. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the research stage, used to measure the duration of the research period and assess the efficiency of the research. |
| HoursSpentOnResearch | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total hours spent on the stage, used for resource allocation and performance tracking. |
| IsResearchCompleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the research profile is complete (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the research profile record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PctOfResearchCompleted | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of completion for the research profile stage. |
| ResearchProfilePhase | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe research stage of the research profile.Possible values are:Cultivation Strategy DevelopmentDisqualificationIdentificationInitial ScreeningOngoing MonitoringPlanningPrioritizationQualificationRating and SegmentationResearch Deep DiveRobust Research Completed |
| ResearchProfileType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of research profile.Possible values are:Capital CampaignPlanned Giving |
| ResearcherAssignedId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe team member responsible for completing the research stage, ensuring accountability and tracking workload across researchers.This field is a relationship field.Relationship NameResearcherAssignedRefers ToUser |
| ShortSummary | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA brief summary of the research findings for the profile. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the research stage, used to track the duration of the stage and create a timeline for the research process. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

PartyPhilanthropicRsrchPrflHistory

History is available for tracked fields of the object.

PartyPhilanthropicRsrchPrflOwnerSharingRule

Sharing rules are available for the object.

PartyPhilanthropicRsrchPrflShare

Sharing is available for the object.
