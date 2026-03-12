---
title: "ContactPointConsent"
domain: life-sciences-dev-guide
topic: contactpointconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.043Z
estimatedTokens: 259
keywords: [ContactPointConsent, Standard, custom, extend, Contact, Point, Consent, represent, customer's, contacted, via, specific, API, version, 65.0]
---

# ContactPointConsent

> Standard and custom fields extend the standard Contact Point Consent object
         to represent information about a customer's consent to be contacted via a specific contact
         point. This object is available in API version 65.0 and later.

# ContactPointConsent

Standard and custom fields extend the standard Contact Point Consent object to represent information about a customer's consent to be contacted via a specific contact point. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContactPointId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the contact point record through which the customer consents to be contacted.This field is a polymorphic relationship field.Relationship NameContactPointRefers ToContactPointAddress, ContactPointEmail, ContactPointPhone, ContactPointSocial |

#### See Also

-   [*Object Reference for the Salesforce Platform*: ContactPointConsent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointconsent.htm)
