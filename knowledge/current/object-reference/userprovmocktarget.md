---
title: "UserProvMockTarget"
domain: object-reference
topic: userprovmocktarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.984Z
estimatedTokens: 496
keywords: [UserProvMockTarget, entity, testing, user, data, committing, third-party, system, provisioning, Calls]
---

# UserProvMockTarget

> Represents an entity for testing user data before committing the
			data to a third-party system for user provisioning.

# UserProvMockTarget

Represents an entity for testing user data before committing the data to a third-party system for user provisioning.

During the user provisioning process, user account information is sent to a third-party system to create, update or delete a user account on that system. While configuring user provisioning for your organization using a flow or Apex action, you can use this object to confirm the associated flow or Apex code is sending the desired data. After confirming the correct fields and values, you can update the flow or Apex action to send the data to the target system.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ExternalEmail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address as stored in the target system for the associated user account. |
| ExternalFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name as stored in the target system for the associated user account. |
| ExternalLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name as stored in the target system for the associated user account. |
| ExternalUserId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier for the user as stored in the target system. |
| ExternalUsername | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe username as stored in the target system for the associated user account. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique name for this object. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user ID of the owner of this object—typically a Salesforce administrator. |
