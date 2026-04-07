---
title: "Send an Email to a Subscriber List"
domain: mc-apis
topic: send-an-email-to-a-subscriber-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.183Z
estimatedTokens: 628
keywords: [Diagram, Send, Email, Subscriber, scenario, how, subscribers, procedure, requires, three, Referenced, Code, Sample, Links, Items]
---

> This scenario describes how to send an email to subscribers on a list. This procedure requires three elements:

# Send an Email to a Subscriber List

This scenario describes how to send an email to subscribers on a list. This procedure requires three elements:

-   Email Message
-   Subscriber List
-   Email Send Definition

After creating the email message and subscriber list, you can specify those elements in the email send definition. Perform a send on the email send definition to actually execute the send to the subscribers on your list.

## Diagram

![Email Send Definition](/docs/resources/img/en-us/noversion?doc_id=images%2Femailsenddefinition1.jpg&folder=mc-apis)

## Methods Used

-   [Create](atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm "Create")
-   [Perform](atlas.en-us.noversion.mc-apis.meta/mc-apis/perform.htm "Perform")

## Objects Referenced

-   [Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm "Email")
-   [EmailSendDefinition](atlas.en-us.noversion.mc-apis.meta/mc-apis/emailsenddefinition.htm "EmailSendDefinition")
-   [List](atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm "List")

## Required Properties

-   CustomerKey
-   Name
-   SendClassification.CustomerKey
-   SendDefinitionList.List.ID
-   SendDefinitionList.DataSourceTypeID
-   SendDefinitionList.SendDefinitionListType
-   Email.ID

## Code Sample Links

-   [Create a List-Based Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_email_send_definition.htm "Creating_Email_Send_Definition")
-   [Create, Perform, and Delete Email Send Definitions](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_performing_and_deleting_email_send_definitions.htm "Email_Send_Definitions")
-   [Create an Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_send_definition_using_the_web_service_api.htm "Creating_an_Email_Send_Definition_Using_the_Web_Service_API")
-   [Create an Email Send Definition with Dynamic Content](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_send_definition_with_dynamic_content_using_the_web_service_api.htm "Creating_an_Email_Send_Definition_with_Dynamic_Content_Using_the_Web_Service_API")
-   [Schedule an Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_an_email_send_definition.htm "Scheduling_an_Email_Send_Definition")
-   [Start an Email Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_email_send_definition.htm "Starting_an_Email_Send_Definition")

## Related Items

[Send Messages](https://help.salesforce.com/articleView?id=mc_es_messages.htm&type=5)

## Related Topics

- Create (atlas.en-us.noversion.mc-apis.meta/mc-apis/create.htm)
- Perform (atlas.en-us.noversion.mc-apis.meta/mc-apis/perform.htm)
- Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/email.htm)
- EmailSendDefinition (atlas.en-us.noversion.mc-apis.meta/mc-apis/emailsenddefinition.htm)
- List (atlas.en-us.noversion.mc-apis.meta/mc-apis/list.htm)
- Create a List-Based Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_email_send_definition.htm)
- Create, Perform, and Delete Email Send Definitions (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_performing_and_deleting_email_send_definitions.htm)
- Create an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_send_definition_using_the_web_service_api.htm)
- Create an Email Send Definition with Dynamic Content (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_send_definition_with_dynamic_content_using_the_web_service_api.htm)
- Schedule an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_an_email_send_definition.htm)
