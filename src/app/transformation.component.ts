import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

@Component({
  selector: "transformation-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class TransformationComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Apply a thumbnail crop with rounded corners, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#image_transformations_with_angular";
  heading = "Image transformations with Angular";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Use the image with public ID, 'front_face'.
    this.img = cld.image("front_face");

    // Apply the transformation.
    this.img
      .resize(
        thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
      ) // Crop the image, focusing on the face.
      .roundCorners(byRadius(20)); // Round the corners.
  }
}
