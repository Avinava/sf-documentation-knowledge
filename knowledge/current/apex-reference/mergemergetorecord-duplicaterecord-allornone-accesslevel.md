---
title: "merge(mergeToRecord, duplicateRecord, allOrNone,
      accessLevel)"
domain: apex-reference
topic: mergemergetorecord-duplicaterecord-allornone-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [merge, mergeToRecord, duplicateRecord, allOrNone, accessLevel, Merges, duplicate, sObject, record, same, type, optionally, returning, any, errors, deleting, reparenting, related, records., Signature]
---

# merge(mergeToRecord, duplicateRecord, allOrNone,
      accessLevel)

> Merges the duplicate sObject record into the mergeToRecord sObject record of the same type, optionally returning any errors,
    deleting the duplicate, and reparenting any related records.

### merge(mergeToRecord, duplicateRecord, allOrNone, accessLevel)

Merges the duplicate sObject record into the mergeToRecord sObject record of the same type, optionally returning any errors, deleting the duplicate, and reparenting any related records.

#### Signature

public static Database.MergeResult merge(SObject mergeToRecord, SObject duplicateRecord, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record to merge with the mergeToRecord. This sObject must be of the same type as the mergeToRecord.

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

If you use the accessLevel parameter to specify that the method runs in user mode, we report all encountered inaccessible fields. The way to retrieve the names of these inaccessible fields depends on the value of this method's allOrNone parameter, or the equivalent [DmlOptions.optAllOrNone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_Database_DmlOptions_optAllOrNone) property. If you specify that:

-   allOrNone=true or DmlOptions.optAllOrNone=true: Catch the DMLException and use the DMLException.getDMLFieldNames() method to retrieve the list of inaccessible fields. See [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) for more information.
-   allOrNone=false or DmlOptions.optAllOrNone=false: For each failing record, we update the Database.Error object that results from the DML operation. Use the Error.getFields() method to retrieve the list of inaccessible fields. See the [Error Class methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods) for more information.

Each executed merge method counts against the governor limit for DML statements.