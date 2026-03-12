---
title: "Knowledge__DataCategorySelection"
domain: object-reference
topic: knowledgedatacategoryselection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.387Z
estimatedTokens: 474
keywords: [Knowledge__DataCategorySelection, data, category, classifies, article, API, version, 39.0, later, Knowledge, _DataCategorySelection, Calls, Special, Access, Rules]
---

# Knowledge__DataCategorySelection

> Represents a data category that classifies an article. This object is
    available in API version 39.0 and later.

# Knowledge\_\_DataCategorySelection

Represents a data category that classifies an article. This object is available in API version 39.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

By default, the prefix for this object name is Knowledge and that is the value shown in this reference. However, this prefix can be modified by changing the **Object Name** for the Knowledge\_\_kav object in Object Manager.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Lightning Knowledge must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| DataCategoryGroupName | TypedatacategorygroupreferencePropertiesCreateDescriptionUnique name of the data category group which has categories associated with the article. |
| DataCategoryName | TypedatacategorygroupreferencePropertiesCreateDescriptionUnique name of the data category associated with the article. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the article associated with the data category selection. |

## Usage

Every article in Salesforce Knowledge can be categorized. A data category selection represents a category that has been selected to classify an article. You can use this object to query and manage article categorization in your organization. Client applications can create a categorization for an article with a Draft status. They can also delete and query article categorizations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When using this object to classify an article, you can't select both a category (for example USA) and one of its descendants (California) or ascendant categories (North America). In this case, only the first category is selected.
