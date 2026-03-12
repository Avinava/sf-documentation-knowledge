---
title: "Configure the Data Loader Log File"
domain: dataLoader
topic: configure-the-data-loader-log-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.289Z
estimatedTokens: 279
keywords: [Configure, Data, Loader, Log, File, customize, advanced, troubleshooting, tracking, log-conf.xml, Levels]
---

# Configure the Data Loader Log File

> You can customize the Data Loader log file for advanced troubleshooting and
    tracking.

# Configure the Data Loader Log File

You can customize the Data Loader log file for advanced troubleshooting and tracking.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


## log-conf.xml

The log-conf.xml file is included with the Data Loader installer version 35.0 and later. To change the location of the log-conf.xml file, specify the full path, incuding the full file name, in the LOG4J\_CONFIGURATION\_FILE environment variable.

-   In Windows, the log-conf.xml file is at C:\\Users\\{userName}\\dataloader\\version\\configs
-   In macOS, the log-conf.xml file is at /Users/{userName}/dataloader/version/configs

## Configure Log Levels

Change @LOG\_LEVEL@ to TRACE, DEBUG, INFO, WARN, ERROR, or FATAL for the needed level of log tracking. For Log4J log levels, see [https://logging.apache.org/log4j/2.0/manual/architecture.html.](https://logging.apache.org/log4j/2.0/manual/architecture.html "HTML (New Window)")

To implement enhanced logging, use a copy of log-conf.xml.
