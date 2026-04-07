---
title: "Expose Secret Data When Debugging"
domain: packagingGuide
topic: expose-secret-data-when-debugging
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:47.429Z
estimatedTokens: 181
keywords: [Expose, Secret, Debugging, production, environments, logging, debug, statements, security, vulnerability, Don’t, log, sensitive, passwords, keys, stack, traces, Redact, omit, logs, Apex]
---

> In production environments, logging secret data with debug statements is a security
    vulnerability. Don’t log secret data, sensitive information, passwords, keys, or stack traces in
    production environments. Redact the data or omit it from the logs.

# Expose Secret Data When Debugging

In production environments, logging secret data with debug statements is a security vulnerability. Don’t log secret data, sensitive information, passwords, keys, or stack traces in production environments. Redact the data or omit it from the logs.

Revealing secret data with debug statements makes it difficult for the Salesforce org admin to control access to the data. Typically, the profiles permitted to view logs aren’t the same profiles that are permitted to view secrets.

## Apex Example

In this Apex code, authenticationToken is a cryptographic secret written to the debug log. To avoid this vulnerability, remove the system.debug statement from the production code.

```

```

## Code Examples

```
if (varCount > 0){
   sensitiveUserData = JSON.serialize(AssignUsrs);
   ReqSignature = RequestWrapper.generateHmacSHA256Signature(sensitiveUserData, authenticationToken);
   system.debug('Token--->'+authenticationToken);
}
```
