---
title: "Set Up Salesforce Connect to Use Your Custom Adapter"
domain: apex-guide
topic: set-up-salesforce-connect-to-use-your-custom-adapter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.881Z
keywords: [Set, Salesforce, Connect, Custom, Adapter]
---

# Set Up Salesforce Connect to Use Your Custom Adapter

# Set Up Salesforce Connect to Use Your Custom Adapter

After you create your DataSource.Connection and DataSource.Provider classes, the Salesforce Connect custom adapter becomes available in Setup.

Complete the tasks that are described in “[Set Up Salesforce Connect to Access External Data with a Custom Adapter](https://help.salesforce.com/apex/HTViewHelpDoc?id=apex_adapter_setup.htm&language=en_US "HTML (New Window)")” in the Salesforce Help.

To add write capability for external objects to your adapter:

1.  Make the external data source for this adapter writable. See “[Define an External Data Source for Salesforce Connect—Custom Adapter](https://help.salesforce.com/articleView?id=apex_add_external_data_source.htm&language=en_US "HTML (New Window)")” in the Salesforce Help.
2.  Implement the DataSource.Connection.upsertRows() and DataSource.Connection.deleteRows() methods for the adapter. For details, see [Connection Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_Connection.htm).

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_provider_class.htm "Create a Sample DataSource.Provider Class Class")