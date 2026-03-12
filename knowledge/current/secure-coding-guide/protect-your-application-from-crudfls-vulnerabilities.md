---
title: "Protect Your Application from  CRUD/FLS Vulnerabilities"
domain: secure-coding-guide
topic: protect-your-application-from-crudfls-vulnerabilities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.382Z
estimatedTokens: 3003
keywords: [Protect, Application, CRUD, FLS, Vulnerabilities, Implement, secure, coding, practices, Apex, Visualforce, enforcing, object-level, field-level, record-level]
---

# Protect Your Application from  CRUD/FLS Vulnerabilities

> Implement secure coding practices in Apex and Visualforce by enforcing object-level,
  field-level, and record-level access controls to prevent unauthorized data exposure or
  manipulation. Follow your organization's security policy on both standard and custom objects while
  ensuring that your app adapts to users with limited access.

# Protect Your Application from CRUD/FLS Vulnerabilities

Implement secure coding practices in Apex and Visualforce by enforcing object-level, field-level, and record-level access controls to prevent unauthorized data exposure or manipulation. Follow your organization's security policy on both standard and custom objects while ensuring that your app adapts to users with limited access.

By default, Apex data operations (SOQL, DML, and SOSL) run in system mode with full CRUD access to objects and fields. However, Apex also enables you to define access level for data operations. The AccessLevel class represents the two modes in which Apex runs database operations. Use this class to define the execution mode as USER MODE or SYSTEM MODE. An optional accessLevel parameter in Database and Search methods specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). Use these overridden methods to perform DML and query operations.

-   [Database.query](https://developer.salesforce.com/docs/atlas.en-us.254.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_query_2) method
-   [Database.getQueryLocator](https://developer.salesforce.com/docs/atlas.en-us.254.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocator_3) methods
-   [Database.countQuery](https://developer.salesforce.com/docs/atlas.en-us.254.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQuery_2) method
-   [Search.query](https://developer.salesforce.com/docs/atlas.en-us.254.0.apexref.meta/apexref/apex_methods_system_search.htm#apex_System_Search_query_2) method
-   [Database DML methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm) (insert, update, upsert, merge, delete)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

When Database DML methods are run with AccessLevel.USER\_MODE, you can access errors for each record via SaveResult.getErrors(). Each Database.Error object provides the fields that caused the error through getFields(). With insert in user mode, you can also use the DmlException method getFieldNames()to obtain the fields that violated FLS.

These methods require the accessLevel parameter.

-   [Database.queryWithBinds](https://developer.salesforce.com/docs/atlas.en-us.254.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_queryWithBinds)
-   [Database.getQueryLocatorWithBinds](https://developer.salesforce.com/docs/atlas.en-us.254.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_getQueryLocatorWithBinds)
-   [Database.countQueryWithBinds](https://developer.salesforce.com/docs/atlas.en-us.254.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_countQueryWithBinds)

Use WITH USER\_MODE or WITH SYSTEM\_MODE in your SOQL or SOSL query to indicate the mode of the operation. Execute data operations in USER\_MODE to ensure that sharing rules, CRUD, and FLS permissions are enforced. For more details on USER\_MODE and SYSTEM\_MODE, see [Enforce User Mode for Database Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

Salesforce suggests using WITH USER\_MODE over WITH SECURITY\_ENFORCED for enforcing CRUD and FLS, for its additional benefits. Also, WITH SECURITY\_ENFORCED isn't allowed in AppExchange packages.

-   WITH USER\_MODE accounts for polymorphic fields, such as Owner and Task.whatId.
-   WITH USER\_MODE processes all clauses in the SOQL SELECT statement including the WHERE clause.
-   WITH USER\_MODE finds all FLS errors in your SOQL query, while WITH SECURITY ENFORCED finds only the first error. Further, in USER\_MODE you can use the getInaccessibleFields() method on QueryException to examine the full set of access errors.

## Learn About User Mode Operations

Use USER\_MODE to ensure your SOQL, SOSL, and DML operations abide by the user’s sharing rules, CRUD, FLS, and restriction rules.

-   Access Records:

    Use WITH USER\_MODE in SOQL queries to enforce Sharing rules, CRUD, FLS, and Restriction Rules.

    System mode privileges are temporarily lowered to retrieve records that are accessible to the user. System mode resumes when the query execution is complete.

    List<Account> acc = \[SELECT Id FROM Account WITH USER\_MODE\];

-   Insert Records:

    Ensure that the user has create and edit permissions on the Opportunity.Amount field (FLS check must be implemented).

    For example, to create an opportunity with a value of $500, create a new record and edit the Opportunity.Amount field (Field-Level Security check). This ensures that the insert operations proceed only if the user possesses the necessary permissions.

    Opportunity o = new Opportunity(); // specify other fields o.Amount=500; insert as user o;

    or

    Opportunity o = new Opportunity(); // specify other fields o.Amount=500; database.insert(o,AccessLevel.USER\_MODE);

-   Update Records:

    Use update as user or database.update() with AccessLevel.USER\_MODE to update records while enforcing user permissions.

    Account a = \[SELECT Id,Name,Website FROM Account WHERE Id=:recordId\]; // specify other fields a.Website='https://example.com'; update as user a;

-   SOSL Queries:

    Execute SOSL queries in USER\_MODE using search.query() with AccessLevel.USER\_MODE. This ensures that the search results are filtered based on the user's permissions.

    String queryString='FIND :searchString IN ALL FIELDS RETURNING '; queryString+='Lead(Id,Salutation,FirstName,LastName,Name,Email,Company,Phone),'; queryString+='Contact(Id, Salutation,FirstName,LastName,Name,Email,Phone),'; queryString+='Account(Id,Name,Phone)'; List<List<SObject>> searchResults= search.query(queryString,AccessLevel.USER\_MODE);


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

USER\_MODE enforces CRUD/FLS/Sharing rules. You can use USER\_MODE to avoid Sharing, CRUD, and FLS violations.

## Use CRUD/FLS Check Methods

Enforce object-level and field-level permissions in your code by using Schema.DescribeSObjectResult and Schema.DescribeFieldResult methods to check your user's current access permission levels. These methods identify whether your user can perform a DML operation or query.

For example, you can use isAccessible, isCreateable, or isUpdateable methods of Schema.DescribeSObjectResult to verify whether the current user has read, create, or update access to an sObject. Similarly, with Schema.DescribeFieldResult you can use the access control methods to check whether the current user has read, create, or update access for a field. Furthermore, you can use the isDeletable method in Schema.DescribeSObjectResult to check if the current user has permission to delete the records of an sObject.

Here’s the list of the DescribeSObjectResult class helper functions that you can use to verify a user’s level of access.

-   IsCreateable():

    Checks if a user has Create permission on an object and Edit permission on the fields.

    If a user wants to create an Opportunity, your code should verify that the user has Create permissions on the Opportunity object and Edit permissions on the Opportunity.Amount field using the isCreateable () method.

    if (!Schema.sObjectType.Opportunity.isCreateable() || !Schema.sObjectType.Opportunity.fields.Amount.isCreateable()){ ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Error: Insufficient Access')); return null; } Opportunity o = new Opportunity(); o.Amount=500; database.insert(o);

-   IsAccessible():

    Verifies if a user has permissions to access and retrieve a field from the object.

    If a user wants to access the Expected Revenue field in an Opportunity, your Apex code should check if the user has read permission on Opportunity.ExpectedRevenue using the isAccessible() method.

    if (!Schema.sObjectType.Opportunity.isAccessible() || !Schema.sObjectType.Opportunity.fields.ExpectedRevenue.isAccessible()){ ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR,'Error: Insufficient Access')); return null; } Opportunity \[\] myList = \[SELECT ExpectedRevenue FROM Opportunity LIMIT 1000\];

-   IsUpdateable():

    Checks if a user has Edit permission on a field and the object.

    If a user wants to update an Opportunity to mark the stage as “Closed Won”. Your code should check if the user has the isUpdateable() permission on Opportunity.StageName.

    if (!Schema.sObjectType.Opportunity.isUpdateable() || !Schema.sObjectType.Opportunity.fields.StageName.isUpdateable()){ ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR,'Error: Insufficient Access')); return null; } o.StageName=’Closed Won’; update o;

-   IsDeletable():

    Checks if a user can delete records of an object. Note that unlike update, create, and access, delete performs only a CRUD check, verifying that the user can delete the records of an object.

    Since you delete entire records in SOQL and not fields, you need to check only the user's CRUD access to the object.

    if (!Lead.sObjectType.getDescribe().isDeleteable()){ return null; } delete l;


## Enforce Field and Object-level Data Protection

Use of stripInaccessible() enforces field and object-level data protection. Use this method to strip inaccessible field and relationship fields from query and subquery results for your users. The method also removes inaccessible sObject fields before DML operations and sanitizes sObjects received from untrusted sources to prevent exceptions.

This method checks source records for fields that don't meet field-level security checks. You can also verify user access to lookup or master-detail relationship fields.

The stripInaccessible() method creates a return list of sObjects identical to the source records, excluding fields that are removed or inaccessible. The sObjects returned are in the same order as the source records listed in the sourceRecords parameter of the stripInaccessible() method. Fields that aren't queried are set to null (empty) in the return list without causing an exception.

Furthermore, this method doesn't support the AggregateResult SObject type. Use of this type in source records results in an exception.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

To prevent DML issues, this method doesn't remove the ID field.

To identify inaccessible fields that were removed, use the isSet method. For example, if the return list contains the Contact object and the custom field social\_security\_number\_\_c is inaccessible to the user, this custom field fails the field-level access check. The field isn't set, and isSet returns false.

SObjectAccessDecision securityDecision = Security.stripInaccessible(sourceRecords); Contact c = securityDecision.getRecords()\[0\]; System.debug(c.isSet('social\_security\_number\_\_c')); // prints "false"

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

You can bypass CRUD and FLS in some cases.

-   Creating Roll-Up summaries or aggregates that don’t directly expose the data.
-   Modifying custom objects or fields so that they aren’t directly accessible to the user via CRUD or FLS.
-   Accessing custom objects from a high-privileged method that non-admin users can’t access.
-   Accessing custom objects belonging to your namespace with a bespoke security policy. In this case, document the policy as part of your AppExchange security review submission.

For AppExchange Security Review, ensure that you document these use cases as a part of your submission.
