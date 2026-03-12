---
title: "Messaging Class"
domain: apex-reference
topic: messaging-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.491Z
estimatedTokens: 5968
namespace: System
keywords: [Messaging, email, service, code, control, how, parse, process, forwarded, attached, emails., instance, Messaging.InboundEmail, stream, data, RFC822, format., attachment, existing, InboundEmail]
---

# Messaging Class

> Use this method in your email service code to control how to parse
      and process forwarded or attached emails. Returns an instance of Messaging.InboundEmail from a stream of data that is in
      RFC822 format. The data stream can be a forwarded email in an attachment to an existing
      InboundEmail, or a stream from another source.

**Namespace:** `System`

# Messaging Class

Contains messaging methods used when sending a single or mass email.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Messaging Methods

The following are methods for Messaging. All are instance methods.

-   **[extractInboundEmail(source, includeForwardedAttachments)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_messaging_extractInboundEmail)**
    Use this method in your email service code to control how to parse and process forwarded or attached emails. Returns an instance of Messaging.InboundEmail from a stream of data that is in RFC822 format. The data stream can be a forwarded email in an attachment to an existing InboundEmail, or a stream from another source.
-   **[reserveMassEmailCapacity(amountReserved)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_Messaging_reserveMassEmailCapacity)**
    Reserves email capacity to send mass email to the specified number of email addresses, after the current transaction commits.
-   **[reserveSingleEmailCapacity(amountReserved)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_Messaging_reserveSingleEmailCapacity)**
    Reserves email capacity to send single email to the specified number of email addresses, after the current transaction commits.
-   **[sendEmail(emails, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_Messaging_sendEmail)**
    Sends the list of emails instantiated with either SingleEmailMessage or MassEmailMessage and returns a list of SendEmailResult objects. When org preferences are set to save EmailMessage objects and a trigger is defined for EmailMessage objects, the trigger is fired for each SingleEmailMessage individually. The sendEmail method can be called 10 times per Apex transaction and each method invocation can include up to 100 "To", 25 "Cc", and 25 "Bcc" recipients.
-   **[sendEmailMessage(emailMessageIds, allOrNothing)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_Messaging_sendEmailMessage)**
    Sends draft email messages as defined by the specified email message IDs and returns a list of SendEmailResult objects.
-   **[renderEmailTemplate(whoId, whatId, bodies)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_messaging_renderEmailTemplate)**
    Replaces merge fields in text bodies of email templates with values from Salesforce records. Returns an array of RenderEmailTemplateBodyResult objects, each of which corresponds to an element in the supplied array of text bodies. Each RenderEmailTemplateBodyResult provides a success or failure indication, along with either an error code or the rendered text.
-   **[renderStoredEmailTemplate(templateId, whoId, whatId)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_messaging_renderStoredEmailTemplate)**
    Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Includes all attachment content in the returned email message.
-   **[renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_messaging_renderStoredEmailTemplate_2)**
    Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.
-   **[renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption, updateEmailTemplateUsage)](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_System_messaging_renderStoredEmailTemplate_3)**
    Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.

### extractInboundEmail(source, includeForwardedAttachments)

Use this method in your email service code to control how to parse and process forwarded or attached emails. Returns an instance of Messaging.InboundEmail from a stream of data that is in RFC822 format. The data stream can be a forwarded email in an attachment to an existing InboundEmail, or a stream from another source.

#### Signature

public static Messaging.InboundEmail extractInboundEmail(Object source, Boolean includeForwardedAttachments)

#### Parameters

source

Type: Object

An instance of Messaging.InboundEmail.BinaryAttachment whose MimeTypeSubtype is message/rfc822 or a Blob. If source is a Blob, then supply a byte array in RFC822 format.

includeForwardedAttachments

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

This parameter controls how attachments to embedded or forwarded emails are handled. Set to true to provide all attachments, even attachments in embedded emails in the binaryAttachments and textAttachments properties of the returned value. Set to false to provide only the attachments that are at the top level of the source email.

#### Return Value

Type: [Messaging.InboundEmail](atlas.en-us.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm#apex_classes_email_inbound_inbound "Represents an inbound email object.")

### reserveMassEmailCapacity(amountReserved)

Reserves email capacity to send mass email to the specified number of email addresses, after the current transaction commits.

#### Signature

public Void reserveMassEmailCapacity(Integer amountReserved)

#### Parameters

amountReserved

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

#### Usage

This method can be called when you know in advance how many addresses emails will be sent to as a result of the transaction. If the transaction would cause the organization to exceed its daily email limit, using this method results in the following error: System.HandledException: The daily limit for the org would be exceeded by this request.If the organization doesn’t have permission to send API or mass email, using this method results in the following error: System.NoAccessException: The organization is not permitted to send email.

### reserveSingleEmailCapacity(amountReserved)

Reserves email capacity to send single email to the specified number of email addresses, after the current transaction commits.

#### Signature

public Void reserveSingleEmailCapacity(Integer amountReserved)

#### Parameters

amountReserved

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

#### Usage

This method can be called when you know in advance how many addresses emails will be sent to as a result of the transaction. If the transaction would cause the organization to exceed its daily email limit, using this method results in the following error: System.HandledException: The daily limit for the org would be exceeded by this request.If the organization doesn’t have permission to send API or mass email, using this method results in the following error: System.NoAccessException: The organization is not permitted to send email.

### sendEmail(emails, allOrNothing)

Sends the list of emails instantiated with either SingleEmailMessage or MassEmailMessage and returns a list of SendEmailResult objects. When org preferences are set to save EmailMessage objects and a trigger is defined for EmailMessage objects, the trigger is fired for each SingleEmailMessage individually. The sendEmail method can be called 10 times per Apex transaction and each method invocation can include up to 100 "To", 25 "Cc", and 25 "Bcc" recipients.

#### Signature

public Messaging.SendEmailResult\[\] sendEmail(Messaging.Email\[\] emails, Boolean allOrNothing)

#### Parameters

emails

Type: [Messaging.Email](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_base.htm#apex_classes_email_outbound_base "Contains base email methods common to both single and mass email.")\[\]

allOrNothing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The optional opt\_allOrNone parameter specifies whether sendEmail prevents delivery of all other messages when any of the messages fail due to an error (true), or whether it allows delivery of the messages that don't have errors (false). The default is true.

#### Return Value

Type: [Messaging.SendEmailResult](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_classes_email_outbound_sendemailresult "Contains the result of sending an email message.")\[\]

### sendEmailMessage(emailMessageIds, allOrNothing)

Sends draft email messages as defined by the specified email message IDs and returns a list of SendEmailResult objects.

#### Signature

public Messaging.SendEmailResult\[\] sendEmailMessage(List<ID\> emailMessageIds, Boolean allOrNothing)

#### Parameters

emailMessageIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

allOrNothing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [Messaging.SendEmailResult](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_sendemailresult.htm#apex_classes_email_outbound_sendemailresult "Contains the result of sending an email message.")\[\]

If the emailMessageIds parameter is null, the method throws a System.IllegalArgumentException exception.

#### Usage

The sendEmailMessage method assumes that the optional allOrNothing parameter is always false and ignores the value you set. Delivery of all messages is attempted even if some messages fail due to an error.

The email address of the user calling the sendEmailMessage method is inserted in the From Address field of the email header and the Email Message record.

#### Example

This example shows how to send a draft email message. It creates a case and a new email message associated with the case. Next, the example sends a draft email message and checks the results. Before running this example, make sure to replace the email address with a valid address.

```

```

#### Versioned Behavior Changes

In API version 54.0 and later, a null emailMessageIds parameter results in a System.IllegalArgumentException exception. In API version 53.0 and earlier, a null emailMessageIds parameter results in an error.

### renderEmailTemplate(whoId, whatId, bodies)

Replaces merge fields in text bodies of email templates with values from Salesforce records. Returns an array of RenderEmailTemplateBodyResult objects, each of which corresponds to an element in the supplied array of text bodies. Each RenderEmailTemplateBodyResult provides a success or failure indication, along with either an error code or the rendered text.

#### Signature

public static List<Messaging.RenderEmailTemplateBodyResult> renderEmailTemplate(String whoId, String whatId, List<String\> bodies)

#### Parameters

whoId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The identifier of an object in the database, typically a contact, lead, or user. The database record for that object is read and used in merge field processing.

whatId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies an object in the database like an account or opportunity. The record for that object is read and used in merge field processing.

bodies

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

An array of strings that are examined for merge field references. The corresponding data from the object referenced by the whoId or whatId replaces the merge field reference.

#### Return Value

Type: List<Messaging.RenderEmailTemplateBodyResult>

#### Usage

Use this method in situations in which you want to dynamically compose blocks of text that are enriched with data from the database. You can then use the the rendered blocks of text to compose and send an email or update a text value in another database record.

Executing the renderEmailTemplate method counts toward the SOQL governor limit. The number of SOQL queries that this method consumes is the number of elements in the list of strings passed in the bodies parameter.

#### See Also

-   [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "Execution Governors and Limits - HTML (New Window)")


### renderStoredEmailTemplate(templateId, whoId, whatId)

Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Includes all attachment content in the returned email message.

#### Signature

public static Messaging.SingleEmailMessage renderStoredEmailTemplate(String templateId, String whoId, String whatId)

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

#### Return Value

Type: [Messaging.SingleEmailMessage](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_classes_outbound_single "Contains methods for sending single email messages.")

#### Usage

Executing the renderStoredEmailTemplate method counts toward the SOQL governor limit as one query.

#### See Also

-   [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "Execution Governors and Limits - HTML (New Window)")


### renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption)

Renders a text, custom, HTML, or Visualforce email template that exists in the database into an instance of Messaging.SingleEmailMessage. Provides options for including attachment metadata only, attachment metadata and content, or excluding attachments.

#### Signature

public static Messaging.SingleEmailMessage renderStoredEmailTemplate(String templateId, String whoId, String whatId, Messaging.AttachmentRetrievalOption attachmentRetrievalOption)

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

#### Return Value

Type: [Messaging.SingleEmailMessage](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_single.htm#apex_classes_outbound_single "Contains methods for sending single email messages.")

#### Usage

Executing the renderStoredEmailTemplate method counts toward the SOQL governor limit as one query.

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

## Code Examples

```apex
Case c = new Case();
insert c;

EmailMessage e = new EmailMessage();
e.parentid = c.id;
// Set to draft status.
// This status is required 
// for sendEmailMessage().
e.Status = '5'; 
e.TextBody = 
  'Sample email message.';
e.Subject = 'Apex sample';
e.ToAddress = 'customer@email.com';
insert e;

List<Messaging.SendEmailResult> 
  results = 
  Messaging.sendEmailMessage(new ID[] 
    { e.id });

System.assertEquals(1, results.size());
System.assertEquals(true, 
                    results[0].success);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- extractInboundEmail(source, includeForwardedAttachments) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- reserveMassEmailCapacity(amountReserved) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- reserveSingleEmailCapacity(amountReserved) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- sendEmail(emails, allOrNothing) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- sendEmailMessage(emailMessageIds, allOrNothing) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- renderEmailTemplate(whoId, whatId, bodies) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- renderStoredEmailTemplate(templateId, whoId, whatId) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
- renderStoredEmailTemplate(templateId, whoId, whatId, attachmentRetrievalOption, updateEmailTemplateUsage) (atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm)
