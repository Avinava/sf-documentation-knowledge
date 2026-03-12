---
title: "Update a Record"
domain: uiapi
topic: update-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.587Z
estimatedTokens: 1451
keywords: [Record, record's, data]
---

# Update a Record

> Update a record's data.

# Update a Record

Update a record's data.

User Interface API enforces Salesforce validation rules. If a validation rule fails, the response is an [Error with Output](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_with_output.htm#ui_api_responses_error_with_output "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict.").

When you make a PATCH request to update a record, make sure that the record hasn’t changed since the user started editing it. To find out whether it’s safe to save a record, pass the [If-Unmodified-Since](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since "HTML (New Window)") HTTP header in the request.

As of API version 43.0, if you pass read-only fields in a request body, the response is an [Error with Output](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_with_output.htm#ui_api_responses_error_with_output "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict.").

```

```

Available Version

41.0

HTTP Method

PATCH

Example

This example passes a request body to update the name of an Account.

```

```

```

```

To provide an address, provide the individual fields as separate inputs. The compound field is only available in the response.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowSaveOnDuplicate | Boolean | Specifies whether to save a duplicate record. The default value is false. | Optional | 43.0 |
| handleOwnerChange | Boolean | Specifies whether to return a 204 No Content HTTP status code if the context user loses access to the record during the update. The default value is false. When false, if the context user loses access to the record during the update, the update completes successfully, however the resource returns an incorrect 404 Not found HTTP status code. | Optional | 60.0 |
| includeFieldsInBody | Boolean | Specifies whether to return a field that’s defined in the request body but not in the layout. The default value is false. When set to true, fields that are not in the layout are also included in the response body. | Optional | 59.0 |
| triggerOtherEmail | Boolean | For a Case, specifies whether to send email to users outside the organization. In the Salesforce user interface, this email can be triggered by creating, editing, or deleting a contact for a Case.The default value is false.See EmailHeader in SOAP API Developer Guide. | Optional | 51.0 |
| triggerUserEmail | Boolean | For a Case or a Lead, specifies whether to send email to users in the organization. In the Salesforce user interface, this email can be triggered by various events: resetting a password, creating a user, changing the Case owner, or adding comments to a Case.For Case owner changes, also set useDefaultRule=true, or no email is sent.The default value is false.See EmailHeader in SOAP API Developer Guide. | Optional | 51.0 |
| useDefaultRule | Boolean | For a Case or Lead, specifies whether to use the default (active) assignment rule. If you specify useDefaultRule, don’t specify an assignmentRuleId.For an Account, specifies whether to apply the default territory assignment rules.The default value is false.See AssignmentRuleHeader in SOAP API Developer Guide. | Optional | 51.0 |

Request Body

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowSaveOnDuplicate | Boolean | Specifies whether to save a duplicate record (true), or not (false). The default value is false.Don’t specify this property when checking for duplicate records. | Optional | 43.0 |
| apiName | String | To create a record, specify the API name of an Object from which to create the record. To update a record, use null or don’t pass this property. To check for duplicate records, specify the API name of the object for which you’re performing the duplicate check. | Required to create a record.Required to check for duplicate records. | 41.0 |
| fields | Map<String, Object> | Map of field names to field values.Format data types according to these rules:Address—JSON String. Addresses are compound fields and must be broken up into their constituent fields. See the previous example.Boolean—JSON Boolean, true or falseCurrency—JSON Number (for example, 67.54)Date—JSON string (for example, 2020-04-20)DateTime—JSON string in ISO 8601 format (for example, 2012-02-18T06:40:41.000Z)Double—JSON NumberEmail—JSON String (for example, joe@smith.com)EncryptedString—JSON StringInt—JSON NumberLocation—JSON String. Location fields are compound fields and must be broken up into their constituent fields.MultiPicklist—JSON String (for example, Dog;Cat;Fish).Percent—JSON NumberPhone—JSON StringPicklist—JSON StringReference—JSON StringString—JSON StringTextArea—JSON StringTime—JSON String in format HH:MM:SSUrl—JSON StringTo specify the main record type, either don’t specify the RecordTypeId field, or set it to null. | Required | 41.0 |

Response Body

[Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm#ui_api_responses_record "The field data, API name, child relationship data, and record type information for a record.")

#### See Also

-   [Upload Binary Files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm "If a record has a Base64 field, you can upload binary data to the field when you create or update a record.")

## Code Examples

```
/ui-api/records/{recordId}
```

```
PATCH /ui-api/records/001R0000003Gjrt
```

```
{
    "fields": {
    "Name": "Universal Containers"
  }
}
```

```
{
    "fields" : {
    "Name": "Local Boxes",
    "BillingState": "WA",
    "BillingStreet" : "123 Main Street",
    "BillingCountry" : "USA"
  }
}
```

## Related Topics

- Error with Output (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_with_output.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Upload Binary Files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_binary_upload.htm)
