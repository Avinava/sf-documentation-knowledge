---
title: "Configure the Consent Opt-In Default"
domain: exp-cloud-lwr
topic: configure-the-consent-opt-in-default
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.618Z
estimatedTokens: 644
keywords: [Configure, Consent, Opt-In, start, capturing, events, send, Data, Cloud, user, options, Tag, Manager, doesn’t, destination]
---

# Configure the Consent Opt-In Default

> To start capturing events to send to Data Cloud, configure your user consent options. By
    default, Tag Manager doesn’t send data to its destination until the user explicitly opts in.
    Choose how to present consent options to the site visitor and whether to update the default
    behavior.

# Configure the Consent Opt-In Default

To start capturing events to send to Data Cloud, configure your user consent options. By default, Tag Manager doesn’t send data to its destination until the user explicitly opts in. Choose how to present consent options to the site visitor and whether to update the default behavior.


| User Permissions Needed |
| --- |
| To create an Experience Cloud site: | Create and Set Up Experiences AND View Setup and Configuration |
| To customize an Experience Cloud site: | Be a member of the site AND Create and Set Up ExperiencesORBe a member of the site AND View Setup and Configuration AND an experience admin, publisher, or builder in that site |
| To publish an Experience Cloud site: | Be a member of the site AND Create and Set Up ExperiencesORBe a member of the site AND an experience admin or publisher in that site |

Not all website visitors and customers consent to cookie tracking. With Experience Tag Manager, you can configure whether customers opt in or opt out of tracking. After a user provides consent, and the consent info is passed to your site, Experience Cloud respects the consent preference by sending or not sending data. Any engagement event triggered before a user provides consent is ignored. We recommend using a consent management provider (CMP) application to help manage your consent options.

Tag Manager listens for a specific interaction event called set-consent to capture user consent. Consent is stored as long as the session is active and the page isn’t reloaded. Every time the page is refreshed the consent value must be sent through the set-consent event.

1.  From Setup, in the Quick Find box, enter Digital Experiences, click **Digital Experiences**, and then click **Settings**.
2.  Select **Security & Privacy**.
3.  Under Security Level, select **Relaxed CSP: Permit Access to Inline Scripts and Allowed Hosts**.
4.  When you’re prompted, allow the change.
5.  Navigate back to **Settings** and select **Advanced**.
6.  Click **Edit Head Markup** and add this script to the existing code.

    ```

    ```

7.  Save your changes and publish your site.

If you’re using a CMP, follow the steps above with the following script and include your CMP’s API as the value attribute.

```

```

You can remove user consent by triggering an interaction event with no value specified.

```

```

#### See Also

-   [Consent Interactions](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/event_consent_interactions.htm "Consent interactions capture whether a user opts into or out of tracking cookies.")

## Code Examples

```
<script>
    document.dispatchEvent(
        new CustomEvent('experience_interaction', {
            bubbles: true,
            composed: true,
            detail: {
                name: 'set-consent',
                value: true,
            },
        })
    );
</script>
```

```
<script>
    document.dispatchEvent(
        new CustomEvent('experience_interaction', {
            bubbles: true,
           composed: true,
           detail: {
               name: 'set-consent'
               value: CMP.getConsent()
           },
        })
    );
</script>
```

```
<script>
    document.dispatchEvent(
        new CustomEvent('experience_interaction', {
            bubbles: true,
            composed: true,
            detail: {
                name: 'set-consent'
            },
        })
    );
</script>
```

## Related Topics

- Consent Interactions (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/event_consent_interactions.htm)
