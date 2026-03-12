---
title: "App Oauth Staged Credentials"
domain: chatterapi
topic: app-oauth-staged-credentials
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.181Z
estimatedTokens: 305
keywords: [App, Oauth, Staged, Credentials, consumer's, primary, days, unless, they're, deleted]
---

# App Oauth Staged Credentials

> Information about an OAuth consumer's primary and staged credentials. Staged credentials
    are valid for 30 days unless they're deleted before then.

# App Oauth Staged Credentials

Information about an OAuth consumer's primary and staged credentials. Staged credentials are valid for 30 days unless they're deleted before then.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdBy | String | User who created the OAuth consumer's staged credentials. | Small, 65.0 | 65.0 |
| createdDate | String | Date when the OAuth consumer's staged credentials were created. | Small, 65.0 | 65.0 |
| expirationDate | String | Expiration date of the OAuth consumer's staged credentials. | Small, 65.0 | 65.0 |
| id | String | OAuth consumer's staged credentials' identifier. | Small, 65.0 | 65.0 |
| key | String | OAuth consumer's staged credentials' key. | Small, 65.0 | 65.0 |
| secret | String | OAuth consumer's staged credentials' secret. | Small, 65.0 | 65.0 |
| stagedCredentialsUrl | String | URL for the staged credentials of the OAuth consumer. | Small, 65.0 | 65.0 |
| state | String | Current state of the OAuth consumer's staged credentials. Values are:ActiveExpiredRotated | Small, 65.0 | 65.0 |
| url | String | URL for the primary credentials of the OAuth consumer. | Small, 65.0 | 65.0 |
