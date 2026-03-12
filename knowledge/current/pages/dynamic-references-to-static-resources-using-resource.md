---
title: "Dynamic References to Static Resources
Using  $Resource"
domain: pages
topic: dynamic-references-to-static-resources-using-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.497Z
estimatedTokens: 1024
keywords: [Dynamic, References, Resources, $Resource, useful, providing, support, themes, visual, preferences]
---

# Dynamic References to Static Resources
Using  $Resource

> Dynamic references to static resources can be very useful
for providing support for themes or other visual preferences.

# Dynamic References to Static Resources Using $Resource

Dynamic references to static resources can be very useful for providing support for themes or other visual preferences.

To reference a static resource using the $Resource global variable, provide the name of the static resource in an expression: {! $Resource\[StaticResourceName\] }. For example, if you have a getCustomLogo method that returns the name of an image uploaded as a static resource, reference it like this: <apex:image value="{!$Resource\[customLogo\]}"/>.

This example illustrates how to switch between two different visual themes. First, create a controller extension named ThemeHandler with the following code:

```

```

Notes about this class:

-   It has an empty constructor, because there’s no default constructor for controller extensions.
-   Add the name of your uploaded static resource files theme to the getAvailableThemes method. [Using Static Resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.") provides details of how to create and upload static resources, in particular, zipped archives containing multiple files.
-   The last two methods provide the list of themes and the selected theme for use in the Visualforce form components.

Now create a Visualforce page that uses this controller extension:

```

```

Note the following about this markup:

-   The page uses the Account standard controller, but has nothing to do with accounts. You have to specify a controller to use a controller extension.
-   The first <apex:pageBlockSection\> contains the theme selection widget. Using <apex:actionSupport\>, changes to the selection menu re-render the whole <apex:pageBlock\>. This is so that the <apex:stylesheet\> tag gets the updated selectedTheme for its dynamic reference.
-   The theme preference selected here is only preserved in the view state for the controller, but you could easily save it to a custom setting instead, and make it permanent.
-   The zip files that contain the graphics and style assets for each theme need to have a consistent structure and content. That is. there needs to be an images/logo.png in each theme zip file, and so on.

There are only two dynamic references to the $Resource global variable on this page, but they show how to access both stylesheet and graphic assets. You could use a dynamic reference in every <apex:image\> tag on a page and completely change the look and feel.

$Label and $Setup are similar to $Resource, in that they allow you to access text values or saved settings that your organization administrator or users themselves can set in Salesforce:

-   Custom labels allow you to create text messages that can be consistently used throughout your application. Label text can also be translated and automatically displayed in a user’s default language.
-   Custom settings allow you to create settings for your application, which can be updated by administrators or by users themselves. They can also be hierarchical, so that user-level settings override role- or organization-level settings.

#### See Also

-   [Using Static Resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites.")

-   [$Resource](atlas.en-us.pages.meta/pages/pages_variables_global_resource.htm "A global merge field type to use when referencing an existing static resource by name in a Visualforce page. You can also use resource merge fields in URLFOR functions to reference a particular file in a static resource archive.")

## Code Examples

```apex
public class ThemeHandler {

    public ThemeHandler(ApexPages.StandardController controller) { }
    
    public static Set<String> getAvailableThemes() {
        // You must have at least one uploaded static resource
        // or this code will fail. List their names here.
        return(new Set<String> {'Theme_Color', 'Theme_BW'});
    }
    
    public static List<SelectOption> getThemeOptions() {
        List<SelectOption> themeOptions = new List<SelectOption>();
        for(String themeName : getAvailableThemes()) {
            themeOptions.add(new SelectOption(themeName, themeName));
        }
        return themeOptions;
    }
    
    public String selectedTheme {
        get {
            if(null == selectedTheme) {
                // Ensure we always have a theme
                List<String> themeList = new List<String>();
                themeList.addAll(getAvailableThemes());
                selectedTheme = themeList[0];               
            }
            return selectedTheme;
        }
        set {
            if(getAvailableThemes().contains(value)) {
                selectedTheme = value;
            }
        }
    }
}
```

```
<apex:page standardController="Account" 
           extensions="ThemeHandler" showHeader="false">

    <apex:form >
    <apex:pageBlock id="ThemePreview" >
      <apex:stylesheet 
          value="{!URLFOR($Resource[selectedTheme], 'styles/styles.css')}"/>

      <h1>Theme Viewer</h1>
      <p>You can select a theme to use while browsing this site.</p>
      
      <apex:pageBlockSection >
          <apex:outputLabel value="Select Theme: " for="themesList"/>
          <apex:selectList id="themesList" size="1" value="{!selectedTheme}">
              <apex:actionSupport event="onchange" rerender="ThemePreview"/>
              <apex:selectOptions value="{!themeOptions}"/>
          </apex:selectList>
      </apex:pageBlockSection>
      
      <apex:pageBlockSection >
      <div class="custom" style="padding: 1em;"><!-- Theme CSS hook -->

          <h2>This is a Sub-Heading</h2>
          
          <p>This is standard body copy. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Quisque neque arcu, pellentesque in vehicula vitae, dictum 
          id dolor. Cras viverra consequat neque eu gravida. Morbi hendrerit lobortis 
          mauris, id sollicitudin dui rhoncus nec.</p>
          
          <p><apex:image 
              value="{!URLFOR($Resource[selectedTheme], 'images/logo.png')}"/></p>

      </div><!-- End of theme CSS hook -->  
      </apex:pageBlockSection>
    
    </apex:pageBlock>
    </apex:form>
</apex:page>
```

## Related Topics

- Using Static Resources (atlas.en-us.pages.meta/pages/pages_resources.htm)
- $Resource (atlas.en-us.pages.meta/pages/pages_variables_global_resource.htm)
