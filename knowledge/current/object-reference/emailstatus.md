---
title: "EmailStatus"
domain: object-reference
topic: emailstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.437Z
estimatedTokens: 392
keywords: [EmailStatus, status, email, sent, Calls, Special, Access, Rules]
---

# EmailStatus

> Represents the status of email sent.

# EmailStatus

Represents the status of email sent.

## Supported Calls

describeSObjects()

## Special Access Rules

Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| EmailTemplateName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the EmailTemplate. |
| FirstOpenDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the email was first opened by recipient. Label is Date Opened. |
| LastOpenDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the email was last opened by recipient. |
| TaskId | TypereferencePropertiesFilter, Group, SortDescriptionThe activity (task or event) associated with the email. Label is Activity ID.This is a relationship field.Relationship NameTaskRelationship TypeLookupRefers ToTask |
| TimesOpened | TypeintPropertiesFilter, Group, SortDescriptionNumber of times the recipient opened the email. |
| WhoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe WhoId represents a human such as a lead or a contact. WhoIds are polymorphic. Polymorphic means a WhoId is equivalent to a contact’s ID or a lead’s ID. The label is Name ID.This is a polymorphic relationship field.Relationship NameWhoRelationship TypeLookupRefers ToContact, Lead |

#### See Also

-   [EmailTemplate](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailtemplate.htm "Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.")

## Related Topics

- EmailTemplate (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailtemplate.htm)
