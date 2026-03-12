---
title: "Which Trial Method Is Right for My AppExchange Solution?"
domain: packagingGuide
topic: which-trial-method-is-right-for-my-appexchange-solution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.458Z
estimatedTokens: 614
keywords: [Trial, Right, AppExchange, Solution, step, offering, trials, pick, delivery, provide, listing, test, drives, Trialforce, orgs]
---

# Which Trial Method Is Right for My AppExchange Solution?

> The first step to offering trials of your AppExchange solution is to pick a delivery
    method. You can provide trials on your AppExchange listing using test drives or Trialforce orgs,
    or you can provide trials on your website using SignupRequest API. Learn about the differences
    between trial methods, and decide which options work best for your business.

# Which Trial Method Is Right for My AppExchange Solution?

The first step to offering trials of your AppExchange solution is to pick a delivery method. You can provide trials on your AppExchange listing using test drives or Trialforce orgs, or you can provide trials on your website using SignupRequest API. Learn about the differences between trial methods, and decide which options work best for your business.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

Choose one trial method or several—it’s up to you! In general, the greater the variety of options, the more likely that prospects are to convert.

| Trial Method | Where Are Trials Delivered? | How Does It Work? | Advantages |
| --- | --- | --- | --- |
| Trialforce | Your AppExchange listing | Using a Trialforce Management Org or Environment Hub, you create a Trialforce Source Org (TSO), install your solution, and add sample data. Using your TSO, you create a Trialforce template.On AppExchange, your prospect requests a trial. They receive login credentials for a unique trial org based on your Trialforce template. | Offer flexible trial experiences using environments that prospects can keep and customize.Add optional branding to your trial experiences. |
| Test Drive | Your AppExchange listing | Using a preconfigured Trialforce template, you create a test drive org, install your solution, and add sample data.On AppExchange, your prospect requests a test drive. They’re directed to a read-only org that doesn’t require login credentials. | Offer curated trial experiences using environments that don’t require setup or customization.Give the widest range of prospects the opportunity to explore your solution, including prospects with little Salesforce experience.Provide your prospects instant access to a test org |
| SignupRequest API | Your website using an HTML sign-up form | Using a Trialforce Management Org or Environment Hub, you create a Trialforce Source Org (TSO), install your solution, and add sample data. Using your TSO, you create a Trialforce template.On your website, your prospect requests a trial. They receive login credentials for a unique trial org based on your Trialforce template. | Give prospects who visit your website the ability to try your solution.Offer flexible trial experiences using environments that prospects can keep and customize.Add optional branding to your trial experiences. |
