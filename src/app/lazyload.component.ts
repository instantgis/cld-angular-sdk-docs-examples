// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import the plugins you want to use.
import { lazyload } from "@cloudinary/ng";

@Component({
  selector: "lazyload-image",
  templateUrl: "./plugins.component.html",
  styleUrls: ["./app.component.css"]
})
export class LazyloadComponent implements OnInit {
  img!: CloudinaryImage;

  title =
    "Use the lazyload plugin to delay loading the image until it reaches the viewport, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#lazy_loading";
  heading = "Lazy loading";

  // Use the lazyload plugin
  plugins = [lazyload({ rootMargin: "10px 20px 10px 30px", threshold: 0.25 })];

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the image with public ID, 'flowers'.
    this.img = cld.image("flowers");
  }
}
