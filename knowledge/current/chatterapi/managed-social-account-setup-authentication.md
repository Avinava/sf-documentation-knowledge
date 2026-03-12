---
title: "Managed Social Account Setup Authentication"
domain: chatterapi
topic: managed-social-account-setup-authentication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.164Z
estimatedTokens: 143
keywords: [Managed, Social, Account, Setup, Authentication, Current, configuration, Customer, Service]
---

# Managed Social Account Setup Authentication

> Current configuration of Social Customer Service.

# Managed Social Account Setup Authentication

Current configuration of Social Customer Service.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| oauthJWT | String | JSON web token (JWT). This JWT must be in the form field (tokenString) when you POST to the OAuth URL. This token expires every 60 seconds, so fetch it on demand. | Small, 44.0 | 44.0 |
| oauthUrl | String | OAuth URL. POST to this URL to begin the OAuth process. The response to a POST request is an HTML page. | Small, 44.0 | 44.0 |
