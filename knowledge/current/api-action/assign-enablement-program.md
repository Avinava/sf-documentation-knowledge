---
title: "Assign Enablement Program"
domain: api-action
topic: assign-enablement-program
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.956Z
estimatedTokens: 360
keywords: [Assign, Enablement, Program, Automatically, user, determined, criteria, REST, HTTP, Inputs, Outputs]
---

# Assign Enablement Program

> Automatically assign a user to an Enablement program based on your determined
      criteria.

# Assign Enablement Program

Automatically assign a user to an Enablement program based on your determined criteria.

To assign users to an Enablement program, enable the Design and Deliver Enablement Programs user permission.

This object is available in API version 58.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v58.0/actions/standard/assignEnablementProgram

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| assigneeId | TypeIDDescriptionRequired. The ID of the Enablement user to assign to the program. |
| notificationUserId | TypeIDDescriptionRequired. The ID of another Salesforce user to notify when the program assignment is complete.By default, a notification is sent to the user who runs this invocable action. Use notificationUserId to specify another user that you want to notify. |
| programId | TypeIDDescriptionRequired. The ID of the program being assigned. |
| startDate | TypeIDDescriptionRequired. The date that assignees can access the program. Dates for Saturdays and Sundays are automatically set to the following Monday. |

## Outputs

None

#### See Also

-   [*Salesforce Help*: Automating Enablement Program Assignment](https://help.salesforce.com/s/articleView?id=sales.automated_program_assignment.htm&type=5&language=en_US "Salesforce Help: Automating Enablement Program
    Assignment - HTML (New Window)")
