---
title: "Disable Salesforce CLI Data Collection and Metrics"
domain: sfdx-setup
topic: disable-salesforce-cli-data-collection-and-metrics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.084Z
estimatedTokens: 197
keywords: [Disable, Salesforce, CLI, Data, Collection, Metrics, collects, usage, telemetry, help, improve, collect, anonymous, plugins, commands]
---

# Disable Salesforce CLI Data Collection and Metrics

> Salesforce collects usage data and metrics (telemetry) to help improve Salesforce CLI.
  We collect anonymous information related to the use of Salesforce CLI and plugins, such as which
  commands and flags were run, and performance and error data.

# Disable Salesforce CLI Data Collection and Metrics

Salesforce collects usage data and metrics (telemetry) to help improve Salesforce CLI. We collect anonymous information related to the use of Salesforce CLI and plugins, such as which commands and flags were run, and performance and error data.

We use these data to improve the CLI by looking at trends in command executions and how the CLI is configured. We also research error data to improve the CLI and to create efficiencies in our work (and yours). You’re automatically enrolled in telemetry when you use the CLI.

If you would prefer to opt out of telemetry, set the disableTelemetry configuration variable to true.

```

```

Alternatively, you can opt out by setting the environment variable: SF\_DISABLE\_TELEMETRY=true.

## Code Examples

```apex
sf config set disable-telemetry=true --global
```
