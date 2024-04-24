// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import the plugins you want to use.
import { lazyload, placeholder } from "@cloudinary/ng";

@Component({
  selector: "lazyload-placeholder-image",
  templateUrl: "./plugins.component.html",
  styleUrls: ["./app.component.css"]
})
export class LazyloadPlaceholderComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Combine the lazyload and placeholder plugins, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#example_2_combine_lazy_loading_with_a_placeholder";
  heading = "Lazyload and placeholder";

  // Use the placeholder plugin
  plugins = [lazyload(), placeholder({ mode: "predominant-color" })];

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the image with public ID, 'brown_sheep'.
    this.img = cld.image("brown_sheep");
  }
}
