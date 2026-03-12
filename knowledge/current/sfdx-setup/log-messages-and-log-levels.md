---
title: "Log Messages and Log Levels"
domain: sfdx-setup
topic: log-messages-and-log-levels
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.078Z
estimatedTokens: 598
keywords: [Log, Messages, Levels, Salesforce, CLI, writes, rotating, file, user’s, home, directory, whose, day, logs, August]
---

# Log Messages and Log Levels

> Salesforce CLI writes all log messages to a rotating file in the user’s home directory
      whose name is based on the day. For example, the logs for August 8, 2024 are written to the
         file USER_HOME_DIR/.sf/sf-2024-08-07.log. Salesforce
      CLI command invocations append log messages to this running log file. Only errors are output
      to the terminal or command window from which you run the CLI.

# Log Messages and Log Levels

Salesforce CLI writes all log messages to a rotating file in the user’s home directory whose name is based on the day. For example, the logs for August 8, 2024 are written to the file USER\_HOME\_DIR/.sf/sf-2024-08-07.log. Salesforce CLI command invocations append log messages to this running log file. Only errors are output to the terminal or command window from which you run the CLI.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_setup)

#### Important

The files in the USER\_HOME\_DIR/.sf directory are used internally by Salesforce CLI. Don’t remove or edit them.

The default level of log messages is warn. You can set the log level to one of the following, listed in order of least to most information. The level is cumulative: for the debug level, the log file also includes messages at the info, warn, and error levels.

-   error
-   warn
-   info
-   debug
-   trace
-   fatal

Globally set the log level for all CLI commands with the SF\_LOG\_LEVEL environment variable. For example, on UNIX:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

#### Note

Salesforce CLI gathers diagnostic information about its use and reports it to Salesforce so that the development team can investigate issues. The type of information includes command duration and command invocation counts.

## Rotating Log Files

Salesforce CLI uses rotating log files. By default, every day at midnight Salesforce CLI makes a backup copy of the log file and then clears out its entries to start afresh. This behavior ensures that the current log file doesn't get too large.

Salesforce CLI checks for, and then deletes, any log files that are older than seven days. If you want to keep these old log files, copy them to a different location.

You can change how often a new log file is created by setting the SF\_LOG\_ROTATION\_PERIOD environment variable to either 1h (one hour) or 1m (one minute). Both of these values result in more, but smaller, log files. Any other value is treated as 1d, which is the default value.

#### See Also

-   [Salesforce CLI Environment Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm#sfdx_dev_cli_env_variables "You can set environment variables to configure certain values that Salesforce CLI uses.")

## Code Examples

```
export SF_LOG_LEVEL=debug
```

## Related Topics

- Salesforce CLI Environment Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm)
