---
title: "knowledge:articleCaseToolbar"
domain: pages
topic: knowledgearticlecasetoolbar
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.638Z
estimatedTokens: 237
keywords: [knowledge, articleCaseToolbar, component, article, opened, case, detail, current, lets, user, attach, FAQ, custom, article-type, template]
---

# knowledge:articleCaseToolbar

> UI component used when an article is opened from the case detail page. This component shows current case information and lets the user attach the article to the case.

# knowledge:articleCaseToolbar

UI component used when an article is opened from the case detail page. This component shows current case information and lets the user attach the article to the case.

## An example of an 'FAQ' custom article-type template that uses this component

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| articleId | String | Id of the current article. | Yes | 43.0 |  |
| caseId | String | Id of the current case. | Yes | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components on the page. |  | 14.0 | global |
| includeCSS | Boolean | Specifies whether this component must include the CSS. Default is true. |  | 43.0 |  |
| rendered | Boolean | Specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<apex:page standardController="FAQ__kav" sidebar="false" >
    <knowledge:articleCaseToolbar
        rendered="{!$CurrentPage.parameters.caseId != null}"
        caseId="{!$CurrentPage.parameters.caseId}"
        articleId="{!$CurrentPage.parameters.id}" />
    <h1>{!FAQ__kav.Title}</h1><br />
 </apex:page>
```
