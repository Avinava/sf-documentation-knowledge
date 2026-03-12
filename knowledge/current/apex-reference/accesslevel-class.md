---
title: "AccessLevel Class"
domain: apex-reference
topic: accesslevel-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.946Z
estimatedTokens: 1815
namespace: System
keywords: [AccessLevel, Defines, different, modes, such, system, user, mode, Apex, database, operations, execute, in., Usage, Example, withPermissionSetId, permissionSetId, Developer, Preview, Note]
---

# AccessLevel Class

> Defines the different modes, such as system or user mode, that Apex
      database operations execute in.

**Namespace:** `System`

# AccessLevel Class

Defines the different modes, such as system or user mode, that Apex database operations execute in.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

By default, Apex code runs in system mode, which means that it runs with substantially elevated permissions over the user running the code. In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the current user's object permissions, field-level security, and sharing rules are enforced.

Many of the DML methods of the System.Database and System.Search classes include an accessLevel parameter to specify the execution mode.

Avoid specifying an accessLevel parameter in the same query as a WITH SECURITY\_ENFORCED clause. Salesforce recommends that you specify either system mode or user mode, and remove any redundant WITH SECURITY\_ENFORCED clauses.

## Example

If the user running this Apex code doesn't have write access to the Account object, the Database.insert() method returns an error.

List<Account> toInsert = new List<Account>{new Account(Name = 'Exciting New Account')}; List<Database.SaveResult> sr = Database.insert(toInsert, AccessLevel.USER\_MODE);

In contrast, this example shows the method running in system mode. The success of the insert doesn't depend on whether the user running the Apex code has create access to the Account object.

List<Account> toInsert = new List<Account>{new Account(Name = 'Exciting New Account')}; List<Database.SaveResult> sr = Database.insert(toInsert, AccessLevel.SYSTEM\_MODE);

-   **[AccessLevel Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_System_AccessLevel_methods)**

-   **[AccessLevel Properties](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_System_AccessLevel_properties)**


## AccessLevel Methods

The following are methods for AccessLevel.

-   **[withPermissionSetId(permissionSetId)(Developer Preview)](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_System_AccessLevel_withPermissionSetId)**
    Supports database and search operations to be run with permissions specified in a permission set. Apex enforces field-level security (FLS) and object permissions as per the specified permission set, in addition to the running user’s permissions.

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

## AccessLevel Properties

The following are properties for AccessLevel.

-   **[SYSTEM\_MODE](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_System_AccessLevel_SYSTEM_MODE)**
    Execution mode in which the the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm).
-   **[USER\_MODE](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_System_AccessLevel_USER_MODE)**
    Execution mode in which the object permissions, field-level security, and sharing rules of the current user are enforced.

### SYSTEM\_MODE

Execution mode in which the the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm).

#### Signature

public System.AccessLevel SYSTEM\_MODE {get;}

#### Property Value

Type: System.AccessLevel

### USER\_MODE

Execution mode in which the object permissions, field-level security, and sharing rules of the current user are enforced.

#### Signature

public System.AccessLevel USER\_MODE {get;}

#### Property Value

Type: System.AccessLevel

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- AccessLevel Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm)
- AccessLevel Properties (atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm)
- withPermissionSetId(permissionSetId)(Developer Preview) (atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- SYSTEM_MODE (atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm)
- USER_MODE (atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm)
