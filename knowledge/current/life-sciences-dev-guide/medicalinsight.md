---
title: "MedicalInsight"
domain: life-sciences-dev-guide
topic: medicalinsight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:11.077Z
estimatedTokens: 754
keywords: [MedicalInsight, observed, heard, various, outlets, meetings, calls, research, inform, strategies, better, patient, care]
---

# MedicalInsight

> Represents the important information observed or heard through various
         outlets like meetings, calls, or research, which is used to inform strategies for better
         patient care.

# MedicalInsight

Represents the important information observed or heard through various outlets like meetings, calls, or research, which is used to inform strategies for better patient care.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChildMedicalInsightCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of similar insights that are associated with the medical insight. |
| Content | TypetextareaPropertiesCreate, UpdateDescriptionThe description of the medical insight. |
| DefaultRank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default rank of the medical insight that's determined based on the total number of linked insights and their upvotes. |
| GoalDefinitionCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of goals linked to the medical insight. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastUpvotedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when a user last upvoted the medical insight. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the medical insight record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentMedicalInsightId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent record associated with the medical insight.This field is a relationship field.Relationship NameParentMedicalInsightRefers ToMedicalInsight |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the source of the medical insight.Possible values are:AccountHome PageMedical Insights TabMeetingVisit |
| TopicNames | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe names of the topics that are tagged to the medical insight. |
| UpvoteCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of upvotes received for the medical insight. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider visit associated with the medical insight.This field is a relationship field.Relationship NameProviderVisitRefers ToVisit |
