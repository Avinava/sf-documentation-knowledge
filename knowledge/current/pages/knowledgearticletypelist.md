---
title: "knowledge:articleTypeList"
domain: pages
topic: knowledgearticletypelist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.652Z
estimatedTokens: 189
keywords: [knowledge, articleTypeList, loop, article, Simple, display, Attributes]
---

# knowledge:articleTypeList

> A loop on all available article types.

# knowledge:articleTypeList

A loop on all available article types.

## Simple example to display a list of all the available article types.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| articleTypeVar | String | The name of the variable that can be used to represent the article type object in the body of the articleTypeList component. | Yes | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<knowledge:articleTypeList articleTypeVar="articleType">
     {!articleType.label}<br />
</knowledge:articleTypeList>
```
