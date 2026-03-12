---
title: "Enforce User Mode for Database Operations"
domain: apex-guide
topic: enforce-user-mode-for-database-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.597Z
estimatedTokens: 1868
keywords: [Enforce, User, Mode, Database, Operations, run, rather, system, SOQL, SOSL, queries, special, keywords, DML, overloads]
---

# Enforce User Mode for Database Operations

> You can run database operations in user mode rather than in the default system mode
        by using SOQL or SOSL queries with special keywords or by using DML method
        overloads.

# Enforce User Mode for Database Operations

You can run database operations in user mode rather than in the default system mode by using SOQL or SOSL queries with special keywords or by using DML method overloads.

Apex code runs in system mode by default, which means that it runs with substantially elevated permissions over the user running the code. To enhance the security context of Apex, you can specify user-mode access for database operations. Field-level security (FLS) and object permissions of the running user are respected in user mode, unlike in system mode. User mode always applies sharing rules, but in system mode they’re controlled by sharing keywords on the class. See [Use the with sharing, without sharing, and inherited sharing Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Use the with sharing or without sharing keywords on a class to specify whether sharing rules must be enforced. Use the inherited sharing keyword on a class to run the class in the sharing mode of the class that called it.").

You can indicate the mode of the operation by using WITH USER\_MODE or WITH SYSTEM\_MODE in your SOQL or SOSL query. This example specifies user mode in SOQL.

List<Account> acc = \[SELECT Id FROM Account WITH USER\_MODE\];

Salesforce recommends that you enforce Field Level Security (FLS) by using WITH USER\_MODE rather than WITH SECURITY\_ENFORCED because of these additional advantages.

-   WITH USER\_MODE accounts for polymorphic fields like Owner and Task.whatId.
-   WITH USER\_MODE processes all clauses in the SOQL SELECT statement including the WHERE clause.
-   WITH USER\_MODE finds all FLS errors in your SOQL query, while WITH SECURITY\_ENFORCED finds only the first error. Further, in user mode, you can use the getInaccessibleFields() method on QueryException to examine the full set of access errors.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Avoid specifying access modes, either with special keywords or the AccessLevel class, in the same query as a WITH SECURITY\_ENFORCED clause. Salesforce recommends that you specify either system mode or user mode, and remove any redundant WITH SECURITY\_ENFORCED clauses.

Database operations can specify either user or system mode. This example inserts a new account in user mode.

Account acc = new Account(Name='test'); insert as user acc;

The AccessLevel class represents the two modes in which Apex runs database operations. Use this class to define the execution mode as user mode or system mode. An optional accessLevel parameter in Database and Search methods specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE).

Use these overloaded methods to perform DML and query operations.

-   [Database.query](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_query_2) method. See [Dynamic SOQL](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm).
-   [Database.getQueryLocator](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocator_3) methods
-   [Database.countQuery](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQuery_2) method
-   [Search.query method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_query_2)
-   [Database DML methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm) (insert, update, upsert, merge, delete, undelete, and convertLead). Includes the \*Immediate and \*Async methods, such as insertImmediate and deleteAsync.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

When Database DML methods are run with AccessLevel.USER\_MODE, you can access errors via SaveResult.getErrors().getFields(). With insert as user, you can use the DMLException method getDmlFieldNames() to obtain the fields with FLS errors.

These methods require the accessLevel parameter.

-   [Database.queryWithBinds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_queryWithBinds)
-   [Database.getQueryLocatorWithBinds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocatorWithBinds)
-   [Database.countQueryWithBinds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQueryWithBinds)

## Example

This example assumes that the context user does not have view and edit permissions on Account.AnnualRevenue. An exception is thrown on the insert operation and the inaccessible fields are retrieved using getDmlFieldNames().

```

```

## Using Permission Sets to Enforce Security in DML and Search Operations (Developer Preview)

In Developer Preview, you can specify a permission set that is used to augment the field-level and object-level security for database and search operations. Run the AccessLevel.withPermissionSetId() method with a specified permission set ID. Specific user mode DML operations that are performed with that AccessLevel, respect the permissions in the specified permission set, in addition to the running user’s permissions.

This example runs the AccessLevel.withPermissionSetId() method with the specified permission set and inserts a custom object.

@isTest public with sharing class ElevateUserModeOperations\_Test { @isTest static void objectCreatePermViaPermissionSet() { Profile p = \[SELECT Id FROM Profile WHERE Name='Minimum Access - Salesforce'\]; User u = new User(Alias = 'standt', Email='standarduser@testorg.com', EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en\_US', LocaleSidKey='en\_US', ProfileId = p.Id, TimeZoneSidKey='America/Los\_Angeles', UserName='standarduser' + DateTime.now().getTime() + '@testorg.com'); System.runAs(u) { try { Database.insert(new Account(name='foo'), AccessLevel.User\_mode); Assert.fail(); } catch (SecurityException ex) { Assert.isTrue(ex.getMessage().contains('Account')); } //Get ID of previously created permission set named 'AllowCreateToAccount' Id permissionSetId = \[Select Id from PermissionSet where Name = 'AllowCreateToAccount' limit 1\].Id; Database.insert(new Account(name='foo'), AccessLevel.User\_mode.withPermissionSetId(permissionSetId)); // The elevated access level is not persisted to subsequent operations try { Database.insert(new Account(name='foo2'), AccessLevel.User\_mode); Assert.fail(); } catch (SecurityException ex) { Assert.isTrue(ex.getMessage().contains('Account')); } } } }

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Checkmarx, the [AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_partner_security_portal_scanners.htm) source code scanner, hasn’t been updated with this new Apex feature. Until it’s updated, Checkmarx can generate false positives for field or object level security violations that require exception documentation.

## Code Examples

```apex
try {
List<Account> accts = new Account[] {new Account(name ='foo', AnnualRevenue=2000)};
Database.insert(accts, AccessLevel.USER_MODE); // throws an exception
Assert.fail('DmlException expected');
} catch (DmlException dex) {
   Assert.isTrue(dex.getMessage()
      .contains(
      'Operation failed due to fields being inaccessible on Sobject <object name>, check errors on Exception or Result!'
      )
   );
   Assert.isTrue(dex.getDmlFieldNames(0).contains('AnnualRevenue'));
}
```

## Related Topics

- Use the with sharing, without sharing, and inherited sharing Keywords (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm)
- Dynamic SOQL (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm)
