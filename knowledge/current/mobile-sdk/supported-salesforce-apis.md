---
title: "Supported Salesforce APIs"
domain: mobile-sdk
topic: supported-salesforce-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.008Z
estimatedTokens: 1736
keywords: [Salesforce, APIs, RestRequest, factory, extension, wrap, API, calls, provide, construct, network, call]
---

# Supported Salesforce APIs

> The RestRequest class provides factory and
        extension methods that wrap Salesforce API calls. These methods use request parameters that
        you provide to construct the network call.

# Supported Salesforce APIs

The RestRequest class provides factory and extension methods that wrap Salesforce API calls. These methods use request parameters that you provide to construct the network call.

| Swift, Java, Kotlin | Objective-C |
| --- | --- |
| RestRequest | SFRestRequest |

RestRequest returns a specialized copy of itself that reflects your parameters. To send your request to Salesforce, you pass this customized object to the Mobile SDK REST client.

RestRequest supports the following Salesforce APIs.

-   **[Batch Request](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_batch_request.htm)**
    Executes a batch of subrequests.
-   **[Briefcase Priming Records](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming.htm)**
    Returns a request object that obtains record IDs from briefcases assigned to the connected app.
-   **[Briefcase Priming Records Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming_response.htm)**
    Handles responses for all Mobile SDK Briefcase Priming requests.
-   **[Collection Create](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_create.htm)**
    Creates a collection of records of the specified object type.
-   **[Collection Delete](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_delete.htm)**
    Deletes the objects in a collection that match the given object IDs.
-   **[Collection Retrieve](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_retrieve.htm)**
    Retrieves a collection of objects of the given object type that match the given object IDs.
-   **[Collection Update](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_update.htm)**
    Updates the requested collection with the given records.
-   **[Collection Upsert](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_upsert.htm)**
    Updates or inserts a collection of objects from external data.
-   **[Collection Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm)**
    Handles responses for all Mobile SDK Collection requests.
-   **[Composite Request](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_composite_request.htm)**
    Returns a RestRequest object that you then use to execute the composite request.
-   **[Create](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_create.htm)**
    Creates a record of the specified object type.
-   **[Delete](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_delete.htm)**
    Deletes the object of the given type and the given ID
-   **[Describe](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_describe.htm)**
    Completely describes the object’s metadata at all levels, including fields, URLs, and child relationships.
-   **[Describe Global](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_describe_global.htm)**
    Returns a list of all available objects in your org and their metadata.
-   **[Metadata](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_metadata.htm)**
    Describes metadata provided by sObject basic information for the specified object .
-   **[Notification](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_notification.htm)**
    Fetches a single notification by its notification ID.
-   **[Notification Update](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_notification_update.htm)**
    Updates the “read” (if non-null) and “seen” (if non-null) statuses of the notification with the given ID.
-   **[Notifications](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_notifications.htm)**
    Gets the given number (maximum 20) of archived Notification Builder notifications based on the given “before” or “after” date.
-   **[Notifications Status](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_notifications_status.htm)**
    Get the status of the current user’s notifications, including unread and unseen count.
-   **[Notifications Update](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_notifications_update.htm)**
    Updates the “read” (if non-null) and “seen” (if non-null) statuses of notifications with the given IDs, or those sent before the given date.
-   **[Object Layout](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_object_layout.htm)**
    Gets layout metadata for the specified object type and parameters.
-   **[Resources](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_resources.htm)**
    Gets available resources for the specified API version, including resource name and URI.
-   **[Retrieve](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_retrieve.htm)**
    Retrieves a single sObject record by object ID.
-   **[SOSL Search](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_search.htm)**
    Performs the given SOSL search.
-   **[Search Result Layout](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_search_result_layout.htm)**
    Gets the search result layout for up to 100 objects with a single query.
-   **[Search Scope and Order](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_search_scope_order.htm)**
    Gets an ordered list of objects in the current user’s default global search scope.
-   **[SObject Tree](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_sobject_tree.htm)**
    Creates one or more sObject trees with root records of the specified object type.
-   **[SOQL Query](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_soql_query.htm)**

-   **[SOQL Query All](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_soql_query_all.htm)**
    Executes the given SOQL string. The result includes all current and deleted objects that satisfy the query.
-   **[User Info](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_soql_user_info.htm)**
    Returns information associated with the current user.
-   **[Update](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_update.htm)**
    Updates specified fields of the requested record with the given values. Can also prevent the update from occurring if the record has been modified since a given date.
-   **[Upsert](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_upsert.htm)**
    Updates or inserts an object from external data.
-   **[Versions](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_versions.htm)**
    Gets summary information about each Salesforce API version currently available.

#### See Also

-   [Using Salesforce REST APIs with Mobile SDK](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_native_rest_apis.htm)

-   [Using REST APIs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_using_rest_apis.htm)

## Related Topics

- Batch Request (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_batch_request.htm)
- Briefcase Priming Records (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming.htm)
- Briefcase Priming Records Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_briefcase_priming_response.htm)
- Collection Create (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_create.htm)
- Collection Delete (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_delete.htm)
- Collection Retrieve (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_retrieve.htm)
- Collection Update (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_update.htm)
- Collection Upsert (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_upsert.htm)
- Collection Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm)
- Composite Request (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_composite_request.htm)
