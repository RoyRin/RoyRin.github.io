---
layout: default
title: Personal Projects
permalink: /personal/
---
# **Personal Projects!**
## **2020**
### Arxiv Crawler

I wanted to applied to academic programs, but didn't know a lot about what different academics do, and who is related to whom. So I wrote a basic crawler to scrape arxiv and interactively visualize related authors. Here is the [github link](https://github.com/RoyRin/arxiv_connections).

{% include image.html img="assets/projects/arxiv_scraper/screenshot_concentric.png" title="" caption="One view of authors who are closely related to Alexandra Chouldechova (edges are co-authored papers, nodes are authors)"  width = "700" %}

<!-- 
#### To do: include reference to career copilots jobs scraper
-->

## **2018** 
### Raspberry PI IOT : smart home project

To truly embrace living in NYC, I rented an apartment where my room did not have a window. I quickly realized that I hated this (obviously), and in order to cope, I made my Raspberry Pi control my sound and lights system to mimic the sun. Here is a [Write-up](/assets/rpi/RaspberryPiLights.pdf) of my project! 

## **2017** 
### Linguistics: Semantics Review paper on Natural Logic in Natural Language Inference (NLI)

For a graduate course Semantics course (with professor Anna Szabolsci) I wrote a review paper of the use of Natural Logic in Natural Language Inference (NLI). Here's [my review paper](/assets/projects/Rinberg_Natural_Logic_in_Natural_Language_Inferences.pdf) and [my presentation](/assets/projects/Natural_Logic_present2.pdf).

### Physics Simulations:

As part of my physics education, I would regularly make CS simulations of physics problems, some of which can be found on my [github](https://github.com/RoyRin/Computational_Physics_2016).

{% include image.html img="assets/projects/simulations/planets5_center_adjusted.gif" title="" caption="note: energy is in fact conserved"  width = "500" %}

# **Art!**

Here's a brief sampling of some art I've made in my life:


<table>
  <tr>
    <td><img src='/assets/ART/Colors3.jpg' width=270 >
        <figcaption>Crayons, a heat gun, and a lazy afternoon.</figcaption>
    </td>
          <td><img src='/assets/ART/geometerscrayon2.jpg' width=270 >
        <figcaption>another day, another crayon.</figcaption>        
        </td>
  </tr>

   <tr>
    <td><img src='/assets/ART/AllMetalSmithing1.jpg'  width=270 >
      <figcaption>A highlight of my favorite metalsmithing.</figcaption>
    </td>
    <td><img src='/assets/ART/candlesnuffer2.jpg' width=270 >
    <figcaption>A zoom into my favorite piece of art I've made : the ever practical Candle-Snuffer.</figcaption>
    </td>
  </tr>

  <tr>
    <td><img src='/assets/ART/Conversation3.jpg'  width=270>
        <figcaption>This was once featured in a gallery, but only because I snuck it into the gallery.</figcaption>
    </td>
    <td><img src='/assets/ART/NYC.jpg' width=270 >
      <figcaption> The first piece of art I made, actually. </figcaption>
    </td>

  </tr>
</table>







<!--- 
In the future, I could potentially look into :
this style found in https://stackoverflow.com/questions/17677094/jekyll-for-loop-over-all-images-in-a-folder 


Or I could just put the images side by side, without the table
![metalsmithing](/assets/ART/AllMetalSmithing1.jpg){: width="250" }![metalsmithing](/assets/ART/AllMetalSmithing1.jpg){: width="250" }![metalsmithing](/assets/ART/AllMetalSmithing1.jpg){: width="250" }


There's also some promise here :

{% for image in site.static_files %}
{% if image.path contains 'ART/' %}  
![image.path]({{ image.path }}){: width="250" }
{% endif %} 
{% endfor %}

-->
