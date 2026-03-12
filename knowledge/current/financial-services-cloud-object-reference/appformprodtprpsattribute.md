---
title: "AppFormProdtPrpsAttribute"
domain: financial-services-cloud-object-reference
topic: appformprodtprpsattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.342Z
estimatedTokens: 642
keywords: [AppFormProdtPrpsAttribute, attributes, Application, Form, Product, Proposal, record, API, version, 62.0, later, Digital, Lending, permission, Calls]
---

# AppFormProdtPrpsAttribute

> Represents the attributes and values of an Application Form Product Proposal
         record. This object is available in API version 62.0 and later. Available with Digital
      Lending permission set.

# AppFormProdtPrpsAttribute

Represents the attributes and values of an Application Form Product Proposal record. This object is available in API version 62.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppFormProductProposalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionApplication form product proposal to which the attribute is associated.This field is a relationship field.Relationship NameAppFormProductProposalRelationship TypeMaster-detailRefers ToApplicationFormProductProposal (the master object) |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe attribute definition id.This field is a relationship field.Relationship NameAttributeDefinitionRefers ToAttributeDefinition |
| AttributeName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the attribute. |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Attribute Picklist Value Id.This field is a relationship field.Relationship NameAttributePicklistValueRefers ToAttributePicklistValue |
| AttributeValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the attribute. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID that unique references the relationship in an external data source. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppFormProdtPrpsAttributeChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- AppFormProdtPrpsAttributeChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
