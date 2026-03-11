---
title: "AuthRequestResult(redirectPageReference, resultStatus, expirationDateTime)"
domain: apex-reference
topic: authrequestresultredirectpagereference-resultstatus-expirationdatetime
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.133Z
keywords: [AuthRequestResult, redirectPageReference, resultStatus, expirationDateTime, Creates, new, instance, RichMessaging.AuthRequestResult, class., Signature, Parameters]
---

# AuthRequestResult(redirectPageReference, resultStatus, expirationDateTime)

> Creates a new instance of the RichMessaging.AuthRequestResult class.

### AuthRequestResult(redirectPageReference, resultStatus, expirationDateTime)

Creates a new instance of the RichMessaging.AuthRequestResult class.

#### Signature

public AuthRequestResult(System.PageReference redirectPageReference, RichMessaging.AuthRequestResultStatus resultStatus, Datetime expirationDateTime)

#### Parameters

redirectPageReference

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

The reference to the redirect page.

resultStatus

Type: [RichMessaging.AuthRequestResultStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_AuthRequestResultStatus.htm "This enum describes the authentication result status.")

The result status value.

expirationDateTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The expiration time.