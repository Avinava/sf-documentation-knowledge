---
title: "Apex Considerations for Salesforce Connect External
  Objects"
domain: apex-guide
topic: apex-considerations-for-salesforce-connect-external-objects
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:33.423Z
estimatedTokens: 974
keywords: [Apex, Considerations, Salesforce, Connect, External, Objects, code, access, data, via, any, adapter, requirements, limitations, apply]
---

# Apex Considerations for Salesforce Connect External
  Objects

> Apex code can access external object data via any Salesforce Connect adapter, but some
  requirements and limitations apply.

# Apex Considerations for Salesforce Connect External Objects

Apex code can access external object data via any Salesforce Connect adapter, but some requirements and limitations apply.

-   These features aren’t available for external objects.
    -   Apex-managed sharing
    -   Apex triggers (However, you can create triggers on external change data capture events from OData 4.0 connections.)
-   When developers use Apex to manipulate external object records, asynchronous timing and an active background queue minimize potential save conflicts. A specialized set of Apex methods and keywords handles potential timing issues with write execution. Apex also lets you retrieve the results of delete and upsert operations. Use the BackgroundOperation object to monitor job progress for write operations via the API or SOQL.
-   Database.insertAsync() methods can’t be executed in the context of a portal user, even when the portal user is a community member. To add external object records via Apex, use Database.insertImmediate() methods.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

When running an iterable batch Apex job against an external data source, the external records are stored in Salesforce while the job is running. The data is removed from storage when the job completes, whether or not the job was successful. No external data is stored during batch Apex jobs that use Database.QueryLocator.

-   If you use batch Apex with Database.QueryLocator to access external objects via an OData adapter for Salesforce Connect:

    -   Enable Request Row Counts on the external data source, and each response from the external system must include the total row count of the result set.
    -   We recommend enabling Server Driven Pagination on the external data source and having the external system determine page sizes and batch boundaries for large result sets. Typically, server-driven paging can adjust batch boundaries to accommodate changing datasets more effectively than client-driven paging.

        When Server Driven Pagination is disabled on the external data source, the OData adapter controls the paging behavior (client-driven). If external object records are added to the external system while a job runs, other records can be processed twice. If external object records are deleted from the external system while a job runs, other records can be skipped.

    -   When Server Driven Pagination is enabled on the external data source, the batch size at runtime is the smaller of the following:
        -   Batch size specified in the scope parameter of Database.executeBatch. Default is 200 records.
        -   Page size returned by the external system. We recommend that you set up your external system to return page sizes of 200 or fewer records.

#### See Also

-   [Use Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm "To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke the class programmatically. To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box and then select Apex Jobs.")

-   [*Salesforce Help*: Client-driven and Server-driven Paging for Salesforce Connect—OData 2.0 and 4.0 Adapters](https://help.salesforce.com/articleView?id=odata_paging.htm&language=en_US "Salesforce Help: Client-driven and Server-driven Paging for
    Salesforce Connect—OData 2.0 and 4.0 Adapters  - HTML (New Window)")

-   [*Salesforce Help*: Define an External Data Source for Salesforce Connect—OData 2.0 or 4.0 Adapter](https://help.salesforce.com/articleView?id=platform_connect_add_external_data_source.htm&language=en_US "Salesforce Help: Define an External Data Source for
    Salesforce Connect—OData 2.0 or 4.0 Adapter - HTML (New Window)")

## Related Topics

- Use Batch Apex (atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
