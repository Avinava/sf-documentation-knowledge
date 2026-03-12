---
title: "Creating Parent and Child Records in a Single Statement Using
            Foreign Keys"
domain: apex-guide
topic: creating-parent-and-child-records-in-a-single-statement-using-foreign-keys
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:34.637Z
estimatedTokens: 599
keywords: [Creating, Parent, Child, Records, Statement, Foreign, Keys, levels, deep, created, call, different, sObject, SOAP, API]
---

# Creating Parent and Child Records in a Single Statement Using
            Foreign Keys

> You can create related records that are up to 10 levels deep. Also, the related
                records created in a single call must have different sObject types. For more
                information, see Creating Records for Different Object
                    Types in the SOAP API Developer Guid

# Creating Parent and Child Records in a Single Statement Using Foreign Keys

You can use external ID fields as foreign keys to create parent and child records of different sObject types in a single step instead of creating the parent record first, querying its ID, and then creating the child record. To do this:

-   Create the child sObject and populate its required fields, and optionally other fields.
-   Create the parent reference sObject used only for setting the parent foreign key reference on the child sObject. This sObject has only the external ID field defined and no other fields set.
-   Set the foreign key field of the child sObject to the parent reference sObject you just created.
-   Create another parent sObject to be passed to the insert statement. This sObject must have the required fields (and optionally other fields) set in addition to the external ID field.
-   Call insert by passing it an array of sObjects to create. The parent sObject must precede the child sObject in the array, that is, the array index of the parent must be lower than the child’s index.

You can create related records that are up to 10 levels deep. Also, the related records created in a single call must have different sObject types. For more information, see [Creating Records for Different Object Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_create.htm#MixedSaveSection "HTML (New Window)") in the SOAP API Developer Guide.

The following example shows how to create an opportunity with a parent account using the same insert statement. The example creates an Opportunity sObject and populates some of its fields, then creates two Account objects. The first account is only for the foreign key relationship, and the second is for the account creation and has the account fields set. Both accounts have the external ID field, MyExtID\_\_c, set. Next, the sample calls Database.insert by passing it an array of sObjects. The first element in the array is the parent sObject and the second is the opportunity sObject. The Database.insert statement creates the opportunity with its parent account in a single step. Finally, the sample checks the results and writes the IDs of the created records to the debug log, or the first error if record creation fails. This sample requires an external ID text field on Account called MyExtID.

```

```

## Code Examples

```apex
public class ParentChildSample {
    public static void InsertParentChild() {
        Date dt = Date.today();
        dt = dt.addDays(7);
        Opportunity newOpportunity = new Opportunity(
            Name='OpportunityWithAccountInsert',
            StageName='Prospecting',
            CloseDate=dt);
        
        // Create the parent reference.
        // Used only for foreign key reference
        // and doesn't contain any other fields.
        Account accountReference = new Account(
            MyExtID__c='SAP111111');                
        newOpportunity.Account = accountReference;
        
        // Create the Account object to insert.
        // Same as above but has Name field.
        // Used for the insert.
        Account parentAccount = new Account(
            Name='Hallie',
            MyExtID__c='SAP111111');      
        
        // Create the account and the opportunity.
        Database.SaveResult[] results = Database.insert(new SObject[] {
            parentAccount, newOpportunity });
        
        // Check results.
        for (Integer i = 0; i < results.size(); i++) {
            if (results[i].isSuccess()) {
            System.debug('Successfully created ID: '
                  + results[i].getId());
            } else {
            System.debug('Error: could not create sobject '
                  + 'for array element ' + i + '.');
            System.debug('   The error reported was: '
                  + results[i].getErrors()[0].getMessage() + '
');
            }
        }
    }
}
```
