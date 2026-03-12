---
title: "$Organization"
domain: pages
topic: organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.418Z
estimatedTokens: 193
keywords: [$Organization, merge, referencing, company, profile, organization, organization’s, city, fax, Usage]
---

# $Organization

> A global merge field type to use when referencing information about your company
  profile. Use organization merge fields to reference your organization’s city, fax, ID, or
  other details.

# $Organization

A global merge field type to use when referencing information about your company profile. Use organization merge fields to reference your organization’s city, fax, ID, or other details.

## Usage

Use dot notation to access your organization’s information. For example:

```

```

The organization merge fields get their values from whatever values are currently stored as part of your company information in Salesforce.

Note that {!$Organization.UiSkin} is a picklist value, and so should be used with picklist functions such as ISPICKVAL() in custom fields, validation rules, Visualforce expressions, flow formulas, process formulas, and workflow rule formulas.

## Example

Values accessible using the $Organization global variable include:

```

```

## Code Examples

```
{!$Organization.Street}
{!$Organization.State}
```

```
{!$Organization.Id}
{!$Organization.Name}
{!$Organization.Division}
{!$Organization.Street}
{!$Organization.City}
{!$Organization.State}
{!$Organization.PostalCode}
{!$Organization.Country}
{!$Organization.Fax}
{!$Organization.Phone}
{!$Organization.GoogleAppsDomain}
{!$Organization.UiSkin}
```
