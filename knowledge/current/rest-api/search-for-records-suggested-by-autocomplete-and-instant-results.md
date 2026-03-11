---
title: "Search for Records Suggested by Autocomplete and Instant
    Results"
domain: rest-api
topic: search-for-records-suggested-by-autocomplete-and-instant-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.618Z
keywords: [Search, Records, Suggested, Autocomplete, Instant, Results, Note, Syntax, Example]
---

# Search for Records Suggested by Autocomplete and Instant
    Results

# Search for Records Suggested by Autocomplete and Instant Results

Returns a list of suggested records whose names match the user’s search string. The suggestions resource provides autocomplete results and instant results for users to navigate directly to likely relevant records, before performing a full search. This resource is available in REST API version 32.0 and later.

The suggestions resource returns records when the record’s name field includes the exact text in the search string. The last term in the search string can match the beginning of a word. Records that contain the search string within a word aren’t considered a match.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI.

For example, the text string national u is treated as national u\* and returns “National Utility”, “National Urban Company”, and “First National University”.

The suggestions resource returns display-ready data about likely relevant records that the user can access. A relevance algorithm determines the order of results. Each suggested record in the results contains these elements:

| Element | Description |
| --- | --- |
| Attributes | The record’s object type and the URL for accessing the record.Also includes the requested lookup fields’ values. For example, if you requested fields=Id,Name, the result would include the ID and name. |
| Name (or Title) | The record’s Name field. In the absence of a standard Name field, the Title field is used for these objects:DashboardIdeaIdeaThemeNoteQuestionIn the absence of a standard Name or Title field, the main identifying field is used. For example, in cases, the Case Number is used. |
| Id | The record’s unique identifier. |

The suggestions resource supports all searchable objects except the following.

-   ContentNote
-   Event
-   External objects
-   FeedComment
-   FeedPost
-   IdeaComment
-   Pricebook2
-   Reply
-   TagDefinition
-   Task

## Syntax

URI

/services/data/vXX.X/search/suggestions?q=searchString&sobject=objectTypes

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None required

Request parameters

| Parameter | Description |
| --- | --- |
| fields | Optional. Used for creating lookup queries. Specify multiple fields using a comma-separated list. Specifies which lookup fields to be returned in the response. |
| dynamicFields | Optional. Available in API version 48.0 and later. Used to return additional dynamic fields. Specify multiple options using a comma-separated list. For example, if dynamicFields=secondaryField then each suggested record in the results contains an additional field besides Id and Name (or Title) based on the next eligible field in the search layout. |
| groupId | Optional. Specifies one or more unique identifiers of one or more groups that the question to return was posted to. Specify multiple groups using a comma-separated list. This parameter is only applicable when the parameter type equals question. Don’t use with the userId. |
| ignoreUnsupportedSObjects | Optional. If an unsupported object is included in a request, this parameter indicates what action to take. If it’s set to false, an error is returned. If it’s set to true, the object is ignored and no error is returned. See the Unsupported Objects section for reference. The default is false. |
| limit | Optional. Specifies the maximum number of suggested records to return. If a limit isn’t specified, 5 records are returned by default. If there are more suggested records than the limit specified, the response body’s hasMoreResults property is true. |
| networkId | Optional. Specifies one or more unique identifiers for the Experience Cloud sites to return the question to. Specify multiple sites using a comma-separated list. This parameter is only applicable when the parameter type equals question or parameter sobject equals user. |
| q | Required. The user’s search query string, properly URL-encoded. Suggestions are returned only if the user’s query string meets the minimum length requirements: one character for queries in Chinese, Japanese, Korean, and Thai; three characters for all other languages. Query strings that exceed the maximum length of 255 characters (or 200 consecutive characters without a space break) return an error. |
| sobject | Required. The objects that the search is scoped to, such as Account or offer__c.If the sobject value is feedItem, the type parameter is required and it must have a value of question.Specify up to 10 objects with a comma-separated list. For example: sobject=Account,Contact,Lead. To take advantage of the feature, activate the CrossObjectTypeahead permission.To specify the specific fields to return by object, use the following syntax with multiple fields in a comma-separated list. The sobject is lowercase.sobject=sobject.fields=fieldsFor example:&sobject=Account,Contact,Lead&account.fields=Website,Phone &contact.fields=Phone |
| topicId | Optional. Specifies the unique identifier of the single topic that the question to return was tagged as. This parameter is only applicable when the parameter type equals question. |
| type | Required when the sobject value is feedItem. Including this parameter for all other sobject values doesn’t affect the query. Specifies that the type of Feed is questions. Valid value: question. |
| userId | Optional. Specifies one or more unique identifiers of one or more users who authored the question to return. Specify multiple users using a comma-separated list. This parameter is only applicable when the parameter type equals question. Don’t use with the groupId. |
| useSearchScope | Optional. Available in API version 40.0 and later. The default value is false. If false, the objects specified in the request are used to suggest records. If true, in addition to the objects specified in the request, the user's search scope is used to suggest records. The search scope is the list of objects a user uses most frequently.If the request doesn’t specify an object, use useSearchScope=true.If useSearchScope=true and the user's search scope is empty, the default search scope is used to suggest records.Typically, only the first 10 objects are used to suggest records. However, an admin can assign objects that are always considered when returning results. If configured, up to 15 objects are used to suggest records. For more information about assigning objects, see Assign Search Results Objects to Users (Beta).Objects specified in the sobject parameter are prioritized over objects in the user's search scope.Values for the ignoreUnsupportedSObjects parameter aren’t applied to the objects in the search scope.This example uses only the search scope..../search/suggestions?q=Acme&useSearchScope=trueThis example uses the search scope and the Account object..../search/suggestions?q=Acme&sobject=Account&useSearchScope=true |
| where | Optional. A filter that follows the same syntax as the SOQL WHERE clause. URLs encode the expression.Use the clause for an object, or globally for all compatible objects. An example of an object-specific clause is: account.where=name%20LIKE%20%27Smith%25%27. An example of a global clause is: where=name%20LIKE%20%27Smith%25%27. The parameter must be lower case. Any object-specific where clauses override the global where clause. You can’t use this parameter for the Question object.To specify multiple entities, see the following example. This feature is available in version 38.0 and later....search/suggestions?q=Smith  &sobject=Account,Contact,KnowledgeArticleVersion,CollaborationGroup,Topic,FeedItem  // Specifies a global where clause (to filter Account and Contact) &where=name%20LIKE%20%27Smith%25%27  // Overrides the global where clause for Knowledge Article  (filtering by PublishStatus and Language is required for KnowledgeArticle) &knowledgearticleversion.where=PublishStatus='online'+and+language='en_US' // Overrides the global where clause for Topic &topic.where=networkid=<1234567891>  // Overrides the global where clause for CollaborationGroup &collaborationgroup.where=networkid=<1234567891>  // FeedItem-Question doesn't support where clauses, but we can filter  the type and networkId&type=question  &networkId==<1234567891> |

## Example

Example Response Body

```

```

Example Response Body for a Multiple Object Request

```

```

Example XML Response Body

```

```