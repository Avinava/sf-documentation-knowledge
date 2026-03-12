---
title: "Follow Pre-Chat Code Examples"
domain: snapins-web-dev
topic: follow-pre-chat-code-examples
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:36:19.437Z
estimatedTokens: 1084
keywords: [Follow, Pre-Chat, Code, Examples, stage, contacts, avoid, attaching, records, transcripts, attach, record, override, specific, org]
---

# Follow Pre-Chat Code Examples

> During the pre-chat stage: find existing contacts, avoid attaching
      records to transcripts, attach a record to an existing field, or override a specific field in
      your org. These examples and more illustrate some common use cases for pre-chat code
      snippets.

# Follow Pre-Chat Code Examples

During the pre-chat stage: find existing contacts, avoid attaching records to transcripts, attach a record to an existing field, or override a specific field in your org. These examples and more illustrate some common use cases for pre-chat code snippets.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

## Find contacts but don't create new ones

In this example, we don't want to create contact records — we only want to find them. To disable creation of a record, set doCreate to false for all the required fields for the record. This code disables a common default behavior of creating a contact record with each chat session.

```

```

## Don’t attach records to the chat transcript

If you don’t want to attach contact records to the transcript, set saveToTranscript to an empty string.

```

```

## Attach a record to a custom field on the chat transcript

If you want to attach the created case or contact record to a custom field on the transcript, use saveToTranscript.

```

```

## Don’t show the created record to the agent

If you don’t want to show the created record when the chat session starts, set showOnCreate to false.

```

```

## Override fields specified in your org’s setup

This example overrides the first name, last name, and subject passed in from the pre-chat form. To test this code, select the service scenario in your org’s setup and add this code to your snippet.

```

```

## Create a new record from a different Salesforce object

If your business needs a record from a Salesforce object that isn’t available in the standard scenarios, you can define the object in extraPrechatInfo. For example, you can create an account when a chat session starts.

```

```

## Link to another Salesforce object

If you want to link the case record created by Embedded Chat to the account record you created from extraPrechatInfo, use linkToEntityName and linkToEntityFieldName.

```

```

## Don’t attach a contact to a case

If you don’t want the default link between a contact and a case, set linkToEntityName to an empty string.

```

```

## Disable pre-chat and pass along the user's name

If you want to avoid the pre-chat form but still have the user’s name show up in the Waiting state, you can:

1.  Find the object that contains "label" : "First Name".
2.  Add a property "name" : "FirstName".
3.  Set the value of the "value" property to the desired first name value. For example, "value" : "Jane".

```

```

## Set custom fields on the transcript object

If you want to set custom fields on the transcript object, pass those fields in as transcript fields in prechatFormDetails. This code assumes you created a custom field called CartValue on the chat transcript object.

```

```

## Save pre-chat form values into a custom field on the transcript object

If you want to save dynamic values from the pre-chat form directly into a custom field in the transcript object, you can:

1.  Create a custom field on the transcript object (for example, LastName\_\_c).

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

    #### Tip

    For the transcript field, the following data types work best: text, number, email, checkbox, and phone.

2.  Pass the transcript fields in the extra pre-chat form details without passing the value property.

The value is calculated from the pre-chat form and saved into the custom field.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

We don’t support passing pre-chat form values to standard transcript fields.

## Code Examples

```
embedded_svc.settings.extraPrechatInfo = [{
  "entityFieldMaps": [{
    "doCreate":false,
    "doFind":true,
    "fieldName":"LastName",
    "isExactMatch":true,
    "label":"Last Name"
  }, {
    "doCreate":false,
    "doFind":true,
    "fieldName":"FirstName",
    "isExactMatch":true,
    "label":"First Name"
  }, {
    "doCreate":false,
    "doFind":true,
    "fieldName":"Email",
    "isExactMatch":true,
    "label":"Email"
  }],
  "entityName":"Contact"
}];
```

```
embedded_svc.settings.extraPrechatInfo = [{
  "entityFieldMaps": [{
    "doCreate":true,
    "doFind":true,
    "fieldName":"LastName",
    "isExactMatch":true,
    "label":"Last Name"
  }, {
    "doCreate":true,
    "doFind":true,
    "fieldName":"FirstName",
    "isExactMatch":true,
    "label":"First Name"
  }, {
    "doCreate":true,
    "doFind":true,
    "fieldName":"Email",
    "isExactMatch":true,
    "label":"Email"
  }],
  "entityName":"Contact", 
  "saveToTranscript": "" 
}];
```

```
embedded_svc.settings.extraPrechatInfo = [{
  "entityFieldMaps": [{
    "doCreate": true,
    "doFind": true,
    "fieldName": "LastName",
    "isExactMatch": true,
    "label": "Last Name"
  }, {
    "doCreate": true,
    "doFind": true,
    "fieldName": "FirstName",
    "isExactMatch": true,
    "label": "First Name"
  }, {
    "doCreate": true,
    "doFind": true,
    "fieldName": "Email",
    "isExactMatch": true,
    "label": "Email"
  }],
  "entityName": "Contact",
  "saveToTranscript": "customContact__c"
}];
```

```
embedded_svc.settings.extraPrechatInfo = [{
  "entityFieldMaps": [{
    "doCreate": true,
    "doFind": true,
    "fieldName": "LastName",
    "isExactMatch": true,
    "label": "Last Name"
  }, {
    "doCreate": true,
    "doFind": true,
    "fieldName": "FirstName",
    "isExactMatch": true,
    "label": "First Name"
  }, {
    "doCreate": true,
    "doFind": true,
    "fieldName": "Email",
    "isExactMatch": true,
    "label": "Email"
  }],
  "entityName": "Contact",
  "showOnCreate": false
}];
```

```
embedded_svc.settings.extraPrechatFormDetails = [{
  "label": "First Name",
  "value": "John",
  "displayToAgent": true
}, {
  "label": "Last Name",
  "value": "Doe",
  "displayToAgent": true
}, {
  "label": "Email",
  "value": "john.doe@salesforce.com",
  "displayToAgent": true
}, {
  "label": "issue",
  "value": "Overriding your setup",
  "displayToAgent": true
}];

embedded_svc.settings.extraPrechatInfo = [{
  "entityName": "Contact",
  "showOnCreate": true,
  "linkToEntityName": "Case",
  "linkToEntityField": "ContactId",
  "saveToTranscript": "ContactId",
  "entityFieldMaps": [{
    "isExactMatch": true,
    "fieldName": "FirstName",
    "doCreate": true,
    "doFind": true,
    "label": "First Name"
  }, {
    "isExactMatch": true,
    "fieldName": "LastName",
    "doCreate": true,
    "doFind": true,
    "label": "Last Name"
  }, {
    "isExactMatch": true,
    "fieldName": "Email",
    "doCreate": true,
    "doFind": true,
    "label": "Email"
  }]
}, {
  "entityName": "Case",
  "showOnCreate": true,
  "saveToTranscript": "CaseId",
  "entityFieldMaps": [{
    "isExactMatch": false,
    "fieldName": "Subject",
    "doCreate": true,
    "doFind": false,
    "label": "issue"
  }, {
    "isExactMatch": false,
    "fieldName": "Status",
    "doCreate": true,
    "doFind": false,
    "label": "Status"
  }, {
    "isExactMatch": false,
    "fieldName": "Origin",
    "doCreate": true,
    "doFind": false,
    "label": "Origin"
  }]
}]
```
