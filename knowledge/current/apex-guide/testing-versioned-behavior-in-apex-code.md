---
title: "Testing Versioned Behavior in Apex Code"
domain: apex-guide
topic: testing-versioned-behavior-in-apex-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.636Z
estimatedTokens: 266
keywords: [Testing, Versioned, Behavior, Apex, Code, change, behavior, trigger, different, package, versions, it’s, important, test, code, runs, expected, versions., write, version]
---

# Testing Versioned Behavior in Apex Code

> When you change the behavior in an Apex class or trigger for different package
        versions, it’s important to test that your code runs as expected in the different package
        versions. You can write test methods that change the package version
            context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.

# Testing Versioned Behavior in Apex Code

When you change the behavior in an Apex class or trigger for different package versions, it’s important to test that your code runs as expected in the different package versions. You can write test methods that change the package version context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.

This sample shows a trigger with different behavior for different package versions. For more information about defining different behavior for package versions, see [Version Apex Behavior](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior.htm "Package developers can use conditional logic in Apex classes and triggers to exhibit different behavior for different versions. With this conditional logic, you can support existing behavior in classes and triggers in previous package versions while evolving the code.").

```

```

The following test class uses the runAs method to verify the trigger’s behavior with and without a specific version:

```

```

## Code Examples

```apex
trigger oppValidation on Opportunity (before insert, before update) {

    for (Opportunity opp : Trigger.new){
    
        // Add a new validation to the package
        // Applies to versions of the managed package greater than 1.0
        if (System.requestVersion().compareTo(new Version(1,0)) > 0) {
            if (opp.Probability >= 50 && opp.Description == null) {
                opp.addError('All deals over 50% require a description');
            }
        }

        // Validation applies to all versions of the managed package.
        if (opp.IsWon == true && opp.LeadSource == null) {
            opp.addError('A lead source must be provided for all Closed Won deals');
        }
    }
}
```

```apex
@IsTest
private class OppTriggerTests{

   static testMethod void testOppValidation(){
   
      // Set up 50% opportunity with no description
      Opportunity opp = new Opportunity();
      opp.Name = 'Test Job';
      opp.Probability = 50;
      opp.StageName = 'Prospect';
      opp.CloseDate = System.today();
      
      // Test running as latest package version
      try{
          insert opp;
      }
      catch(DMLException e){
          Assert.isTrue(
              e.getMessage().contains(
                'All deals over 50% require a description'),
                  e.getMessage());
      }
      
      // Run test as managed package version 1.0
      System.runAs(new Version(1,0)){
          try{
              insert opp;
          }
          catch(DMLException e){
              Assert.isFalse(false, e.getMessage());
          }
      }

      // Set up a closed won opportunity with no lead source
      opp = new Opportunity();
      opp.Name = 'Test Job';
      opp.Probability = 50;
      opp.StageName = 'Prospect';
      opp.CloseDate = System.today();
      opp.StageName = 'Closed Won';
      
      // Test running as latest package version
      try{
          insert opp;
      }
      catch(DMLException e){
          Assert.isTrue(
            e.getMessage().contains(
              'A lead source must be provided for all Closed Won deals'),
                e.getMessage());
      }

      // Run test as managed package version 1.0
      System.runAs(new Version(1,0)){
          try{
              insert opp;
          }
          catch(DMLException e){
              Assert.isTrue(
                  e.getMessage().contains(
                    'A lead source must be provided for all Closed Won deals'),
                        e.getMessage());
          }
      }
   }
}
```

## Related Topics

- Version Apex
                Behavior (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior.htm)
