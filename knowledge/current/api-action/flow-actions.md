---
title: "Flow Actions"
domain: api-action
topic: flow-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.032Z
estimatedTokens: 660
keywords: [Flow, Actions, Invoke, active, autolaunched, exists, current, org, REST, HTTP, Inputs, Outputs, Legacy, Support, Process]
---

# Flow Actions

> Invoke an active autolaunched flow that exists in the
  current org.

# Flow Actions

Invoke an active autolaunched flow that exists in the current org.

For more information about creating flows, see [Build a Flow](https://help.salesforce.com/HTViewHelpDoc?id=flow_build.htm&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available for autolaunched flows in API version 32.0 and later.

## Supported REST HTTP Methods

URI

Get a list of available flow actions:

/services/data/vXX.X/actions/custom/flow

Invokes the LargeOrder flow:

/services/data/vXX.X/actions/custom/flow/LargeOrder

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

Input values vary according to the input variables specified for each flow. For autolaunched flows, the input values vary according to the input variables in that flow.

## Outputs

The Response to an invocation will include Flow\_\_InterviewStatus and any output variables defined in the flow. For more information, see [Flow Resource: Variable](https://help.salesforce.com/s/articleView?id=platform.flow_ref_resources_variable.htm&type=5&language=en_US) in Salesforce Help.

| Output | Details |
| --- | --- |
| Flow__InterviewStatus | TypepicklistDescriptionThe status of the flow interview. Valid values are:CreatedStartedFinishedErrorWaiting |

## Legacy Support for Process Builder

Processes created with type ‘Invocable’ in Process Builder can also be invoked via REST, using the endpoint listed above. See [Create a Process](https://help.salesforce.com/apex/HTViewHelpDoc?id=process_create.htm&language=en_US "HTML (New Window)") in Salesforce Help. This object is available for invocable processes in API version 38.0 and later.

Invocable processes always require one of these input parameters:

-   sObject: The sObject itself that you want the process to execute on. The sObject must be of the same object type as the one on which the process is defined.
-   sObjectId: The Id of the sObject record that you want the process to execute on. The record must be of the same object type as the one on which the process is defined.

Invocable processes don’t have outputs.

#### See Also

-   [*Apex Developer Guide* : InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm " Apex Developer Guide : InvocableMethod Annotation  - HTML (New Window)")

-   [*REST API Developer Guide* : Invocable Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable.htm " REST API Developer Guide : Invocable Actions  - HTML (New Window)")
