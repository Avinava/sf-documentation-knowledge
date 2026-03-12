---
title: "support:caseArticles"
domain: pages
topic: supportcasearticles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.158Z
estimatedTokens: 1002
keywords: [support, caseArticles, Displays, case, articles, tool, show, currently, attached, article, Keyword, search, component, organizations, Feed]
---

# support:caseArticles

> Displays the case articles tool. The tool can show articles currently attached to the Case and/or an article Keyword search. This component can only be used in organizations that have Case Feed and Knowledge enabled. Ext JS versions less than 3 should not be included on pages that use this component

# support:caseArticles

Displays the case articles tool. The tool can show articles currently attached to the Case and/or an article Keyword search. This component can only be used in organizations that have Case Feed and Knowledge enabled. Ext JS versions less than 3 should not be included on pages that use this component.

## This example displays the case articles tool.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| articleTypes | String | Article types to be used to filter the search. Multiple article types can be defined, separated by commas. |  | 25.0 |  |
| attachToEmailEnabled | Boolean | A Boolean value that specifies whether articles can be attached to emails. |  | 25.0 |  |
| bodyHeight | String | The height of the body in pixels (px) or 'auto' to automatically adjust to the height of the currently displayed list of articles. |  | 25.0 |  |
| caseId | id | Case ID of the record for which to display the case articles. | Yes | 25.0 |  |
| categories | String | Data categories to be used to filter the search. The format of this value should be: 'CatgeoryGroup1:Category1' where CategoryGroup1 and Category1 are the names of a Category Group and a Category respectively. Multiple category filters can be specified separated by commas but only one per category group. |  | 25.0 |  |
| categoryMappingEnabled | Boolean | A Boolean value that specifies whether the default data category mapping pre-filtering should be taken into account or not . |  | 25.0 |  |
| defaultKeywords | String | The keywords to be used when the defaultSearchType attribute is 'keyword'. If no keywords are specified, the Case subject is used as a default. |  | 25.0 |  |
| defaultSearchType | String | Specifies the default query of the article search form when it is first displayed. The value can be 'keyword', 'mostViewed', or 'lastPublished'. |  | 25.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| insertLinkToEmail | Boolean | A Boolean value that specifies whether articles can be shared by URL. |  | 25.0 |  |
| language | String | A language to be used for filtering the search if multilingual Knowledge is enabled. |  | 25.0 |  |
| logSearch | Boolean | A Boolean value that specifies whether keyword searches should be logged. |  | 25.0 |  |
| mode | String | Specifies whether the component displays articles currently attached to the case, an article search form, or both. The value can be 'attached', 'search', 'attachedAndSearch', or 'searchAndAttached'. |  | 25.0 |  |
| onSearchComplete | String | The JavaScript invoked after an article search has completed. |  | 25.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of the action method returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 25.0 |  |
| searchButtonName | String | The display name of the search button. |  | 25.0 |  |
| searchFieldWidth | String | The width of the keyword search field in pixels (px). |  | 25.0 |  |
| searchFunctionName | String | The name of a function that can be called from JavaScript to search for articles if the widget is currently in search mode. |  | 25.0 |  |
| showAdvancedSearch | Boolean | A Boolean value that specifies whether the advanced search link should be displayed. |  | 25.0 |  |
| title | String | The title displayed in the component's header. |  | 25.0 |  |
| titlebarStyle | String | The style of the title bar can be 'expanded', 'collapsed', 'fixed', or 'none'. |  | 25.0 |  |
| width | String | The width of the component in pixels (px) or percentage (%). |  | 25.0 |  |

## Code Examples

```
<apex:page standardController="Case" showHeader="true">
                <support:caseArticles id="myCaseArticle"
                    caseId="{!case.id}"
                    title="Article Widget"
                    width="500px" 
                    bodyHeight="200px" 
                    mode="attachedAndSearch" 
                    defaultSearchType="lastPublished" 
                    defaultKeywords="reset issue"
                    titlebarStyle="expanded" 
                />          
            </apex:page>
```
