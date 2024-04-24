import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { scale } from "@cloudinary/url-gen/actions/resize";

@Component({
  selector: "transforming-your-image-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class TransformingYourImageComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Scale an image to a width of 400 pixels, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#transforming_your_image";
  heading = "Transforming your image";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'bike'.
    this.img = cld.image("bike");

    // Scale the image to a width of 400 pixels.
    this.img.resize(scale().width(400));
  }
}
