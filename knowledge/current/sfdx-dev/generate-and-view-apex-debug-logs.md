---
title: "Generate and View Apex Debug Logs"
domain: sfdx-dev
topic: generate-and-view-apex-debug-logs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.244Z
estimatedTokens: 300
keywords: [Generate, View, Apex, Debug, Logs, record, database, operations, system, processes, errors, occur, executing, transaction, running]
---

# Generate and View Apex Debug Logs

> Apex debug logs can record database operations, system processes, and errors that occur
  when executing a transaction or running unit tests in any authenticated org. Enable the Debug Log
  in Salesforce Extensions for VS Code, then view the logs with VS Code or Salesforce
  CLI.

# Generate and View Apex Debug Logs

Apex debug logs can record database operations, system processes, and errors that occur when executing a transaction or running unit tests in any authenticated org. Enable the Debug Log in Salesforce Extensions for VS Code, then view the logs with VS Code or Salesforce CLI.

1.  In Salesforce Extensions for VS Code, prepare the org to generate logs and configure the debugger.
    1.  Log in to the org.
    2.  For Replay Debugger, run **SFDX: Turn on Apex Debug Log for Replay Debugger**.
    3.  Create a launch configuration file for [Replay Debugger](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/replay-debugger.html) or [Interactive Debugger](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/interactive-debugger.html).
2.  After you run the tests, get a list of the debug logs.

    ```

    ```

3.  View a debug log by passing its ID to the apex get log command.

    ```

    ```


#### See Also

-   [*Apex Developer Guide*: Debug Log](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_debugging_debug_log.htm "Apex Developer Guide: Debug Log - HTML (New Window)")

## Code Examples

```
sf apex list log --target-org myscratch

APPLICATION DURATION (MS) ID       LOCATION  SIZE (B) LOG USER  OPERATION       REQUEST START TIME   STATUS
─────────── ───────────── ───────  ───────── ──────── ───────── ─────────────── ─────── ───────────  ───────
Unknown     1143          07L9Axx  SystemLog 23900    User User ApexTestHandler Api     2017-09-05x  Success
```

```
sf apex get log --log-id 07L9A000000aBYGUA2

38.0 APEX_CODE,FINEST;APEX_PROFILING,INFO;CALLOUT,INFO;DB,INFO;SYSTEM,DEBUG;VALIDATION,INFO;VISUALFORCE,INFO;WAVE,INFO;WORKFLOW,INFO
15:58:57.3 (3717091)|USER_INFO|[EXTERNAL]|0059A000000TwPM|test-ktjauhgzinnp@example.com|Pacific Standard Time|GMT-07:00
15:58:57.3 (3888677)|EXECUTION_STARTED
15:58:57.3 (3924515)|CODE_UNIT_STARTED|[EXTERNAL]|01p9A000000FmMN|RejectDuplicateFavoriteTest.acceptNonDuplicate()
15:58:57.3 (5372873)|HEAP_ALLOCATE|[72]|Bytes:3
...
```
