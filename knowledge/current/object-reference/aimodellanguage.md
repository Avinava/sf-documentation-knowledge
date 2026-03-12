---
title: "AiModelLanguage"
domain: object-reference
topic: aimodellanguage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.189Z
estimatedTokens: 432
keywords: [AiModelLanguage, stores, language, generated, model, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# AiModelLanguage

> An object that stores language related information that is generated for each
         AI model.  This object is available in API version 55.0 and later.

# AiModelLanguage

An object that stores language related information that is generated for each AI model. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

For Einstein Reply Recommendations:

-   Requires the Einstein Reply Recommendations org permissions, Einstein Reply Recommendations org pref, and Admin user or user with Einstein Reply Manager permissions.

## Fields

| Field | Details |
| --- | --- |
| ApplicationType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionType of application using the AI model.Possible values are:ARTICLE_RECOMMENDATIONEAR_FOR_CONVERSATIONEAR_FOR_VOICEFAQREPLY_RECOMMENDATIONUSE_CASE_EXPLORERUTTERANCE_RECOMMENDATION |
| ExternalAiModelId | TypereferencePropertiesFilter, Group, SortDescriptionID of the AI model used to generate predictions.This field is a relationship field.Relationship NameExternalAiModelRelationship TypeLookupRefers ToExternalAIModel |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionLanguages supported by this AI model.Possible values are:ArabicChinese-simplifiedChinese-traditionalDutchEnglishFrenchGermanItalianJapaneseKoreanPolishPortugueseRussianSpanishThaiTurkish |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAI model name. |
| ServingStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionDetermines if the language is enabled or disabled for this AI model. |
| TranscriptCount | TypeintPropertiesFilter, Group, SortDescriptionTranscript count detected for each language. |
