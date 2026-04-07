---
title: "Create or Update Salesforce Records from a Chat Session"
domain: service-sdk-ios
topic: create-or-update-salesforce-records-from-a-chat-session
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:33.035Z
estimatedTokens: 1365
keywords: [Salesforce, Records, Chat, Session, begins, org, pass, agent, technique, immediately, context, they, effective, Basic, Flow]
---

# Create or Update Salesforce Records from a Chat Session

> When a chat session begins, you can create or find
            records within your org and pass this information to the agent. Using this technique,
            your agent can immediately have all the context they need for an effective chat
            session.

# Create or Update Salesforce Records from a Chat Session

When a chat session begins, you can create or find records within your org and pass this information to the agent. Using this technique, your agent can immediately have all the context they need for an effective chat session.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Overview

Before reading these instructions, review [Show Pre-Chat Fields to User](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_prechat_fields.htm#live_agent_prechat_fields "Before a chat session begins, you can request that the user enter pre-chat fields that are sent to the agent at the start of the session.") to understand how to create pre-chat fields.

Pre-chat fields are always sent to the agent at the start of the session. But if you want to fill in fields of a particular record, instantiate an [SCSPrechatEntity](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntity.html) for each Salesforce object (for example, Case or Contact) and instantiate an [SCSPrechatEntityField](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntityField.html) for each field association within that Salesforce object (for example, Subject or LastName).

Each pre-chat entity must map to a pre-chat object ([SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html), [SCSPrechatTextInputObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatTextInputObject.html), or [SCSPrechatPickerObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatPickerObject.html)). The label string in this pre-chat object must be identical to the label used in your [SCSPrechatEntityField](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntityField.html) object.

Use the config object's [prechatFields](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html#/c:objc\(cs\)SCSChatConfiguration\(py\)prechatFields) property for the array of your pre-chat objects and the [prechatEntities](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html#/c:objc\(cs\)SCSChatConfiguration\(py\)prechatEntities) property for the array of your entity objects.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

Case creation does not currently work for Omni-Channel routing without a setup change to your org. To resolve this problem, raise a ticket with Salesforce to ensure that Omni-Channel is enabled to create a Case in your org.

## Basic Flow

This sample code shows how to pass the first and last name to a contact record in your org. This example doesn't involve user input, but you can use [SCSPrechatTextInputObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatTextInputObject.html) instead of [SCSPrechatObject](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatObject.html) to allow user input.

In Swift:

```

```

In Objective-C:

```

```

## Entity Configuration Settings

The [SCSPrechatEntity](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntity.html) and [SCSPrechatEntityField](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntityField.html) classes give you various configuration settings for mapping fields. For example, if a field doesn't exist, you can have the SDK create that field. The following code sample illustrates some basic building blocks when creating an [SCSPrechatEntity](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntity.html) object.

In Swift:

```

```

In Objective-C:

```

```

See the reference documentation for [SCSPrechatEntity](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntity.html) and [SCSPrechatEntityField](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSPrechatEntityField.html). Also refer to [Chat REST API Data Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm) for the Entity and EntityFieldsMaps data types, which define the underlying functionality of these SDK objects.

## Example

This code sample adds FirstName, LastName, Email to a Contact record and a Subject field to a Case record.

```

```

## Code Examples

```
// Create pre-chat fields
let firstNameField = SCSPrechatObject(label: "First Name", value: "Jane")
let lastNameField = SCSPrechatObject(label: "Last Name", value: "Doe")

// Create entity fields
let firstNameEntityField = 
  SCSPrechatEntityField(fieldName: "FirstName", label: "First Name")
firstNameEntityField.doFind = true
firstNameEntityField.doCreate = true
let lastNameEntityField = 
  SCSPrechatEntityField(fieldName: "LastName", label: "Last Name")
lastNameEntityField.doFind = true
lastNameEntityField.doCreate = true

// Create an entity object
let contactEntity = 
  SCSPrechatEntity(entityName: "Contact")
contactEntity.showOnCreate = true

// Add entity fields to entity object
contactEntity.entityFieldsMaps.add(firstNameEntityField)
contactEntity.entityFieldsMaps.add(lastNameEntityField)

// Update config object with the pre-chat fields
config!.prechatFields = [firstNameField, lastNameField]
    
// Update config object with the entity mappings
config!.prechatEntities = [contactEntity]
```

```
// Create pre-chat fields
SCSPrechatObject* firstNameField = [[SCSPrechatObject alloc]
                                    initWithLabel:@"First Name"
                                    value:@"Banana"];
SCSPrechatObject* lastNameField = [[SCSPrechatObject alloc]
                                   initWithLabel:@"Last Name"
                                   value:@"Town"];

// Create entity fields
SCSPrechatEntityField* firstNameEntityField = 
  [[SCSPrechatEntityField alloc]
  initWithFieldName:@"FirstName" label:@"First
Name"];
firstNameEntityField.doFind = YES;
firstNameEntityField.doCreate = YES;
SCSPrechatEntityField* lastNameEntityField = 
  [[SCSPrechatEntityField alloc]
  initWithFieldName:@"LastName" label:@"Last Name"];
lastNameEntityField.doFind = YES;
lastNameEntityField.doCreate = YES;

// Create an entity object
SCSPrechatEntity* contactEntity = [[SCSPrechatEntity alloc]
                                   initWithEntityName:@"Contact"];
contactEntity.showOnCreate = YES;

// Add entity fields to entity object
[contactEntity.entityFieldsMaps addObject:firstNameEntityField];
[contactEntity.entityFieldsMaps addObject:lastNameEntityField];

// Update config object with the pre-chat fields
NSMutableArray<SCSPrechatObject *> *preChatFields = [NSMutableArray new];
[preChatFields addObject:firstNameField];
[preChatFields addObject:lastNameField];
config.prechatFields = preChatFields;

// Update config object with the entity mappings
NSMutableArray<SCSPrechatEntity *> *prechatEntities = [NSMutableArray new];
[prechatEntities addObject:contactEntity];
config.prechatEntities = prechatEntities;
```

```
// Create an entity
let entity = SCSPrechatEntity(entityName: "Contact")
entity.saveToTranscript = "ContactId"    // Save this entity to Transcript.ContactId
entity.linkToEntityName = "Case"
entity.linkToEntityField = "ContactId"   // Link this entity to Case.ContactId

// Add an entity field map to our entity
let entityField = SCSPrechatEntityField(fieldName: "FirstName", label: "First Name")
entityField.doFind = true                // Attempt to search for that field
entityField.isExactMatch = true          // Must be an exact match
entityField.doCreate = true              // Create if not found
entity.entityFieldsMaps.add(entityField) // Add field to entity map
```

```
// Create an entity
SCSPrechatEntity* entity = [[SCSPrechatEntity alloc] initWithEntityName:@"Contact"];
entity.saveToTranscript = @"ContactId";    // Save this entity to Transcript.ContactId
entity.linkToEntityName = @"Case";
entity.linkToEntityField = @"ContactId";   // Link this entity to Case.ContactId
  
// Add an entity field map to our entity
SCSPrechatEntityField* entityField = [[SCSPrechatEntityField alloc] 
  initWithFieldName:@"FirstName" label:@"First Name"];
entityField.doFind = YES;        // Attempt to search for that field
entityField.isExactMatch = YES;  // Must be an exact match
entityField.doCreate = YES;      // Create if not found
[entity.entityFieldsMaps 
  addObject:entityField];        // Add field to entity map
```

```
let config = SCSChatConfiguration(liveAgentPod: "YOUR_POD_NAME",
                                  orgId: "YOUR_ORG_ID",
                                  deploymentId: "YOUR_DEPLOYMENT_ID",
                                  buttonId: "YOUR_BUTTON_ID")

// Create some basic pre-chat fields (with user input)
let firstNameField = SCSPrechatTextInputObject(label: "First Name")
firstNameField!.isRequired = true
let lastNameField = SCSPrechatTextInputObject(label: "Last Name")
lastNameField!.isRequired = true
let emailField = SCSPrechatTextInputObject(label: "Email")
emailField!.isRequired = true
emailField!.keyboardType = .emailAddress
emailField!.autocorrectionType = .no

// Create a pre-chat field without user input
let subjectField = SCSPrechatObject(label: "Subject", value: "Chat Session")

// Create an entity mapping for a Contact record type
let contactEntity = SCSPrechatEntity(entityName: "Contact")
contactEntity.saveToTranscript = "Contact"
contactEntity.linkToEntityName = "Case"
contactEntity.linkToEntityField = "ContactId"

// Add some field mappings to our Contact entity
let firstNameEntityField = SCSPrechatEntityField(fieldName: "FirstName", label: "First Name")
firstNameEntityField.doFind = true
firstNameEntityField.isExactMatch = true
firstNameEntityField.doCreate = true
contactEntity.entityFieldsMaps.add(firstNameEntityField)
let lastNameEntityField = SCSPrechatEntityField(fieldName: "LastName", label: "Last Name")
lastNameEntityField.doFind = true
lastNameEntityField.isExactMatch = true
lastNameEntityField.doCreate = true
contactEntity.entityFieldsMaps.add(lastNameEntityField)
let emailEntityField = SCSPrechatEntityField(fieldName: "Email", label: "Email")
emailEntityField.doFind = true
emailEntityField.isExactMatch = true
emailEntityField.doCreate = true
contactEntity.entityFieldsMaps.add(emailEntityField)

// Create an entity mapping for a Case record type
let caseEntity = SCSPrechatEntity(entityName: "Case")
caseEntity.saveToTranscript = "Case"
caseEntity.showOnCreate = true

// Add one field mappings to our Case entity
let subjectEntityField = SCSPrechatEntityField(fieldName: "Subject", label: "Subject")
subjectEntityField.doCreate = true
caseEntity.entityFieldsMaps.add(subjectEntityField)

// Update config object with the pre-chat fields
config!.prechatFields =
  [firstNameField, lastNameField, emailField, subjectField] as? [SCSPrechatObject]

// Update config object with the entity mappings
config!.prechatEntities = [contactEntity, caseEntity]

// Start the session!
ServiceCloud.shared().chatUI.showChat(with: config!, showPrechat: true)
```

## Related Topics

- Show Pre-Chat Fields to User (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_prechat_fields.htm)
