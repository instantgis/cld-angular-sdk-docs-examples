import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

@Component({
  selector: "auto-gravity-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class AutoGravityComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Crop an image to keep the most interesting part, as shown in ";
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

    // Instantiate a CloudinaryImage object for the image with the public ID, 'basketball_in_net'.
    this.img = cld.image("basketball_in_net");
    this.img.resize(fill().width(200).height(300).gravity(autoGravity()));
  }
}
