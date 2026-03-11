---
title: "DataWeave in Apex"
domain: apex-guide
topic: dataweave-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.191Z
keywords: [DataWeave, Apex, Note, See]
---

# DataWeave in Apex

# DataWeave in Apex

DataWeave in Apex uses the Mulesoft DataWeave library to read and parse data from one format, transform it, and export it in a different format. You can create DataWeave scripts as metadata and invoke them directly from Apex. Like Apex, DataWeave scripts are run within Salesforce application servers, enforcing the same heap and CPU limits on the executing code.

Enterprise applications often require transformation of data between formats such as CSV, JSON, XML, and Apex objects. DataWeave in Apex complements native Apex support for JSON and XML processing, and makes data transformation easier to code, more scalable, and efficient. Apex developers can focus more on solving business problems and less on addressing the specifics of file formats.

DataWeave is the MuleSoft expression language for accessing, parsing, and transforming data that travels through a Mule application. For detailed information, see [DataWeave Overview](https://docs.mulesoft.com/mule-runtime/4.3/dataweave "HTML (New Window)"). 

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You don’t have to be a MuleSoft customer or have any specific Salesforce license to use DataWeave in Apex.

The following are some use-cases for DataWeave in Apex.

-   Serializing Apex objects with custom date formats
-   Serializing and deserializing JSON with Apex reserved keywords
-   Performing custom transformations like removing or adding namespaces or removing \_\_c suffixes
-   Parsing and transforming RFC 4180-compliant CSV (Comma-Separated Values) data

You can create a listview for DataWeave resources in your org and view deployed DataWeave scripts within your namespace. From Setup, in the Quick Find box, enter DataWeave, and then select **DataWeave Resources**. Select the fields that you want to monitor, such as the DataWeave Resource ID, Name, Namespace Prefix, and API Version.

-   **[Implementing DataWeave in Apex](atlas.en-us.apexcode.meta/apexcode/DataWeaveInApex_impl.htm)**  
    Create DataWeave scripts as metadata and invoke them directly from Apex. Use class methods and exceptions in the DataWeave namespace to load and execute the scripts.
-   **[Examples of DataWeave in Apex](atlas.en-us.apexcode.meta/apexcode/DataWeaveInApex_UseCase.htm)**  
    Here are code samples that demonstrate DataWeave in Apex.
-   **[Limitations of DataWeave in Apex](atlas.en-us.apexcode.meta/apexcode/DataWeaveInApex_limitations.htm)**  
    DataWeave in Apex has these limitations.

#### See Also

-   [*Apex Reference Guide*: DataWeave Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_dataweave.htm "Apex Reference Guide: DataWeave Namespace - HTML (New Window)")
    
-   [*Metadata API Developer Guide*: DataWeaveResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_dataweaveresource.htm "Metadata API Developer Guide: DataWeaveResource - HTML (New Window)")
    
-   [*Salesforce DX Developer Guide*: DataWeaveResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/packaging_packageable_components.htm#mdc_dataweaveresource "Salesforce DX Developer Guide: DataWeaveResource - HTML (New Window)")