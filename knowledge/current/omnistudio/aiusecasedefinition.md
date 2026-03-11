---
title: "AIUsecaseDefinition"
domain: omnistudio
topic: aiusecasedefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.303Z
keywords: [AIUsecaseDefinition, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# AIUsecaseDefinition

# AIUsecaseDefinition

Represents a collection of fields that are used to set up the use case for which real-time predictions are to be made. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve(), update()

## Supported REST API Methods

GET, HEAD, PATCH, Query

## Fields

| Field | Details |
| --- | --- |
| CreatorType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of user who created the use case definition that's used by AI Accelerator. Available in API version 57.0 and later.Possible values are:INTERNAL_USERSALESFORCE_ADMINThe default value is INTERNAL_USER. |
| DeveloperName | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionThe developer name of the use case definition.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the use case definition. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionThe label for the use case definition. |
| MaximumInsightCount | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of insights that can be returned by the response. |
| MaximumRecommendationCount | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of recommendations that can be returned by the Next Best Action Strategy. Available in API version 56.0 and later. |
| MaximumSuggestionCount | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of suggestions that can be returned by the response. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| PrimaryResponseObject | TypestringPropertiesFilter, Group, Nillable, False, Sort, UpdateDescriptionSpecifies the primary object. The object is used to save the scoring response that is based on the field mapping.A primary response object can be any standard object that is allowed by the use case’s cloud or any custom object. |
| RecommendationResponseObject | TypestringPropertiesCreate, Filter, Group, Nillable, False, Sort, UpdateDescriptionThe object in which the recommendations created by the Next Best Action Strategy are saved. |
| RecommendationSource | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe tool or platform that generates recommendations. Available in API version 57.0 and later.Possible values are:Next_Best_Action_FlowNoneThe default value is Next_Best_Action_Flow. |
| SecondaryResponseObject | TypestringPropertiesFilter, Group, Nillable, False, Sort, UpdateDescriptionSpecifies the secondary object. The object is used to save the scoring response that is based on the field mapping.A secondary response object can be any standard object that is allowed by the use case’s cloud or any custom object. |
| ShouldSaveFeatures | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to save the features extracted for the scoring request (true) or not (false).The default value is false. |
| ShouldSaveInsights | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to save the prediction insights used to generate the score (true) or not (false).The default value is false. |
| ShouldSaveRecommendation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to save the recommendations created by the Next Best Action Strategy.The default value is false. |
| ShouldSaveRequestResponse | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to save the scoring request response (true) or not (false).The default value is false. |
| ShouldSaveScore | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to save the prediction score (true) or not (false).The default value is false. |
| ShouldSaveSuggestions | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to save the suggestions for improving the prediction score (true) or not (false).The default value is false. |
| SuggestionImpactMinimumPct | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe minimum eligible percentage for improving the existing prediction score based on suggestions. Suggestions with an impact greater than the specified percentage on the score are displayed on the prediction scorecard. |
| UsecaseName | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe unique name of the use case definition. |