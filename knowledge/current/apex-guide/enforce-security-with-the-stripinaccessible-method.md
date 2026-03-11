---
title: "Enforce Security with the stripInaccessible Method"
domain: apex-guide
topic: enforce-security-with-the-stripinaccessible-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.681Z
keywords: [Enforce, Security, stripInaccessible, Method, Important, Note, Example, See]
---

# Enforce Security with the stripInaccessible Method

# Enforce Security with the stripInaccessible Method

Use the stripInaccessible method to enforce field-level and object-level data protection. This method can be used to strip the fields and relationship fields from query and subquery results that the user can’t access. The method can also be used to remove inaccessible sObject fields before DML operations to avoid exceptions and to sanitize sObjects that have been deserialized from an untrusted source.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The field- and object-level data protection is accessed through the [Security](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Security.htm) and [SObjectAccessDecision](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_SObjectAccessDecision.htm) classes. The access check is based on the field-level permission of the current user in the context of the specified operation—create, read, update, or upsert. The [Security.stripInaccessible()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Security.htm) method checks the source records for fields that don’t meet the field-level security check for the current user. The method also checks the source records for lookup or master-detail relationship fields to which the current user doesn’t have access. The method creates a return list of sObjects that is identical to the source records, except that the fields that are inaccessible to the current user are removed. The sObjects returned by the getRecords method contain records in the same order as the sObjects in the sourceRecords parameter of the stripInaccessible method.

The Security.stripInaccessible() method takes a permission set ID as a parameter and enforces field-level and object-level access as per the specified permission set, in addition to the running user’s permissions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The ID field is never stripped by the stripInaccessible method to avoid issues when performing DML on the result.

To identify inaccessible fields that were removed, you can use the [SObject.isSet()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_isSet) method. For example, the return list contains the Contact object and the custom field social\_security\_number\_\_c is inaccessible to the user. Because this custom field fails the field-level access check, the field isn’t set and isSet returns false.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The stripInaccessible method doesn’t support AggregateResult SObject. If the source records are of AggregateResult SObject type, an exception is thrown.

To enforce object and field permissions on the User object and hide a user’s personal information from other users in orgs with Experience Cloud sites, see [Enforcing Object and Field Permissions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm).

The following are some examples where the stripInaccessible method can be used.

## Example

This example code removes inaccessible fields from the query result. A display table for campaign data must always show the BudgetedCost. The ActualCost must be shown only to users who have permission to read that field.

```

```

## Example

This example code removes inaccessible fields from the subquery result. The user doesn’t have permission to read the Phone field of a Contacts object.

```

```

## Example

This example code removes inaccessible fields from sObjects before DML operations. The user who doesn’t have permission to create Rating for an Account can still create an Account. The method ensures that no Rating is set and doesn’t throw an exception.

```

```

## Example

This example code sanitizes sObjects that have been deserialized from an untrusted source. The user doesn’t have permission to update the AnnualRevenue of an Account.

```

```

## Example

This example code removes inaccessible relationship fields from the query result. The user doesn’t have permission to insert the Account\_\_c field, which is a lookup from MyCustomObject\_\_c to Account.

```

```

#### See Also

-   [*Apex Reference Guide*: AccessType Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_System_AccessType.htm "Apex Reference Guide: AccessType Enum - HTML (New Window)")
    
-   [*Apex Reference Guide*: Security Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Security.htm "Apex Reference Guide: Security Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: SObjectAccessDecision Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_SObjectAccessDecision.htm "Apex Reference Guide: SObjectAccessDecision
    Class - HTML (New Window)")