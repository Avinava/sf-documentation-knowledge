---
title: "query()"
domain: api
topic: query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.455Z
estimatedTokens: 1797
keywords: [query, Executes, against, data, matches, stated, conditions, Usage, Arguments, Sample, Code—Java, Code—C#, Faults]
---

# query()

> Executes a query against the specified object and returns data that matches the
      stated conditions.

# query()

Executes a query against the specified object and returns data that matches the stated conditions.

## Syntax

```

```

## Usage

Use the query() call to retrieve data from an object. When a client application invokes the query() call, it passes in a query expression that specifies the object to query, the fields to retrieve, and any conditions that determine whether a given object qualifies. For details about the syntax and rules used for queries, see the [Salesforce SOQL and SOSL Reference Guide: SOQL SELECT Syntax](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm).

Upon invocation, the API executes the query against the specified object, caches the results of the query on the API, and returns the query response object QueryResult . The client application can then use methods on QueryResult to iterate through rows in the query response and retrieve information.

Your client application must be logged in with sufficient access rights to query the specified objects and to query the fields in the specified field list. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

An object must be configured to query using the API, and some objects can't be queried via the API. To determine if an object can be queried, use the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call on the object and inspect its queryable property.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api)

#### Tip

If you use the enterprise WSDL, don't use describe to populate a select list. For example, if a Salesforce admin adds a field to the sObject after you consume it, the describe call pulls down the field but your toolkit won't know how to serialize it, and your integration fails.

The query() call automatically filters out deleted and archived records. Use queryAll() to include deleted or archived records in the results.

The query result object can return up to 2,000 rows of data. The max is also the default. However, to optimize performance, the returned batch size can be lower than the max or what's set in the request, based on the size and complexity of records queried. If the query results exceed the default, use the [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results.") call to retrieve additional rows in batches. Adjust the default results batch in the [QueryOptions](atlas.en-us.api.meta/api/sforce_api_header_queryoptions.htm "Specifies the preferred batch size for queries. The system sometimes creates batches that are larger or smaller than the specified size to maximize performance.") header. For more information and examples on updating batch size, see [Change the Batch Size in Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_changing_batch_size.htm) in the SOQL and SOSL Reference.

Queries that take longer than two minutes to process time out. For timed out queries, the API returns an API fault element of [InvalidQueryLocatorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421647). If a timeout occurs, refactor your query to return or scan a smaller amount of data.

When querying for fields of type [base64](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/primitive_data_types.htm#i1435003) the query response object returns only one record at a time. You can't alter this process by changing the batch size of the query() call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

For multicurrency organizations, special handling is required when querying currency fields containing values in different currencies. For example, if a client application is querying [PricebookEntry](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pricebookentry.htm "HTML (New Window)") objects based on values in the UnitPrice field, and if the UnitPrice amounts are expressed in different currencies, then the query logic must handle this case correctly. For example, if the query is trying to retrieve the product codes of all products with a unit price greater than or equal to $10 USD, the query expression looks something like this:

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| queryString | string | Contains the SOQL query, which specifies the object to query, the fields to return, and any conditions for including a specific object in the query. See Salesforce SOQL and SOSL Reference Guide. |

## Sample Code—Java

This sample executes a query that fetches the first names and last names of all contacts. It calls query() with the query string to get the first batch of records. This example also calls [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results.") in a loop to get subsequent batches of records until no records are returned. It writes the first and last names of the contacts queried to the console.

```

```

## Sample Code—C#

This sample executes a query that fetches the first names and last names of all contacts. It calls query() with the query string to get the first batch of records. This example also calls [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results.") in a loop to get subsequent batches of records until no records are returned. It writes the first and last names of the contacts queried to the console.

```

```

## Response

[QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.")

## Faults

[MalformedQueryFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421636)

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[InvalidFieldFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421625)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived.")

-   [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results.")

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [Change the Batch Size in Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_changing_batch_size.htm "Change the Batch Size in Queries - HTML (New Window)")

## Code Examples

```
QueryResult = connection.query(string queryString);
```

```
SELECT Product2Id,ProductCode,UnitPrice FROM PricebookEntry 
   WHERE (UnitPrice >= 10 and CurrencyIsoCode='USD') 
   OR (UnitPrice >= 5.47 and CurrencyIsoCode='GBP')
   OR (UnitPrice >= 8.19 and CurrencyIsoCode='EUR')
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

- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- queryMore() (atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm)
- QueryOptions (atlas.en-us.api.meta/api/sforce_api_header_queryoptions.htm)
- InvalidQueryLocatorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- QueryResult (atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm)
- MalformedQueryFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidFieldFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
