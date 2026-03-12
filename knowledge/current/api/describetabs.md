---
title: "describeTabs()"
domain: api
topic: describetabs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.236Z
estimatedTokens: 936
keywords: [describeTabs, Salesforce, Classic, standard, custom, apps, logged-in, user, Usage, Sample, Code—Java, Code—C#, Arguments]
---

# describeTabs()

> Returns information about the Salesforce Classic standard and custom apps available
        to the logged-in user.

# describeTabs()

Returns information about the Salesforce Classic standard and custom apps available to the logged-in user.

Returns information about the Salesforce Classic standard and custom apps available to the logged-in user, as listed in the Lightning Platform app menu at the top of the page. An app is a set of tabs that works as a unit to provide application functionality. For example, two of the standard Salesforce apps are “Sales” and “Service.”

## Syntax

```

```

## Usage

Use the [describeTabs()](# "Returns information about the Salesforce Classic standard and custom apps available to the logged-in user.") call to obtain information about the Salesforce Classic standard and custom apps to which the logged-in user has access. The describeTabs() call returns the minimum required metadata that can be used to render apps in another user interface. Typically this call is used by partner applications to render Salesforce data in another user interface.

For each app, the call returns the app name, the URL of the logo, whether it's the currently selected application for the user, and details about the tabs included in that app.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api)

#### Important

The [describeTabs()](# "Returns information about the Salesforce Classic standard and custom apps available to the logged-in user.") call returns information only about tabs that display in the Salesforce user interface for the logged-in user. If a user clicks the All Tabs (+) tab and hides some tabs from his Salesforce user interface, those user-hidden tabs aren't included in the set of tabs returned by describeTabs().

Use the describeAllTabs() call to obtain information about all the tabs that are available to the logged-in user.

For each tab, the call returns the tab name, the primary [sObject](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#sobject_topic) that's displayed on the tab, whether it's a custom tab, and the URL for viewing that tab. The “All Tabs” tab and Lightning page tabs aren't included in the list of tabs.

## Sample Code—Java

This sample calls describeTabs(), which returns an array of tab set results. Next, for each tab set result, which represents a Salesforce Classic app, it retrieves some of its properties and gets all the tabs for this app. It writes all retrieved properties to the console.

```

```

## Sample Code—C#

This sample calls describeTabs(), which returns an array of tab set results. Next, for each tab set result, which represents a Salesforce Classic app, it retrieves some of its properties and gets all the tabs for this app. It writes all retrieved properties to the console.

```

```

## Arguments

None.

## Response

[describeTabSetResult](atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult.htm "The describeTabs() call returns an array of DescribeTabSetResult objects."), [DescribeTab](atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm "The describeTabs() call returns an array of DescribeTabSetResult objects, of which DescribeTab is a property.")

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

-   [Using the Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner.htm)

-   [DescribeTab](atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm "The describeTabs() call returns an array of DescribeTabSetResult objects, of which DescribeTab is a property.")

-   [DescribeTabSetResult](atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult.htm "The describeTabs() call returns an array of DescribeTabSetResult objects.")

## Code Examples

```
describeTabSetResult []  = connection.describeTabs();
```

```apex
public void describeTabsSample() {
  try {
    // Describe tabs
    DescribeTabSetResult[] dtsrs = connection.describeTabs();
    System.out.println("There are " + dtsrs.length + 
        " tab sets defined.");
    
    // For each tab set describe result, get some properties 
    for (int i = 0; i < dtsrs.length; i++) {
      System.out.println("Tab Set " + (i + 1) + ":");
      DescribeTabSetResult dtsr = dtsrs[i];
      System.out.println("Label: " + dtsr.getLabel());
      System.out.println("\tLogo URL: " + dtsr.getLogoUrl());
      System.out.println("\tTab selected: " + 
          dtsr.isSelected());
      
      // Describe the tabs for the tab set
      DescribeTab[] tabs = dtsr.getTabs();
      System.out.println("\tTabs defined: " + tabs.length);
      
      // Iterate through the returned tabs
      for (int j = 0; j < tabs.length; j++) {
        DescribeTab tab = tabs[j];
        System.out.println("\tTab " + (j + 1) + ":");
        System.out.println("\t\tName: " + 
            tab.getSobjectName());
        System.out.println("\t\tLabel: " + tab.getLabel());
        System.out.println("\t\tURL: " + tab.getUrl());
        DescribeColor[] tabColors = tab.getColors();
        // Iterate through tab colors as needed
        DescribeIcon[] tabIcons = tab.getIcons();
        // Iterate through tab icons as needed
      }
    }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

```apex
public void describeTabsSample() {
    try {
      // Describe tabs
      DescribeTabSetResult[] dtsrs = binding.describeTabs();
      Console.WriteLine("There are " + dtsrs.Length + 
          " tab sets defined.");
          
      // For each tab set describe result, get some properties 
      for (int i = 0; i < dtsrs.Length; i++) {
          Console.WriteLine("Tab Set " + (i + 1) + ":");
          DescribeTabSetResult dtsr = dtsrs[i];
          Console.WriteLine("Label: " + dtsr.label);
          Console.WriteLine("\tLogo URL: " + dtsr.logoUrl);
          Console.WriteLine("\tTab selected: " + 
              dtsr.selected);
            
          // Describe the tabs for the tab set
          DescribeTab[] tabs = dtsr.tabs;
          Console.WriteLine("\tTabs defined: " + tabs.Length);
            
          // Iterate through the returned tabs
          for (int j = 0; j < tabs.Length; j++) {
              DescribeTab tab = tabs[j];
              Console.WriteLine("\tTab " + (j + 1) + ":");
              Console.WriteLine("\t\tName: " + 
                  tab.sobjectName);
              Console.WriteLine("\t\tLabel: " + tab.label);
              Console.WriteLine("\t\tURL: " + tab.url);
              DescribeColor[] tabColors = tab.colors;
              // Iterate through tab colors as needed
              DescribeIcon[] tabIcons = tab.icons;
              // Iterate through tab icons as needed
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

- describeTabSetResult (atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- DescribeTab (atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
- Using the Partner WSDL (atlas.en-us.api.meta/api/sforce_api_partner.htm)
- DescribeTabSetResult (atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult.htm)
