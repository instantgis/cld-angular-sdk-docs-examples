import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { fill } from "@cloudinary/url-gen/actions/resize";

@Component({
  selector: "quickstart-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class QuickstartComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Crop an image to a square, as shown in the ";
  link = "https://cloudinary.com/documentation/angular_quick_start";
  heading = " Quick start guide";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    this.img = cld.image("docs/models");

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(250));
  }
}
