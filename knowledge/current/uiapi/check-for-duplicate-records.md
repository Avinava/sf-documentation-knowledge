---
title: "Check for Duplicate Records"
domain: uiapi
topic: check-for-duplicate-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.530Z
estimatedTokens: 793
keywords: [Check, Duplicate, Records, updating, creating, record, whether, exists, block, allow, action, warn, user]
---

# Check for Duplicate Records

> Before updating or creating a record, you can check whether a
      duplicate record exists. Use the response to learn whether to block or allow the action, and
      whether to warn the user.

# Check for Duplicate Records

Before updating or creating a record, you can check whether a duplicate record exists. Use the response to learn whether to block or allow the action, and whether to warn the user.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=uiapi)

#### Tip

To learn more about when to check for duplicate records, see [Get Duplicate Management Configuration for a Specified Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_duplicates_get.htm "Learn whether duplicate management is configured for the specified object. If duplicate management is configured, learn about the object's duplicate rules and matching rules. Use the information in the response to know when to check for duplicate records.").

Resource

```

```

Available Version

50.0

HTTP Method

POST

Example

Use the following request to check whether a duplicate record for the movie "Aliens" exists.

```

```

Request Body

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowSaveOnDuplicate | Boolean | Specifies whether to save a duplicate record (true), or not (false). The default value is false.Don’t specify this property when checking for duplicate records. | Optional | 43.0 |
| apiName | String | To create a record, specify the API name of an Object from which to create the record. To update a record, use null or don’t pass this property. To check for duplicate records, specify the API name of the object for which you’re performing the duplicate check. | Required to create a record.Required to check for duplicate records. | 41.0 |
| fields | Map<String, Object> | Map of field names to field values.Format data types according to these rules:Address—JSON String. Addresses are compound fields and must be broken up into their constituent fields. See the previous example.Boolean—JSON Boolean, true or falseCurrency—JSON Number (for example, 67.54)Date—JSON string (for example, 2020-04-20)DateTime—JSON string in ISO 8601 format (for example, 2012-02-18T06:40:41.000Z)Double—JSON NumberEmail—JSON String (for example, joe@smith.com)EncryptedString—JSON StringInt—JSON NumberLocation—JSON String. Location fields are compound fields and must be broken up into their constituent fields.MultiPicklist—JSON String (for example, Dog;Cat;Fish).Percent—JSON NumberPhone—JSON StringPicklist—JSON StringReference—JSON StringString—JSON StringTextArea—JSON StringTime—JSON String in format HH:MM:SSUrl—JSON StringTo specify the main record type, either don’t specify the RecordTypeId field, or set it to null. | Required | 41.0 |

Response Body

[Duplicates](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates.htm "The results of a check for duplicate records.")

#### See Also

-   [Get Duplicate Management Configuration for a Specified Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_duplicates_get.htm "Learn whether duplicate management is configured for the specified object. If duplicate management is configured, learn about the object's duplicate rules and matching rules. Use the information in the response to know when to check for duplicate records.")

## Code Examples

```
/ui-api/predupe
```

```
ui-api/predupe{
"apiName" : "Movie__c",
"fields" :
{"Name": "Aliens",
  "Year__c": "1986"
}
```

## Related Topics

- Get Duplicate Management Configuration for a Specified Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_duplicates_get.htm)
- Duplicates (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicates.htm)
