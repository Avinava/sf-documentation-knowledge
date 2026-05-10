---
title: "NotificationActionHandler Interface"
domain: apex-reference
topic: notificationactionhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:45.186Z
estimatedTokens: 519
namespace: Messaging
keywords: [NotificationActionHandler, Implement, execute, action, notification, executeAction, actionableNotification, Implementation]
---

> Implement this interface to execute an action on a custom notification.

**Namespace:** `Messaging`

# NotificationActionHandler Interface

Implement this interface to execute an action on a custom notification.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

-   **[NotificationActionHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm#apex_Messaging_NotificationActionHandler_methods)**

-   **[NotificationActionHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm#apex_interface_Messaging_NotificationActionHandler_Example)**
    This is an example implementation of the Messaging.NotificationActionHandler interface.

## NotificationActionHandler Methods

The following are methods for NotificationActionHandler.

-   **[executeAction(actionableNotification)](atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm#apex_Messaging_NotificationActionHandler_executeAction)**
    Executes the actionable notification.

### executeAction(actionableNotification)

Executes the actionable notification.

#### Signature

public Messaging.ActionResult executeAction(Messaging.ActionableNotification actionableNotification)

#### Parameters

actionableNotification

Type: [Messaging.ActionableNotification](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_class_Messaging_ActionableNotification "Contains information about an actionable custom notification.")

An actionable custom notification.

#### Return Value

Type: [Messaging.ActionResult](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm#apex_class_Messaging_ActionResult "Contains information about the execution of an actionable notification.")

## NotificationActionHandler Example Implementation

This is an example implementation of the Messaging.NotificationActionHandler interface.

```

```

The following example tests the implementation:

```

```

## Code Examples

```apex
global class CaseNotificationActionHandler implements Messaging.NotificationActionHandler {
    
    private static final String ACTION_REASSIGN_TO_QUEUE = 'reassignToQueue';
   private static final String DEFAULT_QUEUE_NAME = 'Queue_Exec'; // Default queue name, can be customized
    
    global Messaging.ActionResult executeAction(Messaging.ActionableNotification actionableNotification) {
        try {
            String actionIdentifier = actionableNotification.getActionIdentifier();
            String targetId = actionableNotification.getTargetId();
            
            if (String.isBlank(actionIdentifier) || String.isBlank(targetId)) {
                return new Messaging.ActionResult.Builder()
                    .withSuccess(false)
                    .withMessage('Action identifier and target ID are required')
                    .withErrorCode(Messaging.ActionError.INVALID_ACTION_PARAMETERS)
                    .build();
            }
            
            // Validate that targetId is a valid Case ID
            if (!targetId.startsWith('500')) {
                return new Messaging.ActionResult.Builder()
                    .withSuccess(false)
                    .withMessage('Target ID must be a valid Case ID')
                    .withErrorCode(Messaging.ActionError.INVALID_ACTION_PARAMETERS)
                    .build();
            }
            
            switch on actionIdentifier {
                when 'reassignToQueue' {
                    return reassignCaseToQueue(targetId);
                }
                when else {
                    return new Messaging.ActionResult.Builder()
                        .withSuccess(false)
                        .withMessage('Unsupported action identifier: ' + actionIdentifier)
                        .withErrorCode(Messaging.ActionError.ACTION_NOT_IMPLEMENTED)
                        .build();
                }
            }
        } catch (Exception e) {
            return new Messaging.ActionResult.Builder()
                .withSuccess(false)
                .withMessage('An unexpected error occurred: ' + e.getMessage())
                .withErrorCode(Messaging.ActionError.INTERNAL_ERROR)
                .build();
        }
    }
    
    private Messaging.ActionResult reassignCaseToQueue(String caseId) {
        try {
            // Query the case to ensure it exists
            List<Case> cases = [SELECT Id, CaseNumber, OwnerId FROM Case WHERE Id = :caseId LIMIT 1];
            
            if (cases.isEmpty()) {
                return new Messaging.ActionResult.Builder()
                    .withSuccess(false)
                    .withMessage('Case not found with ID: ' + caseId)
                    .withErrorCode(Messaging.ActionError.INVALID_ACTION_PARAMETERS)
                    .build();
            }
            
            Case caseToUpdate = cases[0];
            
            // Query for the queue to assign the case to
            List<Group> queues = [SELECT Id, Name FROM Group WHERE Type = 'Queue' AND DeveloperName = :DEFAULT_QUEUE_NAME LIMIT 1];
            
            if (queues.isEmpty()) {
                return new Messaging.ActionResult.Builder()
                    .withSuccess(false)
                    .withMessage('Queue not found: ' + DEFAULT_QUEUE_NAME)
                    .withErrorCode(Messaging.ActionError.INVALID_STATE)
                    .build();
            }
            
            // Assign the case to the queue
            caseToUpdate.OwnerId = queues[0].Id;
            update caseToUpdate;
            
            return new Messaging.ActionResult.Builder()
                .withSuccess(true)
                .withMessage('Case ' + caseToUpdate.CaseNumber + ' successfully assigned to queue: ' + DEFAULT_QUEUE_NAME)
                .build();
                
        } catch (DmlException e) {
            return new Messaging.ActionResult.Builder()
                .withSuccess(false)
                .withMessage('Failed to update case: ' + e.getMessage())
                .withErrorCode(Messaging.ActionError.ACCESS_DENIED)
                .build();
        } catch (Exception e) {
            return new Messaging.ActionResult.Builder()
                .withSuccess(false)
                .withMessage('Error reassigning case to queue: ' + e.getMessage())
                .withErrorCode(Messaging.ActionError.INTERNAL_ERROR)
                .build();
        }
    }
}
```

```apex
@IsTest
global class TestNotificationActionHandler {
    @IsTest
    static void testActionHandler() {

        //Set up the data, for example creating a case
        Case newCase = new Case(
            Subject = 'Important Case',
            Status = 'New',
            Priority = 'High'
        );
        insert newCase;

        //Set up Actionable Notification data
        Messaging.ActionableNotification notification =
            new Messaging.ActionableNotification.Builder()
                .withNotificationTypeId('0MLXXXXXXXXXXXX4AC')
                .withActionIdentifier('testAction')
                .withRecipientId(UserInfo.getUserId())
                .withSenderId(UserInfo.getUserId())
                .withTargetId(newCase.Id)
                .withTargetPageRef('/lightning/r/Case/' + newCase.Id + '/view')
                .build();


        Messaging.ActionResult result = Test.testNotificationActionHandler(new CaseNotificationActionHandler(), notification);

        //Insert assert statements here to verify your action
    }
}
```

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- NotificationActionHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm)
- NotificationActionHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm)
- executeAction(actionableNotification) (atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm)
- Messaging.ActionableNotification (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- Messaging.ActionResult (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm)
