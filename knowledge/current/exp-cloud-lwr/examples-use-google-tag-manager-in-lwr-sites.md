---
title: "Examples: Use Google Tag Manager in LWR Sites"
domain: exp-cloud-lwr
topic: examples-use-google-tag-manager-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.540Z
estimatedTokens: 830
keywords: [Examples, Google, Tag, Manager, LWR, Sites, track, customer, interactions, site, single-page, application, <x-oasis-script>, privileged, script]
---

# Examples: Use Google Tag Manager in LWR Sites

> Use Google Tag Manager to track customer interactions with your LWR site, which is a
  single-page application. In these examples, the <x-oasis-script> privileged script tag lets Google Tag Manager interact with
  elements within the shadow DOM.

# Examples: Use Google Tag Manager in LWR Sites

Use Google Tag Manager to track customer interactions with your LWR site, which is a single-page application. In these examples, the <x-oasis-script> privileged script tag lets Google Tag Manager interact with elements within the shadow DOM.

First, because you’re adding Google Tag Manager as a third-party library, switch to Relaxed CSP in Experience Builder in **Settings** | **Security & Privacy**. Also add the URL for your Google Tag Manager script to the Trusted Sites for Scripts list on this page.

![Security & Privacy page in Experience Builder settings](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_settings_security_and_privacy.png&folder=exp_cloud_lwr)

In these examples, the code listens for events and sends the captured details to the data layer. The data layer is an object that contains all the information that you want to pass to Google Tag Manager, such as events or variables. You can set up triggers in Google Tag Manager based on the variables in the data layer. Keep in mind that triggers and events loaded into Google Tag Manager using the <x-oasis-script> aren't visible in Google Tag Manager Preview mode. To view your expected changes, switch to live mode.

## Example 1: Track Form Inputs and Submissions

In this example, a page in the LWR site contains a form called Subscribe. Google Tag Manager tracks when the form is submitted and what a customer entered in the form.

1.  In Experience Builder, click **Settings** | **Advanced** | **Edit Head Markup**, and embed this Google Tag Manager script in an oasis script tag. Replace XXXX with your Google Tag Manager ID.

    ```

    ```

2.  In Google Tag Manager, create a custom HTML tag, and add this script to the tag.

    This code uses the .subscribe class to listen for the forms present on the page and calls the lwr\_form\_function to send the captured inputs to the data layer.

    ```

    ```

3.  Create a Window Loaded page view trigger in Google Tag Manager, and set it on all pages by omitting any filters that enable the trigger on specific pages.
4.  On the configuration page for the custom HTML tag that you created in step 2, assign the Window Loaded page view trigger to the tag.
5.  Publish the trigger.

## Example 2: Track Button and Link Clicks

In this scenario, Google Tag Manager tracks each click of a link or button on a page.

1.  In Experience Builder, click **Settings** | **Advanced** | **Edit Head Markup**, and embed this Google Tag Manager script in an oasis script tag. Replace XXXX with your Google Tag Manager ID.

    ```

    ```

2.  In Google Tag Manager, create a custom HTML tag, and add this script to the tag.

    This code listens for events on the click class and sends the captured details from the event to the data layer.

    ```

    ```

3.  Create a trigger for Window Loaded in Google Tag Manager, and set it on all pages by omitting any filters that enable the trigger on specific pages.
4.  On the configuration page for the custom HTML tag that you created in step 2, assign the Window Loaded page view trigger to the tag.
5.  Publish the trigger.

#### See Also

-   [*Google Help:* Tag Manager Help](https://support.google.com/tagmanager/?hl=en#topic=3441530 "Google Help: Tag Manager Help - HTML (New Window)")

## Code Examples

```
<x-oasis-script hidden="true">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</x-oasis-script>
```

```
<script>
var lwr_forms = window.frames[0].window.document.querySelectorAll('.subscribe');
lwr_forms.forEach(lwr_form_function);
function lwr_form_function(item) {
    item.addEventListener('submit', function (event) {
        window.dataLayer.push({
            'event': 'formSubmit',
            'FormTarget': event.target["target"],
            'FormId': event.target.id,
            'FormClass': event.target.className,
            'FormUrl': event.target.src,
            'FormElement': event.target,
            'FormText': event.target.innerText
        });
    });
}
</script>
```

```
<x-oasis-script hidden="true">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</x-oasis-script>
```

```
<script>
window.frames[0].window.document.addEventListener('click',function(e){
var targetElement=e.target;
    window.dataLayer.push({
        event: 'custom_click_Text_Trigger',
        custom_event: {
            element: targetElement,
            elementId: targetElement.id || '',
            elementClasses: targetElement.className || '',
            elementUrl: targetElement.href || targetElement.action || '',
            elementTarget: targetElement.target || '',
            elementText: targetElement.innerText
        }
    });
});
</script>
```
