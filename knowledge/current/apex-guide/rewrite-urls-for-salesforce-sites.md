---
title: "Rewrite URLs for Salesforce Sites"
domain: apex-guide
topic: rewrite-urls-for-salesforce-sites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.027Z
estimatedTokens: 2333
keywords: [Rewrite, URLs, Salesforce, Sites, built-in, logic, helps, display, user-friendly, links, site, visitors, rules, URL, requests]
---

# Rewrite URLs for Salesforce Sites

> Sites provides built-in logic that helps you display user-friendly URLs and links to
        site visitors. Create rules to rewrite URL requests typed
            into the address bar, launched from bookmarks, or linked from external websites. You can
            also create rules to rewrite the URLs for links within site pages. URL rewriting not
            only makes URLs more descriptive and intuitive for users, it allows search engines to
            better index your site pages.

# Rewrite URLs for Salesforce Sites

Sites provides built-in logic that helps you display user-friendly URLs and links to site visitors. Create rules to rewrite URL requests typed into the address bar, launched from bookmarks, or linked from external websites. You can also create rules to rewrite the URLs for links within site pages. URL rewriting not only makes URLs more descriptive and intuitive for users, it allows search engines to better index your site pages.

For example, let's say that you have a blog site. Without URL rewriting, a blog entry's URL might look like this: https://myblog.my.salesforce-sites.com/posts?id=003D000000Q0PcN

With URL rewriting, your users can access blog posts by date and title, say, instead of by record ID. The URL for one of your New Year's Eve posts might be: https://myblog.my.salesforce-sites.com/posts/2019/12/31/auld-lang-syne

You can also rewrite URLs for links shown within a site page. If your New Year's Eve post contained a link to your Valentine's Day post, the link URL might show: https://myblog.my.salesforce-sites.com/posts/2019/02/14/last-minute-roses

To rewrite URLs for a site, create an Apex class that maps the original URLs to user-friendly URLs, and then add the Apex class to your site.

To learn about the methods in the Site.UrlRewriter interface, see [UrlRewriter Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_site_urlRewriter_reference.htm).

## Creating the Apex Class

The Apex class that you create must implement the provided interface Site.UrlRewriter. In general, it must have the following form:

```

```

Consider the following restrictions and recommendations as you create your Apex class:

Class and Methods Must Be Global

The Apex class and methods must all be global.

Class Must Include Both Methods

The Apex class must implement both the mapRequestUrl and generateUrlFor methods. If you don't want to use one of the methods, simply have it return null.

Rewriting Only Works for Visualforce Site Pages

Incoming URL requests can only be mapped to Visualforce pages associated with your site. You can't map to standard pages, images, or other entities.

To rewrite URLs for links on your site's pages, use the !URLFOR function with the $Page merge variable. For example, the following links to a Visualforce page named myPage:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Visualforce <apex:form> elements with forceSSL=”true” aren't affected by the urlRewriter.

See the “Functions” appendix of the [Visualforce Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "HTML (New Window)").

Encoded URLs

The URLs you get from using the Site.urlRewriter interface are encoded. If you need to access the unencoded values of your URL, use the urlDecode method of the [EncodingUtil Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm).

Restricted Characters

User-friendly URLs must be distinct from Salesforce URLs. URLs with a 3-character entity prefix or a 15- or 18-character ID aren’t rewritten.

You can’t use periods in your user-friendly or rewritten URLs, except for the .well-known path component, which can’t be used at the end of a URL.

Restricted Strings

You can’t use the following reserved strings as the first path component after a site’s base URL in either a user-friendly URL or a rewritten URL. Some examples of the first past component after a site’s base URL are baseURL in https://MyDomainName.my.salesforce-sites.com/baseURL, https://MyDomainName.my.salesforce-sites.com/pathPrefix/baseURL, https://custom-domain/pathPrefix/baseURL, and https://MyDomainName.my.salesforce-sites.com/pathPrefix/baseURL/another/path.

-   apexcomponent
-   apexpages
-   aura
-   chatter
-   chatteranswers
-   chatterservice
-   cometd
-   ex
-   faces
-   flash
-   flex
-   google
-   home
-   id
-   ideas
-   idp
-   images
-   img
-   javascript
-   js
-   knowledge
-   lightning
-   login
-   m
-   mobile
-   ncsphoto
-   nui
-   push
-   resource
-   saml
-   sccommunities
-   search
-   secur
-   services
-   servlet
-   setup
-   sfc
-   sfdc
-   sfdc\_ns
-   sfsites
-   site
-   style
-   vote
-   WEB-INF
-   widg

You can't use the following reserved strings at the end of a rewritten URL path:

-   /aura
-   /auraFW
-   /auraResource
-   /AuraJLoggingRPCService
-   /AuraJLVRPCService
-   /AuraJRPCService
-   /dbcthumbnail
-   /HelpAndTrainingDoor
-   /htmldbcthumbnail
-   /l
-   /m
-   /mobile

Relative Paths Only

The [PageReference.getUrl()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_System_PageReference_getUrl.htm) method only returns the part of the URL immediately following the host name or site prefix (if any). For example, if your URL is https://mycompany.my.salesforce-sites.com/sales/MyPage?id=12345, where “sales” is the site prefix, only /MyPage?id=12345 is returned.

You can't rewrite the domain or site prefix.

Unique Paths Only

You can't map a URL to a directory that has the same name as your site prefix. For example, if your site URL is https://acme.my.salesforce-sites.com/help, where “help” is the site prefix, you can't point the URL to help/page. The resulting path, https://acme.my.salesforce-sites.com/help/help/page, would be returned instead as https://acme.my.salesforce-sites.com/help/page.

Query in Bulk

For better performance with page generation, perform tasks in bulk rather than one at a time for the generateUrlFor method.

Enforce Field Uniqueness

Make sure the fields you choose for rewriting URLs are unique. Using unique or indexed fields in SOQL for your queries may improve performance.

## Adding URL Rewriting to a Site

Once you've created the URL rewriting Apex class, follow these steps to add it to your site:

1.  From Setup, enter Sites in the Quick Find box, then select **Sites**.
2.  Click **New** or click **Edit** for an existing site.
3.  On the Site Edit page, choose an Apex class for URL Rewriter Class.
4.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If you have URL rewriting enabled on your site, all PageReferences are passed through the URL rewriter. PageReferences with redirect set to true and a redirectCode other than 0 return redirected URLs instead of rewritten URLs.

## Code Example

In this example, we have a simple site consisting of two Visualforce pages: mycontact and myaccount. Be sure you have “Read” permission enabled for both before trying the sample. Each page uses the standard controller for its object type. The contact page includes a link to the parent account, plus contact details.

Before implementing rewriting, the address bar and link URLs showed the record ID (a random 15-digit string), illustrated in the [“before” figure](#SiteURLsBefore). Once rewriting was enabled, the address bar and links show more user-friendly rewritten URLs, illustrated in the [“after” figure](#SiteURLsAfter).

The Apex class used to rewrite the URLs for these pages is shown in [Example URL Rewriting Apex Class](#ExampleApexClass), with detailed comments.

## Example Site Pages

This section shows the Visualforce for the account and contact pages used in this example.

The account page uses the standard controller for accounts and is nothing more than a standard detail page. This page should be named myaccount.

```

```

The contact page uses the standard controller for contacts and consists of two parts. The first part links to the parent account using the URLFOR function and the $Page merge variable; the second simply provides the contact details. Notice that the Visualforce page doesn't contain any rewriting logic except URLFOR. This page should be named mycontact.

```

```

## Example URL Rewriting Apex Class

The Apex class used as the URL rewriter for the site uses the mapRequestUrl method to map incoming URL requests to the right Salesforce record. It also uses the generateUrlFor method to rewrite the URL for the link to the account page in a more user-friendly form.

```

```

## Before and After Rewriting

Here is a visual example of the results of implementing the Apex class to rewrite the original site URLs. Notice the ID-based URLs in the first figure, and the user-friendly URLs in the second.

Site URLs Before Rewriting ![Site URLs before](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fsites_url_rewriter_before.png&folder=apexcode)

The numbered elements in this figure are:

1.  The original URL for the contact page before rewriting
2.  The link to the parent account page from the contact page
3.  The original URL for the link to the account page before rewriting, shown in the browser's status bar

Site URLs After Rewriting ![Site URLs after](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fsites_url_rewriter_after.png&folder=apexcode)

The numbered elements in this figure are:

1.  The rewritten URL for the contact page after rewriting
2.  The link to the parent account page from the contact page
3.  The rewritten URL for the link to the account page after rewriting, shown in the browser's status bar

## Code Examples

```apex
global class yourClass implements Site.UrlRewriter {
    global PageReference mapRequestUrl(PageReference
            yourFriendlyUrl)
    global PageReference[] generateUrlFor(PageReference[]
            yourSalesforceUrls);
}
```

```
<apex:outputLink value="{!URLFOR($Page.myPage)}"></apex:outputLink>
```

```
<apex:page standardController="Account">
    <apex:detail relatedList="false"/>
</apex:page>
```

```
<apex:page standardController="contact">
    <apex:pageBlock title="Parent Account">
        <apex:outputLink value="{!URLFOR($Page.mycontact,null, 
                [id=contact.account.id])}">{!contact.account.name}
                </apex:outputLink>
    </apex:pageBlock>
    <apex:detail relatedList="false"/>
</apex:page>
```

```apex
global with sharing class myRewriter implements Site.UrlRewriter {

    //Variables to represent the user-friendly URLs for
    //account and contact pages
    String ACCOUNT_PAGE = '/myaccount/';
    String CONTACT_PAGE = '/mycontact/';
    //Variables to represent my custom Visualforce pages
    //that display account and contact information
    String ACCOUNT_VISUALFORCE_PAGE = '/myaccount?id=';
    String CONTACT_VISUALFORCE_PAGE = '/mycontact?id=';

    global PageReference mapRequestUrl(PageReference
            myFriendlyUrl){
        String url = myFriendlyUrl.getUrl();

        if(url.startsWith(CONTACT_PAGE)){
            //Extract the name of the contact from the URL
            //For example: /mycontact/Ryan returns Ryan
            String name = url.substring(CONTACT_PAGE.length(),
                    url.length());

            //Select the ID of the contact that matches
            //the name from the URL
            Contact con = [SELECT Id FROM Contact WHERE Name =:
                    name LIMIT 1];

            //Construct a new page reference in the form
            //of my Visualforce page
            return new PageReference(CONTACT_VISUALFORCE_PAGE + con.id);
        }
        if(url.startsWith(ACCOUNT_PAGE)){
            //Extract the name of the account
            String name = url.substring(ACCOUNT_PAGE.length(),
                    url.length());

            //Query for the ID of an account with this name
            Account acc = [SELECT Id FROM Account WHERE Name =:name LIMIT 1];

           //Return a page in Visualforce format
            return new PageReference(ACCOUNT_VISUALFORCE_PAGE + acc.id);
        }
        //If the URL isn't in the form of a contact or
        //account page, continue with the request
        return null;
    }
    global List<PageReference> generateUrlFor(List<PageReference> 
            mySalesforceUrls){
        //A list of pages to return after all the links 
        //have been evaluated
        List<PageReference> myFriendlyUrls = new List<PageReference>();
        
        //a list of all the ids in the urls
        List<id> accIds = new List<id>();
        
        // loop through all the urls once, finding all the valid ids
        for(PageReference mySalesforceUrl : mySalesforceUrls){
        //Get the URL of the page
        String url = mySalesforceUrl.getUrl();
 
            //If this looks like an account page, transform it
            if(url.startsWith(ACCOUNT_VISUALFORCE_PAGE)){
                //Extract the ID from the query parameter
                //and store in a list
                //for querying later in bulk.
                        String id= url.substring(ACCOUNT_VISUALFORCE_PAGE.length(),
                        url.length());
                        accIds.add(id);
            }
        }

    // Get all the account names in bulk
    List <account> accounts = [SELECT Name FROM Account WHERE Id IN :accIds];

    // make the new urls
    Integer counter = 0;

    // it is important to go through all the urls again, so that the order
    // of the urls in the list is maintained. 
    for(PageReference mySalesforceUrl : mySalesforceUrls) {

       //Get the URL of the page
       String url = mySalesforceUrl.getUrl();

       if(url.startsWith(ACCOUNT_VISUALFORCE_PAGE)){
         myFriendlyUrls.add(new PageReference(ACCOUNT_PAGE + accounts.get(counter).name));
         counter++;
       } else {
         //If this doesn't start like an account page,
         //don't do any transformations
         myFriendlyUrls.add(mySalesforceUrl);
       }
    }
   
    //Return the full list of pages
    return myFriendlyUrls;
  }

}
```
