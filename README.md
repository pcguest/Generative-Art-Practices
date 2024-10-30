# Generative Art Practices

This repository showcases a collection of generative art projects, 
exploring techniques and concepts in computer-generated art. The projects 
are primarily coded in **JavaScript (p5.js)** and **Python** to create 
visually captivating artwork using algorithmic processes.

## Projects Overview

### 1. Glitchy Rectangular Patterns

The "Glitchy Rectangular Patterns" project generates a dynamic, 
glitch-inspired composition using rectangles filled with vibrant colors 
and small distortions.

- **Concepts Covered**:
  - Glitch art simulation through small random distortions.
  - Using Perlin noise for smooth color transitions.
  - Abstract pattern creation using randomized positions and spacing.

- _(Full code is available in `glitchy_patterns.js`)_

### 2. Smiley Outline Mirror Art

The "Smiley Outline Mirror Art" project generates an abstract version of a 
smiley face using geometric patterns.

- **Features**:
  - Quadrant-based mirroring to achieve symmetry across the canvas.
  - Randomized alternation between ellipses and rectangles to create 
abstract eyes and surrounding features.
  - Specific attention to the eye areas to ensure an easily recognizable 
motif.

- **Core Concepts**:
  - Abstracted face generation using geometric patterns.
  - Quadrant-based symmetry to produce a visually balanced art piece.

- _(Full code is available in `smiley_outline.js`)_

### 3. Stippling Image Conversion

The "Stippling Image Conversion" project is designed to convert any PNG or 
JPG image into an intricate SVG representation using stippling techniques. 
It is particularly suitable for creating ultra-detailed, line-based 
visuals for graphic arts.

- **Features**:
  - Conversion of images to grayscale and generates SVG files based on 
pixel intensity.
  - Configurable parameters for dot size, density, and output resolution.
  - Hyper-detail level, allowing for a very close representation of the 
original image’s contours.

- **Core Concepts**:
  - SVG generation using `svgwrite`.
  - Algorithmic stippling with configurable detail and scaling options.

- _(Full code is available in `stippling_converter.py`)_

## Instructions

### Clone the Repository:
```bash
git clone https://github.com/pcguest/Generative-Art-Practices.git
cd Generative-Art-Practices

