---
title: "Use Mobile Validation with Salesforce Lightning Design System"
domain: mobile-offline
topic: use-mobile-validation-with-salesforce-lightning-design-system
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:57.199Z
estimatedTokens: 1440
keywords: [Mobile, Validation, Salesforce, Lightning, Design, System, SLDS, Linter, Validator, check, code, guidelines, adherence, they, potential]
---

# Use Mobile Validation with Salesforce Lightning Design System

> SLDS Linter and SLDS Validator check your code for SLDS mobile guidelines adherence as
    you type. If they find a potential issue, both tools provide a warning with suggested
    improvements. These warnings apply to HTML and CSS code. SLDS Linter also automatically fixes
    your code and applies those suggestions in bulk across your repository.

# Use Mobile Validation with Salesforce Lightning Design System

SLDS Linter and SLDS Validator check your code for SLDS mobile guidelines adherence as you type. If they find a potential issue, both tools provide a warning with suggested improvements. These warnings apply to HTML and CSS code. SLDS Linter also automatically fixes your code and applies those suggestions in bulk across your repository.

SLDS Linter is the latest code analysis tool that helps prepare your components for use in SLDS 2. It is easier to set up, offers increased automation, and contains a more robust library of rules reflecting the new SLDS 2 styling.

For more information, see the [SLDS Linter](https://developer.salesforce.com/docs/platform/slds-linter/overview) developer guide.

## SLDS Guidelines for Mobile Accessibility

Warning messages for mobile readiness are based on the following Salesforce Lightning Design System (SLDS) guidelines.

Font size

To improve mobile readability, use an SLDS token from the following value range. If you must use another unit type, choose a value from one of the equivalent px, pt, em, rem, or % ranges:

| Unit | Recommended value range |
| --- | --- |
| SLDS token (recommended) | $font-size-4 or larger. See “Font Size” in Lightning Design System. |
| px | 14 px or larger |
| pt | 10.5 pt or larger |
| em, rem | 0.875 or larger |
| % | 87.5 or larger |

For specific use case recommendations, see [Follow Accessible Mobile Design Guidelines](atlas.en-us.mobile_offline.meta/mobile_offline/ux_a11y.htm "Before you build and test your components on a mobile screen, follow best practices for making your designs accessible.").

Word wrapping in labels

To avoid truncation at runtime, always use word wrapping in labels. Avoid using the ellipsis.

Clickable images, Button icons, form elements

To clarify UI behavior, always provide labels for visual elements that support user interaction.

## Work with SLDS Validator

SLDS Validator checks your code for SLDS mobile guidelines adherence as you type. If it finds a potential issue, SLDS Validator provides a warning with suggested improvements. These warnings apply to HTML and CSS code.

Salesforce Lightning Design System (SLDS) defines a wide range of tokens that standardize user interface style descriptors and units. For example, you can use SLDS tokens to specify text style attributes such as font, font size, and font color. Tokens make it easy to ensure that your design is consistent, and simplify updates as your design evolves.

SLDS provides its own validator extension for Visual Studio Code. SLDS Validator scans your Lightning web component code looking for expressions that stray from SLDS guidelines. If it finds issues, SLDS Validator suggests an appropriate SLDS token or provides other advice for improving the underlined expression.

For mobile readiness, SLDS Validator performs additional checks that address mobile accessibility. Accessibility on mobile devices demands stricter guidelines than on desktop browsers, for the benefit of all users. On smaller phone screens, for example, fonts that fall below certain size thresholds can be difficult to read even for customers with excellent eyesight. Word wrapping also becomes more important on limited screen sizes that don’t support horizontal scrolling. SLDS Validator warnings keep you informed when your settings appear to degrade a component’s mobile effectiveness.

SLDS mobile validation requires SLDS Validator version 1.4.7 or later.

To install SLDS Validator, go to the extension page on [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforce-vscode-slds "HTML (New Window)"). To learn more, read the [SLDS Validator](https://developer.salesforce.com/docs/platform/slds-validator/overview "HTML (New Window)") developer guide.

## Enable or Disable SLDS Validator

You can globally enable or disable SLDS Validator. In VS Code Preferences, go to **Settings** | **Extensions** | **SLDS Validator** | **Salesforce-vscode-slds** | **Basic: Mobile Validation**.

## Use SLDS Warnings to Validate Your Code

While you're coding, SLDS Linter displays a yellow underline to highlight components that you need to update. In addition, SLDS Linter captures issues in a SARIF report. Fix validation issues automatically in bulk by running the lint command with the --fix option. Alternatively, review the issues in the report. If a recommendation is provided in the report, fix the code based on it. If there’s no recommendation, then remove the values that are causing the issue.

We recommend that you use SLDS Linter. But if you choose to use SLDS Validator, it places markers on components that don’t conform to mobile guidelines while you’re coding. For example, if an element of your component uses a text size smaller than $font-size-4, the validator highlights the unsuitable font size with yellow underlining.

To read details about the warning, hover over the highlighted code.

#### See Also

-   [SLDS Linter](https://developer.salesforce.com/docs/platform/slds-linter/guide/get-started-intro.html "SLDS Linter - HTML (New Window)")

-   [SLDS Validator](https://developer.salesforce.com/docs/platform/slds-validator/guide/get-started.html "SLDS Validator - HTML (New Window)")

-   [SLDS: Accessible Mobile Design Guidelines](https://www.lightningdesignsystem.com/accessibility/guidelines/mobile-design/#site-main-content "SLDS: Accessible Mobile Design Guidelines - HTML (New Window)")

-   [SLDS: Design Tokens](https://www.lightningdesignsystem.com/design-tokens/ "SLDS: Design Tokens - HTML (New Window)")

-   [W3C CSS Tips and Tricks](https://www.w3.org/Style/Examples/007/units.en.html "W3C CSS Tips and Tricks - HTML (New Window)")

## Related Topics

- Follow Accessible Mobile Design Guidelines (atlas.en-us.mobile_offline.meta/mobile_offline/ux_a11y.htm)
