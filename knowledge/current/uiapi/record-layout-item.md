---
title: "Record Layout Item"
domain: uiapi
topic: record-layout-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.085Z
estimatedTokens: 462
keywords: [Record, Layout, Item]
---

# Record Layout Item

> An item in a record layout.

# Record Layout Item

An item in a record layout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| editableForNew | Boolean | Indicates whether the item can be edited when creating a new record. | Small, 41.0 | 41.0 |
| editableForUpdate | Boolean | Indicates whether the item can be edited when updating a record. | Small, 41.0 | 41.0 |
| label | String | The text label for the item. | Small, 41.0 | 41.0 |
| layoutComponents | Collection of components. Collection can contain any of these components:Canvas Layout ComponentCustom Link Layout ComponentField Layout ComponentRecord Layout ComponentReport Layout ComponentVisualforce Layout Component | A collection of components that make up the item. | Small, 41.0 | 41.0 |
| lookupIdApiName | String | The ID field name of a lookup field. | Small, 41.0 | 41.0 |
| required | Boolean | Indicates whether the field is required in a layout when creating or updating a record. This information is useful to know if you wanted to render required fields with a different treatment, such as a red outline. | Small, 41.0 | 41.0 |
| sortable | Boolean | Reserved for future use. | Small, 41.0 | 41.0 |
| uiBehavior | String | Indicates the layout item behavior on the specified layout. The value doesn't reflect user-level or profile-level access. Available values are:Edit—The layout field can be edited but isn’t required.Required—The layout field can be edited and is required.Readonly—The layout field is read-only.This field applies only to page layouts and mini layouts. For other types of layouts such as compact layouts or quick action layouts, this field is null. | Small, 63.0 | 63.0 |

#### See Also

-   [Record Layout Row](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_row.htm "A row in a record layout.")

## Related Topics

- Canvas Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_canvas_layout_component.htm)
- Custom Link Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_custom_link_layout_component.htm)
- Field Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field_layout_component.htm)
- Record Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_component.htm)
- Report Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_report_layout_component.htm)
- Visualforce Layout Component (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_visualforce_layout_component.htm)
- Record Layout Row (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_row.htm)
