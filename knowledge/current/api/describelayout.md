---
title: "describeLayout()"
domain: api
topic: describelayout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.061Z
estimatedTokens: 1759
keywords: [describeLayout, Retrieves, metadata, layouts, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# describeLayout()

> Retrieves metadata about page layouts for the 
        specified object type.

# describeLayout()

Retrieves metadata about page layouts for the specified object type.

## Syntax

```

```

## Usage

Use this call to retrieve information about the layout (presentation of data to users) for a given object type. This call returns metadata about a given page layout, such as the detail page layout, the edit page layout, and the record type mappings. For additional information, see “Page Layouts” in Salesforce Help .

Generally, user profiles have one layout associated with each object. In Enterprise, Unlimited, and Performance Editions, user profiles can have multiple layouts per object, where each layout is specific to a given record type. This call returns metadata for multiple layouts, if applicable.

Layouts can be further customized in standard objects that have defined named layouts, which are separate from the primary layout for both the profile and the record type. One example of named layouts is the UserAlt layout defined on the User object, which is consumed in the Salesforce mobile app instead of the primary User layout. New layout names can only be defined by Salesforce, but customization of named layouts is controlled by administrators in the same way as primary layouts.

If you supply a null value for [recordTypeIds](#i1425561), all the layouts for that user are returned, instead of just the layouts for each specified record type. The same layout can be associated with multiple record types for the user’s profile, in which case there would only be one layout returned.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

This call is an advanced API call that is typically used only by partners who have written custom page rendering code for generating output on a specialized device (for example, on PDAs) and need to examine the layout details of an object before rendering the page output.

Use this procedure to describe layouts:

1.  To display a detail page or edit page for a record that exists, a client application first gets the [recordTypeIds](#i1425561) from the record, then it finds the layoutId associated with that [recordTypeIds](#i1425561) (through recordTypeMapping), and finally it uses that layout information to render the page.
2.  To display the create version of an edit page, a client application first determines whether more than one record type is available and, if so, presents the user with a choice. After a record type has been chosen, then the client application uses the layout information to render the page. It uses the picklist values from the [RecordTypeMapping](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm#recordTypeMapping) to display valid picklist values for picklist fields.
3.  A client application can access the labels for the layout, using the [DescribeLayoutResult](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm "The describeLayout() call returns a DescribeLayoutResult object containing top-level record type information about the passed-in sObjectType, as well as a mapping of record types to layouts. Your client application can traverse this object to retrieve detailed metadata about the layout.").

These restrictions apply to person account record types:

-   [describeLayout()](# "Retrieves metadata about page layouts for the specified object type.") for version 7.0 and below returns the default business account record type as the default record type even if the tab default is a person account record type. In version 8.0 and after, it’s always the tab default.
-   [describeLayout()](# "Retrieves metadata about page layouts for the specified object type.") for version 7.0 and below doesn’t return any person account record types.

For more information about person account record types, see [Person Account Record Types](atlas.en-us.api.meta/api/sforce_api_guidelines_personaccounts.htm "The person account record types enable specialized business-to-consumer functionality for users who sell to or do business with individuals. For example, a doctor, hairdresser, or real estate agent whose clients are individuals.").

## Sample Code—Java

This sample shows how to get the layouts of an Account sObject. It calls describeLayout() with the name of the sObject type to describe. It doesn’t specify record type IDs as a third argument, which means that layouts for all record types are returned if record types are defined in your org for the specified sObject. After getting the layout, the sample writes the number of detail and edit sections found and their headings. Next, it iterates through each edit layout section and retrieves its components.

```

```

## Sample Code—C#

This sample shows how to get the layouts of an Account sObject. It calls describeLayout() with the name of the sObject type to describe. It doesn’t specify record type IDs as a third argument, which means that layouts for all record types are returned if record types are defined in your org for the specified sObject. After getting the layout, the sample writes the number of detail and edit sections found and their headings. Next, it iterates through each edit layout section and retrieves its components.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectType | string | The specified value must be a valid object for your organization. If the object is a person account, specify Account, or if it is a person contact, specify Contact. |
| layoutName | string | The specified value must be a valid named layout for this object. Layout names are obtained from namedLayoutInfos in DescribeSObjectResult. The entity name is not valid because the primary layout is not considered “named.” |
| recordTypeIds | ID[] | Optional parameter restricts the layout data returned to the specified record types.To retrieve the layout for the primary record type, specify the value 012000000000000AAA for the recordTypeIds regardless of the object. This value is returned in the recordTypeInfos for the primary record type in the DescribeSObjectResult. A SOQL query returns a null value, not 012000000000000AAA.For information on IDs, see ID Field Type. |

## Response

[DescribeLayoutResult](atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm "The describeLayout() call returns a DescribeLayoutResult object containing top-level record type information about the passed-in sObjectType, as well as a mapping of record types to layouts. Your client application can traverse this object to retrieve detailed metadata about the layout.")

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [https://developer.salesforce.com/page/Sample\_SOAP\_Messages](https://developer.salesforce.com/page/Sample_SOAP_Messages)

## Code Examples

```
DescribeLayoutResult = connection.describeLayout(string sObjectType, string layoutName, ID recordTypeID[]);
```

```apex
public void describeLayoutSample(){
  try {
      String objectToDescribe = "Account";
      DescribeLayoutResult dlr = 
          connection.describeLayout(objectToDescribe, null, null);
      System.out.println("There are " + dlr.getLayouts().length +
          " layouts for the " + objectToDescribe + " object."
      );
      
      // Get all the layouts for the sObject
      for(int i = 0; i < dlr.getLayouts().length; i++) {
        DescribeLayout layout = dlr.getLayouts()[i];
        DescribeLayoutSection[] detailLayoutSectionList = 
          layout.getDetailLayoutSections();
        System.out.println(" There are " +
          detailLayoutSectionList.length + 
            " detail layout sections");
        DescribeLayoutSection[] editLayoutSectionList = 
          layout.getEditLayoutSections();
        System.out.println(" There are " +
          editLayoutSectionList.length + 
          " edit layout sections");
        
        // Write the headings of the detail layout sections 
        for(int j = 0; j < detailLayoutSectionList.length; j++) {
          System.out.println(j + 
              " This detail layout section has a heading of " + 
              detailLayoutSectionList[j].getHeading());              
        }
        
        // Write the headings of the edit layout sections 
        for(int x = 0; x < editLayoutSectionList.length; x++) {  
          System.out.println(x + 
              " This edit layout section has a heading of " + 
              editLayoutSectionList[x].getHeading());  
        }
                          
        // For each edit layout section, get its details.
        for(int k = 0; k < editLayoutSectionList.length; k++) {
          DescribeLayoutSection els = 
            editLayoutSectionList[k];    
          System.out.println("Edit layout section heading: " + 
              els.getHeading());
          DescribeLayoutRow[] dlrList = els.getLayoutRows();
            System.out.println("This edit layout section has " +
                dlrList.length + " layout rows.");
            for(int m = 0; m < dlrList.length; m++) {
              DescribeLayoutRow lr = dlrList[m];
              System.out.println(" This row has " + 
                  lr.getNumItems() + " layout items.");
              DescribeLayoutItem[] dliList = lr.getLayoutItems();
              for(int n = 0; n < dliList.length; n++) {
                DescribeLayoutItem li = dliList[n];
                if ((li.getLayoutComponents() != null) && 
                  (li.getLayoutComponents().length > 0)) {
                  System.out.println("\tLayout item " + n + 
                      ", layout component: " + 
                      li.getLayoutComponents()[0].getValue());
                }
                else {
                System.out.println("\tLayout item " + n + 
                      ", no layout component");                  
                }                    
              }
            }
         }
      }
      
      // Get record type mappings
      if (dlr.getRecordTypeMappings() != null) {
        System.out.println("There are " +
            dlr.getRecordTypeMappings().length + 
            " record type mappings for the " +
            objectToDescribe + " object"
        );
      } else {
        System.out.println(
            "There are no record type mappings for the " +
            objectToDescribe + " object."
        );
      }
    } catch (ConnectionException ce) {
      ce.printStackTrace();
    }
}
```

```apex
public void describeLayoutSample()
{
    try
    {
        String objectToDescribe = "Account";
        DescribeLayoutResult dlr =
            binding.describeLayout(objectToDescribe, null, null);
        Console.WriteLine("There are " + dlr.layouts.Length +
            " layouts for the " + objectToDescribe + " object."
        );

        // Get all the layouts for the sObject
        for (int i = 0; i < dlr.layouts.Length; i++)
        {
            DescribeLayout layout = dlr.layouts[i];
            DescribeLayoutSection[] detailLayoutSectionList =
                layout.detailLayoutSections;
            Console.WriteLine(" There are " +
                detailLayoutSectionList.Length +
                " detail layout sections");
            DescribeLayoutSection[] editLayoutSectionList =
                layout.editLayoutSections;
            Console.WriteLine(" There are " +
                editLayoutSectionList.Length +
                " edit layout sections");

            // Write the headings of the detail layout sections 
            for (int j = 0; j < detailLayoutSectionList.Length; j++)
            {
                Console.WriteLine(j +
                    " This detail layout section has a heading of " +
                    detailLayoutSectionList[j].heading);
            }

            // Write the headings of the edit layout sections 
            for (int x = 0; x < editLayoutSectionList.Length; x++)
            {
                Console.WriteLine(x +
                    " This edit layout section has a heading of " +
                    editLayoutSectionList[x].heading);
            }

            // For each edit layout, get its details.
            for (int k = 0; k < editLayoutSectionList.Length; k++)
            {
                DescribeLayoutSection els =
                    editLayoutSectionList[k];
                Console.WriteLine("Edit layout section heading: " +
                        els.heading);
                DescribeLayoutRow[] dlrList = els.layoutRows;
                Console.WriteLine("This edit layout section has " +
                        dlrList.Length + " layout rows.");
                for (int m = 0; m < dlrList.Length; m++)
                {
                    DescribeLayoutRow lr = dlrList[m];
                    Console.WriteLine(" This row has " +
                        lr.numItems + " layout items.");
                    DescribeLayoutItem[] dliList = lr.layoutItems;
                    for (int n = 0; n < dliList.Length; n++)
                    {
                        DescribeLayoutItem li = dliList[n];
                        if ((li.layoutComponents != null) &&
                                (li.layoutComponents.Length > 0))
                        {
                            Console.WriteLine("\tLayout item " + n +
                                    ", layout component: " +
                                li.layoutComponents[0].value);
                        }
                        else
                        {
                            Console.WriteLine("\tLayout item " + n +
                                    ", no layout component");
                        }
                    }
                }
            }

            // Get record type mappings
            if (dlr.recordTypeMappings != null)
            {
                Console.WriteLine("There are " +
                    dlr.recordTypeMappings.Length +
                    " record type mappings for the " +
                    objectToDescribe + " object");
            }
            else
            {
                Console.WriteLine(
                    "There are no record type mappings for the " +
                    objectToDescribe + " object.");
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

- DescribeLayoutResult (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
- RecordTypeMapping (atlas.en-us.api.meta/api/sforce_api_calls_describelayout_describelayoutresult.htm)
- Person Account Record Types (atlas.en-us.api.meta/api/sforce_api_guidelines_personaccounts.htm)
- recordTypeInfos (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- DescribeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
