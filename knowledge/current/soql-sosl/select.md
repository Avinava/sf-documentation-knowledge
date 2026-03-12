---
title: "SELECT"
domain: soql-sosl
topic: select
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.703Z
estimatedTokens: 1698
keywords: [SELECT, SOQL, query, consists, statement, fieldList, separated, commas, want, retrieve, Usage, Support, Bounded, Unbounded, Queries]
---

# SELECT

> SOQL query syntax consists of a required SELECT
		statement that specifies the fields to query. The fieldList in the SELECT statement specifies the list of one or more fields, separated by
		commas, that you want to retrieve.

# SELECT

SOQL query syntax consists of a required SELECT statement that specifies the fields to query. The fieldList in the SELECT statement specifies the list of one or more fields, separated by commas, that you want to retrieve.

```

```

Use the FIELDS() keyword in the fieldList to select groups of fields without knowing their names in advance. This keyword simplifies SELECT statements, avoids the need for multiple API calls, and provides a low-code method to explore the data in your org. This keyword is available in API version 51.0 and later.

Using a field list in a SOQL SELECT statement (for example, SELECT Id, Name FROM Account) can be complicated if you need to retrieve many fields. And if you don’t know what fields an object has, you must first get a description of the object. Typically, you use a call to first get a description of the object, then parse the description to identify the fields. Then you construct a SOQL query that specifies the fields, and then make another call to submit the query.

To simplify this process, the FIELDS() keyword lets you select fields easily, without knowing their names in advance. The FIELDS() keyword eliminates the need for a round trip to the server to prepare a SOQL statement, simplifies query statements, and makes it much easier to explore the shape of your objects. It also helps avoid exceeding the character limits on SOQL queries and the URI length limit for REST calls.

You can include any of these in the field list:

-   FIELDS(ALL)—select all the fields of an object.
-   FIELDS(CUSTOM)—select all the custom fields of an object.
-   FIELDS(STANDARD)—select all the standard fields of an object.

In each case, FIELDS() respects field-level security so it only shows the fields that you have permission to access.

## Usage

You can use FIELDS() as the complete field list. For example:

-   SELECT FIELDS(ALL) FROM Account LIMIT 200
-   SELECT FIELDS(CUSTOM) FROM Account LIMIT 200
-   SELECT FIELDS(STANDARD) FROM Account

You can also use FIELDS() with other field names in the field list. For example:

-   SELECT Name, Id, FIELDS(CUSTOM) FROM Account LIMIT 200
-   SELECT someCustomField\_\_c, FIELDS(STANDARD) FROM Account

The FIELDS() keyword can also be used in subqueries. For example:

```

```

The API returns an error if the SELECT statement results in any duplicated field names. For example, this query:

```

```

gives this error:

```

```

## Support for FIELDS()

The FIELDS() keyword is supported in these platform features.

-   Apex
-   The SOQL language wherever query or queryAll operations can be executed.
-   Query jobs in Bulk API 2.0.
-   The Salesforce CLI.
-   The /query and /queryAll resources in the Lightning Platform REST API.
-   The query() and queryAll() operations in the Lightning Platform SOAP API.

When building SOAP API integrations, take care when adopting FIELDS() with grouping options STANDARD, CUSTOM, and ALL.Any change to an org’s object model (such as admin modification, feature enablement, or update via major release) must be immediately reflected in the enterprise WSDL. Otherwise, an error is thrown as the query operation returns a result that doesn’t match the contract with the client.

## Bounded and Unbounded Queries

The API distinguishes *bounded* queries, which have well-defined sets of fields, from *unbounded* queries, which have sets of fields that the API can’t determine in advance. For example, because the number of custom fields for an object isn’t predetermined, FIELDS(CUSTOM) and FIELDS(ALL) are considered unbounded. This table shows the support for FIELDS() in bounded and unbounded queries:

|  | Bounded – FIELDS(STANDARD) | Unbounded – FIELDS(ALL) and FIELDS(CUSTOM) |
| --- | --- | --- |
| Apex (inline and dynamic) | Supported | Not supported |
| Bulk API 2.0 | Supported | Not supported |
| CLI | Supported | Supported only if the result rows are limited. |
| SOAP API and REST API | Supported | Supported only if the result rows are limited. |

## Limiting Result Rows

To limit the result rows, you can add any of these limits to the query:

-   LIMIT n where n is less than or equal to 200. For example:

    ```

    ```

-   WHERE Id IN idList where idList is list of up to 200 IDs. For example:

    ```

    ```

-   WHERE Id IS idList where idList is a list of up to 200 ID tests joined with boolean operators. For example:

    ```

    ```


## Salesforce CLI Example

This example uses FIELDS() with the Salesforce CLI:

```

```

This example assumes that the CLI is updated to work with version 51.0 or later of the API.

## REST API Example

This request uses FIELDS() with /query in REST API:

```

```

## SOAP API Example

This example uses FIELDS() with query() in SOAP API:

```

```

## Bulk API 2.0 Example

This request uses FIELDS() when creating a bulk query job:

```

```

## Considerations for FIELDS()

Keep these considerations in mind when using the FIELDS() keyword.

-   If you already know which fields you want to retrieve, you’ll get better performance by specifying them explicitly rather than using FIELDS() and retrieving more fields than you need.

-   FIELDS() can cause errors if you use it with operators that require aggregation.

    -   For example, without FIELDS() this query works correctly:

        SELECT Id, MIN(NumberOfEmployees) FROM Account GROUP BY Id

        But adding FIELDS() to the query

        SELECT FIELDS(ALL), MIN(NumberOfEmployees) FROM Account GROUP BY Id LIMIT 200

        results in a “Field must be grouped or aggregated” error because it’s equivalent to

        SELECT IsDeleted, *<etc.>,*MIN(NumberOfEmployees) FROM Account GROUP BY Id LIMIT 200.

-   If FIELDS() returns a large amount of data, use one of these methods to retrieve all the pages of results:

    -   In SOQL, if you use OFFSET and LIMIT in your query, the number of records returned may be less than LIMIT. Check the number of results that were returned and adjust OFFSET, as required. Do not just increment OFFSET by LIMIT.

    -   In Bulk API 2.0, use the Sforce-Locator response header that is returned in the job’s results.

    -   In REST API, use the nextRecordsUrl that is returned by /query and /queryAll.

    -   In SOAP API, use queryMore().

-   If you use SELECT FIELDS(CUSTOM) on an object that doesn’t have any custom fields, the query results in an error.

    ```

    ```

    If there are any fields included in the field list , there’s no error. For example, this query returns status code 200 even if the object contains no custom fields.

    ```

    ```

-   The list of fields returned by FIELDS() reflects the current state of the org's metadata and data model. Any changes to your org’s metadata or data model affects query performance and results.

## Code Examples

```
SELECT fieldList [subquery][...]
```

```
SELECT
   Account.Name, 
   (SELECT FIELDS(ALL) FROM Account.Contacts LIMIT 200)
FROM Account
```

```
SELECT Id, FIELDS(ALL) FROM User LIMIT 200
```

```
HTTP/1.1 400 Bad Request
[
   {
      "message" : "duplicate field selected: Id",
      "errorCode" : "INVALID_FIELD"
   }
]
```

```
SELECT FIELDS(ALL) FROM Contact LIMIT 200
```
