---
title: "Retrieving Data from a Soup"
domain: mobile-sdk
topic: retrieving-data-from-a-soup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.992Z
estimatedTokens: 3087
keywords: [Retrieving, Soup, SmartStore, helper, build, query, strings, Everything, Smart, SQL, SELECT, Statement, Exact, Match, Range, Executing, Narrowing, Subset, Individual, Entries, Primary, Key]
---

> SmartStore provides a set of helper methods that build query strings for you.

# Retrieving Data from a Soup

SmartStore provides a set of helper methods that build query strings for you.

For retrieving data from a soup, SmartStore provides helper functions that build query specs for you. A query spec is similar to an index spec, but contains more information about the type of query and its parameters. Query builder methods produce specs that let you query:

-   Everything (”all” query)
-   Using a Smart SQL
-   For exact matches of a key (”exact” query)
-   For full-text search on given paths (”match” query)
-   For a range of values (”range” query)
-   For wild-card matches (”like” query)

To query for a set of records, call the query spec factory method that suits your specifications. You can optionally define the index field, sort order, and other metadata to be used for filtering, as described in the following table:

| Parameter | Description |
| --- | --- |
| selectPaths or withSelectPaths | (Optional in JavaScript) Narrows the query scope to only a list of fields that you specify. See Narrowing the Query to Return a Subset of Fields. |
| indexPath or path | Describes what you’re searching for; for example, a name, account number, or date. |
| beginKey | (Optional in JavaScript) Used to define the start of a range query. |
| endKey | (Optional in JavaScript) Used to define the end of a range query. |
| matchKey | (Optional in JavaScript) Used to specify the search string in an exact or match query. |
| orderPath | (Optional in JavaScript—defaults to the value of the path parameter) For exact, range, and like queries, specifies the indexed path field to be used for sorting the result set. To query without sorting, set this parameter to a null value.NoteMobile SDK versions 3.2 and earlier sort all queries on the indexed path field specified in the query. |
| order | (Optional in JavaScript)JavaScript: Either “ascending” (default) or “descending.”iOS: Either kSFSoupQuerySortOrderAscending or kSFSoupQuerySortOrderDescending.Android: Either Order.ascending or Order.descending. |
| pageSize | (Optional in JavaScript. If not present, the native plug-in calculates an optimal value for the resulting Cursor.pageSize) Number of records to return in each page of results. |

For example, consider the following buildRangeQuerySpec() JavaScript call:

```

```

This call builds a range query spec that finds entries with names between Aardvark and Zoroastrian, sorted on the name field in ascending order:

```

```

In JavaScript build\* functions, you can omit optional parameters only at the end of the function call. You can’t skip one or more parameters and then specify the next without providing a dummy or null value for each option you skip. For example, you can use these calls:

-   buildAllQuerySpec(indexPath)
-   buildAllQuerySpec(indexPath, order)
-   buildAllQuerySpec(indexPath, order, pageSize)
-   buildAllQuerySpec(indexPath, order, pageSize, selectPaths)

However, you can’t use this call because it omits the order parameter:

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

All parameterized queries are single-predicate searches. Only Smart SQL queries support joins.

## Query Everything

Traverses everything in the soup.

See [Working with Query Results](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_cursor.htm#offline_cursor "Mobile SDK provides mechanisms on each platform that let you access query results efficiently, flexibly, and dynamically.") for information on page sizes.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

As a base rule, set pageSize to the number of entries you want displayed on the screen. For a smooth scrolling display, you can to increase the value to two or three times the number of entries shown.

**JavaScript:**

buildAllQuerySpec(indexPath, order, pageSize, selectPaths) returns all entries in the soup, with no particular order. order and pageSize are optional, and default to “ascending” and 10, respectively. The selectPaths argument is also optional.

**iOS native:**

```

```

**Android native:**

```

```

## Query with a Smart SQL SELECT Statement

Executes the query specified by the given Smart SQL statement. This function allows greater flexibility than other query factory functions because you provide your own SELECT statement. See [Queries Queries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smart_sql.htm "To exert full control over your queries—or to reuse existing SQL queries—you can define custom SmartStore queries.").

The following sample code shows a Smart SQL query that calls the SQL COUNT function.

**JavaScript:**

```

```

In JavaScript, pageSize is optional and defaults to 10.

**iOS native:**

In Mobile SDK 8.0 and later, the native Swift SmartStore extension provides two ways to run a Smart SQL query.

Swift

In iOS 12.2 or later:

```

```

In iOS 13.0 or later, using Combine Publisher:

```

```

Objective-C

```

```

**Android native:**

```

```

## Query by Exact

Finds entries that exactly match the given matchKey for the indexPath value. You use this method to find child entities of a given ID. For example, you can find opportunities by Status.

**JavaScript:**

In JavaScript, you can set the order parameter to either “ascending” or “descending”. order, pageSize, and orderPath are optional, and default to “ascending”, 10, and the path argument, respectively. The selectPaths argument is also optional.

```

```

The following JavaScript code retrieves children by ID:

```

```

The following JavaScript code retrieves children by parent ID:

```

```

**iOS native:**

In iOS, you can set the order parameter to either kSFSoupQuerySortOrderAscending or kSFSoupQuerySortOrderDescending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the withSelectPaths parameter.

```

```

**Android native:**

In Android, you can set the order parameter to either Order.ascending or Order.descending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the selectPaths parameter.

```

```

## Query by Match

Finds entries that exactly match the full-text search query in matchKey for the indexPath value. See [Using Full-Text Search Queries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_full_text_search.htm "To perform efficient and flexible searches in SmartStore, you use full-text queries. Full-text queries yield significant performance advantages over “like” queries when you’re dealing with large data sets.").

**JavaScript:**

In JavaScript, you can set the order parameter to either “ascending” or “descending”. order, pageSize, and orderPath are optional, and default to “ascending”, 10, and the path argument, respectively. The selectPaths argument is also optional.

```

```

**iOS native:**

In iOS, you can set the order parameter to either kSFSoupQuerySortOrderAscending or kSFSoupQuerySortOrderDescending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the withSelectPaths parameter.

```

```

**Android native:**

In Android, you can set the order parameter to either Order.ascending or Order.descending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the selectPaths parameter.

```

```

## Query by Range

Finds entries whose indexPath values fall into the range defined by beginKey and endKey. Use this function to search by numeric ranges, such as a range of dates stored as integers.

By passing null values to beginKey and endKey, you can perform open-ended searches:

-   To find all records where the field at indexPath is greater than or equal to beginKey, pass a null value to endKey.
-   To find all records where the field at indexPath is less than or equal to endKey, pass a null value to beginKey.
-   To query everything, pass a null value to both beginKey and endKey.

**JavaScript:**

In JavaScript, you can set the order parameter to either “ascending” or “descending”. order, pageSize, and orderPath are optional, and default to “ascending”, 10, and the path argument, respectively. The selectPaths argument is also optional.

```

```

**iOS native:**

In iOS, you can set the order parameter to either kSFSoupQuerySortOrderAscending or kSFSoupQuerySortOrderDescending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the withSelectPaths parameter.

```

```

**Android native:**

In Android, you can set the order parameter to either Order.ascending or Order.descending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the selectPaths parameter.

```

```

## Query by Like

Finds entries whose indexPath values are like the given likeKey. You can use the “%” wild card to search for partial matches as shown in these syntax examples:

-   To search for terms that begin with your keyword: “foo%”
-   To search for terms that end with your keyword: “%foo”
-   To search for your keyword anywhere in the indexPath value: “%foo%”

. Use this function for general searching and partial name matches. Use the query by “match” method for full-text queries and fast queries over large data sets.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Query by “like” is the slowest query method.

**JavaScript:**

In JavaScript, you can set the order parameter to either “ascending” or “descending”. order, pageSize, and orderPath are optional, and default to “ascending”, 10, and the path argument, respectively. The selectPaths argument is also optional.

```

```

**iOS native:**

In iOS, you can set the order parameter to either kSFSoupQuerySortOrderAscending or kSFSoupQuerySortOrderDescending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the withSelectPaths parameter.

```

```

**Android native:**

In Android, you can set the order parameter to either Order.ascending or Order.descending. To narrow the query’s scope to certain fields, use the second form and pass an array of field names through the selectPaths parameter.

```

```

## Executing the Query

In JavaScript, queries run asynchronously and return a cursor to your success callback function, or an error to your error callback function. The success callback takes the form function(cursor). You use the querySpec parameter to pass your query specification to the querySoup method.

```

```

## Narrowing the Query to Return a Subset of Fields

In Smart SQL query specs, you can limit the list of fields that the query returns by specifying the fields in the Smart SQL statement. For other types of query specs, you can do the same thing with the selectPaths parameter. When this argument is used, the method returns an array of arrays that contains an array for each element that satisfies the query. Each element array includes only the fields specified in selectPaths. This parameter is available for “all”, “exact”, “match”, “range”, and “like” query specs.

Here’s an example. Consider a soup that contains elements such as the following:

```

```

Let’s run a “like” query that uses “ab%” as the LIKE key and name as the path. This query returns an array of objects, each of which contains an entire element:

```

```

Now let’s refine the query by adding \_soupEntryId and name as selected paths. The query now returns a more efficient array of arrays with only the \_soupEntryId and name field values:

```

```

## Retrieving Individual Soup Entries by Primary Key

All soup entries are automatically given a unique internal ID (the primary key in the internal table that holds all entries in the soup). That ID field is made available as the \_soupEntryId field in the soup entry.

To look up soup entries by \_soupEntryId in JavaScript, use the retrieveSoupEntries function. This function provides the fastest way to retrieve a soup entry, but it’s usable only when you know the \_soupEntryId:

```

```

The return order is not guaranteed. Also, entries that have been deleted are not returned in the resulting array.

## Code Examples

```
navigator.smartstore.buildRangeQuerySpec(
    "name", "Aardvark", "Zoroastrian", "ascending", 10, "name");
```

```
{
   "querySpec":{
      "queryType":"range",
      "indexPath":"name",
      "beginKey":"Aardvark",
      "endKey":"Zoroastrian",
      "orderPath":"name",
      "order":"ascending",
      "pageSize":10
   }
}
```

```
buildAllQuerySpec(indexPath, pageSize)
```

```
+ (SFQuerySpec*) newAllQuerySpec:(NSString*)soupName 
                        withPath:(NSString*)path 
                       withOrder:(SFSoupQuerySortOrder)order 
                    withPageSize:(NSUInteger)pageSize;

+ (SFQuerySpec*) newAllQuerySpec:(NSString*)soupName 
                 withSelectPaths:(NSArray*)selectPaths 
                   withOrderPath:(NSString*)orderPath 
                       withOrder:(SFSoupQuerySortOrder)order 
                    withPageSize:(NSUInteger)pageSize;
```

```apex
public static QuerySpec buildAllQuerySpec(
    String soupName, 
    String path, 
    Order order, 
    int pageSize)

public static QuerySpec buildAllQuerySpec(
    String soupName, 
    String[] selectPaths, 
    String orderPath, 
    Order order, 
    int pageSize);
```

## Related Topics

- Working with Query Results (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_cursor.htm)
- Queries Queries (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_smart_sql.htm)
- Using Full-Text Search Queries (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_full_text_search.htm)
