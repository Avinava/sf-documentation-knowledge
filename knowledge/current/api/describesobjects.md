---
title: "describeSObjects()"
domain: api
topic: describesobjects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.156Z
estimatedTokens: 980
keywords: [describeSObjects, array-based, version, describeSObject, metadata, array, objects, call, instead, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# describeSObjects()

> An array-based version of describeSObject();
        describes metadata (field list and object properties) for the specified
            object or array of objects. Use this call instead of describeSObject().

# describeSObjects()

An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().

## Syntax

```

```

## Usage

Use [describeSObjects()](# "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") to obtain metadata for a given object or array of objects. You can first call [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data.") to retrieve a list of all objects for your organization, then iterate through the list and use [describeSObjects()](# "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") to obtain metadata about individual objects. The [describeSObjects()](# "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call is limited to a maximum of 100 objects returned.

Your client application must be logged in with sufficient access rights to retrieve metadata about your organization’s data. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

In organizations where person accounts are enabled, this call shows [Accounts](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") as not createable if the profile does not have access to any business account record types.

## Sample Code—Java

This sample calls describeSObjects() to perform describes on account, contact, and lead. It iterates through the sObject describe results, gets the properties and fields for each sObject in the result, and writes them to the console. For picklist fields, it writes the picklist values. For reference fields, it writes the referenced object names.

```

```

## Sample Code—C#

This sample calls describeSObjects() to perform describes on account, contact, and lead. It iterates through the sObject describe results, gets the properties and fields for each sObject in the result, and writes them to the console. For picklist fields, it writes the picklist values. For reference fields, it writes the referenced object names.

```

```

## Arguments

The [describeSObjects()](# "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call takes in an array of sObjects.

| Name | Type | Description |
| --- | --- | --- |
| sObjectType | string | Object. The specified value must be a valid object for your organization. For a complete list of objects, see Standard Objects. |

## Response

[DescribeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [describeSObject()](atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm "Describes metadata (field list and object properties) for the specified object.")

-   [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data.")

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner.htm)

## Code Examples

```
DescribeSObjectResult [] = connection.describeSObjects(string sObjectType[] );
```

```apex
public void describeSObjectsSample() 
{
  try {
    // Call describeSObjectResults and pass it an array with
    // the names of the objects to describe.
    DescribeSObjectResult[] describeSObjectResults = 
                       connection.describeSObjects(
                        new String[] { "account", "contact", "lead" });

    // Iterate through the list of describe sObject results
    for (int i=0;i < describeSObjectResults.length; i++)
    {
        DescribeSObjectResult desObj = describeSObjectResults[i];
        // Get the name of the sObject
        String objectName = desObj.getName();
        System.out.println("sObject name: " + objectName);

        // For each described sObject, get the fields
        Field[] fields = desObj.getFields();
                        
        // Get some other properties
        if (desObj.getActivateable()) System.out.println("\tActivateable");
        
        // Iterate through the fields to get properties for each field
        for(int j=0;j < fields.length; j++)
        {                        
            Field field = fields[j];
            System.out.println("\tField: " + field.getName());
            System.out.println("\t\tLabel: " + field.getLabel());
            if (field.isCustom()) 
                System.out.println("\t\tThis is a custom field.");
            System.out.println("\t\tType: " + field.getType());
            if (field.getLength() > 0)
                System.out.println("\t\tLength: " + field.getLength());
            if (field.getPrecision() > 0)
                System.out.println("\t\tPrecision: " + field.getPrecision());
            
            // Determine whether this is a picklist field
            if (field.getType() == FieldType.picklist)
            {                            
                // Determine whether there are picklist values
                PicklistEntry[] picklistValues = field.getPicklistValues();
                if (picklistValues != null && picklistValues[0] != null)
                {
                    System.out.println("\t\tPicklist values = ");
                    for (int k = 0; k < picklistValues.length; k++)
                    {
                        System.out.println("\t\t\tItem: " + picklistValues[k].getLabel());
                    }
                }
            }

            // Determine whether this is a reference field
            if (field.getType() == FieldType.reference)
            {                            
                // Determine whether this field refers to another object
                String[] referenceTos = field.getReferenceTo();
                if (referenceTos != null && referenceTos[0] != null)
                {
                    System.out.println("\t\tField references the following objects:");
                    for (int k = 0; k < referenceTos.length; k++)
                    {
                        System.out.println("\t\t\t" + referenceTos[k]);
                    }
                }
            }
        }            
    }
  } catch(ConnectionException ce) {
    ce.printStackTrace();  
  }
}
```

```apex
public void describeSObjectsSample()
{
    try 
    {
    // Call describeSObjectResults and pass it an array with
    // the names of the objects to describe.
    DescribeSObjectResult[] describeSObjectResults = 
                        binding.describeSObjects(
                        new string[] { "account", "contact", "lead" });

    // Iterate through the list of describe sObject results
    foreach (DescribeSObjectResult describeSObjectResult in describeSObjectResults)
    {
        // Get the name of the sObject
        String objectName = describeSObjectResult.name;
        Console.WriteLine("sObject name: " + objectName);

        // For each described sObject, get the fields
        Field[] fields = describeSObjectResult.fields;
                                
        // Get some other properties
        if (describeSObjectResult.activateable) Console.WriteLine("\tActivateable");
                
        // Iterate through the fields to get properties for each field
        foreach (Field field in fields)
        {                        
            Console.WriteLine("\tField: " + field.name);
            Console.WriteLine("\t\tLabel: " + field.label);
            if (field.custom) 
                Console.WriteLine("\t\tThis is a custom field.");
            Console.WriteLine("\t\tType: " + field.type);
            if (field.length > 0)
                Console.WriteLine("\t\tLength: " + field.length);
            if (field.precision > 0)
                Console.WriteLine("\t\tPrecision: " + field.precision);
                        
            // Determine whether this is a picklist field
            if (field.type == fieldType.picklist)
            {                            
                // Determine whether there are picklist values
                PicklistEntry[] picklistValues = field.picklistValues;
                if (picklistValues != null && picklistValues[0] != null)
                {
                    Console.WriteLine("\t\tPicklist values = ");
                    for (int j = 0; j < picklistValues.Length; j++)
                    {
                        Console.WriteLine("\t\t\tItem: " + picklistValues[j].label);
                    }
                }
            }

            // Determine whether this is a reference field
            if (field.type == fieldType.reference)
            {                            
                // Determine whether this field refers to another object
                string[] referenceTos = field.referenceTo;
                if (referenceTos != null && referenceTos[0] != null)
                {
                    Console.WriteLine("\t\tField references the following objects:");
                    for (int j = 0; j < referenceTos.Length; j++)
                    {
                        Console.WriteLine("\t\t\t" + referenceTos[j]);
                    }
                }
            }
        }
    }
    }
    catch (SoapException e)
    {
        Console.WriteLine("An unexpected error has occurred: " + e.Message
            + "
" + e.StackTrace);
    }
}
```

## Related Topics

- DescribeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- describeGlobal() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- describeSObject() (atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
- Using the Partner WSDL (atlas.en-us.api.meta/api/sforce_api_partner.htm)
