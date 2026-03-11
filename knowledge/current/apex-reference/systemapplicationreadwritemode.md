---
title: "System.ApplicationReadWriteMode"
domain: apex-reference
topic: systemapplicationreadwritemode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.927Z
keywords: [System.ApplicationReadWriteMode, Returns, read, write, mode, set, organization, during, Salesforce.com, upgrades, downtimes., getApplicationReadWriteMode, Signature, Return, Value, Enum]
---

# System.ApplicationReadWriteMode

> Returns the read write mode set for an organization during
Salesforce.com upgrades and downtimes.

### getApplicationReadWriteMode()

Returns the read write mode set for an organization during Salesforce.com upgrades and downtimes.

#### Signature

public static System.ApplicationReadWriteMode getApplicationReadWriteMode()

#### Return Value

Type: [System.ApplicationReadWriteMode](#AppReadWriteModeMethod)

Valid values are:

-   DEFAULT
-   READ\_ONLY

#### Using the System.ApplicationReadWriteMode Enum

Use the System.ApplicationReadWriteMode enum returned by the getApplicationReadWriteMode to programmatically determine if the application is in read-only mode during Salesforce upgrades and downtimes.

Valid values for the enum are:

-   DEFAULT
-   READ\_ONLY

Example:

```

```