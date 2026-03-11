---
title: "getOAuthCredentialAuthUrl(requestBody)"
domain: apex-reference
topic: getoauthcredentialauthurlrequestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [getOAuthCredentialAuthUrl, requestBody, Get, URL, OAuth, token, flow, external, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# getOAuthCredentialAuthUrl(requestBody)

> Get the URL for the OAuth token flow for an external credential.

### getOAuthCredentialAuthUrl(requestBody)

Get the URL for the OAuth token flow for an external credential.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OAuthCredentialAuthUrl getOAuthCredentialAuthUrl(ConnectApi.OAuthCredentialAuthUrlInput requestBody)

#### Parameters

requestBody

Type: [ConnectApi.OAuthCredentialAuthUrlInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_auth_credential_auth_url.htm "OAuth authentication flow.")

A ConnectApi.OAuthCredentialAuthUrlInput class indicating the OAuth authentication flow.

#### Return Value

Type: [ConnectApi.OAuthCredentialAuthUrl](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_auth_credential_auth_url.htm "OAuth authentication URL for a credential.")

#### Usage

Accepts input parameters representing a specific external credential and, optionally, a named principal. Returns the URL a user must visit to begin the authentication flow, ultimately returning authentication tokens to Salesforce. Use this method as part of building a customized or branded user interface to help users initiate authentication.

#### Example

```

```