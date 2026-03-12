---
title: "Sample query and queryMore Calls"
domain: api
topic: sample-query-and-querymore-calls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.782Z
estimatedTokens: 329
keywords: [Sample, query, queryMore, Calls, Java, examples, show, usage, partner, WSDL, batch, size, items, performs, call]
---

# Sample query and queryMore Calls

> The following Java and C# examples show usage of the query() and queryMore() calls
            for the partner WSDL. Each example sets the batch size of the query to 250 items
            returned. It then performs a query call to get the first name and last name of all
            contacts and iter

# Sample query and queryMore Calls

The following Java and C# examples show usage of the [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.") and [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results.") calls for the partner WSDL. Each example sets the batch size of the query to 250 items returned. It then performs a query call to get the first name and last name of all contacts and iterates through the contact records returned. For each contact, it writes the contact’s first name and last name to the output, or only the last name if the first name is null. Finally, if there are more items to be returned by the query, as indicated by a QueryResult.done property value of false, it calls [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results.") to get the next batch of items, and repeats the process until no more records are returned.

To execute the sample method, you can use the corresponding Java or C# template class provided in [Examples Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner_examples.htm).

## Java Example

```

```

## C# Example

```

```

## Code Examples

```apex
public void querySample() {    
    try {
        // Set query batch size
        partnerConnection.setQueryOptions(250);
        
        // SOQL query to use 
        String soqlQuery = "SELECT FirstName, LastName FROM Contact";
        // Make the query call and get the query results
        QueryResult qr = partnerConnection.query(soqlQuery);
        
        boolean done = false;
        int loopCount = 0;
        // Loop through the batches of returned results
        while (!done) {
            System.out.println("Records in results set " + loopCount++
                    + " - ");
            SObject[] records = qr.getRecords();
            // Process the query results
            for (int i = 0; i < records.length; i++) {
                SObject contact = records[i];
                Object firstName = contact.getField("FirstName");
                Object lastName = contact.getField("LastName");
                if (firstName == null) {
                    System.out.println("Contact " + (i + 1) + 
                            ": " + lastName
                    );
                } else {
                    System.out.println("Contact " + (i + 1) + ": " + 
                            firstName + " " + lastName);
                }
            }
            if (qr.isDone()) {
                done = true;
            } else {
                qr = partnerConnection.queryMore(qr.getQueryLocator());
            }
        }
    } catch(ConnectionException ce) {
        ce.printStackTrace();
    }
    System.out.println("
Query execution completed.");         
}
```

```apex
public void querySample() 
{
    try
    {
        QueryResult qr = null;
        binding.QueryOptionsValue = new sforce.QueryOptions();
        binding.QueryOptionsValue.batchSize = 250;
        binding.QueryOptionsValue.batchSizeSpecified = true;

        qr = binding.query("SELECT FirstName, LastName FROM Contact");

        bool done = false;
        int loopCount = 0;
        while (!done)
        {
            Console.WriteLine("
Records in results set " + 
                Convert.ToString(loopCount++)
                    + " - ");
            // Process the query results
            for (int i = 0; i < qr.records.Length; i++)
            {
                sforce.sObject con = qr.records[i];
                string fName = con.Any[0].InnerText;
                string lName = con.Any[1].InnerText;
                if (fName == null)
                    Console.WriteLine("Contact " + (i + 1) + ": " + lName);
                else
                    Console.WriteLine("Contact " + (i + 1) + ": " + fName
                        + " " + lName);
            }

            if (qr.done)
                done = true;
            else
                qr = binding.queryMore(qr.queryLocator);
        }
    }
    catch (SoapException e)
    {
        Console.WriteLine("An unexpected error has occurred: " + e.Message +
            " Stack trace: " + e.StackTrace);
    }
    Console.WriteLine("
Query execution completed.");
}
```

## Related Topics

- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- queryMore() (atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm)
- Examples Using the Partner WSDL (atlas.en-us.api.meta/api/sforce_api_partner_examples.htm)
