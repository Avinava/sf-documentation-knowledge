---
title: "knowledge:categoryList"
domain: pages
topic: knowledgecategorylist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.656Z
estimatedTokens: 439
keywords: [knowledge, categoryList, loop, subset, category, hierarchy, total, number, categories, can't, exceed, descendents, phone, product, group]
---

# knowledge:categoryList

> A loop on a subset of the category hierarchy. The total number of categories displayed in
			a page can't exceed 500.

# knowledge:categoryList

A loop on a subset of the category hierarchy. The total number of categories displayed in a page can't exceed 500.

You must have access to the category you set as rootCategory to get a list of any categories. To list categories available to a user, see the [Knowledge Support REST APIs.](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_knowledge_support.htm "html (New Window)")

## List descendents of the 'phone' category. 'phone' is in the 'product' category group.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| ancestorsOf | String | If specified, the component will enumerate the category hierarchy up to the root (top-level) category. rootCategory can be used to specify the top-level category. |  | 43.0 |  |
| categoryGroup | String | The category group to which the individual categories belong. | Yes | 43.0 |  |
| categoryVar | String | The name of the variable that can be used to represent the article type object in the body of the categoryList component. | Yes | 43.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| level | Integer | If specified with rootCategory, the component will stop at this specified depth in the category hierarchy. -1 means unlimited. |  | 43.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| rootCategory | String | If specified without ancestorsOf, the component will loop on the descendents of this category. |  | 43.0 |  |

## Code Examples

```
<select name="category">
    <knowledge:categoryList categoryVar="category" categoryGroup="product" rootCategory="phone" level="-1">
        <option value="{!category.name}">{!category.label}</option>
    </knowledge:categoryList>
</select>
```
