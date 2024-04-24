import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";

// Import required actions.
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { sepia } from "@cloudinary/url-gen/actions/effect";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { opacity, brightness } from "@cloudinary/url-gen/actions/adjust";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";

// Import required qualifiers.
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { southEast } from "@cloudinary/url-gen/qualifiers/compass";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

@Component({
  selector: "full-example-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class FullExampleComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Apply a range of transformations, as shown in the ";
  link =
    "https://cloudinary.com/documentation/angular_integration#full_example";
  heading = "Full example";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'front_face'.
    this.img = cld.image("front_face");

    // Apply the transformation.
    this.img
      .resize(
        thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
      ) // Crop the image.
      .roundCorners(byRadius(20)) // Round the corners.
      .effect(sepia()) // Apply a sepia effect.
      .overlay(
        // Overlay the Cloudinary logo.
        source(
          image("cloudinary_icon_blue").transformation(
            new Transformation()
              .resize(scale(50)) // Resize the logo.
              .adjust(opacity(60)) // Adjust the opacity of the logo.
              .adjust(brightness(200))
          ) // Adjust the brightness of the logo.
        ).position(
          new Position().gravity(compass(southEast())).offsetX(5).offsetY(5)
        ) // Position the logo.
      )
      .rotate(byAngle(10)) // Rotate the result.
      .format("png"); // Deliver as PNG. */
  }
}
