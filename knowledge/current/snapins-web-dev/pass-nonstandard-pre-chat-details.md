---
title: "Pass Nonstandard Pre-Chat Details"
domain: snapins-web-dev
topic: pass-nonstandard-pre-chat-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.447Z
estimatedTokens: 1113
keywords: [Pass, Nonstandard, Pre-Chat, Further, control, experience, Embedded, Service, code, snippet, Two, relate, extraPrechatFormDetails, extraPrechatInfo, send]
---

# Pass Nonstandard Pre-Chat Details

> Further control the pre-chat experience using parameters in your Embedded
      Service code snippet. Two parameters relate to the pre-chat experience: extraPrechatFormDetails and extraPrechatInfo. With these parameters, you can send information to the agent and
      to your org beyond what’s shown on the pre-chat form.

# Pass Nonstandard Pre-Chat Details

Further control the pre-chat experience using parameters in your Embedded Service code snippet. Two parameters relate to the pre-chat experience: extraPrechatFormDetails and extraPrechatInfo. With these parameters, you can send information to the agent and to your org beyond what’s shown on the pre-chat form.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

## extraPrechatFormDetails

This parameter allows you to send the agent more information and add information to the chat transcript.

The following sample code illustrates the most common fields for extraPrechatFormDetails.

```

```

The following properties can be used in this JSON parameter.

| Name | Type | Description |
| --- | --- | --- |
| label | String | The label for this field. |
| value | String | The value for this field. |
| displayToAgent | Boolean | Whether to display this label and value to the agent. |
| transcriptFields | Array of Strings | Names of the fields on the chat transcript record to which to save this value. |

## extraPrechatInfo

This parameter lets you map the pre-chat form details from the extraPrechatFormDetails parameter to fields in existing or new records. The information in this parameter is merged with the information already specified from your org's setup.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

If the label name is the same in the pre-chat setup in your org and in the extraPrechatInfo parameter, the information in the extraPrechatInfo parameter takes precedence.

The following sample code illustrates the most common fields for extraPrechatInfo.

```

```

The following properties can be used in this JSON parameter.

| Name | Type | Description |
| --- | --- | --- |
| entityName | String | The type of record to search for or create. |
| entityFieldMaps | Array of Objects | The list of fields within the record type specified in entityName. |
| entityFieldMaps.fieldName | String | The name of the field. |
| entityFieldMaps.label | String | The label of the field in the pre-chat form. This value must match the label in the extraPrechatFormDetails parameter. |
| entityFieldMaps.doCreate | Boolean | Whether to create if it doesn't exist. |
| entityFieldMaps.doFind | Boolean | Whether to search for the field if not an exact match. |
| entityFieldMaps.isExactMatch | Boolean | Whether a field value must match the field value in an existing record when you conduct a search with the findOrCreate.map API method. See findOrCreate.map.isExactMatch in the Live Agent Developer Guide. |
| saveToTranscript | String | The name of the transcript field to which to save the record. This field must be a standard lookup field or a custom field with a lookup relationship. If you don’t want to attach contact records to the transcript, set saveToTranscript to an empty string. |
| linkToEntityName | String | The name of the related object you want to link this object to. If you don’t want the default link between a contact and a case, set linkToEntityName to an empty string. |
| linkToEntityField | String | The name of the field (within the related object specified in linkToEntityName) that you want to link this object to. |

#### See Also

-   [Customize the Pre-Chat Form](https://help.salesforce.com/articleView?id=snapins_chat_customize_prechat_form.htm&language=en_US "Customize the Pre-Chat Form - HTML (New Window)")

-   [Find and Create Records Automatically with the Pre-Chat APIs](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat.htm "Find and Create Records Automatically with the Pre-Chat APIs - HTML (New Window)")

## Code Examples

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
}];
```

```
embedded_svc.settings.extraPrechatInfo = [{
  "entityFieldMaps": [{
    "doCreate": false,
    "doFind": true,
    "fieldName": "LastName",
    "isExactMatch": true,
    "label": "Last Name"
  }, {
    "doCreate": false,
    "doFind": true,
    "fieldName": "Email",
    "isExactMatch": true,
    "label": "Email"
  }],
  "entityName": "Contact"
}];
```
