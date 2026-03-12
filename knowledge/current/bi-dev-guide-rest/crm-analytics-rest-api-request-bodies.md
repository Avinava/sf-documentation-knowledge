---
title: "CRM Analytics REST API Request Bodies"
domain: bi-dev-guide-rest
topic: crm-analytics-rest-api-request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.511Z
estimatedTokens: 6005
keywords: [CRM, Analytics, REST, API, Bodies, perform, POST, PATCH, PUT, pass, query, formatted, either, XML, JSON]
---

# CRM Analytics REST API Request Bodies

> To perform a POST, PATCH, or PUT request, pass query parameters
  or create a request body formatted in either XML or JSON. This chapter
  lists the request bodies. The query parameters are listed with each
  resource.

# CRM Analytics REST API Request Bodies

To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.

To create a JSON request body, specify the properties of the request body in JSON format.

This is an example of a Comment request body.

```

```

If a request body is top-level, it has a root XML tag listed. To create an XML request body, nest the properties as XML tags inside the root XML tag.

This is the same Analytics request body in XML format:

```

```

-   **[Action Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_action_input.htm)**
    The action for a rule or macro to perform during a JSON transformation.
-   **[Advanced Property Value Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_advanced_property_value_input.htm)**
    An advanced property name and value pair.
-   **[Analytics App Setting Collection Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_app_setting_collection_input.htm)**
    The collection of Analytics app settings.
-   **[Analytics App Setting Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_app_setting_input.htm)**
    A setting for an Analytics app.
-   **[Analytics Asset Collection Query Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_asset_collection_query_input.htm)**
    The query parameters used to request a collection of Analytics assets.
-   **[Analytics Asset Filter Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_asset_filter_input.htm)**
    A filter for the Analtyics asset collection parameters.
-   **[Annotation Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_annotation_input.htm)**
    An Analytics annotation.
-   **[Asset Reference Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)**
    An Analytics asset reference.
-   **[Asset Revert History Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_revert_history_input.htm)**
    The Analytics asset history to use for a revert request.
-   **[Auto-Install App Configuration Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_app_config_input.htm)**
    The configuration for an auto-install app.
-   **[Auto-Install Configuration Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_config_input.htm)**
    The configuration for a auto-install app.
-   **[Auto-Install Request Insert Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_request_insert_input.htm)**
    The insert for an auto-install request.
-   **[Auto-Install Request Update Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_request_update_input.htm)**
    The update for an auto-install request.
-   **[Base Asset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_input.htm)**
    The base Analytics asset input.
-   **[Base Asset Reference Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_reference_input.htm)**
    The base Analytics asset.
-   **[Base Auto-Install Request Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_auto_install_request_input.htm)**
    The base auto-install request input.
-   **[Base Notification Action Configuration Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_notification_action_configuration_input.htm)**
    The base Analytics notification action configuration.
-   **[Base Subscription Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_subscription_input.htm)**
    The base subscription request input.
-   **[Base Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm)**
    The base Analytics folder asset.
-   **[Collaboration Room Notification Recipient Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_collaboration_room_notification_recipient_input.htm)**
    The Slack recipient of a notification.
-   **[Collection Subscription Source Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_collection_subscription_source_input.htm)**
    The collection subscription source.
-   **[Component Saved View Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_component_saved_view_input.htm)**
    The saved view for an Analytics component.
-   **[Component Saved View State Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_component_saved_view_state_input.htm)**
    The state for an Analytics component saved view.
-   **[Conditional Formatting Property Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_conditional_formatting_property_input.htm)**
    A property for conditional formatting of Xmd dimensions and measures.
-   **[Constant Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_constant_input.htm)**
    The definition of a constant for JSON transformation rules.
-   **[Daily Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_daily_schedule_input.htm)**
    Specify a daily schedule for an Analytics asset.
-   **[Daily Scheduled Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_daily_scheduled_item_input.htm)**
    The daily schedule for a data refresh.
-   **[Dashboard Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_input.htm)**
    An Analytics dashboard.
-   **[Dashboard Saved View Data Source State Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_data_source_state_input.htm)**
    The data source state for an Analytics dashboard saved view.
-   **[Dashboard Saved View Filter Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_filter_input.htm)**
    A filter for an Analytics dashboard saved view.
-   **[Dashboard Saved View Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_input.htm)**
    A saved view for an Analytics dashboard.
-   **[Dashboard Saved View State Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_state_input.htm)**
    The state for an Analytics dashboard saved view.
-   **[Dashboard Saved View Step Metadata Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_step_metadata_input.htm)**
    The step metadata for an Analytics dashboard saved view.
-   **[Dashboard Saved View Step State Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_step_state_input.htm)**
    The step state for an Analytics dashboard saved view.
-   **[Dashboard Subscription Source Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_subscription_source_input.htm)**
    The dashboard subscription source.
-   **[Dashboard Widget Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_widget_item_input.htm)**
    The base dashboard widget item.
-   **[Data Connector Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_input.htm)**
    An Analytics data connector.
-   **[Data Connector Property Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_property_input.htm)**
    A property for an Analytics data connector.
-   **[Dataflow Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_input.htm)**
    An Analytics dataflow.
-   **[Dataflow Job Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataflow_job_input.htm)**
    An Analytics dataflow job.
-   **[Dataset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_input.htm)**
    An Analytics dataset.
-   **[Dataset Version Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_version_input.htm)**
    A specific version of an Analytics dataset.
-   **[Event Based Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_event_based_schedule_input.htm)**
    Specify an event-driven schedule for an Analytics asset.
-   **[Featured Assets Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_featured_assets_input.htm)**
    A feaatured assets for an Analytics app.
-   **[Geo Data Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_geo_data_input.htm)**
    The geo data used by a map.
-   **[Hourly Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_hourly_schedule_input.htm)**
    Specify a sub-daily schedule for an Analytics asset.
-   **[Json Transformation Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_json_transformation_input.htm)**
    The JSON request to perform transformation rules on.
-   **[Lens Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_lens_input.htm)**
    An Analytics lens.
-   **[Lens State Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_lens_state_input.htm)**
    The state for an Analytics lens.
-   **[License Attributes Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_license_attributes_input.htm)**
    The Analytics license attributes.
-   **[Live Connection Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_live_connection_input.htm)**
    The connection details of an Analytics live dataset.
-   **[Macro Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_macro_input.htm)**
    A macro to use for a JSON transformation rule.
-   **[Map Bounding Box Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_map_bounding_box_input.htm)**
    A bounding box of a map..
-   **[Map Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_map_input.htm)**
    A map for an Eclair chart.
-   **[Minutely Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_minutely_schedule_input.htm)**
    Specify a sub-hourly schedule for an Analytics asset.
-   **[Monthly Relative Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_relative_schedule_input.htm)**
    Specify a monthly schedule for an Analytics asset where the day are relative to their location in the week.
-   **[Monthly Specific Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_monthly_specific_schedule_input.htm)**
    Specify a monthly schedule for an Analytics asset where the days are fixed by numerical date.
-   **[Notification Action Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_notification_action_input.htm)**
    A notification action for an Analytics subscription.
-   **[Post To Slack Notification Action Configuration Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_post_to_slack_notification_action_configuration_input.htm)**
    The notification action configuration for posting to Slack.
-   **[Replicated Dataset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_dataset_input.htm)**
    An Analytics replicated dataset, also know as a connected object.
-   **[Replicated Field Collection Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_field_collection_input.htm)**
    A collection of fields for an Analytics replicated dataset, also known as a connected object.
-   **[Replicated Field Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_field_input.htm)**
    A field for an Analytics replicated dataset, also known as a connected object.
-   **[Restore Dataset Version Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_restore_dataset_version_input.htm)**
    A specific version to restore an Analytics dataset to.
-   **[Rule Definition Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_rule_definition_input.htm)**
    A rule definition to use for a JSON transformation.
-   **[Rule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_rule_input.htm)**
    A rule for a JSON Transformation rule definition.
-   **[SAQL Query Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_saql_query_input.htm)**
    An Analytics query written in SAQL or SQL.
-   **[Schedule Details Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_details_input.htm)**
    The base Analytics schedule details.
-   **[Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_schedule_input.htm)**
    A schedule on which to execute some type of Analytics asset.
-   **[Scheduled Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_scheduled_item_input.htm)**
    The base schedule for a data refresh.
-   **[Scheduled Time Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_scheduled_time_input.htm)**
    The base schedule for a data refresh.
-   **[Scheduled Timezone Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_scheduled_timezone_input.htm)**
    The information for a schedule time zone.
-   **[Send To Email Notification Action Configuration Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_send_to_email_notification_action_configuration_input.htm)**
    The notification action configuration for sending an email.
-   **[Slack Reference Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_slack_reference_input.htm)**
    The reference for a Slack entity.
-   **[Source Details Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_source_details_input.htm)**
    The abstract source details for a subscription.
-   **[Source Object Data Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_source_object_data_input.htm)**
    The request to retrieve data from a source object given a list of fields and advanced properties.
-   **[Subscription Daily Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_daily_schedule_input.htm)**
    The daily schedule on which to execute an Analytics subscription.
-   **[Subscription Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_input.htm)**
    An Analytics subscription.
-   **[Subscription Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_schedule_input.htm)**
    An Analytics subscription input.
-   **[Subscription Source Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_source_input.htm)**
    The subscription source.
-   **[Subscription Weekly Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_weekly_schedule_input.htm)**
    The weekly schedule on which to execute an Analytics subscription.
-   **[Subscription Widget Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_subscription_widget_input.htm)**
    An Analytics widget subscription inherits properties from the base Dashboard Widget Item Input.
-   **[Template Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm)**
    An Analytics template.
-   **[Template Options Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_options_input.htm)**
    The template options used to upgrade a templated Analytics app.
-   **[Template Validate Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_validate_input.htm)**
    The input to validate an Analytics template.
-   **[Time Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_time_input.htm)**
    The time at which something should happen, usually in relation to an Analytics schedule.
-   **[Trended Report Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_trended_report_input.htm)**
    An Analytics trended report.
-   **[Typed Asset Reference Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_typed_asset_reference_input.htm)**
    A typed Analytics asset reference.
-   **[Visual Parameters Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_visual_parameters_input.htm)**
    A visual parameters for an Analytics watchlist item.
-   **[Watchlist Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_input.htm)**
    An Analytics watchlist.
-   **[Watchlist Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_item_input.htm)**
    An Analytics watchlist item.
-   **[Watchlist Item Metadata Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_item_metadata_input.htm)**
    The metadata for an Analytics watchlist item.
-   **[Watchlist Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_watchlist_schedule_input.htm)**
    An Analytics watchlist schedule.
-   **[Wave Collection Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_input.htm)**
    A collection of Analytics resources.
-   **[Wave Collection Item Bulk Add Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_bulk_add_input.htm)**
    Bulk items to add to a collection of Analytics resources.
-   **[Wave Collection Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_input.htm)**
    An item in a collection of Analytics resources.
-   **[Wave Collection Item List Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_list_input.htm)**
    A list of items in a collection of Analytics resources.
-   **[Wave Collection Pin Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_pin_input.htm)**
    The pinning rules for an Analytics collection.
-   **[Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_input.htm)**
    An Analytics folder. This implements BaseWaveFolderInput.
-   **[Wave Folder Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_schedule_input.htm)**
    An Analytics folder schedule.
-   **[Wave Folder Share Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_share_input.htm)**
    An Analytics folder sharing rule.
-   **[Wave Folder Template Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_template_input.htm)**
    A templated Analytics folder. This implements BaseWaveFolderInput.
-   **[Weekly Schedule Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_schedule_input.htm)**
    Specify a weekly schedule for an Analytics asset.
-   **[Weekly Scheduled Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_scheduled_item_input.htm)**
    The weekly schedule for a data refresh.
-   **[Widget Subscription Source Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_widget_subscription_source_input.htm)**
    The widget subscription source.
-   **[Base Xmd Dimension Custom Action Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_base_dimension_custom_action_input.htm)**
    The base custon action for an Xmd dimension.
-   **[Base Xmd Dimension Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_base_dimension_input.htm)**
    The base Xmd dimension for dimensions and derived dimensions.
-   **[Base Xmd Measure Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_base_measure_input.htm)**
    The base Xmd measure for measures and derived measures.
-   **[Xmd Currency Settings Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_currency_settings_input.htm)**
    The extended metadata (Xmd) for currency settings of a currency field.
-   **[Xmd Dataset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dataset_input.htm)**
    The extended metadata (Xmd) for an Analytics dataset.
-   **[Xmd Date Field Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_date_field_input.htm)**
    The extended metadata (Xmd) for the formatting of a date field.
-   **[Xmd Date Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_date_input.htm)**
    The extended metadata (Xmd) for a date.
-   **[Xmd Derived Dimension Custom Action Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_custom_action_input.htm)**
    A custom action for an Xmd derived dimension.
-   **[Xmd Derived Dimension Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_input.htm)**
    The extended metadata (Xmd) for a derived dimension in an Analytics dataset.
-   **[Xmd Derived Dimension Member Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_member_input.htm)**
    The extended metadata (Xmd) for a member of a derived dimension in an Analytics dataset.
-   **[Xmd Derived Dimension Salesforce Action Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_dimension_salesforce_action_input.htm)**
    The extended metadata (Xmd) for a Saleforce Action for a derived dimension in an Analytics dataset.
-   **[Xmd Derived Measure Format Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_measure_format_input.htm)**
    The extended metadata (Xmd) for the format of a derived measure in an Analytics dataset.
-   **[Xmd Derived Measure Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_measure_input.htm)**
    The extended metadata (Xmd) for a derived measure in an Analytics dataset.
-   **[Xmd Dimension Custom Action Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_custom_action_input.htm)**
    A custom action for an Xmd dimension.
-   **[Xmd Dimension Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_input.htm)**
    The extended metadata (Xmd) for a dimension in an Analytics dataset.
-   **[Xmd Dimension Member Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_member_input.htm)**
    The extended metadata (Xmd) for a member linked to a dimension in an Analytics dataset.
-   **[Xmd Dimension Salesforce Action Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_dimension_salesforce_action_input.htm)**
    The extended metadata (Xmd) for a Saleforce Action for a dimension in an Analytics dataset.
-   **[Xmd Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_input.htm)**
    The extended metadata (Xmd) for an Analytics dataset version.
-   **[Xmd Measure Format Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_measure_format_input.htm)**
    The extended metadata (Xmd) for the format of a measure in an Analytics dataset.
-   **[Xmd Measure Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_measure_input.htm)**
    The extended metadata (Xmd) for a measure in an Analytics dataset.
-   **[Xmd Organization Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_organization_input.htm)**
    The extended metadata (Xmd) for an organization in an Analytics dataset.

## Code Examples

```
{
   "body" : "Let's look for a new solution."
}
```

```
<comment>
   <body>Let's look for a new solution.</body>
</comment>
```

## Related Topics

- Action Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_action_input.htm)
- Advanced Property Value Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_advanced_property_value_input.htm)
- Analytics App Setting Collection Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_app_setting_collection_input.htm)
- Analytics App Setting Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_app_setting_input.htm)
- Analytics Asset Collection Query Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_asset_collection_query_input.htm)
- Analytics Asset Filter Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_analytics_asset_filter_input.htm)
- Annotation Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_annotation_input.htm)
- Asset Reference Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Asset Revert History Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_revert_history_input.htm)
- Auto-Install App Configuration Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_app_config_input.htm)
