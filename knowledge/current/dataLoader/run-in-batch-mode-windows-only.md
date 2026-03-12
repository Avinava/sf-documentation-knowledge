---
title: "Run in Batch Mode (Windows Only)"
domain: dataLoader
topic: run-in-batch-mode-windows-only
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.238Z
estimatedTokens: 258
keywords: [Run, Batch, Mode, Windows, Data, Loader, command, line, runs, series, processes, certain, order, file, rerun]
---

# Run in Batch Mode (Windows Only)

> You can run Data Loader in batch mode from the Windows command line. Batch mode runs a
    series of Data Loader processes in a certain order using a batch file. You can rerun the same
    sequence of processes using an executable .bat file.

# Run in Batch Mode (Windows Only)

You can run Data Loader in batch mode from the Windows command line. Batch mode runs a series of Data Loader processes in a certain order using a batch file. You can rerun the same sequence of processes using an executable .bat file.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


We recommend that you set the JAVA\_HOME environment variable to the directory where Zulu OpenJDK is installed. Doing so ensures that you can run Data Loader in batch mode from the command line.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

If you’re batch mode from the command line with a version earlier than 8.0, upgrade your batch mode interface.
