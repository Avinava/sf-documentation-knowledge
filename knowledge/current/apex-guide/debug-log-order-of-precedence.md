---
title: "Debug Log Order of Precedence"
domain: apex-guide
topic: debug-log-order-of-precedence
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:33.134Z
estimatedTokens: 465
keywords: [Debug, Log, Order, Precedence, Which, events, logged, depends, various, factors., factors, include, trace, flags, default, logging, levels, API, header, user-based]
---

# Debug Log Order of Precedence

> Which events are logged depends on various factors. These factors include your trace
  flags, the default logging levels, your API header, user-based system log enablement, and the log
  levels set by your entry points.

# Debug Log Order of Precedence

Which events are logged depends on various factors. These factors include your trace flags, the default logging levels, your API header, user-based system log enablement, and the log levels set by your entry points.

The order of precedence for debug log levels is:

1.  Trace flags override all other logging logic. The Developer Console sets a trace flag when it loads, and that trace flag remains in effect until it expires. You can set trace flags in the Developer Console or in Setup or by using the TraceFlag and DebugLevel Tooling API objects.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    Setting class and trigger trace flags doesn’t cause logs to be generated or saved. Class and trigger trace flags override other logging levels, including logging levels set by user trace flags, but they don’t cause logging to occur. If logging is enabled when classes or triggers execute, logs are generated at the time of execution.

2.  If you don’t have active trace flags, synchronous and asynchronous Apex tests execute with the default logging levels. Default logging levels are:

    DB

    INFO

    APEX\_CODE

    DEBUG

    APEX\_PROFILING

    INFO

    WORKFLOW

    INFO

    VALIDATION

    INFO

    CALLOUT

    INFO

    VISUALFORCE

    INFO

    SYSTEM

    DEBUG

3.  If no relevant trace flags are active, and no tests are running, your API header sets your logging levels. API requests that are sent without debugging headers generate transient logs—logs that aren’t saved—unless another logging rule is in effect.
4.  If your entry point sets a log level, that log level is used. For example, Visualforce requests can include a debugging parameter that sets log levels.

If none of these cases apply, logs aren’t generated or persisted.
