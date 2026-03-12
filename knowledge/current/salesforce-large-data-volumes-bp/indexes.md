---
title: "Indexes"
domain: salesforce-large-data-volumes-bp
topic: indexes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:42.010Z
estimatedTokens: 2062
keywords: [Indexes, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any, effect, customer, implementations]
---

# Indexes

> Where possible, we changed noninclusive terms to align with our company
        value of Equality. We maintained certain terms to avoid any effect on customer
        implementations.

# Indexes

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_large_data_volumes_bp)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Salesforce supports custom indexes to speed up queries. You can create custom indexes by contacting Salesforce Customer Support or by deploying a custom index XML file via the [Metadata API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_large_data_volumes_bp)

#### Note

The custom indexes that Salesforce Customer Support creates in your production environment are copied to all sandboxes that you create from that production environment.

The platform maintains indexes on the following fields for most objects.

-   RecordTypeId
-   Division
-   CreatedDate
-   Systemmodstamp (LastModifiedDate)
-   Name
-   Email (for contacts and leads)
-   Foreign key relationships (lookups and master-detail)
-   The unique Salesforce record ID, which is the primary key for each object

Salesforce also supports custom indexes on custom fields, except for text areas (long), text areas (rich), non-deterministic formula fields, and encrypted text fields.

External IDs cause an index to be created on that field. The query optimizer then considers those fields.

You can create External IDs only on the following fields.

-   Auto Number
-   Email
-   Number
-   Text

To create custom indexes for other field types, including standard fields, contact Salesforce Customer Support.

## Index Tables

The Salesforce multitenant architecture makes the underlying data table for custom fields unsuitable for indexing. To overcome this limitation, the platform creates an index table that contains a copy of the data, along with information about the data types.

![Index table and copy of data](/docs/resources/img/en-us/260.0?doc_id=cce%2Fldv_deployments%2Fimages%2Fldv_deployments_index_table.png&folder=salesforce_large_data_volumes_bp)

The platform builds a standard database index on this index table. The index table places upper limits on the number of records that an indexed search can effectively return.

By default, the index tables don’t include records that are null (records with empty values). You can work with Salesforce Customer Support to create custom indexes that include null rows. Even if you already have custom indexes on your custom fields, you must explicitly enable and rebuild them to get the empty-value rows indexed.

## Standard and Custom Indexed Fields

The query optimizer maintains a table containing statistics about the distribution of data in each index. It uses this table to perform pre-queries to determine whether using the index can speed up the query.

For example, assume that the Account object has a field called Account\_Type—which can take the value Large, Medium, or Small—and that the field has a custom index.

For example, Salesforce generates a query like:

```

```

The query optimizer performs a pre-query to its internal statistics table to determine the number of records with Large in the Account\_Type field. If this number exceeds 10% of the object’s total records or 333,333 records, the query doesn’t use the custom index.

The query optimizer determines what an index is used with.

Standard Indexed Fields

Used if the filter matches less than 30% of the first million records and less than 15% of additional records, up to a maximum of one million records.

For example, a standard index is used if:

-   A query is executed against a table with 2 million records, and the filter matches 450,000 or fewer records.
-   A query is executed against a table with 5 million records, and the filter matches 900,000 or fewer records.

Custom Indexed Fields

Used if the filter matches less than 10% of the total records, up to a maximum of 333,333 records.

For example, a custom index is used if:

-   A query is executed against a table with 500,000 records, and the filter matches 50,000 or fewer records.
-   A query is executed against a table with 5 million records, and the filter matches 333,333 or fewer records.

If the criteria for an indexed field aren’t met, only that index is excluded from the query. If they are in the WHERE clause and meet the thresholds for records, other indexes are sometimes used.

The query optimizer uses similar considerations to determine whether to use indexes when the WHERE clause contains AND, OR, or LIKE.

-   For AND, the query optimizer uses the indexes unless one of them returns more than 20% of the object’s records or 666,666 total records.
-   For OR, the query optimizer uses the indexes unless they all return more than 10% of the object’s records or 333,333 total records.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_large_data_volumes_bp)

    #### Note

    All fields in the OR clause must be indexed for any index to be used.

-   For LIKE, the query optimizer doesn’t use its internal statistics table. Instead, it samples up to 100,000 records of actual data to decide whether to use the custom index.

Custom indexes can be created on deterministic formula fields. Because some values vary over time or change when a transaction updates a related entity, the platform can’t index non-deterministic formulas.

Here are examples of things that make formula fields non-deterministic.

Non-deterministic formula fields can:

-   Reference other entities (like fields accessible through lookup fields)
-   Include other formula fields that span over other entities
-   Use dynamic date and time functions (for example, TODAY and NOW)

These formula fields are also considered non-deterministic

-   Owner, autonumber, divisions, or audit fields (except for CreatedDate and CreatedByID fields
    -   References to fields that Lightning Platform can’t index
    -   Multi-select picklists
    -   Currency fields in a multicurrency organization
    -   Long text area fields
    -   Binary fields (blob, file, or encrypted text)
-   Standard fields with special functionalities
    -   Opportunity: Amount, TotalOpportunityQuantity, ExpectedRevenue, IsClosed, IsWon
    -   Case: ClosedDate, IsClosed
    -   Product: ProductFamily, IsActive, IsArchived
    -   Solution: Status
    -   Lead: Status
    -   Activity: Subject, TaskStatus, TaskPriority

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_large_data_volumes_bp)

#### Note

If the formula is modified after the index is created, the index is rebuilt.

Cross-object indexes are typically used if specified using the cross-object notation, as they are in the following example.

```

```

You can use this approach to replace formula fields that can’t be custom-indexed because they reference other objects. As long as the referenced field is indexed, the cross-object notation can have multiple levels.

## Two-Column Custom Indexes

Two-column custom indexes are a specialized feature of the Salesforce platform. They’re useful for list views and situations where you want to use one field to select records to display and another field to sort them. For example, an Account list view that selects by State and sorts by City can use a two-column index with State in the first column and City in the second.

When a combination of two fields is a common filter in the query string, two-column indexes typically help you sort and display records. For example, for the following SOQL, which appears in pseudo code, a two-column index on f1\_\_c,f2\_\_c is more efficient than single indexes on f1\_\_c and f2\_\_c.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_large_data_volumes_bp)

#### Note

Two-column indexes are subject to the same restrictions as single-column indexes, with one exception. Two-column indexes can have nulls in the second column, whereas single-column indexes can’t unless Salesforce Customer Support explicitly enabled the option to include nulls.

## Code Examples

```
SELECT *
FROM Account
WHERE Account_Type__c = 'Large'
```

```
SELECT Id
FROM Score__c
WHERE CrossObject1__r.CrossObject2__r.IndexedField__c
```

```
SELECT Name
FROM Account
WHERE f1__c = 'foo'
     AND f2__c = 'bar'
```
