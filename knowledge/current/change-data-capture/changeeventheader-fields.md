---
title: "ChangeEventHeader Fields"
domain: change-data-capture
topic: changeeventheader-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.555Z
estimatedTokens: 1363
keywords: [ChangeEventHeader, Check, descriptions, change, event]
---

# ChangeEventHeader Fields

> Check out the descriptions of the fields that the change event header
    contains.

# ChangeEventHeader Fields

Check out the descriptions of the fields that the change event header contains.

| Field Name | Field Type | Description |
| --- | --- | --- |
| entityName | string | The API name of the standard or custom object that the change pertains to. For example, Account or MyObject__c. |
| recordIds | string[] | One or more record IDs for the changed records. Typically, this field contains one record ID. If in one transaction the same change occurred in multiple records of the same object type during one second, Salesforce merges the change notifications. In this case, Salesforce sends one change event for all affected records and the recordIds field contains the IDs for all records that have the same change. Examples of operations with same changes are:Update of fieldA to valueA in Account records.Deletion of Account records.Renaming or replacing a picklist value that results in updating the field value in all affected records.The recordIds field can contain a wildcard value when a change event message is generated for custom field type conversions that cause data loss. In this case, the recordIds value is the three-character prefix of the object, followed by the wildcard character *. For example, for accounts, the value is 001*.For more information, see Conversions That Generate a Change Event. |
| changeType | Enumeration | The operation that caused the change.Can be one of the following values:CREATEUPDATEDELETEUNDELETESNAPSHOT (reserved for future use)For gap events, the change type starts with the GAP_ prefix.GAP_CREATEGAP_UPDATEGAP_DELETEGAP_UNDELETEFor overflow events, the change type is GAP_OVERFLOW. |
| changeOrigin | string | Only populated for changes done by API apps or from Lightning Experience; empty otherwise. The Salesforce API and the API client ID that initiated the change, if set by the client. Use this field to detect whether your app initiated the change to not process the change again and potentially avoid a deep cycle of changes.The format of the changeOrigin field value is:com/salesforce/api/<API_Name>/<API_Version>;client=<Client_ID><API_Name> is the name of the Salesforce API used to make the data change. It can take one of these values: soap, rest, bulkapi, xmlrpc, oldsoap, toolingsoap, toolingrest, apex, apexdebuggerrest.<API_Version> is the version of the API call that made the change and is in the format XX.X.<Client_ID> is a string that contains the client ID of the app that initiated the change. If the client ID is not set in the API call, client=<Client_ID> is not appended to the changeOrigin field.Example:com/salesforce/api/soap/49.0;client=AstroThe client ID is set in the Call Options header of an API call. For an example on how to set the Call Options header, see:REST API: Sforce-Call-Options Header. (Bulk API and Bulk API 2.0 also use the Sforce-Call-Options header. )SOAP API: CallOptions Header. (Apex API also uses the CallOptions element.) |
| transactionKey | string | A string that uniquely identifies each Salesforce transaction. You can use this key to identify and group all changes that were made in the same transaction. |
| sequenceNumber | int | The sequence of the change within a transaction. The sequence number starts from 1. A lead conversion is an example of a transaction that can have multiple changes. A lead conversion results in the following sequence of changes, all within the same transaction.Create an accountCreate a contactCreate an opportunityUpdate a leadFor more information, see Change Events for Lead Conversion. |
| commitTimestamp | long | The date and time when the change occurred, represented as the number of milliseconds since January 1, 1970 00:00:00 GMT. |
| commitUser | string | The ID of the user that ran the change operation. |
| commitNumber | long | The system change number (SCN) of a committed transaction, which increases sequentially. This field is provided for diagnostic purposes. The field value is not guaranteed to be unique in Salesforce—it is unique only in a single database instance. If your Salesforce org migrates to another database instance, the commit number might not be unique or sequential. |
| nulledfields | string[] | Available in Apex triggers and Pub/Sub API only. Not available in CometD. Contains the names of fields whose values were changed to null in an update operation. Use this field to determine if a field was changed to null in an update and isn’t an unchanged field.In Pub/Sub API, decode this field before you read its contents. For more information, see Event Deserialization Considerations in the Pub/Sub API Developer Guide. |
| diffFields | string[] | Available in Apex triggers and Pub/Sub API only. Not available in CometD. Contains the names of fields whose values are sent as a unified diff because they contain large text values. For more information, see Sending Data Differences for Fields of Updated Records.In Pub/Sub API, decode this field before you read its contents. For more information, see Event Deserialization Considerations in the Pub/Sub API Developer Guide. |
| changedFields | string[] | A list of the fields that were changed in an update operation, including the LastModifiedDate system field. This field is empty for other operations, including record creation.In Pub/Sub API, decode this field before you read its contents. For more information, see Event Deserialization Considerations in the Pub/Sub API Developer Guide. |

## Related Topics

- Conversions That Generate a Change Event (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversion_single_event.htm)
- Change Events for Lead Conversion (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_lead_conversion.htm)
- Sending Data Differences for Fields of Updated Records (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff.htm)
