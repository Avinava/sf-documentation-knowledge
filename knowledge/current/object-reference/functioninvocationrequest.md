---
title: "FunctionInvocationRequest"
domain: object-reference
topic: functioninvocationrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:10.887Z
estimatedTokens: 1309
namespace: NamespacePrefix
keywords: [FunctionInvocationRequest, invocation, Salesforce, Function, API, version, 51.0, later, Calls, Usage]
---

# FunctionInvocationRequest

> Represents invocation information for a Salesforce Function. This object
    is available in API version 51.0 and later.

**Namespace:** `NamespacePrefix`

# FunctionInvocationRequest

Represents invocation information for a Salesforce Function. This object is available in API version 51.0 and later.

When a Salesforce Function is invoked using the Apex functions.Function invoke methods, a FunctionInvocationRequest record is created that contains information on the status and results of the invocation.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), undelete(), update()

## Fields

| Field | Details |
| --- | --- |
| CallbackStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the callback for asynchronous invocations. This field is new in API version 52.0.Possible values are:Completed - Not used for the Salesforce Functions beta.Enqueued - The Function has completed (either successfully or unsuccessfully), and the callback has been enqueued for asynchronous execution in the Salesforce org.Failed - Not used for the Salesforce Functions beta.PendingResponse - The Function has not yet completed, so the callback has not been called yet.The default value is 'PendingResponse'. |
| ExecutionTime | TypelongPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe execution time of the Function in milliseconds. |
| ExtendedResponse | TypetextareaPropertiesNillable, UpdateDescriptionJSON object with additional information about the result of the Function execution. |
| FunctionName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the Function that was invoked. This name is case-sensitive and uses the format “project name-function name” |
| InvokingNamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionPrefix of the namespace that invokes the function. A namespace can invoke the global function using an installed package via Apex. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. This object is available in API version 53.0 and later. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe owner of the FunctionInvocationRequest.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ResponseBody | Typebase64PropertiesNillable, UpdateDescriptionResponse body of the invoked Function. |
| ResponseContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionContent type of the response body of the invoked Function. For example, the content type could be application/json, text/csv, or various other values depending on what the Function returned. |
| ResponseLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionLength of the response body. |
| ResponseName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionName of response, not currently used. |
| ResponseUncompressedLength | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionUncompressed length of the Function response, if the response content was compressed. |
| StackTrace | TypetextareaPropertiesNillable, UpdateDescriptionIf there was an error invoking the function, this field contains the Function stack trace. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the invoked Function. Functions that are invoked asynchronously can be in a queued InProgress state before they are invoked.Possible values are:Dispatched - Not used for the Salesforce Functions beta.Error - The Function failed to execute due to either an error starting the Function, or an error while the Function was running.FunctionInProgress - The Function invocation has been sent to the Salesforce Functions compute environment, and is running.InProgress - The Function invocation request has been enqueued.New - The Function invocation request has been created, but not enqueued yet.Success - The Function has completed execution. For status on whether the callback has been called, see the CallbackStatus field.The default value is 'New'. |

## Usage

Treat FunctionInvocationRequest records as read-only records used to get information about a specific Function invocation. To invoke Functions, use the Apex functions.Function class invoke methods.

FunctionInvocationRequest is not supported in Trialforce templates or org snapshots.
