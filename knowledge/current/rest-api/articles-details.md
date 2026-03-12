---
title: "Articles Details"
domain: rest-api
topic: articles-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.420Z
estimatedTokens: 1051
keywords: [Articles, online, article, accessible, user, resource, IDs, REST, API, version, 38.0, later, URL, 44.0, channel]
---

# Articles Details

> Gets all online article fields, accessible to the user. This resource is available with
  article IDs in REST API version 38.0 and later, and this resource is available with article URL
  names in version 44.0 and later.

# Articles Details

Gets all online article fields, accessible to the user. This resource is available with article IDs in REST API version 38.0 and later, and this resource is available with article URL names in version 44.0 and later.

Salesforce Knowledge must be enabled in your organization. This resource can be used in API version 38.0 and later. The Custom File Field is not supported because it returns a link to a binary stream. Use the language code format used in [Which Languages Does Salesforce Support?](https://help.salesforce.com/apex/HTViewHelpDoc?id=faq_getstart_what_languages_does.htm&language=en_US).

A lookup custom field is visible to guest users depending on the lookup entity type. For example, User is visible, but Case and Account are not visible. Following standard fields are not visible to a guest user, even if they are in the layout:

-   archivedBy
-   isLatestVersion
-   translationCompletedDate
-   translationImportedDate
-   translationExportedDate
-   versionNumber
-   visibleInInternalApp
-   visibleInPKB
-   visibleToCustomer
-   visbileToPartner

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

## Syntax

Method

GET

Formats

JSON, XML

Authentication

Authorization: Bearer token

Endpoint

/services/data/vXX.X/support/knowledgeArticles/articleId\_or\_articleUrlName

HTTP headers

**Accept:** Optional. Can be either application/json or application/xml.

**Accept-language:** Required. The article must be an active language in the user’s organization

-   If the language code isn’t valid, an error message is returned: “The language code is not valid or not supported by Knowledge.”
-   If the language code is valid, but not supported by Knowledge, then an error message is returned: “Invalid language code. Check that the language is included in your Knowledge language settings."

Input:

string channel: Optional, defaults to user’s context. For information on channel values, see [Valid channel Values](#kb_support_rest_channel_values_section).

-   **App**: Visible in the internal Salesforce Knowledge application
-   **Pkb**: Visible in the public knowledge base
-   **Csp**: Visible in the Customer Portal
-   **Prm**: Visible in the Partner Portal

boolean updateViewStat: Optional, defaults to true. If true, API updates the view count in the given channel as well as the total view count.

boolean isUrlName: Optional, defaults to false. If true, indicates that the last portion of the endpoint is a URL name instead of an article ID. Available in API v44.0 and later

Output:

The detailed fields of the article, if the article is online and visible to the current user.

-   **Article Detail**

    Full detail of an article, with complete metadata and layout-driven fields used for display of an article. It includes all the same properties as an [Article Summary](atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artlist.htm#kb_rest_support_artsum_output) representation.

    ```

    ```

-   **User Summary**

    ```

    ```

-   **Article Field**

    An individual field of article information, which is listed in an [Article Detail](#kb_rest_support_artdetail_output) in the order required by the administrator’s layout.

    ```

    ```


## Example

Example Request

```

```

Example Response Body

```

```

## Usage

## Code Examples

```
{
         "id":  Id,    // articleId,
         "articleNumber": String,
         "articleType": String,  // apiName of the article type, available in API v44.0 and later
         "title":  String,
         "urlName": String,   // available in API v44.0 and later
         "summary":  String,
         "url":  URL,
         "versionNumber": Int,
         "createdDate": Date,  // in ISO8601 format
         "createdBy": User Summary,
         "lastModifiedDate": Date,   // in ISO8601 format
         "lastModifiedBy": User Summary,
         "lastPublishedDate": Date, // in ISO8601 format
         "layoutItems": [ Article Field, ... ],  // standard and custom fields visible to the user, sorted based on the layouts of the article type.
         "categories": [ Data Category Groups, ... ], 
         "appUpVoteCount": Int,
         "cspUpVoteCount": Int,
         "prmUpVoteCount": Int,
         "pkbUpVoteCount": Int,
         "appDownVoteCount": Int,
         "cspDownVoteCount": Int,
         "prmDownVoteCount": Int,
         "pkbDownVoteCount": Int,
         "allViewCount": Int,
         "appViewCount": Int,
         "cspViewCount": Int,
         "prmViewCount": Int,
         "pkbViewCount": Int,
         "allViewScore": Double,
         "appViewScore": Double,
         "cspViewScore": Double,
         "prmViewScore": Double,
         "pkbViewScore": Double
         }
```

```
{
         "id": String
         "isActive": boolean   // true/false
         "userName": String   // login name
         "firstName": String
         "lastName": String
         "email": String
         "url": String              // to the chatter user detail url: /services/data/vXX.X/chatter/users/{userId}, for guest user, it will return null.
         }
```

```
{
         "type":  Enum,         // see the Notes
         "name": String,        // In API v43.0 and earlier, the developer name. In API v44.0 and later, the API name.
         "label": String,         // label
         "value": String,  
         }
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/support/knowledgeArticles/kA0xx000000000LCAQ
       HTTP Headers:  
       Content-Type: application/json; charset=UTF-8
       Accept: application/json
       Accept-Language: en-US
```

```
{
       "allViewCount" : 17,
       "allViewScore" : 100.0,
       "appDownVoteCount" : 0,
       "appUpVoteCount" : 0,
       "appViewCount" : 17,
       "appViewScore" : 100.0,
       "articleNumber" : "000001004",
       "categoryGroups" : [ ],
       "createdBy" : {
       "email" : "user@company.com",
       "firstName" : "Test",
       "id" : "005xx000001SvoMAAS",
       "isActive" : true,
       "lastName" : "User",
       "url" : "/services/data/v66.0/chatter/users/005xx000001SvoMAAS",
       "userName" : "admin@salesforce.org"
       },
       "createdDate" : "2016-06-21T21:10:54Z",
       "cspDownVoteCount" : 0,
       "cspUpVoteCount" : 0,
       "cspViewCount" : 0,
       "cspViewScore" : 0.0,
       "id" : "kA0xx000000000LCAQ",
       "lastModifiedBy" : {
       "email" : "user@company.com",
       "firstName" : "Test",
       "id" : "005xx000001SvoMAAS",
       "isActive" : true,
       "lastName" : "User",
       "url" : "/services/data/v66.0/chatter/users/005xx000001SvoMAAS",
       "userName" : "admin@salesforce.org"
       },
       "lastModifiedDate" : "2016-06-21T21:11:02Z",
       "lastPublishedDate" : "2016-06-21T21:11:02Z",
       "layoutItems" : [ {
       "label" : "Out of Date",
       "name" : "IsOutOfDate",
       "type" : "CHECKBOX",
       "value" : "false"
       }, {
       "label" : "sample",
       "name" : "sample",
       "type" : "PICK_LIST",
       "value" : null
       }, {
       "label" : "Language",
       "name" : "Language",
       "type" : "PICK_LIST",
       "value" : "en_US"
       }, {
       "label" : "MyNumber",
       "name" : "MyNumber",
       "type" : "NUMBER",
       "value" : null
       }, {
       "label" : "My File",
       "name" : "My_File",
       "type" : "FILE",
       "value" : null
       } ],
       "pkbDownVoteCount" : 0,
       "pkbUpVoteCount" : 0,
       "pkbViewCount" : 0,
       "pkbViewScore" : 0.0,
       "prmDownVoteCount" : 0,
       "prmUpVoteCount" : 0,
       "prmViewCount" : 0,
       "prmViewScore" : 0.0,
       "summary" : "The number of characters required for complete coverage of all these languages' needs cannot fit in the 256-character code space of 8-bit character encodings, requiring at least a 16-bit fixed width encoding or multi-byte variable-length encodings. \r
\r
Although CJK encodings have common character sets, the encodings often used to represent them have been developed separately by different East Asian governments and software companies, and are mutually incompatible. Unicode has attempted, with some controversy, to unify the character sets in a process known as Han unification.\r
\r
CJK character encodings should consist minimally of Han characters p",
       "title" : "Test Images",
       "url" : "/services/data/v66.0/support/knowledgeArticles/kA0xx000000000LCAQ",
       "versionNumber" : 7
       }
```

## Related Topics

- Article Summary (atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artlist.htm)
- Data Category Groups (atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcgroups.htm)
