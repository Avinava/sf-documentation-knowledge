---
title: "Search Suggested Article Title Matches"
domain: rest-api
topic: search-suggested-article-title-matches
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.624Z
keywords: [Search, Suggested, Article, Title, Matches, Note, Syntax, Example]
---

# Search Suggested Article Title Matches

# Search Suggested Article Title Matches

Returns a list of Salesforce Knowledge article titles that match the user’s search query string. Provides a shortcut to navigate directly to likely relevant articles before the user performs a search. This resource is available in REST API version 30.0 and later.

Salesforce Knowledge must be enabled in your organization. The user must have the “View Articles” permission enabled. The articles suggested include only the articles the user can access, based on the data categories and article types the user has permissions to view.

The Suggest Article Title Matches resource is designed to return display-ready data about likely relevant articles. Articles are suggested if their titles contain the entire query string, except stopwords, such as “a,” “for,” and “the.”

For example, a search for Backpacking for desert returns the article, “Backpacking in the desert.”

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Articles with titles that include stopwords from the query string, such as “Backpacking for desert survival” in this example, appear before matching articles with titles that don’t include the stopwords.

Stopwords at the end of the query string are treated as search terms.

A wildcard is automatically appended to the last token in the query string.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters.

If the number of suggestions returned exceeds the limit specified in the request, the end of the response contains a field called hasMoreResults. Its value is true if the suggestions returned are only a subset of the suggestions available, and false otherwise.

## Syntax

URI

/services/data/vXX.X/search/suggestTitleMatches?q=searchString​&language=articleLanguage&publishStatus=articlePublicationStatus

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
| articleTypes | Optional. Three-character ID prefixes indicating the desired article types. You can specify multiple values for this parameter in a single REST call, by repeating the parameter name for each value. For example, articleTypes=ka0&articleTypes=ka1. |
| categories | Optional. The name of the data category group and name of the data category for desired articles, expressed as a JSON mapping. You can specify multiple data category group and data category pairs in this parameter. For example, categories={"Regions":"Asia","Products":"Laptops"}. Characters in the URL might need to be encoded. For this example, categories=%7B%22Regions%22%3A%22Asia​%22%2C%22Products%22%3A%22Laptops%22%7D. |
| channel | Optional. The channel where the matching articles are visible. Valid values:AllChannels–Visible in all channels the user has access toApp–Visible in the internal Salesforce Knowledge applicationPkb–Visible in the public knowledge baseCsp–Visible in the Customer PortalPrm–Visible in the Partner PortalIf channel isn’t specified, the default value is determined by the type of user.Pkb for a guest userCsp for a Customer Portal userPrm for a Partner Portal userApp for any other type of userIf channel is specified, the specified value may not be the actual value requested, because of certain requirements.For guest, Customer Portal, and Partner Portal users, the specified value must match the default value for each user type. If the values don’t match or AllChannels is specified, then App replaces the specified value.For all users other than guest, Customer Portal, and Partner Portal users:If Pkb, Csp, Prm, or App are specified, then the specified value is used.If AllChannels is specified, then App replaces the specified value. |
| language | Required. The language of the user’s query. Specifies the language that matching articles are written in. |
| limit | Optional. Specifies the maximum number of articles to return. If there are more suggested articles than the limit specified, the response body’s hasMoreResults property is true. |
| publishStatus | Required. The article’s publication status. Valid values:Draft–Articles aren’t published in Salesforce Knowledge.Online–Articles are published in Salesforce Knowledge.Archived–Articles aren’t published and are available in Archived Articles view. |
| q | Required. The user’s search query string, properly URL-encoded. Suggestions are returned only if the user’s query string meets the minimum length requirements: one character for queries in Chinese, Japanese, and Korean, and three characters for all other languages. Query strings exceeding the maximum length of 250 characters return an error. |
| topics | Optional. The topic of the returned articles. For example: topics=outlook&topics=email. |
| validationStatus | Optional. The validation status of returned articles. |

## Example

Example Request

```

```

Example Response Body

```

```