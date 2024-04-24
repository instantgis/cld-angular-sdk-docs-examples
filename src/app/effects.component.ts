import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import required actions.
import { scale } from "@cloudinary/url-gen/actions/resize";
import { outline, cartoonify } from "@cloudinary/url-gen/actions/effect";
import { max } from "@cloudinary/url-gen/actions/roundCorners";

// Import required qualifiers.
import { outer } from "@cloudinary/url-gen/qualifiers/outlineMode";

@Component({
  selector: "effects-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class EffectsComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Apply various transformations, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#applying_image_effects_and_filters";
  heading = "Applying image effects and filters";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'actor'.
    this.img = cld.image("actor");

    // Apply the transformation.
    this.img
      .effect(cartoonify())
      .roundCorners(max())
      .effect(outline().mode(outer()).width(100).color("lightblue"))
      .backgroundColor("lightblue")
      .resize(scale().height(300));
  }
}
