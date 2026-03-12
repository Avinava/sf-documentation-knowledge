---
title: "View the Data Loader Log File"
domain: dataLoader
topic: view-the-data-loader-log-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.332Z
estimatedTokens: 245
keywords: [View, Data, Loader, Log, File, investigate, problem, requested, Salesforce, Customer, Support, access, files, track, operations]
---

# View the Data Loader Log File

> If you need to investigate a problem with Data Loader, or if requested by Salesforce Customer Support, you can access log files
  that track the operations and network connections made by Data Loader.

# View the Data Loader Log File

If you need to investigate a problem with Data Loader, or if requested by Salesforce Customer Support, you can access log files that track the operations and network connections made by Data Loader.

-   The log file, sdl.log, contains a detailed chronological list of Data Loader log entries. Log entries marked “INFO” are procedural items, such as logging in to and out of Salesforce. Log entries marked “ERROR” are problems such as a submitted record missing a required field. The log file can be opened with commonly available text editor programs, such as Microsoft Notepad.
-   If you are using Data Loader for Windows, view the log file by entering %TEMP%\\sdl.log in either the Run dialog or the Windows Explorer address bar.
-   If you are using Data Loader for Mac OSX, view the log file by opening the terminal and entering open $TMPDIR/sdl.log.
-   If you are having login issues from the UI, you need to obtain a new security token.
