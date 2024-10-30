import svgwrite
from PIL import Image, ImageOps
import numpy as np
import sys

def generate_stippled_svg(input_image_path, output_svg_path, 
dot_min_radius=0.05, dot_max_radius=0.5, density_factor=0.95, 
output_size=(600, 600)):
    """
    Convert an input image (PNG/JPG) to a hyper-detailed stippled SVG 
file.

    Parameters:
    - input_image_path (str): Path to the input image (PNG or JPG).
    - output_svg_path (str): Path to save the output SVG file.
    - dot_min_radius (float): Minimum radius of dots in the SVG.
    - dot_max_radius (float): Maximum radius of dots in the SVG.
    - density_factor (float): Controls density of dots (higher value = 
more dots).
    - output_size (tuple): Size (width, height) to resize the image for 
SVG processing.
    """
    # Load and process the image
    image = Image.open(input_image_path)
    gray_image = ImageOps.grayscale(image).resize(output_size)
    image_data = np.array(gray_image)

    # Create SVG
    dwg = svgwrite.Drawing(output_svg_path, size=output_size)

    # Stippling process with hyper-detail settings
    for y in range(image_data.shape[0]):
        for x in range(image_data.shape[1]):
            intensity = image_data[y, x] / 255  # Normalize intensity 
(0-1)
            if intensity < 1:
                dot_radius = dot_min_radius + (1 - intensity) * 
(dot_max_radius - dot_min_radius)
                # Apply density factor to place dots based on intensity
                if np.random.rand() < density_factor * (1 - intensity):
                    dwg.add(dwg.circle(center=(x, y), r=dot_radius, 
fill='black'))

    # Save the SVG file
    dwg.save()
    print(f"SVG file saved as: {output_svg_path}")

if __name__ == "__main__":
    # Usage example: python stippling_converter.py input_image.png 
output_image.svg
    if len(sys.argv) < 3:
        print("Usage: python stippling_converter.py <input_image_path> 
<output_svg_path>")
    else:
        input_image_path = sys.argv[1]
        output_svg_path = sys.argv[2]

        # Run the conversion with hyper-detail parameters
        generate_stippled_svg(input_image_path, output_svg_path)

