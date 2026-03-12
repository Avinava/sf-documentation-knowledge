---
title: "Moderate Chatter Private Messages with Triggers"
domain: apex-guide
topic: moderate-chatter-private-messages-with-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.396Z
estimatedTokens: 677
keywords: [Moderate, Chatter, Messages, Triggers, Write, trigger, ChatterMessage, automate, moderation, messages, org, Experience, Cloud, site., triggers, ensure, conform, company’s, messaging, policies]
---

# Moderate Chatter Private Messages with Triggers

> Write a trigger for ChatterMessage to automate the moderation of
      private messages in an org or Experience Cloud site. Use triggers to ensure that messages
      conform to your company’s messaging policies and don’t contain blocklisted
    words.

# Moderate Chatter Private Messages with Triggers

Write a trigger for ChatterMessage to automate the moderation of private messages in an org or Experience Cloud site. Use triggers to ensure that messages conform to your company’s messaging policies and don’t contain blocklisted words.

| Available in: Salesforce Classic |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To save Apex triggers for ChatterMessage: | Author ApexANDManage Chatter Messages and Direct Messages |

Write an Apex *before insert* trigger to review the private message body and information about the sender. You can add validation messages to the record or the Body field, which causes the message to fail and an error to be returned to the user.

Although you can create an *after insert* trigger, ChatterMessage is not updatable, and consequently any *after insert* trigger that modifies ChatterMessage will fail at run time with an appropriate error message.

To create a trigger for private messages from Setup, enter ChatterMessage Triggers in the Quick Find box, then select **ChatterMessage Triggers**. Alternatively, you can create a trigger from the Developer Console by clicking **File** | **New** | **Apex Trigger** and selecting ChatterMessage from the **sObject** drop-down list.

This table lists the fields that are exposed on ChatterMessage.

| Field | Apex Data Type | Description |
| --- | --- | --- |
| Id | ID | Unique identifier for the Chatter message |
| Body | String | Body of the Chatter message as posted by the sender |
| SenderId | ID | User ID of the sender |
| SentDate | DateTime | Date and time that the message was sent |
| SendingNetworkId | ID | Network (site) in which the message was sent.This field is visible only if digital experiences is enabled and Private Messages is enabled in at least one site. |

This example shows a *before insert* trigger on ChatterMessage that is used to review each new message. This trigger calls a class method, moderator.review(), to review each new message before it is inserted.

```

```

If a message violates your policy, for example when the message body contains blocklisted words, you can prevent the message from being sent by calling the Apex addError method. You can call addError to add a custom error message on a field or on the entire message. The following snippet shows a portion of the reviewContent method that adds an error to the message Body field.

```

```

The following is the full MessageModerator class, which contains methods for reviewing the sender and the content of messages. Part of the code in this class has been deleted for brevity.

```

```

## Code Examples

```
trigger PrivateMessageModerationTrigger on ChatterMessage (before insert) {
    ChatterMessage[] messages = Trigger.new;
    
    // Instantiate the Message Moderator using the factory method
    MessageModerator moderator = MessageModerator.getInstance();
    
    for (ChatterMessage currentMessage : messages) {
        moderator.review(currentMessage);    
    }
}
```

```apex
if (proposedMsg.contains(nextBlockListedWord)) {
             theMessage.Body.addError(
                 'This message does not conform to the acceptable use policy');
             System.debug('moderation flagged message with word: ' 
                 + nextBlockListedWord);
             problemsFound=true;
             break;
          }
```

```apex
public class MessageModerator {
   private Static List<String> blocklistedWords=null;
   private Static MessageModerator instance=null;
   
   /**
     Overall review includes checking the content of the message,
     and validating that the sender is allowed to send messages.
   **/
   public void review(ChatterMessage theMessage) {
    reviewContent(theMessage);
    reviewSender(theMessage);
   }
   
   /**
     This method is used to review the content of the message. If the content
     is unacceptable, field level error(s) are added.
   **/
   public void reviewContent(ChatterMessage theMessage) {
      // Forcing to lower case for matching
      String proposedMsg=theMessage.Body.toLowerCase();  
      boolean problemsFound=false; // Assume it's acceptable
      // Iterate through the blocklist looking for matches
      for (String nextBlockListedWord : blocklistedWords) {
          if (proposedMsg.contains(nextBlockListedWord)) {
             theMessage.Body.addError(
                 'This message does not conform to the acceptable use policy');
             System.debug('moderation flagged message with word: ' 
                 + nextBlockListedWord);
             problemsFound=true;
             break;
          }
         }
         
       // For demo purposes, we're going to add a "seal of approval" to the 
       // message body which is visible.
       if (!problemsFound) {
         theMessage.Body = theMessage.Body + 
             ' *** approved, meets conduct guidelines';
       }
         
    }
   
   /**
     Is the sender allowed to send messages in this context?
     -- Moderators -- always allowed to send
     -- Internal Members -- always allowed to send
     -- Site Members -- in general only allowed to send if they have 
           a sufficient Reputation
     -- Site Members -- with insufficient reputation may message the 
           moderator(s)
   **/
   public void reviewSender(ChatterMessage theMessage) {
      // Are we in a Site Context?
      boolean isSiteContext = (theMessage.SendingNetworkId != null);
 
      // Get the User
      User sendingUser = [SELECT Id, Name, UserType, IsPortalEnabled 
                          FROM User where Id = :theMessage.SenderId ];  
      // ...          
   }   
   
   /**
     Enforce a singleton pattern to improve performance
   **/
   public static MessageModerator getInstance() {
     if (instance==null) {
        instance = new MessageModerator();
     }
     return instance;
   }
   

   /**
     Default contructor is private to prevent others from instantiating this class 
     without using the factory.
     Initializes the static members.
   **/
   private MessageModerator() {
      initializeBlockList();
   }
   /** 
     Helper method that does the "heavy lifting" to load up the dictionaries 
     from the database.  
     Should only run once to initialize the static member which is used for 
     subsequent validations.
   **/
   private void initializeBlockList() {
      if (blocklistedWords==null) {
          // Fill list of blocklisted words
          // ...
      }
   }
}
```
