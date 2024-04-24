import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import required actions.
import { sepia } from "@cloudinary/url-gen/actions/effect";

@Component({
  selector: "quick-example-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class QuickExampleComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Apply a sepia effect, as shown in the ";
  link =
    "https://cloudinary.com/documentation/angular_integration#quick_example";
  heading = "Quick example";

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
    this.img.effect(sepia()); // Apply a sepia effect.
  }
}
