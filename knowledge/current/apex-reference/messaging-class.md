---
title: "Messaging Class"
domain: apex-reference
topic: messaging-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.244Z
keywords: [Messaging, Class, Renders, text, custom, HTML, Visualforce, email, template, exists, database, instance, Messaging.SingleEmailMessage., Provides, options, including, attachment, metadata, only, content]
---

# Messaging Class

> Renders a text, custom, HTML, or Visualforce email template that
      exists in the database into an instance of Messaging.SingleEmailMessage. Provides options for including attachment metadata
      only, attachment metadata and content, or excluding attachments.

### renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption, updateEmailTemplateUsage)

Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.

#### Signature

public static Messaging.SingleEmailMessage renderStoredEmailTemplate(String templateId, String whoId, String whatId, Messaging.AttachmentRetrievalOption attachmentRetrievalOption, Boolean updateEmailTemplateUsage)

#### Parameters

templateId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An email template that exists in the database, such as text, HTML, custom, and Visualforce templates.

whoId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The identifier of an object in the database, typically a contact, lead, or user. The database record for that object is read and used in merge field processing.

whatId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies an object in the database, like an account or opportunity. The record for that object is read and used in merge field processing.

attachmentRetrievalOption

Type: [Messaging.AttachmentRetrievalOption](atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_AttachmentRetrievalOptionEnum.htm "Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.")

Specifies options for including attachments in the fileAttachments property of the returned Messaging.SingleEmailMessage. Set to one of the [Messaging.AttachmentRetrievalOption](atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_AttachmentRetrievalOptionEnum.htm "Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.") values to include attachment metadata only, attachment metadata and content, or to exclude attachments.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

When the attachmentRetrievalOption parameter is *not* set to NONE, the entityAttachments property of Messaging.SingleEmailMessage contains the ID of the Salesforce content objects to attach (ContentVersion or Document). The fileAttachments property contains the IDs of attachments, in addition to all the IDs in the entityAttachments property. As a result, the ID values in entityAttachments are duplicates of the IDs in the fileAttachments property. If you call renderStoredEmailTemplate() by passing the METADATA\_WITH\_BODY option, and send the rendered email message, the email will contain duplicate attachments. Before using the returned email message with [sendEmail(emails, allOrNothing)](#apex_System_Messaging_sendEmail "Sends the list of emails instantiated with either SingleEmailMessage or MassEmailMessage and returns a list of SendEmailResult objects. When org preferences are set to save EmailMessage objects and a trigger is defined for EmailMessage objects, the trigger is fired for each SingleEmailMessage individually. The sendEmail method can be called 10 times per Apex transaction and each method invocation can include up to 100 \"To\", 25 \"Cc\", and 25 \"Bcc\" recipients."), you can remove attachments from fileAttachments that are duplicated in entityAttachments.

updateEmailTemplateUsage

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the usage field in the EmailTemplate record is updated upon successful rendering.

#### Return Value

Type: [Messaging.SingleEmailMessage](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_classes_outbound_single "Contains methods for sending single email messages.")

#### Usage

Executing the renderStoredEmailTemplate method counts toward the SOQL governor limit as one query.