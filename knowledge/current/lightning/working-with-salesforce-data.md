---
title: "Working with Salesforce Data"
domain: lightning
topic: working-with-salesforce-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.658Z
estimatedTokens: 262
keywords: [Working, Salesforce, Data, Aura, component, Lightning, Service, via, force, recordData, form-based, components]
---

# Working with Salesforce Data

> To create, read, and update Salesforce data from an Aura component, use Lightning Data
  Service via force:recordData or the form-based components. To
  delete Salesforce data, use force:recordData.

# Working with Salesforce Data

To create, read, and update Salesforce data from an Aura component, use Lightning Data Service via force:recordData or the form-based components. To delete Salesforce data, use force:recordData.

-   **[Lightning Data Service](atlas.en-us.lightning.meta/lightning/data_service.htm)**
    Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency.
-   **[Using Apex](atlas.en-us.lightning.meta/lightning/apex_intro.htm)**
    Use Apex to write server-side code, such as controllers and test classes. Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.

## Related Topics

- Lightning Data Service (atlas.en-us.lightning.meta/lightning/data_service.htm)
- Using Apex (atlas.en-us.lightning.meta/lightning/apex_intro.htm)
