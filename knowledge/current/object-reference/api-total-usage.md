---
title: "API Total Usage"
domain: object-reference
topic: api-total-usage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:08.940Z
estimatedTokens: 963
keywords: [API, Total, Usage, events, contain, Platform, SOAP, REST, Bulk, requests]
---

# API Total Usage

> API Total usage events contain details about Platform SOAP API,
			Platform REST API, and Bulk API requests.

# API Total Usage

API Total usage events contain details about Platform SOAP API, Platform REST API, and Bulk API requests.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| API_CLIENT_CATEGORY | TypeStringDescriptionThe category of the client making the API request.Possible values are:AGENTFORCE_AGENT—API request is from an Agentforce agent.EXTERNAL_APPLICATION—API request is from an external app defined in the org.LIGHTNING_UI—API request is from the Lightning UI.SALESFORCE—API request is from an internal Salesforce app or service.UNKNOWN—API request is from an unrecognized category. |
| API_FAMILY | TypeStringDescriptionThe API family. Possible values are REST, SOAP, Bulk, or ApexREST. ApexREST indicates Apex REST, Agentforce Apex REST, or Agentforce AuraEnabled calls. |
| API_RESOURCE | TypeStringDescriptionThe API method or resource. For example, describeSObjects for SOAP, or /v21.0/sobjects/Account/001xx000003DGQW for REST. |
| API_VERSION | TypeNumberDescriptionThe API version. For example, 21.0. |
| BOT_IDENTIFIER | TypestringDescriptionThe ID of the bot. |
| BOT_SESSION_IDENTIFIER | TypestringDescriptionThe bot session ID. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CLIENT_NAME | TypeStringDescriptionThe name of the client making the API request. Includes values passed via the Sforce-Call-Options header. |
| CONNECTED_APP_ID | TypeStringDescriptionThe ID of the connected app making the API request.If the connected app ID includes the prefix 0H4, append it to the connected app ID in the My Domain URL to access app details (https://MyDomainName.my.salesforce.com/0H4xxxxxxxxxxxx). If, however, the connected app ID uses the prefix 888, contact Salesforce Customer Support for app details. |
| CONNECTED_APP_NAME | TypeStringDescriptionThe name of the connected app making the API request. |
| COUNTS_AGAINST_API_LIMIT | TypeBooleanDescriptionWhether the request counted against the API limit (true) or not (false). |
| ENTITY_NAME | TypeSetDescriptionThe name of the object accessed by the API request.For example: Account, Opportunity, Contact, and so on. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always ApiTotalUsage. |
| HTTP_METHOD | TypeStringDescriptionThe HTTP method. For example, GET. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PLANNER_IDENTIFIER | TypestringDescriptionThe ID of the agent planner. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| STATUS_CODE | TypeNumberDescriptionThe HTTP response status code for the request. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the API.For example: 00530000009M943 |
| USER_NAME | TypeStringDescriptionThe username of the user who's using Salesforce services through the API. |
