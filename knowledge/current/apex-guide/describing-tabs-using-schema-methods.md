---
title: "Describing Tabs Using Schema Methods"
domain: apex-guide
topic: describing-tabs-using-schema-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.055Z
keywords: [Describing, Tabs, Schema, Methods]
---

# Describing Tabs Using Schema Methods

# Describing Tabs Using Schema Methods

You can get metadata information about the apps and their tabs available in the Salesforce user interface by executing a describe call in Apex. Also, you can get more detailed information about each tab. Use the describeTabs Schema method and the getTabs method in Schema.DescribeTabResult, respectively.

This example shows how to get the tab sets for each app. The example then obtains tab describe metadata information for the Sales app. For each tab, metadata information includes the icon URL, whether the tab is custom or not, and colors among others. The tab describe information is written to the debug output.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm "Describing sObjects Using Schema Method")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm "Accessing All sObjects")