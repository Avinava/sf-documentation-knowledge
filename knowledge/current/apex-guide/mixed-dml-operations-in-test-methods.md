---
title: "Mixed DML Operations in Test Methods"
domain: apex-guide
topic: mixed-dml-operations-in-test-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.016Z
keywords: [Mixed, DML, Operations, Test, Methods, Note, Example, System.runAs, Blocks, @future, Bypass, Error, Method]
---

# Mixed DML Operations in Test Methods

# Mixed DML Operations in Test Methods

Test methods allow for performing mixed Data Manipulation Language (DML) operations that include both setup sObjects and other sObjects if the code that performs the DML operations is enclosed within System.runAs method blocks. You can also perform DML in an asynchronous job that your test method calls. These techniques enable you, for example, to create a user with a role and other sObjects in the same test.

The setup sObjects are listed in [sObjects That Cannot Be Used Together in DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm "DML operations on certain sObjects, sometimes referred to as setup objects, can’t be mixed with DML on non-setup sObjects in the same transaction. This restriction exists because some sObjects affect the user’s access to records in the org. You must insert or update these types of sObjects in a different transaction to prevent operations from happening with incorrect access-level permissions. For example, you can’t update an account and a user role in a single transaction.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Because validation for mixed DML operations is skipped during deployment, there can be a difference in the number of test failures when tests are deployed versus when run in the user interface.

## Example: Mixed DML Operations in System.runAs Blocks

This example shows how to enclose mixed DML operations within System.runAs blocks to avoid the mixed DML error. The System.runAs block runs in the current user’s context. It creates a test user with a role and a test account, which is a mixed DML operation.

```

```

## Use @future to Bypass the Mixed DML Error in a Test Method

Mixed DML operations within a single transaction aren’t allowed. You can’t perform DML on a setup sObject and another sObject in the same transaction. However, you can perform one type of DML as part of an asynchronous job and the others in other asynchronous jobs or in the original transaction. This class contains an @future method to be called by the class in the subsequent example.

```

```

This class calls the method in the previous class.

```

```