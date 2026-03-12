---
title: "Write Aura Component Accessibility Tests"
domain: lightning
topic: write-aura-component-accessibility-tests
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.903Z
estimatedTokens: 596
keywords: [Write, Aura, Component, Accessibility, Tests, develop, components, Salesforce’s, test, tools, check, common, issues]
---

# Write Aura Component Accessibility Tests

> When you develop with Aura components, you can use Salesforce’s test tools to check for
  common accessibility issues.

# Write Aura Component Accessibility Tests

When you develop with Aura components, you can use Salesforce’s test tools to check for common accessibility issues.

You can call Aura accessibility tests in two environments.

-   For JavaScript tests, use $A.test.assertAccessible().
-   For WebDriver tests, use auraTestingUtil.assertAccessible().

These functions check the rendered DOM elements to make sure they pass Salesforce’s accessibility validation.

When you use these tools, there are two outcomes: pass or fail. If the tool doesn’t find any accessibility exceptions, it returns an empty string. If the tool does find accessibility exceptions, it returns the accessibility rule that failed, the erroneous tag, and a stack trace of where it was found in the code.

Since Aura components and pages are dynamic, make sure to retest your components’ accessibility every time something changes in the DOM. Otherwise you aren’t checking every UI state your users encounter.

The Aura accessibility tests look for these issues:

-   Images without alt attributes
-   Anchor elements without textual content
-   input elements without associated labels
-   Radio button groups not in fieldset tags
-   iframe or frame elements with empty title attributes
-   fieldset elements without legend tags
-   th element without a scope attribute
-   head element with an empty title attribute
-   Headings (H1, H2, and so forth) increasing by more than one level at a time
-   CSS color contrast ratio between text and background less than 4.5:1

These tests aren’t all-encompassing. If your code passes every test, it’s not a guarantee that your product is fully accessible. However, these tests do surface major accessibility issues, and ensure that your code remains accessible.

-   **[Accessibility Tests Example](atlas.en-us.lightning.meta/lightning/accessibility_tests_example.htm)**
    If you’ve made a component accessible, write tests to make sure it stays that way. You can write automated tests for a variety of accessibility concerns, including expected keyboard functionality and that the role, state, and property ARIA values for HTML elements are correct.
-   **[Other Accessibility Automation Tools](atlas.en-us.lightning.meta/lightning/accessibility_tools.htm)**
    There are a number of robust open-source tools and mobile test frameworks for testing for accessibility.

## Related Topics

- Accessibility Tests Example (atlas.en-us.lightning.meta/lightning/accessibility_tests_example.htm)
- Other Accessibility Automation Tools (atlas.en-us.lightning.meta/lightning/accessibility_tools.htm)
