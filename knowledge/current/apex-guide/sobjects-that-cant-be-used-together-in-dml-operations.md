---
title: "sObjects That Can’t Be Used Together in DML Operations"
domain: apex-guide
topic: sobjects-that-cant-be-used-together-in-dml-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.012Z
keywords: [sObjects, Can’t, Used, Together, DML, Operations, Note, Example, Future, Method, Perform, Mixed]
---

# sObjects That Can’t Be Used Together in DML Operations

# sObjects That Can’t Be Used Together in DML Operations

DML operations on certain sObjects, sometimes referred to as setup objects, can’t be mixed with DML on non-setup sObjects in the same transaction. This restriction exists because some sObjects affect the user’s access to records in the org. You must insert or update these types of sObjects in a different transaction to prevent operations from happening with incorrect access-level permissions. For example, you can’t update an account and a user role in a single transaction.

Don’t include more than one of these sObjects in the same transaction when performing DML operations or when using the Metadata API.

These sObjects also can't be used with the [@IsTest (IsParallel=true)](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm#isParallelTrue) annotation. Split such operations into separate transactions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

This list includes sObjects that cannot be used together in the same DML transaction, but is not an exhaustive list.

-   AuthSession
-   ContentWorkspace
-   FieldPermissions
-   ForecastingShare
-   Group
    
    You can only insert and update a group in a transaction with other sObjects. Other DML operations aren’t allowed.
    
-   GroupMember
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    With legacy Apex code saved using Salesforce API version 14.0 and earlier, you can insert and update a group member with other sObjects in the same transaction.
    
-   ObjectPermissions
-   ObjectTerritory2AssignmentRule
-   ObjectTerritory2AssignmentRuleItem
-   PermissionSet
-   PermissionSetAssignment
-   QueueSObject
-   RuleTerritory2Association
-   SetupEntityAccess
-   Territory
-   Territory2
-   Territory2Model
-   User
    
    You can insert a user in a transaction with other sObjects in Apex code saved using Salesforce API version 14.0 and earlier.
    
    You can insert a user in a transaction with other sObjects in Apex code saved using Salesforce API version 15.0 and later when UserRoleId is specified as null.
    
    You can update a user in a transaction with other sObjects in Apex code saved using Salesforce API version 14.0 and earlier
    
    You can update a user in a transaction with other sObjects in Apex code saved using Salesforce API version 15.0 and later when the user isn’t included in a [Lightning Sync](https://help.salesforce.com/articleView?id=lightning_sync_admin_overview.htm&language=en_US) or [Einstein Activity Capture](https://help.salesforce.com/s/articleView?id=sales.einstein_sales_aac.htm&type=5&language=en_US) configuration (either active or inactive) and the following fields aren’t updated:
    
    -   UserRoleId
    -   IsActive
    -   ForecastEnabled
    -   IsPortalEnabled
    -   Username
    -   ProfileId
    
-   UserPackageLicense
-   UserRole
-   UserTerritory
-   UserTerritory2Association

If you're using a Visualforce page with a custom controller, you can't mix sObject types with any of these special sObjects within a single request or action. However, you can perform DML operations on these different types of sObjects in subsequent requests. For example, you can create an account with a save button, and then create a user with a non-null role with a submit button.

You can perform DML operations on more than one type of sObject in a single class using the following process:

1.  Create a method that performs a DML operation on one type of sObject.
2.  Create a second method that uses the [future](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm "Use the Future annotation to identify methods that run asynchronously. A future method runs when Salesforce has available resources.") annotation to manipulate a second sObject type.

This process is demonstrated in the example in the next section.

## Example: Using a Future Method to Perform Mixed DML Operations

This example shows how to perform mixed DML operations by using a future method to perform a DML operation on the User object.

```

```

```

```

-   **[Mixed DML Operations in Test Methods](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects_test_methods.htm)**  
    Test methods allow for performing mixed Data Manipulation Language (DML) operations that include both setup sObjects and other sObjects if the code that performs the DML operations is enclosed within System.runAs method blocks. You can also perform DML in an asynchronous job that your test method calls. These techniques enable you, for example, to create a user with a role and other sObjects in the same test.