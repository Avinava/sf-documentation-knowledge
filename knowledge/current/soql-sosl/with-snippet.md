---
title: "WITH SNIPPET"
domain: soql-sosl
topic: with-snippet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.970Z
estimatedTokens: 1303
keywords: [SNIPPET, clause, added, SOSL, query, article, case, feed, idea, searches, search, results, excerpts, below, titles]
---

# WITH SNIPPET

> WITH SNIPPET is an optional
            clause that can be added to a SOSL query for article, case, feed, and idea searches. On
            the search results page, excerpts below article titles show terms matching the search
            query highlighted within the context of surrounding text. Snippets make it easier for
            users to identify the content they’re looking for.

# WITH SNIPPET

WITH SNIPPET is an optional clause that can be added to a SOSL query for article, case, feed, and idea searches. On the search results page, excerpts below article titles show terms matching the search query highlighted within the context of surrounding text. Snippets make it easier for users to identify the content they’re looking for.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

To generate search results with highlighted matches but not snippets, use WITH HIGHLIGHT.

Search snippets and highlights are generated from the following field types.

-   Email
-   Text
-   Text Area
-   Text Area (Long)
-   Text Area (Rich)

Search snippets and highlights are *not* generated from the following field types.

-   Checkbox
-   Currency
-   Date
-   Date/Time
-   File
-   Formula
-   Lookup Relationship
-   Number
-   Percent
-   Phone
-   Picklist
-   Picklist (Multi-Select)
-   URL

## Example

The following SOSL statement returns snippets for articles that match the search term San Francisco.

```

```

The matching terms are highlighted with <mark> tags within the context of the snippet results. Stemmed forms of the term and any synonyms defined are also highlighted.

## Example

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

In this example, “SF” (as a synonym defined for “San Francisco”) and “San Fran” (as a stemmed form of “San Francisco”) are also highlighted in the results as matching terms.

## Usage

For SOSL statements using the WITH SNIPPET clause, we recommend using a [RETURNING](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_returning.htm "RETURNING is an optional clause that you can add to a SOSL query to specify the information to be returned in the text search result.") ObjectTypeName clause, with a [WHERE](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_where.htm "By default, a SOSL query on an object retrieves all rows that are visible to the user, including archived rows. To limit the search, you can filter the search result by specific field values.") clause that filters on the PublishStatus field.

In the RETURNING clause, specify one of the following for ObjectTypeName:

-   To search a specific article type, use the article type name with the suffix *\_\_kav*.
-   To search all article types, use [KnowledgeArticleVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "HTML (New Window)").
-   To search case, case comment, feed, feed comment, idea, and idea comment types, use Case, CaseComment, FeedItem, FeedComment, Idea, and IdeaComment. For example:

    ```

    ```


Other objects that are included in searches that contain WITH SNIPPET don’t return snippets.

Snippets aren’t displayed:

-   When search terms contain a wildcard.
-   When the search doesn’t return any articles.
-   If the user doesn’t have access to the field that contains the snippet.
-   When the search term doesn’t appear in the first 6000 characters of the field, excluding HTML tags.

Even if you add the WITH SNIPPET clause, some searches don’t return snippets. If an object contains more than 50 fields, snippets are sometimes not generated.

Snippets are only displayed when 20 or fewer results are returned on a page.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=soql_sosl)

#### Tip

Use the LIMIT clause to return only 20 results at a time.

## Escaped HTML Tags

When matching terms within HTML tags are returned in a snippet, the HTML tags are escaped and the matching terms are highlighted in the results.

## Example

A search for salesforce returns an article with the text “For more information, visit <a href='https://salesforce.com'>salesforce.com</a>”. The original hyperlink tags from the article are escaped (encoded) and “salesforce” is highlighted in the snippet result.

```

```

## Target Snippet Length

By default, each snippet displays up to approximately 300 characters, which is usually three lines of text in a standard browser window display. The number of characters displayed is the *target length*, within a statistically insignificant degree of variance.

Snippets consist of one or more *fragments* of text that contain the matching terms. If the returned snippet includes multiple text fragments (for example, for matches within multiple fields), the target length is the maximum total length of all the returned fragments.

To specify an alternate target length, add the optional target\_length parameter to the WITH SNIPPET clause. You can specify a target length from 50 to 1,000 characters. When the target\_length is set to an invalid number, such as 0 or a negative number, the length defaults to 300.

## Example

A target\_length parameter of 120 characters is useful for displaying a snippet of approximately three lines of text in a standard mobile interface.

```

```

## Supported APIs

The WITH SNIPPET clause can be used in API version 32.0 or later. The WITH SNIPPET clause in SOSL is supported in SOAP API, REST API, and Apex.

## Code Examples

```
FIND {San Francisco} IN ALL FIELDS RETURNING KnowledgeArticleVersion(id, title WHERE PublishStatus = 'Online' AND Language = 'en_US') WITH
      SNIPPET (target_length=120)
```

```
[ {
  "attributes" : {
    "type" : "KnowledgeArticleVersion",
    "url" : "/services/data/v32.0/sobjects/KnowledgeArticleVersion/kaKD00000000001MAA"
  },
  "Id" : "kaKD00000000001MAA"
  "Title" : "San Francisco"
  "Summary" : "City and County of San Francisco"
  "snippet.text" : "<mark>San</mark> <mark>Francisco</mark>, officially the City and County of <mark>San</mark> <mark>Francisco</mark> is the... City and County of <mark>San</mark> <mark>Fran</mark>" 
  "highlight.Title" : "<mark>San</mark> <mark>Francisco</mark>"
}, {
   "attributes" : {   
     "type" : "KnowledgeArticleVersion",
     "url" : "/services/data/v32.0/sobjects/KnowledgeArticleVersion/kaBD0000000007DMAQ"
   },
   "Id" : "kaBD0000000007DMAQ",
   "Title" : "San Francisco Bay Area",
   "Summary" : "Nine county metropolitan area",
   "snippet.text" : "The <mark>SF</mark> Bay Area, commonly known as the Bay Area, is a populated region that"
   "highlight.Title" : "<mark>San</mark> <mark>Francisco</mark> Bay Area"
}, {
   "attributes" : {
     "type" : "KnowledgeArticleVersion",
     "url" : "/services/data/v32.0/sobjects/KnowledgeArticleVersion/ka3D0000000042OIAQ"
   },
   "Id" : "ka3D0000000042OIAQ",
   "Title" : "California",
   "Summary" : "State of California",
   "snippet.text" : "(Greater Los Angeles area and <mark>San</mark> <mark>Francisco</mark> Bay Area, respectively), and eight of the nation’s 50 most"
  } ]
```

```
FIND {San Francisco} IN ALL FIELDS RETURNING FeedItem, FeedComment WITH SNIPPET (target_length=120)
```

```
For more information, visit &lt;a href='https://salesforce.com'&gt;salesforce.com&lt;/a&gt;
```

```
FIND {San Francisco} IN ALL FIELDS RETURNING KnowledgeArticleVersion(id, title WHERE PublishStatus = 'Online' AND Language = 'en_US') WITH
      SNIPPET(target_length=120)
```

## Related Topics

- RETURNING (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_returning.htm)
- WHERE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_where.htm)
