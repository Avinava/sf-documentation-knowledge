---
title: "SObjectType Methods"
domain: apex-reference
topic: sobjecttype-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.255Z
keywords: [SObjectType, Methods, Returns, describe, sObject, result, field., getDescribe, Signature, Return, Value, options, Parameters, newSObject, Example, Usage, recordTypeId, loadDefaults, Important, Note]
---

# SObjectType Methods

> Returns the describe sObject result for this field.

## SObjectType Methods

The following are methods for SObjectType. All are instance methods.

-   **[getDescribe()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_Schema_SObjectType_getDescribe)**  
    Returns the describe sObject result for this field.
-   **[getDescribe(options)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#unique_1389787181)**  
    Returns the describe sObject result for this field; the parameter value determines whether all child relationships are loaded up-front, or not.
-   **[newSObject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_Schema_SObjectType_newSObject)**  
    Constructs a new sObject of this type.
-   **[newSObject(id)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_Schema_SObjectType_newSObject_2)**  
    Constructs a new sObject of this type, with the specified ID.
-   **[newSObject(recordTypeId, loadDefaults)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_Schema_SObjectType_newSObject_3)**  
    Constructs a new sObject of this type, and optionally, of the specified record type ID and with default custom field values.

### getDescribe()

Returns the describe sObject result for this field.

#### Signature

public Schema.DescribeSObjectResult getDescribe()

#### Return Value

Type: [Schema.DescribeSObjectResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_methods_system_sobject_describe "Contains methods for describing SObjects. None of the methods take an argument.")

### getDescribe(options)

Returns the describe sObject result for this field; the parameter value determines whether all child relationships are loaded up-front, or not.

#### Signature

public Schema.DescribeSObjectResult getDescribe(Object options)

#### Parameters

options

Type: Object

The parameter values determine how the elements of the describe operation are loaded.

-   Use SObjectDescribeOptions.FULL to eager-load all elements of the describe, including child relationships, up-front at the time of method invocation. This describe guarantees fully coherent results, even if the describe object is passed to another namespace, API version, or other Apex context that may have different results when generating describe attributes.
-   Use SObjectDescribeOptions.DEFERRED to enable lazy initialization of describe attributes on first use. This means that all child relationships will not be loaded at the time of first invocation of the method.
-   Use SObjectDescribeOptions.DEFAULT to default to either eager-load or lazy-load depending on the API version.

The type of describe operation, as determined by the parameter value is depicted in this table.

| Parameter Value | API Version 43.0 and Earlier | API Version 44.0 and Later |
| --- | --- | --- |
| Full | Eager | Eager |
| Deferred | Lazy | Lazy |
| Default | Lazy | Lazy |

#### Return Value

Type: [Schema.DescribeSObjectResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject_describe.htm#apex_methods_system_sobject_describe "Contains methods for describing SObjects. None of the methods take an argument.")

### newSObject()

Constructs a new sObject of this type.

#### Signature

public sObject newSObject()

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Example

For an example, see [Dynamic DML](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_dml.htm).

### newSObject(id)

Constructs a new sObject of this type, with the specified ID.

#### Signature

public sObject newSObject(ID id)

#### Parameters

id

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Usage

For the argument, pass the ID of an existing record in the database.

After you create a new sObject, the sObject returned has all fields set to null. You can set any updateable field to desired values and then update the record in the database. Only the fields you set new values for are updated and all other fields which are not system fields are preserved.

### newSObject(recordTypeId, loadDefaults)

Constructs a new sObject of this type, and optionally, of the specified record type ID and with default custom field values.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

#### Signature

public sObject newSObject(ID recordTypeId, Boolean loadDefaults)

#### Parameters

recordTypeId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

Specifies the record type ID of the sObject to create. If no record type exists for this sObject, use null. If the sObject has record types and you specify null, the default record type is used.

loadDefaults

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to populate custom fields with their predefined default values (true) or not (false).

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Usage

-   For required fields that have no default values, make sure to provide a value before inserting the new sObject. Otherwise, the insertion results in an error. An example is the Account Name field or a master-detail relationship field.
-   Since picklists and multi-select picklists can have default values specified per record type, this method populates the default value corresponding to the record type specified.
-   If fields have no predefined default values and the loadDefaults argument is true, this method creates the sObject with field values of null.
-   If the loadDefaults argument is false, this method creates the sObject with field values of null.
-   This method populates read-only custom fields of the new sObject with default values. You can then insert the new sObject with the read-only fields, even though these fields cannot be edited after they’re inserted.
-   If a custom field is marked as unique and also provides a default value, inserting more than one new sObject will cause a run-time exception because of duplicate field values.

To learn more about default field values, see “Default Field Values” in the Salesforce online help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

You can also use this method to create a platform event with a prepopulated EventUuid field value for Apex publish callbacks. For more information, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callbacks.htm) in the Platform Events Developer Guide.

#### Example: Creating New sObject with Default Values

This sample creates an account with any default values populated for its custom fields, if any, using the newSObject method. It also creates a second account for a specific record type. For both accounts, the sample sets the Name field, which is a required field that doesn’t have a default value, before inserting the new accounts.

```

```