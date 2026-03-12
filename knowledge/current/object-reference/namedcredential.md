---
title: "NamedCredential"
domain: object-reference
topic: namedcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.071Z
estimatedTokens: 2351
keywords: [NamedCredential, named, credential, URL, callout, endpoint, authentication, definition, simplify, setup, authenticated, callouts, API, version, 33.0]
---

# NamedCredential

> Represents a named credential, which specifies the URL of a callout
			endpoint and its required authentication parameters in one definition. A named
		credential can be specified as an endpoint to simplify the setup of authenticated callouts.
		This object is available in API version 33.0 and later.

# NamedCredential

Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts. This object is available in API version 33.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

All credentials stored within this entity are encrypted under a framework that is consistent with other encryption frameworks on the platform. Salesforce encrypts your credentials by auto-creating org-specific keys. Credentials encrypted using the previous encryption scheme have been migrated to the new framework.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AuthProviderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSalesforce ID of the authentication provider, which defines the service that provides the login process and approves access to the external system.Only users with the “Customize Application” and “Manage AuthProviders” permissions can view this field.This field is a relationship field.This field is only valid for legacy named credentials.This field was first available in API version 39.0, this field is deprecated in API version 56.0.Relationship NameAuthProviderRelationship TypeLookupRefers ToAuthProvider |
| AuthTokenEndpointUrl | TypetextareaPropertiesNillableDescriptionThe URL where SON Web Tokens (JWTs) are exchanged for access tokens.This field is only valid for legacy named credentials.This field was first available in API version 46.0, this field is deprecated in API version 56.0. |
| CalloutOptionsAllowMergeFieldsInBody | TypebooleanPropertiesFilterDescriptionFor Apex callouts, indicates whether the code can use merge fields to populate HTTP request bodies with org data.This field is available in API version 35.0 and later. |
| CalloutOptionsAllowMergeFieldsInHeader | TypebooleanPropertiesFilterDescriptionFor Apex callouts, indicates whether the code can use merge fields to populate HTTP headers with org data.This field is available in API version 35.0 and later. |
| CalloutOptionsGenerateAuthorizationHeader | TypebooleanPropertiesFilterDescriptionIndicates whether Salesforce automatically generates a standard authorization header for each callout to the named credential–defined endpoint.This field is available in API version 35.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Endpoint | TypetextareaPropertiesNillableDescriptionThe root URL of the endpoint.This field is only valid for legacy named credentials.This field is deprecated in API version 56.0. |
| JwtAudience | TypetextareaPropertiesNillableDescriptionExternal service or other allowed recipients for the JSON Web Token. Written as JSON, with a quoted string for a single audience and an array of quoted strings for multiple audiences. Single audience example: “aud1”. Multiple audiences example: [”aud1”, “aud2”, “aud3”].This field is only valid for legacy named credentials.This field was first available in API version 46.0, this field is deprecated in API version 56.0. |
| JwtFormulaSubject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFormula string calculating the JSON Web Token’s subject. API names and constant strings, in single quotes, can be included. Allows a dynamic Subject unique per user requesting the token. For example, 'User='+$User.Id. Use this field when PrincipalType is set to PerUser. Corresponds to Per User Subject in the user interface.This field is only valid for legacy named credentials.This field was first available in API version 46.0, this field is deprecated in API version 56.0. |
| JwtIssuer | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecify who issued the JSON Web Token using a case-sensitive string.This field is only valid for legacy named credentials.This field was first available in API version 46.0, this field is deprecated in API version 56.0. |
| JwtTextSubject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStatic text, without quotes, that specifies the JSON Web Token subject. Use this field when PrincipalType is set to NamedUser. Corresponds to Named Principal Subject in the user interface.This field is only valid for legacy named credentials.This field was first available in API version 46.0, this field is deprecated in API version 56.0. |
| JwtValidityPeriodSeconds | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of seconds that the JSON Web Token is valid.This field is only valid for legacy named credentials.This field was first available in API version 46.0, this field is deprecated in API version 56.0. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MasterLabel. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for the named credential. This display value is the internal label that doesn’t get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
| PrincipalType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionTracks users who are accessing the external system. Anonymous implies that a user identity isn’t specified for external system access. Named Principal uses one user identity for all users to access the external system.This field is only valid for legacy named credentials.This field is deprecated in API version 56.0. |

## Usage

Use the NamedCredential object to query named credentials in your organization.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Some named credential fields rely on per-user authentication to connect with an external system. If an admin edits one of these fields, then the previously authenticated credentials can get invalidated, requiring individual users to reauthenticate.

#### See Also

-   [ExternalDataUserAuth](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatauserauth.htm "Stores authentication settings for a Salesforce user to access an external system. The external system must be defined in an external data source or a named credential that’s configured to use per-user authentication. This object is available in API version 27.0 and later.")

-   [ExternalDataSource](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatasource.htm "Represents an external data source, which defines connection details for integration with data and content that are stored outside the Salesforce org. This object is available in API version 27.0 and later.")

-   [*Salesforce Help*: Named Credentials](https://help.salesforce.com/s/articleView?id=xcloud.named_credentials_about.htm&type=5&language=en_US "Salesforce Help: Named Credentials - HTML (New Window)")

-   [*Named Credentials Developer Guide*: Get Started with Named Credentials](https://developer.salesforce.com/docs/platform/named-credentials/guide/get-started.html "Named Credentials Developer Guide: Get Started with Named
    Credentials - HTML (New Window)")

-   [*Named Credentials Developer Guide*: Named Credential API Links](https://developer.salesforce.com/docs/platform/named-credentials/references/named-credentials-reference/nc-api-links.html "Named Credentials Developer Guide: Named Credential API
    Links - HTML (New Window)")

-   [*Apex Developer Guide*: Invoking Callouts Using Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts.htm "Apex Developer Guide: Invoking Callouts Using
    Apex - html (New Window)")

-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Apex Developer Guide: Named Credentials as Callout
    Endpoints - HTML (New Window)")

## Related Topics

- ExternalDataUserAuth (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatauserauth.htm)
- ExternalDataSource (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_externaldatasource.htm)
