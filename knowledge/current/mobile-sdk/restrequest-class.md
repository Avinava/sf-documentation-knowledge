---
title: "RestRequest Class"
domain: mobile-sdk
topic: restrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.947Z
estimatedTokens: 1475
keywords: [RestRequest, natively, handles, standard, Salesforce, operations, offered, REST, API, SOAP, creates, formats, requests, app, implemented, Mobile, SDK, serves, factory, specialized]
---

> The RestRequest class natively handles the standard
         Salesforce data operations offered by the Salesforce REST API and SOAP API. It creates and
         formats REST API requests from the data your app provides. It is implemented by Mobile SDK
         and serves as a factory for specialized

# RestRequest Class

The RestRequest class natively handles the standard Salesforce data operations offered by the Salesforce REST API and SOAP API. It creates and formats REST API requests from the data your app provides. It is implemented by Mobile SDK and serves as a factory for specialized instances of itself.

Supported operations are:

| Operation or Resource | Parameters | Description |
| --- | --- | --- |
| User Info |  |  |
| SOQL Query | Query string, API version, batch size | Returns the requested fields of records that satisfy the SOQL query. By default, returns up to 2,000 records at once. If you specify a batch size, returns records in batches up to that size. Specifying a batch size does not guarantee that the returned batch is the requested size. |
| Versions | None | Returns Salesforce version metadata |
| Object Layout |  |  |
| Batch request | API version, flag telling the batch process whether to halt in the case of error, list of subrequests | Returns a RestRequest object containing a batch of up to 25 subrequests specified in a list of RestRequest objects. Each subrequest counts against rate limits. |
| Resources | API version | Returns available resources for the specified API version, including resource name and URI |
| Metadata | API version, object type | Returns the object’s complete metadata collection |
| DescribeGlobal | API version | Returns a list of all available objects in your org and their metadata |
| Describe | API version, object type | Returns a description of a single object type |
| Create | API version, object type, map of field names to value objects | Creates a new record in the specified object |
| CompositeRequest | API version, “all or none” flag that indicates whether to treat all requests as a transactional block in error conditions, hash map of subrequests (values) and their reference ID (keys) | Returns a RestRequest object that you use to execute the composite request. Regardless of the number of subrequests, each composite request counts as one API call. See “Composite” in the REST API Developer Guide. |
| Retrieve | API version, object type, object ID, list of fields | Retrieves a record by object ID |
| Search | API version, SOQL query string | Executes the specified SOQL search |
| SearchResultLayout | API version, list of objects | Returns search result layout information for the specified objects |
| SearchScopeAndOrder | API version | Returns an ordered list of objects in the default global search scope of a logged-in user |
| SObject Tree | API version, object type, list of SObject tree nodes | Returns a RestRequest object for an SObject tree based on the given list of SObject tree nodes. |
| Update | API version, object type, object ID, map of field names to value objects, If-Unmodified-Since date (optional) | Updates an object with the given map. For conditional updates, Mobile SDK supports If-Unmodified-Since requests. |
| Upsert | API version, object type, external ID field, external ID, map of field names to value objects | Updates or inserts an object from external data, based on whether the external ID currently exists in the external ID field. If you set the name of the external ID field to“Id” and the external ID to null, a new record is created. |
| Delete | API version, object type, object ID | Deletes the object of the given type with the given ID |
| Notification | API version, notification ID | Retrieves the notification with the given ID. |
| NotificationUpdate | API version, notification ID, read status, seen status | Updates the “read” (if non-null) and “seen” (if non-null) statuses of the notification with the given ID. |
| Notifications | API version, number of notifications, date before, date after | Retrieves notifications sent before or after a given date. “Date before” and “date after” are mutually exclusive parameters. |
| NotificationsStatus | API version | Retrieves the status of the current user’s notifications. |
| NotificationsUpdate | API version, notification IDs, date before, read status, seen status | Updates the “read” (if non-null) and “seen” (if non-null) statuses of notifications with the given IDs, or those sent before the given date. IDs and “date before” are mutually exclusive parameters. |

To create instances of RestRequest, use one of the following RestRequest static factory methods.

-   getRequestForUserInfo()
-   getRequestForVersions()
-   getRequestForResources()
-   getRequestForDescribeGlobal()
-   getRequestForMetadata()
-   getRequestForDescribe()
-   getRequestForCreate()
-   getRequestForRetrieve()
-   getRequestForUpdate()
-   getRequestForUpsert()
-   getRequestForDelete()
-   getRequestForQuery()
-   getRequestForSearch()
-   getRequestForSearchScopeAndOrder()
-   getRequestForSearchResultLayout()
-   getRequestForObjectLayout()
-   getBatchRequest()
-   getCompositeRequest()
-   getRequestForSObjectTree()
-   getRequestForNotification()
-   getRequestForNotificationUpdate()
-   getRequestForNotifications()
-   getRequestForNotificationsStatus()
-   getRequestForNotificationsUpdate()

Each of these methods returns a RestRequest object. You send your request by passing the returned RestRequest object to RestClient.sendAsync() or RestClient.sendSync(). See [Using REST APIs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_using_rest_apis.htm).

## Example

For sample calls, see /libs/test/SalesforceSDKTest/src/com/salesforce/androidsdk/rest/RestRequestTest.java at [github.com/forcedotcom/SalesforceMobileSDK-Android](https://github.com/forcedotcom/SalesforceMobileSDK-Android).

#### See Also

-   [Supported Salesforce APIs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_api.htm "The RestRequest class provides factory and extension methods that wrap Salesforce API calls. These methods use request parameters that you provide to construct the network call.")

## Related Topics

- Using REST APIs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_using_rest_apis.htm)
- Supported Salesforce APIs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_api.htm)
