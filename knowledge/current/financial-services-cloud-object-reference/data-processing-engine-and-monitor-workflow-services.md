---
title: "Data Processing Engine and Monitor Workflow Services"
domain: financial-services-cloud-object-reference
topic: data-processing-engine-and-monitor-workflow-services
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:28.713Z
estimatedTokens: 475
keywords: [Data, Processing, Engine, Monitor, Workflow, Services, helps, transform, that's, Salesforce, org, write, back, transformation, results]
---

# Data Processing Engine and Monitor Workflow Services

> Data Processing Engine helps you transform data that's available in your Salesforce org
  and write back the transformation results as new or updated records. You can transform the data
  for standard and custom objects using Data Processing Engine definitions. After you activate a
  Data Processing Engine definition, you can run it. Each run can be tracked using Monitor Workflow
  Services.

# Data Processing Engine and Monitor Workflow Services

Data Processing Engine helps you transform data that's available in your Salesforce org and write back the transformation results as new or updated records. You can transform the data for standard and custom objects using Data Processing Engine definitions. After you activate a Data Processing Engine definition, you can run it. Each run can be tracked using Monitor Workflow Services.

| Available in: Lightning Experience |
| --- |
| Available in: Data Processing Engine is available with Enterprise, Unlimited, and Performance Editions with the Financial Services Cloud, Loyalty Management, or Rebate Management. Data Processing Engine isn’t available for Salesforce orgs in Government Cloud or Government Cloud Plus. |


Here's the data model for Data Processing Engine and Monitor Workflow Services:

![Data model diagram of Data Processing Enginr and Monitor Workflow Services.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffsc_api%2Fimages%2Fdpe_data_model.png&folder=financial_services_cloud_object_reference)

Here is the list of developer resources you can use for Data Processing Engine:

-   Standard Object
    -   BatchCalcJobDefinitionView
-   Setup Objects

    -   BatchCalcJobDefinition
    -   BatchJobDefinition

    To know more about setup objects, see the [Tooling API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm).

-   Invocable Actions
    -   dataProcessingEngineAction
-   Platform Event
    -   BatchJobStatusChangedEvent

Here is the list of standard objects for Monitor Workflow Services:

-   BatchJob
-   BatchJobPart
-   BatchDataPartFailedRecord

To know more about Data Processing Engine, see the [Data Processing Engine help](https://help.salesforce.com/articleView?id=concept_data_processing_engine.htm&language=en_US).
