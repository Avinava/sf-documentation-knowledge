---
title: "StatusCode Enum"
domain: apex-reference
topic: statuscode-enum
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:29.556Z
estimatedTokens: 179
keywords: [StatusCode, status, code, unsuccessful, component, deploy]
---

# StatusCode Enum

> Describes the status code for an unsuccessful component
    deploy.

# StatusCode Enum

Describes the status code for an unsuccessful component deploy.

## Enum Values

The following are the values of the Metadata.StatusCode enum.

| Value | Description |
| --- | --- |
| INVALID_SCS_INBOUND_USER | Log in as the RunAs user configured in your SCS setup. |
| REQUIRE_CONNECTED_APP_SCS | SCS Connected App is not installed. |
| REQUIRE_CONNECTED_APP_SESSION_SCS | To use the SCS connected app, the user must be authenticated. |
| REQUIRE_RUNAS_USER | A RunAs user must be configured in your org. |

#### See Also

-   [DeployProblemType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_DeployProblemType.htm "Describes the problem type for an unsuccessful component deploy.")

## Related Topics

- DeployProblemType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_DeployProblemType.htm)
