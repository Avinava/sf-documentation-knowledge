---
title: "doctor"
domain: cli-commands
topic: doctor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T09:49:04.706Z
keywords: [doctor, Gather, CLI, configuration, data, run, diagnostic, tests, discover, report, potential, problems, environment., Description, Examples, Flags]
---

# doctor

> Gather CLI configuration data and run diagnostic tests to discover and report potential problems in your environment.

## doctor

Gather CLI configuration data and run diagnostic tests to discover and report potential problems in your environment.

### Description for doctor

When you run the doctor command without parameters, it first displays a diagnostic overview of your environment. It then writes a detailed diagnosis to a JSON file in the current directory. Use the --outputdir to specify a different directory. To run diagnostic tests on a specific plugin, use the --plugin parameter. If the plugin isn't listening to the doctor, then you get a warning.

Use the --command parameter to run a specific command in debug mode; the doctor writes both stdout and stderr to \\\*.log files that you can provide to Salesforce Customer Support or attach to a GitHub issue.

Plugin providers can also implement their own doctor diagnostic tests by listening to the "sf-doctor" event and running plugin specific tests that are then included in the doctor diagnostics log.

### Examples for doctor

Run CLI doctor diagnostics:

```

```

Run CLI doctor diagnostics and the specified command, and write the debug output to a file:

```

```

Run CLI doctor diagnostics for a specific plugin:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-c | \--command COMMAND

Optional

Command to run in debug mode; results are written to a log file.

Type: option

\-p | \--plugin PLUGIN

Optional

Specific plugin on which to run diagnostics.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to save all created files rather than the current working directory.

Type: option

\-i | \--create-issue

Optional

Create a new issue on our GitHub repo and attach all diagnostic results.

Type: boolean