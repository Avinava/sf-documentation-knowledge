---
title: "Download Large Event Log Files Using cURL with REST"
domain: rest-api
topic: download-large-event-log-files-using-curl-with-rest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.969Z
estimatedTokens: 223
keywords: [Download, Large, Event, Log, Files, cURL, REST, might, event, log, files, larger, tool, handle., command, line, such, download, 100, sObject]
---

# Download Large Event Log Files Using cURL with REST

> You might have some event log files that are larger than your tool can handle. A
            command line tool such as cURL is one method to download files larger than 100 MB using
            the sObject Blob Get object

# Download Large Event Log Files Using cURL with REST

You might have some event log files that are larger than your tool can handle. A command line tool such as cURL is one method to download files larger than 100 MB using the sObject Blob Get object

Example: Use the “X-PrettyPrint” header and the “-o” flag to output large files to .csv formats

This command downloads a file onto your machine into your downloads folder.

```

```

We recommend using compression when downloading large event log files. See [Compression Headers](atlas.en-us.api_rest.meta/api_rest/intro_rest_compression.htm#intro_rest_compression "Use a compression header to compress a REST API request or response. Compression reduces the bandwidth required for a request, although it requires more processing power at your client. In most cases, this tradeoff benefits the overall performance of your application.").

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/EventLogFile/0AT30000000000uGAA/LogFile
-H "Authorization: Bearer token" -H "X-PrettyPrint:1" -o ~/downloads/outputLogFile.csv
```

## Related Topics

- Compression Headers (atlas.en-us.api_rest.meta/api_rest/intro_rest_compression.htm)
