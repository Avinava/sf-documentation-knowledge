---
title: "Describing Tabs Using Schema Methods"
domain: apex-guide
topic: describing-tabs-using-schema-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.291Z
estimatedTokens: 226
keywords: [Describing, Tabs, Schema, get, metadata, information, apps, their, tabs, Salesforce, user, executing, describe, call, Apex., detailed, tab., describeTabs, getTabs, Schema.Desc]
---

# Describing Tabs Using Schema Methods

> You can get metadata information about the apps and their tabs available in the
            Salesforce user interface by executing a describe call in Apex. Also, you can get more
            detailed information about each tab. Use the describeTabs Schema method and the getTabs method in Schema.Desc

# Describing Tabs Using Schema Methods

You can get metadata information about the apps and their tabs available in the Salesforce user interface by executing a describe call in Apex. Also, you can get more detailed information about each tab. Use the describeTabs Schema method and the getTabs method in Schema.DescribeTabResult, respectively.

This example shows how to get the tab sets for each app. The example then obtains tab describe metadata information for the Sales app. For each tab, metadata information includes the icon URL, whether the tab is custom or not, and colors among others. The tab describe information is written to the debug output.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm "Describing sObjects Using Schema Method")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm "Accessing All sObjects")

## Code Examples

```apex
// Get tab set describes for each app
List<Schema.DescribeTabSetResult> tabSetDesc = Schema.describeTabs();

// Iterate through each tab set describe for each app and display the info
for(DescribeTabSetResult tsr : tabSetDesc) {
    String appLabel = tsr.getLabel();
    System.debug('Label: ' + appLabel);
    System.debug('Logo URL: ' + tsr.getLogoUrl());
    System.debug('isSelected: ' + tsr.isSelected());
    String ns = tsr.getNamespace();
    if (ns == '') {
        System.debug('The ' + appLabel + ' app has no namespace defined.');
    }
    else {
        System.debug('Namespace: ' + ns);
    }
    
    // Display tab info for the Sales app
    if (appLabel == 'Sales') {
        List<Schema.DescribeTabResult> tabDesc = tsr.getTabs();
        System.debug('-- Tab information for the Sales app --');
        for(Schema.DescribeTabResult tr : tabDesc) {
            System.debug('getLabel: ' + tr.getLabel());
            System.debug('getColors: ' + tr.getColors());
            System.debug('getIconUrl: ' + tr.getIconUrl());
            System.debug('getIcons: ' + tr.getIcons());
            System.debug('getMiniIconUrl: ' + tr.getMiniIconUrl());
            System.debug('getSobjectName: ' + tr.getSobjectName());
            System.debug('getUrl: ' + tr.getUrl());
            System.debug('isCustom: ' + tr.isCustom());
        }
    }
}

// Example debug statement output
// DEBUG|Label: Sales
// DEBUG|Logo URL: https://MyDomainName.my.salesforce.com/img/seasonLogos/2014_winter_aloha.png
// DEBUG|isSelected: true
// DEBUG|The Sales app has no namespace defined.// DEBUG|-- Tab information for the Sales app --
// (This is an example debug output for the Accounts tab.)
// DEBUG|getLabel: Accounts
// DEBUG|getColors: (Schema.DescribeColorResult[getColor=236FBD;getContext=primary;getTheme=theme4;], 
//       Schema.DescribeColorResult[getColor=236FBD;getContext=primary;getTheme=theme3;], 
//       Schema.DescribeColorResult[getColor=236FBD;getContext=primary;getTheme=theme2;])
// DEBUG|getIconUrl: https://MyDomainName.my.salesforce.com/img/icon/accounts32.png
// DEBUG|getIcons: (Schema.DescribeIconResult[getContentType=image/png;getHeight=32;getTheme=theme3;
//       getUrl=https://MyDomainName.my.salesforce.com/img/icon/accounts32.png;getWidth=32;], 
//       Schema.DescribeIconResult[getContentType=image/png;getHeight=16;getTheme=theme3;
//       getUrl=https://MyDomainName.my.salesforce.com/img/icon/accounts16.png;getWidth=16;])
// DEBUG|getMiniIconUrl: https://MyDomainName.my.salesforce.com/img/icon/accounts16.png
// DEBUG|getSobjectName: Account
// DEBUG|getUrl: https://MyDomainName.my.salesforce.com/001/o
// DEBUG|isCustom: false
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm)
