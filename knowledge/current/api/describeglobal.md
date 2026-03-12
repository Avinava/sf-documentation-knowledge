---
title: "describeGlobal()"
domain: api
topic: describeglobal
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.028Z
estimatedTokens: 470
keywords: [describeGlobal, Retrieves, objects, organization's, data, Usage, Sample, Code—Java, Code—C#, Arguments, Fault]
---

# describeGlobal()

> Retrieves a list of available objects for your organization's data.

# describeGlobal()

Retrieves a list of available objects for your organization's data.

## Syntax

```

```

## Usage

Use [describeGlobal()](# "Retrieves a list of available objects for your organization's data.") to obtain a list of available objects for your organization. You can then iterate through this list and use [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") to obtain metadata about individual objects.

Your client application must be logged in with sufficient access rights to retrieve metadata about your organization’s data. .

## Sample Code—Java

This sample shows how to perform a global describe. It then retrieves the sObjects from the global describe result and writes their names to the console.

```

```

## Sample Code—C#

This sample shows how to perform a global describe. It then retrieves the sObjects from the global describe result and writes their names to the console.

```

```

## Arguments

None.

## Response

DescribeGlobalResult

## Fault

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().")

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner.htm)

-   [https://developer.salesforce.com/page/Sample\_SOAP\_Messages](https://developer.salesforce.com/page/Sample_SOAP_Messages)

## Code Examples

```
DescribeGlobalResult = connection.describeGlobal();
```

```apex
public void describeGlobalSample() {
    try {
        // Make the describeGlobal() call
        DescribeGlobalResult describeGlobalResult = 
            connection.describeGlobal();
        
        // Get the sObjects from the describe global result
        DescribeGlobalSObjectResult[] sobjectResults = 
            describeGlobalResult.getSobjects();
        
        // Write the name of each sObject to the console
        for (int i = 0; i < sobjectResults.length; i++) {
          System.out.println(sobjectResults[i].getName());
        }
    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }
}
```

```apex
public void describeGlobalSample()
{
    try
    {               
        // Make the describeGlobal() call 
        DescribeGlobalResult dgr = binding.describeGlobal();

        // Get the sObjects from the describe global result
        DescribeGlobalSObjectResult[] sObjResults = dgr.sobjects;

        // Write the name of each sObject to the console
        for (int i = 0; i < sObjResults.Length; i++)
        {
            Console.WriteLine(sObjResults[i].name);
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

- DescribeGlobalResult (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
- Using the Partner WSDL (atlas.en-us.api.meta/api/sforce_api_partner.htm)
