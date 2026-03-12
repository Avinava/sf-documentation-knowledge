---
title: "Query Hourly Event Log Files"
domain: rest-api
topic: query-hourly-event-log-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:35.010Z
estimatedTokens: 270
keywords: [Query, Hourly, Event, Log, Files, way, 24-hour]
---

# Query Hourly Event Log Files

> You query hourly event log files in the same way you query 24-hour log
		files.

# Query Hourly Event Log Files

You query hourly event log files in the same way you query 24-hour log files.

Suppose you’re an administrator. Your Chief Security Officer asks you to identify who modified specific accounts and opportunities in the past two hours. You query the hourly URI event log files using the EventLogFile object to review the page requests and request status. Because EventLogFile also returns 24-hour log files, use this SOQL syntax to filter out the 24-hour log files.

```

```

In the query, Interval=Hourly makes sure that only hourly event log file data is returned. Alternatively, you can use Sequence to filter out 24-hour event log files (Sequence!=0). To get both hourly and 24-hour files, use Sequence>=0.

If your sandbox org has URI events, you see log file records in your query results. You can also download the event log files to review the data in a CSV file. For more information, see [Trailhead: Download and Visualize Event Log Files](https://trailhead.salesforce.com/event_monitoring/event_monitoring_download "HTML (New Window)").

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/query?​q=SELECT+Id+,​+EventType+,​+Interval+,+LogDate+,​+LogFile+​FROM+EventLogFile+​WHERE+EventType+=+'URI'+​AND+Interval+=+'Hourly' -H "Authorization: Bearer token"
```
