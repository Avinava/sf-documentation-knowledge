---
title: "Transaction Finalizers Error Messages"
domain: apex-guide
topic: transaction-finalizers-error-messages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.133Z
estimatedTokens: 467
keywords: [Transaction, Finalizers, Error, Messages, Troubleshoot, semantic, run-time, issues, analyzing]
---

# Transaction Finalizers Error Messages

> Troubleshoot both semantic and run-time issues by analyzing these
        error messages.

# Transaction Finalizers Error Messages

Troubleshoot both semantic and run-time issues by analyzing these error messages.

This table provides information about error messages in your Apex debug log.

| Error Message | Failed Context | Reason for Failure |
| --- | --- | --- |
| More than one Finalizer cannot be attached to same Async Apex Job | Queueable Execution | System.attachFinalizer() is invoked more than once in the same Queueable instance. |
| Class {0} must implement the Finalizer interface | Queueable Execution | The instantiated class parameter to System.attachFinalizer() doesn’t implement the System.Finalizer interface. |
| System.attachFinalizer(Finalizer) is not allowed in this context | Non-Queueable Execution | System.attachFinalizer() is invoked in an Apex context that's not executing a Queueable instance. |
| Invalid number of parameters | Queueable Execution | Invalid number of parameters to System.attachFinalizer() |
| Argument cannot be null | Queueable Execution | System.attachFinalizer() is invoked with a null parameter. |

If you have a [Splunk Add-On](https://splunkbase.splunk.com/) for Salesforce, you can analyze error messages in your Splunk log. This table provides information about error messages in the Splunk log.

| Error Message | Reason for Failure |
| --- | --- |
| Error processing finalizer for queueable job id: {0} | Runtime error while executing Finalizer. This error can be an unhandled catchable exception or uncatchable exception (such as a LimitException), or, less commonly, an internal system error. |
| Error processing the finalizer (class name: {0}) for the queueable job id: {1} (queueable class id: {2}) | Runtime error while executing Finalizer. This error can be an unhandled catchable exception or uncatchable exception (such as a LimitException), or, less commonly, an internal system error. |
