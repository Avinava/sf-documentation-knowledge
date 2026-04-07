---
title: "Response Options"
domain: mc-apis
topic: response-options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.252Z
estimatedTokens: 1271
keywords: [Options, allow, response’s, raw, XML, process, object-oriented, environment, deserialize, web, server, capacity, handle, expected, call]
---

# Response Options

> All response options allow you to get your response’s raw XML. To process the XML in an object-oriented environment, deserialize it. Your web server must have the capacity to handle the expected call volume. We make only one attempt at sending the notification to each URL.

# Response Options

All response options allow you to get your response’s raw XML. To process the XML in an object-oriented environment, deserialize it. Your web server must have the capacity to handle the expected call volume. We make only one attempt at sending the notification to each URL.

-   [HTTP Post](#http-post)
-   [Retrieve](#retrieve)
-   [Email](#email)

## HTTP Post

HTTP Post requires a public URL.

### HTTP Request Parameters

These parameters are sent as part of the HTTP Post.

| Name | Description |
| --- | --- |
| RequestID | The unique identifier of the request. This value is returned the first time the call is made. |
| ConversationID | The ConversationID the request is part of. If no conversation is used, this value is blank. |
| OverallStatusCode | The value that is returned in a synchronous call. |
| StatusCode | Identical to OverallStatusCode. |
| StatusMessage | The value that is returned in the Status property in a synchronous call. |
| ErrorCode | The first ErrorCode in the result. If no errors were found, this value is blank. |
| RequestType | The type of request. Always returns Asynchronous. |
| ResultType | Same as RequestType. |
| ResultDetailXML | The XML serialized results if requested. |
| SequenceCode | The SequenceCode specified. If no conversation was used, this value is blank. |
| SendResponseTo.RespondWhen | The event to subscribe the response to:OnCallComplete (request-level) and OnConversationComplete handle both success and error conditionsOnError (request-level) and OnConversationError handle only error conditionsAlways is deprecated in favor in OnCallComplete (request-level)Never is the default condition |
| SendResponseTo.ResponseAddress | The public callback URL to POST to. |
| SendResponseTo.IncludeResults | Specify true or false to control whether the XML serialized Result objects are returned. If not specified or set to false, the HTTP post is just a notification. |
| SendResponseTo.IncludeObjects | Specify true or false to control whether the Object property is populated in the result XML. If IncludeResults is false, this property is ignored, which decreases the size of the ResultDetailXML HTTP parameter. |
| SendResponseTo.OnlyIncludeBase | Specify true or false to control whether the Object property is populated with the entire object that was received, including the APIObject properties. If IncludeObjects is false, this property is ignored, which decreases the size of the ResultDetailXML HTTP parameter. |

### Request Example

This example performs an HTTP Post action to this URL:

```
https://dev.example.com/partneremail
```

The results include the entire Object property.

### Sample C# Request

### Sample PHP Request

### Sample C# Result

### Sample PHP Result

## Retrieve

### ResultMessage

One ResultMessage object is available per request. To retrieve the full XML result, add the ResultDetailXML to the Properties collection.

### Sample C# Request

### Sample PHP Request

### Sample PHP Response

### ResultItem

One ResultItem is available for every top-level object in the request. If a request creates 3 Subscriber objects, 3 ResultItem objects are available for the request.

### Sample C# Request

### Sample PHP Request

### Sample PHP Response

## Email

This call returns an email with an optional ZIP file attachment named "results.zip." The file contains an XML file named "results.xml" after processing of the request or conversation is complete.

### Properties

**RespondWhen**: Which "event" to subscribe the response to:

-   OnCallComplete (request-level) and OnConversationComplete handle both success and error conditions
-   OnError (request-level) and OnConversationError handle only error conditions
-   Always is deprecated in favor in OnCallComplete (request-level)
-   Never is the default condition

**ResponseAddress:****IncludeResults**

-   Determines whether the attachment is included
-   If not specified or set to false, the email is a notification only

**IncludeObjects**

-   Determines whether the Object is populated on each of the Result objects
-   Prerequisite: IncludeResults property set to true
-   When set to false, decreases the size of the attachment
-   When set to true, increases the size of the attachment

**OnlyIncludeBase**

-   Determines whether to reduce the Object property to a base APIObject
-   Prerequisite: IncludeObjects property set to true
-   When set to true, decreases the size of the attachments
-   When set to false, increases the size of the attachment

### Request

This example sends an email to responses@example.com with an attachment containing results with the APIObject properties on the Object property.

### Sample C# Request

### Sample PHP Request

### Sample SOAP Results

The name of the zip file is always "Results.zip," and the XML file is always "Results.xml." This output occurs when IncludeResults = true.

This output occurs when IncludeResults = true and IncludeObjects = true

This output occurs when IncludeResults = true and IncludeObjects = true and OnlyIncludeBase = true.
