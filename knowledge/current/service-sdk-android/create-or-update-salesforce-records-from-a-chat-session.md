---
title: "Create or Update Salesforce Records from a Chat Session"
domain: service-sdk-android
topic: create-or-update-salesforce-records-from-a-chat-session
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:32.541Z
estimatedTokens: 1811
keywords: [Salesforce, Records, Chat, Session, begins, org, pass, agent, technique, immediately, context, they, effective, Basic, Flow]
---

# Create or Update Salesforce Records from a Chat Session

> When a chat session begins, you can create or find records within your org and pass
    this information to the agent. Using this technique, your agent can immediately have all the
    context they need for an effective chat session.

# Create or Update Salesforce Records from a Chat Session

When a chat session begins, you can create or find records within your org and pass this information to the agent. Using this technique, your agent can immediately have all the context they need for an effective chat session.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Overview

Before reading these instructions, review [Show Pre-Chat Fields to User](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_prechat_fields.htm "Before a chat session begins, you can request that the user enter pre-chat fields that are sent to the agent at the start of the session.") to understand how to create pre-chat fields.

Pre-chat fields are always sent to the agent at the start of the session. But if you want to fill in fields of a particular record, instantiate a [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) for each Salesforce object (for example, Case or Contact) and add a [ChatEntityField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntityField.html) for each field association within that Salesforce object (for example, Subject or LastName). After you've built your [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) objects, pass them to your [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html) builder using the [chatEntities](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.Builder.html#chatEntities\(java.util.List%3Ccom.salesforce.android.chat.core.model.ChatEntity%3E\)) method.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

#### Note

Case creation does not currently work for Omni-Channel routing without a setup change to your org. To resolve this problem, raise a ticket with Salesforce to ensure that Omni-Channel is enabled to create a Case in your org.

## Basic Flow

This sample shows how to create the first and last name to a contact record in your org. This example doesn't involve user input, but you can use [PreChatTextInputField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/model/PreChatTextInputField.html) instead of [ChatUserData](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatUserData.html) to allow user input.

In Java:

```

```

In Kotlin:

```

```

The first argument is the field label that is displayed to the agent in the transcript. The second argument is the value. The third argument is whether this value is displayed to the agent.

After you create your [ChatUserData](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatUserData.html) objects, create a [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) for each Salesforce object that you want to associate these values with. The [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) object contains a for each field association. When you build this [ChatEntityField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntityField.html) object, pass in a reference to the associated object.

In this example, we create two [ChatEntityField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntityField.html) objects and one using those two objects.

In Java:

```

```

In Kotlin:

```

```

When creating the [ChatEntityField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntityField.html) object, you can specify whether to search for that field (doFind), whether the match must be exact (isExactMatch), and whether to create a new record if not found (doCreate). When creating the [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) object, along with the name of the Salesforce object and the list of fields, you can specify whether the contact should pop up for the agent upon creation (showOnCreate). See the reference documentation for [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) and [ChatEntityField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntityField.html). Also refer to [Chat REST API Data Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm) for the Entity and EntityFieldsMaps data types, which define the underlying functionality of these SDK objects.

After you've built your [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) objects, pass them to your [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html) builder using the [chatEntities](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.Builder.html#chatEntities\(java.util.List%3Ccom.salesforce.android.chat.core.model.ChatEntity%3E\)) method.

In Java:

```

```

In Kotlin:

```

```

## Example

This code sample adds FirstName, LastName, Email to a Contact record and a Subject field to a Case record.

In Java:

```

```

In Kotlin:

```

```

## Code Examples

```
// Create chat user data that doesn't require user interaction
ChatUserData firstNameData = new ChatUserData("FirstName", "Jane", true);
ChatUserData lastNameData = new ChatUserData("LastName", "Doe", true);
```

```
// Create chat user data that doesn't require user interacti
val firstNameData = ChatUserData("FirstName", "Jane", true)
val lastNameData = ChatUserData("LastName", "Doe", true)
```

```
// Build chat entity fields
ChatEntityField firstNameField = 
  new ChatEntityField.Builder().doFind(true)
                               .isExactMatch(true)
                               .doCreate(true)
                               .build("FirstName", firstNameData);
ChatEntityField lastNameField = 
  new ChatEntityField.Builder().doFind(true)
                               .isExactMatch(true)
                               .doCreate(true)
                               .build("LastName", lastNameData);

// Build a chat entity object from those fields
// (to map user data to fields in a Salesforce record)
ChatEntity contactEntity = new ChatEntity.Builder()
  .showOnCreate(true)
  .addChatEntityField(firstNameField)
  .addChatEntityField(lastNameField)
  .build("Contact");
```

```
// Build chat entity fields
val firstNameField = ChatEntityField.Builder().doFind(true)
                                              .isExactMatch(true)
                                              .doCreate(true)
                                              .build("FirstName", firstNameData)
val lastNameField = ChatEntityField.Builder().doFind(true)
                                             .isExactMatch(true)
                                             .doCreate(true)
                                             .build("LastName", lastNameData)

// Build a chat entity object from those fields
// (to map user data to fields in a Salesforce record)
val contactEntity = ChatEntity.Builder()
    .showOnCreate(true)
    .addChatEntityField(firstNameField)
    .addChatEntityField(lastNameField)
    .build("Contact")
```

```
// Create the chat configuration builder
final ChatConfiguration.Builder chatConfigurationBuilder = 
  new ChatConfiguration.Builder(ORG_ID, BUTTON_ID, 
                                DEPLOYMENT_ID, LIVE_AGENT_POD);

// Add user data and entities
chatConfigurationBuilder
  .chatUserData(firstNameData, lastNameData)
  .chatEntities(contactEntity);

// Build the chat configuration object
ChatConfiguration chatConfiguration = chatConfigurationBuilder.build();
```

## Related Topics

- Show Pre-Chat Fields to User (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_prechat_fields.htm)
