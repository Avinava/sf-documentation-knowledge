---
title: "knowledge:articleRendererToolbar"
domain: pages
topic: knowledgearticlerenderertoolbar
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.648Z
estimatedTokens: 295
keywords: [knowledge, articleRendererToolbar, Displays, toolbar, article, includes, voting, stars, Chatter, feed, language, picklist, panel, Ext, versions]
---

# knowledge:articleRendererToolbar

> Displays a header toolbar for an article. This toolbar includes voting stars, a Chatter feed, a language picklist and a properties panel. Ext JS versions less than 3 should not be included on pages that use this component.

# knowledge:articleRendererToolbar

Displays a header toolbar for an article. This toolbar includes voting stars, a Chatter feed, a language picklist and a properties panel. Ext JS versions less than 3 should not be included on pages that use this component.

## knowledge:articleRendererToolBar example that displays the toolbar in a custom renderer.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| articleId | String | The id of the article. |  | 43.0 |  |
| canVote | Boolean | If true, the vote component is editable. If false, it is readonly. |  | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| includeCSS | Boolean | Specifies whether this component must include the CSS |  | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| showChatter | Boolean | Set this to true if Chatter is enabled, and the article renderer requires a feed |  | 43.0 |  |

## Code Examples

```
<apex:page standardController='FAQ__kav' showHeader='false' sidebar='false'>
          <knowledge:articleRendererToolBar
              articleId="{! $CurrentPage.parameters.id}"
          />
      </apex:page>
```
