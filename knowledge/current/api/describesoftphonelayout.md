---
title: "describeSoftphoneLayout()"
domain: api
topic: describesoftphonelayout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.209Z
estimatedTokens: 1112
keywords: [describeSoftphoneLayout, Retrieves, layout, Salesforce, CRM, Call, Center, Softphone, Usage, Arguments, DescribeSoftphoneLayoutCallType, DescribeSoftphoneLayoutInfoField, DescribeSoftphoneLayoutSection, DescribeSoftphoneLayoutItem, DescribeSoftphoneScreenPopOption]
---

# describeSoftphoneLayout()

> Retrieves layout information for a Salesforce CRM Call Center Softphone.

# describeSoftphoneLayout()

Retrieves layout information for a Salesforce CRM Call Center Softphone.

## Syntax

```

```

## Usage

Use this call to obtain information about the layout of a Softphone. Use only in the context of Salesforce CRM Call Center; do not call directly from client programs.

## Arguments

This call does not take any objects.

## Response

The response is a DescribeSoftphoneLayoutResult object:

| Name | Type | Description |
| --- | --- | --- |
| callTypes | DescribeSoftphoneLayoutCallType[] | A set of attributes associated with each allowed call type. A call type may be Inbound, Outbound, or Internal. |
| id | ID | ID of layout. Note that layout objects are not exposed via the API. |
| name | string | Name of the call type: Inbound, Outbound, or Internal. |

## DescribeSoftphoneLayoutCallType

Each DescribeSoftphoneLayoutResult object contains one or more call types:

| Name | Type | Description |
| --- | --- | --- |
| infoFields | DescribeSoftphoneLayoutInfoField[] | A set of information field in the softphone layout. |
| name | string | Name of the layout. |
| screenPopOptions | DescribeSoftphoneScreenPopOption[] | Settings in the softphone layout that specify how to display screen pops when the details of calls match or don't match existing records.This field is available in API version 18.0 and later. |
| screenPopsOpenWithin | string | Setting in the softphone layout that specify whether to display screen pops in a new browser window or tab when the details of calls match or don't match existing records.This field is available in API version 18.0 and later. |
| sections | DescribeSoftphoneLayoutSection[] | A set of object names and the corresponding item name in the softphone layout. There is one section for each object in a call type. |

## DescribeSoftphoneLayoutInfoField

An information field in the softphone layout.

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of an information field in the softphone layout that does not correspond to a Salesforce object. For example, caller ID may be specified in an information field. Information fields hold static information about the call type. |

## DescribeSoftphoneLayoutSection

Each call type returned in a DescribeSoftphoneLayoutResult object contains one section for each call type. Each section contains object-item pairs:

| Name | Type | Description |
| --- | --- | --- |
| entityApiName | string | The name of an object in the Salesforce application that corresponds to an item displayed in the softphone layout, for example, a set of accounts or cases. |
| items | DescribeSoftphoneLayoutItem[] | A set of softphone layout items. |

## DescribeSoftphoneLayoutItem

Each layout item corresponds to a record in Salesforce:

| Name | Type | Description |
| --- | --- | --- |
| itemApiName | string | The name of a record in the Salesforce application that corresponds to an item displayed in the softphone layout, for example, the Acme account. |

## DescribeSoftphoneScreenPopOption

Each call type returned in a DescribeSoftphoneLayoutResult object contains one screenPopOptions field for each call type. Each screenPopOptions field contains details about screen pop settings:

| Name | Type | Description |
| --- | --- | --- |
| matchType | string | Setting on a softphone layout to pop a screen for call details that match a single record, multiple records, or no records. |
| screenPopData | string | Setting on a softphone layout for a specific object or page to pop for a call's matchType. For example, pop a specified Visualforce page when the details of a call match a record. |
| screenPopType | picklist | Setting that specifies how to pop a screen for a call's matchType. For example, pop a detail page or don't pop any page when the details of a call match a record. |

## Sample Code—Java

This sample describes the soft phone layout and writes its properties to the console. It then gets the allowed call types. For each call type, it gets its information fields, layout sections, and the layout items in the layout sections. It writes these values to the console.

```

```

## Sample Code—C#

This sample describes the soft phone layout and writes its properties to the console. It then gets the allowed call types. For each call type, it gets its information fields, layout sections, and the layout items in the layout sections. It writes these values to the console.

```

```

## Code Examples

```
DescribeSoftphoneLayoutResult[] = connection.describeSoftphoneLayout();
```

```apex
public void describeSoftphoneLayout() {
  try {
    DescribeSoftphoneLayoutResult result =
        connection.describeSoftphoneLayout();
    System.out.println("ID of retrieved Softphone layout: " +
        result.getId());
    System.out.println("Name of retrieved Softphone layout: " +
        result.getName());
    System.out.println("
Contains following " +
        "Call Type Layouts
");
    for (DescribeSoftphoneLayoutCallType type :
          result.getCallTypes()) {
      System.out.println("Layout for " + type.getName() +
          " calls");  
      System.out.println("\tCall-related fields:");
      for (DescribeSoftphoneLayoutInfoField field :
            type.getInfoFields()) {
        System.out.println("\t\t{" + field.getName());
      }
      System.out.println("\tDisplayed Objects:");
      for (DescribeSoftphoneLayoutSection section :
            type.getSections()) {
        System.out.println("\t\tFor entity " +
            section.getEntityApiName() +
            " following records are displayed:"
        );
        for (DescribeSoftphoneLayoutItem item :
              section.getItems()) {
          System.out.println("\t\t\t" + item.getItemApiName());
        }
      }
    }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

```apex
/// Demonstrates how to retrieve the layout information
/// for a Salesforce CRM Call Center Softphone
public void DescribeSoftphoneLayoutSample()
{
   try
   {
       DescribeSoftphoneLayoutResult dsplResult = binding.describeSoftphoneLayout();
       
       // Display the ID and Name of the layout
       Console.WriteLine("ID of retrieved Softphone layout: {0}", dsplResult.id);
       Console.WriteLine("Name of retrieved Softphone layout: {0}", dsplResult.name);
       
       // Display the contents of each Call Type
       Console.WriteLine("
Contains following Call Type Layouts
");
       foreach (DescribeSoftphoneLayoutCallType dsplCallType in dsplResult.callTypes)
       {
           Console.WriteLine("Layout for {0} calls", dsplCallType.name);
           
           // Display the call-related fields contained in the call type
           Console.WriteLine("\tCall-related fields:");
           foreach (DescribeSoftphoneLayoutInfoField dsplInfoField
               in dsplCallType.infoFields)
           {
            Console.WriteLine("\t\t{0}", dsplInfoField.name);
           }
           
           // Display the objects that are included in the layout
           Console.WriteLine("\tDisplayed Objects:");
           foreach (DescribeSoftphoneLayoutSection dsplSection
               in dsplCallType.sections)
           {
               Console.WriteLine("\t\tFor entity {0} following records are displayed:",
                   dsplSection.entityApiName);
               foreach (DescribeSoftphoneLayoutItem dsplItem in dsplSection.items)
               {
                   Console.WriteLine("\t\t\t{0}", dsplItem.itemApiName);
               }
            }
       }
   }
   catch (SoapException e)
   {
       Console.WriteLine(e.Message);
       Console.WriteLine(e.StackTrace);
       Console.WriteLine(e.InnerException);
   }
}
```
