---
title: "Configure Batch Processes"
domain: dataLoader
topic: configure-batch-processes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.318Z
estimatedTokens: 572
keywords: [Configure, Batch, Processes, samples, conf, process-conf.xml, Data, Loader, represented, ProcessRunner, beans]
---

# Configure Batch Processes

> Use \samples\conf\process-conf.xml to configure your 
    Data Loader processes, which are represented by ProcessRunner beans.

# Configure Batch Processes

Use \\samples\\conf\\process-conf.xml to configure your Data Loader processes, which are represented by ProcessRunner beans.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

A process must have ProcessRunner as the class attribute and these properties set in the configuration file.

-   name—Sets the name of the ProcessRunner bean. This value is also used as the non-generic thread name and for configuration backing files.
-   configOverrideMap—A property of type map where each entry represents a configuration setting: the key is the setting name; the value is the setting value.
-   enableLastRunOutput—If set to true (the default), output files containing information about the last run, such as sendAccountsFile\_lastrun.properties, are generated and saved to the location specified by lastRunOutputDirectory. If set to false, the files are not generated or saved.
-   lastRunOutputDirectory—The directory location where output files containing information about the last run, such as sendAccountsFile\_lastrun.properties, are written. The default value is \\conf. If enableLastRunOutput is set to false, this value is not used because the files are not generated.

The configuration backing file stores configuration parameter values from the last run for debugging purposes, and is used to load default configuration parameters in config.properties. The settings in configOverrideMap take precedence over the settings in the configuration backing file. The configuration backing file is managed programmatically and does not require any manual edits.

For the names and descriptions of available process configuration parameters, see [Data Loader Process Configuration Parameters](atlas.en-us.dataLoader.meta/dataLoader/loader_params.htm "When running Data Loader from the command line, you can specify configuration parameters in the process-conf.xml file. In some cases, the parameter is also represented in the UI at Settings > Settings.").

## Related Topics

- Data Loader Process Configuration Parameters (atlas.en-us.dataLoader.meta/dataLoader/loader_params.htm)
