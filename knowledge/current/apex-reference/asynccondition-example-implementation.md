---
title: "AsyncCondition Example Implementation"
domain: apex-reference
topic: asynccondition-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.709Z
keywords: [AsyncCondition, Example, Implementation]
---

# AsyncCondition Example Implementation

## AsyncCondition Example Implementation

Here’s an example implementation of the TxnSecurity.AsyncCondition interface. The transaction security policy triggers when a user logs in. In the example, ExternalValidation\_\_c is a custom object that contains information from an external validation system. The result of the SOQL query on ExternalValidation\_\_c determines whether to block the user from logging in. The policy then queues the CalloutToExternalValidator class for asynchronous execution. When it executes, the CalloutToExternalValidator class makes an external call to the validation system to update it with information about this log in event. Because CalloutToExternalValidator is triggered by Asynchronous Apex, you must implement the TxnSecurity.AsyncCondition interface in the ExternallyValidatedLoginCondition Apex class along with the usual TxnSecurity.EventCondition interface.

```

```