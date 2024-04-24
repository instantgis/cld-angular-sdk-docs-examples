// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import the plugins you want to use.
import {
  accessibility,
  responsive,
  lazyload,
  placeholder
} from "@cloudinary/ng";

@Component({
  selector: "plugins-image",
  templateUrl: "./plugins.component.html",
  styleUrls: ["./app.component.css"]
})
export class PluginsComponent implements OnInit {
  img!: CloudinaryImage;

  title =
    "Use all the plugins (lazyload, responsive, accessibility, placeholder), as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#plugins";
  heading = "Plugins";

  // Use the lazyload, responsive and accessibility and placeholder plugins
  plugins = [lazyload(), responsive(), accessibility(), placeholder()];

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the image with public ID, 'docs/colored_pencils'.
    this.img = cld.image("docs/colored_pencils");
  }
}
