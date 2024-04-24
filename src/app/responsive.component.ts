// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import the plugins you want to use.
import { responsive } from "@cloudinary/ng";

@Component({
  selector: "responsive-image",
  templateUrl: "./plugins.component.html",
  styleUrls: ["./app.component.css"]
})
export class ResponsiveComponent implements OnInit {
  img!: CloudinaryImage;

  title =
    "Use the responsive plugin to request the best size of image for the viewport, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#responsive_images";
  heading = "Responsive images";

  // Use the responsive plugin
  plugins = [responsive({ steps: [800, 1000, 1400] })];

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the image with public ID, 'sample'.
    this.img = cld.image("sample");
  }
}
