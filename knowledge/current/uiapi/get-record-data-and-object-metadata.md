---
title: "Get Record Data and Object Metadata"
domain: uiapi
topic: get-record-data-and-object-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.594Z
estimatedTokens: 1204
keywords: [Record, Data, Metadata, layout, build, collection, records]
---

# Get Record Data and Object Metadata

> Get layout information, metadata, and data to build UI for a single
      record or for a collection of records.

# Get Record Data and Object Metadata

Get layout information, metadata, and data to build UI for a single record or for a collection of records.

The response contains layout information for whichever layout types are specified in the layoutTypes parameter.

It contains data for the records specified in the recordIds parameter.

The response contains object metadata for the object types of the records specified in the recordIds parameter, and for any nested objects. For example, a request to /ui-api/record-ui/001RM000003RsOHYA0, which is an Account, returns object metadata for Account and User, because the OwnerId field on the Account object contains a reference to the User object.

Resource

```

```

recordIds—A comma-delimited list of custom object records and [supported object](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") records.

Available Version

41.0

HTTP Method

GET

Example

The response for this request includes layout information, metadata, and record data. The record data includes child relationship data for Contacts and Opportunities.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| childRelationships | String[] | A collection of child relationship names. The records with those child relationship names are included in the response. Specify names in the format ObjectApiName.ChildRelationshipName or ObjectApiName.ChildRelationshipName.FieldApiName. For example, to specify the Contacts relationship on an Account, use Account.Contacts. You can get child relationships one level deep.To get a relationship name, look in the Object Info response body. | Optional | 41.0 |
| formFactor | String | The layout display size for the record. One of these values:Large—(Default) Use this value to get a layout for desktop display size.Medium—Use this value to get a layout for tablet display size.Small—Use this value to get a layout for phone display size. | Optional | 41.0 |
| layoutTypes | String[] | The layout type for the record. A collection of any of these values:Compact—Use this value to get a layout that contains a record’s key fields.Full—(Default) Use this value to get a full layout. | Optional | 41.0 |
| modes | String[] | The access mode for the record. This value determines which fields to get from a layout. Layouts have different fields for create, edit, and view modes. For example, formula fields are rendered in view mode, but not in create mode because they’re calculated at run time, like formulas in a spreadsheet. A collection of any of these values:Create—Use this mode if you intend to build UI that lets a user create a record. This mode is used by the /ui-api/record-defaults/create/{apiName} resource.Edit—Use this mode if you intend to build UI that lets a user edit a record. This mode is used by the /ui-api/record-defaults/clone/{recordId} resource.View—(Default) Use this mode to build UI that displays a record. | Optional | 41.0 |
| optionalFields | String[] | A collection of optional field names. If a field is accessible to the context user, it’s included in the response. If a field isn’t accessible to the context user, it isn’t included in the response, but it doesn’t cause an error.Specify names in the format ObjectApiName.FieldName. You can get any field that has a named relationship to this record. There’s no limit to the number of fields you can specify. | Optional | 41.0 |
| pageSize | Integer | The maximum number of child records to return on a page. | Optional | 41.0 |
| updateMru | Boolean | To add to the most recently used (MRU) list view, set to true. The default value is false. | Optional | 47.0 |

Response Body

[Record UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm#ui_api_responses_record_ui "The layout information, field information, and data for a record.")

#### See Also

-   [User Interface API Quick Start](atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm "Use the Postman desktop app or web-based UI to easily explore and test the UI API and other Salesforce APIs against your orgs.")

-   [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm "The metadata for an object.")

-   [Get Child Records](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_child_relationships.htm "User Interface API has several resources that include child records in their responses. If a record has many child relationships, a response can be huge and have a negative effect on performance. To get only the records you need, request records for specific child relationships and set the page size of the results.")

## Code Examples

```
/ui-api/record-ui/{recordIds}
```

```
GET /ui-api/record-ui/001R0000003I6CoIAK?childRelationships=Account.Contacts,Account.Opportunities
```

## Related Topics

- supported object (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm)
- User Interface API Quick Start (atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm)
- Get Child Records (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_child_relationships.htm)
