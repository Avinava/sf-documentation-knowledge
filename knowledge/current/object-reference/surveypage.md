---
title: "SurveyPage"
domain: object-reference
topic: surveypage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.516Z
estimatedTokens: 423
keywords: [SurveyPage, title, question, survey, Calls, Associated, Objects]
---

# SurveyPage

> Represents a page, such as the title page or a question page, in a
         survey.

# SurveyPage

Represents a page, such as the title page or a question page, in a survey.

## Supported Calls

getDeleted(), getUpdated(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

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

[SurveyPageChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- SurveyPageChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
