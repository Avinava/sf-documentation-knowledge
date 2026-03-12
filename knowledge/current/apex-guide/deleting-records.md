---
title: "Deleting Records"
domain: apex-guide
topic: deleting-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.689Z
estimatedTokens: 629
keywords: [Deleting, Records, After, persist, records, database, delete, those, operation., Deleted, aren’t, deleted, permanently, Salesforce, they, placed, Recycle, Bin, days, where]
---

# Deleting Records

> After you persist records in the database, you can delete those records using the delete operation. Deleted records aren’t deleted
            permanently from Salesforce, but they are placed in the Recycle Bin for 15 days from
            where they can be restored. Restoring deleted records is cov

# Deleting Records

After you persist records in the database, you can delete those records using the delete operation. Deleted records aren’t deleted permanently from Salesforce, but they are placed in the Recycle Bin for 15 days from where they can be restored. Restoring deleted records is covered in a later section.

## Example

The following example deletes all accounts that are named 'DotCom':

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For more information on processing DmlExceptions, see [Bulk DML Exception Handling](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).

## Referential Integrity When Deleting and Restoring Records

The delete operation supports cascading deletions. If you delete a parent object, you delete its children automatically, as long as each child record can be deleted.

For example, if you delete a case record, Apex automatically deletes any CaseComment, CaseHistory, and CaseSolution records associated with that case. However, if a particular child record is not deletable or is currently being used, then the delete operation on the parent case record fails.

The undelete operation restores the record associations for the following types of relationships:

-   Parent accounts (as specified in the Parent Account field on an account)
-   Indirect account-contact relationships (as specified on the Related Accounts related list on a contact or the Related Contacts related list on an account)
-   Parent cases (as specified in the Parent Case field on a case)
-   Master solutions for translated solutions (as specified in the Master Solution field on a solution)
-   Managers of contacts (as specified in the Reports To field on a contact)
-   Products related to assets (as specified in the Product field on an asset)
-   Opportunities related to quotes (as specified in the Opportunity field on a quote)
-   All custom lookup relationships
-   Relationship group members on accounts and relationship groups, with some exceptions
-   Tags
-   An article's categories, publication state, and assignments

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Salesforce only restores lookup relationships that have not been replaced. For example, if an asset is related to a different product prior to the original product record being undeleted, that asset-product relationship is not restored.

## Code Examples

```
Account[] doomedAccts = [SELECT Id, Name FROM Account 
                         WHERE Name = 'DotCom']; 
try {
    delete doomedAccts;
} catch (DmlException e) {
    // Process exception here
}
```
