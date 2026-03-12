---
title: "Authentication, Versioning, Limits, ETag, and More"
domain: uiapi
topic: authentication-versioning-limits-etag-and-more
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.083Z
estimatedTokens: 1041
keywords: [Authentication, Versioning, Limits, ETag, high-level, facts, how, User, API, authenticate, versioned, rate, glance]
---

# Authentication, Versioning, Limits, ETag, and More

> Learn the high-level facts about how to use User Interface API. How
      do you authenticate? How is the API versioned? What are the rate limits? All the information
      you need, available at a glance.

# Authentication, Versioning, Limits, ETag, and More

Learn the high-level facts about how to use User Interface API. How do you authenticate? How is the API versioned? What are the rate limits? All the information you need, available at a glance.

Authentication

Like other Salesforce REST APIs, User Interface API uses OAuth 2.0. To specify OAuth settings, create an [external client app](https://help.salesforce.com/s/articleView?id=xcloud.create_a_local_external_client_app.htm&type=5&language=en_US "HTML (New Window)") in Salesforce.

Case Sensitivity

When writing a User Interface API client, assume case sensitivity. Some parts of the API aren’t case-sensitive, but some are, so it’s best to assume case sensitivity.

Dates

Dates are represented in [ISO 8601](https://www.w3.org/TR/NOTE-datetime "HTML (New Window)") format.

Experience Cloud Site User Access

Users with a Customer Community or Partner Community [User License](https://help.salesforce.com/articleView?id=users_license_types_communities.htm&type=0&language=en_US "HTML (New Window)") can access User Interface API.

Lightning components on Experience Cloud site pages request UI API resources in the context of a site user. Even if an Experience Cloud site user doesn't have the API Enabled permission, these requests can count towards Salesforce API limits. For example, if you add the <lightning-record-view-form\> component to an Experience Cloud site page, requests from that component to UI API resources are made in the context of a site user. These requests can count towards API limits, even if the user doesn't have the API Enabled permission.

HTTP Caching with ETag

[Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm "The field data, API name, child relationship data, and record type information for a record.") responses include a weakEtag property that you can use to compare whether a record is a newer, older, or the same as a record in a previous response.

In addition, to take advantage of browser caching, User Interface API responses include an [ETag](https://tools.ietf.org/html/rfc7232#section-2.3 "HTML (New Window)") field. To reduce network traffic and increase your app’s response time, make conditional HTTP requests. If the browser cache holds the latest version of a representation, the web server returns only HTTP headers.

The ETag (or Entity Tag) contains a hash that identifies a representation: ETag: "b9a5cd4fbfcf1b65b03d95a4d9ffa8f4--gzip". When a representation changes, the web server generates a new ETag.

```

```

The client saves the ETag and sends it in a header in subsequent requests for the resource: If-None-Match: “b9a5cd4fbfcf1b65b03d95a4d9ffa8f4”. The web server compares this ETag value with the ETag value of the current version of the representation. If the values are the same, the browser cache holds the latest version and the web server returns an HTTP status of 304 Not Modified.

If-Modified-Since

PATCH requests support the [If-Modified-Since](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since "HTML (New Window)") HTTP header.

Integers

We support integers less than 1018. Integers greater than or equal to 231 must be in quotes.

JSON Support

The JavaScript Object Notation (JSON) format is supported with UTF-8.

Limits

The User Interface API uses the [Salesforce API limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm "HTML (New Window)") and the [Connect REST API limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_rate_limits.htm "HTML (New Window)"). When you exceed the rate limit, all User Interface API resources return a 503 Service Unavailable error code.

Versioning

User Interface API is versioned. Specify the API version number in each request.

```

```

#### See Also

-   [*Salesforce Help*: Set Up OAuth Flows](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps_oauth_flow_config.htm&type=5&language=en_US "Salesforce Help: Set Up OAuth Flows - HTML (New Window)")

## Code Examples

```apex
GET /ui-api/object-info/account

HTTP/1.1 200 OK
Date: Tue, 07 Nov 2017 04:27:43 GMT
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: upgrade-insecure-requests 
X-Robots-Tag: none
Cache-Control: no-cache,must-revalidate,max-age=0,no-store,private
Set-Cookie: BrowserId=GHrCS0saRl64DgVv-NrLjA;Path=/;Domain=.salesforce.com;Expires=Sat, 06-Jan-2018 04:27:45 GMT;Max-Age=5184000
Expires: Thu, 01 Jan 1970 00:00:00 GMT
ETag: "b9a5cd4fbfcf1b65b03d95a4d9ffa8f4--gzip"
Content-Type: application/json;charset=UTF-8
Vary: Accept-Encoding
Content-Encoding: gzip
Transfer-Encoding: chunked


{
  "apiName" : "Account",
  "childRelationships" : [ {
    "childObjectApiName" : "Account",
    "fieldName" : "ParentId",
    "junctionIdListNames" : [ ],
    "junctionReferenceTo" : [ ],
    "relationshipName" : "ChildAccounts"
    ... response shortened ...
    ]}
    ...
}
```

```
GET https://MyDomainName.my.salesforce.com/services/data/v66.0/ui-api
```

## Related Topics

- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
