---
title: "Connect REST API Architecture"
domain: chatterapi
topic: connect-rest-api-architecture
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.766Z
estimatedTokens: 915
keywords: [Connect, REST, API, Architecture, understand, few, characteristics, how, authenticate, data, formats, supports]
---

# Connect REST API Architecture

> To use Connect REST API, understand a few characteristics of its architecture, like how
    to authenticate, and which data formats it supports.

# Connect REST API Architecture

To use Connect REST API, understand a few characteristics of its architecture, like how to authenticate, and which data formats it supports.

Authentication

Connect REST API uses [OAuth 2.0](http://tools.ietf.org/html/draft-ietf-oauth-v2-10 "HTML (New Window)").

Salesforce is accessed securely using HTTPS.

CORS (Cross-Origin Resource Scripting)

Cross-Origin Resource Sharing (CORS) allows web browsers to request resources from other origins. For example, using CORS, the JavaScript for a web application at https://www.example.com can request a resource from https://www.salesforce.com. To allow access to supported Salesforce APIs, Apex REST resources, and Lightning Out from JavaScript code in a web browser, add the requesting origin to your Salesforce CORS allowlist. See [Perform Cross-Origin Requests from Web Browsers](https://help.salesforce.com/s/articleView?id=xcloud.extend_code_cors.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

Default HTML entity encoding

Responses are minimally HTML entity-encoded by default.

Clients can request raw (unencoded) output. Set the X-Chatter-Entity-Encoding HTTP header in a request to false.

For more information, see [Response Body Encoding](atlas.en-us.chatterapi.meta/chatterapi/intro_encoding.htm "Responses are minimally HTML entity-encoded by default.").

JSON and XML support

The JavaScript Object Notation (JSON) format is supported with UTF-8. Date-time information is in [ISO 8601](https://www.w3.org/TR/NOTE-datetime "HTML (New Window)") format.

XML serialization is similar to SOAP API. XML requests are supported in UTF-8 and UTF-16, and XML responses are provided in UTF-8.

Responses are in JSON format by default. To specify XML, use the HTTP header Accept: application/xml. (To specify JSON, use Accept: application/json.)

You can append either .json or .xml to the URI of any resource to specify how the return is formatted. For example, /chatter/feeds/filter/me/001/feed-elements.xml.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Not all features support XML.

Localized names and times

Connect REST API localizes both the names and datetimes to the locale setting of the user. Users set their locale in their personal information. If the user hasn’t set their locale, Connect REST API uses the default locale for the organization.

Clients can use any locale available in the organization to override the default locale. To override the locale for any API request, use the Accept-Language HTTP header.

For orgs created in Summer ’23 and later, the language specified in the Accept-Language HTTP header must be the same as specified in a language query parameter.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

ISO 8601 dates are always in GMT.

Salesforce ID length

Salesforce IDs in response bodies are always 18-character IDs. In request bodies, you can use either 15-character IDs or 18-character IDs.

UI Themes

Clients can use the X-Connect-Theme HTTP header to specify a UI theme for any API request. There are two themes, each with their own set of motif icons: Classic and Salesforce1. Theme names are case-sensitive.

Method overriding

To override an HTTP method if you use an HTTP library that doesn’t allow overriding or setting an arbitrary HTTP method name, use the request parameter \_HttpMethod.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The \_HttpMethod parameter is case-sensitive. Use the correct case for all values.

## Code Examples

```
POST https://instance_name/services/data/v66.0/chatter/
/chatter/users/me/conversations/03MD0000000008KMAQ
?_HttpMethod=PATCH&read=true
```

## Related Topics

- Response Body Encoding (atlas.en-us.chatterapi.meta/chatterapi/intro_encoding.htm)
