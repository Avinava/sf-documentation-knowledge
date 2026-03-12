---
title: "EmailRoutingAddress"
domain: object-reference
topic: emailroutingaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.407Z
estimatedTokens: 306
keywords: [EmailRoutingAddress, email, address, Email-to-Case, routing, addresses, store, unique, services, provided, Salesforce, configuration, options, emails, received]
---

# EmailRoutingAddress

> An email address used for Email-to-Case. Email routing addresses store a
         unique email services address provided by Salesforce and configuration options for emails
         received by this address.

# EmailRoutingAddress

An email address used for Email-to-Case. Email routing addresses store a unique email services address provided by Salesforce and configuration options for emails received by this address.

## Supported Calls

create(), describeSObjects(), delete(), update(), query(), retrieve(), upsert()

## Special Access Rules

To access this object, Email-to-Case must be enabled. Only admin users can access this object.

## Fields

| Field | Details |
| --- | --- |
| PersonalName | TypestringPropertiesCreate, Filter, Sort, UpdateDescriptionThe display name of the EmailRoutingAddress. Maximum size is 300 characters. |
| Address | TypeemailPropertiesCreate, Filter, Sort, UpdateDescriptionThe email address to which your customers direct their questions. Emails are forwarded from this address. |
| EmailServicesAddress | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique, Salesforce-generated email address. This field value is read-only and can't be modified. Emails are forwarded to this address. |

#### See Also

-   [EmailServicesAddress](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesaddress.htm "An email service address.")

## Related Topics

- EmailServicesAddress (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailservicesaddress.htm)
