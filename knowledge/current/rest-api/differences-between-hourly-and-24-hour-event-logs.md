---
title: "Differences Between Hourly and 24-Hour Event Logs"
domain: rest-api
topic: differences-between-hourly-and-24-hour-event-logs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.123Z
estimatedTokens: 523
keywords: [Differences, Between, Hourly, 24-Hour, Event, Logs, receive, event, log, files, approximately, every, hour, addition, 24-hour, files., Review, differences, between, two]
---

# Differences Between Hourly and 24-Hour Event Logs

> You receive event log files approximately every hour in addition to 24-hour log files.
  Review the differences between the two logs so that you can filter your files to analyze the event
  data you want.

# Differences Between Hourly and 24-Hour Event Logs

You receive event log files approximately every hour in addition to 24-hour log files. Review the differences between the two logs so that you can filter your files to analyze the event data you want.

| Hourly Log Files | 24-Hour Log Files |
| --- | --- |
| One or more files generated for every hour of activity. | One file generated for every 24 hours of activity. |
| Available in the API. You can manually import data into third-party visualization apps. | Available in the API and integrated with the Event Monitoring Analytics app and third-party visualization apps. |
| Key values in the EventLogFile object are:Interval—HourlyCreatedDate—Timestamp of when the log file was created. Use this field to identify new files.LogDate—Timestamp that marks the beginning of the interval when the events occurred. For example, for events that occurred between 11:00 AM and 12:00 PM on 3/7/2016, this field’s value is 2016-03-07T11:00:00.000Z.Sequence—1+. This value increases by 1 when events are added in the same hour after the latest event log file is created. The value resets to 1 in the subsequent hour.See also these Considerations regarding hourly event logs. | Key values in the EventLogFile object are:Interval—DailyCreatedDate—Timestamp of when the log file was created. Use this field to identify new files.LogDate—Timestamp that marks the beginning of the interval when the events occurred. For example, for events that occurred on 3/7/2016, this field’s value is 2016-03-07T00:00:00.000+0000.Sequence—0 |
| When an hourly incremental log file is delivered, a file with new logs for that hour is created. The Sequence field is incremented for each new file. | When a daily incremental log file is delivered, a new file replaces the original file with the full set of available logs for that date. The CreatedDate field is updated. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

Like with 24-hour event monitoring, hourly event log data is available for the past 30 days.

## Related Topics

- Considerations (atlas.en-us.api_rest.meta/api_rest/event_log_file_hourly_overview.htm)
