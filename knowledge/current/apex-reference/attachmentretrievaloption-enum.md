---
title: "AttachmentRetrievalOption Enum"
domain: apex-reference
topic: attachmentretrievaloption-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.461Z
estimatedTokens: 389
namespace: Messaging
keywords: [AttachmentRetrievalOption, Provides, options, including, attachment, metadata, only, content, excluding, attachments., Usage, Values]
---

# AttachmentRetrievalOption Enum

> Provides options for including attachment metadata only, attachment
      metadata and content, or excluding attachments.

**Namespace:** `Messaging`

# AttachmentRetrievalOption Enum

Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

## Usage

Use these enum values with the [renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_messaging_renderStoredEmailTemplate_2 "Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.") method.

## Enum Values

The following are the values of the Messaging.AttachmentRetrievalOption enum.

| Value | Description |
| --- | --- |
| METADATA_ONLY | Includes only the file name, content type, and the object ID in the fileAttachments property of Messaging.SingleEmailMessage.NoteWhen the template is rendered from a Visualforce template (and not from a static file attached to the template), the object ID is not available. |
| METADATA_WITH_BODY | Includes the attachment content, in addition to the file name, content type, and the object ID in the fileAttachments property of Messaging.SingleEmailMessage. |
| NONE | Doesn’t include any attachments in Messaging.SingleEmailMessage. |

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
