---
title: "getSitesSubdomainName()"
domain: apex-reference
topic: getsitessubdomainname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.351Z
keywords: [getSitesSubdomainName, system-managed, Experience, Cloud, site, domain, Salesforce, Site, returns, sites, subdomain, name., enhanced, domains, enabled, method, always, null., org’s, Domain]
---

# getSitesSubdomainName()

> For a system-managed Experience Cloud site domain or Salesforce Site
      domain, returns the sites subdomain name. If enhanced domains are enabled, this method always returns null. When enhanced domains are enabled, the org’s My Domain name
      is the subdomain for the system-managed domains for Experience Cloud sites and Salesforce
      Sites domains.

### getSitesSubdomainName()

For a system-managed Experience Cloud site domain or Salesforce Site domain, returns the sites subdomain name. If [enhanced domains](https://help.salesforce.com/s/articleView?id=domain_name_enhanced.htm&language=en_US) are enabled, this method always returns null. When enhanced domains are enabled, the org’s My Domain name is the subdomain for the system-managed domains for Experience Cloud sites and Salesforce Sites domains.

#### Signature

public String getSitesSubdomainName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")