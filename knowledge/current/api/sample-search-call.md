---
title: "Sample search Call"
domain: api
topic: sample-search-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.788Z
estimatedTokens: 232
keywords: [Sample, search, Call, Java, examples, show, how, partner, WSDL, accepts, phone, number, SOQL, query, looks]
---

# Sample search Call

> The following Java and C# examples show how to use the search() call for
            the partner WSDL. Each example accepts a phone number string value that is used in the
            SOQL query. The search call looks for phone fields that match the passed in phone value
            in all contacts,

# Sample search Call

The following Java and C# examples show how to use the [search()](atlas.en-us.api.meta/api/sforce_api_calls_search.htm "Executes a text search in your organization's data.") call for the partner WSDL. Each example accepts a phone number string value that is used in the SOQL query. The search call looks for phone fields that match the passed in phone value in all contacts, leads, and accounts. Next, the example iterates through the returned search results that contain the matching records, adds them to arrays, and writes their field values to the console. The record fields returned correspond to the fields specified in the SOQL query for each record type.

To execute the sample method, you can use the corresponding Java or C# template class provided in [Examples Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner_examples.htm).

## Java Example

```

```

## C# Example

```

```

## Code Examples

```apex
public void searchSample(String phoneNumber) {
    try {    
        // Example of phoneNumber format: 4155551212
        String soslQuery = 
            "FIND {" + phoneNumber + "} IN Phone FIELDS " +
            "RETURNING " +
            "Contact(Id, Phone, FirstName, LastName), " +
            "Lead(Id, Phone, FirstName, LastName)," +
            "Account(Id, Phone, Name)";
        // Perform SOSL query
        SearchResult sResult = partnerConnection.search(soslQuery);
        // Get the records returned by the search result
        SearchRecord[] records = sResult.getSearchRecords();
        // Create lists of objects to hold search result records
        List<SObject> contacts = new ArrayList<SObject>();
        List<SObject> leads = new ArrayList<SObject>();
        List<SObject> accounts = new ArrayList<SObject>();
        
        // Iterate through the search result records
        // and store the records in their corresponding lists
        // based on record type.
        if (records != null && records.length > 0) {
          for (int i = 0; i < records.length; i++){
            SObject record = records[i].getRecord();
            if (record.getType().toLowerCase().equals("contact")) {
              contacts.add(record);
            } else if (record.getType().toLowerCase().equals("lead")){
              leads.add(record);
            } else if (record.getType().toLowerCase().equals("account")) {
              accounts.add(record);
            }
          }
          // Display the contacts that the search returned
          if (contacts.size() > 0) {
            System.out.println("Found " + contacts.size() + 
                " contact(s):");
            for (SObject contact : contacts) {
              System.out.println(contact.getId() + " - " +
                  contact.getField("FirstName") + " " +
                  contact.getField("LastName") + " - " +
                  contact.getField("Phone")
              );
            }
          }
          // Display the leads that the search returned
          if (leads.size() > 0) {
            System.out.println("Found " + leads.size() +
                " lead(s):");
            for (SObject lead : leads) {
              System.out.println(lead.getId() + " - " +
                  lead.getField("FirstName") + " " +
                  lead.getField("LastName") + " - " +
                  lead.getField("Phone")
              );
            }
          }
          // Display the accounts that the search returned
          if (accounts.size() > 0) {
            System.out.println("Found " + 
                accounts.size() + " account(s):");
            for (SObject account : accounts) {
              System.out.println(account.getId() + " - " +
                  account.getField("Name") + " - " +                  
                  account.getField("Phone")
              );
            }
          }
        } else {
          // The search returned no records 
          System.out.println("No records were found for the search.");
        }
      } catch (ConnectionException ce) {
        ce.printStackTrace();
    }      
}
```

```apex
public void searchSample(String phoneNumber)
{
    try
    {
        // Example of phoneNumber format: 4155551212
        String soslQuery =
            "FIND {" + phoneNumber + "} IN Phone FIELDS " +
            "RETURNING " +
            "Contact(Id, Phone, FirstName, LastName), " +
            "Lead(Id, Phone, FirstName, LastName)," +
            "Account(Id, Phone, Name)";
        // Perform SOSL query
        SearchResult sResult = binding.search(soslQuery);
        // Get the records returned by the search result
        SearchRecord[] records = sResult.searchRecords;
        // Create lists of objects to hold search result records
        ArrayList contacts = new System.Collections.ArrayList();
        ArrayList leads = new System.Collections.ArrayList();
        ArrayList accounts = new System.Collections.ArrayList();

        // Iterate through the search result records
        // and store the records in their corresponding lists
        // based on record type.
        if ((records != null) && (records.Length > 0))
        {
            for (int i = 0; i < records.Length; i++)
            {
                sObject record = records[i].record;

                if (record.type.ToLower().Equals("contact"))
                {
                    contacts.Add(record);
                }
                else if (record.type.ToLower().Equals("lead"))
                {
                    leads.Add(record);
                }
                else if (record.type.ToLower().Equals("account"))
                {
                    accounts.Add(record);
                }
            }
            // Display the contacts that the search returned
            if (contacts.Count > 0)
            {
                Console.WriteLine("Found " + contacts.Count + " contact(s):");
                for (int i = 0; i < contacts.Count; i++)
                {
                    sObject c = (sObject)contacts[i];
                    Console.WriteLine(c.Any[0].InnerText + " - " +
                                c.Any[2].InnerText + " " +
                                c.Any[3].InnerText + " - " + c.Any[1].InnerText);
                }
            }
            // Display the leads that the search returned
            if (leads.Count > 0)
            {
                Console.WriteLine("Found " + leads.Count + " lead(s):");
                for (int i = 0; i < leads.Count; i++)
                {
                    sObject l = (sObject)leads[i];
                    Console.WriteLine(l.Any[0].InnerText + " - " +
                                l.Any[2].InnerText + " " +
                                l.Any[3].InnerText + " - " + l.Any[1].InnerText);
                }
            }
            // Display the accounts that the search returned
            if (accounts.Count > 0)
            {
                Console.WriteLine("Found " + accounts.Count + " account(s):");
                for (int i = 0; i < accounts.Count; i++)
                {
                    sObject a = (sObject)accounts[i];
                    Console.WriteLine(a.Any[0].InnerText + " - " +
                                    a.Any[2].InnerText + " - " +
                                    a.Any[1].InnerText);
                }
            }
        }
        else
        {
            // The search returned no records 
            Console.WriteLine("No records were found for the search.");
        }
    }
    catch (SoapException e)
    {
        Console.WriteLine("An unexpected error has occurred: " + e.Message +
            " Stack trace: " + e.StackTrace);
    }
}
```

## Related Topics

- search() (atlas.en-us.api.meta/api/sforce_api_calls_search.htm)
- Examples Using the Partner
                WSDL (atlas.en-us.api.meta/api/sforce_api_partner_examples.htm)
