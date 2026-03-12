---
title: "Debug Log"
domain: apex-guide
topic: debug-log
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.153Z
estimatedTokens: 2569
namespace: YourClass
keywords: [Debug, Log, record, database, operations, system, processes, errors, occur, executing, transaction, running, unit, tests, logs]
---

# Debug Log

> A debug log can record database operations, system processes, and errors that occur when
      executing a transaction or running unit tests. Debug logs can contain information about:

**Namespace:** `YourClass`

# Debug Log

A debug log can record database operations, system processes, and errors that occur when executing a transaction or running unit tests. Debug logs can contain information about:

-   Database changes
-   HTTP callouts
-   Apex errors
-   Resources used by Apex
-   Automated workflow processes, such as:

    -   Workflow rules
    -   Assignment rules
    -   Approval processes
    -   Validation rules

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    The debug log doesn’t include information from actions triggered by time-based workflows. It also doesn’t include information from standard or custom controllers used in Visualforce email templates.


You can retain and manage debug logs for specific users, including yourself, and for classes and triggers. Setting class and trigger trace flags doesn’t cause logs to be generated or saved. Class and trigger trace flags override other logging levels, including logging levels set by user trace flags, but they don’t cause logging to occur. If logging is enabled when classes or triggers execute, logs are generated at the time of execution.

To view a debug log from Setup, enter Debug Logs in the Quick Find box, then select **Debug Logs**. Then click **View** next to the debug log that you want to examine. Click **Download** to download the debug log as a log file.

## Debug Log Limits

Debug logs have the following limits.

-   Each debug log must be 20 MB or smaller. Debug logs that are larger than 20 MB are reduced in size by removing older log lines, such as log lines for earlier System.debug statements. The log lines can be removed from any location, not just the start of the debug log.
-   System debug logs are retained for 24 hours. Monitoring debug logs are retained for seven days.
-   If you generate more than 1,000 MB of debug logs in a 15-minute window, your trace flags are disabled. We send an email to the users who last modified the trace flags, informing them that they can re-enable the trace flag in 15 minutes.

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

    #### Warning

    If the debug log trace flag is enabled on a frequently accessed Apex class or for a user executing requests often, the request can result in failure, regardless of the time window and the size of the debug logs.

-   When your org accumulates more than 1,000 MB of debug logs, we prevent users in the org from adding or editing trace flags. To add or edit trace flags so that you can generate more logs after you reach the limit, delete some debug logs.

## Inspecting the Debug Log Sections

After you generate a debug log, the type and amount of information listed depends on the filter values you set for the user. However, the format for a debug log is always the same.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Session IDs are replaced with "SESSION\_ID\_REMOVED" in Apex debug logs

A debug log has the following sections.

Header

The header contains the following information.

-   The version of the API used during the transaction.
-   The log category and level used to generate the log. For example:

The following is an example of a header.

```

```

In this example, the API version is 66.0, and the following debug log categories and levels have been set.

| Apex Code | DEBUG |
| --- | --- |
| Apex Profiling | INFO |
| Callout | INFO |
| Database | INFO |
| System | DEBUG |
| Validation | INFO |
| Visualforce | INFO |
| Workflow | INFO |

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

If the Apex Code log level is set to FINEST, the debug log includes details of all Apex variable assignments. Ensure that the Apex Code being traced doesn’t handle sensitive data. Before enabling FINEST log level, be sure to understand the level of sensitive data your organization's Apex handles. Be careful with processes such as community users self-registration where user passwords can be assigned to an Apex string variable.

Execution Units

An execution unit is equivalent to a transaction. It contains everything that occurred within the transaction. EXECUTION\_STARTED and EXECUTION\_FINISHED delimit an execution unit.

Code Units

A code unit is a discrete unit of work within a transaction. For example, a trigger is one unit of code, as is a webservice method or a validation rule.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

A class isn’t a discrete unit of code.

CODE\_UNIT\_STARTED and CODE\_UNIT\_FINISHED delimit units of code. Units of work can embed other units of work. For example:

```

```

Units of code include, but aren’t limited to, the following:

-   Triggers
-   Workflow invocations and time-based workflow
-   Validation rules
-   Approval processes
-   Apex lead convert
-   @future method invocations
-   Web service invocations
-   executeAnonymous calls
-   Visualforce property access on Apex controllers
-   Visualforce actions on Apex controllers
-   Execution of the batch Apex start and finish methods, and each execution of the execute method
-   Execution of the Apex System.Schedule execute method
-   Incoming email handling

Log Lines

Log lines are included inside units of code and indicate which code or rules are being executed. Log lines can also be messages written to the debug log.

Log lines are made up of a set of fields, delimited by a pipe (|). The format is:

-   timestamp: Consists of the time when the event occurred and a value between parentheses. The time is in the user’s time zone and in the format HH:mm:ss.SSS. The value in parentheses represents the time elapsed in nanoseconds since the start of the request. The elapsed time value is excluded from logs reviewed in the Developer Console when you use the Execution Log view. However, you can see the elapsed time when you use the Raw Log view. To open the Raw Log view, from the Developer Console’s Logs tab, right-click the name of a log and select **Open Raw Log**.
-   event identifier: Specifies the event that triggered the debug log entry (such as SAVEPOINT\_RESET or VALIDATION\_RULE).

    Also includes additional information logged with that event, such as the method name or the line and character number where the code was executed. If a line number can’t be located, \[EXTERNAL\] is logged instead. For example, \[EXTERNAL\] is logged for built-in Apex classes or code that’s in a managed package.

    For some events (CODE\_UNIT\_STARTED, CODE\_UNIT\_FINISHED, VF\_APEX\_CALL\_START, VF\_APEX\_CALL\_END, CONSTRUCTOR\_ENTRY, and CONSTRUCTOR\_EXIT), the end of the event identifier includes a pipe (|) followed by a typeRef for an Apex class or trigger.

    For a trigger, the typeRef begins with the SFDC trigger prefix \_\_sfdc\_trigger/. For example, \_\_sfdc\_trigger/YourTriggerName or \_\_sfdc\_trigger/YourNamespace/YourTriggerName.

    For a class, the typeRef uses the format YourClass, YourClass$YourInnerClass,, or YourNamespace/YourClass$YourInnerClass.


More Log Data

In addition, the log contains the following information.

-   Cumulative resource usage is logged at the end of many code units. Among these code units are triggers, executeAnonymous, batch Apex message processing, @future methods, Apex test methods, Apex web service methods, and Apex lead convert.
-   Cumulative profiling information is logged once at the end of the transaction and contains information about DML invocations, expensive queries, and so on. “Expensive” queries use resources heavily.
-   Heap usage is accurately reported in the debug log and an exception is thrown whenever an Apex Heap Size error occurs. At other times, the heap size shown in the debug log is the largest heap size that was calculated during the transaction. To reduce the overhead on small transactions, minimal heap usage doesn’t warrant an accurate calculation and is reported as 0(zero).

The following is an example debug log.

```

```

## Setting Debug Log Filters for Apex Classes and Triggers

To debug complex Apex logic, you can set Apex class and trigger trace flags, also known as debug log filters. For example, you can raise the log verbosity for a given class while turning off logging for other classes or triggers. These trace flags have the debug log type CLASS\_TRACING and override the debug log levels of the USER\_DEBUG and DEVELOPER\_LOG trace flags.

For an explanation and an example of how Apex class and trigger trace flags work, see [Debug Log Filtering for Apex Classes and Apex Triggers](https://help.salesforce.com/s/articleView?id=platform.code_debug_log_classes.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

For concrete instructions about how to configure debug log filters, see [Set Up Apex Class and Trigger Trace Flags](https://help.salesforce.com/s/articleView?id=platform.code_debug_log_classes_setup.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

-   **[Working with Logs in the Developer Console](atlas.en-us.apexcode.meta/apexcode/apex_debugging_system_log_console.htm)**
    Use the Logs tab in the Developer Console to open debug logs.
-   **[Debugging Apex API Calls](atlas.en-us.apexcode.meta/apexcode/apex_debugging_API_calls.htm)**

-   **[Debug Log Order of Precedence](atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log_precedence.htm)**
    Which events are logged depends on various factors. These factors include your trace flags, the default logging levels, your API header, user-based system log enablement, and the log levels set by your entry points.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_exception_definition.htm "Exceptions in Apex")

#### See Also

-   [*Salesforce Help*: Set Up Debug Logging](https://help.salesforce.com/HTViewHelpDoc?id=code_add_users_debug_log.htm&language=en_US)

-   [*Salesforce Help*: View Debug Logs](https://help.salesforce.com/HTViewHelpDoc?id=code_viewing_log_details.htm&language=en_US)

-   [*Salesforce Help*: Delete Debug Logs](https://help.salesforce.com/HTViewHelpDoc?id=code_debug_log_delete.htm&language=en_US)

## Code Examples

```
66.0 APEX_CODE,DEBUG;APEX_PROFILING,INFO;CALLOUT,INFO;DB,INFO;SYSTEM,DEBUG;VALIDATION,INFO;VISUALFORCE,INFO;
WORKFLOW,INFO
```

```
EXECUTION_STARTED
CODE_UNIT_STARTED|[EXTERNAL]execute_anonymous_apex
CODE_UNIT_STARTED|[EXTERNAL]MyTrigger on Account trigger event BeforeInsert for [new]|__sfdc_trigger/MyTrigger
CODE_UNIT_FINISHED <-- The trigger ends
CODE_UNIT_FINISHED <-- The executeAnonymous ends
EXECUTION_FINISHED
```

```apex
37.0 APEX_CODE,FINEST;APEX_PROFILING,INFO;CALLOUT,INFO;DB,INFO;SYSTEM,DEBUG;
    VALIDATION,INFO;VISUALFORCE,INFO;WORKFLOW,INFO
Execute Anonymous: System.debug('Hello World!');
16:06:58.18 (18043585)|USER_INFO|[EXTERNAL]|005D0000001bYPN|devuser@example.org|
    Pacific Standard Time|GMT-08:00
16:06:58.18 (18348659)|EXECUTION_STARTED
16:06:58.18 (18383790)|CODE_UNIT_STARTED|[EXTERNAL]|execute_anonymous_apex
16:06:58.18 (23822880)|HEAP_ALLOCATE|[72]|Bytes:3
16:06:58.18 (24271272)|HEAP_ALLOCATE|[77]|Bytes:152
16:06:58.18 (24691098)|HEAP_ALLOCATE|[342]|Bytes:408
16:06:58.18 (25306695)|HEAP_ALLOCATE|[355]|Bytes:408
16:06:58.18 (25787912)|HEAP_ALLOCATE|[467]|Bytes:48
16:06:58.18 (26415871)|HEAP_ALLOCATE|[139]|Bytes:6
16:06:58.18 (26979574)|HEAP_ALLOCATE|[EXTERNAL]|Bytes:1
16:06:58.18 (27384663)|STATEMENT_EXECUTE|[1]
16:06:58.18 (27414067)|STATEMENT_EXECUTE|[1]
16:06:58.18 (27458836)|HEAP_ALLOCATE|[1]|Bytes:12
16:06:58.18 (27612700)|HEAP_ALLOCATE|[50]|Bytes:5
16:06:58.18 (27768171)|HEAP_ALLOCATE|[56]|Bytes:5
16:06:58.18 (27877126)|HEAP_ALLOCATE|[64]|Bytes:7
16:06:58.18 (49244886)|USER_DEBUG|[1]|DEBUG|Hello World!
16:06:58.49 (49590539)|CUMULATIVE_LIMIT_USAGE
16:06:58.49 (49590539)|LIMIT_USAGE_FOR_NS|(default)|
  Number of SOQL queries: 0 out of 100
  Number of query rows: 0 out of 50000
  Number of SOSL queries: 0 out of 20
  Number of DML statements: 0 out of 150
  Number of DML rows: 0 out of 10000
  Maximum CPU time: 0 out of 10000
  Maximum heap size: 0 out of 6000000
  Number of callouts: 0 out of 100
  Number of Email Invocations: 0 out of 10
  Number of future calls: 0 out of 50
  Number of queueable jobs added to the queue: 0 out of 50
  Number of Mobile Apex push calls: 0 out of 10

16:06:58.49 (49590539)|CUMULATIVE_LIMIT_USAGE_END

16:06:58.18 (52417923)|CODE_UNIT_FINISHED|execute_anonymous_apex
16:06:58.18 (54114689)|EXECUTION_FINISHED
```

## Related Topics

- Working with Logs in the Developer Console (atlas.en-us.apexcode.meta/apexcode/apex_debugging_system_log_console.htm)
- Debugging Apex API Calls (atlas.en-us.apexcode.meta/apexcode/apex_debugging_API_calls.htm)
- Debug Log Order of Precedence (atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log_precedence.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_exception_definition.htm)
