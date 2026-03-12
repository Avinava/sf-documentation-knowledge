---
title: "Skinny Tables"
domain: salesforce-large-data-volumes-bp
topic: skinny-tables
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:42.019Z
estimatedTokens: 804
keywords: [Skinny, Tables, Salesforce, contain, frequently, avoid, joins, improve, performance, certain, read-only, operations, kept, sync, their]
---

# Skinny Tables

> Salesforce can create skinny tables to contain frequently used fields and to
      avoid joins. This can improve the performance of certain read-only operations. Skinny tables
      are kept in sync with their source tables when the source tables are modified.

# Skinny Tables

Salesforce can create skinny tables to contain frequently used fields and to avoid joins. This can improve the performance of certain read-only operations. Skinny tables are kept in sync with their source tables when the source tables are modified.

If you want to use skinny tables, contact Salesforce Customer Support. When enabled, skinny tables are created and used automatically where appropriate. You can’t create, access, or modify skinny tables yourself. If the report, list view, or query you’re optimizing changes—for example, to add new fields—you’ll need to contact Salesforce to update your skinny table definition.

## How Skinny Tables Can Improve Performance

For each object table that’s visible to you, Salesforce maintains other, separate tables at the database level for standard and custom fields. This separation, which is invisible to customers, ordinarily requires a join when a query contains both kinds of fields. A skinny table contains both kinds of fields and also omits soft-deleted records.

This table shows an Account view, a corresponding database table, and a skinny table that can speed up Account queries.

![Skinny Table to Speed up Account Queries](/docs/resources/img/en-us/260.0?doc_id=cce%2Fldv_deployments%2Fimages%2Fldv_deployments_skinny_table.png&folder=salesforce_large_data_volumes_bp)

Read-only operations that reference only fields in a skinny table don’t require an extra join, and can consequently perform better. Skinny tables are most useful with tables containing millions of records to improve the performance of read-only operations, such as reports.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_large_data_volumes_bp)

#### Important

Skinny tables aren’t a magic wand to wave at performance problems. There’s overhead in maintaining separate tables that hold copies of live data. Using them in an inappropriate context can lead to performance degradation instead of improvement.

Skinny tables can be created on custom objects, and on Account, Contact, Opportunity, Lead, and Case objects. They can enhance performance for reports, list views, and SOQL.

Skinny tables can contain the following types of fields.

-   Checkbox
-   Currency
-   Date
-   Date and time
-   Email
-   Number
-   Percent
-   Phone
-   Picklist (multi-select)
-   Text
-   Text area
-   Text area (long)
-   URL

Skinny tables and skinny indexes can also contain encrypted data.

Here is an example of how a skinny table can speed up queries. Instead of using a date range like 01/01/11 to 12/31/11—which entails an expensive, repeated computation to create an annual or year-to-date report—you can use a skinny table to include a Year field and to filter on Year = '2011'.

## Considerations

-   Skinny tables can contain a maximum of 200 columns.
-   Skinny tables can’t contain fields from other objects.
-   For Full sandboxes: Skinny tables are copied to your Full sandbox orgs.

    For other types of sandboxes: Skinny tables aren’t copied to your sandbox organizations. To have production skinny tables activated for sandbox types other than Full sandboxes, contact Salesforce Customer Support.
