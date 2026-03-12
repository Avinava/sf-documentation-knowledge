---
title: "Find Uncaught Exceptions in Event Log Files"
domain: platform-events
topic: find-uncaught-exceptions-in-event-log-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.100Z
estimatedTokens: 276
keywords: [Uncaught, Exceptions, Event, Log, Files, unhandled, exception, occurs, execution, platform, Apex, trigger, Monitoring, Examples, include]
---

# Find Uncaught Exceptions in Event Log Files

> If an unhandled exception occurs during the execution of your platform event Apex
  trigger, you can get information about the exception using event log files in Event Monitoring.
  Examples of an unhandled exception include an uncatchable limit exception or an exception that the
  trigger doesn’t catch.

# Find Uncaught Exceptions in Event Log Files

If an unhandled exception occurs during the execution of your platform event Apex trigger, you can get information about the exception using event log files in Event Monitoring. Examples of an unhandled exception include an uncatchable limit exception or an exception that the trigger doesn’t catch.

To retrieve information about the unhandled exception, query EventLogFile. The event type for unhandled exceptions is Apex Unexpected Exception Event Type (ApexUnexpectedException).

#### See Also

-   [*Object Reference for the Salesforce Platform*: EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)

-   [*Object Reference for the Salesforce Platform*: Apex Unexpected Exception Event Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_apexunexpectedexception.htm)

-   [*Trailhead*: Event Monitoring](https://trailhead.salesforce.com/content/learn/modules/event_monitoring)
