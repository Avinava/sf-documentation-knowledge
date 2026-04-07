---
title: "Configure"
domain: mc-apis
topic: configure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.606Z
estimatedTokens: 446
keywords: [Configure, account, SOAP, accepts, array, objects, act, upon, result, Therefore, web, service, client, subscriber, attributes]
---

# Configure

> Use the Configure method to configure an account. Like many other SOAP methods, the Configure method accepts an array of objects to act upon and returns one result object for each object in the array. Therefore, a web service client can create one or many subscriber attributes (or property definitio

# Configure

Use the Configure method to configure an account. Like many other SOAP methods, the Configure method accepts an array of objects to act upon and returns one result object for each object in the array. Therefore, a web service client can create one or many subscriber attributes (or property definitions) in one call and receive detailed results for each completed action.

## C# Syntax

```
ConfigureResult[] configure = Configure(Options, Action, Configurations, OverallStatus, OverallStatusMessage, RequestID)
```

## Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| Action | String | Specifies an action to perform on one or many objects. Valid values include: Create, Update, or Delete. Marketing Cloud defines the number of subscriber attributes that you can create for your account when your account is configured. Contact Marketing Cloud to create more subscriber attributes. |
| Configurations | APIObject[] | A collection of account configurations. |
| Options | ConfigureOptions | Optionally specifies more processing options. |
| OverallStatus | String | Specifies the overall status of the request. Valid values include:OK - All objects were successfully configured.Has Error - When configuring multiple APIObject objects, this status means that some of the operations failed, while some succeeded.Error - All configure operations failed during validation or processing.MoreDataAvailableUnsupportedAsyncOperation |
| OverallStatusMessage | String | Specifies the overall status message of the request. |
| RequestID | String | Marketing Cloud's unique identifier for every request. |

## Related Items

[Create a Subscriber Attribute Using Configure Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_subscriber_attribute.htm)

## Related Topics

- Create a Subscriber Attribute Using Configure Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_subscriber_attribute.htm)
