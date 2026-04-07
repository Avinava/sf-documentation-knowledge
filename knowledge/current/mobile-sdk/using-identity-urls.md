---
title: "Using Identity URLs"
domain: mobile-sdk
topic: using-identity-urls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.794Z
estimatedTokens: 2111
keywords: [Identity, URLs, URL, scope, https, login.salesforce.com, 00Dx0000000BV7z, 005x00000012Q9P]
---

> The Identity URL is returned in the id scope parameter.
   For example, https://login.salesforce.com/id/00Dx0000000BV7z/005x00000012Q9P.

# Using Identity URLs

The Identity URL is returned in the id scope parameter. For example, https://login.salesforce.com/id/00Dx0000000BV7z/005x00000012Q9P.

The identity URL is also a RESTful API to query for additional information about users, such as their username, email address, and org ID. It also returns endpoints that the client can talk to, such as photos for profiles and accessible API endpoints.

The format of the URL is https://login.salesforce.com/id/orgID/userID, where orgId is the ID of the Salesforce org that the user belongs to and userID is the Salesforce user ID.

## Identity URL Request Parameters

You can use the following parameters with the access token and identity URL. You can use the access token in an authorization request header or a request with the oauth\_token parameter.

| Parameter | Description |
| --- | --- |
| access_token | OAuth token that a connected app uses to request access to a protected resource on behalf of the client application. Additional permissions in the form of scopes can accompany the access token. |
| format | Optional. Specify the format of the returned output. Values are:jsonxmlThe client can also specify the returned format in an accept-request header using one of the following formats.Accept: application/jsonAccept: application/xmlAccept: application/x-www-form-urlencodedThe request header also supports the following.The */* wildcard is accepted and returns JSON.A list of values, which is checked left to right. For example: application/xml,application/json,application/html,*/* returns XML.The format parameter takes precedence over the access request header. |
| version | Optional. Specify a SOAP API version number or the literal string latest. If this value isn’t specified, the returned API URLs contain the literal value {version} in place of the version number. If the value is specified as latest, the most recent API version is used. |
| PrettyPrint | Optional. Accepted only in a header and not as a URL parameter. Specify this parameter to optimize the returned XML or JSON output for readability rather than size. For example, use the following in a header: X-PrettyPrint:1. |
| callback | Optional. Specify a valid JavaScript function name. You can use this parameter when the specified format is JSON. The output is wrapped in this function name (JSONP). For example, if a request to https://server/id/orgid/userid/ returns {"function":"name"}, a request to https://server/id/orgid/userid/?callback=baz returns baz({"function":"name"});.NoteJSONP is no longer returned for Identity Service requests due to strict MIME typing. Your requests must add 'format=jsonp' with the callback parameter so that the Identity Service returns JavaScript. When the Identity Service detects the JSONP format, it returns the required JavaScript type ('application/javascript'). |
| is_salesforce_integration_user | Optional. Specify this parameter to determine if the user has the Salesforce Integration user license. |

## Identity URL Response

With a successful request, the identity URL response returns information about the queried user and org.

The following identity URL response is in XML format.

```

```

And this response is in JSON format.

```

```

This table describes the returned parameters.

| Parameter | Description |
| --- | --- |
| id | Identity URL, which is the same URL that was queried. |
| asserted_user | Boolean value indicating whether the specified access token was issued for this identity. |
| user_id | User ID of the queried user. |
| username | Username of the queried user. |
| organization_id | ID of the queried user’s Salesforce org. |
| nick_name | Experience Cloud nickname of the queried user. |
| display_name | Display name (full name) of the queried user. |
| email | Email address of the queried user. |
| email_verified | Indicates whether the queried user’s email was verified by clicking a link in the “Welcome to Salesforce” email.The email_verified value is set to true when users click a link in the email they receive after the following:For example, a Salesforce admin creates the user Roberta Smith. Roberta receives a “Welcome to Salesforce” email message with a link to verify her account. After she clicks the link, the email_verified value is set to true.They change their email addressThey change their password, or a Salesforce admin resets their passwordThey verify their identity when logging in from a new device or browserA Salesforce admin creates them as a new user |
| first_name | First name of the queried user. |
| last_name | Last name of the queried user. |
| timezone | Time zone specified in the queried user’s settings |
| photos | Map of URLs to the queried user’s profile pictures, specified as picture or thumbnail.NoteAccessing these URLs requires passing an access token. See access token. |
| addr_street | Street specified in the address of the queried user’s settings. |
| addr_city | City specified in the address of the queried user’s settings. |
| addr_state | State specified in the address of the queried user’s settings. |
| addr_country | Country specified in the address of the queried user’s settings. |
| addr_zip | Zip or postal code specified in the address of the queried user’s settings. |
| mobile_phone | Mobile phone number specified in the queried user’s settings. |
| mobile_phone_verified | Queried user confirmed that the mobile phone number is valid, |
| status | Queried user’s current Chatter status.created_date—xsd datetime value of the creation date of the last post by the user, for example, 2010-05-08T05:17:51.000Z.body—Body of the post. |
| urls | Map containing various API endpoints that can be used with the queried userNoteAccessing the REST endpoints requires passing an access token. See access token.enterprise (SOAP)metadata (SOAP)partner (SOAP)rest (REST)sobjects (REST)search (REST)query (REST)recent (REST)profilefeeds (Chatter)feed-items (Chatter)groups (Chatter)users (Chatter)custom_domainNoteIf the org doesn’t have a custom domain configured and propagated, this value is omitted. |
| active | Boolean specifying whether the queried user is active. |
| user_type | Type of the queried user. |
| language | Language of the queried user. |
| locale | Locale of the queried user. |
| utcOffset | Offset from UTC of the queried user’s time zone, in milliseconds. |
| last_modified_date | xsd datetime format of the last modification of the user, for example, 2010-06-28T20:54:09.000Z. |
| is_app_installed | Value is true when the connected app is installed in the user’s org, and the user’s access token was created using an OAuth flow. If the connected app isn’t installed, the response doesn’t contain this value. When parsing the response, check for the existence and value of this property. |
| mobile_policy | Specific values for managing a mobile connected app. These values are available only when the connected app is installed in the current user’s org, the app has a defined session timeout value, and the mobile PIN has a length value defined.screen_lock—Length of time to wait to lock the screen after inactivity.pin_length—Length of the identification number required to gain access to the mobile app. |
| push_service_type | Set to apple if the connected app is registered with Apple Push Notification Service (APNS) for iOS push notifications. Set to androidGcm if it’s registered with Google Cloud Messaging (GCM) for Android push notifications.The response value type is an array. |
| custom_permissions | When a request includes the custom_permissions scope parameter, the response includes a map containing custom permissions in the org associated with the connected app. If the connected app isn’t installed in the org or has no associated custom permissions, the response doesn’t contain a custom_permissions map.Here’s an example request.http://MyDomainName.my.salesforce.com/services/oauth2/authorize?response_type=token&client_                     id=3MVG9lKcPoNINVBKV6EgVJiF.snSDwh6_2wSS7BrOhHGEJkC_&redirect_uri=http://www.example.org/qa/security/oauth                     /useragent_flow_callback.jsp&scope=api%20id%20custom_permissions                   Here’s the JSON block in the identity URL response."custom_permissions":                       {                       "Email.View":true,                       "Email.Create":false,                       "Email.Delete":false                       } |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<user xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<id>https://MyDomainName.my.salesforce.com/id/00Dx000.../005x000...</id>
<asserted_user>true</asserted_user>
<user_id>005x000000...</user_id>
<organization_id>00Dx000...</organization_id>
<nick_name>admin1.2777578168398293E12...</nick_name>
<display_name>Alan Van</display_name>
<email>admin@mycompany.com</email>
<status>
   <created_date xsi:nil="true"/>
   <body xsi:nil="true"/>
</status>
<photos>
   <picture>https://MyDomainName--03925205UAF.file.force-user-content.com</picture>
   <thumbnail>https://MyDomainName--03925205UAF.file.force-user-content.com</thumbnail>
</photos>
<urls>
   <enterprise>https://MyDomainName.my.salesforce.com/services/Soap/c/{version}/00Dx000...</enterprise>
   <metadata>https://MyDomainName.my.salesforce.com/services/Soap/m/{version}/00Dx000...</metadata>
   <partner>https://MyDomainName.my.salesforce.com/services/Soap/u/{version}/00Dx000...</partner>
   <rest>https://MyDomainName.my.salesforce.com/services/data/v{version}/
   </rest>
   <sobjects>https://MyDomainName.my.salesforce.com/services/data/v{version}/sobjects/
   </sobjects>
   <search>https://MyDomainName.my.salesforce.com/services/data/v{version}/search/
   </search>
   <query>https://MyDomainName.my.salesforce.com/services/data/v{version}/query/
   </query>
   <profile>https://MyDomainName.my.salesforce.com/005x000...</profile>
</urls>
<active>true</active>
<user_type>STANDARD</user_type>
<language>en_US</language>
<locale>en_US</locale>
<utcOffset>-28800000</utcOffset>
<last_modified_date>2021-04-28T20:54:09.000Z</last_modified_date>
</user>
```

```
{"id":"https://MyDomainName.my.salesforce.com/id/00Dx000.../005x000...",
"asserted_user":true,
"user_id":"005x000...",
"organization_id":"00Dx000...",
"nick_name":"admin1.2777578168398293E12...",
"display_name":"Alan Van",
"email":"admin@mycompany.com",
"status":{"created_date":null,"body":null},
"photos":{"picture":"https://MyDomainName--03925205UAF.file.force-user-content.com",
   "thumbnail":"https://MyDomainName--03925205UAF.file.force-user-content.com"},
"urls":
   {"enterprise":"https://MyDomainName.my.salesforce.com/services/Soap/c/{version}/00Dx000...",
   "metadata":"https://MyDomainName.my.salesforce.com/services/Soap/m/{version}/00Dx000...",
   "partner":"https://MyDomainName.my.salesforce.com/services/Soap/u/{version}/00Dx000...",
   "rest":"https://MyDomainName.my.salesforce.com/services/data/v{version}/",
   "sobjects":"https://MyDomainName.my.salesforce.com/services/data/v{version}/sobjects/",
   "search":"https://MyDomainName.my.salesforce.com/services/data/v{version}/search/",
   "query":"https://MyDomainName.my.salesforce.com/services/data/v{version}/query/",
   "profile":"https://MyDomainName.my.salesforce.com/005x000..."},
"active":true,
"user_type":"STANDARD",
"language":"en_US",
"locale":"en_US",
"utcOffset":-28800000,
"last_modified_date":"2021-04-28T20:54:09.000+0000"}
```

```
"custom_permissions":
                      {
                      "Email.View":true,
                      "Email.Create":false,
                      "Email.Delete":false
                      }
```
