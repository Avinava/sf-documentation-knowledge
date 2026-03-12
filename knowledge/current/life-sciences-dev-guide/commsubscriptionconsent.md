---
title: "CommSubscriptionConsent"
domain: life-sciences-dev-guide
topic: commsubscriptionconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.029Z
estimatedTokens: 438
keywords: [CommSubscriptionConsent, Standard, custom, extend, Communication, Subscription, Consent, represent, customer’s, API, version, 65.0, later, Calls]
---

# CommSubscriptionConsent

> Standard and custom fields extend the standard Communication
         Subscription Consent object to represent a customer’s consent to a communication
         subscription. This object is available in API version 65.0 and later.

# CommSubscriptionConsent

Standard and custom fields extend the standard Communication Subscription Consent object to represent a customer’s consent to a communication subscription. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommSubConsentCmplSnpshtId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the communication subscription consent compliance snapshot record associated with the communication subscription consent.This field is a relationship field.Relationship NameCommSubConsentCmplSnpshtRefers ToCommSubConsentCmplSnpsht |
| ContactPointId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the contact point, such as an Individual or person account, associated with the communication subscription consent.This field is a polymorphic relationship field.Relationship NameContactPointRefers ToContactPointAddress, ContactPointEmail, ContactPointPhone, ContactPointSocial |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: CommSubscriptionConsent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_commsubscriptionconsent.htm)
