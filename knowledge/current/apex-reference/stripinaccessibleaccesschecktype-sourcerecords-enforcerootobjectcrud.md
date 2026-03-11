---
title: "stripInaccessible(accessCheckType, sourceRecords,
        enforceRootObjectCRUD)"
domain: apex-reference
topic: stripinaccessibleaccesschecktype-sourcerecords-enforcerootobjectcrud
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.529Z
keywords: [stripInaccessible, accessCheckType, sourceRecords, enforceRootObjectCRUD, Creates, list, sObjects, source, records, which, stripped, fields, fail, field-level, security, checks, current, user., method, provides]
---

# stripInaccessible(accessCheckType, sourceRecords,
        enforceRootObjectCRUD)

> Creates a list of sObjects from the source records, which are
      stripped of fields that fail the field-level security checks for the current user. The method
      also provides an option to enforce an object-level access check.

### stripInaccessible(accessCheckType, sourceRecords, enforceRootObjectCRUD)

Creates a list of sObjects from the source records, which are stripped of fields that fail the field-level security checks for the current user. The method also provides an option to enforce an object-level access check.

#### Signature

public static System.SObjectAccessDecision stripInaccessible(System.AccessType accessCheckType, List<SObject> sourceRecords, Boolean enforceRootObjectCRUD)

#### Parameters

accessCheckType

Type: [System.AccessType](atlas.en-us.apexref.meta/apexref/apex_enum_System_AccessType.htm "Specifies the access check type for the fields of an sObject.")

Uses values from the [AccessType](atlas.en-us.apexref.meta/apexref/apex_enum_System_AccessType.htm "Specifies the access check type for the fields of an sObject.") enum. This parameter determines the type of field-level access check to be performed. To check the current user's field-level access, use the [Schema.DescribeFieldResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm#apex_methods_system_fields_describe "Contains methods for describing sObject fields.") methods —isCreatable(), isAccessible(), or isUpdatable().

sourceRecords

Type: [List<SObject>](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

A list of sObjects to be checked for fields that aren’t accessible in the context of the current user’s operation.

enforceRootObjectCRUD

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether an object-level access check is performed. If this parameter is set to true and the access check fails, the method throws an exception. The default value of this optional parameter is true.

#### Return Value

Type: [System.SObjectAccessDecision](atlas.en-us.apexref.meta/apexref/apex_class_System_SObjectAccessDecision.htm#apex_class_System_SObjectAccessDecision "Contains the results of a call to the Security.stripInaccessible method and methods to retrieve those results.")

#### Example

In this example, the user doesn’t have permission to create the Probability field of an Opportunity.

```

```