---
title: "Accessibility Tests Example"
domain: lightning
topic: accessibility-tests-example
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:47.896Z
estimatedTokens: 562
keywords: [Accessibility, Tests, you’ve, made, component, accessible, write, sure, stays, way, automated, variety, concerns, including, expected]
---

# Accessibility Tests Example

> If you’ve made a component accessible, write tests to make sure it stays that way. You
  can write automated tests for a variety of accessibility concerns, including expected keyboard
  functionality and that the role, state, and property ARIA values for HTML elements are
  correct.

# Accessibility Tests Example

If you’ve made a component accessible, write tests to make sure it stays that way. You can write automated tests for a variety of accessibility concerns, including expected keyboard functionality and that the role, state, and property ARIA values for HTML elements are correct.

Let’s look at an example that tests an expandable section. When you click Codey’s name, the section expands to tell you more about him, and when you click his name again, the section collapses.

![Test expandable section](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fexpandable_section.png&folder=lightning)

Here’s some pseudocode for an Aura component test that toggles the collapsed and expanded state of an expandable section.

```

```

First, we assert the element is collapsed by default, then we click the toggle button, verify it’s expanded, click the toggle button again, and verify it’s collapsed.

How can we embed accessibility checks into this test? Let’s explore the two helper functions assertCollapsed and assertExpanded.

```

```

For an expandable section to be accessible, it must communicate its expanded or collapsed state to assistive technology users, such as screen reader users. The best way to make the section accessible is with an ARIA state attribute, aria-expanded, on the button, which is true when the section is expanded and false otherwise. To make sure that this attribute is always properly set, we can assert it has the correct value. In assertCollapsed, we assert that aria-expanded has a value of false. Now, in assertExpanded, we can assert that aria-expanded has a value of true.

```

```

If the code that’s setting aria-expanded regresses, we catch the bug before it reaches screen reader users. Now let’s go back to our testToggleExpandCollapse test case. Let’s add $A.test.assertAccessible() in two strategic places so that we run Salesforce’s default set of accessibility checks against the section’s expanded and collapsed states. Remember, we want to test every state, not just one. If we test only the collapsed state, we might miss accessibility bugs in the expanded section.

```

```

Now we have accessibility checks running automatically in our custom tests.

## Code Examples

```
testToggleExpandCollapse : {
  test : [
    function(cmp) {
      // Default: collapsed
      this.assertCollapsed(cmp);
      // Toggle to expanded
      this.clickToggleButton(cmp);
      this.assertExpanded(cmp);
      // Toggle back to collapsed
      this.clickToggleButton(cmp);
      this.assertCollapsed(cmp);
    }
  ]
}
```

```
assertCollapsed : (cmp) {
  var button = this.getButton(cmp);
  var section = this.getSection(cmp);
  // Button indicates section is collapsed
  aura.test.assertEquals(
    button.getAttribute('aria-expanded'),
    "false",
    "Button should indicate it's collapsed"
  );
  // Section is visually closed
  aura.test.assertFalse(
    section.classname.indexOf('slds-is-open') > -1,
    "Section should be collapsed"
  );
}
```

```
assertExpanded : (cmp) {
  var button = this.getButton(cmp);
  var section = this.getSection(cmp);
  // Button indicates section is expanded
  aura.test.assertEquals(
    button.getAttribute('aria-expanded'),
    "true",
    "Button should indicate it's expanded"
  );
  // Section is visually open
  aura.test.assertTrue(
    section.classname.indexOf('slds-is-open') > -1,
    "Section should be open"
  );
}
```

```
testToggleExpandCollapse : {
  test : [
    function(cmp) {
      // Default: collapsed
      this.assertCollapsed(cmp);
      // Toggle to expanded
      this.clickToggleButton(cmp);
      this.assertExpanded(cmp);
      $A.test.assertAccessible(); 
      // Toggle back to collapsed
      this.clickToggleButton(cmp);
      this.assertCollapsed(cmp);
      $A.test.assertAccessible();
    }
  ]
}
```
