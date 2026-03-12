---
title: "Apex Cursors"
domain: apex-guide
topic: apex-cursors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.097Z
estimatedTokens: 1753
keywords: [Apex, Cursors, cursors, break, processing, SOQL, query, result, pieces, processed, within, bounds, single, transaction., provide, ability, work, large, while, actually]
---

# Apex Cursors

> Use Apex cursors to break up the processing of a SOQL query
        result into pieces that can be processed within the bounds of a single transaction. Cursors
        provide you with the ability to work with large query result sets, while not actually
        returning the entire result set. You can traverse a query result in parts, with the
        flexibility to navigate forward and back in the result set. Package developers and advanced
        developers can use cursors to work with high-volume and high-resource processing jobs.
        Cursors combined with chained queueable Apex jobs are a powerful alternative to batch Apex
        and address some of batch Apex’s limitations.

# Apex Cursors

Use Apex cursors to break up the processing of a SOQL query result into pieces that can be processed within the bounds of a single transaction. Cursors provide you with the ability to work with large query result sets, while not actually returning the entire result set. You can traverse a query result in parts, with the flexibility to navigate forward and back in the result set. Package developers and advanced developers can use cursors to work with high-volume and high-resource processing jobs. Cursors combined with chained queueable Apex jobs are a powerful alternative to batch Apex and address some of batch Apex’s limitations.

Apex cursors are stateless and generate results from the offset position that is specified in the Cursor.fetch(integer position, integer count) method. You must track the offsets or positions of the results within your particular processing scenario.

A cursor is created when a SOQL query is executed on a Database.getCursor() or Database.getCursorWithBinds() call. When a Cursor.fetch(integer position, integer count) method is invoked with an offset position and the count of records to fetch, the corresponding rows are returned from the cursor. The maximum number of rows per cursor is 50 million, regardless of whether the operation is synchronous or asynchronous. To get the number of cursor rows returned from the SOQL query, use Cursor.getNumRecords().

Calling the Cursor.fetch() method counts against the SOQL query limit, and the rows fetched count against the SOQL query row limit.

Apex cursors throw these new System exceptions: System.FatalCursorException and System.TransientCursorException. Transactions that fail with System.TransientCursorException can be retried.

## Apex Cursor Example

```

```

## Pagination Cursors

Like a standard Apex cursor, an Apex pagination cursor provides a pointer to a large SOQL query result set. However, an Apex pagination cursor is designed for UI-based pagination, such as multipage record lists.

To create a pagination cursor, call Database.getPaginationCursor() or Database.getPaginationCursorWithBinds() with a SOQL query as an argument. A single Database.PaginationCursor instance can have a maximum of 100,000 rows, regardless of whether the operation is synchronous or asynchronous. This size limit is lower than that of a regular Apex cursor, as pagination cursors are designed for human-readable data.

However, pagination cursors have a higher instance daily limit than that of regular Apex cursors. Whereas standard cursors are limited to 10,000 instances per org per 24-hour period, pagination cursors are limited to 200,000 instances per org per 24-hour period. This higher instance limit supports many users accessing records lists that rely on smaller pagination cursors.

To retrieve a page of rows from a pagination cursor, call PaginationCursor.fetchPage(integer start, integer pageSize). The start parameter is the zero-based index from which to begin fetching rows, and the pageSize is the maximum number of rows to retrieve for this page. The maximum pageSize value is 2000 rows.

Unlike a standard Apex cursor, a pagination cursor retrieves a complete page of records, where record rows deleted after the creation of the cursor are skipped over by default. This way, the number of rows displayed per page is consistent.

For example, let’s say that you create a standard cursor and a pagination cursor on the same SOQL query, where the result set is 100 rows. After the cursors are created, you delete the first five rows in the set, indexed 0-4. If you then call Cursor.fetch(0, 20), only 15 rows are retrieved—rows indexed 5-19. However, if you call PaginationCursor.fetchPage(0, 20), 20 rows are retrieved—rows indexed 5-24. The fetchPage() method automatically skips over the five deleted records so that a complete page is retrieved.

To manage this handling of deleted records, the fetchPage() method returns a Database.CursorFetchResult object instead of only the list of results. The Database.CursorFetchResult object encapsulates the rows retrieved and information for the next pagination call.

-   To retrieve the rows as a list of sObjects, call CursorFetchResult.getRecords().
-   To retrieve the number of deleted rows that the cursor skipped in the fetchPage() operation, call CursorFetchResult.getDeletedRows().
-   To retrieve the next page of results, first call CursorFetchResult.getNextIndex(), and then use the return value as the start parameter in the next fetchPage() call.
-   To determine whether to make subsequent calls to fetchPage(), use the CursorFetchResult.isDone() method. The method returns true if the specified pageSize is reached, which indicates that a full page of results is retrieved. It also returns true if the pagination cursor reaches the end of a result set before the specified pageSize is reached, which indicates that a partial, final page of results is retrieved.

Calling the PaginationCursor.fetchPage() and PaginationCursor.fetchDeleted() methods count against the SOQL query limit, and the rows fetched count against the SOQL query row limit.

Apex pagination cursors throw these System exceptions: System.FatalCursorException and System.TransientCursorException. Transactions that fail with System.TransientCursorException can be retried.

## Cursors and Pagination Cursor Limits

To get limits on Apex cursors and Apex pagination cursors, use these methods in the Limits class.

-   Limits.getApexCursorRows() and its upper bound Limits.getLimitApexCursorRows() method
-   Limits.getFetchCallsOnApexCursor() and its upper bound Limits.getLimitFetchCallsOnApexCursor() method
-   Limits.getApexCursors() and its upper bound Limits.getLimitApexCursors() method
-   Limits.getApexPaginationCursors() and its upper bound Limits.getLimitApexPaginationCursors() method
-   Limits.getApexPaginationCursorRows() and its upper bound Limits.getLimitApexPaginationCursorRows() method

To view transaction and daily limits for Apex cursors and Apex pagination cursors, see [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm).

Apex cursors and pagination cursors have the same expiration limits as API Query cursors. See [API Query Cursor Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apicursors.htm).

## Apex Cursor and Pagination Cursor Limits Example

```

```

#### See Also

-   [*Apex Reference Guide:* Cursor Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Database_Cursor.htm "Apex Reference Guide: Cursor Class - HTML (New Window)")

-   [*Apex Reference Guide:* PaginationCursor Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm "Apex Reference Guide: PaginationCursor Class - HTML (New Window)")

## Code Examples

```apex
public with sharing class QueryChunkingQueueable implements Queueable {
    private Database.Cursor locator;
    private Integer position;

    public QueryChunkingQueueable() {
        locator = Database.getCursor(
            'SELECT Id FROM Contact WHERE LastActivityDate = LAST_N_DAYS:400',
            AccessLevel.USER_MODE);
        position = 0;
    }

    public void execute(QueueableContext ctx) {
        Integer remainingRows = locator.getNumRecords() - position;
        if (remainingRows == 0) {
            return; // Nothing to do
        }

        // Take the minimum of batch size and remaining rows to avoid over-fetching
        Integer fetchSize = Math.min(200, remainingRows);

        List<Contact> scope = locator.fetch(position, 200);
        position += scope.size();
        // do something, like archive or delete the scope list records
        if (position < locator.getNumRecords()) {
            // process the next chunk
            System.enqueueJob(this);
        }
    }
}
```

```apex
// Create a standard cursor
Database.Cursor cursor = Database.getCursor('SELECT Id, Name FROM Account LIMIT 20');
System.debug('Standard Cursors: ' + Limits.getApexCursors() + '/' + Limits.getLimitApexCursors());
System.debug('Standard Cursor Rows: ' + Limits.getApexCursorRows() + '/' + Limits.getLimitApexCursorRows());

// Fetch records
List<Account> batch1 = cursor.fetch(0, 10);
List<Account> batch2 = cursor.fetch(10, 10);

// Create a pagination cursor
Database.PaginationCursor pagCursor = Database.getPaginationCursor('SELECT Id, Name FROM Account LIMIT 15');
System.debug('Pagination Cursors: ' + Limits.getApexPaginationCursors() + '/' + Limits.getLimitApexPaginationCursors());
System.debug('Pagination Cursor Rows: ' + Limits.getApexPaginationCursorRows() + '/' + Limits.getLimitApexPaginationCursorRows());

// Fetch a page
Database.CursorFetchResult page = pagCursor.fetchPage(0, 5);

// Check shared fetch call limit
System.debug('Fetch Calls: ' + Limits.getFetchCallsOnApexCursor() + '/' + Limits.getLimitFetchCallsOnApexCursor());

// Get daily limits map
Map<String, System.OrgLimit> limitMap = OrgLimits.getMap();

// Standard cursor daily limit
System.OrgLimit dailyCursorLimit = limitMap.get('DailyApexCursorLimit');
System.debug('Daily Cursors: ' + dailyCursorLimit.getValue() + '/' + dailyCursorLimit.getLimit());

// Pagination cursor daily limit
System.OrgLimit dailyPCursorLimit = limitMap.get('DailyApexPCursorLimit');
System.debug('Daily Pagination Cursors: ' + dailyPCursorLimit.getValue() + '/' + dailyPCursorLimit.getLimit());

// Shared daily rows limit
System.OrgLimit dailyRowsLimit = limitMap.get('DailyApexCursorRowsLimit');
System.debug('Daily Cursor Rows: ' + dailyRowsLimit.getValue() + '/' + dailyRowsLimit.getLimit());
```
