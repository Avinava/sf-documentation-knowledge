---
title: "Securing Data in Apex Controllers"
domain: lightning
topic: securing-data-in-apex-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.938Z
estimatedTokens: 1446
keywords: [Securing, Data, Apex, Controllers, runs, system, mode, means, substantially, elevated, permissions, acting, user, had, field-]
---

# Securing Data in Apex Controllers

> By default, Apex runs in system mode, which means that it runs with substantially
        elevated permissions, acting as if the user had most permissions and all field- and
        object-level access granted. Because these security layers aren’t enforced like they are in
        the Salesforce UI, you must write code to enforce them. Otherwise, your components may
        inadvertently expose sensitive data that would normally be hidden from users in the
        Salesforce UI.

# Securing Data in Apex Controllers

By default, Apex runs in system mode, which means that it runs with substantially elevated permissions, acting as if the user had most permissions and all field- and object-level access granted. Because these security layers aren’t enforced like they are in the Salesforce UI, you must write code to enforce them. Otherwise, your components may inadvertently expose sensitive data that would normally be hidden from users in the Salesforce UI.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To work with Salesforce records, we recommend using Lightning Data Service, which handles sharing rules, CRUD, and field-level security for you.

## Enforce Sharing Rules

When you declare a class, it’s a best practice to specify with sharing to enforce sharing rules when a component uses the Apex controller.

```

```

An @AuraEnabled Apex class that doesn’t explicitly set with sharing or without sharing, or is defined with inherited sharing, uses a default or implicit value of with sharing. However, an Apex class that doesn’t explicitly set with sharing or without sharing inherits the value from the context in which it runs. So when a class without explicit sharing behavior is called by a class that sets one of the keywords, it operates with the sharing behavior of the calling class. To ensure that your class enforces sharing rules, set with sharing.

The with sharing keyword enforces record-level security. It doesn’t enforce object-level and field-level security. You must manually enforce object-level and field-level security separately in your Apex classes.

## Enforce Object and Field Permissions (CRUD and FLS)

There are a few alternatives to enforce object-level and field-level permissions in your Apex code.

Easiest enforcement using WITH USER\_MODE

To enforce object-level and field-level permissions, use the WITH USER\_MODE clause for SOQL SELECT queries in Apex code, including subqueries and cross-object relationships.

The WITH USER\_MODE clause is ideal if you have minimal experience developing secure code and for applications that don’t require graceful degradation on permissions errors.

This example queries fields on a custom expense object with an insecure method, get\_UNSAFE\_Expenses(). Don't use this class!

```

```

This next example uses a secure method, getExpenses(), which uses the WITH USER\_MODE clause to enforce object-level and field-level permissions. Use this class instead of UnsafeExpenseController.

```

```

For more details, see [Enforce User Mode for Database Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm) in the Apex Developer Guide.

Graceful degradation with stripInaccessible()

For more graceful degradation on permissions errors, use the stripInaccessible() method to enforce field- and object-level data protection. This method strips the fields and relationship fields from query and subquery results that the user can’t access. You can find out if any fields were stripped and throw an AuraHandledException with a custom error message, if desired.

You can also use the method to remove inaccessible sObject fields before DML operations to avoid exceptions and to sanitize sObjects that have been deserialized from an untrusted source.

This example updates ExpenseController to use stripInaccessible() instead of the WITH USER\_MODE SOQL clause. The results are the same but stripInaccessible() gives you the opportunity to gracefully degrade instead of failing on an access violation when using WITH USER\_MODE.

```

```

For more details and examples, see [Enforce Security with the stripInaccessible Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm) in the Apex Developer Guide.

Legacy code using DescribeSObjectResult and DescribeFieldResult methods

Before the WITH USER\_MODE clause and stripInaccessible() method were available, the only way to enforce object and field permissions was to check the current user’s access permission levels by calling the Schema.DescribeSObjectResult and Schema.DescribeFieldResult methods. Then, if a user has the necessary permissions, perform a specific DML operation or a query.

For example, you can call the isAccessible, isCreateable, or isUpdateable methods of Schema.DescribeSObjectResult to verify whether the current user has read, create, or update access to an sObject, respectively. Similarly, Schema.DescribeFieldResult exposes access control methods that you can call to check the current user’s read, create, or update access for a field.

This example uses the describe result methods. This approach requires many more lines of boilerplate code so we recommend using the WITH USER\_MODE clause or stripInaccessible() method instead.

```

```

#### See Also

-   [*Apex Developer Guide*: Enforcing Sharing Rules](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_security_sharing_rules.htm "Apex Developer Guide: Enforcing Sharing Rules - HTML (New Window)")

-   [*Apex Developer Guide*: Enforcing Object and Field Permissions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm "Apex Developer Guide: Enforcing Object and Field Permissions - HTML (New Window)")

-   [*Apex Developer Guide*: Using the with sharing, without sharing, and inherited sharing Keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "Apex Developer Guide: Using the with sharing, without sharing, and
    inherited sharing Keywords - HTML (New Window)")

## Code Examples

```apex
public with sharing class SharingClass {
    // Code here
}
```

```apex
// This class is an anti-pattern.
public with sharing class UnsafeExpenseController {
    // ns refers to namespace; leave out ns__ if not needed
    // This method is vulnerable because it doesn't enforce FLS. 
    @AuraEnabled
    public static List<ns__Expense__c> get_UNSAFE_Expenses() {
        return [SELECT Id, Name, ns__Amount__c, ns__Client__c, ns__Date__c, 
            ns__Reimbursed__c, CreatedDate FROM ns__Expense__c];
    } 
}
```

```apex
public with sharing class ExpenseController {
    // This method is recommended because it enforces FLS.
    @AuraEnabled
    public static List<ns__Expense__c> getExpenses() {
    // Query the object safely
    return [SELECT Id, Name, ns__Amount__c, ns__Client__c, ns__Date__c, 
            ns__Reimbursed__c, CreatedDate
             FROM ns__Expense__c WITH USER_MODE];
    } 
}
```

```apex
public with sharing class ExpenseControllerStripped {
    
    @AuraEnabled
    public static List<ns__Expense__c> getExpenses() {
        // Query the object but don't use WITH USER_MODE 
        List<ns__Expense__c> expenses = 
            [SELECT Id, Name, ns__Amount__c, ns__Client__c, ns__Date__c, 
                ns__Reimbursed__c, CreatedDate
                 FROM ns__Expense__c];
                 
         // Strip fields that are not readable
         SObjectAccessDecision decision = Security.stripInaccessible(
               AccessType.READABLE,
               expenses);
               
         // Throw an exception if any data was stripped
         if (!decision.getModifiedIndexes().isEmpty()) {
            throw new AuraHandledException('Data was stripped');
         }
         
         return expenses;
    } 
}
```

```apex
public with sharing class ExpenseControllerLegacy {
    @AuraEnabled
    public static List<ns__Expense__c> getExpenses() {
        String [] expenseAccessFields = new String [] {'Id',
                                                       'Name',
                                                       'ns__Amount__c',
                                                       'ns__Client__c',
                                                       'ns__Date__c',
                                                       'ns__Reimbursed__c',
                                                       'CreatedDate'
                                                       };


    // Obtain the field name/token map for the Expense object
    Map<String,Schema.SObjectField> m = Schema.SObjectType.ns__Expense__c.fields.getMap();

    for (String fieldToCheck : expenseAccessFields) {

        // Call getDescribe to check if the user has access to view field
        if (!m.get(fieldToCheck).getDescribe().isAccessible()) {

            // Pass error to client
            throw new System.NoAccessException();
        }
    }
 
    // Query the object safely
    return [SELECT Id, Name, ns__Amount__c, ns__Client__c, ns__Date__c, 
            ns__Reimbursed__c, CreatedDate FROM ns__Expense__c];
    } 
}
```
