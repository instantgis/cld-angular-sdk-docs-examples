// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import the plugins you want to use.
import { placeholder } from "@cloudinary/ng";

@Component({
  selector: "placeholder-image",
  templateUrl: "./plugins.component.html",
  styleUrls: ["./app.component.css"]
})
export class PlaceholderComponent implements OnInit {
  img!: CloudinaryImage;

  title =
    "Use the placeholder plugin to show a blurred image while the image loads, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#image_placeholders";
  heading = "Image placeholders";

  // Use the placeholder plugin
  plugins = [placeholder({ mode: "blur" })];

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the image with public ID, 'docs/grizzly'.
    this.img = cld.image("docs/grizzly");
  }
}
