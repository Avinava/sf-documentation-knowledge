---
title: "Get Default Values to Clone a Record"
domain: uiapi
topic: get-default-values-to-clone-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.544Z
estimatedTokens: 828
keywords: [Clone, Record, layout, data, cloning, getting, POST, ui-api, records]
---

# Get Default Values to Clone a Record

> Get the default layout information, object information, and data for
      cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.

# Get Default Values to Clone a Record

Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.

The response contains the default field values for a record cloned from the record specified in {recordId}, optionally of the specified recordTypeId.

It also contains the corresponding layout information for edit mode. In the Salesforce user interface, an admin with “Customize Application” permission can mark a field as required in a layout. When you’re building UI, to determine which fields to mark as required in a layout for edit mode, use the [RecordLayoutItem.required](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_item.htm "An item in a record layout.") property.

The response contains object metadata for the object type of the record specified in {recordId} and for any nested objects. For example, this request clones an Account record. It returns object metadata for Account and User, because the OwnerId field on the Account object contains a reference to the User object.

```

```

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

To get default values with a lightweight response, use the [/ui-api/record-defaults/template/clone/{recordId}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_clone.htm "Get the default values for fields for cloning a record. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.") resource.

Available Version

41.0

HTTP Method

GET

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The layout display size for the record. One of these values:Large—(Default) Use this value to get a layout for desktop display size.Medium—Use this value to get a layout for tablet display size.Small—Use this value to get a layout for phone display size. | Optional | 41.0 |
| optionalFields | String[] | A collection of optional field names. If a field is accessible to the context user, it’s included in the response. If a field isn’t accessible to the context user, it isn’t included in the response, but it doesn’t cause an error.Specify names in the format ObjectApiName.FieldName. You can get any field that has a named relationship to this record. There’s no limit to the number of fields you can specify. | Optional | 41.0 |
| recordTypeId | Id | The ID of the record type (RecordType object) for the new record. If not provided, the default record type is used. | Optional | 41.0 |

Response Body

[Record Defaults](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm#ui_api_responses_record_defaults "The default information and data needed to create or clone a record. Use these values in a request to POST /ui-api/records.")

#### See Also

-   [User Interface API Quick Start](atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm "Use the Postman desktop app or web-based UI to easily explore and test the UI API and other Salesforce APIs against your orgs.")

## Code Examples

```
/ui-api/record-defaults/clone/001d000000AtfRIAAZ
```

```
/ui-api/record-defaults/clone/{recordId}
```

## Related Topics

- RecordLayoutItem.required (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_item.htm)
- /ui-api/record-defaults/template/clone/{recordId} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_clone.htm)
- Record Defaults (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm)
- User Interface API Quick Start (atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm)
