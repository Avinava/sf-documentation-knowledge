---
title: "SearchResultActionConfig"
domain: omnistudio
topic: searchresultactionconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.652Z
keywords: [SearchResultActionConfig, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# SearchResultActionConfig

# SearchResultActionConfig

Represents a collection of fields to set up the actions that a user can perform on results returned by criteria-based search. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, Criteria-Based Search and Filter must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| ActionReference | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe action that a user can launch for a search result. Specify the ID of an instance that corresponds to your action type. |
| ActionScope | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the scope of the action that the user can launch.Possible values are:Global—Select to apply the action to all record types in the search result.Inline—Select to restrict the action to a single record. |
| ActionType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the type of action that a user can launch.Possible values are:FlowDefinitionLightningWebComponentOmniScript—Available in API version 60.0 and later. |
| AgentConfirmationMessage | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe confirmation message displayed to the agent. The character limit is 255. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the search result action configuration. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name for the search result action configuration. |
| IsAiAction | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the current action uses generative AI (true) or not (false). The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the search result action configuration. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the search result action configuration. In the UI, this field is Name. |
| Metadata | TypeSearchResultActionConfigPropertiesCreate, Nillable, UpdateDescriptionThe search result action configuration’s metadata. |