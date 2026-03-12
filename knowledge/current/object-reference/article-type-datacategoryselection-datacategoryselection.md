---
title: "Article Type __DataCategorySelection __DataCategorySelection"
domain: object-reference
topic: article-type-datacategoryselection-datacategoryselection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.898Z
estimatedTokens: 795
keywords: [Article, __DataCategorySelection, data, category, selection, classifies, API, version, 19.0, later, _DataCategorySelection, Calls, Special, Access, Rules]
---

# Article Type __DataCategorySelection __DataCategorySelection

> A data category selection represents a data category that classifies
      an article. This object is available in API version 19.0 and later.

# Article Type \_\_DataCategorySelection \_\_DataCategorySelection

A data category selection represents a data category that classifies an article. This object is available in API version 19.0 and later.

This object can be used to associate an article with data categories from a data category group or to query the category selections for an article.

The object name is variable and has a syntax of Article Type\_\_DataCategorySelection, where Article Type is the Object Name for the article type associated with the article. For example, Offer\_\_DataCategorySelection represents the association between the Offer article type and its data categories. Every article is associated with an article type.

## Supported Calls

create(), delete(), describeSObjects(), query(), getDeleted(), retrieve()

## Special Access Rules

Knowledge must be enabled in your org. Not available in Lightning Knowledge. Users can only access, create or delete data category selection visible to their role, permission set, or profile. If a user has partial visibility on an article's categorization, only the visible categories are returned.

## Fields

| Field Name | Details |
| --- | --- |
| DataCategoryGroupName | TypeDataCategoryGroupReferencePropertiesCreateDescriptionUnique name of the data category group which has categories associated with the article. |
| DataCategoryName | TypeDataCategoryGroupReferencePropertiesCreateDescriptionUnique name of the data category associated with the article. |
| ParentId | TypereferencePropertiesCreate, FilterDescriptionID of the article associated with the data category selection. |

## Usage

Every article in Salesforce Knowledge can be categorized. A data category selection represents a category that has been selected to classify an article. You can use the Article Type\_\_DataCategorySelection object to query and manage article categorization in your org. Client applications can create a categorization for an article with a Draft status. They can also delete and query article categorizations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When using Article Type\_\_DataCategorySelection to classify an article, you can't select both a category (for example USA) and one of its descendants (California) or ascendant categories (North America). In this case, only the first category is selected.

Answers zones use QuestionDataCategorySelection to classify questions.

## SOQL Sample

The following SOQL query returns the data category selections used to classify the article whose ID is ka0D000000005ApIAI.

```

```

This clause only returns category unique names. To retrieve category labels use the following clause:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=object_reference)

#### Tip

You can also use relationship queries to retrieve categorizations from an article type.

#### See Also

-   [QuestionDataCategorySelection](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_questiondatacategoryselection.htm "A data category selection represents a data category that classifies a question.")

## Code Examples

```
SELECT Id,DataCategoryName, ParentId
        FROM Offer__DataCategorySelection WHERE ParentId='ka0D000000005ApIAI'
```

```
SELECT Id,toLabel(DataCategoryName), ParentId
        FROM Offer__DataCategorySelection WHERE ParentId='ka0D000000005ApIAI'
```

## Related Topics

- DataCategoryGroupReference (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- QuestionDataCategorySelection (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_questiondatacategoryselection.htm)
