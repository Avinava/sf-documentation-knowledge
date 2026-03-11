---
title: "LoginDiscoveryMethod Enum"
domain: apex-reference
topic: logindiscoverymethod-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.315Z
keywords: [LoginDiscoveryMethod, Enum, Usage, Values]
---

# LoginDiscoveryMethod Enum

# LoginDiscoveryMethod Enum

Contains methods used to verify the user’s identity when the My Domain login process uses Login Discovery.

## Usage

Specifies the verification method used to authenticate internal users when My Domain is set up for Login Discovery.

## Enum Values

Auth.LoginDiscoveryMethod enum has the following values.

| Value | Description |
| --- | --- |
| LIGHTNING_LOGIN | Verify identity by Lightning Login, which lets internal users log in with Salesforce Authenticator. |
| PASSWORD | Verify identity by entering a password. |
|  |  |