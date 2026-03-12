---
title: "Create or Clone a Record"
domain: uiapi
topic: create-or-clone-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.641Z
estimatedTokens: 2242
keywords: [Clone, Record, Usage]
---

# Create or Clone a Record

> Create or clone a record.

# Create or Clone a Record

Create or clone a record.

## Usage

To create or clone a record, pass a [Record Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_record_input.htm "A description of a record to use in a request to create or update a record or in a request to check for duplicate records.") request body to the POST /ui-api/records resource. To create the request body, you must know the fields, required fields, and default values for that object. You may also want layout information. If you don’t want layout information, use the lightweight resources.

To find the required fields, fields, and default values, make a request to one of these resources.

-   [Get Default Values to Create a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm "Get the default values for fields for a new record of a specified object and optional record type. After getting the default values, make a request to POST /ui-api/records to create the record.")
-   [Get Default Values to Create a Record—Lightweight](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_create.htm "Get the default values for fields for a new record of a specified object and optional record type. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.")
-   [Get Default Values to Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm "Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.")
-   [Get Default Values to Clone a Record—Lightweight](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_clone.htm "Get the default values for fields for cloning a record. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.")

The response from these resources includes [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm "The metadata for an object."), including all fields and a required property for each field.

To find the values for lookup fields, picklist fields, and multi-select picklist fields, use these resources.

-   [Get Lookup Field Suggestions for a Specified Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_object_get.htm "When a user edits a lookup field, use this resource to search for and display suggestions for a specified object. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.")
-   [Get Lookup Field Suggestions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.")
-   [Get Values for a Picklist Field](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm "If a field’s dataType property is equal to Picklist or MultiPicklist, use this resource to get its values.")
-   [Get Values for All Picklist Fields of a Record Type](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm "Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents__c, Countries__c, Cities__c), use this resource to get all the values for each picklist in one request.")

As of API version 43.0, if you pass read-only fields in a request body, the response is an [Error with Output](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_with_output.htm#ui_api_responses_error_with_output "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

ProductMedia records can’t be created with this resource. Use the [ProductMedia object API](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productmedia.htm) instead.

Resource

```

```

Available Version

41.0

HTTP Method

POST

Example

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
| handleOwnerChange | Boolean | Specifies whether to return a 204 No Content HTTP status code if the context user loses access to the record during creation. The default value is false. When false, if the context user loses access to the record during creation, creation completes successfully, however the resource returns an incorrect 404 Not found HTTP status code. | Optional | 60.0 |
| triggerOtherEmail | Boolean | For a Case, specifies whether to send email to users outside the organization. In the Salesforce user interface, this email can be automatically triggered by creating, editing, or deleting a contact for a Case.The default value is false.See EmailHeader in SOAP API Developer Guide. | Optional | 51.0 |
| triggerUserEmail | Boolean | For a Case or a Lead, specifies whether to send email to users in the organization. In the Salesforce user interface, this email can be automatically triggered by various events: resetting a password, creating a user, changing the Case owner, or adding comments to a Case.For Case owner changes, also set useDefaultRule=true, or no email is sent.The default value is false.See EmailHeader in SOAP API Developer Guide. | Optional | 51.0 |
| useDefaultRule | Boolean | For a Case or Lead, specifies whether to use the default (active) assignment rule. If you specify useDefaultRule, don’t specify an assignmentRuleId.When you create an Account, as long as the account matches any filter for a territory, the Account is assigned to that territory regardless of how useDefaultRule is set.The default value is false.See AssignmentRuleHeader in SOAP API Developer Guide. | Optional | 51.0 |

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

- Record Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_record_input.htm)
- Get Default Values to Create a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm)
- Get Default Values to Create a Record—Lightweight (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_create.htm)
- Get Default Values to Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm)
- Get Default Values to Clone a Record—Lightweight (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_clone.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Get Lookup Field Suggestions for a Specified Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_object_get.htm)
- Get Lookup Field Suggestions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm)
- Get Values for a Picklist Field (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)
- Get Values for All Picklist Fields of a Record Type (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
