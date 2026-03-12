---
title: "Environment Hub OAuth URL Generator"
domain: chatterapi
topic: environment-hub-oauth-url-generator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.986Z
estimatedTokens: 139
keywords: [Environment, Hub, OAuth, URL, Generator, Generates, initiate, workflow, connects, org]
---

# Environment Hub OAuth URL Generator

> Generates the URL used to initiate the OAuth workflow that connects
      an org to the Environment Hub.

# Environment Hub OAuth URL Generator

Generates the URL used to initiate the OAuth workflow that connects an org to the Environment Hub.

Resource

```

```

username is the admin username for the org being connected to the Environment Hub.

Available version

36.0

HTTP methods

GET

Response body for GET

[Environment Hub OAuth URL](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_o_auth_url.htm#connect_responses_environment_hub_o_auth_url "An OAuth URL that initiates the workflow to connect an org to an Environment Hub.")

## Code Examples

```
/connect/environment-hub/oauth-url-generator/username
```

## Related Topics

- Environment Hub OAuth URL (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_o_auth_url.htm)
