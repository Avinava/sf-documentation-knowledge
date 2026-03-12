---
title: "LearningAchievementConfig"
domain: edu-cloud-dev-guide
topic: learningachievementconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.423Z
estimatedTokens: 546
keywords: [LearningAchievementConfig, mapping, Learning, Achievement, record, API, version, 59.0, later, Calls]
---

# LearningAchievementConfig

> Represents the mapping details between a Learning Achievement type and a
         Learning Achievement record type. This object is available in API version 59.0 and
      later.

# LearningAchievementConfig

Represents the mapping details between a Learning Achievement type and a Learning Achievement record type. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the Learning Achievement Configuration record. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the Learning Achievement Configuration record. |
| IconName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe icon for the Learning Achievement type that is shown on the Learning Program Builder. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe supported language for the learning achievement configuration.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LearningAchievementType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the type of Learning Achievement.Possible values are:AchievementGroup—Achievement GroupAchievementGroupAll—Achievement Group AllCustomLearningCourse—Learning CourseLearningProgram—Learning ProgramSkill—Skill |
| LearningAchvRecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record type that's associated with the Learning Achievement type.This field is a relationship field.Relationship NameLearningAchvRecordTypeRelationship TypeLookupRefers ToRecordType |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the Learning Achievement type. |
| NamespacePrefix | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe namespace prefix of the Learning Achievement Configuration record. |
