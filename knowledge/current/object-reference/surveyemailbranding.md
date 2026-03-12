---
title: "SurveyEmailBranding"
domain: object-reference
topic: surveyemailbranding
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.496Z
estimatedTokens: 545
keywords: [SurveyEmailBranding, configuration, settings, invitation, emails, sent, survey, participants, particular, Calls, Special, Access, Rules]
---

# SurveyEmailBranding

> Represents the configuration settings for invitation emails sent to
			survey participants for a particular survey.

# SurveyEmailBranding

Represents the configuration settings for invitation emails sent to survey participants for a particular survey.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t define custom fields for the SurveyEmailBranding object using the Object Manager.

## Fields

| Field Name | Details |
| --- | --- |
| Body | TypetextareaPropertiesCreate, UpdateDescriptionThe body text of the invitation email. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique API name of the email branding configuration.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FooterImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the content asset that appears in the footer of the invitation email. |
| FromEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address that appears in the “From” field when the invitation is sent to participants. |
| HeaderImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the content asset that appears in the header of the invitation email. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the emails. Available languages include:Chinese (Simplified)Chinese (Traditional)DanishDutchEnglishFinnishFrenchGermanItalianJapaneseKoreanNorwegianPortuguese (Brazilian)RussianSpanishSpanish (Mexican)SwedishThai |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for these email configuration settings. |
| Subject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe subject of the invitation email. |
