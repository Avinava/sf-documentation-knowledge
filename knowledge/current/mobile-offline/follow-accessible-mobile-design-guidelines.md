---
title: "Follow Accessible Mobile Design Guidelines"
domain: mobile-offline
topic: follow-accessible-mobile-design-guidelines
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:57.177Z
estimatedTokens: 2651
keywords: [Follow, Accessible, Mobile, Design, Guidelines, build, test, components, screen, best, practices, making, designs, Base, Salesforce]
---

# Follow Accessible Mobile Design Guidelines

> Before you build and test your components on a mobile screen, follow best practices for
    making your designs accessible.

# Follow Accessible Mobile Design Guidelines

Before you build and test your components on a mobile screen, follow best practices for making your designs accessible.

Mobile characteristics like smaller viewport size and reduced processing power can constrain your design for layout, control mechanisms, and navigation. These constraints impact accessibility for mobile users. For example, imagine touch targets that are too small and cause a user to abandon your app.

The good news is that mobile devices run on similar web technologies to desktop and can usually handle fully featured websites. To make your components accessible on mobile, follow general web design and accessibility best practices. Consider the accessibility guidelines for mobile screens early in your design so there aren’t surprises when you deploy.

## Use Base Components and Salesforce Lightning Design System (SLDS)

Use [base components](https://developer.salesforce.com/docs/component-library/overview/components "HTML (New Window)") whenever possible. Base components implement SLDS styling, so they match the look-and-feel of the Salesforce mobile app and have accessible features built in. To [style the base component](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-css-slds.html "HTML (New Window)"), use design variations, styling hooks, and design tokens. If these techniques don’t meet your requirements, [use an SLDS component blueprint](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-css-slds-blueprint.html "HTML (New Window)") to build your own component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Not all base components are mobile-ready. For example, lightning-tabset and lightning-tab are based on the [Tabs SLDS component blueprint](https://lightningdesignsystem.com/components/tabs/ "HTML (New Window)"). However, the tabs don’t stack on mobile to adapt to a more narrow screen. Refer to the [component reference](https://developer.salesforce.com/docs/component-library/overview/components "HTML (New Window)") for device support details.

## Use Mobile-Friendly Fonts, Padding, and Color

To ensure that your mobile app or page design is consistent, use [SLDS tokens](https://lightningdesignsystem.com/design-tokens/ "HTML (New Window)"). Avoid using font sizes smaller than $font-size-4 (14 px) as they can be hard to read on small screens. Consider these font guidelines.

-   -   Use $font-size-4 (14 px) for secondary text, like input labels
    -   Use $font-size-5 (16 px for primary text, like input values
    -   Use $font-size-6 (18 px) for a heading, like for a section of a form
    -   Use $font-size-7 (20 px) for a title, like for a record name

Padding provides spacing around your content. Use a consistent spacing system to keep your app pages neat. We recommend using the [SLDS padding utility](https://lightningdesignsystem.com/utilities/padding/) for a consistent layout throughout your app. Besides padding, use the various [SLDS utilities](https://lightningdesignsystem.com/utilities/alignment/ "HTML (New Window)") for alignment, margin, text, and many others.

Colors on a mobile screen are especially important because users have to deal with glare and movement. Text and informational icons should have good color contrast. Aim for a color contrast ratio of 4.5:1 or higher for regular-sized text, 3:1 for icons and large text. Large text is 24 px or more, or 18 px for bold text.

## Avoid Horizontal Swiping Tabs and Carousels

Content in tabs and carousels is easy to miss and poses accessibility and discoverability issues. If you must use a tab or carousel, keep swiping to a minimum so that users can reach the last item in 3 or 4 steps. To present a high number of items, we recommend presenting your content vertically in the viewport, such as using a list view. A list view enables users to access any item on the page directly. Alternatively, apply a container around a related grouping of information using the lightning-card base component to match the look-and-feel of the Salesforce mobile app. If you’re using a table to display data, the table should responsively collapse into tile lists on narrow screens. See [Displaying Data](https://lightningdesignsystem.com/guidelines/displaying-data/ "HTML (New Window)").

## Provide Alternatives to Gestures

Gestures such as tapping or swiping enable users to interact with screen elements. However, users who require keyboard input or run assistive technology can’t perform gestures on their mobile screens. Avoid making gestures the only way to access functionality. When using a gesture, provide a button or other control to trigger an action. You can enable gestures as shortcuts for users who perform a task repeatedly. If you use a custom gesture, include assistive text to describe the behavior.

## Make Control Mechanisms Accessible

Some people use screen readers or voice control for navigation and input. To support accessibility, make control mechanisms such as buttons, links, and form fields focusable. Since buttons are used widely as a call to action, it’s important to make them user-friendly and accessible. Button text should have good color contrast ratio for the button background, compared to the background the button is placed on. See [MDN: Accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Accessibility_concerns "HTML (New Window)") for buttons.

By default, native interactive elements, such as button, a, and input are focusable and include the required semantics and behavior. If you must use div and span elements, set their tabindex value to 0 so they receive keyboard focus. Base components have built-in accessibility and take care of the tab order. See [Handle Focus](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-focus.html "HTML (New Window)").

Links take user away from their current view, so the link content should indicate where the link goes. For example, “click here” is not helpful compared to “about our services”. To optimize navigating across the Salesforce mobile app, use the navigation service available in the lightning/navigation module. The navigation service enables you to navigate to many different page types, like records, list views, and objects. The navigation service provides extensive routing, deep linking, and login redirection. You can use it for app navigation, state changes, and refreshes. See [Navigate to Pages, Records, and Lists](https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate.html "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

For security reasons, these methods aren’t supported: window.open, window.location, and location.href. To navigate to an external URL, use lightning/navigation with the [standard\_\_webPage](https://developer.salesforce.com/docs/platform/lwc/guide/reference-page-reference-type.html "HTML (New Window)") attribute.

## Follow Standard Tap Target Size

Mobile users are constrained with a smaller viewport size. For interactive elements, like buttons and links, provide an area that’s large enough to tap or activate the element. It’s also helpful to provide spacing to separate interactive elements, since mobile users can easily click or activate the wrong element.

The minimum size for a tap target for any actionable item on mobile devices is 44x44 px. If there is more than one target on a screen that performs the same action, only one of the targets need to meet the target size of 44 by 44 CSS pixels. Secondary tap targets, such as a listview picker or breadcrumb link, can have a minimum size of 32px.

Consider these tap target guidelines.

![Tap target factors](/docs/resources/img/en-us/260.0?doc_id=images%2Ftap_target.png&folder=mobile_offline)

1.  Tap target size: The tap target consists of the visual signifier, the container (if there is one), and the internal or external padding. The minimum size is 44px.
2.  Internal padding: Changes based on the size of the visual signifier used.
3.  Visual signifier: An avatar, icon, image, or text. The size can change but the tap target cannot go below 44px.

See the [WCAG guidelines](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html "HTML (New Window)").

## Make User Input as Painless as Possible

Mobile users typically take action or consume information quickly. These quick actions are known as micro-moments, short bursts of focused activity that last about a minute on average. If you are requesting user input, minimize the amount of typing for mobile users.

To get user input for Salesforce records, we recommend using the lightning-record-form or lightning-record-edit-form base component. Alternatively, use lightning-input to get user input using the [lightning/ui\*Api Wire Adapters and Functions](https://developer.salesforce.com/docs/platform/lwc/guide/reference-ui-api.html "HTML (New Window)") to work with Salesforce data and metadata. When you use the base components, the <label\> and <input\> elements are automatically configured for you to adhere to accessibility best practices. See [Work with Records Using Base Components](https://developer.salesforce.com/docs/platform/lwc/guide/data-get-user-input-intro.html "HTML (New Window)").

Provide a visible label for every form field and avoid long labels or truncating labels on mobile. If you work with long labels, consider placing your labels on the top of the field instead of horizontally aligning them with the field. If you can’t include a visible label, provide a hidden label so it’s still available to assistive technologies. The base components top aligns the label on the field automatically for you. They also enable you the option to hide a label visually and still make it available to assistive technologies.

#### See Also

-   [Lightning Design System: Accessible Mobile Design Guidelines](https://lightningdesignsystem.com/accessibility/guidelines/mobile-design/ "Lightning Design System: Accessible Mobile Design Guidelines - HTML (New Window)")

-   [MDN: Mobile Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Mobile "MDN: Mobile Accessibility - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Component Accessibility](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-accessibility.html "Lightning Web Components Developer Guide: Component Accessibility - HTML (New Window)")
