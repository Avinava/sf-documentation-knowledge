---
title: "EmailServicesFunction"
domain: object-reference
topic: emailservicesfunction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.430Z
estimatedTokens: 2743
keywords: [EmailServicesFunction, email, service, Calls, Special, Access, Rules, Usage]
---

# EmailServicesFunction

> An email service.

# EmailServicesFunction

An email service.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| AddressInactiveAction | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates what the email service does with messages received at an email address that is inactive.One of the following values:UseSystemDefault—The system default is used. (In API version 41.0 and earlier, the value specified for this choice is 0.)Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 1.)Discard—The email service deletes the message without notifying the sender. (In API version 41.0 and earlier, the value specified for this choice is 2.)Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 3.) |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The ID of the Apex class that the email service uses to process inbound messages.This field is required for API version 12.0 and later. |
| AttachmentOption | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the types of attachments the email service accepts. One of the following values:None—The email service accepts the message but discards any attachment. (In API version 41.0 and earlier, the value specified for this choice is 0.)NoContent—The attachment metadata (filename, MIME type, and so on) is provided to the Apex class, but the body is set to null. There was no previous numeric value for this choice.TextOnly—The email service only accepts the following types of attachments:Attachments with a Multipurpose Internet Mail Extension (MIME) type of text.Attachments with a MIME type of application/octet-stream and a file name that ends with either a .vcf or .vcs extension. These are saved as text/x-vcard and text/calendar MIME types, respectively.(In API version 41.0 and earlier, the value specified for this choice is 1.)BinaryOnly—The email service only accepts binary attachments, such as image, audio, application, and video files. (In API version 41.0 and earlier, the value specified for this choice is 2.)All—The email service accepts any type of attachment. (In API version 41.0 and earlier, the value specified for this choice is 3.) |
| AuthenticationFailureAction | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates what the email service does with messages that fail or do not support any of the authentication protocols if the IsAuthenticationRequired field is true.One of the following values:UseSystemDefault—The system default is used. (In API version 41.0 and earlier, the value specified for this choice is 0.)Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 1.)Discard—The email service deletes the message without notifying the sender. (In API version 41.0 and earlier, the value specified for this choice is 2.)Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 3.) |
| AuthorizationFailureAction | TypepicklistPropertiesDefaulted on create, Group, Sort, Create, Filter, Nillable, Restricted picklist, UpdateDescriptionIndicates what the email service does with messages received from senders who are not listed in the AuthorizedSenders field on either the email service or email service address.One of the following values:UseSystemDefault—The system default is used. (In API version 41.0 and earlier, the value specified for this choice is 0.)Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 1.)Discard—The email service deletes the message without notifying the sender. (In API version 41.0 and earlier, the value specified for this choice is 2.)Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 3.) |
| AuthorizedSenders | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionConfigures the email service to only accept messages from the email addresses or domains listed in this field. If the email service receives a message from an unlisted email address or domain, the email service performs the action specified in the AuthorizationFailureAction field. Leave this field blank if you want the email service to receive email from any email address. |
| ErrorRoutingAddress | TypeemailPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe destination email address for error notification email messages when IsErrorRoutingEnabled is true. |
| FunctionInactiveAction | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates what the email service does with messages it receives when the email service itself is inactive.One of the following values:UseSystemDefault—The system default is used. (In API version 41.0 and earlier, the value specified for this choice is 0.)Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 1.)Discard—The email service deletes the message without notifying the sender. (In API version 41.0 and earlier, the value specified for this choice is 2.)Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 3.) |
| FunctionName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the email service. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this object is active (true) or not (false). |
| IsAuthenticationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionConfigures the email service to verify the legitimacy of the sending server before processing a message. The email service uses the SPF, SenderId, and DomainKeys protocols to verify the sender's legitimacy: If the sending server passes at least one of these protocols and does not fail any, the email service accepts the email. If the server fails a protocol or does not support any of the protocols, the email service performs the action specified in the AuthenticationFailureAction field. |
| IsErrorRoutingEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen incoming email messages can’t be processed, indicates whether error notification email messages are routed to a chosen address or to the senders. |
| IsTextAttachmentsAsBinary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, text attachments are supplied to the Apex code as a Messaging.BinaryAttachment instead of as a Messaging.TextAttachment. This means that the body is supplied as an Apex Blob instead of as an Apex String. |
| IsTextTruncated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is deprecated. It is not available as of API version 23.0 and is deprecated and hidden in versions 17.0 through 22.0. In all API versions, the email service now accepts inbound email messages up to the 10 MB size limit, without truncating the text. Previously, it indicated whether the email service truncated and accepted email messages with HTML body text, plain body text, and text attachments over approximately 100,000 characters (true) or rejected these email messages and notified the sender (false). |
| IsTlsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNot currently in use. |
| OverLimitAction | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates what the email service does with messages if the total number of messages processed by all email services combined has reached the daily limit for your organization.One of the following values:UseSystemDefault—The system default is used. (In API version 41.0 and earlier, the value specified for this choice is 0.)Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 1.)Discard—The email service deletes the message without notifying the sender. (In API version 41.0 and earlier, the value specified for this choice is 2.)Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. (In API version 41.0 and earlier, the value specified for this choice is 3.)The system calculates the limit by multiplying the number of user licenses by 1,000. |

## Usage

This object supports the email services feature, which allows you to create automated processes that use Apex classes to process the contents, headers, and attachments of inbound email. For example, you can create an email service that automatically creates contact records based on contact information in messages.

#### See Also

-   [EmailServicesAddress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesaddress.htm "An email service address.")

## Related Topics

- EmailServicesAddress (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesaddress.htm)
