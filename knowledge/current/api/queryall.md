---
title: "queryAll()"
domain: api
topic: queryall
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.472Z
estimatedTokens: 842
keywords: [queryAll, Retrieves, data, objects, including, records, deleted, archived, Usage, Arguments, Sample, Code—Java, Code—C#, Faults]
---

# queryAll()

> Retrieves data from specified objects, including records that have been deleted or
      archived.

# queryAll()

Retrieves data from specified objects, including records that have been deleted or archived.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Syntax

```

```

## Usage

Use queryAll() to identify the records that have been deleted because of a merge or delete. queryAll() has read-only access to the field isDeleted but is otherwise the same as [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions."). Use queryAll() in preparation to undelete records with the [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin.") call.

To find records that have been deleted, specify isDeleted = true in the query string. For merged records, request the [masterRecord](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm#i1429334). For example:

```

```

Filter on the isArchived field to find only the archived objects. You can update or delete archived records, but you can't update the isArchived field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Because Salesforce doesn’t track changes to external data, queryAll() behaves the same as query() for external objects.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| queryString | string | Contains the SOQL query, which specifies the object to query, the fields to return, and any conditions for including a specific object in the query. See Salesforce SOQL and SOSL Reference Guide. |

## Sample Code—Java

This sample performs a query to get all the accounts, whether they’re deleted or not. It sets a custom batch size of 250 records. It fetches all batches of records by calling queryAll() the first time and then queryMore(). The names and the value of the isDeleted fields of all returned accounts are written to the console.

```

```

## Sample Code—C#

This sample performs a query to get all the accounts, whether they’re deleted or not. It sets a custom batch size of 250 records. It fetches all batches of records by calling queryAll() the first time and then queryMore(). The names and the value of the isDeleted fields of all returned accounts are written to the console.

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

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results.")

## Code Examples

```
QueryResult = connection.queryAll(string queryString);
```

```
SELECT id, isDeleted, masterRecordId FROM Account WHERE masterRecordId='100000000000Abc'
```

```apex
public void queryAllRecords() {
   // Setting custom batch size
   connection.setQueryOptions(250);
   
   try {
      String soqlQuery = "SELECT Name, IsDeleted FROM Account";
      QueryResult qr = connection.queryAll(soqlQuery);
      boolean done = false;
      if (qr.getSize() > 0) {
         System.out.println("Logged-in user can see a total of "
               + qr.getSize()
               + " contact records (including deleted records).");
         while (!done) {
            SObject[] records = qr.getRecords();
            for (int i = 0; i < records.length; i++) {
               Account account = (Account) records[i];
               boolean isDel = account.getIsDeleted();
               System.out.println("Account " + (i + 1) + ": "
                     + account.getName() + " isDeleted = "
                     + account.getIsDeleted());
            }
            if (qr.isDone()) {
               done = true;
            } else {
               qr = connection.queryMore(qr.getQueryLocator());
            }
         }
      } else {
         System.out.println("No records found.");
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void queryAllRecords()
{
   // Setting custom batch size
   QueryOptions qo = new QueryOptions();
   qo.batchSize = 250;
   qo.batchSizeSpecified = true;
   binding.QueryOptionsValue = qo;

   try
   {
      String soqlQuery = "SELECT Name, IsDeleted FROM Account";
      QueryResult qr = binding.queryAll(soqlQuery);
      Boolean done = false;
      if (qr.size > 0)
      {
         Console.WriteLine("Logged-in user can see a total of "
               + qr.size
               + " contact records (including deleted records).");
         while (!done)
         {
            sObject[] records = qr.records;
            for (int i = 0; i < records.Length; i++)
            {
               Account account = (Account)records[i];
               Boolean isDel = (Boolean)account.IsDeleted;
               Console.WriteLine("Account " + (i + 1) + ": "
                     + account.Name + " isDeleted = "
                     + account.IsDeleted);
            }
            if (qr.done)
            {
               done = true;
            }
            else
            {
               qr = binding.queryMore(qr.queryLocator);
            }
         }
      }
      else
      {
         Console.WriteLine("No records found.");
      }
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

- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- undelete() (atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm)
- masterRecord (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- QueryResult (atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm)
- MalformedQueryFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidFieldFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
- queryMore() (atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm)
