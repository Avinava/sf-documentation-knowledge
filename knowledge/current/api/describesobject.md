---
title: "describeSObject()"
domain: api
topic: describesobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.146Z
estimatedTokens: 838
keywords: [describeSObject, metadata, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# describeSObject()

> Describes metadata (field list and object properties) for the specified
        object.

# describeSObject()

Describes metadata (field list and object properties) for the specified object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

describeSObjects() supersedes describeSObject(). Use describeSObjects() instead of describeSObject().

## Syntax

```

```

## Usage

Use [describeSObject()](# "Describes metadata (field list and object properties) for the specified object.") to obtain metadata for a given object. You can first call [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data.") to retrieve a list of all objects for your organization, then iterate through the list and use [describeSObject()](# "Describes metadata (field list and object properties) for the specified object.") to obtain metadata about individual objects.

Your client application must be logged in with sufficient access rights to retrieve metadata about your organization’s data. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

## Sample Code—Java

This sample calls describeSObject() to perform describes on the Account sObject. It retrieves some properties of the sObject describe result, such as the sObject name, label, and fields. It then iterates through the fields and gets the field properties. For picklist fields, it gets the picklist values and for reference fields, it gets the referenced object names. The sample writes the retrieved sObject and field properties to the console.

```

```

## Sample Code—C#

This sample calls describeSObject() to perform describes on the Account sObject. It retrieves some properties of the sObject describe result, such as the sObject name, label, and fields. It then iterates through the fields and gets the field properties. For picklist fields, it gets the picklist values and for reference fields, it gets the referenced object names. The sample writes the retrieved sObject and field properties to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectType | string | Object. The specified value must be a valid object for your organization. For a complete list of objects, see Standard Objects. |

## Response

[DescribeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().")

-   [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data.")

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner.htm)

-   [https://developer.salesforce.com/page/Sample\_SOAP\_Messages](https://developer.salesforce.com/page/Sample_SOAP_Messages)

## Code Examples

```
DescribeSObjectResult = connection.describeSObject(string sObjectType);
```

```apex
public void describeSObjectSample() {
    try {
        // Make the describe call
        DescribeSObjectResult describeSObjectResult = 
            connection.describeSObject("Account");
        
        // Get sObject metadata 
        if (describeSObjectResult != null) {
          System.out.println("sObject name: " + 
                  describeSObjectResult.getName());
        if (describeSObjectResult.isCreateable()) 
            System.out.println("Createable");              

        // Get the fields
        Field[] fields = describeSObjectResult.getFields();
        System.out.println("Has " + fields.length + " fields");
        
        // Iterate through each field and gets its properties 
        for (int i = 0; i < fields.length; i++) {
          Field field = fields[i];
          System.out.println("Field name: " + field.getName());
          System.out.println("Field label: " + field.getLabel());
          
          // If this is a picklist field, show the picklist values
          if (field.getType().equals(FieldType.picklist)) {
              PicklistEntry[] picklistValues = 
                  field.getPicklistValues();
              if (picklistValues != null) {
                System.out.println("Picklist values: ");
                for (int j = 0; j < picklistValues.length; j++) {
                  if (picklistValues[j].getLabel() != null) {
                    System.out.println("\tItem: " + 
                        picklistValues[j].getLabel()
                    );
                  }
                }
              }
          }

          // If a reference field, show what it references
          if (field.getType().equals(FieldType.reference)) {
              System.out.println("Field references the " +
                      "following objects:");
              String[] referenceTos = field.getReferenceTo();              
              for (int j = 0; j < referenceTos.length; j++) {
                  System.out.println("\t" + referenceTos[j]);
              }
          }	        
	    }
	  }
	} catch (ConnectionException ce) {
	    ce.printStackTrace();
    }
}
```

```apex
public void describeSObjectSample() {
    try {
        // Make the describe call
        DescribeSObjectResult describeSObjectResult = 
            binding.describeSObject("Account");
            
        // Get sObject metadata 
        if (describeSObjectResult != null) {
            Console.WriteLine("sObject name: " + 
                    describeSObjectResult.name);
        if (describeSObjectResult.createable) 
            Console.WriteLine("Createable");              

        // Get the fields
        Field[] fields = describeSObjectResult.fields;
        Console.WriteLine("Has " + fields.Length + " fields");
            
        // Iterate through each field and gets its properties 
        for (int i = 0; i < fields.Length; i++) {
            Field field = fields[i];
            Console.WriteLine("Field name: " + field.name);
            Console.WriteLine("Field label: " + field.label);
              
            // If this is a picklist field, show the picklist values
            if (field.type.Equals(fieldType.picklist)) {
                PicklistEntry[] picklistValues = 
                    field.picklistValues;
                if (picklistValues != null) {
                    Console.WriteLine("Picklist values: ");
                    for (int j = 0; j < picklistValues.Length; j++) {
                        if (picklistValues[j].label != null) {
                        Console.WriteLine("\tItem: " + 
                            picklistValues[j].label);
                        }
                    }
                }
            }

            // If a reference field, show what it references
            if (field.type.Equals(fieldType.reference)) {
                Console.WriteLine("Field references the " +
                      "following objects:");
                String[] referenceTos = field.referenceTo;              
                for (int j = 0; j < referenceTos.Length; j++) {
                    Console.WriteLine("\t" + referenceTos[j]);
                }
            }            
        }
        }
    } catch (SoapException e) {
        Console.WriteLine("An unexpected error has occurred: " +
            e.Message + "
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
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
- Using the Partner WSDL (atlas.en-us.api.meta/api/sforce_api_partner.htm)
