---
title: "Understanding Relationship Names, Custom Objects, and Custom Fields"
domain: soql-sosl
topic: understanding-relationship-names-custom-objects-and-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.558Z
estimatedTokens: 625
keywords: [Understanding, Relationship, Custom, Objects, participate, queries, Salesforce, ensures, associated, remain, unique, standard, now, future, Having]
---

# Understanding Relationship Names, Custom Objects, and Custom Fields

> Custom objects can participate in relationship queries. Salesforce ensures that your custom object
    names, custom field names, and the relationship names that are associated with them remain
    unique, even if a standard object with the same name is available now or in the future. Having
    unique relationship queries is important in cases where the query traverses relationships that
    use the object, field, and relationship names.

# Understanding Relationship Names, Custom Objects, and Custom Fields

Custom objects can participate in relationship queries. Salesforce ensures that your custom object names, custom field names, and the relationship names that are associated with them remain unique, even if a standard object with the same name is available now or in the future. Having unique relationship queries is important in cases where the query traverses relationships that use the object, field, and relationship names.

This topic explains how relationship names for custom objects and custom fields are created and used.

When you create a new custom relationship in the Salesforce user interface, you are asked to specify the plural version of the object name, which you use for relationship queries:

![Step 3 of the New Custom Relationship wizard. The Field Label field is set to "Mother of Child" and the Child Relationship Name field is set to "Daughters."](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsoql_sosl%2Fimages%2Fcustom_object1.gif&folder=soql_sosl)

Notice that the Child Relationship Name (parent to child) is the plural form of the child object name, in this case Daughters.

Once the relationship is created, notice that it has an API Name, which is the name of the custom field you created, appended by \_\_c (underscore-underscore-c):

![The detail page for the Mother of Child custom field](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsoql_sosl%2Fimages%2Fcustom_object2.gif&folder=soql_sosl)

When you refer to this field via the API, you must use this special form of the name. This prevents ambiguity in the case where Salesforce can create a standard object with the same name as your custom field. The same process applies to custom objects—when they are created, they have an API Name, the object named appended by \_\_c, which must be used.

When you use a relationship name in a query, you must use the relationship names without the \_\_c. Instead, append an \_\_r (underscore underscore r).

For example:

-   When you use a child-to-parent relationship, you can use dot notation:

    ```

    ```

    This query returns the ID and first name of daughter objects, and the first name of the daughter's mother if the mother's last name begins with 'C.'

-   Parent-to-child relationship queries do not use dot notation:

    ```

    ```

    The example above returns the last name of all mothers, and for each mother returned, the last name of the mother's daughters.

## Code Examples

```
SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c
FROM Daughter__c
WHERE Mother_of_Child__r.LastName__c LIKE 'C%'
```

```
SELECT LastName__c,
  (
    SELECT LastName__c
    FROM Daughters__r
  )
FROM Mother__c
```
