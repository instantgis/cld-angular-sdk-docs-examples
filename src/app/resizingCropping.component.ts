import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

@Component({
  selector: "resizing-cropping-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class ResizingCroppingComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Crop an image to keep the faces, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#resizing_and_cropping";
  heading = "Resizing and cropping";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'family_bench'.
    this.img = cld.image("family_bench");

    // Apply the transformation.
    this.img.resize(
      fill().width(250).height(250).gravity(focusOn(FocusOn.faces()))
    );
  }
}
