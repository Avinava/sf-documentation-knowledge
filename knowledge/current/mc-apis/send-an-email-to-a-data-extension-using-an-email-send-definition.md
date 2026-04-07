---
title: "Send an Email to a Data Extension Using an Email Send Definition"
domain: mc-apis
topic: send-an-email-to-a-data-extension-using-an-email-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.178Z
estimatedTokens: 578
keywords: [Diagram, Send, Email, Extension, Definition, scenario, how, message, sendable, basis, perform, Referenced, Require, Code, Sample, Links, Items]
---

> This scenario describes how to send an email message using information in a data extension. You can use information within a sendable data extension as the basis for a send. To perform this send, you must use the following elements:

# Send an Email to a Data Extension Using an Email Send Definition

This scenario describes how to send an email message using information in a data extension. You can use information within a sendable data extension as the basis for a send. To perform this send, you must use the following elements:

-   Email Message
-   Email Send Definition
-   Publication List
-   Data Extension

The sendable data extension contains the information used to conduct the send, and the information on the publication list manages opt-in information for subscribers. A subscriber must be on both the data extension and the publication list to receive an email message as part of the send.

## Diagram

![Triggered Email Send](/docs/resources/img/en-us/noversion?doc_id=images%2Fsendtriggeredsend.jpg&folder=mc-apis)

## Methods Used

-   [Create](atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm "Create")
-   [Perform](atlas.en-us.noversion.mc-apis.meta/mc-apis/perform.htm "/020_Web_Service_Guide/Methods/Perform")

## Objects Referenced

-   CustomObject
-   [EmailSendDefinition](atlas.en-us.noversion.mc-apis.meta/mc-apis/emailsenddefinition.htm "/020_Web_Service_Guide/Objects/EmailSendDefinition")
-   [Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm "Email")
-   [SendClassification](atlas.en-us.noversion.mc-apis.meta/mc-apis/sendclassification.htm "SendClassification")
-   [List](atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm "List")

## Require Properties

-   CustomerKey
-   Name
-   SendClassification.CustomerKey
-   SendDefinitionList.CustomObjectID
-   SendDefinitionList.DataSourceTypeID
-   Email.ID

## Code Sample Links

-   [Manage Sends to Publication Lists using Email Send Definitions](atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_sends_to_subscribed_and_unsubscribed_recipients_on_publication_lists_via_email_send_definitions.htm "Managing_Sends_to_Subscribed_and_Unsubscribed_Recipients_on_Publication_Lists_Via_Email_Send_Definitions")
-   [Start an Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_email_send_definition.htm "Starting_an_Email_Send_Definition")

## Related Items

[Data Extensions and Data Relationship Procedures](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)

## Related Topics

- Create (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
- Perform (atlas.en-us.noversion.mc-apis.meta/mc-apis/perform.htm)
- EmailSendDefinition (atlas.en-us.noversion.mc-apis.meta/mc-apis/emailsenddefinition.htm)
- Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm)
- SendClassification (atlas.en-us.noversion.mc-apis.meta/mc-apis/sendclassification.htm)
- List (atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm)
- Manage Sends to Publication Lists using Email Send Definitions (atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_sends_to_subscribed_and_unsubscribed_recipients_on_publication_lists_via_email_send_definitions.htm)
- Start an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_email_send_definition.htm)
