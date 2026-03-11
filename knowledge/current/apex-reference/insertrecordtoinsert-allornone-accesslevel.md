---
title: "insert(recordToInsert, allOrNone, accessLevel)"
domain: apex-reference
topic: insertrecordtoinsert-allornone-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [insert, recordToInsert, allOrNone, accessLevel, Adds, sObject, such, individual, account, contact, organization's, data., Signature, Parameters, Return, Value, Usage]
---

# insert(recordToInsert, allOrNone, accessLevel)

> Adds an sObject, such as an individual account or contact, to your organization's
    data.

### insert(recordToInsert, allOrNone, accessLevel)

Adds an sObject, such as an individual account or contact, to your organization's data.

#### Signature

public static Database.SaveResult insert(SObject recordToInsert, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToInsert

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

insert is analogous to the INSERT statement in SQL.

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

Each executed insert method counts against the governor limit for DML statements.