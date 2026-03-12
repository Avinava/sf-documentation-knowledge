---
title: "CaseEpisode"
domain: psc-api
topic: caseepisode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.416Z
estimatedTokens: 863
keywords: [CaseEpisode, episode, linked, case, proceeding, result, business, person, license, subject, API, version, 58.0, later]
---

# CaseEpisode

> Represents the episode linked to a case or a case proceeding result, where a
         business or person or license is the subject. This object is available in API version
      58.0 and later.

# CaseEpisode

Represents the episode linked to a case or a case proceeding result, where a business or person or license is the subject. This object is available in API version 58.0 and later.

## Fields

| Field | Details |
| --- | --- |
| AddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address where the subject is being removed from or placed at.This field is a relationship field.Relationship NameAddressRelationship TypeLookupRefers ToAddress |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the case associated with the case episode.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the case episode. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd date of the case episode. |
| EpisodeAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies business or person account who are involved in the removal or placement of the subject.This field is a relationship field.Relationship NameEpisodeAccountRelationship TypeLookupRefers ToAccount |
| EpisodeReasonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe situation that led to the case episode.This field is a relationship field.Relationship NameEpisodeReasonRelationship TypeLookupRefers ToCaseProceedingResult |
| EpisodeSubType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subtypes of the case episode.Possible values are:Foster Care OrganizationFoster Care FamilyHome ParentsPrisonSpecified Relative |
| EpisodeType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the types of case episode.Possible values are:DetentionEvictionPlacementProbationRemovalRevocationSuspension |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the case episode record. |
| RelatedEpisodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the relationship between all related case episodes.This field is a relationship field.Relationship NameRelatedEpisodeRelationship TypeLookupRefers ToCaseEpisode |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionStart date of the case episode. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the case episode.Possible values are:ClosedIn ProgressOpen |
| StatusChangeReason | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the reason for changing the status of the case episode. |
| SubjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the subject involved in the case episode.This field is a polymorphic relationship field.Relationship NameSubjectRelationship TypeLookupRefers ToAccount, BusinessLicense, Contact |
