---
title: "describeAllTabs()"
domain: api
topic: describealltabs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.964Z
estimatedTokens: 230
keywords: [describeAllTabs, tabs, including, Lightning, logged-in, user, regardless, whether, chosen, hide, own, via, tab, customization, feature]
---

# describeAllTabs()

> Returns information about all the tabs, including Lightning page tabs, available to
      the logged-in user, regardless of whether the user has chosen to hide tabs in his own user
      interface via the All Tabs (+) tab customization
    feature.

# describeAllTabs()

Returns information about all the tabs, including Lightning page tabs, available to the logged-in user, regardless of whether the user has chosen to hide tabs in his own user interface via the All Tabs (**+**) tab customization feature.

## Syntax

```

```

## Usage

Use the describeAllTabs() call to obtain information about all the tabs that are available to the logged-in user.

Alternately, use describeTabs() if you want information only about the tabs that display in the Salesforce user interface for the logged-in user.

## Sample Code—Java

This sample calls describeAllTabs(), which returns an array of DescribeTab results.

```

```

## Arguments

None.

## Response

[DescribeTab](atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm "The describeTabs() call returns an array of DescribeTabSetResult objects, of which DescribeTab is a property.")

## Code Examples

```
DescribeTab [] = connection.describeAllTabs();
```

```apex
public void describeAllTabsSample() {
  try {
    // Describe tabs
    DescribeTab[] tabs = connection.describeAllTabs();
    System.out.println("There are " + tabs.length + 
        " tabs available to you.");

      // Iterate through the returned tabs
      for (int j = 0; j < tabs.length; j++) {
        DescribeTab tab = tabs[j];
        System.out.println("\tTab " + (j + 1) + ":");
        System.out.println("\t\tName: " + tab.getName());
        System.out.println("\t\t\Associated SObject" + tab.getSobjectName());
        System.out.println("\t\tLabel: " + tab.getLabel());
        System.out.println("\t\tURL: " + tab.getUrl());
        DescribeColor[] tabColors = tab.getColors();
        // Iterate through tab colors as needed
        DescribeIcon[] tabIcons = tab.getIcons();
        // Iterate through tab icons as needed
      }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- DescribeTab (atlas.en-us.api.meta/api/sforce_api_calls_describetabs_describetabsetresult_describetab.htm)
