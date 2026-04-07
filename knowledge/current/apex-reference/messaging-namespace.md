---
title: "Messaging Namespace"
domain: apex-reference
topic: messaging-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:02:29.736Z
estimatedTokens: 1622
namespace: Messaging
keywords: [Messaging, classes, Salesforce, notifications, email, functionality]
---

# Messaging Namespace

> The Messaging namespace provides classes and
    methods for Salesforce notifications and email functionality.

**Namespace:** `Messaging`

# Messaging Namespace

The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.

The Messaging namespace includes these classes, enums, and interfaces.

-   **[AttachmentRetrievalOption Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_AttachmentRetrievalOptionEnum.htm)**
    Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.
-   **[ActionableNotification Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_class_Messaging_ActionableNotification)**
    Contains information about an actionable custom notification.
-   **[ActionableNotification.Builder Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_class_Messaging_ActionableNotification_Builder)**
    Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.
-   **[ActionError Enum](atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_ActionError.htm)**
    Specifies the error that occurred during the execution of an actionable notification.
-   **[ActionResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm#apex_class_Messaging_ActionResult)**
    Contains information about the execution of an actionable notification.
-   **[ActionResult.Builder Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult_Builder.htm#apex_class_Messaging_ActionResult_Builder)**
    Contains methods to build and validate an instance of the Messaging.ActionResult class.
-   **[CustomNotification Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_class_Messaging_CustomNotification)**
    CustomNotification is used to create, configure, and send custom notifications from Apex code.
-   **[Email Class (Base Email Methods)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_classes_email_outbound_base)**
    Contains base email methods common to both single and mass email.
-   **[EmailFileAttachment Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm#apex_classes_email_outbound_attachment)**
    EmailFileAttachment is used in SingleEmailMessage to specify attachments passed in as part of the request, as opposed to existing documents in Salesforce.
-   **[InboundEmail Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_classes_email_inbound_inbound)**
    Represents an inbound email object.
-   **[InboundEmail.AuthenticationResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_class_Messaging_InboundEmail_AuthenticationResult)**
    Contains the authentication type and response for inbound emails.
-   **[InboundEmail.AuthenticationResultField Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResultField.htm#apex_class_Messaging_InboundEmail_AuthenticationResultField)**
    Contains field data from the authentication result response for inbound emails.
-   **[InboundEmail.BinaryAttachment Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_binary.htm#apex_classes_email_inbound_binary)**
    An InboundEmail object stores binary attachments in an InboundEmail.BinaryAttachment object.
-   **[InboundEmail.TextAttachment Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_text.htm#apex_classes_inbound_text)**
    An InboundEmail object stores text attachments in an InboundEmail.TextAttachment object.
-   **[InboundEmailResult Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_result.htm#apex_classes_email_inbound_result)**
    The InboundEmailResult object is used to return the result of the email service. If this object is null, the result is assumed to be successful.
-   **[InboundEnvelope Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_envelope.htm#apex_classes_email_inbound_envelope)**
    The InboundEnvelope object stores the envelope information associated with the inbound email, and has the following fields.
-   **[MassEmailMessage Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_mass.htm#apex_classes_email_outbound_mass)**
    Contains methods for sending mass email.
-   **[InboundEmail.Header Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_header.htm#apex_classes_email_inbound_header)**
    An InboundEmail object stores RFC 2822 email header information in an InboundEmail.Header object with the following properties.
-   **[PushNotification Class](atlas.en-us.apexref.meta/apexref/apex_classes_push_notification.htm)**
    PushNotification is used to configure push notifications and send them from an Apex trigger.
-   **[PushNotificationPayload Class](atlas.en-us.apexref.meta/apexref/apex_classes_push_notification_payload.htm)**
    Contains methods to create the notification message payload for an Apple device.
-   **[NotificationActionHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_Messaging_NotificationActionHandler.htm#apex_interface_Messaging_NotificationActionHandler)**
    Implement this interface to execute an action on a custom notification.
-   **[RenderEmailTemplateBodyResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateBodyResult.htm#apex_class_Messaging_RenderEmailTemplateBodyResult)**
    Contains the results for rendering email templates.
-   **[RenderEmailTemplateError Class](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_RenderEmailTemplateError.htm#apex_class_Messaging_RenderEmailTemplateError)**
    Represents an error that the RenderEmailTemplateBodyResult object can contain.
-   **[SendEmailError Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailerror.htm#apex_classes_email_outbound_sendemailerror)**
    Represents an error that the SendEmailResult object may contain.
-   **[SendEmailResult Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_classes_email_outbound_sendemailresult)**
    Contains the result of sending an email message.
-   **[SingleEmailMessage Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_classes_outbound_single)**
    Contains methods for sending single email messages.

## Related Topics

- AttachmentRetrievalOption Enum (atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_AttachmentRetrievalOptionEnum.htm)
- ActionableNotification Class (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- ActionableNotification.Builder Class (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm)
- ActionError Enum (atlas.en-us.apexref.meta/apexref/apex_enum_Messaging_ActionError.htm)
- ActionResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult.htm)
- ActionResult.Builder Class (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionResult_Builder.htm)
- CustomNotification Class (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- Email Class (Base Email Methods) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm)
- EmailFileAttachment Class (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_attachment.htm)
- InboundEmail Class (atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm)
