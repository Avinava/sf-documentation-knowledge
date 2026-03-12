---
title: "Set Pre-Chat Form Fields to Automatically Populate when Customers Log In"
domain: snapins-web-dev
topic: set-pre-chat-form-fields-to-automatically-populate-when-customers-log-in
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.415Z
estimatedTokens: 522
keywords: [Pre-Chat, Form, Automatically, Populate, Customers, Log, agents, already, know, basic, their, email, address, array, 4.0]
---

# Set Pre-Chat Form Fields to Automatically Populate when Customers Log In

> When your customers log in, agents already know basic information like their name and
        email address. Use this array in your 4.0 code snippet to populate relevant pre-chat fields
        for them. You can mix and match fields for different record types. This information is for
        embedded chat windows that are placed outside of Salesforce with Lightning Out (beta). If
        you use your embedded window in Experience sites, you can enable the contact fields to fill
        in automatically in the Embedded Chat component settings.

# Set Pre-Chat Form Fields to Automatically Populate when Customers Log In

When your customers log in, agents already know basic information like their name and email address. Use this array in your 4.0 code snippet to populate relevant pre-chat fields for them. You can mix and match fields for different record types. This information is for embedded chat windows that are placed outside of Salesforce with Lightning Out (beta). If you use your embedded window in Experience sites, you can enable the contact fields to fill in automatically in the Embedded Chat component settings.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

The parameter you can use to set the fields that you want to pre-populate is included with your version 4.0 code snippet as a code comment.

embedded\_svc.settings.prepopulatedPrechatFields = {...}

If you use Embedded Chat outside of Salesforce (with Lightning Out), you can set any pre-chat field to populate automatically using the fields’ API names. Find the field API names on the object pages for the objects you use with pre-chat. Then you can set the value of embedded\_svc.settings.prepopulatedPrechatFields with a JavaScript object that contains the customer’s information.

The following sample code for embedded\_svc.settings.prepopulatedPrechatFields populates the First Name, Last Name, Email, and Subject fields in the pre-chat form.

```

```

## Code Examples

```
embedded_svc.settings.prepopulatedPrechatFields = {
    FirstName: “John”,
    LastName: “Doe”,
    Email: “john.doe@salesforce.com”,
    Subject: “Hello”
};
```
