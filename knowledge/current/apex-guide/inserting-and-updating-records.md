---
title: "Inserting and Updating Records"
domain: apex-guide
topic: inserting-and-updating-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.073Z
keywords: [Inserting, Updating, Records, Important, Related]
---

# Inserting and Updating Records

# Inserting and Updating Records

Using DML, you can insert new records and commit them to the database. Similarly, you can update the field values of existing records.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This example inserts three account records and updates an existing account record. First, three Account sObjects are created and added to a list. An insert statement bulk inserts the list of accounts as an argument. Then, the second account record is updated, the billing city is updated, and the update statement is called to persist the change in the database.

```

```

## Inserting Related Records

You can insert records related to existing records if a relationship has already been defined between the two objects, such as a lookup or master-detail relationship. A record is associated with a related record through a foreign key ID. For example, when inserting a new contact, you can specify the contact’s related account record by setting the value of the AccountId field.

This example adds a contact to an account (the related record) by setting the AccountId field on the contact. Contact and Account are linked through a lookup relationship.

```

```

## Updating Related Records

Fields on related records can't be updated with the same call to the DML operation and require a separate DML call. For example, if inserting a new contact, you can specify the contact's related account record by setting the value of the AccountId field. However, you can't change the account's name without updating the account itself with a separate DML call. Similarly, when updating a contact, if you also want to update the contact’s related account, you must make two DML calls. The following example updates a contact and its related account using two update statements.

```

```

-   **[Relating Records by Using an External ID](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_nested_object.htm)**  
    Add related records by using a custom external ID field on the parent record. Associating records through the external ID field is an alternative to using the record ID. You can add a related record to another record only if a relationship (such as master-detail or lookup) has been defined for the objects involved.
-   **[Creating Parent and Child Records in a Single Statement Using Foreign Keys](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_foreign_keys.htm)**