// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import the plugins you want to use.
import { accessibility } from "@cloudinary/ng";

@Component({
  selector: "accessibility-image",
  templateUrl: "./plugins.component.html",
  styleUrls: ["./app.component.css"]
})
export class AccessibilityComponent implements OnInit {
  img!: CloudinaryImage;

  title =
    "Use the accessibility plugin to help color blind viewers, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#image_accessibility";
  heading = "Image accessibility";

  // Use the accessibility plugin
  plugins = [accessibility({ mode: "colorblind" })];

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the image with public ID, 'docs/piechart'.
    this.img = cld.image("docs/piechart");
  }
}
