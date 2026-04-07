---
title: "Supported REST Services"
domain: mobile-sdk
topic: supported-rest-services
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.515Z
estimatedTokens: 621
keywords: [Notification, Notifications, REST, Services, Mobile, SDK, APIs, support, standard, operations, offered, Salesforce, Platform, SOAP, operation, factory, creates, specifically, send, Status]
---

> Mobile SDK REST APIs
            support the standard object operations offered by Salesforce Platform REST and SOAP
            APIs. For most operation types, a factory method or factory object creates a REST
            request object specifically for that operation. You send this request object 

# Supported REST Services

Mobile SDK REST APIs support the standard object operations offered by Salesforce Platform REST and SOAP APIs. For most operation types, a factory method or factory object creates a REST request object specifically for that operation. You send this request object to Salesforce using the Mobile SDK REST API and receive the response asynchronously.

After you’ve sent a request to Salesforce, the response arrives in your app asynchronously. To handle these responses, you can specify a callback delegate when you send the request, or define a closure (Swift only).

## Notification

Get a notification.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Notifications Status

Get the status of a range of notifications, including unread and unseen count.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Notifications

Get the given number (maximum 20) of archived Notification Builder notifications based on the given “before” or “after” date. In Mobile SDK, use the Swift FetchNotificationsRequestBuilder object or the Objective-C SFSDKFetchNotificationsRequestBuilder to create GET requests for notifications.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Notifications Update

Update the “read” and “seen” statuses of a given set of Notification Builder notifications. In Mobile SDK, use the Swift UpdateNotificationsRequestBuilder object or the Objective-C SFSDKUpdateNotificationsRequestBuilder object to create update requests.

To update a single notification, set the notificationId property. To update a range of notifications, set either the notificationIds or the before property. These properties—notificationId, notificationIds, and before—are mutually exclusive.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Example

For sample calls, see /libs/SalesforceSDKCore/SalesforceSDKCoreTests/SalesforceRestAPITests.m at [github.com/forcedotcom/SalesforceMobileSDK-iOS](https://github.com/forcedotcom/SalesforceMobileSDK-iOS "HTML (New Window)").

#### See Also

-   [Supported Salesforce APIs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_api.htm "The RestRequest class provides factory and extension methods that wrap Salesforce API calls. These methods use request parameters that you provide to construct the network call.")

## Code Examples

```
RestClient.shared.request(forNotification:apiVersion:)
```

```
- (SFRestRequest *)requestForNotification:(NSString *)notificationId apiVersion:(NSString *)apiVersion;
```

```
RestClient.shared.request(forNotificationsStatus:)
```

```
- (SFRestRequest *)requestForNotificationsStatus:(NSString *)apiVersion;
```

```
let builder = FetchNotificationsRequestBuilder.init()
builder.setSize(10)
builder.setBefore(Date.init())
let request = builder.buildFetchNotificationsRequest(SFRestDefaultAPIVersion)
```

## Related Topics

- Supported Salesforce APIs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_api.htm)
