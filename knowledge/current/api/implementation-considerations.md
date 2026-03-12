---
title: "Implementation Considerations"
domain: api
topic: implementation-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:56.758Z
estimatedTokens: 5410
keywords: [Implementation, Considerations, build, integration, app, client, consider, issues, explained, Choosing, User, Permissions, Limits, Login, Server]
---

# Implementation Considerations

> Before you build an integration app or other client app, consider the issues explained
		in this section.

# Implementation Considerations

Before you build an integration app or other client app, consider the issues explained in this section.

Most issues involve data management, use limits, or communication.

## Choosing a User for an Integration

When your client app connects to the API, it must first log in. You must specify a user to log in to Salesforce when calling login(). Client apps run with the permissions and sharing of the logged-in user. Use the following sections to help decide how to configure a user for your client app.

### Permissions

As an org’s Salesforce admin, you control which features and views are available to users by configuring profiles and permission sets and assigning users to them. To access the API to issue calls and receive the call results, a user must have the API Enabled permission. Client apps can query or update only those objects and fields to which they have access via the permissions of the logged-in user.

If the client application logs in as a user who has access to data via a sharing rule, then the API must issue an extra query to check access. To avoid this, log in as a user with the “Modify All Data” permission. This can speed up the call response time. If providing the Modify All Data permission is too permissive for a particular user, consider using the Modify All Records object-level permission to restrict data access on an object basis.

### Limits

Multiple client apps can log in using the same username argument. However, this approach increases your risk of getting errors due to query limits.

If multiple client apps are logged in with the same user, they all share the same session. If one of the client apps calls logout(), it invalidates the session for all the client apps. Using a different user for each client app makes it easier to avoid these limits.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

In addition to user limits, Salesforce limits for API requests for each org.

## Login Server URL

SOAP API provides a single login server. You can log in to any org from a single entry point without hard coding the instance. To access an org via the API, first authenticate the session by sending a [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") request to the login server at one of the following URLs, depending on your choice of WSDL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

HTTPS is required. login()requests that use HTTP, for example, https://login.salesforce.com/services/Soap/u/54.0, aren’t supported.

All subsequent calls to the server during the session should be made to the URL returned in the [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") response, which points to the server instance for your org.

## Log In to the Login Server

Before invoking any other calls, a client app must first invoke the [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") call to establish a session with the login server. It then sets the returned server URL as the target server for subsequent API requests and sets the returned session ID in the SOAP header to provide server authorization for subsequent API requests. Salesforce checks the IP address from which the client app is logging in and blocks logins from unknown IP addresses. For more information, see [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") and [Step 4: Walk Through the Sample Code](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_walk_through_code.htm "Once you have imported your WSDL file, you can begin building client applications that use the API.").

If the API blocks the login, Salesforce returns a login fault. To log in, the user must add the security token at the end of the user’s password. For example, if a user's password is mypassword and the security token is XXXXXXXXXX, the user enters mypasswordXXXXXXXXXX. Users get their security token by changing their password or resetting their security token from the Salesforce user interface. When users change their password or reset their security token, Salesforce sends a new security token to the email address on the user’s Salesforce record. The security token is valid until the user resets the security token, or changes the password, or you reset the user’s password. When the security token is invalid, the user must repeat the login process. To avoid another log in, add the client's IP address to the org's list of trusted IP addresses.

When you are logged in, you can issue API calls. For each operation, client apps submit a synchronous request to the API, await the response, and then process the results. The API commits changed data automatically.

API calls:

-   [Core Calls](atlas.en-us.api.meta/api/sforce_api_calls_list.htm "A list of supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call.")
-   [Describe Calls](atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm "Lists supported describe calls in the API.")
-   [Utility Calls](atlas.en-us.api.meta/api/utility_calls.htm "This topic describes API calls that your client applications can invoke to obtain the system timestamp, user information, and change user passwords.")

## Typical API Call Sequence

For each call, your client app typically:

1.  Prepares the request by defining request parameters, if applicable.
2.  Invokes the call, which passes the request with its parameters to the Lightning Platform Web Service for processing.
3.  Receives the response from the API.
4.  Handles the response, either by processing the returned data (for a successful invocation) or by handling the error (for a failed invocation).

## Salesforce Sandbox

Professional, Enterprise, Unlimited, and Performance Edition customers have access to the Salesforce Sandbox, which is a testing environment that offers a full or partial copy of your Salesforce org’s live production data. For more information, visit the Salesforce Community website at www.salesforce.com/community or see Sandbox Types and Templates in the Salesforce Help.

To access your org’s sandbox via the API, use the following URLs to make login requests.

## Multiple Instances of Salesforce Database Servers

Although orgs are generally allocated by geographic regions, an org may be on any instance.

## Content Type Requirement

All requests must contain a correct content type HTTP header, for example: Content-Type: text/xml; charset=utf-8.

## API Usage Metering

To maintain optimum performance and ensure that the Lightning Platform API is available to all our customers, Salesforce balances transaction loads by imposing two types of limits:

-   Concurrent API Request Limits
-   Total API Request Allocations

When a call exceeds a request limit, an error is returned.

### Concurrent API Request Limits

The following table lists the limits for various types of orgs for concurrent inbound requests (calls) with a duration of 20 seconds or longer.

| Org Type | Limit |
| --- | --- |
| Developer Edition and Trial orgs | 5 |
| Production orgs and Sandboxes | 25 |

If the number of long running requests exceeds the limit, the API returns a REQUEST\_LIMIT\_EXCEEDED exception code. Any new concurrent requests aren't processed until there are fewer requests than the allowed limit. For example, in a production org, no new concurrent requests are allowed until there are fewer than 25 long running requests.

There isn’t a limit on the number of concurrent requests shorter than 20 seconds.

### Total API Request Allocations

The following table lists the limits for the total inbound API requests (calls) per 24-hour period for an org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

As indicated in the table, the limits for the External Identity license type vary. If you’re not sure whether your limit is 70,000 calls, 750,000 calls, or 4,000,000 calls, contact your Salesforce representative.

| Salesforce Edition | API Calls Per License Type Per 24-Hour Period | Total Calls Per 24-Hour Period |
| --- | --- | --- |
| Developer Edition | N/A | 15,000 |
| Enterprise EditionProfessional Edition with API access enabled | Salesforce: 1,000Salesforce Platform: 1,000Lightning Platform - One App: 200Customer Community: 0Customer Community Login: 0Customer Community Plus: 200Customer Community Plus Login: 10External Identity 25,000: 70,000External Identity 250,000: 750,000External Identity 1,000,000: 4,000,000Partner Community: 200Partner Community Login: 10Lightning Platform Starter: 200 per member for Enterprise Edition orgsLightning Platform Plus: 1000 per member for Enterprise Edition orgs | 100,000 + (number of licenses x calls per license type) + purchased API Call Add-Ons |
| Unlimited EditionPerformance Edition | Salesforce: 5,000Salesforce Platform: 5,000Lightning Platform - One App: 200Customer Community: 0Customer Community Login: 0Customer Community Plus: 200Customer Community Plus Login: 10External Identity 25,000: 70,000External Identity 250,000: 750,000External Identity 1,000,000: 4,000,000Partner Community: 200Partner Community Login: 10Lightning Platform Starter: 200 per member for Unlimited and Performance Edition orgsLightning Platform Plus: 5,000 per member for Unlimited and Performance Edition orgs | 100,000 + (number of licenses x calls per license type) + purchased API Call Add-Ons |
| Full Sandbox | N/A | 5,000,000This limit applies only to Full Sandboxes that aren’t created from a template. For any sandbox created from a template, values in the template determine the limits. For more information, visit Salesforce Help: Sandbox Types and Templates. |

For Experience Cloud limits, see [Experience Cloud User Licenses](https://help.salesforce.com/s/articleView?id=platform.users_license_types_communities.htm&type=5&language=en_US "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Load, performance, and other system issues can prevent you from using your entire allocation of calls in a 24–hour period.

APIs that count toward this allocation include the Lightning Platform REST API, the Lightning Platform SOAP API, Bulk API, and Bulk API 2.0. API calls issued by certain Salesforce connected apps (for example, the Salesforce mobile app) don’t count. To determine which APIs affect the allocation, see Monitoring Your API Usage.

Calls that include DebuggingHeader have a separate allocation limit of 1,000 calls per 24-hour period. These calls can continue to be made after the total request limit for an org is reached.

Limits and allocations are enforced against the aggregate of all API calls made to the org in a 24-hour period. Limits and allocations are not on a per-user basis.

### Monitoring Your API Usage

To better monitor your org’s API usage and limits, you can use these resources:

-   The API Usage section of the System Overview page in Setup.
-   The API Requests, Last 24 Hours item in the Organization Detail section of the System Overview page in Setup.
-   The API Request Limit per Month usage-based entitlement, which shows you your org’s API calls aggregated over 30 days. This can be found on the Company Information page in Setup.
-   Information returned in the Sforce-Limit-Info response header for REST APIs.
-   Information returned in the response body (in <type>API REQUESTS</type>) for SOAP APIs.
-   The [/limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "HTML (New Window)") call in the Lightning Platform REST API.

You can configure your org so that email is sent to a designated user when the number of API requests has exceeded a specified percentage of the amount allotted. Perform this configuration from Setup by entering API Usage Notifications in the Quick Find box and then selecting **API Usage Notifications**.

See also the [Learn About Daily Rate Limits](https://trailhead.salesforce.com/content/learn/modules/app-development-without-limits/app-development-without-limits-rate "HTML (New Window)") section in the App Development Without Limits Trailhead module.

### What Happens If You Reach or Exceed Your API Request Limit

If your org reaches or exceeds its daily API request limit, Salesforce still allows the operations to proceed by a certain amount, if possible. This helps avoid blocking your workflows during unexpected spikes in workloads and occasional peak periods. A hard cap is in place to safeguard platform resources and prevent API requests from exceeding the daily limit unimpeded.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The ability to go over your normal daily limit is always subject to restrictions to protect the overall health of the Salesforce instance that hosts your org. (You can monitor the health of your instance on [Salesforce Trust](https://trust.salesforce.com/en/ "HTML (New Window)").)

This ability is designed to be used occasionally to help avoid interruptions in your workflow. Don’t rely on it on an ongoing basis. To increase your allocation, contact your Salesforce account representative.

This ability only applies to paid orgs in active status. It does not apply to trial orgs, Developer Edition, or sandboxes.

API request activity is aggregated into 30 day periods, starting with your contract start date, and includes calls that exceed the org's entitled limit.

### Increasing Total API Request Allocations

The calculation of the API request amounts based on user licenses is designed to allow sufficient capacity for your org based on your number of users. If you need a higher amount and you don’t want to purchase extra user licenses or upgrade to Performance Edition, you can purchase extra API calls. For information, contact your account representative.

Before you purchase more API calls, perform due diligence of your API usage. You can optimize a client application, whether it’s your own enterprise application or partner application, to use fewer API calls and still accomplish the same work. If you use a partner product, consult with the vendor to verify that the product makes optimal use of the API. A product that makes inefficient use of the API incurs unnecessary costs for your company. Use REST API [composite resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite.htm "HTML (New Window)") to improve your application’s performance by minimizing the number of round-trips between the client and server.

### Example API Usage Metering Calculations

The following examples illustrate API usage metering calculations for several scenarios.

-   For an Enterprise Edition org with 15 Salesforce licenses, the request limit is 115,000 requests (100,000 plus 15 licenses x 1,000 calls).
-   For a Developer Edition org that made 14,500 calls at 5:00 AM Wednesday, 499 calls at 11:00 PM Wednesday, only one more call can successfully be made until 5:00 AM Thursday.

### Length of Stored Third-Party Refresh and Access Tokens

Salesforce stores third-party access and refresh tokens of up to 10,000 characters in length.

## Compression

The API allows the use of compression on the request and the response, using the standards defined by the HTTP 1.1 specification. This is automatically supported by some SOAP/WSDL clients, and can be manually added to others. Visit [https://developer.salesforce.com/page/Tools](https://developer.salesforce.com/page/Tools) for more information on particular clients.

Compression is not used unless the client specifically indicates that it supports compression. For better performance, we suggest that clients accept and support compression as defined by the HTTP 1.1 specification.

To indicate that the client supports compression, you should include the HTTP header “Accept-Encoding: gzip, deflate” or a similar heading. The API compresses the response if the client properly specifies this header. The response includes the header “Content-Encoding: deflate” or “Content-Encoding: gzip,” as appropriate. You can also compress any request by including a “Content-Encoding: deflate” or “gzip” header.

Most clients are partially constrained by their network connection, even on a corporate LAN. The API allows the use of compression to improve performance. Almost all clients can benefit from response compression, and many clients may benefit from compression of requests as well. The API supports deflate and gzip compression according to the HTTP 1.1 specification.

### Response Compression

The API can optionally compress responses. Responses are compressed only if the client sends an Accept-Encoding header with either gzip or deflate compression specified. The API is not required to compress the response even if you have specified Accept-Encoding, but it normally does. If the API compresses the response, it also specifies a Content-Encoding header with the name of the compression algorithm used, either gzip or deflate.

### Request Compression

Clients can also compress requests. The API decompresses any requests before processing. The client must send up a Content-Encoding HTTP header with the name of the appropriate compression algorithm. For more information, see:

-   Content-Encoding at: [www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11)
-   Accept-Encoding at: [www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3)
-   Content Codings at: [www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.5](http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.5)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

To implement request SOAP compression in a Java client with WSC (Web Service Connector), call setCompression() on the Config you use to instantiate a Connection object with.

## HTTP Persistent Connections

Most clients achieve better performance if they use HTTP 1.1 persistent connection to reuse the socket connection for multiple requests. Persistent connections are normally handled by your SOAP/WSDL client automatically. For more details, see the HTTP 1.1 specification at:

[http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1)

## HTTP Chunking

Clients that use HTTP 1.1 may receive chunked responses. Chunking is normally handled by your SOAP/WSDL client automatically.

## Internationalization and Character Sets

The API supports either full Unicode characters or ISO-8859-1 characters. The character set depends on the Salesforce instance that your org uses. If your org logs in to ssl.salesforce.com, your encoding is ISO-8859-1. All other instances use UTF-8. To determine the character set, call describeGlobal() and inspect the encoding value returned in DescribeGlobalResult.

If your org uses ISO-8859-1 encoding, all data sent to the API must be encoded in ISO-8859-1. Characters outside the valid ISO-8859-1 range might be truncated or cause an error.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The API response is encoded in the character set used by your org (UTF-8 or ISO-8859-1). Either way, the encoded data is usually handled for you by the SOAP client.

## XML Compliance

The API is based on XML, which requires all documents to be well formed. Part of that requirement is that certain Unicode characters are not allowed in an XML document, even in an escaped form, and that others must be encoded according to their location. Normally this is handled for you by any standard SOAP or XML client. Clients must be able to parse any normal XML escape sequence, and must not pass up invalid XML characters.

Some characters, as mentioned, are illegal even if they are escaped. The illegal characters include unpaired Unicode surrogates and a few other Unicode characters. All are seldom-used control characters that are usually not important in any data, and tend to cause problems with many programs. Although they are not allowed in XML documents, they are allowed in HTML documents and may be present in Salesforce data. The illegal characters are stripped from any API response.

Illegal characters:

-   0xFFFE
-   0xFFFF
-   Control characters 0x0 - 0x19, except the following characters, which are legal: 0x9, 0xA, 0xD, tab, newline, and carriage return)
-   0xD800 - 0xDFFF, unless they’re used to form a surrogate pair

## .NET, Non-String Fields, and the Enterprise WSDL

If you use .NET with the enterprise WSDL, .NET generates a Boolean field for each non-string field. For example, if you have a date value in MyDateField\_\_c, .NET generates a Boolean field called MyDateField\_\_cSpecified.

The generated field value is false by default. If a Specified field value is false, then the values in the corresponding original field are not be included in the SOAP message. For example, before the values in the currency field annualRevenue can be included in a SOAP message generated by your client app, the value of annualRevenueSpecified must be set to true.

```

```

## Code Examples

```
account.annualRevenue = 10000;
account.annualRevenueSpecified = true;
```

## Related Topics

- login() (atlas.en-us.api.meta/api/sforce_api_calls_login.htm)
- Step 4: Walk Through the Sample
					Code (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_walk_through_code.htm)
- Core
						Calls (atlas.en-us.api.meta/api/sforce_api_calls_list.htm)
- Describe Calls (atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm)
- Utility
					Calls (atlas.en-us.api.meta/api/utility_calls.htm)
