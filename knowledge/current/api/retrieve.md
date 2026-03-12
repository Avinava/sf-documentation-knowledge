---
title: "retrieve()"
domain: api
topic: retrieve
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.503Z
estimatedTokens: 984
keywords: [retrieve, Retrieves, records, IDs, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# retrieve()

> Retrieves one or more records based on the specified IDs.

# retrieve()

Retrieves one or more records based on the specified IDs.

## Syntax

```

```

## Usage

Use the retrieve() call to retrieve individual records from an object. The client application passes the list of fields to retrieve, the object, and an array of record IDs to retrieve. The retrieve() call doesn’t return records that have been deleted.

In general, you use retrieve() when you know in advance the IDs of the records to retrieve. Use query() instead to obtain records when you don’t know the IDs or when you want to specify other selection criteria.

Client applications can use retrieve() to perform a client-side join. For example, a client application can run a query() to obtain a set of [Opportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "HTML (New Window)") records, iterate through the returned opportunity records, obtain the accountId for each opportunity, and then call retrieve() to obtain [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") information for each accountId.

Records for certain objects can’t be retrieved via the API. To retrieve a record via the retrieve() call, its object must be configured as retrievable (retrieveable is true). To determine whether an object can be retrieved, your client application can invoke the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call on the object and inspect its retrievable property.

Your client application must be logged in with sufficient access rights to retrieve records within the specified object and to retrieve the fields in the specified field list. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

## Sample Code—Java

This sample retrieves the Id, Name, and Website of the specified Account records. It writes the fields of the retrieved records to the console.

```

```

## Sample Code—C#

This sample retrieves the Id, Name, and Website of the specified Account records. It writes the fields of the retrieved records to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| fieldList | string | List of one or more fields in the specified object, separated by commas. You must specify valid field names and must have read-level permissions to each specified field. The fieldList defines the ordering of fields in the result. |
| sObjectType | string | Object from which to retrieve data. The specified value must be a valid object for your organization. For a complete list of objects, see Standard Objects. |
| ids | ID[] | Array of one or more IDs of the objects to retrieve. You can pass a maximum of 2000 object IDs to the retrieve() call. For information on IDs, see ID Field Type. |

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | sObject[] | Array of one or more sObjects representing individual records of the specified object. The number of sObject returned in the array matches the number of IDs passed into the retrieve() call. If you don’t have access to an object or if a passed ID is invalid, the array returns null for that object. For information on IDs, see ID Field Type. |

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[InvalidFieldFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421625)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
sObject[] result = connection.retrieve(string fieldList, string sObjectType, ID ids[]);
```

```apex
public void retrieveRecords(String[] ids) {
   try {
      SObject[] sObjects = connection.retrieve("ID, Name, Website",
            "Account", ids);
      // Verify that some objects were returned.
      // Even though we began with valid object IDs,
      // someone else might have deleted them in the meantime.
      if (sObjects != null) {
         for (int i = 0; i < sObjects.length; i++) {
            // Cast the SObject into an Account object
            Account retrievedAccount = (Account) sObjects[i];
            if (retrievedAccount != null) {
               System.out.println("Account ID: " + retrievedAccount.getId());
               System.out.println("Account Name: " + retrievedAccount.getName());
               System.out.println("Account Website: "
                     + retrievedAccount.getWebsite());
            }
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void retrieveRecords(String[] ids)
{
   try
   {
      sObject[] sObjects = binding.retrieve("ID, Name, Website",
            "Account", ids);
      // Verify that some objects were returned.
      // Even though we began with valid object IDs,
      // someone else might have deleted them in the meantime.
      if (sObjects != null)
      {
         for (int i = 0; i < sObjects.Length; i++)
         {
            // Cast the SObject into an Account object
            Account retrievedAccount = (Account)sObjects[i];
            if (retrievedAccount != null)
            {
               Console.WriteLine("Account ID: " + retrievedAccount.Id);
               Console.WriteLine("Account Name: " + retrievedAccount.Name);
               Console.WriteLine("Account Website: "
                     + retrievedAccount.Website);
            }
         }
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

- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- sObjects (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidFieldFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
