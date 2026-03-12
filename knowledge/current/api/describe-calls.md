---
title: "Describe Calls"
domain: api
topic: describe-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.362Z
estimatedTokens: 1014
keywords: [Describe, Calls, API, Samples]
---

# Describe Calls

> Lists supported describe calls in the API.

# Describe Calls

Lists supported describe calls in the API.

This table lists supported describe calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

For a list of Apex-related calls, see [Apex-Related Calls](atlas.en-us.api.meta/api/call_apex_list.htm "The following table lists supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call."), for a list of core calls, see [Core Calls](atlas.en-us.api.meta/api/sforce_api_calls_list.htm "A list of supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call."), and for a list of utility calls, see [Utility Calls](atlas.en-us.api.meta/api/utility_calls.htm "This topic describes API calls that your client applications can invoke to obtain the system timestamp, user information, and change user passwords.").

| Call | Description |
| --- | --- |
| describeAllTabs() | Returns information about all the tabs—including Lightning page tabs—available to the logged-in user, regardless of whether the user has chosen to hide tabs in his own user interface via the All Tabs (+) tab customization feature. |
| describeAppMenu() | Retrieves metadata about items either in the Salesforce mobile app navigation menu or the Salesforce dropdown app menu. |
| describeApprovalLayout() | Retrieves metadata about approval layouts for the specified object type. |
| describeAvailableQuickActions() | In API version 28.0, describes details about actions available for a specified parent. In API version 29.0 and greater, describes details about actions available for a specified context. |
| describeCompactLayouts() | Retrieves metadata about compact layouts for the specified object type. |
| describeDataCategoryGroups() | Retrieves available category groups for entities specified in the request. |
| describeDataCategoryGroupStructures() | Retrieves available category groups along with their data category structure for entities specified in the request. |
| describeGlobal() | Retrieves a list of available objects for your organization’s data. |
| describeGlobalTheme() | Returns information about both objects and themes available to the current logged-in user. |
| describeKnowledge() | Retrieves the Knowledge language settings in the organization. |
| describeLayout() | Retrieves metadata about page layouts for the specified object type. |
| describePrimaryCompactLayouts() | Retrieves metadata about the primary compact layout for each of the specified object types. |
| describeQuickActions() | Retrieves details about specified actions. |
| describeSearchScopeOrder() | Retrieves an ordered list of objects in the logged-in user’s default global search scope, including any pinned objects in the user’s search results page. |
| describeSObject() | Retrieves metadata (field list and object properties) for the specified object type. Superseded by describeSObjects(). |
| describeSObjects() | An array-based version of describeSObject. |
| describeSoftphoneLayout() | Describes one or more softPhone layouts created for an organization. |
| describeSoqlListViews() | Retrieves the SOQL query and other information about a list view. |
| describeTabs() | Returns information about the standard and custom apps available to the logged-in user, as listed in the Lightning Platform app menu at the top of the page. |
| describeTheme() | Returns information about themes available to the current logged-in user. |

## Samples

The samples in this section are based on the enterprise WSDL file. They assume that you have already imported the WSDL file and created a connection. To learn how to do so, see the [Quick Start](atlas.en-us.api.meta/api/sforce_api_quickstart_steps.htm) tutorial.

## Related Topics

- Apex-Related Calls (atlas.en-us.api.meta/api/call_apex_list.htm)
- Core Calls (atlas.en-us.api.meta/api/sforce_api_calls_list.htm)
- Utility Calls (atlas.en-us.api.meta/api/utility_calls.htm)
- describeAllTabs() (atlas.en-us.api.meta/api/sforce_api_calls_describealltabs.htm)
- describeAppMenu() (atlas.en-us.api.meta/api/sforce_api_calls_describeappmenu.htm)
- describeApprovalLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describeapprovallayout.htm)
- describeAvailableQuickActions() (atlas.en-us.api.meta/api/sforce_api_calls_describeavailablequickactions.htm)
- describeCompactLayouts() (atlas.en-us.api.meta/api/sforce_api_calls_describecompactlayouts.htm)
- describeGlobalTheme() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobaltheme.htm)
- describeLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
