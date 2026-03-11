---
title: "How DML Works"
domain: apex-guide
topic: how-dml-works
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:48.063Z
keywords: [How, DML, Works, Single, vs., Bulk, Operations, System, Context, Sharing, Rules, Note, Best, Practices]
---

# How DML Works

# How DML Works

## Single vs. Bulk DML Operations

You can perform DML operations either on a single sObject, or in bulk on a list of sObjects. Performing bulk DML operations is the recommended way because it helps avoid hitting governor limits, such as the DML limit of 150 statements per Apex transaction. This limit is in place to ensure fair access to shared resources in the Lightning Platform. Performing a DML operation on a list of sObjects counts as one DML statement, not as one statement for each sObject.

This example performs DML calls on single sObjects, which isn’t efficient.

The for loop iterates over contacts. For each contact, if the department field matches a certain value, it sets a new value for the Description field. If the list contains more than items, the 151st update returns an exception that can't be caught.

```

```

This example is a modified version of the previous example that doesn't hit the governor limit. The DML operation is performed in bulk by calling update on a list of contacts. This code counts as one DML statement, which is far below the limit of 150.

```

```

Another DML governor limit is the total number of rows that can be processed by DML operations in a single transaction, which is 10,000. All rows processed by all DML calls in the same transaction count incrementally toward this limit. For example, if you insert 100 contacts and update 50 contacts in the same transaction, your total DML processed rows are 150. You still have 9,850 rows left (10,000 - 150).

## System Context and Sharing Rules

Most DML operations execute in system context, ignoring the current user's permissions, field-level security, organization-wide defaults, position in the role hierarchy, and sharing rules. For more information, see [Enforce Sharing Rules](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_rules.htm "Apex generally runs in system context, so the current user’s permissions and field-level security aren’t taken into account during code execution. You can use sharing rules to extend a user’s access to specific records, and then enforce sharing rules by using the with sharing keyword on a class declaration. If you declare a class with the without sharing keyword, then sharing rules aren’t enforced.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If you execute DML operations within an anonymous block, they execute using the current user’s object and field-level permissions.

## Best Practices

With DML on SObjects, it’s best to construct new instances and only update the fields you wish to modify without querying other fields. If you query fields other than the fields you wish to update, you may revert queried field values that could have changed between the query and the DML.