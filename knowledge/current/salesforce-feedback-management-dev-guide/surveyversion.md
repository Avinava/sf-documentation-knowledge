---
title: "SurveyVersion"
domain: salesforce-feedback-management-dev-guide
topic: surveyversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.706Z
estimatedTokens: 525
keywords: [SurveyVersion, version, survey, Calls, Associated, Objects]
---

# SurveyVersion

> Represents a version of a survey.

# SurveyVersion

Represents a version of a survey.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

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

SurveyVersionChangeEvent

Change events are available for the object.
