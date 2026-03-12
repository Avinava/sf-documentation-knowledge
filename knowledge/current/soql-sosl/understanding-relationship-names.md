---
title: "Understanding Relationship Names"
domain: soql-sosl
topic: understanding-relationship-names
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.601Z
estimatedTokens: 839
keywords: [Understanding, Relationship, Parent-to-child, child-to-parent, relationships, exist, objects, Account, parent, Contact]
---

# Understanding Relationship Names

> Parent-to-child and child-to-parent relationships exist between many types of objects.
  For example, Account is a parent of Contact.

# Understanding Relationship Names

Parent-to-child and child-to-parent relationships exist between many types of objects. For example, Account is a parent of Contact.

![If Account is the parent and Contact is the child, the parent-to-child relationship name is Contacts and the child-to-parent relationship name is Account.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsoql_sosl%2Fimages%2Frel_basic.png&folder=soql_sosl)

To be able to traverse these relationships for standard objects, a relationship name is given to each relationship. The form of the name is different, depending on the direction of the relationship:

-   For child-to-parent relationships, the relationship name to the parent is the name of the foreign key, and there is a relationshipName property that holds the reference to the parent object. For example, the Contact child object has a child-to-parent relationship to the Account object, so the value of relationshipName in Contact is Account. These relationships are traversed by specifying the parent using dot notation in the query, for example:

    ```

    ```

    This query returns the first names of all the contacts in the organization, and for each contact, the account name associated with (parent of) that contact.

-   For parent-to-child relationships, the parent object has a name for the child relationship that is unique to the parent, the plural of the child object name. For example, Account has child relationships to Assets, Cases, and Contacts among other objects, and has a relationshipName for each, Assets, Cases, and Contacts.These relationships can be traversed only in the SELECT clause, using a nested SOQL query. For example:

    ```

    ```

    This query returns all accounts, and for each account, the first and last name of each contact associated with (the child of) that account.


![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=soql_sosl)

#### Warning

You must use the correct naming convention and SELECT syntax for the direction of the relationship. For information about how to discover relationship names via your organization's WSDL or describeSObjects(), see [Identifying Parent and Child Relationships](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_parent_child.htm#sforce_api_calls_soql_relationships_parent_child "Identify parent-child relationships by viewing Entity Relationship Diagrams (ERD) or by examining the enterprise WSDL for your organization."). There are limitations on relationship queries depending on the direction of the relationship. See [Understanding Relationship Query Limitations](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm#sforce_api_calls_soql_relationships_query_limits "When you design SOQL relationship queries, there are several limitations to consider.") for more information.

Relationship names are different for custom objects, though the SELECT syntax is the same. See [Identifying Parent and Child Relationships](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_parent_child.htm#sforce_api_calls_soql_relationships_parent_child "Identify parent-child relationships by viewing Entity Relationship Diagrams (ERD) or by examining the enterprise WSDL for your organization.") for more information.

## Code Examples

```
SELECT Contact.FirstName, Contact.Account.Name from Contact
```

```
SELECT Account.Name, (SELECT Contact.FirstName, Contact.LastName FROM Account.Contacts) FROM Account
```

## Related Topics

- Identifying Parent and Child Relationships (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_parent_child.htm)
- Understanding Relationship Query Limitations (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm)
