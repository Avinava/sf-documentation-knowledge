---
title: "SurveyVersion"
domain: object-reference
topic: surveyversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.597Z
estimatedTokens: 675
keywords: [SurveyVersion, version, survey, Calls, Associated, Objects]
---

# SurveyVersion

> Represents a version of a survey.

# SurveyVersion

Represents a version of a survey.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t define custom fields for the SurveyVersion object using the Object Manager.

## Fields

| Field Name | Details |
| --- | --- |
| BrandingSetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the branding set associated with the survey version. |
| Description | TypetextareaPropertiesNillableDescriptionThe description of this survey version. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the survey version is a template. Template surveys are automatically shared with all users in your Salesforce org. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to the survey version. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed the survey version. |
| Name | TypestringPropertiesFilter, Group, SortFilter, Group, SortFilter, Group, idLookup, SortDescriptionThe name of the survey that appears in the UI. |
| SurveyId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the survey associated with the survey version. |
| SurveyStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the survey. Possible values include:ActiveDraftObsoleteInvalidDraft |
| VersionNumber | TypeintPropertiesFilter, Group, SortDescriptionThe version number of the survey. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SurveyVersionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- SurveyVersionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
