---
title: "Dataobject Tag Examples"
domain: mc-programmatic-content
topic: dataobject-tag-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.971Z
estimatedTokens: 200
keywords: [Dataobject, Tag, Examples, loads, AMPscript, variable, referenced, JSON, Data, Filter, Order]
---

# Dataobject Tag Examples

> This example loads information from an AMPscript variable using a single Dataobject tag referenced by a section tag:

# Dataobject Tag Examples

## Dataobject AMPscript Example

This example loads information from an AMPscript variable using a single Dataobject tag referenced by a section tag:

This example produces this information:

```
Email Address: sam@example.com <mailto:sam@example.com>
Region: East
State: North Carolina
City: Charlotte
```

## JSON Data Filter and Order example

This example loads JSON data from a data extension using a Dataobject tag, then filters and orders that data:

This example produces this information:

```
Email Address: john@example.com
Region: West
State: California
City: San Francisco
```
```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
```
```
Email Address: sam@example.com
Region: East
State: North Carolina
City: Charlotte
```
