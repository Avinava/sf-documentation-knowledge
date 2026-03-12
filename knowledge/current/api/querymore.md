---
title: "queryMore()"
domain: api
topic: querymore
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.479Z
estimatedTokens: 1152
keywords: [queryMore, Retrieves, batch, query, results, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# queryMore()

> Retrieves the next batch of query results.

# queryMore()

Retrieves the next batch of query results.

## Syntax

```

```

queryMore() requires the queryLocator parameter, the value of which is the query locator id returned in the preceding query().

## Usage

Use this call to get additional results from a query() or a preceding queryMore() call that returns a large number of records. The query() and queryMore() calls can retrieve up to 2,000 records in a batch. If there are more results that can be returned in a single batch, a server-side cursor and a [QueryLocator](atlas.en-us.api.meta/api/sforce_api_calls_query_querylocator.htm "A string returned in QueryResult and used in queryMore() to find and retrieve additional query results. Represents a server-side cursor.") are created. The query locator is returned in QueryResult, and used in queryMore() to find the next batch of results.

The queryMore() call processes subsequent records in additional batches, resets the server-side cursor, and returns a newly generated query locator. To iterate through the records in the result set, call queryMore() repeatedly until all records in the result set have been processed and the Done flag is true.

You can't use queryMore() if a query includes a GROUP BY clause. See [Salesforce SOQL and SOSL Reference Guide: GROUP BY](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby.htm) for more information.

When querying external objects, Salesforce Connect accesses the external data in real time via Web service callouts, and each queryMore() call results in a callout. The batch boundaries and page sizes depend on your adapter and how you set up the external data source.

We recommend:

-   Avoid paging by filtering your queries of external objects to return fewer rows than the batch size, which by default is 2,000 rows. Remember, obtaining each batch requires a queryMore() call, which results in a Web service callout.
-   If the external data frequently changes, avoid using queryMore() calls. If the external data is modified between queryMore() calls, you can get an unexpected QueryResult.

If the primary object for a SELECT statement is an external object, queryMore() supports only that primary object and doesn’t support subqueries.

See [Client-driven and Server-driven Paging for Salesforce Connect—OData 2.0 and 4.0 Adapters](https://help.salesforce.com/s/articleView?id=platform.odata_paging.htm&type=5&language=en_US).

## Sample Code—Java

This sample executes a query that fetches the first names and last names of all contacts. It calls query() with the query string to get the first batch of records. It then calls queryMore() in a loop to get subsequent batches of records until no records are returned. It writes the first and last names of the contacts queried to the console.

```

```

## Sample Code—C#

This sample executes a query that fetches the first names and last names of all contacts. It calls query() with the query string to get the first batch of records. It then calls queryMore() in a loop to get subsequent batches of records until no records are returned. It writes the first and last names of the contacts queried to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| queryLocator | QueryLocator | Points to a server-side cursor in the database. Tracks the current processing location in the query results set and indicates the location of additional results.A query locator is a specialized string, similar to an ID, and is 18 characters long and begins with the prefix 0r8. Required for retrieving subsequent sets of objects from query results, if needed. |

## Response

[QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.")

## Faults

[InvalidQueryLocatorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421647)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.")

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [Change the Batch Size in Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_changing_batch_size.htm "Change the Batch Size in Queries - HTML (New Window)")

## Code Examples

```
QueryResult queryResult = connection.queryMore(queryLocator)
```

```apex
public void queryRecords() {
   QueryResult qResult = null;
   try {
      String soqlQuery = "SELECT FirstName, LastName FROM Contact";
      qResult = connection.query(soqlQuery);
      boolean done = false;
      if (qResult.getSize() > 0) {
         System.out.println("Logged-in user can see a total of "
            + qResult.getSize() + " contact records.");
         while (!done) {
            SObject[] records = qResult.getRecords();
            for (int i = 0; i < records.length; ++i) {
               Contact con = (Contact) records[i];
               String fName = con.getFirstName();
               String lName = con.getLastName();
               if (fName == null) {
                  System.out.println("Contact " + (i + 1) + ": " + lName);
               } else {
                  System.out.println("Contact " + (i + 1) + ": " + fName
                        + " " + lName);
               }
            }
            if (qResult.isDone()) {
               done = true;
            } else {
               qResult = connection.queryMore(qResult.getQueryLocator());
            }
         }
      } else {
         System.out.println("No records found.");
      }
      System.out.println("
Query succesfully executed.");
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void queryRecords()
{
   QueryResult qResult = null;
   try
   {
      String soqlQuery = "SELECT FirstName, LastName FROM Contact";
      qResult = binding.query(soqlQuery);
      Boolean done = false;
      if (qResult.size > 0)
      {
         Console.WriteLine("Logged-in user can see a total of "
            + qResult.size + " contact records.");
         while (!done)
         {
            sObject[] records = qResult.records;
            for (int i = 0; i < records.Length; ++i)
            {
               Contact con = (Contact)records[i];
               String fName = con.FirstName;
               String lName = con.LastName;
               if (fName == null)
               {
                  Console.WriteLine("Contact " + (i + 1) + ": " + lName);
               }
               else
               {
                  Console.WriteLine("Contact " + (i + 1) + ": " + fName
                        + " " + lName);
               }
            }
            if (qResult.done)
            {
               done = true;
            }
            else
            {
               qResult = binding.queryMore(qResult.queryLocator);
            }
         }
      }
      else
      {
         Console.WriteLine("No records found.");
      }
      Console.WriteLine("
Query succesfully executed.");
   }
   catch (SoapException e)
   {
      Console.WriteLine("An unexpected error has occurred: " +
                                 e.Message + "
" + e.StackTrace);
   }
}
```

## Related Topics

- QueryLocator (atlas.en-us.api.meta/api/sforce_api_calls_query_querylocator.htm)
- QueryResult (atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm)
- InvalidQueryLocatorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
