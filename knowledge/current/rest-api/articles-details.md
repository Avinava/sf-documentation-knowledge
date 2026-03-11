---
title: "Articles Details"
domain: rest-api
topic: articles-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.378Z
keywords: [Articles, Details, Valid, channel, Values, Syntax, Example, Usage]
---

# Articles Details

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