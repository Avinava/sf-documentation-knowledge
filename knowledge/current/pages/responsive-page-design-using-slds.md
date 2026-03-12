---
title: "Responsive Page Design Using SLDS"
domain: pages
topic: responsive-page-design-using-slds
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.606Z
estimatedTokens: 571
keywords: [Responsive, Design, SLDS, web, aimed, creating, online, user, interfaces, provide, best, viewing, experience, including, easy]
---

# Responsive Page Design Using SLDS

> Responsive design is a web design method aimed at creating online user interfaces that
    provide the best viewing experience, including easy reading and navigation, on various screen
    sizes.

# Responsive Page Design Using SLDS

Responsive design is a web design method aimed at creating online user interfaces that provide the best viewing experience, including easy reading and navigation, on various screen sizes.

A responsive user interface adapts the layout to the screen size by using fluid, proportion-based grids, flexible images, and CSS3 media queries. Using responsive design, you can create Visualforce pages that look great and work well on phones and tablets.

Standard Salesforce app pages use responsive design to provide device-optimized layouts. The primary technique is a stacked single-column layout for phones, and a side-by-side, two-column layout for tablets. The page is the same for all devices, and adapts to the screen size it’s displayed on.

## The SLDS Grid System

The Lightning Design System (SLDS) uses a grid based on Flexbox to provide a flexible, mobile-first, device-agnostic scaffolding system. The grid system lets you divide your page into rows and columns and define layout variations for different-sized screens. Grids can be nested to create complex layouts.

The grid system has two parts, the grid wrapper (the slds-grid class) and the columns within it (the slds-col class). By default, columns are sized relative to their content.

You can also specify the column sizes manually with sizing helpers from SLDS. They use a slds-size--X-of-Y format where X represents a fraction of the total space Y. For example, slds-size--1\-of-2 represents a width that is 50 percent of the available space. Using the manual sizing class helpers, you can specify column ratios across the following grids – 2, 3, 4, 5, 6, and 12.

## Create a Responsive Design Page Using SLDS

1.  Open the Developer Console and click **File** | **New** | **Visualforce Page**. Enter SLDSResponsivePage for the page name.
2.  In the editor, replace any markup with the following.

    ```

    ```

    This code creates a two-column grid where the two columns are:

    -   Full width and vertical on a mobile screen
    -   Sized 1:1 and side by side on small screens (more than 480 pixels)
    -   Sized 3:1 and side by side on larger screens (more than 768 pixels)


View this page on a desktop and a mobile device to see the responsive design in action.

## Code Examples

```
<apex:page showHeader="false" standardStylesheets="false" sidebar="false" applyHtmlTag="false" applyBodyTag="false" docType="html-5.0">

  <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>SLDS ResponsiveDesign Visualforce Page in Salesforce Mobile</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

       <!-- Import the Design System style sheet -->
       <apex:slds />
    </head>
    <body>

      <!-- REQUIRED SLDS WRAPPER -->
      <div class="slds-scope">

        <!-- PRIMARY CONTENT WRAPPER -->

          <!-- RESPONSIVE GRID EXAMPLE -->
          <div class="myapp">
            <div class="slds-grid slds-wrap">
              <div class="slds-col slds-size--1-of-1 slds-small-size--1-of-2 slds-medium-size--1-of-4">
                <div class="slds-box slds-box_x-small slds-text-align_center slds-m-around--x-small">Box 1</div>
              </div>
              <div class="slds-col slds-size--1-of-1 slds-small-size--1-of-2 slds-medium-size--3-of-4">
                <div class="slds-box slds-box_x-small slds-text-align_center slds-m-around--x-small">Box 2</div>
              </div>
            </div>
          </div>
          <!-- / RESPONSIVE GRID EXAMPLE -->
      </div>
    </body>
  </html>
</apex:page>
```
