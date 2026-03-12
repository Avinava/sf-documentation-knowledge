---
title: "Event Log File Browser"
domain: securityImplGuide
topic: event-log-file-browser
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.878Z
estimatedTokens: 371
keywords: [Event, Log, File, Browser, ELF, Setup, gives, quick, access, files, explore, download, data]
---

# Event Log File Browser

> Event Log File (ELF) Browser in Setup gives you quick access to event log files so you
    can explore and download all of your event log file data.

# Event Log File Browser

Event Log File (ELF) Browser in Setup gives you quick access to event log files so you can explore and download all of your event log file data.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Edition |

| User Permissions Needed |
| --- |
| To view event log files: | View Event Log Files |
| To view Setup: | View Setup |

**Discover Event Log Files**

With ELF browser, you can sort and explore Event Log Files by type, log date, log file length, and more. Easily filter by date and event type to find the data you need. You can access ELF Browser directly from Setup.

**Download Event Log Files directly from ELF Browser**

Download Event Log File data by selecting a date range, clicking the dropdown button to the right of the event log file, and selecting **Download as CSV File**.

Alternatively, use the File Download servlet by adding /servlet/servlet.FileDownload?file=<ELF\_ID\_NUMBER> after your org URL. For example, https://mycompany.my.salesforce.com/servlet/servlet.FileDownload?file=0ATRM000000dcbH0A0. The file download begins automatically.

![ELF Browser user interface](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2Fem_elf_browser_copy.png&folder=securityImplGuide)

For more information on Event Log Files, see [Using Event Monitoring](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm).
