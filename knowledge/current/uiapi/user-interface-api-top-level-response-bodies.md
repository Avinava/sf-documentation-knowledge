---
title: "User Interface API Top-Level Response Bodies"
domain: uiapi
topic: user-interface-api-top-level-response-bodies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.181Z
estimatedTokens: 1727
keywords: [User, API, Top-Level, Bodies, requests, resources, They, may, contain, nested]
---

# User Interface API Top-Level Response Bodies

> These response bodies are returned from requests to User Interface API resources. They
    may contain nested response bodies

# User Interface API Top-Level Response Bodies

These response bodies are returned from requests to User Interface API resources. They may contain nested response bodies

A request to a resource always returns an [HTTP response code](atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm#ui_api_errors "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred."), whether the request was successful or not.

-   **[Action](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)**
    The actions for a single record or a collection of records.
-   **[App](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm)**
    The metadata for a single app.
-   **[Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_apps.htm)**
    A list of apps that the current user has access to.
-   **[Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm)**
    The results from a request to a batch resource. Results include information for each subrequest in the batch.
-   **[Content Document Composite](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_contentdocumentcomposite.htm)**
    The file and its relationship to a record.
-   **[Duplicates](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates.htm)**
    The results of a check for duplicate records.
-   **[Duplicates Configuration](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates_configuration.htm)**
    Contains information about duplicate management configuration for an object. Learn whether duplicate management is configured, which fields are used to determine whether duplicate records exist, and which duplicate rules are active.
-   **[Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm)**
    A single favorite.
-   **[Favorite Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite_collection.htm)**
    A list of favorites.
-   **[List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm)**
    Metadata that describes a list.
-   **[List Info Summary Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_summary_collection.htm)**
    List info summary collection.
-   **[List Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_info.htm)**
    List object info.
-   **[List Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_preferences.htm)**
    List preferences.
-   **[List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm)**
    A collection of list view records.
-   **[Lookup Values](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lookup_values.htm)**
    Records in a lookup relationship, organized by object type.
-   **[Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm)**
    An ordered list of navigation items (tabs) for the current user.
-   **[Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)**
    The metadata for an object.
-   **[Object Info Directory](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info_directory.htm)**
    A directory of objects that are supported by User Interface API and available to the context user.
-   **[Picklist Values](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values.htm)**
    The picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.
-   **[Picklist Values Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values_collection.htm)**
    A collection of picklist values for all the picklists of a specified record type.
-   **[Quick Action Execution](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_perform_action.htm)**
    The results that are returned when a quick action executes.
-   **[Quick Action Layout](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_quick_action_layout.htm)**
    The record layout used by the quick action.
-   **[Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)**
    The field data, API name, child relationship data, and record type information for a record.
-   **[Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_collection.htm)**
    A paginated collection of Record response bodies.
-   **[Record Defaults](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm)**
    The default information and data needed to create or clone a record. Use these values in a request to POST /ui-api/records.
-   **[Record Defaults Template Clone](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_clone.htm)**
    A record template containing the default information and data needed to clone a record. Use these values in a request to POST /ui-api/records.
-   **[Record Defaults Template Create](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_create.htm)**
    A record template containing the default information and data needed to create a record. Use these values in a request to POST /ui-api/records.
-   **[Record Layout](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout.htm)**
    The layout information for a record.
-   **[Record UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm)**
    The layout information, field information, and data for a record.
-   **[Related List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm)**
    Metadata that describes a related list.
-   **[Related List Info Summary Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_summary_collection.htm)**
    A collection of related lists for a given object.
-   **[Related List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_collection.htm)**
    A collection of related list records.
-   **[Related List Record Count](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_count.htm)**
    The number of records in a given related list.
-   **[Related List User Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_user_preferences.htm)**
    User preferences for a related list.
-   **[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)**
    The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.
-   **[Theme](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme.htm)**
    A set of images and banners that make up a theme. Banners display across the top of a page and have a higher aspect ratio than images.

#### See Also

-   [User Interface API Nested Response Bodies](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nested.htm "These response bodies are nested in top-level response bodies.")

## Related Topics

- HTTP response code (atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm)
- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
- App (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_app.htm)
- Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_apps.htm)
- Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm)
- Content Document Composite (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_contentdocumentcomposite.htm)
- Duplicates (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates.htm)
- Duplicates Configuration (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates_configuration.htm)
- Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm)
- Favorite Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite_collection.htm)
