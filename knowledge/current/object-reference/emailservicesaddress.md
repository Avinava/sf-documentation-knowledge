---
title: "EmailServicesAddress"
domain: object-reference
topic: emailservicesaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.414Z
estimatedTokens: 1012
keywords: [EmailServicesAddress, email, service, address, Calls, Special, Access, Rules, Usage]
---

# EmailServicesAddress

> An email service address.

# EmailServicesAddress

An email service address.

Each email service has one or more email addresses to which users can send messages for processing. An email service only processes messages it receives at one of its addresses.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| AuthorizedSenders | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionConfigures the email service address to only accept messages from the email addresses or domains listed in this field. If the email service address receives a message from an unlisted email address or domain, the email service performs the action specified in the AuthorizationFailureAction field of its associated email service. Leave this field blank if you want the email service address to receive email from any email address. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe name of the object in the API. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This 25-character field must be unique among other EmailServicesAddress records under the same EmailServiceFunction parent.In managed packages, this field prevents naming conflicts on package installations. This field is automatically generated, but you can supply your own value if you create the record using the API. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance might be slow while Salesforce generates one for each record. |
| EmailDomainName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA read only field you can query that contains the system-generated domain part of this email service address. The system generates a unique domain-part for each email service address to ensure that no two email service addresses are identical. |
| FunctionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the email service for which the email service address receives messages.This is a relationship field.Relationship NameFunctionRelationship TypeLookupRefers ToEmailServicesFunction |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this object is active (true) or not (false). |
| LocalPart | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe local-part of the email service address. The local-part of the address is the string that comes before the @ symbol.For the local-part of a Salesforce email address, all alphanumeric characters are valid, plus the following special characters:! # $ % & amp; ' * / = ? ^ _ + - ` { \| } ~ ,The dot character (.) is also valid as long as it's not the first or last character.Email addresses aren’t case-sensitive. |
| RunAsUserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe username of the user whose permissions the email service assumes when processing messages sent to this address. |

## Usage

This object supports the email services feature, which allows you to create automated processes that use Apex classes to process the contents, headers, and attachments of inbound email. For example, you can create an email service that automatically creates contact records based on contact information in messages.

#### See Also

-   [EmailServicesFunction](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesfunction.htm "An email service.")

## Related Topics

- EmailServicesFunction (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesfunction.htm)
