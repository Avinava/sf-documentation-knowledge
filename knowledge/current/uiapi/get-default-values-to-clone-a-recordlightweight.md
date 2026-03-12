---
title: "Get Default Values to Clone a Record—Lightweight"
domain: uiapi
topic: get-default-values-to-clone-a-recordlightweight
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.555Z
estimatedTokens: 592
keywords: [Clone, Record—Lightweight, cloning, record, specify, want, resource, doesn’t, layout, getting, POST, ui-api, records]
---

# Get Default Values to Clone a Record—Lightweight

> Get the default values for fields for cloning a record. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.

# Get Default Values to Clone a Record—Lightweight

Get the default values for fields for cloning a record. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.

The response contains the default field values for the specified fields, optionally of the specified recordTypeId.

The response also contains object metadata for fields specified in the request. For example, this request clones an Account record. It returns object metadata for Account and User, because the OwnerId field on the Account object contains a reference to the User object.

```

```

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

To get default values based on a layout, use the [/ui-api/record-defaults/clone/{recordId}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm "Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.") resource.

Available Version

49.0

HTTP Method

GET

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| optionalFields | String[] | A collection of optional field names. If a field is accessible to the context user, it’s included in the response. If a field isn’t accessible to the context user, it isn’t included in the response, but it doesn’t cause an error.Specify names in the format ObjectApiName.FieldName. You can get any field that has a named relationship to this record. There’s no limit to the number of fields you can specify.If you don’t pass any fields, the response includes only the ID of the cloned record in a field called CloneSourceId. | Optional | 49.0 |
| recordTypeId | Id | The ID of the record type (RecordType object) for the new record. If not provided, the default record type is used. | Optional | 49.0 |

Response Body

[Record Defaults Template Clone](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_clone.htm "A record template containing the default information and data needed to clone a record. Use these values in a request to POST /ui-api/records.")

## Code Examples

```
GET /ui-api/record-defaults/template/clone/001d000000AtfRIAAZ?optionalFields=Account.OwnerId
```

```
/ui-api/record-defaults/template/clone/{recordId}
```

## Related Topics

- /ui-api/record-defaults/clone/{recordId} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm)
- Record Defaults Template Clone (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_clone.htm)
