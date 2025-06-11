---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
title: Home
---

<div class="row">
    <div class="col-md-4 text-center mb-4">
        <img src="{{ '/assets/profile_pic.jpg' | relative_url }}" alt="Profile Picture" class="img-fluid rounded-circle" style="max-width: 200px;">
    </div>
    <div class="col-md-8">
        <h1 class="display-4">Roy Rinberg</h1>
        <p class="lead">Harvard PhD Student in Computer Science</p>
        <div class="mt-4">
            <p>I'm interested in <a href="https://royrinberg.medium.com/resources-for-working-in-public-interest-technology-78a74e7fd712">public-interest technology</a> - most recently, I'm interested in <span class="spoiler">privacy</span> technology. I'm a Harvard PhD student, advised by Professor <a href="https://www.hbs.edu/faculty/Pages/profile.aspx?facId=1326892">Seth Neel</a> and Professor <a href="https://salil.seas.harvard.edu">Salil Vadhan</a> on "Trustworthy" Machine Learning.</p>
        </div>
    </div>
</div>

<hr class="my-5">

<div class="row">
    <div class="col-md-6">
        <h2>Recent Publications</h2>
        {% assign recent_pubs = site.publications | sort: 'date' | reverse | limit:3 %}
        {% for pub in recent_pubs %}
        <div class="publication">
            <h5>{{ pub.title }}</h5>
            <p class="text-muted">{{ pub.journal }}, {{ pub.date | date: "%Y" }}</p>
            <a href="{{ pub.url }}" class="btn btn-sm btn-outline-primary">Read More</a>
        </div>
        {% endfor %}
        <a href="{{ '/publications' | relative_url }}" class="btn btn-link">View All Publications →</a>
    </div>
    
    <div class="col-md-6">
        <h2>Featured Projects</h2>
        {% assign featured_projects = site.projects | where: "featured", true | limit:3 %}
        {% for project in featured_projects %}
        <div class="project-card">
            <h5>{{ project.title }}</h5>
            <p>{{ project.description }}</p>
            <a href="{{ project.url }}" class="btn btn-sm btn-outline-primary">Learn More</a>
        </div>
        {% endfor %}
        <a href="{{ '/projects' | relative_url }}" class="btn btn-link">View All Projects →</a>
    </div>
</div>

<hr class="my-5">

<div class="row">
    <div class="col-12">
        <h2>Latest Blog Posts</h2>
        {% assign recent_posts = site.posts | limit:3 %}
        {% for post in recent_posts %}
        <div class="blog-post">
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <p class="blog-post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
            <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
            <a href="{{ post.url }}" class="btn btn-sm btn-outline-primary">Read More</a>
        </div>
        {% endfor %}
        <a href="{{ '/blog' | relative_url }}" class="btn btn-link">View All Posts →</a>
    </div>
</div>

<hr class="my-5">

<div class="row">
    <div class="col-md-6">
        <h2>Being Helpful</h2>
        <p>I enjoy communicating my work and talking with individuals who want to learn more about computer science research and academia. As someone who pivoted from industry to academia, I'm particularly sympathetic to the difficulties in such a transition; so especially if you're in industry and trying to enter academia, please don't hesitate to reach out.</p>
        <p>I also help young Ukrainian students applying to universities, with <a href="https://mentorukraine.bravegeneration.org">MentorUkraine</a>.</p>
    </div>
    
    <div class="col-md-6">
        <h2>Resources I Maintain</h2>
        <ul>
            <li><a href="https://docs.google.com/spreadsheets/d/1-M6Tv94S9Oa07D3ehzVkeRIAsktuIpC4hDO7gGf1ous/edit?gid=0#gid=0">Academic Privacy researchers in North America</a></li>
            <li><a href="https://royrinberg.medium.com/resources-for-working-in-public-interest-technology-78a74e7fd712">Resource List for Working in Public-Interest Technology</a></li>
            <li><a href="https://fascinated-zircon-5bc.notion.site/FASRC-Computing-1c14c3845c4c8046bbd6f2bac85fc067">Guide on using Slurm</a> with associated <a href="https://www.youtube.com/watch?v=Pak8OOLDNkQ">youtube video</a></li>
        </ul>
    </div>
</div>

<hr class="my-5">

<div class="row">
    <div class="col-md-6">
        <h2>Writing</h2>
        <p>I'm a big proponent of <a href="https://www.swyx.io/learn-in-public/">learning in public</a>. I sometimes write about public-interest tech and privacy on <a href="https://technicallyprivate.substack.com/">substack</a> or <a href="https://royrinberg.medium.com/">Medium</a>.</p>
    </div>
    
    <div class="col-md-6">
        <h2>Hobbies & Interests</h2>
        <ul>
            <li><a href="https://technicallyprivate.substack.com/">Writing</a></li>
            <li><a href="https://github.com/RoyRin/RoyRin.github.io/tree/master/assets/drone_photos">Drone Photography</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hardcourt_Bike_Polo">Bike Polo</a></li>
            <li>Collecting a <a href="https://docs.google.com/presentation/d/1wArCxGAAvkJcy0inWeKua3Ra7LkJDhApcso8cJ1Aon8/edit#slide=id.g1223166de6e_0_7">list of how organizations advertise privacy</a></li>
        </ul>
    </div>
</div>

<hr class="my-5">

<div class="row">
    <div class="col-12">
        <h2>Communities & Groups</h2>
        <ul>
            <li>I created and organize the group <a href="https://www.technicallyprivate.com">Technically Private</a>: a group of <em>mostly</em> graduate students across many universities, who talk about Privacy and Security. If you're interested in joining - send a request to the above link.</li>
            <li>CS Research Master's at Columbia: I conducted research with <a href="https://www.rachelcummings.com">Professor Rachel Cummings</a> and <a href="https://www.cs.columbia.edu/~smb/">Professor Steven Bellovin</a> on Private ML.</li>
            <li>I was an early-stage software engineer for 3 years at <a href="https://www.ouster.com">Ouster</a>, a lidar company.</li>
        </ul>
    </div>
</div>
