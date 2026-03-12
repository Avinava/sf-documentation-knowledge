---
title: "Process Configuration Settings"
domain: retail-api
topic: process-configuration-settings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.704Z
estimatedTokens: 425
keywords: [Process, Configuration, Settings, executing, API, system, reads, Setting, Custom, order, define, it’s, behavior]
---

# Process Configuration Settings

> When executing BO API process, the system reads the following configuration values
        from System Setting Custom setting in order to define it’s behavior.

# Process Configuration Settings

When executing BO API process, the system reads the following configuration values from System Setting Custom setting in order to define it’s behavior.

-   Maximum number of retries
    -   Setting Name: BO\_API\_Max\_Retries
    -   Default Value: 10
    -   Minimum: 0
    -   Maximum: 100
    -   Description: When a DML Row Locking error is detected when processing a record, the system will automatically retry the operation. This value defines how many times the retry will happen before setting the record as errored.
-   Retry Max Delay
    -   Setting Name: BO\_API\_Retry\_Max\_Delay
    -   Default Value: 8
    -   Minimum: 0
    -   Maximum: 10
    -   Description: When retrying the processing of a record, in order to prevent additional Row Locking errors, the system will delay the execution of the Queueable job by a random delay between 0 minutes and the Retry Max Delay setting value. This is used to reduce the amount of parallel processed records.
-   Initial Job Max Delay
    -   Setting Name: BO\_API\_Initial\_Max\_Delay
    -   Default Value: 0
    -   Minimum: 0
    -   Maximum: 10
    -   Description: When processing a record for the first time (not a retry), defines the maximum delay added to this record. By default, initial job will have no delay
-   Retry on Rate Limit error.
    -   Setting Name: BO\_API\_Retry\_on\_Rate\_Limit\_Error
    -   Default Value: true
    -   Available values: false, true
    -   Description: If enabled, when processing a record, if the system detects an API Rate Limit error from Hyperforce, the processing will be retried following the same pattern as if the record had a Row Locking exception.
