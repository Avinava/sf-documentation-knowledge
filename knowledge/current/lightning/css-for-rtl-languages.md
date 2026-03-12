---
title: "CSS for RTL Languages"
domain: lightning
topic: css-for-rtl-languages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:47.986Z
estimatedTokens: 783
keywords: [CSS, RTL, Languages, Language, setting, Salesforce, right-to-left, framework, automatically, flips, left, border-left, right, border-right, respectively]
---

# CSS for RTL Languages

> When your Language setting in Salesforce is set to a right-to-left (RTL) language, the
  framework automatically flips property names, such as left and
   border-left to right and
   border-right respectively. The framework also rearranges
  certain values like padding, margin, and border-radius so that the right and left units are
  swapped.

# CSS for RTL Languages

When your Language setting in Salesforce is set to a right-to-left (RTL) language, the framework automatically flips property names, such as left and border-left to right and border-right respectively. The framework also rearranges certain values like padding, margin, and border-radius so that the right and left units are swapped.

## Flipped CSS Properties

These properties are automatically flipped for RTL languages.

| Property | Flipped Property |
| --- | --- |
| left | right |
| right | left |
| border-left | border-right |
| border-left-color | border-right-color |
| border-left-style | border-right-style |
| border-left-width | border-right-width |
| border-right | border-left |
| border-right-color | border-left-color |
| border-right-style | border-left-style |
| border-right-width | border-left-width |
| border-top-left-radius | border-top-right-radius |
| border-top-right-radius | border-top-left-radius |
| border-bottom-left-radius | border-bottom-right-radius |
| border-bottom-right-radius | border-bottom-left-radius |
| padding-left | padding-right |
| padding-right | padding-left |
| margin-left | margin-right |
| margin-right | margin-left |
| nav-left | nav-right |
| nav-right | nav-left |

## Flipped CSS Keywords

These keywords are automatically flipped for RTL languages.

| Keyword | Flipped Keyword |
| --- | --- |
| ltr | rtl |
| rtl | ltr |
| left | right |
| right | left |
| e-resize | w-resize |
| w-resize | e-resize |
| ne-resize | nw-resize |
| nw-resize | ne-resize |
| nesw-resize | nwse-resize |
| nwse-resize | nesw-resize |
| se-resize | sw-resize |
| sw-resize | se-resize |

## Flipped CSS Percentage Values

If the value is a percentage for these properties, the flipped value is set to 100 minus the value.

-   background
-   background-position
-   background-position-x

## Flipped Property Arguments

For these properties that can take four values, the second and fourth values are swapped. For example, property: A B C D becomes property: A D C B.

-   padding
-   margin
-   border-color
-   border-style
-   border-width

## Flipped border-radius Arguments

The arguments for the border-radius property are flipped with these patterns.

| Arguments | Flipped Arguments |
| --- | --- |
| border-radius: A B | border-radius: B A |
| border-radius: A B C | border-radius: B A C |
| border-radius: A B C D | border-radius: B A D C |

## Override Flipping With @noflip

To override the automatic flipping, add a /\*@noflip\*/ annotation in a comment directly before the property. For example:

.THIS.mycontainer { /\*@noflip\*/ direction : rtl; }

## Use Conditional CSS

Use the @if(isRTL) conditional statement to manually provide the appropriately oriented CSS for each direction.

.THIS { transform: skew(28deg) translate3d(0, 0 , 0); } @if(isRTL) { .THIS { transform: skew(-28deg) translate3d(0, 0 , 0); } }

#### See Also

-   [*Salesforce Help*: Right-to-Left (RTL) Language Support](https://help.salesforce.com/articleView?id=faq_getstart_rtl.htm&language=en_US "Salesforce Help: Right-to-Left (RTL) Language Support - HTML (New Window)")
