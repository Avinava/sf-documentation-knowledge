---
title: "Relating Records by Using an External ID"
domain: apex-guide
topic: relating-records-by-using-an-external-id
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.647Z
estimatedTokens: 408
keywords: [Relating, Records, External, Add, custom, parent, record, Associating, alternative, another, relationship, master-detail, lookup, defined, objects]
---

# Relating Records by Using an External ID

> Add related records by using a custom external ID field on the parent record.
  Associating records through the external ID field is an alternative to using the record ID. You
  can add a related record to another record only if a relationship (such as master-detail or
  lookup) has been defined for the objects involved.

# Relating Records by Using an External ID

Add related records by using a custom external ID field on the parent record. Associating records through the external ID field is an alternative to using the record ID. You can add a related record to another record only if a relationship (such as master-detail or lookup) has been defined for the objects involved.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This example relates a new opportunity to an existing account. The Account sObject has a custom field marked as External ID. An opportunity record is associated to the account record through the custom External ID field. The example assumes that:

-   The Account sObject has an external ID field of type text and named MyExtID
-   An account record exists where MyExtID\_\_c = ‘SAP111111’

Before the new opportunity is inserted, the account record is added to this opportunity as an sObject through the Opportunity.Account relationship field.

```

```

The previous example performs an insert operation, but you can also relate sObjects through external ID fields when performing updates or upserts. If the parent record doesn’t exist, you can create it with a separate DML statement or by using the same DML statement as shown in [Creating Parent and Child Records in a Single Statement Using Foreign Keys](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_foreign_keys.htm).

## Code Examples

```apex
Opportunity newOpportunity = new Opportunity(
    Name='OpportunityWithAccountInsert',
    StageName='Prospecting',
    CloseDate=Date.today().addDays(7));

// Create the parent record reference.
// An account with external ID = 'SAP111111' already exists.
// This sObject is used only for foreign key reference
// and doesn't contain any other fields.
Account accountReference = new Account(
    MyExtID__c='SAP111111');                

// Add the account sObject to the opportunity.
newOpportunity.Account = accountReference;

// Create the opportunity.
Database.SaveResult results = Database.insert(newOpportunity);
```

## Related Topics

- Creating Parent and Child Records in a Single Statement Using Foreign Keys (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_foreign_keys.htm)
