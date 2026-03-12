---
title: "Get Record Layout Metadata"
domain: uiapi
topic: get-record-layout-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.576Z
estimatedTokens: 590
keywords: [Record, Layout, Metadata, layouts]
---

# Get Record Layout Metadata

> Get metadata about page layouts for the specified object
    type.

# Get Record Layout Metadata

Get metadata about page layouts for the specified object type.

Resource

```

```

objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object.

Available Version

41.0

HTTP Method

GET

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The layout display size for the record. One of these values:Large—(Default) Use this value to get a layout for desktop display size.Medium—Use this value to get a layout for tablet display size.Small—Use this value to get a layout for phone display size. | Optional | 41.0 |
| layoutType | String | The layout type for the record. One of these values:Compact—Use this value to get a layout that contains a record’s key fields.Full—(Default) Use this value to get a full layout. | Optional | 41.0 |
| mode | String | The access mode for the record. This value determines which fields to get from a layout. Layouts have different fields for create, edit, and view modes. For example, formula fields are rendered in view mode, but not in create mode because they’re calculated at run time, like formulas in a spreadsheet. One of these values:Create—Use this mode if you intend to build UI that lets a user create a record. This mode is used by the /ui-api/record-defaults/create/{apiName} resource.Edit—Use this mode if you intend to build UI that lets a user edit a record. This mode is used by the /ui-api/record-defaults/clone/{recordId} resource.View—(Default) Use this mode to build UI that displays a record. | Optional | 41.0 |
| recordTypeId | Id | The ID of the record type (RecordType object) for the new record. If not provided, the default record type is used. | Optional | 41.0 |

Response Body

[Record Layout](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout.htm#ui_api_responses_record_layout "The layout information for a record.")

#### See Also

-   [User Interface API Quick Start](atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm "Use the Postman desktop app or web-based UI to easily explore and test the UI API and other Salesforce APIs against your orgs.")

## Code Examples

```
/ui-api/layout/{objectApiName}
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Record Layout (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout.htm)
- User Interface API Quick Start (atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm)
