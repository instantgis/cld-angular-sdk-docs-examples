import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

@Component({
  selector: "image-optimizations-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class ImageOptimizationsComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Apply automatic format and quality, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#image_optimizations";
  heading = "Image optimizations";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'pond_reflect'.
    this.img = cld.image("pond_reflect");

    // Request automatic format and quality.
    this.img.format("auto").quality("auto");
  }
}
