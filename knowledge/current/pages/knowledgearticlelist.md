---
title: "knowledge:articleList"
domain: pages
topic: knowledgearticlelist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.644Z
estimatedTokens: 674
keywords: [knowledge, articleList, displays, ten, viewed, articles, phone, category, HTML, links, products, group, Attributes]
---

# knowledge:articleList

# knowledge:articleList

A loop on a filtered list of articles. You can use this component up to four times on the same page. Note that you can only specify one criterion for each data category and that only standard fields are accessible, such as:

-   ID (string): the ID of the article
-   Title (string): the title of the article
-   Summary (string): the summary of the article
-   urlName (string): the URL name of the article
-   articleTypeName (string): the developer name of the article type
-   articleTypeLabel (string): the label of the article type
-   lastModifiedDate (date): the date of the last modification
-   firstPublishedDate (date): the date of the first publication
-   lastPublishedDate (date): the date of the last publication

## knowledge:articleList example that displays the ten most viewed articles in the 'phone' category as an HTML list of links. 'phone' is in the 'products' category group.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| articleTypes | String | The article list can be filtered by article types. |  | 43.0 |  |
| articleVar | String | The name of the variable that can be used to represent the article object in the body of the articleList component. | Yes | 43.0 |  |
| categories | String | The article list can be filtered by data categories. |  | 43.0 |  |
| hasMoreVar | String | The boolean variable name indicating whether the list contains more articles. |  | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| isQueryGenerated | Boolean | Flag indicating whether this article list was produced from a generated query that did not originate from the user. |  | 43.0 |  |
| keyword | String | The search keyword if the search is not null. When the keyword attribute is specified, the results are sorted by keyword relevance and the sortBy attribute is ignored. |  | 43.0 |  |
| language | String | The language in which the articles must be retrieved. |  | 43.0 |  |
| pageNumber | Integer | The current page number. |  | 43.0 |  |
| pageSize | Integer | The number of articles displayed at once. The total number of articles displayed in a page cannot exceed 200. |  | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| sortBy | String | The sort value applied to the article list: 'mostViewed,' 'lastUpdated,' and 'title'. When the keyword attribute is specified, the sortBy attribute is ignored. |  | 43.0 |  |

## Code Examples

```
<apex:outputPanel layout="block">
    <ul>
        <knowledge:articleList articleVar="article"
            categories="products:phone"
            sortBy="mostViewed"
            pageSize="10"
        >
            <li><a href="{!URLFOR($Action.KnowledgeArticle.View, article.id)}">{!article.title}</a></li>
        </knowledge:articleList>
    </ul>
</apex:outputPanel>
```
