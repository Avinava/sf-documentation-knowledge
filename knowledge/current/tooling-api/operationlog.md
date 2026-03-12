---
title: "OperationLog"
domain: tooling-api
topic: operationlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.187Z
estimatedTokens: 1667
keywords: [OperationLog, Represents, long-running, asynchronous, operations, triggered, tracked, through, Tooling, API., API, version, 37.0, later., Supported, SOAP, Calls, REST, HTTP, Special]
---

# OperationLog

> Represents long-running or asynchronous
            operations triggered and tracked through Tooling API. This object is available in
        API version 37.0 and later.

# OperationLog

Represents long-running or asynchronous operations triggered and tracked through Tooling API. This object is available in API version 37.0 and later.

## Supported SOAP Calls

create(), describeSObjects()

## Supported REST HTTP Methods

Query, GET, POST

## Special Access Rules

As of the Spring '20 release, to access OperationLog you must have the View Setup user permission.

## Fields

| Field | Details |
| --- | --- |
| DetailedStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionComplements the Status field with an operation processor-specific status code. |
| Message | TypestringPropertiesFilter, Group, Nillable, SortDescriptionComplements the Status field with information helpful to the user. For example, if Status=FAILED, state the reason in this field. |
| Parameters | TypeOperationParametersPropertiesCreate, NillableDescriptionA complex type that represents a set of parameters passed to the operation processor. Specify the parameters by using the OperationPayload value that corresponds to your operation type. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the status of an operation triggered through Tooling API. Valid values are:NEWRUNNINGCOMPLETEDFAILEDABORTEDOnly records with Status=NEW can be created through the API. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of operation submitted through Tooling API. For each operation type, use the corresponding payload of input parameters. Valid operation types are:RunTerritoryRulesRuns account assignment rules for any territory that has rules defined and belongs to a territory model in Planning or Active state. When you run rules from Setup, accounts are assigned to territories according to your rules if your territory model is in Active or Planning state. Accounts are assigned to territories according to your rules automatically on account creation or update only if your territory model is in Active state.When you choose this operation type, use the payload Territory2RunTerritoryRulesPayload in the Parameters field.RunOppTerrAssignmentApexUses filter-based opportunity territory assignment to assign territories to opportunities using a simple job. We provide code for an Apex class that you can use as-is or modify as needed based on our guidelines. After you create and deploy the class, run the job to complete the assignment process. Job options include making assignments within date ranges and assigning territories to open opportunities only.When you choose this operation type, use the payload Territory2RunOppTerrAssignmentApexPayload in the Parameters field. |

## changeOwnPassword

Represents the password details when users change their own passwords. Users can’t use setPassword() to change their own passwords, and must use changeOwnPassword(). This type is available in API version 40.0 and later.

| Field | Details |
| --- | --- |
| oldPassword | TypestringDescriptionThe user’s previous password that is being replaced. |
| newPassword | TypestringDescriptionThe user’s new password. |

## OperationParameters

Represents parameters to be passed to an operation triggered by Tooling API. This type is available in API version 37.0 and later.

| Field | Details |
| --- | --- |
| payload | TypeOperationPayloadDescriptionUse the payload that corresponds to the type of operation you want to trigger through Tooling API. Valid values are:Territory2RunTerritoryRulesPayloadTerritory2RunOppTerrAssignmentApexPayload |

## OperationPayload

Represents a named set of input parameters, or payload, that corresponds to the operation type specified in the [Type](#OperationLog-Type) field of OperationLog. For example, if you choose the operation type [RunTerritoryRules](#RunTerritoryRules), use the payload [Territory2RunTerritoryRulesPayload](#Territory2RunTerritoryRulesPayload).

Payloads that are supported by OperationLog are extensions of the OperationPayload type. This type is available in API version 37.0 and later.

## Territory2RunTerritoryRulesPayload

Represents a set of parameters to be specified when triggering a [RunTerritoryRules](#RunTerritoryRules) operation through Tooling API. Extends the complex type [OperationPayload](#OperationPayload_title). This type is available in API version 37.0 and later.

| Field | Details |
| --- | --- |
| keyPrefix | TypestringDescriptionThe key prefix of the entity on which the territory assignment rules should be run. The Account key prefix (001) is currently supported. |
| territoryId | TypestringDescriptionThe TerritoryID of the Planning or Active territory model you want to run rules for. |
| territoryModelId | TypestringDescriptionThe ID for the territory model the territory belongs to. You can run assignment rules on territory models in a Planning or Active state. |

## Territory2RunOppTerrAssignmentApexPayload

Represents a set of parameters to be specified when triggering a [RunOppTerrAssignmentApex](#RunOppTerrAssignmentApex) operation through Tooling API. Extends the complex type [OperationPayload](#OperationPayload_title). This type is available in API version 37.0 and later.

| Field | Details |
| --- | --- |
| excludeClosedOpportunities | TypestringDescriptionIf true, excludes from the operation all opportunities that are already closed. |
| opportunityCloseDateFrom | TypestringDescriptionUse to filter opportunities based on a range of close dates. The operation applies to opportunities with close dates within the specified range. Use this field to specify a starting date for the range using the format ddmmyyyy. |
| opportunityCloseDateTo | TypestringDescriptionUse to filter opportunities based a range of close dates. The operation applies to opportunities with close dates within the specified range. Use this field to specify an ending date for the range using the format ddmmyyyy. |
| opportunityLastModifiedDateFrom | TypestringDescriptionUse to filter opportunities based a range of last-modified dates. The operation applies to opportunities with last-modified dates within the specified range. Use this field to specify a starting date for the range using the format ddmmyyyy. |
| opportunityLastModifiedDateTo | TypestringDescriptionUse to filter opportunities based a range of last-modified dates. The operation applies to opportunities with last-modified dates within the specified range. Use this field to specify an ending date for the range using the format ddmmyyyy. |
| territoryModelId | TypestringDescriptionThe ID for the active territory model. Opportunities can be assigned to an active territory model only. |
