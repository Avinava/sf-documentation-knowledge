---
title: "AuthorizedEmailDomain"
domain: tooling-api
topic: authorizedemaildomain
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.742Z
estimatedTokens: 1217
keywords: [AuthorizedEmailDomain, Represents, authorized, domain, email, verification., API, version, 64.0, later., Important, Supported, SOAP, Calls, REST, Special, Access, Rules, Fields, Usage]
---

# AuthorizedEmailDomain

> Represents an authorized domain for email verification. This
      object is available in API version 64.0 and later.

# AuthorizedEmailDomain

Represents an authorized domain for email verification. This object is available in API version 64.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To create or modify authorized email domains, users must have the Email Administration permission.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the record in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated but you can supply your own value if you create the record using the API.Note these important considerations.When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| DomainName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique domain name.Exampleexample.com |
| Id | TypeIDPropertiesCreate, Filter, Group, SortDescriptionThe ID of this authorized email domain. The ID starts with the string 1TB.Example1TB00000000000B |
| IsDomainOwnershipVerified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Salesforce successfully verified ownership of this domain (true) or not (false).The default value is false. |
| IsEmailRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether email verification is required for new users with an email address on this domain (true) or not (false).The default value is false.When IsEmailRequired is false, IsDomainOwnershipVerified is true, and a new user’s email address is on the DomainName, email verification isn’t required for Salesforce to send emails from the user account.Changes to an existing user’s email address require email verification before the user can send email via Salesforce from the new address. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the language of the authorized email domain. The value for this field is the language value of the org. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMaster label for this object. This display value is the internal label that is not translated. |

## Usage

Domain verification is required to bypass email verification for an authorized email domain.

To verify ownership of an authorized email domain, first create an AuthorizedEmailDomain with IsDomainOwnershipVerified set to false.

Then determine the verification code for the authorized email domain. Use the format orgId\=AuthorizedEmailDomainId where orgId is the 15-digit ID for your Salesforce org and AuthorizedEmailDomainId is the authorized email domain Id. You can also find the verification code on the Authorized Email Domains page in Setup.

Add a DNS TXT record for the DomainName with or without \_sfdv. as a prefix that points to a verification code.

Here’s an example of a DNS TXT record for an authorized email domain with a DomainName of example.com and an AuthorizedEmailDomainId of 1TB00000000000B in an org with ID 00D000000000P08.

```

```

Here’s an example of a DNS TXT record for the same domain with the \_sfdv. prefix.

```

```

If a DNS TXT record already exists for DomainName and \_sfdv.DomainName, you can create a second TXT record for one of those names or you can append the verification code to the value list of an existing TXT record. To append a value, separate the values with a semicolon (;).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Changes to DNS can take up to 48 hours to propagate across the internet.

To start the domain verification process after the required DNS TXT record exists, set IsDomainOwnershipVerified to true. If that verification process succeeds, IsDomainOwnershipVerified remains true. Otherwise, an error is returned and IsDomainOwnershipVerified is set to false.

## Code Examples

```
Name                TTL  CLASS  TYPE     VALUE
-------------------------------------------------------------------- 
example.com.        600  IN     TXT      "00D000000000P08=1TB00000000000B”
```

```
Name                TTL  CLASS  TYPE     VALUE
-------------------------------------------------------------------- 
_sfdv.example.com.  600  IN     TXT      "00D000000000P08=1TB00000000000B”
```
