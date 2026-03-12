---
title: "Conditional Request Headers"
domain: rest-api
topic: conditional-request-headers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.188Z
estimatedTokens: 1996
keywords: [Conditional, Request, Headers, conditional, request, header, validate, resources, before, accessing, them., setting, precondition, ensure, succeeds, only, met., functionality, helps, prevent]
---

# Conditional Request Headers

> Use a conditional request header to validate resources before accessing them. By
    setting a precondition in the header, you ensure that your request succeeds only if that
    precondition is met. This functionality helps you prevent mistakes and reject outdated requests
    when updating Salesforce data. You can implement a variety of techniques with conditional
    request headers, such as response caching.

# Conditional Request Headers

Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.

Two types of validation are available with conditional request headers: strong and weak. Strong validation checks whether the precondition exactly matches the resource in Salesforce. Strong validation headers include If-Match and If-None-Match, which use entity tags (ETags) to compare the precondition to the record in Salesforce.

Weak validation checks a precondition against the resource in Salesforce, but it doesn’t guarantee that the two are identical. Weak validation headers include If-Modified-Since or If-Unmodified-Since, which compare the precondition to the last modified date of the record in Salesforce.

REST API conditional headers follow the HTTP 1.1 specification with the following exceptions.

-   When you include an invalid header value for If-Match, If-None-Match, or If-Unmodified-Since on a PATCH or POST request, a 400 Bad Request status code is returned.
-   The If-Range header isn’t supported.
-   DELETE requests aren’t supported

## ETag

The ETag header is a response header that’s returned when you access the sObject Rows resource. It’s a hash of the content that’s used by the If-Match and If-None-Match request headers in subsequent requests to determine if the content has changed.

This header is supported by [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") (Account records only) resources.

This example shows an ETag returned by REST API.

```

```

You can find the HTTP 1.1 specification for the ETag header at [www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19) .

## If-Match

The If-Match header is a request header for sObject Rows that includes a list of ETags. If the ETag of the record that you’re requesting matches an ETag specified as a precondition in the header, the request is processed. Otherwise, a 412 Precondition Failed status code is returned, and the request isn’t processed.

This header supports [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") (Account records only) resources.

In this example an, If-Match header is included with a request.

```

```

You can find the HTTP 1.1 specification for the If-Match header at [www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) .

## If-None-Match

The If-None-Match header is a request header for sObject Rows that’s the inverse of If-Match. If the ETag of the record that you’re requesting matches an ETag specified in the header, the request isn’t processed. A 304 Not Modified status code is returned for GET or HEAD requests, and a 412 Precondition Failed status code is returned for PATCH requests.

This header supports [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") (Account records only) resources.

In this example, an If-None-Match header is included with a request.

```

```

You can find the HTTP 1.1 specification for the If-None-Match header at [www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) .

## If-Modified-Since

The If-Modified-Since header is a time-based request header. The request is processed only if the data has changed since the date and time specified in the header. Otherwise, a 304 Not Modified status code is returned, and the request isn’t processed.

This header supports [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records."), [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object."), [Describe Global](atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm "Lists the available objects and the associated metadata. This resource returns both custom and standard objects."), and [Invocable Actions](atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm "Represents standard and custom invocable actions. Use actions to add more functionality to your applications. Choose from standard actions, such as posting to Chatter or sending email, or create actions based on your company’s needs.") resources.

In this example an If-Modified-Since header is included with a request.

```

```

You can find the HTTP 1.1 specification for the If-Modified-Since header at [www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.25](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.25) .

## If-Unmodified-Since

The If-Unmodified-Since header is a request header that’s the inverse of If-Modified-Since. If you make a request and include the If-Unmodified-Since header, REST API processes the request only if the data hasn’t changed since the specified date. Otherwise, a 412 Precondition Failed status code is returned, and the request isn’t processed.

This header supports [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records."), [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object."), [Describe Global](atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm "Lists the available objects and the associated metadata. This resource returns both custom and standard objects."), and [Invocable Actions](atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm "Represents standard and custom invocable actions. Use actions to add more functionality to your applications. Choose from standard actions, such as posting to Chatter or sending email, or create actions based on your company’s needs.") resources.

In this example, an If-Unmodified-Since header is included in a request.

```

```

You can find the HTTP 1.1 specification for the If-Unmodified-Since header at [www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.28](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.28) .

## Code Examples

```
ETag: "U5iWijwWbQD18jeiXwsqxeGpZQk=-gzip"
```

```
If-Match: "Jbjuzw7dbhaEG3fd90kJbx6A0ow=-gzip", "U5iWijwWbQD18jeiXwsqxeGpZQk=-gzip"
```

```
If-None-Match: "Jbjuzw7dbhaEG3fd90kJbx6A0ow=-gzip", "U5iWijwWbQD18jeiXwsqxeGpZQk=-gzip"
```

```
If-Modified-Since: Tue, 10 Aug 2015 00:00:00 GMT
```

```
If-Unmodified-Since: Tue, 10 Aug 2015 00:00:00 GMT
```

## Related Topics

- sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm)
- sObject
          Describe (atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm)
- Describe Global (atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm)
- Invocable
          Actions (atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm)
