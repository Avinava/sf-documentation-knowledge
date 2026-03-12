---
title: "Get Default Values to Create a Record—Lightweight"
domain: uiapi
topic: get-default-values-to-create-a-recordlightweight
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.559Z
estimatedTokens: 581
keywords: [Record—Lightweight, new, record, specify, want, resource, doesn’t, layout, getting, POST, ui-api, records]
---

# Get Default Values to Create a Record—Lightweight

> Get the default values for fields for a new record of a specified
      object and optional record type. You must specify the fields you want returned. This resource
      doesn’t use or return layout information. After getting the default values, make a request to
        POST /ui-api/records to create the
    record.

# Get Default Values to Create a Record—Lightweight

Get the default values for fields for a new record of a specified object and optional record type. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.

The response contains object metadata for specified fields. For example, this request returns object metadata for Account and User, because the OwnerId field on the Account object contains a reference to the User object.

```

```

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

To get default values based on a layout, use the [/ui-api/record-defaults/create/{objectApiName}](# "Get the default values for fields for a new record of a specified object and optional record type. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.") resource.

-   objectApiName—The API name of the object type for the new record.

Available Version

49.0

HTTP Method

GET

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| optionalFields | String[] | A collection of optional field names. If a field is accessible to the context user, it’s included in the response. If a field isn’t accessible to the context user, it isn’t included in the response, but it doesn’t cause an error.Specify names in the format ObjectApiName.FieldName. You can get any field that has a named relationship to this record. There’s no limit to the number of fields you can specify.If you don’t pass any fields, the response doesn’t include any fields. | Optional | 49.0 |
| recordTypeId | Id | The ID of the record type (RecordType object) for the new record. If not provided, the default record type is used. | Optional | 49.0 |

Response Body

[Record Defaults Template Create](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_create.htm "A record template containing the default information and data needed to create a record. Use these values in a request to POST /ui-api/records.")

## Code Examples

```
GET /ui-api/record-defaults/template/create/Account?optionalFields=Account.OwnerId
```

```
/ui-api/record-defaults/template/create/{objectApiName}
```

## Related Topics

- Record Defaults Template Create (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_create.htm)
