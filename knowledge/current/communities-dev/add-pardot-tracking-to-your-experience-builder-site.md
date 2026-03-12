---
title: "Add Pardot Tracking to Your Experience Builder Site"
domain: communities-dev
topic: add-pardot-tracking-to-your-experience-builder-site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.233Z
estimatedTokens: 663
keywords: [Add, Pardot, Tracking, Experience, Builder, Site, track, visitor, interactions, activities, visitors, haven’t, yet, converted, prospect]
---

# Add Pardot Tracking to Your Experience Builder Site

> Pardot can track visitor interactions and activities on a site, even when the visitors
  haven’t yet been converted to a prospect. After tracking is enabled, use Pardot to view reports on
  visitor engagement, and automatically score leads based on-site activity.

# Add Pardot Tracking to Your Experience Builder Site

Pardot can track visitor interactions and activities on a site, even when the visitors haven’t yet been converted to a prospect. After tracking is enabled, use Pardot to view reports on visitor engagement, and automatically score leads based on-site activity.

1.  In Pardot, navigate to the campaign you want to track.
2.  Click **View Tracking Code**, and copy the code.
3.  Access Experience Builder of the site you want to add tracking to.
4.  In **Settings** | **Advanced**, click **Edit Head Markup**, then paste in the Pardot tracking code.

Experience Builder sites are a single-page apps (SPA), so when the user navigates to different pages on the site, only the content area reloads rather than the entire page. The Pardot script records the first load of the site as a page view. Modify the script to allow in-app navigation within the page to be captured more accurately in Pardot.

1.  In the Edit Head Markup window, modify the Pardot tracking code so that changes in page state are added to the session history.

    Here’s a sample code snippet with modifications noted.

    ```

    ```


Update your site’s Content Security Policy (CSP) settings so that the head markup works as expected.

1.  Access **Experience Builder** | **Settings** | **Security**.
2.  Select **Relaxed CSP: Permit Access to Inline Scripts and Allowed Hosts**, and then click **Allow** in the confirmation window.
3.  Under **CSP Errors**, you see a list of blocked sites. Click **Allow URL** for each site you want to allow as Pardot tracker domains.

After enabling a successful integration between Pardot and Experience Cloud, you can accurately track page views and score leads based on a visitor’s Experience Cloud site navigation.

#### See Also

-   [*Salesforce Help*: Implement Tracking Code](https://help.salesforce.com/articleView?id=mktg.pardot_implement_tracking_code.htm&type=5&language=en_US "Salesforce Help: Implement Tracking Code - HTML (New Window)")

-   [*Salesforce Help*: Add Markup to the Page <head> to Customize Your Experience Builder Site](https://help.salesforce.com/articleView?id=experience.community_builder_page_head.htm&type=5&language=en_US "Salesforce Help: Add Markup to the Page <head> to
    Customize Your Experience Builder Site - HTML (New Window)")

-   [*Salesforce Help*: Where to Allowlist Third-Party Hosts for Experience Builder Sites](https://help.salesforce.com/articleView?id=experience.networks_security_csp_allow.htm&type=5&language=en_US "Salesforce Help: Where to Allowlist Third-Party Hosts for Experience Builder
    Sites - HTML (New Window)")

## Code Examples

```
<script type='text/javascript'>
piAId = '{{%pardot-id-for-your-org%}}'; //no change from OOTB code (format: 123456)
piCId = '';
piHostname = '{{%pardot-hostname-for-your-org%}}'; //no change from OOTB code (format: www.yourpardottrackerdomain.com)
    
(function() {
  //patching the history push state function to include calling
  // the async_load function that sends data to Pardot
  var pushState = history.pushState;
  history.pushState = function() {
    pushState.apply(history, arguments);
    async_load(); 
  };
    
    function async_load(){0
        var s = document.createElement('script'); s.type = 'text/javascript';
        s.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + piHostname + '/pd.js';
        var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
    }
    if(window.attachEvent) 
    { 
        window.attachEvent('onload', async_load);
         //attach event listener for browser history changes
         // for browsers that support attachEvent
         window.attachEvent('onpopstate', async_load);
    }
    else 
    { 
        window.addEventListener('load', async_load, false); 
        //add eventlistener for browser history changes
        // for all other browsers
        window.addEventListener('popstate', async_load, false);
    }
})();
    
    
</script>
```
