---
title: "Relationships Among Standard Objects and Fields"
domain: object-reference
topic: relationships-among-standard-objects-and-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.228Z
estimatedTokens: 1308
keywords: [Relationships, Among, Standard, Objects, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any]
---

# Relationships Among Standard Objects and Fields

> Where possible, we changed noninclusive terms to align with our company
      value of Equality. We maintained certain terms to avoid any effect on customer
      implementations.

# Relationships Among Standard Objects and Fields

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Relationships associate objects with other objects. For example, a relationship can link a custom object to standard object in a related list, such as linking a custom object called Issues to cases to track product defects associated with customer cases. To view the parent and child relationships among standard objects, see the ERD diagrams in [Data Model](atlas.en-us.object_reference.meta/object_reference/data_model.htm "Entity relationship diagrams (ERDs) for standard Salesforce objects illustrate important relationships between objects. Salesforce ERDs use crow’s foot notation.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

-   You can use parent-child relationships in SOQL queries. For more information, see Relationship Queries in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").
-   Only lookup, external lookup, and indirect lookup relationships are available for external objects. No other relationship types are supported. See Salesforce Help: External Object Relationships.

You can define different types of relationships by creating custom relationship fields on an object. The differences between relationship types include how they handle data deletion, record ownership, security, and required fields in page layouts:

-   **Master-Detail (1:n)** — A parent-child relationship where the master object controls certain behaviors of the detail object.

    -   When a record of the master object is deleted, its related detail records are also deleted.
    -   The Owner field on the detail object isn’t available and is automatically set to the owner of its associated master record. Custom objects on the detail side of a master-detail relationship can’t have sharing rules, manual sharing, or queues, because these elements require the Owner field.
    -   The detail record inherits the sharing and security settings of its master record.
    -   The master-detail relationship field is required on the page layout of the detail record.
    -   By default, records can’t be reparented in master-detail relationships. But administrators can allow child records in master-detail relationships on custom objects to be reparented to different parent records by selecting the Allow reparenting option in the master-detail relationship definition.

    You can define master-detail relationships between custom objects or between a custom object and a standard object. But the standard object can’t be on the detail side of a relationship with a custom object. And you can’t create a master-detail relationship where these standard objects are the primary object.

    -   BusinessHours
    -   Idea
    -   Lead
    -   OrderItem
    -   PriceBook2
    -   Product2
    -   QuoteLineItem
    -   User

    When you define a master-detail relationship, the custom object that you’re working on is the detail side. Its data can appear as a custom related list on page layouts for the other object.

-   **Many-to-many** — You can use master-detail relationships to model many-to-many relationships between any two objects. A many-to-many relationship allows each record of one object to be linked to multiple records from another object and vice versa. For example, you create a custom object called Issue that relates to the standard Case object. In this example, an issue could be related to multiple cases and a case could also be related to multiple issues. To create a many-to-many relationship, simply create a custom junction object with two master-detail relationship fields, each linking to the objects that you want to relate.

    Custom objects with two master-detail relationships are supported in API version 11.0 and later.

    Starting in API version 34.0, the JunctionIdList field type lets you manipulate the many-to-many relationship of an entity directly. You no longer manipulate underlying junction entity records. JunctionIdList fields can be queried and updated like any other field on the entity. Queries or updates to JunctionIdList fields act as queries or updates to the underlying junction entity records. Fields of type JunctionIdList appear in the WSDL as an unbounded array of type ID. JunctionIdList is implemented in the Task and Event objects. All JunctionIdLists are read-only in Apex. Attempting to set a new value on an existing object will result in an exception.

-   **Lookup (1:n)** — This type of relationship links two objects, but has no effect on deletion or security. Unlike master-detail fields, lookup fields aren’t automatically required. When you define a lookup relationship, data from one object can appear as a custom related list on page layouts for the other object.

To create relationships, use the user interface or Salesforce Metadata API.

## Related Topics

- Data Model (atlas.en-us.object_reference.meta/object_reference/data_model.htm)
