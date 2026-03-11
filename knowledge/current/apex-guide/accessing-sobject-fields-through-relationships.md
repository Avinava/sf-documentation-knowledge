---
title: "Accessing sObject Fields Through Relationships"
domain: apex-guide
topic: accessing-sobject-fields-through-relationships
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.000Z
keywords: [Accessing, sObject, Fields, Through, Relationships, Note, Tip]
---

# Accessing sObject Fields Through Relationships

# Accessing sObject Fields Through Relationships

sObject records represent relationships to other records with two fields: an ID and an address that points to a representation of the associated sObject. For example, the Contact sObject has both an AccountId field of type ID, and an Account field of type Account that points to the associated sObject record itself.

The ID field can be used to change the account with which the contact is associated, while the sObject reference field can be used to access data from the account. The reference field is only populated as the result of a SOQL or SOSL query (see note).

For example, the following Apex code shows how an account and a contact can be associated with one another, and then how the contact can be used to modify a field on the account:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To provide the most complete example, this code uses some elements that are described later in this guide:

-   For information on insert and update, see [Insert Statement](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_dml_section.htm) and [Update Statement](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_dml_section.htm).

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The expression c.Account.Name, and any other expression that traverses a relationship, displays slightly different characteristics when it is read as a value than when it is modified:

-   When being read as a value, if c.Account is null, then c.Account.Name evaluates to null, but does *not* yield a NullPointerException. This design allows developers to navigate multiple relationships without the tedium of having to check for null values.
-   When being modified, if c.Account is null, then c.Account.Name *does* yield a NullPointerException.

In SOSL, you would access data for the inserted contact in a similar way to the SELECT statement used in the previous SOQL example.

```

```

In addition, the sObject field key can be used with insert, update, or upsert to resolve foreign keys by external ID. For example:

```

```

This inserts a new contact with the AccountId equal to the account with the external\_id equal to ‘12345’. If there is no such account, the insert fails.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

The following code is equivalent to the code above. However, because it uses a SOQL query, it is not as efficient. If this code was called multiple times, it could reach the execution limit for the maximum number of SOQL queries. For more information on execution limits, see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_working_with_results.htm "Working with SOQL and SOSL Query Results")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_foreign_key.htm "Understanding Foreign Key and Parent-Child Relationship SOQL Queries")