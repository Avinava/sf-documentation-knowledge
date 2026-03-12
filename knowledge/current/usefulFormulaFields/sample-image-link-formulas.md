---
title: "Sample Image Link Formulas"
domain: usefulFormulaFields
topic: sample-image-link-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.292Z
estimatedTokens: 530
keywords: [Sample, Image, Link, Formulas, links, Yahoo, Instant, Messenger™, Flags, Case, Priority, Color, Squares, Age, Traffic]
---

# Sample Image Link Formulas

> Use these formulas for image links.

# Sample Image Link Formulas

Use these formulas for image links.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions by Context](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Yahoo! Instant Messenger™ Image

This formula displays an image that indicates whether a contact or user is logged in to Yahoo! Instant Messenger. Clicking the image launches the Yahoo! Instant Messenger window. This formula uses a custom text field called Yahoo Name to store the contact or user’s Yahoo! ID.

```

```

## Flags for Case Priority

This formula displays a green, yellow, or red flag image to indicate case priority.

```

```

## Color Squares for Case Age

This formula displays a 30 x 30 pixel image of a red, yellow, or green, depending on the value of a Case Age custom number field.

```

```

## Traffic Lights for Status

This formula displays a green, yellow, or red traffic light images to indicate status, using a custom picklist field called Project Status. Use this formula in list views and reports to create a “Status Summary” dashboard view.

```

```

## Stars for Ratings

This formula displays a set of one to five stars to indicate a rating or score.

```

```

## Consumer Reports™—Style Colored Circles for Ratings

This formula displays a colored circle to indicate a rating on a scale of one to five, where solid red is one, half red is two, black outline is three, half black is four, and solid black is five.

```

```

## Horizontal Bars to Indicate Scoring

This formula displays a horizontal color bar (green on a white background) of a length that is proportional to a numeric score. In this example, the maximum length of the bar is 200 pixels.

```

```

## Code Examples

```
IF(ISBLANK(Yahoo_Name__c),"", HYPERLINK("ymsgr:sendIM?" & Yahoo_Name__c, 
IMAGE("http://opi.yahoo.com/online?u=" & Yahoo_Name__c & "&m=g&t=0", " ")))
```

```
IMAGE( 
CASE( Priority, 
"Low", "/img/samples/flag_green.gif",
"Medium", "/img/samples/flag_yellow.gif",
"High", "/img/samples/flag_red.gif", 
"/s.gif"), 
"Priority Flag")
```

```
IF( Case_Age__c > 20, 
IMAGE("/img/samples/color_red.gif", "red", 30, 30),
IF( Case_Age__c > 10,
IMAGE("/img/samples/color_yellow.gif", "yellow", 30, 30),
IMAGE("/img/samples/color_green.gif", "green", 30, 30)
))
```

```
IMAGE( 
CASE(Project_Status__c, 
"Green", "/img/samples/light_green.gif",
"Yellow", "/img/samples/light_yellow.gif",
"Red", "/img/samples/light_red.gif", 
"/s.gif"), 
"status color")
```

```
IMAGE( 
CASE(Rating__c, 
"1", "/img/samples/stars_100.gif",
"2", "/img/samples/stars_200.gif",
"3", "/img/samples/stars_300.gif", 
"4", "/img/samples/stars_400.gif", 
"5", "/img/samples/stars_500.gif", 
"/img/samples/stars_000.gif"), 
"rating")
```

## Related Topics

- Formula Operators and Functions by
                    Context (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
