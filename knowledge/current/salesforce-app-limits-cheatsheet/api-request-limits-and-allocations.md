---
title: "API Request Limits and Allocations"
domain: salesforce-app-limits-cheatsheet
topic: api-request-limits-and-allocations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.189Z
estimatedTokens: 2735
keywords: [API, Limits, Allocations, apply, Salesforce, Platform, SOAP, REST, APIs, any, built, frameworks, unless, noted, otherwise]
---

# API Request Limits and Allocations

> These limits and allocations apply to Salesforce Platform SOAP and REST APIs and any
		other API built on those frameworks, unless noted otherwise. For information about limits on
		other Salesforce APIs, such as Connect REST API, visit that specific
		documentation.

# API Request Limits and Allocations

These limits and allocations apply to Salesforce Platform SOAP and REST APIs and any other API built on those frameworks, unless noted otherwise. For information about limits on other Salesforce APIs, such as Connect REST API, visit that specific documentation.

To maintain optimum performance and ensure that the Lightning Platform API is available to all our customers, Salesforce balances transaction loads by imposing three types of limits:

-   Concurrent API Request Limits
-   API Timeout Limits
-   Total API Request Allocations

When a call exceeds a request limit, an error is returned.

## Concurrent API Request Limits

The following table lists the limits for various types of orgs for concurrent inbound requests (calls) with a duration of 20 seconds or longer.

| Org Type | Limit |
| --- | --- |
| Developer Edition and Trial orgs | 5 |
| Production orgs and Sandboxes | 25 |

If the number of long running requests exceeds the limit, the API returns a REQUEST\_LIMIT\_EXCEEDED exception code. Any new concurrent requests aren't processed until there are fewer requests than the allowed limit. For example, in a production org, no new concurrent requests are allowed until there are fewer than 25 long running requests.

There isn’t a limit on the number of concurrent requests shorter than 20 seconds.

## API Timeout Limits

The timeout limit for REST and SOAP API calls is 10 minutes, except for any query call. The timeout for query calls is set by the SOQL limits. For details on SOQL limits, visit SOQL and SOSL Limits for Search Queries. For timeout limits on calls made using other Salesforce APIs, such as the Connect REST API and Bulk APIs, visit the specific documentation for those APIs.

If a request exceeds this limit, the API returns a REQUEST\_RUNNING\_TOO\_LONG status code (for SOAP API) or a QUERY\_TIMEOUT exception code (for REST API).

For calls to [Composite Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite.htm "HTML (New Window)") in REST API, this timeout applies to the entire composite request, not to each subrequest.

## Total API Request Allocations

The following table lists the limits for the total inbound API requests (calls) per 24-hour period for an org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

As indicated in the table, the limits for the External Identity license type vary. If you’re not sure whether your limit is 70,000 calls, 750,000 calls, or 4,000,000 calls, contact your Salesforce representative.

| Salesforce Edition | API Calls Per License Type Per 24-Hour Period | Total Calls Per 24-Hour Period |
| --- | --- | --- |
| Developer Edition | N/A | 15,000 |
| Enterprise EditionProfessional Edition with API access enabled | Salesforce: 1,000Salesforce Platform: 1,000Lightning Platform - One App: 200Customer Community: 0Customer Community Login: 0Customer Community Plus: 200Customer Community Plus Login: 10External Identity 25,000: 70,000External Identity 250,000: 750,000External Identity 1,000,000: 4,000,000Partner Community: 200Partner Community Login: 10Lightning Platform Starter: 200 per member for Enterprise Edition orgsLightning Platform Plus: 1000 per member for Enterprise Edition orgs | 100,000 + (number of licenses x calls per license type) + purchased API Call Add-Ons |
| Unlimited EditionPerformance Edition | Salesforce: 5,000Salesforce Platform: 5,000Lightning Platform - One App: 200Customer Community: 0Customer Community Login: 0Customer Community Plus: 200Customer Community Plus Login: 10External Identity 25,000: 70,000External Identity 250,000: 750,000External Identity 1,000,000: 4,000,000Partner Community: 200Partner Community Login: 10Lightning Platform Starter: 200 per member for Unlimited and Performance Edition orgsLightning Platform Plus: 5,000 per member for Unlimited and Performance Edition orgs | 100,000 + (number of licenses x calls per license type) + purchased API Call Add-Ons |
| Full Sandbox | N/A | 5,000,000This limit applies only to Full Sandboxes that aren’t created from a template. For any sandbox created from a template, values in the template determine the limits. For more information, visit Salesforce Help: Sandbox Types and Templates. |

For Experience Cloud limits, see [Experience Cloud User Licenses](https://help.salesforce.com/s/articleView?id=platform.users_license_types_communities.htm&type=5&language=en_US "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

Load, performance, and other system issues can prevent you from using your entire allocation of calls in a 24–hour period.

APIs that count toward this allocation include the Lightning Platform REST API, the Lightning Platform SOAP API, Bulk API, and Bulk API 2.0. API calls issued by certain Salesforce connected apps (for example, the Salesforce mobile app) don’t count. To determine which APIs affect the allocation, see Monitoring Your API Usage.

Calls that include DebuggingHeader have a separate allocation limit of 1,000 calls per 24-hour period. These calls can continue to be made after the total request limit for an org is reached.

Limits and allocations are enforced against the aggregate of all API calls made to the org in a 24-hour period. Limits and allocations are not on a per-user basis.

## Monitoring Your API Usage

To better monitor your org’s API usage and limits, you can use these resources:

-   The API Usage section of the System Overview page in Setup.
-   The API Requests, Last 24 Hours item in the Organization Detail section of the System Overview page in Setup.
-   The API Request Limit per Month usage-based entitlement, which shows you your org’s API calls aggregated over 30 days. This information can be found on the Company Information page in Setup.
-   Information returned in the Sforce-Limit-Info response header for REST APIs.
-   Information returned in the response body (in <type>API REQUESTS</type>) for SOAP APIs.
-   The [/limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "HTML (New Window)") call in the Lightning Platform REST API.

You can configure your org so that email is sent to a designated user when the number of API requests has exceeded a specified percentage of the amount allotted. Perform this configuration from Setup by entering API Usage Notifications in the Quick Find box and then selecting **API Usage Notifications**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

API calls made from installed managed packages, count against your org limit.

## What Happens If You Reach or Exceed Your API Request Limit

If your org reaches or exceeds its daily API request limit, Salesforce still lets the operations proceed by a certain amount, if possible. It helps avoid blocking your workflows during unexpected spikes in workloads and occasional peak periods. A hard cap is in place to safeguard platform resources and prevent API requests from exceeding the daily limit unimpeded.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

The ability to go over your normal daily limit is always subject to restrictions to protect the overall health of the Salesforce instance that hosts your org. (You can monitor the health of your instance on [Salesforce Trust](https://trust.salesforce.com/en/ "HTML (New Window)").)

This ability is designed to be used occasionally to help avoid interruptions in your workflow. Don’t rely on it on an ongoing basis. To increase your allocation, contact your Salesforce account representative.

This ability only applies to paid orgs in active status. It doesn’t apply to trial orgs, Developer Edition, or sandboxes.

API request activity is aggregated into 30-day periods, starting with your contract start date, and includes calls that exceed the org's entitled limit.

## Increasing Total API Request Allocations

The total number of API requests allowed is defined by the users’ licenses in the org. If you need more API requests in your org, use Your Account App to buy additional user licenses or extra API calls. For more information, visit *[Salesforce Help: Add Products and Licenses with the Your Account App](https://help.salesforce.com/s/articleView?id=users_add_products_subscription_management.htm&language=en_US)* or contact your account executive.

Before you buy more API calls, review your current API usage, and reduce your total number of requests, if possible. For example, you can optimize either your own or a partner client application to use fewer API calls and still accomplish the same work. If you use a partner app, consult with the vendor to verify that the product makes optimal use of the API. A product that makes inefficient use of the API incurs unnecessary costs for your company. You can also use REST API [Composite Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite.htm "HTML (New Window)") to improve your application’s performance by minimizing the number of round-trips between the client and server.

## Example API Usage Metering Calculations

These examples illustrate API usage metering calculations for several scenarios.

-   For an Enterprise Edition org with 15 Salesforce licenses, the request limit is 115,000 requests (100,000 plus 15 licenses x 1,000 calls).
-   For a Developer Edition org that made 14,500 calls at 5:00 AM Wednesday, 499 calls at 11:00 PM Wednesday, only one more call can successfully be made until 5:00 AM Thursday.

## Request Size Limits

In each REST call, the allowed length for the combined URI and headers is 16,384 bytes. Requests exceeding this limit can return a 431 Request Header Fields Too Large error at any time. For URIs exceeding this limit, requests can return a 414 URI Too Long error at any time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

Other factors, such as browsers and load balancers, can lower the maximum length of the URI and headers. For public-facing services, it’s recommended to limit URI length to 2000 characters and headers to approximately 8000 bytes.

## Length of Stored Third-Party Refresh and Access Tokens

Salesforce stores third-party access and refresh tokens of up to 10,000 characters in length.

#### See Also

-   [*Salesforce Help*: Callouts and Callbacks: Limits and Usage](https://help.salesforce.com/s/articleView?id=platform.external_services_schema_def_usage_considerations.htm&type=5&language=en_US "Salesforce Help: Callouts and Callbacks: Limits and Usage - HTML (New Window)")
