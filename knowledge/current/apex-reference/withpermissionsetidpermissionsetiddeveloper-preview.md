---
title: "withPermissionSetId(permissionSetId)(Developer
    Preview)"
domain: apex-reference
topic: withpermissionsetidpermissionsetiddeveloper-preview
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.304Z
keywords: [withPermissionSetId, permissionSetId, Developer, Preview, Supports, database, search, operations, run, permissions, specified, permission, set., Apex, enforces, field-level, security, FLS, object, per]
---

# withPermissionSetId(permissionSetId)(Developer
    Preview)

> Supports database and search operations to be run with permissions specified in a
        permission set. Apex enforces field-level security (FLS) and object permissions as per the
        specified permission set, in addition to the running user’s permissions.

### withPermissionSetId(permissionSetId)(Developer Preview)

Supports database and search operations to be run with permissions specified in a permission set. Apex enforces field-level security (FLS) and object permissions as per the specified permission set, in addition to the running user’s permissions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Feature is available as a developer preview. Feature isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don’t implement functionality developed with these commands or tools in a production environment. You can provide feedback and suggestions for the “Permission Sets with User Mode” feature in the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000GvrW "HTML (New Window)").

This feature is available in scratch orgs where the ApexUserModeWithPermset feature is enabled. If the feature isn’t enabled, Apex code with this feature can be compiled but not executed.

#### Signature

public System.AccessLevel withPermissionSetId(String permissionSetId)

#### Parameters

permissionSetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Permissions in the specified permission set are enforced while running user-mode DML operations, in addition to the running user’s permissions.

#### Return Value

Type: [Access Level Class](#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

#### Example

This example runs the AccessLevel.withPermissionSetId() method with the specified permission set and inserts a custom object.

@isTest public with sharing class ElevateUserModeOperations\_Test { @isTest static void objectCreatePermViaPermissionSet() { Profile p = \[SELECT Id FROM Profile WHERE Name='Minimum Access - Salesforce'\]; User u = new User(Alias = 'standt', Email='standarduser@testorg.com', EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en\_US', LocaleSidKey='en\_US', ProfileId = p.Id, TimeZoneSidKey='America/Los\_Angeles', UserName='standarduser' + DateTime.now().getTime() + '@testorg.com'); System.runAs(u) { try { Database.insert(new Account(name='foo'), AccessLevel.User\_mode); Assert.fail(); } catch (SecurityException ex) { Assert.isTrue(ex.getMessage().contains('Account')); } //Get ID of previously created permission set named 'AllowCreateToAccount' Id permissionSetId = \[Select Id from PermissionSet where Name = 'AllowCreateToAccount' limit 1\].Id; Database.insert(new Account(name='foo'), AccessLevel.User\_mode.withPermissionSetId(permissionSetId)); // The elevated access level in not persisted to subsequent operations try { Database.insert(new Account(name='foo2'), AccessLevel.User\_mode); Assert.fail(); } catch (SecurityException ex) { Assert.isTrue(ex.getMessage().contains('Account')); } } } }