---
title: "Obtain Processes That Subscribe to a Platform Event in Metadata
      API"
domain: platform-events
topic: obtain-processes-that-subscribe-to-a-platform-event-in-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.844Z
estimatedTokens: 120
keywords: [Obtain, Processes, Subscribe, Platform, Event, Metadata, API, retrieve, subscribed]
---

# Obtain Processes That Subscribe to a Platform Event in Metadata
      API

> Use Metadata API to retrieve all processes subscribed to a platform
      event.

# Obtain Processes That Subscribe to a Platform Event in Metadata API

Use Metadata API to retrieve all processes subscribed to a platform event.

1.  Retrieve all event subscriptions in your org with this sample package manifest.

    ```

    ```

2.  In each .subscription file, look at the referenceData parameter. The value is the API name of a process.

## Example

In this .subscription file, referenceData points to version 4 of the Printer\_Management process.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>EventSubscription</name>
   </types>
   <version>45.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<EventSubscription xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <eventType>Printer_Status__e</eventType>
    <referenceData>Printer_Management_4</referenceData>
</EventSubscription>
```
