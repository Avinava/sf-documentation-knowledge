---
title: "ExternalDataUserAuth"
domain: object-reference
topic: externaldatauserauth
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:09.917Z
estimatedTokens: 1076
keywords: [ExternalDataUserAuth, Stores, authentication, settings, Salesforce, user, access, external, system, defined, data, source, named, credential, that’s]
---

# ExternalDataUserAuth

> Stores authentication settings for a Salesforce user to access an
			external system. The external system must be defined in an external data source or a
			named credential that’s configured to use per-user authentication. This object is
		available in API version 27.0 and later.

# ExternalDataUserAuth

Stores authentication settings for a Salesforce user to access an external system. The external system must be defined in an external data source or a named credential that’s configured to use per-user authentication. This object is available in API version 27.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

All credentials stored within this entity are encrypted under a framework that is consistent with other encryption frameworks on the platform. Salesforce encrypts your credentials by auto-creating org-specific keys. Credentials encrypted using the previous encryption scheme have been migrated to the new framework.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AuthProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce ID of the authentication provider, which defines the service that provides the login process and approves access to the external system.Only users with the “Customize Application” and “Manage AuthProviders” permissions can view this field.This field is available in API version 39.0 and later.This is a relationship field.Relationship NameAuthProviderRelationship TypeLookupRefers ToAuthProvider |
| ExternalDataSourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSalesforce ID of the external data source or named credential that defines the external system.This is a polymorphic relationship field.Relationship NameExternalDataSourceRelationship TypeLookupRefers ToExternalDataSource, NamedCredential |
| Password | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionPassword portion of the credentials for the Salesforce user to access the external system. |
| Protocol | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether to use OAuth, password authentication, or no authentication when the user accesses the external system.Additional authentication protocols are supported for the Amazon DynamoDB, Amazon Athena, Snowflake, GraphQL, and OData 4.01 external data sources.AwsSv4BasicCustomJwtJwtExchange |
| UserId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Salesforce user who’s accessing the external system.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsername portion of the credentials for the Salesforce user to access the external system. |

## Usage

These authentication settings enable a Salesforce user to access an external system. The external system is defined in Salesforce as one of the following.

-   External data source—Provides access to external objects, whose data is stored outside the Salesforce organization.
-   Named credential—Enables the user’s actions to trigger authenticated callouts to the endpoint that’s specified in the named credential.

If you grant users access to the external data source or named credential via permission sets or profiles, those users can manage their own authentication settings. See [Store Authentication Settings for External Systems](https://help.salesforce.com/s/articleView?id=platform.external_authentication.htm&type=5&language=en_US "HTML (New Window)") in the Salesforce Help.

#### See Also

-   [ExternalDataSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatasource.htm "Represents an external data source, which defines connection details for integration with data and content that are stored outside the Salesforce org. This object is available in API version 27.0 and later.")

-   [NamedCredential](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namedcredential.htm "Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts. This object is available in API version 33.0 and later.")

## Related Topics

- ExternalDataSource (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatasource.htm)
- NamedCredential (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namedcredential.htm)
