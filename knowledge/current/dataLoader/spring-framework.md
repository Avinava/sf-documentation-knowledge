---
title: "Spring Framework"
domain: dataLoader
topic: spring-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.325Z
estimatedTokens: 348
keywords: [Spring, Framework, XML, files, configure, beans, bean, instance, correspond, object's, setter]
---

# Spring Framework

> The Spring Framework allows you to use XML files to configure beans. Each bean
    represents an instance of an object; the parameters correspond to each object's setter
    methods.

# Spring Framework

The Spring Framework allows you to use XML files to configure beans. Each bean represents an instance of an object; the parameters correspond to each object's setter methods.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader configuration files are based on the [Spring Framework](http://www.springframework.org/ "HTML (New Window)"), which is an open-source, full-stack Java/J2EE application framework.

A typical bean has these attributes.

-   class—Specifies the implementation class for the bean instance.
-   id—Uniquely identifies the bean to XmlBeanFactory, which is the class that gets objects from an XML configuration file.

For more information on the Spring Framework, see [the official documentation](http://www.springframework.org/documentation "HTML (New Window)") and the [support forums](http://forum.springsource.org/ "HTML (New Window)"). Note that Salesforce cannot guarantee the availability or accuracy of external websites.
