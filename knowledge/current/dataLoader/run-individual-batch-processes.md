---
title: "Run Individual Batch Processes"
domain: dataLoader
topic: run-individual-batch-processes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.322Z
estimatedTokens: 272
keywords: [Run, Individual, Batch, Processes, process, time]
---

# Run Individual Batch Processes

> You can run one batch process at a time.

# Run Individual Batch Processes

You can run one batch process at a time.

To start an individual batch process, use \\bin\\process.bat. The command-line requires the following parameters.

-   Configuration directory—The default is \\conf.

    To use an alternate directory, create a directory and add these files to it.

    -   If your process is not interactive, copy process-conf.xml from \\samples\\conf.
    -   If your process requires database connectivity, copy database-conf.xml from \\samples\\conf.
    -   Copy config.properties from \\conf.
-   Process name—The name of the ProcessRunner bean from \\samples\\conf\\process-conf.xml.

Process Example

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

To view tips and instructions, add \-help to the command contained in process.bat.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

You can configure external process launchers, such as the Windows XP Scheduled Task Wizard, to run processes on a schedule.

## Code Examples

```
process ../conf accountMasterProcess
```
