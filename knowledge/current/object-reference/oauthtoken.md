---
title: "OauthToken"
domain: object-reference
topic: oauthtoken
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.313Z
estimatedTokens: 1017
keywords: [OauthToken, OAuth, access, token, connected, app, authentication, user, management, API, version, 32.0, later, Calls, Special]
---

# OauthToken

> Represents an OAuth access token for connected app authentication. Use
			this object to create a user interface for token management. This object is
		available in API version 32.0 and later.

# OauthToken

Represents an OAuth access token for connected app authentication. Use this object to create a user interface for token management. This object is available in API version 32.0 and later.

A connected app integrates an application with Salesforce using APIs. Connected apps use standard SAML and OAuth protocols to authenticate, provide single sign-on, and provide tokens for use with Salesforce APIs. In addition to standard OAuth capabilities, connected apps allow Salesforce admins to set various security policies and have explicit control over who can use the corresponding apps. Each time that a user grants access to an application, the application obtains a new access token.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Users with the Customize Application permission see all tokens for all users in the org. Otherwise, you see only your own tokens.

If you try to use [Apex DML operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_dml_section.htm) and then query this object in the same call, you get an UncommittedWork error with this description.

```

```

To avoid this error, execute DML operations and queries in separate, asynchronous calls.

## Fields

| Field Name | Details |
| --- | --- |
| AccessToken | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe refresh token for authorization. |
| AppMenuItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique ID for the App Picker menu item that’s associated with this OAuth token.This is a relationship field.Relationship NameAppMenuItemRelationship TypeLookupRefers ToAppMenuItem |
| AppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the connected app that’s associated with this OAuth token. |
| DeleteToken | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA token that can be used at the revoke OAuth token endpoint to remove this token. |
| Id | TypeIDPropertiesDefaulted on create, Filter, Group, idLookup, SortDescriptionReserved for future use. Currently, the value is always null. |
| LastUsedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when the OAuth token was used. |
| RequestToken | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe authorization code that was used to request the corresponding AccessToken. With this authorization code, you can revoke the corresponding AccessToken by passing the DeleteToken. |
| UseCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionHow often the token has been used. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe owner of the token.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Usage

To delete an AccessToken, send a request to the revoke OAuth token endpoint with the DeleteToken as the parameter. For example, the URL https://MyDomainName.my.salesforce.com/services/oauth2/revoke?token=(the Delete Token) causes the deletion of the token.

In API version 34.0 and later, this object was enhanced to help manage high instance counts. A query() call returns up to 500 rows. A queryMore() call returns 500 more, up to 2500 total. No more records are returned after 2500. To make sure that you don’t miss any records, issue a COUNT() query in a SELECT clause for OauthToken. This query gives you the total number of records. If there are more than 2500 records, use these options to manage your results.

-   Divide queries by filtering on fields like UserId to return subsets of less than 2500 records.
-   Use OFFSET to get batches of 2500 records. Start with an OFFSET of 0 and then increment by 2500. If you use this option, we recommend that you also use LIMIT to limit each query to 2500.

    For example, use an initial query with this structure.

    ```

    ```

    Then, run another query with an offset of 2500.

    ```

    ```

    Continue to increase the offset by 2500 until you have results for all records.

## Code Examples

```
A callout was unsuccessful because of pending uncommitted work related to a process, flow, or Apex operation.
Commit or roll back the work, and then try again.
```

```
SELECT <desired fields> FROM OauthToken LIMIT 2500 OFFSET 0
```

```
SELECT <desired fields> FROM OauthToken LIMIT 2500 OFFSET 2500
```
