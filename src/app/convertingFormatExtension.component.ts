import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

@Component({
  selector: "converting-format-extension-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class ConvertingFormatExtensionComponent implements OnInit {
  img!: CloudinaryImage;

  title =
    "Deliver a .jpg file in .gif format by changing the extension, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#converting_format_example1a";
  heading = "Converting to another image format";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/shoes'.
    this.img = cld.image("docs/shoes.gif");
  }
}
