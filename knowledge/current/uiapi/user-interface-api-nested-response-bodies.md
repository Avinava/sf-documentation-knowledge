---
title: "User Interface API Nested Response Bodies"
domain: uiapi
topic: user-interface-api-nested-response-bodies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.986Z
estimatedTokens: 3208
keywords: [User, API, Nested, Bodies, top-level]
---

# User Interface API Nested Response Bodies

> These response bodies are nested in top-level response bodies.

# User Interface API Nested Response Bodies

These response bodies are nested in top-level response bodies.

A request to a resource always returns an [HTTP status code](atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm#ui_api_errors "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred."), whether the request was successful or not.

-   **[Batch Result Item](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_result.htm)**
    The results of one subrequest in a batch request.
-   **[Canvas Layout Component](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_canvas_layout_component.htm)**
    A canvas component on a record page layout.
-   **[Case Status Picklist Value Attributes](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_case_status_picklist_values.htm)**
    Additional picklist value attributes for case statuses.
-   **[Child Relationship](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_child_relationship.htm)**
    The child relationship on a parent object. Relationships are connections between records. Use relationships to display data about related object records on a record's detail page.
-   **[Custom Link Layout Component](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_custom_link_layout_component.htm)**
    A custom link component on a record page layout.
-   **[Duplicate Record Error](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_record_error.htm)**
    Information about duplicate record errors. Duplicate rules are used to control whether and when you can save duplicate records within Salesforce. Duplicate rules tell Salesforce what action to take when you attempt to create a duplicate record.
-   **[Duplicate Result Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_result_info.htm)**
    The result of the check for duplicate records. If duplicate records exist, returns the records' IDs and the duplicate rule that was used to match the records.
-   **[Duplicate Rule](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_rule.htm)**
    Describes a duplicate rule.
-   **[Duplicate Rule Filter](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_rule_filter.htm)**
    A duplicate rule filter.
-   **[Duplicate Rule Filter Item](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_rule_filter_item.htm)**
    A filter, or condition, for a duplicate rule. For example, a condition can specify that this rule applies only to movies that were produced in the United States.
-   **[Error Message](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_message.htm)**
    An error code and error message.
-   **[Error with Output](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_with_output.htm)**
    Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict.
-   **[Field](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field.htm)**
    A field's metadata.
-   **[Field Layout Component](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field_layout_component.htm)**
    A field in a record layout.
-   **[Field Value](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field_value.htm)**
    The raw and displayable field values for a field in a record.
-   **[Filtered Lookup Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_filtered_lookup_info.htm)**
    Metadata for a lookup filter.
-   **[Lead Status Picklist Value Attributes](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lead_status_picklist_values.htm)**
    Additional picklist value attributes for lead statuses.
-   **[List Column](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_column.htm)**
    A column in a list.
-   **[List Column Inline Edit Attributes](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_column_inline_edit_attributes.htm)**
    List column inline edit attributes.
-   **[List Filter by Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_filter_by_info.htm)**
    Information used to filter a list.
-   **[List Info Share](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_share.htm)**
    List info share.
-   **[List Info Share Category](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_share_category.htm)**
    List info share category.
-   **[List Info Summary](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_summary.htm)**
    List info summary.
-   **[List Inline Edit Details](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_inline_edit_details.htm)**
    List inline edit details.
-   **[List Object Column](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_column.htm)**
    List object column.
-   **[List Object Picklist Value](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_picklist_value.htm)**
    List object picklist value.
-   **[List Object Quick Filter Overrides](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_quick_filter_overrides.htm)**
    List object column quick filter overrides.
-   **[List Object Scope](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_scope.htm)**
    List object scope.
-   **[List Object Scope Available Entity](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_object_scope_available_entity.htm)**
    List object scope available entity, such as a group or queue.
-   **[List Order By Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_order_by_info.htm)**
    Ordering information for a list.
-   **[List Reference](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_reference.htm)**
    The list view referenced by the collection or metadata.
-   **[List Scope](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_scope.htm)**
    List scope.
-   **[List Scope Entity](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_scope_entity.htm)**
    List scope entity.
-   **[List Scope Related Entity](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_scope_related_entity.htm)**
    List scope related entity.
-   **[List User Preference](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_user_preference.htm)**
    User preferences for the list view.
-   **[Location Field](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_location_field.htm)**
    A complex location value for a record field.
-   **[Match](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match.htm)**
    A group of records that match the duplicate rules.
-   **[Match Result](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match_result.htm)**
    A duplicate rule match. Duplicate rules are used to control whether and when you can save duplicate records within Salesforce. Duplicate rules tell Salesforce what action to take when you attempt to create a duplicate record. Each duplicate rule requires at least one matching rule to identify which existing records are possible duplicates.
-   **[Match Result Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match_result_info.htm)**
    Information about the results of a match.
-   **[Match Rule](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match_rule.htm)**
    A match rule defines how duplicate records are identified in duplicate rules and duplicate jobs. Learn about one of the match rules for the specified object, including the match rule's name and the fields that the match rule checks.
-   **[Navigation Item](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_item.htm)**
    The metadata for a single navigation item (tab).
-   **[Object Action](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_action.htm)**
    The actions for an object.
-   **[Object Info Directory Entry](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info_directory_entry.htm)**
    An entry in the Object Info Directory, which is a directory of objects that User Interface API supports and that the context user can access.
-   **[Opportunity Stage Picklist Value Attributes](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_opportunity_stage_picklist_values.htm)**
    Additional picklist value attributes for opportunity stages.
-   **[Page Reference](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_page_reference.htm)**
    A page reference.
-   **[Picklist Value](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_value.htm)**
    A single picklist value.
-   **[Platform Action](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_platform_action.htm)**
    The metadata, layout information, and data for a platform action.
-   **[Record Exceptions](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception.htm)**
    A collection of record exception errors.
-   **[Record Exception Error](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception_error.htm)**
    Information about a record exception error.
-   **[Record Layout Component](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_component.htm)**
    A concrete record layout component.
-   **[Record Layout Item](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_item.htm)**
    An item in a record layout.
-   **[Record Layout Row](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_row.htm)**
    A row in a record layout.
-   **[Record Layout Save Option](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_save_option.htm)**
    The save option for a record layout. Save options define behavior that occurs when objects are created or modified using the given layout. For example, for Cases and Leads, a “UseDefaultAssignmentRule” save option is exposed to control whether assignment rules are applied when Cases or Leads are created or edited.
-   **[Record Layout Section](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_section.htm)**
    A section in a record layout.
-   **[Record Layout Section User State](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_section_user_state.htm)**
    The user state information for a record layout section.
-   **[Record Layout User State](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_user_state.htm)**
    The user state information for a record layout.
-   **[Record Template Clone](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_clone.htm)**
    A record template containing the default information and data needed to clone a record. Use these values in a request to POST /ui-api/records.
-   **[Record Template Create](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_create.htm)**
    A record template containing the default information and data needed to create a record. Use these values in a request to POST /ui-api/records.
-   **[Record Type Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_type_info.htm)**
    Information about a record type.
-   **[Reference To Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_reference_to_info.htm)**
    Information about a reference field's referenced types and the name field names of those types.
-   **[Related List Column](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_column.htm)**
    A column in a related list.
-   **[Related List Info Summary](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_summary.htm)**
    A summary of a related list for an object.
-   **[Related List Reference](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_reference.htm)**
    The related list referenced by the collection or metadata.
-   **[Report Layout Component](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_report_layout_component.htm)**
    A report chart component on a record layout page.
-   **[Theme Banner](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme_banner.htm)**
    A theme banner image. Theme banners have a higher aspect ratio than theme images. The banner size may change slightly, so code accordingly.
-   **[Theme Image](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme_image.htm)**
    A theme image at three sizes: small, medium, and large. Specific sizes may change slightly, so code accordingly.
-   **[Theme Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme_info.htm)**
    Color and icon information for a theme.
-   **[Visualforce Layout Component](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_visualforce_layout_component.htm)**
    A Visualforce component on a record layout page.
-   **[Work Step Status Picklist Value Attributes](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_workstep_picklist_values.htm)**
    Additional picklist value attributes for work step statuses.

#### See Also

-   [User Interface API Top-Level Response Bodies](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_top_level.htm "These response bodies are returned from requests to User Interface API resources. They may contain nested response bodies")

## Related Topics

- HTTP status code (atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm)
- Batch Result Item (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_result.htm)
- Canvas Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_canvas_layout_component.htm)
- Case Status Picklist Value Attributes (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_case_status_picklist_values.htm)
- Child Relationship (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_child_relationship.htm)
- Custom Link Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_custom_link_layout_component.htm)
- Duplicate Record Error (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_record_error.htm)
- Duplicate Result Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_result_info.htm)
- Duplicate Rule (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_rule.htm)
- Duplicate Rule Filter (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_rule_filter.htm)
