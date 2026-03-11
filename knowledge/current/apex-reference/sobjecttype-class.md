---
title: "SObjectType Class"
domain: apex-reference
topic: sobjecttype-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.255Z
keywords: [SObjectType, Class, Constructs, new, sObject, type, optionally, specified, record, default, custom, field, values., newSObject, recordTypeId, loadDefaults, Important, Signature, Parameters, Return]
---

# SObjectType Class

> Constructs a new sObject of this type, and optionally, of the specified record type ID
  and with default custom field values.

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