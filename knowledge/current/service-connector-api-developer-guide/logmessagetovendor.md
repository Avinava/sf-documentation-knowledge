---
title: "logMessageToVendor"
domain: service-connector-api-developer-guide
topic: logmessagetovendor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.427Z
estimatedTokens: 117
keywords: [logMessageToVendor, Send, log, message, payload, vendor, connector's, logging, facility]
---

# logMessageToVendor

> Send a log message and optional payload to the vendor connector's logging facility.

# logMessageToVendor

Send a log message and optional payload to the vendor connector's logging facility.

## Signature

logMessageToVendor(logLevel, message, payload) → void

## Parameters

| Field | Details |
| --- | --- |
| logLevel | TypeStringDescriptionLogging level (INFO, WARN, ERROR).RequiredYes |
| message | TypeStringDescriptionThe message to log.RequiredYes |
| payload | TypeObjectDescriptionOptional structured payload to accompany the log.RequiredNo |
