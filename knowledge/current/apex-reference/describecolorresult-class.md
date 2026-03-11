---
title: "DescribeColorResult Class"
domain: apex-reference
topic: describecolorresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.015Z
keywords: [DescribeColorResult, Class, Returns, color, theme., getTheme, Signature, Return, Value]
---

# DescribeColorResult Class

> Returns the color theme.

### getTheme()

Returns the color theme.

#### Signature

public String getTheme()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Possible theme values include theme3, theme4, and custom.

-   theme3 is the Salesforce theme introduced during Spring ‘10.
-   theme4 is the Salesforce theme introduced in Winter ‘14 for the mobile touchscreen version of Salesforce.
-   custom is the theme name associated with a custom icon.