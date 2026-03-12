---
title: "Configuration Get Instance"
domain: revenue-cloud
topic: configuration-get-instance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.748Z
estimatedTokens: 152
keywords: [Configuration, Get, Instance, Output, representation, request, retrieve, configuration, instance.]
---

# Configuration Get Instance

> Output representation of the request to retrieve the configuration instance.

# Configuration Get Instance

Output representation of the request to retrieve the configuration instance.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors, which contains an error code and a message. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates whether the call was successful (true) not (false). | Small, 60.0 | 60.0 |
| transaction | Map<String, Object> | Transaction JSON payload representing an object in an external system that’s used to create a session. | Small, 60.0 | 60.0 |
