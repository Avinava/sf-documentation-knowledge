---
title: "1-99 General"
domain: mc-apis
topic: 1-99-general
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:14.595Z
estimatedTokens: 799
keywords: [1-99, General]
---

# 1-99 General

| Error | Type | Message | Resolution |
| --- | --- | --- | --- |
| 1 | Validation | Name already exists | The partner key is already used in the account; use a different partner key. You could also delete the existing item that uses the key value before creating the new item. |
| 2 | System - General Exception | Exception occurred during [{Operation}] ErrorID: {ErrorID} | You may encounter this error code on a SOAP fault during authentication (login has an unexpected exception). Log error information and contact Marketing Cloud support. |
| 3 | Validation - UpdateOptions object |  | Ensure the value of the Update action is either "update", "create", or "delete." This error occurs when the update action you specified cannot occur because the object to update does not exist or the information you specified to update does not match the information available on the object. To correct this error, create the object before updating it, if it does not already exist. Ensure that the data to be updated on the objects exists. |
| 4 | System - GetLoginLocation method | You don't have access to an account with customer key of [CustomerKey]. | Log error information and contact Marketing Cloud support. |
| 5 | Validation | Cannot perform {method} on objects of type {object} | Use the object with an allowed method. |
| 6 | Validation | No object specified at 0-based index {index} | Don't pass a Null object into the Objects array on the Create method. |
| 8 |  | This operation does not support the APIObject of type [type] |  |
| 9 | System (SOAP Fault) | Member: [member] is In Maintenance. The operation: [operation] is authorized to process or queue while in maintenance however the objects: [objects] are not. Please remove objects from request and try again or resubmit request once the member is out of maintenance state.Member: [member] is not In Maintenance but Member DB: [MemberDB] on Server: [server] could not be accessed. Member request was denied. | Log the message.Queue messages until Marketing Cloud is out of the maintenance window or utilize the SOAP API in Asynchronous mode.Utilize the GetSystemStatus call to determine when to continue using Marketing Cloud. |
| 10 | System (SOAP Fault) |  | Log the message.Queue messages until Marketing Cloud is running again or utilize the SOAP API in Asynchronous mode.Utilize the GetSystemStatus call to determine when to continue using Marketing Cloud. |
| 11 | Validation (SOAP Fault) | Member: [member] does not have AsyncAPI authorization. Request was denied | Contact Marketing Cloud support to ensure that the SOAP Web Service API feature is turned on in the account and the account user has the appropriate permissions. |
| 12 | Validation (SOAP Fault) |  | Check your username and password. |
| 13 | System (SOAP Fault) | Synchronous request cannot be completed at this time due to database problems. This request was not processed. | Log the error and contact Marketing Cloud support. |
| 17 | Rate Limited | We noticed an abnormal spike in your call volume so your SOAP Web Service account has been rate limited temporarily. | Verify your current call volume and adjust it to be spread over time. |
