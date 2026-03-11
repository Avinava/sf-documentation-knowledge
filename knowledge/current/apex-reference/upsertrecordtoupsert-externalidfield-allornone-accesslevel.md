---
title: "upsert(recordToUpsert, externalIdField, allOrNone,
      accessLevel)"
domain: apex-reference
topic: upsertrecordtoupsert-externalidfield-allornone-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.171Z
keywords: [upsert, recordToUpsert, externalIdField, allOrNone, accessLevel, Creates, new, sObject, record, updates, existing, within, single, statement, specified, field, determine, presence, objects, specified.]
---

# upsert(recordToUpsert, externalIdField, allOrNone,
      accessLevel)

> Creates a new sObject record or updates an existing sObject record within a single
    statement, using a specified field to determine the presence of existing objects, or the ID
    field if no field is specified.

### upsert(recordToUpsert, externalIdField, allOrNone, accessLevel)

Creates a new sObject record or updates an existing sObject record within a single statement, using a specified field to determine the presence of existing objects, or the ID field if no field is specified.

#### Signature

public static Database.UpsertResult upsert(SObject recordToUpsert, Schema.SObjectField externalIdField, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToUpsert

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

externalIdField

Type: [Schema.SObjectField](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_class_Schema_SObjectField "A Schema.sObjectField object is returned from the field describe result using the getController and getSObjectField methods.")

(Optional) The externalIdField is of type Schema.SObjectField, that is, a field token. Find the token for the field by using the fields special method. For example, Schema.SObjectField f = Account.Fields.MyExternalId. The externalIdField parameter is the field that upsert() uses to match sObjects with existing records. This field can be a custom field marked as external ID, or a standard field with the idLookup attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If externalIdField isn’t specified, then the ID field is used to determine a match with existing records.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.UpsertResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_methods_system_database_upsertresult "The result of an upsert DML operation returned by the Database.upsert method.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed upsert method counts against the governor limit for DML statements.

For more information on how the upsert operation works, see the [upsert() statement](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_upsert).