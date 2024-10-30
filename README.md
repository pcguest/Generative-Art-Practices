# OI-Projects

## Overview

Welcome to the **OI-Projects** repository! This repository showcases 
several of my projects that demonstrate my skills in creative coding, 
generative art, and data processing using p5.js and Python. These projects 
align with my goal of working with OI, showcasing my ability to create 
impactful, visually appealing, and programmatically sophisticated work.

## Table of Contents

1. [Project Descriptions](#project-descriptions)
    - [1. Glitchy Eyes Generative Art](#1-glitchy-eyes-generative-art)
    - [2. Smiley Outline Mirror Art](#2-smiley-outline-mirror-art)
    - [3. Stippling Image Conversion](#3-stippling-image-conversion)
2. [Features and Technologies Used](#features-and-technologies-used)
3. [How to Run These Projects Locally](#how-to-run-these-projects-locally)
4. [Sample Outputs](#sample-outputs)
5. [Future Improvements](#future-improvements)
6. [Contact Information](#contact-information)

## Project Descriptions

### **1. Glitchy Eyes Generative Art**

This project, titled **"Glitchy Eyes Generative Art"**, creates a dynamic 
generative art piece that focuses on symmetrical, glitch-style distortion 
patterns. It features:

- Symmetric shapes rendered across multiple quadrants.
- The use of Perlin noise to achieve subtle, randomized distortions.
- A set of four colors to create visual harmony and interest.

**Core Concepts:**
- Generative symmetry.
- Use of `noise()` and randomness for a subtle glitch effect.

*(Full code is available in `glitchy_eyes.js`)*

### **2. Smiley Outline Mirror Art**

The **"Smiley Outline Mirror Art"** project generates an abstract version 
of a smiley face using geometric patterns. It features:

- Quadrant-based mirroring to achieve symmetry across the canvas.
- Randomized alternation between ellipses and rectangles to create 
abstract eyes and surrounding features.
- Specific attention to the eye areas to ensure an easily recognizable 
motif.

**Core Concepts:**
- Abstracted face generation using geometric patterns.
- Quadrant-based symmetry to produce a visually balanced art piece.

*(Full code is available in `smiley_outline.js`)*

### **3. Stippling Image Conversion**

The **"Stippling Image Conversion"** project is designed to convert any 
PNG or JPG image into an intricate SVG representation using stippling 
techniques. It is particularly suitable for creating ultra-detailed, 
line-based visuals for graphic arts. The project includes:

- Conversion of images to grayscale and generates SVG files based on pixel 
intensity.
- Configurable parameters for dot size, density, and output resolution.
- Hyper-detail level, allowing for a very close representation of the 
original image’s contours.

**Core Concepts:**
- SVG generation using `svgwrite`.
- Algorithmic stippling with configurable detail and scaling options.

*(Full code is available in `stippling_converter.py`)*

## Features and Technologies Used

- **p5.js** for generative art.
- **Python** (including libraries like `Pillow` and `svgwrite`) for image 
manipulation and SVG generation.
- **Git and GitHub** for version control and repository management.

## How to Run These Projects Locally

### **Requirements**

- **Python 3.x**: To run the stippling converter script.
- **p5.js**: The p5.js projects can be run in any browser.
- **Node.js** (optional): If hosting a simple server for the p5.js files.

### **Instructions**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/pcguest/OI-Projects.git
   cd OI-Projects

