---
title: "MedicalInsightGoalDef"
domain: life-sciences-dev-guide
topic: medicalinsightgoaldef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:11.092Z
estimatedTokens: 429
keywords: [MedicalInsightGoalDef, goal, needed, address, medical, insight, Calls]
---

# MedicalInsightGoalDef

> Represents the goal needed to address the medical insight.

# MedicalInsightGoalDef

Represents the goal needed to address the medical insight.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| GoalDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe goal linked to the medical insight.This field is a relationship field.Relationship NameGoalDefinitionRefers ToGoalDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MedicalInsightId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe medical insight linked to the goal.This field is a relationship field.Relationship NameMedicalInsightRelationship TypeMaster-detailRefers ToMedicalInsight (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the medical insight goal definition record. |
