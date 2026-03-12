---
title: "Articles List"
domain: rest-api
topic: articles-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.589Z
estimatedTokens: 1558
keywords: [Articles, List, Get, page, online, articles, given, language, category, through, either, search, query., resource, REST, API, version, 38.0, later., Syntax]
---

# Articles List

> Get a page of online articles for the given language and category through either search
    or query. This resource is available in REST API version 38.0 and later.

# Articles List

Get a page of online articles for the given language and category through either search or query. This resource is available in REST API version 38.0 and later.

## Syntax

URI

/services/data/vXX.X/support/knowledgeArticles

Method

GET

Formats

JSON, XML

Authentication

Authorization: Bearer token

HTTP headers

**Accept:** Optional. Can be either application/json or application/xml.

**Accept-language:** Required. The article must be an active language in the user’s organization

-   If the language code isn’t valid, an error message is returned: “The language code is not valid or not supported by Knowledge.”
-   If the language code is valid, but not supported by Knowledge, then an error message is returned: “Invalid language code. Check that the language is included in your Knowledge language settings."

Input:

string q: Optional, Performs an SOSL search. If the query string is null, empty, or not given, an SOQL query runs.

The characters ? and \* are used for wildcard searches. The characters (, ), and " are used for complex search terms. See [https://developer.salesforce.com/docs/atlas.en-us.soql\_sosl.meta/soql\_sosl/sforce\_api\_calls\_sosl\_find.htm](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_find.htm).

string channel: Optional, defaults to user’s context. For information on channel values, see [Valid channel values](#kb_support_rest_channel_values).

-   **App**: Visible in the internal Salesforce Knowledge application
-   **Pkb**: Visible in the public knowledge base
-   **Csp**: Visible in the Customer Portal
-   **Prm**: Visible in the Partner Portal

string categories in map json format {“group1”:”category1”,”group2”:”category2”,...} )

Optional, defaults to None. Category group must be unique in each group:category pair, otherwise you get ARGUMENT\_OBJECT\_PARSE\_ERROR. There is a limit of three data category conditions, otherwise you get INVALID\_FILTER\_VALUE.

string queryMethod values are: AT, BELOW, ABOVE, ABOVE\_OR\_BELOW. Only valid when categories are specified, defaults to ABOVE\_OR\_BELOW.

string sort: Optional, a sortable field name LastPublishedDate, CreatedDate, Title, ViewScore. Defaults to LastPublishedDate for query and relevance for search.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

When sorting on ViewScore it is only available for query, not search, and no pagination is supported. You only get one page of results.

string order: Optional, either ASC or DESC, defaults to DESC. Valid only when sort is valid.

integer pageSize: Optional, defaults to 20. Valid range 1 to 100.

integer pageNumber : Optional, defaults to 1.

Output:

A page of online articles in the given language and category visible to the current user.

-   **Article Page**

    A page of articles. The individual entries are article summaries so the size can be kept at a minimum.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

    #### Note

    The API supports paging. Each page of responses includes a URL to its page, as well as the URL to the next page of articles.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

    #### Note

    if the user input parameter has the default value, the API does not show this parameter in either currentPageUrl or nextPageUrl.

-   **Article Summary**

    A summary of an article used in a list of article responses. It shares similar properties to the Article Detail representation, as one is a superset of the other.

    ```

    ```

    The “url” property always points to the [Article Details](atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artdetails.htm#resources_knowledge_support_artdetails "Gets all online article fields, accessible to the user. This resource is available with article IDs in REST API version 38.0 and later, and this resource is available with article URL names in version 44.0 and later.") resource endpoint. For information on valid channel values, see the [channel parameter description](atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_queries.htm#channel_param)

-   **Data Category Group**

    An individual data category group, its root category, and a list of selected data categories in the group.

    ```

    ```

-   **Data Category Summary**

    Provides a summary of data category information. The Summary and Detail responses share common properties.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

    #### Note

    The outputs of Data Category Group and Data Category Summary in Article List API are different from the Data Category Groups API.


## Example

Example Request

```

```

Example Response Body

```

```

## Usage

Salesforce Knowledge must be enabled in your organization. This resource can be used in API version 38.0 and later. The Custom File Field is not supported because it returns a link to a binary stream. Use the language code format used in [Which Languages Does Salesforce Support?](https://help.salesforce.com/apex/HTViewHelpDoc?id=faq_getstart_what_languages_does.htm&language=en_US).

## Valid channel Values

-   When using the options string channel, where the matching articles are visible, the following values are valid.
    -   App–Visible in the internal Salesforce Knowledge application
    -   Pkb–Visible in the public knowledge base
    -   Csp–Visible in the Customer Portal
    -   Prm–Visible in the Partner Portal
-   If channel isn’t specified, the default value is determined by the type of user.
    -   Pkb for a guest user
    -   Csp for a Customer Portal user
    -   Prm for a Partner Portal user
    -   App for any other type of user
-   If channel is specified, the specified value may be used to retrieve articles.
    -   For guest, Customer Portal, and Partner Portal users, if the specified channel is other than the channel accessible to the user, an error is returned.
    -   For all users other than guest, Customer Portal, and Partner Portal users, the specified channel value is used.

## Code Examples

```
{
   "articles": [ Article Summary, … ],  // list of articles
      "currentPageUrl": URL,   // the article list API with current page number
        "nextPageUrl": URL,  // the article list API with next page number,
      which can be null if there are no more articles.
      "pageNumber": Int  // the current page number, starting at 1.
    }
```

```
{
      "id":  Id,    // articleId
      "articleNumber": String,  
      "articleType": String,  // apiName of the article type, available in API v44.0 and later
      "title":  String,
      "urlName": String,  // available in API v44.0 and later
      "summary":  String,
      "url":  URL,  // to the Article Detail API
      "viewCount": Int,       // view count in the interested channel
      "viewScore": double (in xxx.xxxx precision),   // view score in the interested channel.
      "upVoteCount": int,  // up vote count in the interested channel. 
      "downVoteCount": int, // down vote count in the interested channel.
      "lastPublishedDate": Date // last publish date in ISO8601 format
      "categoryGroups":  [ Data Category Group, …. ]}
```

```
{
      "groupName": String,  // the unique name of the category group
      "groupLabel": String,  // returns the translated version
      "selectedCategories": [ Data Category Summary, … ]
    }
```

```
{
            "categoryName": String, // the unique name of the category
            "categoryLabel":  String, // returns the translated version, per the API language specified
            "url":  String // returns the url for the DataCategory REST API.
    }
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/support/knowledgeArticles?sort=ViewScore&channel=Pkb&pageSize=3
    HTTP Headers:
        Content-Type: application/json; charset=UTF-8
        Accept: application/json
        Accept-Language: en-US
```

## Related Topics

- Article Details (atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artdetails.htm)
- channel
                      parameter description (atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_queries.htm)
