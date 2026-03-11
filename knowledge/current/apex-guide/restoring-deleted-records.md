---
title: "Restoring Deleted Records"
domain: apex-guide
topic: restoring-deleted-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.080Z
keywords: [Restoring, Deleted, Records, Example, Note, Undelete, Considerations, See]
---

# Restoring Deleted Records

# Restoring Deleted Records

After you have deleted records, the records are placed in the Recycle Bin for 15 days, after which they are permanently deleted. While the records are still in the Recycle Bin, you can restore them using the undelete operation. If you accidentally deleted some records that you want to keep, restore them from the Recycle Bin.

## Example

The following example undeletes an account named 'Universal Containers'. The ALL ROWS keyword queries all rows for both top level and aggregate relationships, including deleted records and archived activities.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For more information on processing DmlExceptions, see [Bulk DML Exception Handling](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).

## Undelete Considerations

Note the following when using the undelete statement.

-   You can undelete records that were deleted as the result of a merge. However, the merge reparents the child objects, and that reparenting can’t be undone.
-   To identify deleted records, including records deleted as a result of a merge, use the ALL ROWS parameters with a SOQL query.
-   See [Referential Integrity When Deleting and Restoring Records](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_delete.htm#referential_integrity).

#### See Also

-   [Querying All Records with a SOQL Statement](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm)