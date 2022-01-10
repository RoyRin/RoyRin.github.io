---
layout: index
title: Projects
permalink: /Projects/
---
# **Projects!**

<nav class="toc" style = "margin-bottom: 0;" markdown="1">
**Table of Contents**
* TOC
{:toc}

</nav>

## **2021**

### [Foundations of Blockchain](https://timroughgarden.github.io/fob21/)
* [Handwritten Course Notes](https://drive.google.com/drive/folders/1YmF_3DCrV50MY2pPnB5QPjDwtZOQ4J4N?usp=sharing) for course by Professor Tim Roughgarden
* [Final Project - Privacy when Everyone is Watching: Privacy on the Blockchain]({{site.url}}/assets/projects/courses/blockchains_course_2021/FOB_Project_Report.pdf). Co-authored with Nilaksh Agarwal.
    * A medium-depth dive into zk-SNARKs and into privacy coins. 

### [Neural Networks Course](https://www.cs.columbia.edu/~zemel/Class/Nndl/)
* [Final Project]({{site.url}}/assets/projects/courses/neural_nets_course_2021/NNDL_privacy_project_final.pdf) - Improvements and Analysis of Private
Ensemble-Based Federated Learning.
    * An analysis of ensemble-based federated learning like [PATE](http://www.cleverhans.io/privacy/2018/04/29/privacy-and-machine-learning.html) and [CaPC](http://www.cleverhans.io/2021/05/01/capc.html). I studied the use of reputation-based weighting for improved robustness, and conducted a security analysis of the trust assumptions in ensemble-based federated learning.

### Policy for Privacy Technology
  * Course by Professor Rachel Cummings
  * [Final Project]({{site.url}}/assets/projects/courses/privacy_policy_2021/privacy_policy_final.pdf)
    * An investigation of the interplay of Know-Your-Customer (KYC) laws, and privacy-coins on the blockchain. 
  * [MPC explainer]({{site.url}}/assets/projects/courses/privacy_policy_2021/privacy_policy_hw3.pdf)
    * An explainer document on a form of "Secure Multi-Party Computation" (MPC); what it is, why it's useful, and how it can be used. Co-written with Sofia Calatrava.

## **2020**
### Arxiv Crawler

I wanted to applied to academic programs, but didn't know a lot about what different academics do, and who is related to whom. So I wrote a basic crawler to scrape arxiv and interactively visualize related authors. Here is the [github link](https://github.com/RoyRin/arxiv_connections).

{% include image.html img="assets/projects/code/arxiv_scraper/screenshot_concentric.png" title="" caption="One view of authors who are closely related to Alexandra Chouldechova (edges are co-authored papers, nodes are authors)"  width = "700" %}

<!-- 
#### To do: include reference to career copilots jobs scraper
-->

## **2018** 
### Raspberry PI IOT : smart home project

To truly embrace living in NYC, I rented an apartment where my room did not have a window. I quickly realized that I hated this (obviously), and in order to cope, I made my Raspberry Pi control my sound and lights system to mimic the sun. Here is the [github link](https://github.com/RoyRin/rpi_home_lights).

## **2017** 
### Semantics Review paper

For a graduate course Semantics course (with professor Anna Szabolsci) I wrote a review paper of the use of Natural Logic in Natural Language Inference (NLI). Here's [my review paper]({{site.url}}/assets/projects/courses/semantics_2017/Rinberg_Natural_Logic_in_Natural_Language_Inferences.pdf) and [my presentation]({{site.url}}/assets/projects/courses/semantics_2017/Natural_Logic_present2.pdf).

### Physics Simulations:

As part of my physics education, I would regularly make CS simulations of physics problems, some of which can be found on my [github](https://github.com/RoyRin/Computational_Physics_2016).

{% include image.html img="assets/projects/code/simulations/planets5_center_adjusted.gif" title="" caption="note: energy is in fact conserved"  width = "500" %}

# **Art!**

Here's a brief sampling of some art I've made in my life:


<table>
  <tr>
    <td><img src='{{site.url}}/assets/ART/Colors3.jpg' width=270 >
        <figcaption>Crayons, a heat gun, and a sunday afternoon.</figcaption>
    </td>
          <td><img src='{{site.url}}/assets/ART/geometerscrayon2.jpg' width=270 >
        <figcaption>Another day, another crayon.</figcaption>        
        </td>
  </tr>

   <tr>
    <td><img src='{{site.url}}/assets/ART/AllMetalSmithing1.jpg'  width=270 >
      <figcaption>A highlight of my favorite metalsmithing.</figcaption>
    </td>
    <td><img src='{{site.url}}/assets/ART/candlesnuffer2.jpg' width=270 >
    <figcaption>A zoom in on my favorite piece of art that I've made : the ever practical Candle-Snuffer.</figcaption>
    </td>
  </tr>

  <tr>
    <td><img src='{{site.url}}/assets/ART/Conversation3.jpg'  width=270>
        <figcaption>This was once featured in a gallery, but only because I snuck it into the gallery.</figcaption>
    </td>
    <td><img src='{{site.url}}/assets/ART/NYC.jpg' width=270 >
      <figcaption> The first piece of art I made, actually. </figcaption>
    </td>

  </tr>
</table>







<!--- 
In the future, I could potentially look into :
this style found in https://stackoverflow.com/questions/17677094/jekyll-for-loop-over-all-images-in-a-folder 


Or I could just put the images side by side, without the table
![metalsmithing]({{site.url}}/assets/ART/AllMetalSmithing1.jpg){: width="250" }![metalsmithing]({{site.url}}/assets/ART/AllMetalSmithing1.jpg){: width="250" }![metalsmithing]({{site.url}}/assets/ART/AllMetalSmithing1.jpg){: width="250" }


There's also some promise here :

{% for image in site.static_files %}
{% if image.path contains 'ART/' %}  
![image.path]({{ image.path }}){: width="250" }
{% endif %} 
{% endfor %}

-->
