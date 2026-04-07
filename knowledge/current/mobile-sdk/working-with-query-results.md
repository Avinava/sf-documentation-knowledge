---
title: "Working with Query Results"
domain: mobile-sdk
topic: working-with-query-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.609Z
estimatedTokens: 716
keywords: [Working, Query, Results, Mobile, SDK, mechanisms, platform, let, access, efficiently, flexibly, dynamically]
---

# Working with Query Results

> Mobile SDK provides
  mechanisms on each platform that let you access query results efficiently, flexibly, and
  dynamically.

# Working with Query Results

Mobile SDK provides mechanisms on each platform that let you access query results efficiently, flexibly, and dynamically.

Often, a query returns a result set that is too large to load all at once into memory. In this case, Mobile SDK initially returns a small subset of the results—a single page, based on a size that you specify. You can then retrieve more pages of results and navigate forwards and backwards through the result set.

**JavaScript:**

When you perform a query in JavaScript, SmartStore returns a cursor object that lets you page through the query results. Your code can move forward and backwards through the cursor’s pages. To navigate through cursor pages, use the following functions.

-   navigator.smartstore.moveCursorToPageIndex(cursor, newPageIndex, successCallback, errorCallback)—Move the cursor to the page index given, where 0 is the first page, and totalPages - 1 is the last page.
-   navigator.smartstore.moveCursorToNextPage(cursor, successCallback, errorCallback)—Move to the next entry page if such a page exists.
-   navigator.smartstore.moveCursorToPreviousPage(cursor, successCallback, errorCallback)—Move to the previous entry page if such a page exists.
-   navigator.smartstore.closeCursor(cursor, successCallback, errorCallback)—Close the cursor when you’re finished with it.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   The successCallback function accepts one argument: the updated cursor.
-   Cursors are not static snapshots of data—they are dynamic. The only data the cursor holds is the original query and your current position in the result set. When you move your cursor, the query runs again. If you change the soup while paging through the cursor, the cursor shows those changes. You can even access newly created soup entries, assuming they satisfy the original query.

**iOS native:**

Internally, iOS native apps use the third-party FMResultSet class to obtain query results. When you call a SmartStore query spec method, use the pageSize parameter to control the amount of data that you get back from each call. To traverse pages of results, iteratively call the queryWithQuerySpec:pageIndex:withDB: or queryWithQuerySpec:pageIndex:error: method of the SFSmartStore class with the same query spec object while incrementing or decrementing the zero-based pageIndex argument.

**Android native:**

Internally, Android native apps use the android.database.Cursor interface for cursor manipulations. When you call a SmartStore query spec method, use the pageSize parameter to control the amount of data that you get back from each call. To traverse pages of results, iteratively call the SmartStore.query() method with the same query spec object while incrementing or decrementing the zero-based pageIndex argument.
