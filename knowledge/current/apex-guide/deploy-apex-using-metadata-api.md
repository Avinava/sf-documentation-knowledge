---
title: "Deploy Apex Using Metadata API"
domain: apex-guide
topic: deploy-apex-using-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.997Z
keywords: [Deploy, Apex, Metadata, API, Note, See]
---

# Deploy Apex Using Metadata API

# Deploy Apex Using Metadata API

Use Metadata API to deploy customization information, such as custom object definitions for your org.

To deploy custom metadata, use the Metadata.Operations.enqueueDeployment() method to asynchronously deploy metadata to the current org. For more information, see [Operations Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Metadata_Operations.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If a single deployment has over 2,000 Apex classes, [ApexCodeCoverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverage.htm "HTML (New Window)") objects for the deployed classes are deleted even if the deployment fails or is rolled back. ApexCodeCoverageAggregate objects aren’t affected.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_deploying_ide.htm "Deploy Apex Using Salesforce Extensions for Visual Studio Code and Code Builder")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_deploying_toolingAPI.htm "Deploy Apex Using Tooling API")

#### See Also

-   [*Metadata API Developer Guide*: deploy()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_deploy.htm "Metadata API Developer Guide: deploy() - HTML (New Window)")
    
-   [*Using Salesforce Features with Apex*: Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_metadata.htm "Using Salesforce Features with Apex: Metadata - HTML (New Window)")