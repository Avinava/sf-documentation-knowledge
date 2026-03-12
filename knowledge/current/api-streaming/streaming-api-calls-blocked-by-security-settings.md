---
title: "Streaming API Calls Blocked by Security Settings"
domain: api-streaming
topic: streaming-api-calls-blocked-by-security-settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.469Z
estimatedTokens: 197
keywords: [Streaming, API, Calls, Blocked, Security, Settings, session, setting, locking, sessions, enabled]
---

# Streaming API Calls Blocked by Security Settings

> Streaming API calls can be blocked if the session setting for locking sessions is
  enabled.

# Streaming API Calls Blocked by Security Settings

Streaming API calls can be blocked if the session setting for locking sessions is enabled.

Streaming API calls are blocked when both of these conditions apply.

-   The **Lock sessions to the IP address from which they originated** session setting is enabled in Setup. See [Modify Session Security Settings](https://help.salesforce.com/s/articleView?id=xcloud.admin_sessions.htm&type=5&language=en_US) in Salesforce Help.
-   The Streaming API client is using a session ID that was obtained from an IP address that’s different than the client’s IP address.

To resolve this issue, make sure that the IP address from where the session originated matches the client’s IP address. Alternatively, disable the setting for locking sessions.
