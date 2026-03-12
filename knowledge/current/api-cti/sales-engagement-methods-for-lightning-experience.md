---
title: "Sales Engagement Methods for Lightning
      Experience"
domain: api-cti
topic: sales-engagement-methods-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.769Z
estimatedTokens: 904
keywords: [Sales, Engagement, Lightning, Experience, two, allow, CTI, implementation, communicate, handle, work, onWorkStart, lets, listen, item]
---

# Sales Engagement Methods for Lightning
      Experience

> These two methods allow your CTI implementation to communicate with Sales Engagement to handle Sales Engagement work.
            The onWorkStart method lets you listen for when a
            Sales Engagement work item starts. You communicate back to Sales Engagement with the completeWork method whe

# Sales Engagement Methods for Lightning Experience

## Usage

These two methods allow your CTI implementation to communicate with [Sales Engagement](https://help.salesforce.com/articleView?id=high_velocity_sales.htm&language=en_US) to handle Sales Engagement work. The onWorkStart method lets you listen for when a Sales Engagement work item starts. You communicate back to Sales Engagement with the completeWork method when the work completes. These methods are available in API version 46.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

You can use this method with the Lightning web component lightning-click-to-dial. You can also use it with the Aura component lightning:clickToDial. Keep in mind that you can’t use either component in iFrames. This method can’t be used with the Visualforce component support:clickToDial.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

CallEnd is deprecated as of API version 48.0.

## Syntax

The onWorkStart method lets you listen for when work starts. Sales Engagement calls your listener function when the work starts. In your listener, the completeWorkWhen parameter specifies whether to call Sales Engagement back when the task is saved (TaskSaved).

```

```

When the work completes (when the task is saved), call the completeWork method so that the Sales Engagement system can update its information.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

Only call this method for outbound calls. Inbound calls aren't started by Sales Engagement.

## Arguments

Arguments for onWorkStart:

| Name | Type | Description |
| --- | --- | --- |
| listener | function | Function that is called when the work is started. This function’s payload includes workId, completeWorkWhen, attributes, and to. |
| workId | string | ID of the work item. Depending on the type of work, this value is either the step tracker ID or the my list ID. |
| completeWorkWhen | string | Defines when to call the completeWork method. This value is TaskSaved. |
| attributes | object | Attributes object that contains the to field. |
| to | string | This field is used to link to the number in onClickToDial. |

Arguments for completeWork:

| Name | Type | Description |
| --- | --- | --- |
| workId | string | ID of the work item. Use the same value that you previously received in onWorkStart. |
| attributes | object | Attributes object that can contain the following fields: disposition, taskId, wasConnected. |
| disposition | string | Value of the disposition. Required when completeWorkWhen is TaskSaved. |
| taskId | string | ID of the task. Required when completeWorkWhen is TaskSaved. |
| wasConnected | boolean | Indicates whether the call successfully connected. We recommend always passing this value. If not passed, the value defaults to true. |
| callback | function | Function executed when the call completes. |

## Sample Code

Listen for Sales Engagement work to start:

```

```

Call Sales Engagement when a task is saved:

```

```

#### See Also

-   [*Salesforce Help*: Sales Engagement](https://help.salesforce.com/articleView?id=high_velocity_sales.htm&language=en_US "Salesforce Help: Sales Engagement - html (New Window)")

-   [*Salesforce Help*: Phone Integration Considerations for Sales Engagement](https://help.salesforce.com/articleView?id=hvs_considerations_phone_integration.htm&language=en_US "Salesforce Help: Phone Integration Considerations for Sales
    Engagement - html (New Window)")

## Code Examples

```
sforce.opencti.hvs.onWorkStart({listener: function});

{ // Listener function payload
  workId: string,            // Id of the current work
  completeWorkWhen: string,  // 'TaskSaved'
  attributes: {
    to: string               // Used to match to click_to_call
  }
}
```

```
sforce.opencti.hvs.completeWork({
  workId: string,          // Id from onWorkStart 
  attributes: {
    disposition: string,   // Only needed for task
    taskId: string,
    wasConnected: boolean, // Should be added, otherwise defaults to true
  },
  callback: function
});
```

```
sforce.opencti.hvs.onWorkStart({
    listener: function(payload) {
        var workId = payload.workId;             // Save the work ID
        var whenVal = payload.completeWorkWhen;  // Save the completion requirement
        var toVal = payload.attributes.to;       // Save the number to associate with onClickToDial
    }
});
```

```
sforce.opencti.hvs.completeWork({
  workId: a07B0000006VFHrIAO,      // Id sent via onWorkStart
  attributes: {
      disposition: 'Completed',    // Disposition value
      taskId: '00TR00000032yfVMAQ' // ID of task created
      wasConnected: true           // Whether the call successfully connected
  },
  callback: function() { /* perform cleanup here */ }
});
```
