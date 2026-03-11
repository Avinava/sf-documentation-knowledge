---
title: "ChangeEventHeader Properties"
domain: apex-reference
topic: changeeventheader-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.462Z
keywords: [ChangeEventHeader, Properties, list, fields, were, changed, update, operation, including, LastModifiedDate, system, field., field, empty, operations, record, creation., property, available, Apex]
---

# ChangeEventHeader Properties

> A list of the fields that were changed in an update operation, including the LastModifiedDate system field. This field is empty for other
    operations, including record creation. This property is available in Apex saved using API
    version 47.0 or later.

## ChangeEventHeader Properties

The following are properties for ChangeEventHeader.

-   **[changedfields](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_changedfields)**  
    A list of the fields that were changed in an update operation, including the LastModifiedDate system field. This field is empty for other operations, including record creation. This property is available in Apex saved using API version 47.0 or later.
-   **[changeorigin](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_changeorigin)**  
    Only populated for changes done by API apps or from Lightning Experience; empty otherwise. The Salesforce API and the API client ID that initiated the change, if set by the client. Use this field to detect whether your app initiated the change to not process the change again and potentially avoid a deep cycle of changes.
-   **[changetype](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_changetype)**  
    The operation that caused the change.
-   **[commitnumber](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_commitnumber)**  
    The system change number (SCN) of a committed transaction, which increases sequentially. This field is provided for diagnostic purposes. The field value is not guaranteed to be unique in Salesforce—it is unique only in a single database instance. If your Salesforce org migrates to another database instance, the commit number might not be unique or sequential.
-   **[committimestamp](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_committimestamp)**  
    The date and time when the change occurred, represented as the number of milliseconds since January 1, 1970 00:00:00 GMT.
-   **[commituser](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_commituser)**  
    The ID of the user that ran the change operation.
-   **[difffields](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_difffields)**  
    Contains the names of fields whose values are sent as a unified diff because they contain large text values.
-   **[entityname](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_entityname)**  
    The API name of the standard or custom object that the change pertains to. For example, Account or MyObject\_\_c.
-   **[nulledfields](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_nulledfields)**  
    Contains the names of fields whose values were changed to null in an update operation. Use this field in Apex change event messages to determine if a field was changed to null in an update and isn’t an unchanged field.
-   **[recordids](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_recordids)**  
    One or more record IDs for the changed records. Typically, this field contains one record ID. If in one transaction the same change occurred in multiple records of the same object type during one second, Salesforce merges the change notifications. In this case, Salesforce sends one change event for all affected records and the recordIds field contains the IDs for all records that have the same change.
-   **[sequencenumber](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_sequencenumber)**  
    The sequence of the change within a transaction. The sequence number starts from 1.
-   **[transactionkey](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_eventbus_ChangeEventHeader_transactionkey)**  
    A string that uniquely identifies each Salesforce transaction. You can use this key to identify and group all changes that were made in the same transaction.

### changedfields

A list of the fields that were changed in an update operation, including the LastModifiedDate system field. This field is empty for other operations, including record creation. This property is available in Apex saved using API version 47.0 or later.

#### Signature

public List<String\> changedfields {get; set;}

#### Property Value

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### changeorigin

Only populated for changes done by API apps or from Lightning Experience; empty otherwise. The Salesforce API and the API client ID that initiated the change, if set by the client. Use this field to detect whether your app initiated the change to not process the change again and potentially avoid a deep cycle of changes.

#### Signature

public String changeorigin {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The format of the changeOrigin field value is:

```

```

-   <API\_Name> is the name of the Salesforce API used to make the data change. It can take one of these values: soap, rest, bulkapi, xmlrpc, oldsoap, toolingsoap, toolingrest, apex, apexdebuggerrest.
-   <API\_Version> is the version of the API call that made the change and is in the format XX.X.
-   <Client\_ID> is a string that contains the client ID of the app that initiated the change. If the client ID is not set in the API call, client=<Client\_ID> is not appended to the changeOrigin field.

**Example:**

```

```

The client ID is set in the Call Options header of an API call. For an example on how to set the Call Options header, see:

-   REST API: [Sforce-Call-Options Header](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_calloptions.htm "HTML (New Window)"). (Bulk API also uses the Sforce-Call-Options header. )
-   SOAP API: [CallOptions Header](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_header_calloptions.htm "HTML (New Window)"). (Apex API also uses the CallOptions element.)

### changetype

The operation that caused the change.

#### Signature

public String changetype {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Can be one of the following values:

-   CREATE
-   UPDATE
-   DELETE
-   UNDELETE
-   SNAPSHOT (reserved for future use)

For gap events, the change type starts with the GAP\_ prefix.

-   GAP\_CREATE
-   GAP\_UPDATE
-   GAP\_DELETE
-   GAP\_UNDELETE

For overflow events, the change type is GAP\_OVERFLOW.

### commitnumber

The system change number (SCN) of a committed transaction, which increases sequentially. This field is provided for diagnostic purposes. The field value is not guaranteed to be unique in Salesforce—it is unique only in a single database instance. If your Salesforce org migrates to another database instance, the commit number might not be unique or sequential.

#### Signature

public Long commitnumber {get; set;}

#### Property Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### committimestamp

The date and time when the change occurred, represented as the number of milliseconds since January 1, 1970 00:00:00 GMT.

#### Signature

public Long committimestamp {get; set;}

#### Property Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### commituser

The ID of the user that ran the change operation.

#### Signature

public String commituser {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### difffields

Contains the names of fields whose values are sent as a unified diff because they contain large text values.

#### Signature

public List<String\> difffields {get; set;}

#### Property Value

Type: List<String>

#### See Also

-   [*Change Data Capture Developer Guide*: Sending Data Differences for Fields of Updated Records](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_data_diff.htm "
    Change Data Capture Developer Guide: Sending Data Differences for Fields of
    Updated Records - HTML (New Window)")
    

### entityname

The API name of the standard or custom object that the change pertains to. For example, Account or MyObject\_\_c.

#### Signature

public String entityname {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### nulledfields

Contains the names of fields whose values were changed to null in an update operation. Use this field in Apex change event messages to determine if a field was changed to null in an update and isn’t an unchanged field.

#### Signature

public List<String\> nulledfields {get; set;}

#### Property Value

Type: List<String>

### recordids

One or more record IDs for the changed records. Typically, this field contains one record ID. If in one transaction the same change occurred in multiple records of the same object type during one second, Salesforce merges the change notifications. In this case, Salesforce sends one change event for all affected records and the recordIds field contains the IDs for all records that have the same change.

#### Signature

public List<String\> recordids {get; set;}

#### Property Value

Type: List<String>

Examples of operations with same changes are:

-   Update of fieldA to valueA in Account records.
-   Deletion of Account records.
-   Renaming or replacing a picklist value that results in updating the field value in all affected records.

The recordIds field can contain a wildcard value when a change event message is generated for custom field type conversions that cause data loss. In this case, the recordIds value is the three-character prefix of the object, followed by the wildcard character \*. For example, for accounts, the value is 001\*.

### sequencenumber

The sequence of the change within a transaction. The sequence number starts from 1.

#### Signature

public Integer sequencenumber {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

A lead conversion is an example of a transaction that can have multiple changes. A lead conversion results in the following sequence of changes, all within the same transaction.

1.  Create an account
2.  Create a contact
3.  Create an opportunity
4.  Update a lead

### transactionkey

A string that uniquely identifies each Salesforce transaction. You can use this key to identify and group all changes that were made in the same transaction.

#### Signature

public String transactionkey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")