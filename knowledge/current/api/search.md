---
title: "search()"
domain: api
topic: search
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.541Z
estimatedTokens: 760
keywords: [search, Executes, text, organization's, data, Usage, Sample, Code—Java, Code—C#, Arguments, Fault]
---

# search()

> Executes a text search in your organization's data.

# search()

Executes a text search in your organization's data.

## Syntax

```

```

## Usage

Use [search()](# "Executes a text search in your organization's data.") to search for records based on a search string. The search call supports searching custom objects. For an extensive discussion about the syntax and rules used for text searches, see the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

Certain objects cannot be searched via the API, such as [Attachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_attachment.htm "HTML (New Window)") objects. To search an object via the search() call, the object must be configured as searchable (isSearchable is true). To determine whether an object can be searched, your client application can invoke the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call on the object and inspect its searchable property.

## Sample Code—Java

This sample makes the search() call by passing it a SOSL query, which returns contacts, leads, and accounts whose phone fields contain a specified value. Next, it gets the sObject records from the results and stores the records in arrays depending on the record type. Finally, it writes the fields of the returned contacts, leads, and accounts to the console.

```

```

## Sample Code—C#

This sample makes the search() call by passing it a SOSL query, which returns contacts, leads, and accounts whose phone fields contain a specified value. Next, it gets the sObject records from the results and stores the records in arrays depending on the record type. Finally, it writes the fields of the returned contacts, leads, and accounts to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| search | string | Search string that specifies the text expression to search for, the scope of fields to search, the list of objects and fields to retrieve, and the maximum number of records to return. For more information, see the Salesforce SOQL and SOSL Reference Guide. |

## Response

[SearchResult](atlas.en-us.api.meta/api/sforce_api_calls_search_searchresult.htm "The search() call returns a SearchResult object.")

## Fault

[InvalidFieldFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421625)

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[MalformedSearchFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421658)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
SearchResult = connection.search(String searchString);
```

```apex
public void searchSample() {
            try {
            // Perform the search using the SOSL query.
            SearchResult sr = connection.search(
            "FIND {4159017000} IN Phone FIELDS RETURNING "
            + "Contact(Id, Phone, FirstName, LastName), "
            + "Lead(Id, Phone, FirstName, LastName), "
            + "Account(Id, Phone, Name)");
            
            // Get the records from the search results.
            SearchRecord[] records = sr.getSearchRecords();
            
            ArrayList<Contact> contacts = new ArrayList<Contact>();
            ArrayList<Lead> leads = new ArrayList<Lead>();
            ArrayList<Account> accounts = new ArrayList<Account>();
            
            // For each record returned, find out if it's a
            // contact, lead, or account and add it to the
            // appropriate array, then write the records
            // to the console.
            if (records.length > 0) {
            for (int i = 0; i < records.length; i++) {
            SObject record = records[i].getRecord();
            if (record instanceof Contact) {
            contacts.add((Contact) record);
            } else if (record instanceof Lead) {
            leads.add((Lead) record);
            } else if (record instanceof Account) {
            accounts.add((Account) record);
            }
            }
            
            System.out.println("Found " + contacts.size() + " contacts.");
            for (Contact c : contacts) {
            System.out.println(c.getId() + ", " + c.getFirstName() + ", "
            + c.getLastName() + ", " + c.getPhone());
            }
            System.out.println("Found " + leads.size() + " leads.");
            for (Lead d : leads) {
            System.out.println(d.getId() + ", " + d.getFirstName() + ", "
            + d.getLastName() + ", " + d.getPhone());
            }
            System.out.println("Found " + accounts.size() + " accounts.");
            for (Account a : accounts) {
            System.out.println(a.getId() + ", " + a.getName() + ", "
            + a.getPhone());
            }
            } else {
            System.out.println("No records were found for the search.");
            }
            } catch (Exception ce) {
            ce.printStackTrace();
            }
            }
```

```apex
public void searchSample()
            {
            try
            {
            // Perform the search using the SOSL query.
            SearchResult sr = binding.search(
            "FIND {4159017000} IN Phone FIELDS RETURNING "
            + "Contact(Id, Phone, FirstName, LastName), "
            + "Lead(Id, Phone, FirstName, LastName), "
            + "Account(Id, Phone, Name)");
            
            // Get the records from the search results.
            SearchRecord[] records = sr.searchRecords;
            
            List<Contact> contacts = new List<Contact>();
            List<Lead> leads = new List<Lead>();
            List<Account> accounts = new List<Account>();
            
            // For each record returned, find out if it's a 
            // contact, lead, or account and add it to the
            // appropriate array, then write the records
            // to the console.
            if (records.Length > 0)
            {
            for (int i = 0; i < records.Length; i++)
            {
            sObject record = records[i].record;
            if (record is Contact)
            {
            contacts.Add((Contact)record);
            }
            else if (record is Lead)
            {
            leads.Add((Lead)record);
            }
            else if (record is Account)
            {
            accounts.Add((Account)record);
            }
            }
            
            Console.WriteLine("Found " + contacts.Count + " contacts.");
            foreach (Contact c in contacts)
            {
            Console.WriteLine(c.Id + ", " +
            c.FirstName + ", " +
            c.LastName + ", " +
            c.Phone);
            }
            Console.WriteLine("Found " + leads.Count + " leads.");
            foreach (Lead d in leads)
            {
            Console.WriteLine(d.Id + ", " +
            d.FirstName + ", " +
            d.LastName + ", " +
            d.Phone);
            }
            Console.WriteLine("Found " + accounts.Count + " accounts.");
            foreach (Account a in accounts)
            {
            Console.WriteLine(a.Id + ", " +
            a.Name + ", " +
            a.Phone);
            }
            }
            else
            {
            Console.WriteLine("No records were found for the search.");
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

- SearchResult (atlas.en-us.api.meta/api/sforce_api_calls_search_searchresult.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- InvalidFieldFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- MalformedSearchFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
