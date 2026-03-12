---
title: "AggregateResult"
domain: api
topic: aggregateresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.459Z
estimatedTokens: 323
keywords: [AggregateResult, read-only, SObject, query, results, call, aggregate, function, MAX, Sample, Code—Java, Code—C#]
---

# AggregateResult

> A read-only
        SObject
        that
        returns
        query results only if a query call contains an aggregate function, such as MAX().

# AggregateResult

A read-only SObject that returns query results only if a query call contains an aggregate function, such as MAX().

Results are returned in AggregateResult only if a query() or queryMore() call includes the aggregate function. If the call doesn't contain an aggregate function, the results are returned in the [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.") SObject.

For example, this query returns an array of Contact records in the records field.

```

```

When a SOQL query contains an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm), the record field returns an array of AggregateResult records. .

## Fields

Each AggregateResult object contains a separate field for each item in the SELECT list. For the Enterprise WSDL, retrieve the result for each item by calling getField() on an AggregateResult object when using WSC client framework. For the Partner WSDL, retrieve the result for each item by calling getField() on an object.

## Sample Code—Java

```

```

## Sample Code—C#

```

```

## Code Examples

```
SELECT Id, LastName
FROM Contact
WHERE FirstName = 'Bob'
```

```apex
public void queryAggregateResult() {
  try {
    String groupByQuery = "SELECT Account.Name n, " +
        "MAX(Amount) max, MIN(Amount) min " +
        "FROM Opportunity GROUP BY Account.Name";
    QueryResult qr = connection.query(groupByQuery);
    if (qr.getSize() > 0) {
      System.out.println("Query returned " + 
          qr.getRecords().length +  " results."
      );
      for (SObject sObj : qr.getRecords()) {
        AggregateResult result = (AggregateResult) sObj;
        System.out.println("aggResult.Account.Name: " + 
            result.getField("n")
        );
        System.out.println("aggResult.max: " + 
            result.getField("max")
        );
        System.out.println("aggResult.min: " + 
            result.getField("min")
        );
        System.out.println();
      }
    } else {
      System.out.println("No results found.");
    }
    System.out.println("
Query successfully executed.");
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

```apex
private void testAggregateResult()
{
   try
   {
      QueryResult qr = null;

      binding.QueryOptionsValue = new QueryOptions();

      String soqlStr = "SELECT Name, " +
                       "MAX(Amount), " +
                       "MIN(Amount) " +
                       "FROM Opportunity " +
                       "GROUP BY Name";

      qr = binding.query(soqlStr);

      if (qr.size > 0)
      {

         for (int i = 0; i < qr.records.Length; i++)
         {

                sforce.AggregateResult ar = (AggregateResult)qr.records[i];

                foreach (XmlElement e in ar.Any)
                    Console.WriteLine(
                        "{0} - {1}", 
                        e.LocalName, 
                        e.InnerText
                    );

         }
      }
      else
      {
         Console.WriteLine("No records found");
      }
      Console.WriteLine("Query successfully executed.");
   }
   catch (Exception ex)
   {
      Console.WriteLine(
          "
Failed to execute query successfully." +
          "error message was: 
" + 
          ex.Message
      );

   }
}
```

## Related Topics

- QueryResult (atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm)
