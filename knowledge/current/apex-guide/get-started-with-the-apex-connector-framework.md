---
title: "Get Started with the Apex Connector Framework"
domain: apex-guide
topic: get-started-with-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.869Z
keywords: [Get, Started, Apex, Connector, Framework, Note]
---

# Get Started with the Apex Connector Framework

# Get Started with the Apex Connector Framework

To get started with your first custom adapter for Salesforce Connect, create two Apex classes: one that extends the DataSource.Connection class, and one that extends the DataSource.Provider class.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The DataSource.Connection class requires a Salesforce Connect add-on license. For more information, see [Salesforce Connect Adapters Included per Add-On License](https://help.salesforce.com/s/articleView?id=sf.platform_connect_license.htm&language=en_US "HTML (New Window)").

Let’s step through the code of a sample custom adapter.

1.  [Create a Sample DataSource.Connection Class Class](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_connection_class.htm)  
    First, create a DataSource.Connection class to enable Salesforce to obtain the external system’s schema and to handle queries and searches of the external data.
2.  [Create a Sample DataSource.Provider Class Class](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_provider_class.htm)  
    Now you need a class that extends and overrides a few methods in DataSource.Provider.
3.  [Set Up Salesforce Connect to Use Your Custom Adapter](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_setup.htm)  
    After you create your DataSource.Connection and DataSource.Provider classes, the Salesforce Connect custom adapter becomes available in Setup.