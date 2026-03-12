---
title: "IndustriesAutomotiveSettings"
domain: automotive-cloud
topic: industriesautomotivesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.711Z
estimatedTokens: 709
keywords: [IndustriesAutomotiveSettings, settings, enabling, features, Automotive, Cloud, Service, Excellence, Scheduler, File, Suffix, Directory, Location, Version, Declarative]
---

# IndustriesAutomotiveSettings

> Represents the settings for enabling
      features like Automotive Cloud, Automotive Service Excellence, and Automotive Scheduler.

# IndustriesAutomotiveSettings

Represents the settings for enabling features like Automotive Cloud, Automotive Service Excellence, and Automotive Scheduler.

This type extends the Metadata metadata type and inherits its fullName field. In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesAutomotiveSettings values are stored in a single file named IndustriesAutomotive.settings in the settings directory.

## Version

IndustriesAutomotiveSettings components are available in API version 56.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAutoAgentsPilot | boolean | Reserved for future use. |
| enableAutomotiveAgents | boolean | Indicates whether the Automotive Agents feature of Automotive Cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 64.0 and later. |
| enableAutomotiveAppraisals | boolean | Indicates whether the automotive components for Appraisal Management feature of Automotive Cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 63.0 and later. |
| enableAutomotiveCloud | boolean | Indicates whether the Automotive Cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 56.0 and later. |
| enableAutomotiveScheduler | boolean | Indicates whether the Salesforce Scheduler feature of Automotive Cloud are enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 58.0 and later. |
| enableAutomotiveServiceExcellence | boolean | Indicates whether the Service Excellence feature of Automotive Cloud are enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 56.0 and later. |
| enableConnectedVehSrvcsCmpnt | boolean | Indicates whether the Connected Vehicle Services component feature of Automotive Cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 63.0 and later. |
| enableDealerEssntlsAutomotive | boolean | Indicates whether the Dealer Essentials for Automotive feature of Automotive Cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 63.0 and later. |
| enableGenAiForAutoPilot | boolean | Reserved for future use. |

## Declarative Metadata Sample Definition

The following is an example of a IndustriesAutomotiveSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesAutomotiveSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableAutomotiveAgents>false</enableAutomotiveAgents>
  <enableAutomotiveAppraisals>false</enableAutomotiveAppraisals>
  <enableAutomotiveCloud>false</enableAutomotiveCloud>
  <enableAutomotiveScheduler>false</enableAutomotiveScheduler>
  <enableAutomotiveServiceExcellence>false</enableAutomotiveServiceExcellence>
  <enableConnectedVehSrvcsCmpnt>true</enableConnectedVehSrvcsCmpnt>
  <enableDealerEssntlsAutomotive>false</enableAutomotiveScheduler>
</IndustriesAutomotiveSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>IndustriesAutomotiveSettings</members>
    <name>Settings</name>
  </types>
  <version>56.0</version>
</Package>
```
