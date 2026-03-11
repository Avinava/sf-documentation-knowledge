---
title: "Return Headers for Embedded Service Configuration"
domain: rest-api
topic: return-headers-for-embedded-service-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.356Z
keywords: [Return, Headers, Embedded, Service, Configuration, Syntax]
---

# Return Headers for Embedded Service Configuration

# Return Headers for Embedded Service Configuration

Returns only the headers from a GET request to the Embedded Service Configuration Describe resource. This gives you a chance to see header values ahead of time before retrieving the content of the resource. You must be logged in to the account that owns the EmbeddedServiceConfigDeveloperName you are querying. This resource is available in REST API version 45.0 and later.

## Syntax

URI

/services/data/vXX.X/support/embeddedservice/configuration/embeddedServiceConfigDeveloperName

Formats

JSON

HTTP method

HEAD

Authentication

Authorization: Bearer token

Request parameters

None