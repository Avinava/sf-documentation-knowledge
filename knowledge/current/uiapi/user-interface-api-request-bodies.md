---
title: "User Interface API Request Bodies"
domain: uiapi
topic: user-interface-api-request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.237Z
estimatedTokens: 1316
keywords: [User, API, Bodies, successful, execution, resource, JSON]
---

# User Interface API Request Bodies

> The successful execution of a request to a resource can return a response body in JSON
    format.

# User Interface API Request Bodies

The successful execution of a request to a resource can return a response body in JSON format.

A request to a resource always returns an [HTTP response code](atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm#ui_api_errors "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred."), whether the request was successful or not.

-   **[Action Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_input.htm)**
    Get the actions on related lists on a record detail page.
-   **[Action Related List Single Batch Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_related_list_single_batch_input.htm)**
    Get the actions on a batch of related lists for a record.
-   **[Action Related Lists Batch Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_related_list_batch_input.htm)**
    Get the actions on a batch of related lists for a record.
-   **[Batch Record Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_input.htm)**
    A description of multiple operations for a request to create, update, or delete a batch of records.
-   **[Content Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_content_input.htm)**
    Upload a file or a new file version.
-   **[Batch Operation Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm)**
    Represents the operation type and record data to create, update, and delete in a batch.
-   **[Favorite Batch Collection Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_batch_collection_input.htm)**
    A collection of all the favorites in a batch. Pass this request body to update a batch of favorites.
-   **[Favorite Batch Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_batch_input.htm)**
    Represents a single favorite when updating favorites in batch.
-   **[Favorite Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_input.htm)**
    A favorite to create or update.
-   **[List Filter By Info Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_filter_by_info_input.htm)**
    List filter by info to update or create.
-   **[List Info Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_input.htm)**
    Info to update a list.
-   **[List Info Post Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_info_post_input.htm)**
    Info to create a list.
-   **[List Order By Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_order_by_input.htm)**
    Information describing how to order a related list. This request body supports sorting related lists only by one field. Use this request body to update a related list.
-   **[List Preferences Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_preferences_input.htm)**
    List preferences to update.
-   **[List Records Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_records_input.htm)**
    Record data to query for a list view.
-   **[List Scope Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_scope_input.htm)**
    List scope to update or create.
-   **[List User Preference Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_user_preference_input.htm)**
    A related list user preferences to update.
-   **[Lookup Post Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_lookup_post_input.htm)**
    Get lookup field suggestions.
-   **[Navigation Item Collection Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_navigation_item_collection_input.htm)**
    A collection of all the navigation items (tabs) for an app. Pass this request body to get or update a user’s personalized navigation items.
-   **[Navigation Item Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_navigation_item_input.htm)**
    Represents the list of navigation items in the order that you want them to appear in the app.
-   **[Page Reference Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_page_reference_input.htm)**
    To add a navigation item, include a pageReference. A pageReference is a JSON object that describes the navigation item’s page type, its attributes, and the state of the page.
-   **[Perform Action Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_perform_action_input.htm)**
    Perform a quick action that creates or updates a record.
-   **[Record Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_record_input.htm)**
    A description of a record to use in a request to create or update a record or in a request to check for duplicate records.
-   **[Related List Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_input.htm)**
    A related list to update.
-   **[Related List Records Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_record_input.htm)**
    Get record data for up to 1,999 records in a related list.
-   **[Related List Records Batch Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_record_batch_input.htm)**
    Get record data for a batch of related lists.
-   **[Related List User Preferences Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_user_preferences_input.htm)**
    User preferences to update for a related list.

## Related Topics

- HTTP response code (atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm)
- Action Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_input.htm)
- Action Related List Single Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_related_list_single_batch_input.htm)
- Action Related Lists Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_related_list_batch_input.htm)
- Batch Record Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_input.htm)
- Content Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_content_input.htm)
- Batch Operation Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm)
- Favorite Batch Collection Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_batch_collection_input.htm)
- Favorite Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_batch_input.htm)
- Favorite Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_input.htm)
