---
title: "Sales Engagement Actions"
domain: api-action
topic: sales-engagement-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.108Z
estimatedTokens: 2156
keywords: [Sales, Engagement, Actions, Manage, cadences, invocable, REST, HTTP, Assign, Target, Cadence, Remove, Pause, Tracker, Resume]
---

# Sales Engagement Actions

> Manage your Sales Engagement cadences using invocable
    actions.

# Sales Engagement Actions

Manage your Sales Engagement cadences using invocable actions.

Sales Engagement must be set up in your org. The user must have permissions to use cadences.

## Supported REST HTTP Methods

URIs

[Assign Target To Cadence](#assignTargetToSalesCadence):

/services/data/vXX.X/actions/standard/assignTargetToSalesCadence

[Remove Target From Cadence](#removeTargetFromSalesCadence):

/services/data/vXX.X/actions/standard/removeTargetFromSalesCadence

[Pause Cadence Tracker](#pauseSalesCadenceTracker):

/services/data/vXX.X/actions/standard/pauseSalesCadenceTracker

[Resume Cadence Tracker](#resumeSalesCadenceTracker):

/services/data/vXX.X/actions/standard/resumeSalesCadenceTracker

[Change Cadence Target Assignee](#changeSalesCadenceTargetAssignee):

/services/data/vXX.X/actions/standard/changeSalesCadenceTargetAssignee

[Modify Cadence Tracker Attributes](#modifyCadenceTrackerAttributes):

/services/data/vXX.X/actions/standard/modifyCadenceTrackerAttributes

[Send Cadence Event](#sendSalesCadenceEvent):

/services/data/vXX.X/actions/standard/sendSalesCadenceEvent

[Select Template For Cadence Step Tracker](#selectTemplateForSalesCadenceStepTracker):

/services/data/vXX.X/actions/standard/selectTemplateForSalesCadenceStepTracker

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

Other Information

[Error Response Types](#error_response_types)

## Assign Target to Cadence

Available in API version 45.0.

URI: /services/data/vXX.X/actions/standard/assignTargetToSalesCadence

| Input | Details |
| --- | --- |
| salesCadenceNameOrId | TypestringDescriptionRequired. The name or ID of the cadence. |
| startStepNameOrId | TypestringDescriptionThe name or ID of the cadence step where the target starts in the cadence. |
| targetId | TypeIDDescriptionRequired. The ID of the contact, a lead, or person account to add to the cadence. |
| userId | TypeIDDescriptionThe ID of the user designated as the target assignee. The target assignee is the sales rep who performs the cadence steps for the target. |
| relatedToId | TypeIDDescriptionThe ID of the target’s related opportunity or invoice. This field is only available when Relate Opportunities to Cadences or Use Cadences for Collections is turned on in Sales Engagement Setup. |

Sample Input

The following code sample adds a target to a cadence:

```

```

## Remove Target from Cadence

Available in API version 45.0.

URI: /services/data/vXX.X/actions/standard/removeTargetFromSalesCadence

| Input | Details |
| --- | --- |
| targetId | TypeIDDescriptionRequired if actionCadenceTrackerId is null. The ID of the contact, a lead, or person account to remove from the cadence. |
| actionCadenceTrackerId | TypeIDDescriptionRequired if targetId is null. The ID of the action cadence tracker to remove from the cadence. |
| completionReasonCode | TypestringDescriptionRequired. The completion reason code indicates how the target competed the cadence. Valid value is:ManuallyRemoved |
| completionDisposition | TypestringDescriptionThe disposition of the completed cadence tracker. Valid values are:SuccessCustomer EngagedCustomer ConnectedContact LaterNo ResponseNot InterestedDisqualifiedBad DataDuplicate |
| relatedToId | TypeIDDescriptionThe ID of the target’s related opportunity or invoice. This field is only available when Relate Opportunities to Cadences or Use Cadences for Collections is turned on in Sales Engagement Setup. |
| relatedToAttributionType | TypestringDescriptionThe attribution type of the target’s related opportunity or invoice. This field is only available when Relate Opportunities to Cadences or Use Cadences for Collections is turned on in Sales Engagement Setup. Valid values are:Activation (Valid for both opportunities and invoices.)Maturation (Valid for opportunities.)Collected (Valid for invoices.) |
| shouldApplyUserContext | TypebooleanDescriptionIndicates whether to remove only action cadence trackers owned by the running user (true) or not (false). |

Sample Input

The following code sample removes a target from a cadence:

```

```

## Pause Cadence Tracker

Pause a target in its cadence. Available in API version 50.0.

URI: /services/data/vXX.X/actions/standard/pauseSalesCadenceTracker

| Input | Details |
| --- | --- |
| targetId | TypeIDDescriptionRequired. The ID of the contact, a lead, or person account to pause. |
| resumeTime | TypeStringDescriptionOptional. The scheduled end time for the pause. |

Sample Input

The following code sample pauses a target in its cadence:

```

```

## Resume Cadence Tracker

Resume a target in its cadence. Available in API version 50.0.

URI: /services/data/vXX.X/actions/standard/resumeSalesCadenceTracker

| Input | Details |
| --- | --- |
| targetId | TypeIDDescriptionRequired. The ID of the contact, a lead, or person account to pause. |

Sample Input

The following code sample resumes a target in its cadence:

```

```

## Change Cadence Target Assignee

Available in API version 50.0.

URI: /services/data/vXX.X/actions/standard/changeSalesCadenceTargetAssignee

| Input | Details |
| --- | --- |
| targetId | TypeIDDescriptionRequired. The ID of the contact, a lead, or person account to pause. |
| userId | TypeIDDescriptionThe ID of the user designated as the target assignee. The target assignee is the sales rep who performs the cadence steps for the target. |

Sample Input

The following code changes a target’s assignee:

```

```

## Modify Cadence Tracker Attributes

Available in API version 51.0.

URI: /services/data/vXX.X/actions/standard/modifyCadenceTrackerAttributes

| Input | Details |
| --- | --- |
| actionCadenceTrackerId | TypeIDDescriptionRequired. The ID of the cadence tracker to modify. |
| completionDisposition | TypestringDescriptionThe disposition of the completed cadence tracker. Valid values are:SuccessCustomer EngagedCustomer ConnectedContact LaterNo ResponseNot InterestedDisqualifiedBad DataDuplicate |
| relatedToId | TypeIDDescriptionThe ID of the target’s related opportunity or invoice. This field is only available when Relate Opportunities to Cadences or Use Cadences for Collections is turned on in Sales Engagement Setup. |
| relatedToAttributionType | TypestringDescriptionThe attribution type of the target’s related opportunity or invoice. This field is only available when Relate Opportunities to Cadences or Use Cadences for Collections is turned on in Sales Engagement Setup. Valid values are:Activation (Valid for both opportunities and invoices.)Maturation (Valid for opportunities.)Collected (Valid for invoices.) |

Sample Input

The following code modifies a cadence tracker with a Completion Disposition of “Customer Engaged”, a related opportunity, and an Attribution Type of “Activation”:

```

```

## Send Cadence Event

Available in API version 52.0.

Send an event to a cadence, such as skipping or manually completing a step.

URI: /services/data/vXX.X/actions/standard/sendSalesCadenceEvent

| Input | Details |
| --- | --- |
| recordId | TypeIDDescriptionRequired. The ID of the cadence step tracker to send the event to. |
| eventType | TypestringDescriptionRequired. The type of event to send. Valid values are:SkipManualComplete |

Sample Input

The following code sends a Manual Complete event to a cadence step tracker:

```

```

## Select Template for Cadence Step Tracker

Retrieve the email template or call script from a cadence step or cadence step variant (if variant testing) to be used while executing a step for a particular target. Available in API version 53.0.

URI: /services/data/vXX.X/actions/standard/selectTemplateForSalesCadenceStepTracker

| Input | Details |
| --- | --- |
| stepTrackerId | TypeIDDescriptionRequired. The ID of the cadence step tracker. |

| Output | Details |
| --- | --- |
| output | TypeJSONDescriptionThe email template or call script ID and its related split percentage. |
| error | TypestringDescriptionThe error message returned when the action fails. |

Sample Input

The following code retrieves the email template or call script for two cadence steps:

```

```

Sample Output

The following code sample illustrates a response after one success and one failure.

```

```

## Error Response Types

Sales Engagement actions can respond with success or errors.

If any type of error occurs with an action, the isSuccess field is false.

This example illustrates a success response for the Assign Target To Cadence action.

```

```

This example illustrates an error caused by sending invalid input values to the Assign Target To Cadence action.

```

```

## Code Examples

```
{
  "inputs" : [ {
    "salesCadenceNameOrId" : "77Cxx0000004CXEEA2",
    "targetId" : "00Qxx000002TRI2EAO"
    }] 
}
```

```
{
  "inputs" : [ {
    "completionReasonCode" : "ManuallyRemoved",
    "targetId" : "00Qxx000002TRI2EAO"
    }]
}
```

```
{
  "inputs" : [ {
    "targetId" : "00Qxx000002TRI2EAO", "resumeTime" : "2021-06-15T05:30:00:521917Z"
    }]
}
```

```
{
  "inputs" : [ {
    "targetId" : "00Qxx000002TRI2EAO"
    }]
}
```

```
{
  "inputs" : [ {
    "targetId" : "00Qxx000002TRI2EAO",
    "userId" : "005R0000000eg3zIAA",
    }] 
}
```
