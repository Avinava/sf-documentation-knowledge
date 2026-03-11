---
title: "Network Class"
domain: apex-reference
topic: network-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.342Z
keywords: [Network, Class, Maps, Insights, reports, Salesforce, Communities, Management, package, onto, Experience, Cloud, site’s, unconfigured, settings., Returns, number, settings, configures., loadAllPackageDefaultNetworkPulseSettings]
---

# Network Class

> Maps the Insights reports from the Salesforce Communities Management package onto each Experience Cloud site’s unconfigured Insights settings. Returns the
      number of settings it configures.

### loadAllPackageDefaultNetworkPulseSettings()

Maps the Insights reports from the Salesforce Communities Management package onto each Experience Cloud site’s unconfigured Insights settings. Returns the number of settings it configures.

#### Signature

public static Integer loadAllPackageDefaultNetworkPulseSettings()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If digital experiences is enabled, and the Salesforce Communities Management package is installed, maps the Insights reports provided in the package onto each Experience Cloud site’s unconfigured Insights settings. Returns the number of settings it configures. This method is invoked automatically during site creation and package installation, but isn’t typically invoked manually.

If digital experiences isn’t enabled for the user’s org or the user is in the internal org, returns 0.