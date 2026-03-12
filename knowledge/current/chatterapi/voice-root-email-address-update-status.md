---
title: "Voice Root Email Address Update Status"
domain: chatterapi
topic: voice-root-email-address-update-status
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.525Z
estimatedTokens: 164
keywords: [Voice, Root, Email, Address, Status, AWS, user]
---

# Voice Root Email Address Update Status

> AWS root user email address update.

# Voice Root Email Address Update Status

AWS root user email address update.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | If the request was to start the email address update process, this message contains instructions on how to accept and complete the email address change.If the request was to accept the email address change, this message along with the status code confirms whether the email address change was successful. | Small, 64.0 | 64.0 |
| status | String | API status code indicating whether the request succeeded or failed. | Small, 64.0 | 64.0 |
