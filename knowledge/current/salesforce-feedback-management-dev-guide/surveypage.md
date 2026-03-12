---
title: "SurveyPage"
domain: salesforce-feedback-management-dev-guide
topic: surveypage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.637Z
estimatedTokens: 273
keywords: [SurveyPage, title, question, survey, Calls, Associated, Objects]
---

# SurveyPage

> Represents a page, such as the title page or a question page, in a
         survey.

# SurveyPage

Represents a page, such as the title page or a question page, in a survey.

## Supported Calls

getDeleted(), getUpdated(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

You can’t define custom fields for the SurveyPage object using the Object Manager.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique API name of this SurveyPage object. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the survey page that appears in the UI. |
| SurveyVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe version of the survey that the page belongs to. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

SurveyPageChangeEvent

Change events are available for the object.
