---
title: "getExperienceCloudSitesHostname()"
domain: apex-reference
topic: getexperiencecloudsiteshostname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.360Z
keywords: [getExperienceCloudSitesHostname, Returns, system-managed, hostname, org’s, Experience, Cloud, sites, such, ExperienceCloudSitesSubdomainName.force.com., Digital, Experiences, aren’t, enabled, method, throws, InvalidParameterValueException., Signature, Return, Value]
---

# getExperienceCloudSitesHostname()

> Returns the system-managed hostname for the org’s Experience Cloud
      sites, such as ExperienceCloudSitesSubdomainName.force.com. If Digital
      Experiences aren’t enabled, this method throws an InvalidParameterValueException.

### getExperienceCloudSitesHostname()

Returns the system-managed hostname for the org’s Experience Cloud sites, such as ExperienceCloudSitesSubdomainName.force.com. If Digital Experiences aren’t enabled, this method throws an InvalidParameterValueException.

#### Signature

public static String getExperienceCloudSitesHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")