---
title: "Monitor Workflow Services"
domain: omnistudio
topic: monitor-workflow-services
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.192Z
keywords: [Monitor, Workflow, Services]
---

# Monitor Workflow Services

# Monitor Workflow Services

The Montior Workflow Services standard objects can be used to track the run of Data Processing Engine definitons and Batch Management jobs. During a run, you can view details about each part that the run is broken down into. After the run is complete, you can view its status and the records which weren't processed during the run.

| Available in: Lightning Experience |
| --- |
| Available in: Monitor Workflow Services is available with Enterprise, Unlimited, and Performance Editions where Data Processing Engine or Batch Management is avaiable |
  

The objects of Monitor Workflow Services aren't available in Object Manager of your Salesforce org.

-   **[BatchJob](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjob.htm)**  
    Represents an instance of a batch job that is either running and has been run. This object is available in API version 51.0 and later.
-   **[BatchJobPart](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpart.htm)**  
    Represents one part of a batch job. This object is available in API version 51.0 and later.
-   **[BatchJobPartFailedRecord](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_objects_batchjobpartfailedrecord.htm)**  
    Represents records that a batch job part couldn't successfully process. This object is available in API version 51.0 and later.