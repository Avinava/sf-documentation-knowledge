---
title: "OrgDomainLog"
domain: tooling-api
topic: orgdomainlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.282Z
estimatedTokens: 616
keywords: [OrgDomainLog, Salesforce, org’s, previous, Domain, API, version, 51.0, later, SOAP, Calls, REST, Usage]
---

# OrgDomainLog

> Represents a Salesforce org’s previous My Domain. This object is available
    in API version 51.0 and later.

# OrgDomainLog

Represents a Salesforce org’s previous My Domain. This object is available in API version 51.0 and later.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, Query

## Fields

| Field | Details |
| --- | --- |
| DomainPartition | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe partition for this org. When none, partitioned domains aren’t enabled. Otherwise, My Domain hostnames include the partition value. For example, the format of a My Domain login hostname for a Developer Edition org with partitioned domains is MyDomainName.develop.my.salesforce.com.Possible values are:demo—Used in demo orgs. Available in API version 60.0 and later.develop—Used in Developer Edition orgs. Also used in patch orgs where partitioned domains were deployed before Winter ’24.free—Reserved for internal use.none—Indicates that this org doesn’t use partitioned domains.patch—Used in patch orgs. Available in API version 59.0 and later.sandbox—Used in sandboxes with enhanced domains. These orgs are always partitioned.scratch—Used in scratch orgs.sfdctest—Reserved for internal use.trailblaze—Used in Trailblazer Playgrounds.Available in API version 55.0 and later. |
| MyDomainName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA previous My Domain name for the Salesforce org. |
| ProdSuffixType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA previous Salesforce domain suffix, which is appended to the My Domain name.Possible values are:CloudforceLimited—cloudforce.comDatabaseLimited—database.comMySalesforce—my.salesforce.com with enhanced domainsMySalesforceLimited—my.salesforce.com without enhanced domainsOrgLevelCertificateLimited—legacy version of my-salesforce.com that’s noncompliant with browser settings that block third-party cookiesOrgLevelCertificate—my-salesforce.comRestricted1—Reserved for future use.Restricted2—Reserved for future use. |

## Usage

To check for previous My Domain values for your org, first perform a GET request.

```

```

If that query returns a size of 1 or greater, previous My Domain values exist for the org. Each record represents a previous My Domain.

To use a GET request for the My Domain name and suffix, use this syntax with a OrgDomainLog record ID.

```

```

The following is an example response for a GET request querying a OrgDomainLog record ID.

```

```

## Code Examples

```
GET /services/data/v51.0/tooling/query?q=SELECT Id FROM OrgDomainLog
```

```
GET /services/data/v51.0/tooling/sobjects/MyDomainLog/recordID
```

```
{
  "attributes" : {
    "type" : "OrgDomainLog",
    "url" : "/services/data/v56.0/tooling/sobjects/OrgDomainLog/9UXXXXXXXXXXXXXOAA"
  },
  "Id" : "9UXXXXXXXXXXXXXOAA",
  "IsDeleted" : false,
  "CreatedDate" : "2022-10-02T21:04:38.000+0000",
  "CreatedById" : "005XXXXXXXXXXXXIAG",
  "LastModifiedDate" : "2022-10-02T21:04:38.000+0000",
  "LastModifiedById" : "005XXXXXXXXXXXXIAG",
  "SystemModstamp" : "2022-10-02T21:04:38.000+0000",
  "DomainPartition" : "none",
  "MyDomainName" : "mycompany",
  "ProdSuffixType" : "MySalesforceLimited"
}
```
