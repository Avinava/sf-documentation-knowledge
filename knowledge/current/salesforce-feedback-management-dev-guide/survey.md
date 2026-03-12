---
title: "Survey"
domain: salesforce-feedback-management-dev-guide
topic: survey
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.610Z
estimatedTokens: 917
keywords: [Survey, Calls, Associated, Objects]
---

# Survey

> Represents a survey.

# Survey

Represents a survey.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

You can’t define custom fields for the Survey object using the Object Manager.

## Fields

| Field Name | Details |
| --- | --- |
| ActiveVersionID | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the survey version currently activated. |
| Description | TypestringPropertiesNillableDescriptionThe description of the survey. This field isn’t visible in the UI. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe survey’s unique API name. |
| IsPartialSaveEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether to save the partial responses for the survey (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current user last viewed a record related to the survey. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed the survey. |
| LatestVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the most recent version of this survey. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionThe name of the survey that appears in the UI. This field is read-only from API version 50.0. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who created the survey. |
| SurveyType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of the survey. The default value is Survey.Possible values are:ASSESSMENT — Survey type for sales enablement teams. Available from API version 58.0 and later.BASIC — Survey with a question page with like or dislike, long text, multiple selection, NPS, rating, short text, and single selection questions, and without inserted participant responses, display logic, and page branching logic.SURVEY — Survey with all the available features. |
| TotalVersionsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of versions of the survey. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

SurveyChangeEvent

Change events are available for the object.

SurveyFeed (API version 42.0)

Feed tracking is available for the object.

SurveyOwnerSharingRule

Sharing rules are available for the object.

SurveyShare

Sharing is available for the object.
