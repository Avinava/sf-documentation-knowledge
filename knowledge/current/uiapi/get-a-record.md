---
title: "Get a Record"
domain: uiapi
topic: get-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.572Z
estimatedTokens: 1405
keywords: [Record, record’s, data]
---

# Get a Record

> Get a record’s data.

# Get a Record

Get a record’s data.

```

```

recordId—A custom object record or a [supported object](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") record.

Available Version

41.0

Example for GET

This example gets the data for fields in the compact layout for an opportunity record with ID 006R0000001rboIIAQ. The response includes OpportunityCompetitors and Partners child records.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| childRelationships | String[] | A collection of child relationship names. The records with those child relationship names are included in the response. Specify names in the format ObjectApiName.ChildRelationshipName or ObjectApiName.ChildRelationshipName.FieldApiName. For example, to specify the Contacts relationship on an Account, use Account.Contacts. You can get child relationships one level deep.To get a relationship name, look in the Object Info response body. | Optional | 41.0 |
| includeFieldsInBody | Boolean | Specifies whether to return a field that’s defined in the request body but not in the layout. The default value is false. When set to true, fields that are not in the layout are also included in the response body. | Optional | 59.0 |
| fields | String[] | Specifies the fields to return. If this property is specified, the response is a union of fields and optionalFields.If the context user doesn’t have access to a field, or if the field doesn’t exist, an error is returned.If you’re not sure whether the context user has access to a field and you don’t want the request to fail if they don’t, use the optionalFields parameter.Specify names in the format ObjectApiName.FieldName. You can get any field that has a named relationship to this record. There’s no limit to the number of fields you can specify.Child relationship records don’t have layouts. To get more fields for these records, specify them in the fields parameter.To return a field whose type is base64, specify the field in the optionalFields parameter.NotePolymorphic fields aren't supported. Including a polymorphic field in fields can result in an invalid field error. | In API versions 45.0 and later, either fields, optionalFields, or layoutTypes is required.In earlier API versions, either fields or layoutTypes is required.In all API versions, to specify both fields and layoutTypes, you must specify childRelationships. | 41.0 |
| layoutTypes | String[] | Specifies the fields to return. If this property is specified, the response is a union of layoutTypes, modes, and optionalFields.A collection containing any of these values:Compact—Use this value to get a layout that contains a record’s key fields.Full—(Default) Use this value to get a full layout. | In API versions 45.0 and later, either fields, optionalFields, or layoutTypes is required.In earlier API versions, either fields or layoutTypes is required.In all API versions, to specify both fields and layoutTypes, you must specify childRelationships. | 41.0 |
| modes | String[] | The access mode for the record. This value determines which fields to get from a layout. Layouts have different fields for create, edit, and view modes. For example, formula fields are rendered in view mode, but not in create mode because they’re calculated at run time, like formulas in a spreadsheet. A collection containing any of these values:Create—Use this mode if you intend to build UI that lets a user create a record. This mode is used by the /ui-api/record-defaults/create/{apiName} resource.Edit—Use this mode if you intend to build UI that lets a user edit a record. This mode is used by the /ui-api/record-defaults/clone/{recordId} resource.View—(Default) Use this mode to build UI that displays a record. | Optional if layoutTypes is specified. If layoutTypes is not specified, this parameter is ignored. | 41.0 |
| optionalFields | String[] | A collection of optional field names. If a field is accessible to the context user, it’s included in the response. If a field isn’t accessible to the context user, it isn’t included in the response, but it doesn’t cause an error.Specify names in the format ObjectApiName.FieldName. You can get any field that has a named relationship to this record. There’s no limit to the number of fields you can specify.To return a field whose type is base64, specify the field in the optionalFields parameter. | In API versions 45.0 and later, either fields, optionalFields, or layoutTypes is required.In earlier API versions, optionalFields is optional. | 41.0 |
| pageSize | Integer | The maximum number of child records to return on a page. | Optional | 41.0 |
| updateMru | Boolean | To add to the most recently used (MRU) list view, set to true. The default value is false. | Optional | 47.0 |

Response Body

[Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm#ui_api_responses_record "The field data, API name, child relationship data, and record type information for a record.")

#### See Also

-   [Get Child Records](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_child_relationships.htm "User Interface API has several resources that include child records in their responses. If a record has many child relationships, a response can be huge and have a negative effect on performance. To get only the records you need, request records for specific child relationships and set the page size of the results.")

## Code Examples

```
GET /ui-api/records/{recordId}
```

```
GET /ui-api/records/006R0000001rboIIAQ?layoutTypes=Compact&childRelationships=Opportunity.OpportunityCompetitors,Opportunity.Partners
```

## Related Topics

- supported object (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Get Child Records (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_child_relationships.htm)
