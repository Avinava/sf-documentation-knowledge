---
title: "Call Salesforce URLs Within a Package"
domain: pkg2-dev
topic: call-salesforce-urls-within-a-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.244Z
estimatedTokens: 1257
keywords: [Call, Salesforce, URLs, Package, serves, target, org, vary, configuration, build, packages, support, possible, URL, formats]
---

# Call Salesforce URLs Within a Package

> The URLs that Salesforce serves for a target org vary based on the org type and
                configuration. To build packages that support all possible URL formats, use relative
                URLs whenever possible. If your package functionality requires a full URL, use the
                Apex DomainCreator class to get the corresponding
                hostname. This method allows your package to work in all orgs, regardless of the org
                type and My Domain settings.

# Call Salesforce URLs Within a Package

The URLs that Salesforce serves for a target org vary based on the org type and configuration. To build packages that support all possible URL formats, use relative URLs whenever possible. If your package functionality requires a full URL, use the Apex DomainCreator class to get the corresponding hostname. This method allows your package to work in all orgs, regardless of the org type and My Domain settings.

The formats for My Domain URLs vary between production and sandbox orgs. With partitioned domains, hostname formats also vary for demo, Developer Edition, free, patch, and scratch orgs, plus Trailhead playgrounds. For example, there are currently two possible formats for sandbox My Domain login hostname formats and ten possible Visualforce hostname formats. For more information, see [My Domain URL Formats](https://help.salesforce.com/s/articleView?id=products.domain_name_app_url_changes.htm&type=5&language=en_US "HTML (New Window)") and [Partitioned Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_partitioned_domains.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

In general, use relative URLs whenever possible within your packages. If a full URL is required, use the [System.DomainCreator](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_DomainCreator.htm "HTML (New Window)") Apex class to get the URL’s hostname.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

The System.DomainCreator Apex class is available in API version 54.0 and later.

## Use the My Domain Login URL for Logins

All Salesforce orgs have a My Domain, an org-specific subdomain for the URLs that Salesforce hosts for that org. Customers have the option to prevent user and SOAP API logins from the generic login.salesforce.com and test.salesforce.com hostnames. When those options are enabled, logins require the My Domain login URL.

To get the My Domain login URL format for an org, use the getOrgMyDomainHostname() method of the System.DomainCreator Apex class.

//Get the My Domain login hostname String myDomainHostname = DomainCreator.getOrgMyDomainHostname();

In this case, in a production org with a My Domain name of mycompany, myDomainHostname returns mycompany.my.salesforce.com.

## Use Relative URLs

Whenever possible, we recommend that you use a relative URL, which only includes the path within your packages.

For example, assume that you want to add a link on the Visualforce page with a URL of https://MyDomainName\--PackageName.vf.force.com/apex/myCases to a Visualforce page with the URL, https://MyDomainName\--PackageName.vf.force.com/apex/newCase. In this case, use the relative path when referencing the page: /apex/newCase.

## Generate Hostnames for Full URLs

Sometimes a full URL is required. For example, when your package delivers a Visualforce page that includes content delivered by your package. If your package includes full URLs, use the System.DomainCreator Apex class to get the associated hostnames. Otherwise, users can experience issues with your package functionality.

For example, to return the hostname for Visualforce pages, use the getVisualforceHostname(packageName) method of the System.DomainCreator Apex class.

//Define the name of your package as a string String packageName = 'abcpackage'; //Get the Visualforce hostname String vfHostname = DomainCreator.getVisualforceHostname(packageName); //Build the URL for creating a new case System.URL vfNewCaseUrl = new URL('https', vfHostname, '/apex/newCase');

In this example, in a production org with enhanced domains and a My Domain name of mycompany, vfNewCaseUrl returns https://mycompany--abcpackage.vf.force.com/apex/newCase.

## Get Part of a Domain

If you find code in your package that parses a known URL or domain to get a value, we recommend that you update that code to use one of the newer Apex classes. Code that assumes a specific URL format can fail.

If you need a hostname, assess whether you can use the System.DomainCreator class.

If you need that value for another reason, use the Apex [System.DomainParser](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_DomainParser.htm "HTML (New Window)") or [System.Domain](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Domain.htm "HTML (New Window)") class instead.

In this example, we parse a known URL to get the domain type, the org’s My Domain name, and the package name.

//Parse a known URL System.Domain domain = DomainParser.parse('https://mycompany--abcpackage.vf.force.com'); //Get the domain type System.DomainType domainType = domain.getDomainType(); // Returns VISUALFORCE\_DOMAIN //Get the org’s My Domain name String myDomainName = domain.getMyDomainName(); // Returns mycompany //Get the package name String packageName = domain.getPackageName(); // Returns abcpackage
