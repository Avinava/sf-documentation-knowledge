---
title: "Create a Tokens Bundle"
domain: lightning
topic: create-a-tokens-bundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.899Z
estimatedTokens: 457
keywords: [Tokens, Bundle, org, Developer, Console]
---

# Create a Tokens Bundle

> Create a tokens bundle in your org using the Developer Console.

# Create a Tokens Bundle

Create a tokens bundle in your org using the Developer Console.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

To create a tokens bundle:

1.  In the Developer Console, select **File** | **New** | **Lightning Tokens**.
2.  Enter a name for the tokens bundle.

    Your first tokens bundle should be named defaultTokens. The tokens defined within defaultTokens are automatically accessible in your Lightning components. Tokens defined in any other bundle won’t be accessible in your components unless you import them into the defaultTokens bundle.


You have an empty tokens bundle, ready to edit.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You can’t edit the tokens bundle name or description in the Developer Console after you create it. The bundle’s AuraBundleDefinition can be modified using the Metadata API. Although you can set a version on a tokens bundle, doing so has no effect.

## Code Examples

```
<aura:tokens>

</aura:tokens>
```

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
