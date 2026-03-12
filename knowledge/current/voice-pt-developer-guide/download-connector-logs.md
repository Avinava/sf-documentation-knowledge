---
title: "Download Connector Logs"
domain: voice-pt-developer-guide
topic: download-connector-logs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.999Z
estimatedTokens: 195
keywords: [Download, Connector, Logs, Partners, log, messages, their, logged, text, file]
---

# Download Connector Logs

> Partners can log messages from their connector and then download these logged
        messages as a text file.

# Download Connector Logs

Partners can log messages from their connector and then download these logged messages as a text file.

To enable logging, set debugEnabled to true in the CapabilitiesResult object that is returned as a result of the getCapabilities() method in the connector interface.

When debugEnabled is set to true, Settings in Omni-Channel has a new link titled “Download agent debug information” under Debugging. Click this link to download a text file that contains the data logged.

To log a message in the connector:

import { log, Constants } from 'scv-connector-base';

Example for logging an error message:

log({message: "Log this error"}, Constants.LOG\_LEVEL.ERROR);

Example for logging an info message:

log({anyobject: 1}, Constants.LOG\_LEVEL.INFO);
