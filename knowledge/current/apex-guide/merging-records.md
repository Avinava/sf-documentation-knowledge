---
title: "Merging Records"
domain: apex-guide
topic: merging-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.078Z
keywords: [Merging, Records, merge, Statement, Database.merge, Method, Note, Merge, Considerations]
---

# Merging Records

# Merging Records

When you have duplicate lead, contact, case, or account records in the database, cleaning up your data and consolidating the records is a good idea. You can merge up to three records of the same sObject type. The merge operation merges the duplicate records into the main record, deletes the duplicate records, and reparents any related records.

## Use the merge Statement

This example shows how to merge a duplicate account record into a main account record. The duplicate account has a related contact, which is moved to the main account record after the merge operation. After merging, the duplicate record is deleted and only the main record remains in the database.

```

```

## Use the Database.merge Method

This second example is similar to the previous example, except that it uses the Database.merge method instead of the merge statement. The last argument of Database.merge is set to false, so any errors encountered in this operation are returned in the merge result without throwing exceptions. In the example, a main account and two duplicate account records are created. One of the duplicate account records has a child contact record. Through the merge operation, the contact is moved to the main account record, and the other records are deleted.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To use the AccountContactRelation sObject in this example, enable the “Allow users to relate a contact to multiple accounts” setting in your org. See [Set Up Contacts to Multiple Accounts](https://help.salesforce.com/s/articleView?id=sales.shared_contacts_set_up.htm&type=5&language=en_US "HTML (New Window)").

```

```

## Merge Considerations

When merging sObject records, consider these rules and guidelines:

-   Only leads, contacts, cases, and accounts can be merged. See [sObjects That Don’t Support DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_dml_objects.htm).
-   You can pass a main record and up to two additional sObject records to a single merge method.
-   Field values on the main record, including null and empty field values, always supersede the corresponding field values on the records to be merged. Therefore, if a field value on the main record is empty, the resulting field value remains empty after the merge operation regardless of the field value on the duplicate record. To preserve a field value from a duplicate record, manually set this field value on the main record before performing the merge.
-   External ID fields can’t be used with merge.