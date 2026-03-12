---
title: "Record Input"
domain: uiapi
topic: record-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.252Z
estimatedTokens: 664
keywords: [Record, Input, check, duplicate, records]
---

# Record Input

> A description of a record to use in a request to create or update a
      record or in a request to check for duplicate records.

# Record Input

A description of a record to use in a request to create or update a record or in a request to check for duplicate records.

Example

```

```

```

```

To provide an address, provide the individual fields as separate inputs. The compound field is only available in the response.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowSaveOnDuplicate | Boolean | Specifies whether to save a duplicate record (true), or not (false). The default value is false.Don’t specify this property when checking for duplicate records. | Optional | 43.0 |
| apiName | String | To create a record, specify the API name of an Object from which to create the record. To update a record, use null or don’t pass this property. To check for duplicate records, specify the API name of the object for which you’re performing the duplicate check. | Required to create a record.Required to check for duplicate records. | 41.0 |
| fields | Map<String, Object> | Map of field names to field values.Format data types according to these rules:Address—JSON String. Addresses are compound fields and must be broken up into their constituent fields. See the previous example.Boolean—JSON Boolean, true or falseCurrency—JSON Number (for example, 67.54)Date—JSON string (for example, 2020-04-20)DateTime—JSON string in ISO 8601 format (for example, 2012-02-18T06:40:41.000Z)Double—JSON NumberEmail—JSON String (for example, joe@smith.com)EncryptedString—JSON StringInt—JSON NumberLocation—JSON String. Location fields are compound fields and must be broken up into their constituent fields.MultiPicklist—JSON String (for example, Dog;Cat;Fish).Percent—JSON NumberPhone—JSON StringPicklist—JSON StringReference—JSON StringString—JSON StringTextArea—JSON StringTime—JSON String in format HH:MM:SSUrl—JSON StringTo specify the main record type, either don’t specify the RecordTypeId field, or set it to null. | Required | 41.0 |

#### See Also

-   [Create or Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm "Create or clone a record.")

-   [Update a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm "Update a record's data.")

-   [Check for Duplicate Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_predupe_create.htm "Before updating or creating a record, you can check whether a duplicate record exists. Use the response to learn whether to block or allow the action, and whether to warn the user.")

-   [Lookup Post Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_lookup_post_input.htm "Get lookup field suggestions.")

## Code Examples

```
POST /ui-api/records
```

```
{
  "apiName": "Account",
  "fields": {
    "Name": "Universal Containers"
  }
}
```

```
{
  "apiName": "Account",
  "fields" : {
    "Name": "Local Boxes",
    "BillingState": "WA",
    "BillingStreet" : "123 Main Street",
    "BillingCountry" : "USA"
  }
}
```

## Related Topics

- Create or Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm)
- Update a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm)
- Check for Duplicate Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_predupe_create.htm)
- Lookup Post Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_lookup_post_input.htm)
