---
title: "REST Resources and Requests"
domain: rest-api
topic: rest-resources-and-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.192Z
estimatedTokens: 1522
keywords: [REST, Resources, Requests, API, based, usage, resources—pieces, data, Salesforce, such, records, collections, query, results, metadata, information., resource, exposed, uniform, identifier]
---

# REST Resources and Requests

> REST API is based on the usage of resources—pieces
			of data in Salesforce, such as records, collections of records, query results, metadata,
			or API information. Each resource is exposed by a uniform resource identifier (URI) and
			is accessed by sending HTTP requests to the corresponding URI.

# REST Resources and Requests

REST API is based on the usage of resources—pieces of data in Salesforce, such as records, collections of records, query results, metadata, or API information. Each resource is exposed by a uniform resource identifier (URI) and is accessed by sending HTTP requests to the corresponding URI.

Depending on which resource you want to access and how you construct an HTTP request, you can perform several types of operations, including:

-   Determine available API versions
-   Access limits for your Salesforce org
-   Retrieve object metadata
-   Create, read, update, and delete records
-   Query and search for data

You can send HTTP requests using a variety of software tools, which means that the exact appearance of a request can look different from the cURL examples in this guide. However, no matter how you submit requests, the elements don’t change. A typical request consists of these elements.

-   URI
-   HTTP method
-   Headers
-   Request body (not required for GET requests)

## URIs

The URI is the path to a resource in Salesforce. Although the URI changes from resource to resource, the basic structure remains the same.

```

```

Use https:// to securely access resources.

Replace MyDomainName with the subdomain of your Salesforce org. Salesforce runs on multiple server instances, so the examples in this guide use MyDomainName in place of a specific instance.

Replace XX.X with the version of the API that you want to use. You can find a list of available versions by accessing the [Versions](atlas.en-us.api_rest.meta/api_rest/resources_versions.htm "Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.") resource.

Replace resource with the rest of the path to the resource. Depending on the resource, the path can contain parameters, such as IDs to identify a specific record. You can find the URIs for different resources in the Reference section of this guide.

sObject resources access standard and custom objects in Salesforce. For information about objects, see [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Some parts of URIs are case-sensitive, such as IDs. Other parts of URIs aren't case-sensitive, such as object and field names. If your requests aren't successful, check that your URI has the right letter cases by comparing the URI to the examples in this guide.

## HTTP Methods

REST API supports standard HTTP request methods (HEAD, GET, POST, PATCH, PUT, and DELETE), which follow the specifications at [https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).

The purpose of each method varies depending on the resource. For information on how and when to use each method, check the page for that resource in the Reference section of this guide.

## Headers

Use headers to pass parameters and customize options for HTTP requests. REST API supports several standard HTTP headers, as well as custom headers that are specific to Salesforce.

Common headers used in the examples include:

-   HTTP Accept—Indicates the format that your client accepts for the response body. Possible values are application/json and application/xml. If the value is missing or malformed, then application/json is used by default.
-   HTTP Content-type—Indicates the format of the request body that you attach to the request. Possible values are application/json and application/xml.
-   HTTP Authorization—Provides the OAuth 2.0 access token to authorize your client. REST API supports the Bearer authentication type.
-   Compression header—Compresses the request or the response. For more information, see [Compression Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_compression.htm "Use a compression header to compress a REST API request or response. Compression reduces the bandwidth required for a request, although it requires more processing power at your client. In most cases, this tradeoff benefits the overall performance of your application.").
-   Conditional request header—Validates the records that you access against a precondition. For more information, see [Conditional Request Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm "Use a conditional request header to validate resources before accessing them. By setting a precondition in the header, you ensure that your request succeeds only if that precondition is met. This functionality helps you prevent mistakes and reject outdated requests when updating Salesforce data. You can implement a variety of techniques with conditional request headers, such as response caching.").

## Request Bodies

A request body is a rich input that can be included in the request to provide additional information, such as field values for creating or updating records. A request body can be in JSON or XML format.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Resources accessed with the GET method don’t require you to attach a request body.

Use the HTTP Content-type header to indicate the file format of the request body. If you use cURL to send the request, attach the JSON or XML file to the request using the —data-binary or \-d option.

#### See Also

-   [Send REST Requests with cURL](atlas.en-us.api_rest.meta/api_rest/intro_curl.htm "The examples in this guide use the cURL tool to send HTTP requests that access, create, and manipulate resources in Salesforce. If you use a different tool to send requests, you can use the same elements from the cURL examples to send requests.")

-   [Setting Up Your Java Developer Environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_overview.htm)

## Code Examples

```
https://MyDomainName.my.salesforce.com/services/data/vXX.X/resource/
```

## Related Topics

- Versions (atlas.en-us.api_rest.meta/api_rest/resources_versions.htm)
- Compression
						Headers (atlas.en-us.api_rest.meta/api_rest/intro_rest_compression.htm)
- Conditional Request
						Headers (atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm)
- Send REST Requests with cURL (atlas.en-us.api_rest.meta/api_rest/intro_curl.htm)
