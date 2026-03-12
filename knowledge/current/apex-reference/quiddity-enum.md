---
title: "Quiddity Enum"
domain: apex-reference
topic: quiddity-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.580Z
estimatedTokens: 603
keywords: [Quiddity, Specifies, used, System.Request, Values]
---

# Quiddity Enum

> Specifies a Quiddity value used by the methods in the System.Request class

# Quiddity Enum

Specifies a Quiddity value used by the methods in the [System.Request](atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm#apex_class_System_Request "Contains methods to obtain the request ID and Quiddity value of the current Salesforce request.") class

## Enum Values

The following are the values of the System.Quiddity enum.

| Value | Description |
| --- | --- |
| ANONYMOUS | Execution event is an anonymous Apex block. |
| AURA | Execution event is an Aura component. |
| BATCH_ACS | Execution event is an API Query Cursor driven batch Apex. |
| BATCH_APEX | Execution event is a batch Apex job. |
| BATCH_CHUNK_PARALLEL | Not used in API version 63.0 and later. |
| BATCH_CHUNK_SERIAL | Execution event is chunks of a batch Apex job running in serial. |
| BULK_API | Execution event is a bulk API request. |
| COMMERCE_INTEGRATION | Execution event is an Apex integration for B2B Commerce. |
| DISCOVERABLE_LOGIN | Execution event is Login Discoverable login page used by external users to log in to an Experience Cloud site. |
| EXTERNAL_SERVICE_CALLBACK | Execution event is an External Services asynchronous callback function. |
| FUNCTION_CALLBACK | Execution event is a callback function. |
| FUTURE | Execution event is a future method. |
| INBOUND_EMAIL_SERVICE | Execution event is an Apex inbound email service. |
| INVOCABLE_ACTION | Execution event is an invocable action. |
| PLATFORM_EVENT_PUBLISH_CALLBACK | Execution event is an Apex publish callback for platform events. |
| POST_INSTALL_SCRIPT | Execution event is a managed package install or upgrade. |
| QUEUEABLE | Execution event is a queueable Apex operation. |
| QUICK_ACTION | Execution event is a quick action. |
| REMOTE_ACTION | Execution event is a remote action. |
| REST | Execution event is an Apex RESTful Web service. |
| RUNTEST_ASYNC | Execution event is Apex tests running asynchronously. |
| RUNTEST_DEPLOY | Execution event is Apex tests run during deployment. |
| RUNTEST_SYNC | Execution event is Apex tests running synchronously. |
| SCHEDULED | Execution event is a scheduled Apex job. |
| SOAP | Execution event is an Apex SOAP Web service. |
| SYNCHRONOUS | Execution event is a synchronous Apex operation. |
| TRANSACTION_FINALIZER_QUEUEABLE | Execution event is a queueable job with transaction finalizers attached. |
| VF | Execution event is triggered by a Visualforce page. |

## Related Topics

- System.Request (atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm)
