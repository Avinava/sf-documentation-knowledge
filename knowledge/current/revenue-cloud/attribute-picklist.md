---
title: "Attribute Picklist"
domain: revenue-cloud
topic: attribute-picklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.366Z
keywords: [Attribute, Picklist]
---

# Attribute Picklist

# Attribute Picklist

Output representation of the attribute picklist.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataType | String | Data type of the values in the picklist. Valid values are:BooleanDateDatetimeNumberTextCurrencyPercent | Small, 60.0 | 60.0 |
| description | String | Description of the picklist, such as the picklist purpose or the associated product. | Small, 60.0 | 60.0 |
| id | String | ID associated with the attribute picklist record. | Small, 60.0 | 60.0 |
| name | String | Name of the picklist value. | Small, 60.0 | 60.0 |
| values | Attribute Picklist Value[] | List of values associated with the picklist. | Small, 60.0 | 60.0 |