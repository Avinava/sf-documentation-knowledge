---
title: "Show Pre-Chat Fields to User"
domain: service-sdk-android
topic: show-pre-chat-fields-to-user
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.688Z
estimatedTokens: 1418
keywords: [Show, Pre-Chat, User, chat, session, begins, enter, sent, agent, start]
---

> Before a chat session begins, you can request that the user enter pre-chat fields that
    are sent to the agent at the start of the session.

# Show Pre-Chat Fields to User

Before a chat session begins, you can request that the user enter pre-chat fields that are sent to the agent at the start of the session.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

To create pre-chat fields in your app, instantiate [ChatUserData](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatUserData.html) objects during session configuration and then pass the pre-chat info to your [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html) builder.

1.  Create a -derived object for each pre-chat field. Use the subclass [PreChatTextInputField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/model/PreChatTextInputField.html) for string fields, the subclass [PreChatPickListField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/model/PreChatPickListField.html) for picklists, and you can directly use [ChatUserData](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatUserData.html) for fields that don't require any user input at all. For fields that require user interaction, specify the display label and the label that the agent sees. You can also specify other characteristics, such as whether the field is required and what type of text field it is. When building the input field object, the first string is what the user sees on the device and the second string is what the agent sees in the transcript.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

2.  (Optional) Create a list of [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) objects to associate pre-chat fields with fields from a record in your org.

    Pre-chat fields are always sent to the agent at the start of the session. But if you want to fill in fields of a particular record, instantiate a [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) for each Salesforce object (for example, Case or Contact) and add a [ChatEntityField](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntityField.html) for each field association within that Salesforce object (for example, Subject or LastName). After you've built your [ChatEntity](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/model/ChatEntity.html) objects, pass them to your [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html) builder using the [chatEntities](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.Builder.html#chatEntities\(java.util.List%3Ccom.salesforce.android.chat.core.model.ChatEntity%3E\)) method.

    To learn more, see [Create or Update Salesforce Records from a Chat Session](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_send_custom_data.htm "When a chat session begins, you can create or find records within your org and pass this information to the agent. Using this technique, your agent can immediately have all the context they need for an effective chat session.").

3.  Pass the pre-chat info to your [ChatConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.html) builder using the [chatUserData](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/core/ChatConfiguration.Builder.html#chatUserData\(com.salesforce.android.chat.core.model.ChatUserData...\)) method.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```

    From here, you can start the chat session normally.

    In Java:

    ```

    ```

    In Kotlin:

    ```

    ```


With this code, the user sees the following pre-chat UI in their mobile app.

![Pre-chat UI on app](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid-chat-prechat-app.png&folder=service_sdk_android)

And the agent sees the following UI from the console.

![Pre-chat UI on console](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid-chat-prechat-console.png&folder=service_sdk_android)

## Code Examples

```
// Some simple string fields
PreChatTextInputField firstName = new PreChatTextInputField.Builder()
  .required(true)
  .build("Please enter your first name", "First Name"); 
  // First string in build() is what the user sees on the device,
  // the second string is what the agent sees in the transcript...
PreChatTextInputField lastName = new PreChatTextInputField.Builder()
  .required(true)
  .build("Please enter your last name", "Last Name");

// An email field
PreChatTextInputField email = new PreChatTextInputField.Builder()
  .required(true)
  .inputType(EditorInfo.TYPE_TEXT_VARIATION_EMAIL_ADDRESS)
  .mapToChatTranscriptFieldName("Email__c")
  .build("Please enter your email", "Email Address");

// A phone number field (that isn't displayed to agent)
PreChatTextInputField phoneNumber = new PreChatTextInputField.Builder()
  .displayedToAgent(false)
  .inputType(InputType.TYPE_CLASS_PHONE)
  .build("Phone number (Agent can't see this)", "Phone");

// A read-only field
PreChatTextInputField subject = new PreChatTextInputField.Builder()
  .readOnly(true)
  .initialValue("Read-only case subject")
  .build("Case Subject", "Subject");

// A long message field
PreChatTextInputField description = new PreChatTextInputField.Builder()
  .inputType(EditorInfo.TYPE_TEXT_VARIATION_LONG_MESSAGE)
  .maxValueLength(200)
  .build("Please describe your problem", "Description");

// A picklist field
PreChatPickListField priority = new PreChatPickListField.Builder()
  .required(true)
  .addOption(new PreChatPickListField.Option("Low Priority", "Low"))
  .addOption(new PreChatPickListField.Option("Medium Priority", "Medium"))
  .addOption(new PreChatPickListField.Option("High Priority", "High"))
  .addOption(new PreChatPickListField.Option("AHHHHHHHH!!!", "Critical"))
  .build("Issue Priority", "Priority");

// You can also create hidden fields that the user doesn't see, but
// still gets passed along to the agent using ChatUserData...
ChatUserData hiddenField = new ChatUserData(
  "Hidden Custom Data",
  "The user doesn't see this information",
  true);
```

```
// Some simple string fields
val firstName = PreChatTextInputField.Builder()
    .required(true)
    .build("Please enter your first name", "First Name")
    // First string in build() is what the user sees on the device,
    // the second string is what the agent sees in the transcript...
val lastName = PreChatTextInputField.Builder()
    .required(true)
    .build("Please enter your last name", "Last Name")

// An email field
val email = PreChatTextInputField.Builder()
    .required(true)
    .inputType(EditorInfo.TYPE_TEXT_VARIATION_EMAIL_ADDRESS)
    .mapToChatTranscriptFieldName("Email__c")
    .build("Please enter your email", "Email Address")

// A phone number field (that isn't displayed to agent)
val phoneNumber = PreChatTextInputField.Builder()
    .displayedToAgent(false)
    .inputType(InputType.TYPE_CLASS_PHONE)
    .build("Phone number (Agent can't see this)", "Phone")

// A read-only field
val subject = PreChatTextInputField.Builder()
    .readOnly(true)
    .initialValue("Read-only case subject")
    .build("Case Subject", "Subject")

// A long message field
val description = PreChatTextInputField.Builder()
    .inputType(EditorInfo.TYPE_TEXT_VARIATION_LONG_MESSAGE)
    .maxValueLength(200)
    .build("Please describe your problem", "Description")

// A picklist field
val priority = PreChatPickListField.Builder()
    .required(true)
    .addOption(PreChatPickListField.Option("Low Priority", "Low"))
    .addOption(PreChatPickListField.Option("Medium Priority", "Medium"))
    .addOption(PreChatPickListField.Option("High Priority", "High"))
    .addOption(PreChatPickListField.Option("AHHHHHHHH!!!", "Critical"))
    .build("Issue Priority", "Priority")

// You can also create hidden fields that the user doesn't see, but
// still gets passed along to the agent using ChatUserData...
val hiddenField = ChatUserData(
    "Hidden Custom Data",
    "The user doesn't see this information",
    true)
```

```
// Create the chat configuration builder
final ChatConfiguration.Builder chatConfigurationBuilder = 
  new ChatConfiguration.Builder(ORG_ID, BUTTON_ID, 
                                DEPLOYMENT_ID, LIVE_AGENT_POD);

// Add user data and entities
chatConfigurationBuilder
  .chatUserData(firstName, lastName, email, priority, 
    subject, description, phoneNumber, hiddenField);

// Build the chat configuration object
ChatConfiguration chatConfiguration = chatConfigurationBuilder.build();
```

```
// Create the chat configuration builder
val chatConfigurationBuilder =
    ChatConfiguration.Builder(ORG_ID, BUTTON_ID,
                              DEPLOYMENT_ID, LIVE_AGENT_POD)

// Add user data and entities
chatConfigurationBuilder
    .chatUserData(firstName, lastName, email, priority,
        subject, description, phoneNumber, hiddenField)

// Build the chat configuration object
val chatConfiguration = chatConfigurationBuilder.build()
```

```apex
// Create a UI configuration instance from a core config object
// and start session!
ChatUI.configure(ChatUIConfiguration.create(chatConfiguration))
  .createClient(getApplicationContext())
  .onResult(new Async.ResultHandler<ChatUIClient>() {
      @Override public void handleResult (Async<?> operation, 
        ChatUIClient chatUIClient) {
            chatUIClient.startChatSession(MainActivity.this);
      }
});
```

## Related Topics

- Create or Update Salesforce Records from a Chat Session (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_send_custom_data.htm)
