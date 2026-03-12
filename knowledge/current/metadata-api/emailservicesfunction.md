---
title: "EmailServicesFunction"
domain: metadata-api
topic: emailservicesfunction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.804Z
estimatedTokens: 2573
keywords: [EmailServicesFunction, email, service, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, EmailServicesAddress, Wildcard, Support]
---

# EmailServicesFunction

> Represents an email service.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# EmailServicesFunction

Represents an email service. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EmailServicesFunction components have the suffix .xml and are stored in the emailservices folder.

## Version

EmailServicesFunction components are available in API version 42.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| apexClass | string | Required. The name of the Apex class that the email service uses to process inbound messages. |
| attachmentOption | EmailServicesAttOptions (enumeration of type string) | Required. Indicates the types of attachments the email service accepts. One of the following values:None—The email service accepts the message but discards any attachment.NoContent—The attachment metadata (filename, MIME type, and so on) is provided to the Apex class, but the body is set to null.TextOnly—The email service only accepts the following types of attachments:Attachments with a Multipurpose Internet Mail Extension (MIME) type of text.Attachments with a MIME type of application/octet-stream and a file name that ends with either a .vcf or .vcs extension. These are saved as text/x-vcard and text/calendar MIME types, respectively.BinaryOnly—The email service only accepts binary attachments, such as image, audio, application, and video files.All—The email service accepts any type of attachment. |
| authenticationFailureAction | EmailServicesErrorAction (enumeration of type string) | Required. Indicates what the email service does with messages that fail or do not support any of the authentication protocols if the isAuthenticationRequired field is true.One of the following values:UseSystemDefault—The system default is used.Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected.Discard—The email service deletes the message without notifying the sender.Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. |
| authorizationFailureAction | EmailServicesErrorAction (enumeration of type string) | Required. Indicates what the email service does with messages received from senders who are not listed in the authorizedSenders field on either the email service or email service address.One of the following values:UseSystemDefault—The system default is used.Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected.Discard—The email service deletes the message without notifying the sender.Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. |
| authorizedSenders | string | Configures the email service to only accept messages from the email addresses or domains listed in this field. If the email service receives a message from an unlisted email address or domain, the email service performs the action specified in the authorizationFailureAction field. Leave this field blank if you want the email service to receive email from any email address. |
| emailServicesAddresses | EmailServicesAddress[] | A list of EmailServiceAddress records. |
| errorRoutingAddress | email | The destination email address for error notification email messages when isErrorRoutingEnabled is true. |
| functionInactiveAction | EmailServicesErrorAction (enumeration of type string) | Required. Indicates what the email service does with messages it receives when the email service itself is inactive.One of the following values:UseSystemDefault—The system default is used.Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected.Discard—The email service deletes the message without notifying the sender.Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected. |
| functionName | string | Required. The name of the email service in the API. This name can contain only underscores and alphanumeric characters and must be unique in your org. The value in this 64-character field must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.In managed packages, this field prevents naming conflicts on package installations. This field is automatically generated, but you can supply your own value if you create the record using the API. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique functionName for each record. If no functionName is specified, performance may slow while Salesforce generates one for each record. |
| isActive | boolean | Indicates whether this object is active (true) or not (false). |
| isAuthenticationRequired | boolean | Configures the email service to verify the legitimacy of the sending server before processing a message. The email service uses the SPF, SenderId, and DomainKeys protocols to verify the sender's legitimacy: If the sending server passes at least one of these protocols and does not fail any, the email service accepts the email. If the server fails a protocol or does not support any of the protocols, the email service performs the action specified in the authenticationFailureAction field. |
| isErrorRoutingEnabled | boolean | When incoming email messages can’t be processed, indicates whether error notification email messages are routed to a chosen address or to the senders. |
| isTextAttachmentsAsBinary | boolean | If true, text attachments are supplied to the Apex code as a Messaging.BinaryAttachment instead of as a Messaging.TextAttachment. This means that the body is supplied as an Apex Blob instead of as an Apex String. |
| isTlsRequired | boolean | Not currently in use. |
| overLimitAction | EmailServicesErrorAction (enumeration of type string) | Required. Indicates what the email service does with messages if the total number of messages processed by all email services combined has reached the daily limit for your organization.One of the following values:UseSystemDefault—The system default is used.Bounce—The email service returns the message to the sender with a notification that explains why the message was rejected.Discard—The email service deletes the message without notifying the sender.Requeue—The email service queues the message for processing in the next 24 hours. If the message is not processed within 24 hours, the email service returns the message to the sender with a notification that explains why the message was rejected.The system calculates the limit by multiplying the number of user licenses by 1,000. |

## EmailServicesAddress

Each email service has one or more email addresses to which users can send messages for processing. An email service only processes messages it receives at one of its addresses.

| Field Name | Field Type | Description |
| --- | --- | --- |
| authorizedSenders | string | Configures the email service address to only accept messages from the email addresses or domains listed in this field. If the email service address receives a message from an unlisted email address or domain, the email service performs the action specified in the authorizationFailureAction field of its associated email service. Leave this field blank if you want the email service address to receive email from any email address. |
| developerName | string | Required. The name of the object in the API. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This 25-character field must be unique among other EmailServicesAddress records under the same EmailServiceFunction parent.In managed packages, this field prevents naming conflicts on package installations. This field is automatically generated, but you can supply your own value if you create the record using the API. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique developerName for each record. If no developerName is specified, performance might be slow while Salesforce generates one for each record. |
| isActive | boolean | Indicates whether this object is active (true) or not (false). |
| localPart | string | Required. The local-part of the email service address, which is the string that comes before the @ symbol. For the local-part of a Salesforce email address, all alphanumeric characters are valid, plus the following special characters:! # $ % & amp; ' * / = ? ^ _ + - ` { \| } ~ ,The dot character (.) is also valid as long as it's not the first or last character. Email addresses aren’t case sensitive. |
| runAsUser | string | Required. The username of the user whose permissions the email service assumes when processing messages sent to this address. |

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
