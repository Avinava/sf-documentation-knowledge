---
title: "stripInaccessible(accessCheckType, sourceRecords,
      enforceRootObjectCRUD, permissionSetId)(Developer Preview)"
domain: apex-reference
topic: stripinaccessibleaccesschecktype-sourcerecords-enforcerootobjectcrud-permissions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.529Z
keywords: [stripInaccessible, accessCheckType, sourceRecords, enforceRootObjectCRUD, permissionSetId, Developer, Preview, Creates, list, sObjects, source, records, which, stripped, fields, fail, field-level, object-level, access, checks.]
---

# stripInaccessible(accessCheckType, sourceRecords,
      enforceRootObjectCRUD, permissionSetId)(Developer Preview)

> Creates a list of sObjects from the source records, which are
      stripped of fields that fail field-level and object-level access checks. Apex enforces
      field-level security (FLS) and object permissions as per the specified permission set, in
      addition to the running user’s permissions.

### stripInaccessible(accessCheckType, sourceRecords, enforceRootObjectCRUD, permissionSetId)(Developer Preview)

Creates a list of sObjects from the source records, which are stripped of fields that fail field-level and object-level access checks. Apex enforces field-level security (FLS) and object permissions as per the specified permission set, in addition to the running user’s permissions.

#### Signature

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Feature is available as a developer preview. Feature isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don’t implement functionality developed with these commands or tools in a production environment. You can provide feedback and suggestions for the “Permission Sets with User Mode” feature in the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000GvrW "HTML (New Window)").

This feature is available in scratch orgs where the ApexUserModeWithPermset feature is enabled. If the feature isn’t enabled, Apex code with this feature can be compiled but not executed.

public static System.SObjectAccessDecision stripInaccessible(System.AccessType accessCheckType, List<SObject> sourceRecords, Boolean enforceRootObjectCRUD, Id permissionSetId)

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

permissionSetId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

Permissions in the specified permission set are enforced in additon to the running user’s permissions.

#### Return Value

Type: [System.SObjectAccessDecision](atlas.en-us.apexref.meta/apexref/apex_class_System_SObjectAccessDecision.htm#apex_class_System_SObjectAccessDecision "Contains the results of a call to the Security.stripInaccessible method and methods to retrieve those results.")