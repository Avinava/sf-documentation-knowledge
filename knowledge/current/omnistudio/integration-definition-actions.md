---
title: "Integration Definition Actions"
domain: omnistudio
topic: integration-definition-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.474Z
keywords: [Integration, Definition, Actions, Supported, REST, HTTP, Methods, Industries, Send, Apex, Async, Request, External]
---

# Integration Definition Actions

# Integration Definition Actions

Perform the asynchronous operation configured in an Integration Definition without blocking the invoking flow. The results of the asynchronous operation are published in a platform event. The calling flow can wait for the Platform Event using a pause step if required. The asynchronous operation is typically an API call.

These actions are available in API version 57.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v57.0/actions/standard/industriesSendApexAsyncRequest

/services/data/v57.0/actions/standard/industriesSendExtAsyncRequest

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Industries: Send Apex Async Request

Perform an asynchronous operation that calls an Apex class on the backend. This class must implement the ServiceIntegrationProvider interface.

Inputs

| Input | Details |
| --- | --- |
| RequestGuid | Type: StringDescription: A unique identifier for the request. The value can be any string.In the Integration Definition in Setup, setting the RequestGuid to this value is recommended:{!$Flow.InterviewGuid}This creates an automatically generated ID based on the flow that calls the action. |
| IntegrationDefinitionDevName | Type: StringDescription: The Developer Name of the Integration Definition in Setup that specifies the Apex class to call. |
| ContextRecordId | Type: StringDescription: The ID of the record that provides input data for the Apex class. This is the ID of an object of the type that the Apex class accepts. The default Apex class accepts a SvcCatalogRequest object. |

Sample Input

{ "RequestGuid": "1d926919bc721ceea1bde0918184795922c0-7f5f", "IntegrationDefinition": "Account Lookup", "ServiceProcessId": "001RO0000045yv4YAA" }

Outputs

This action has no outputs.

Error Scenarios

| Error Scenario | API Error Code | Error Message |
| --- | --- | --- |
| A parameter is missing a value. | REQUIRED_FIELD_MISSING | You must specify a value for the {0} parameter. |
| Input parameters have incorrect data types. | INVALID_TYPE | The value specified for the {0} parameter is the wrong data type. Specify a value with a {1} data type and try again. |
| More than one request is sent to the invocable action. | TOO_MANY_REQUESTS | This action can process only one record at a time. Provide a single {0} for the {1} parameter and try again. |
| An input parameter is incorrect. | INVALID_INPUT | The value "{0}" for the {1} parameter is invalid. |
| The ID specified for a field is invalid. | INVALID_INPUT | Something's not right with the ID "{0}" specified for the {1} parameter. Check it and try again. |

## Industries: Send External Async Request

Perform an asynchronous operation that calls an external service via a REST API. It can also use an Integration Procedure for preprocessing, postprocessing, or both.

Inputs

| Input | Details |
| --- | --- |
| InputProcessorContextId | Type: StringDescription: The ID of the record that provides payload data for the external service when the input configuration defined in the Integration Definition runs. |
| OutputProcessorContextId | Type: StringDescription: The optional ID for the record updated after the output configuration defined in the Integration Definition runs. |
| RequestGuid | Type: StringDescription: A unique identifier for the request. The value can be any string.In the Integration Definition in Setup, setting the RequestGuid to this value is recommended:{!$Flow.InterviewGuid}This creates an automatically generated ID based on the flow that calls the action. |
| IntegrationDefinitionDevName | Type: StringDescription: The Developer Name of the Integration Definition in Setup that specifies the external service to call. |

Sample Input

{ "InputDataContextId": "001RO0000045yv4YAA", "OutputDataContextId": "001RO0000045yv4YAA", "RequestGuid": "1d926919bc721ceea1bde0918184795922c0-7f5f", "IntegrationDefinition": "Onfido- IDV Application ID generation" }

Outputs

This action has no outputs.

Error Scenarios

| Error Scenario | API Error Code | Error Message |
| --- | --- | --- |
| An unexpected exception occurs while the program process runs. | UNKNOWN_EXCEPTION | Something went wrong when running the "{0}" external service. Try again later. |
| Input parameters have incorrect data types. | INVALID_TYPE | The value specified for the {0} parameter is the wrong data type. Specify a value with a {1} data type and try again. |
| More than one request is sent to the invocable action. | TOO_MANY_REQUESTS | This action can process only one record at a time. Provide a single record ID for the {0} parameter and try again. |
| An input parameter is incorrect. | INVALID_INPUT | The value "{0}" for the {1} parameter is invalid. |
| The external service is incorrect. | INVALID_INPUT | The "{0}" value specified for the integrationDefinition isn't a valid external service developer name. Check it and try again. |